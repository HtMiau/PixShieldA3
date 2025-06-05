package com.example.apipix.controller;

import java.awt.image.BufferedImage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.apipix.dto.PixRequest;
import com.example.apipix.dto.PixResponse;
import com.example.apipix.model.Cliente;
import com.example.apipix.model.TransacaoPix;
import com.example.apipix.model.LogTransacao;
import com.example.apipix.model.TransacaoFraudulenta;
import com.example.apipix.model.NivelRisco;
import com.example.apipix.model.StatusFraude;
import com.example.apipix.repository.RepositorioCliente;
import com.example.apipix.repository.RepositorioTransacao;
import com.example.apipix.service.FraudeService;
import com.example.apipix.service.IAResponse;
import com.example.apipix.service.IAService;
import com.example.apipix.service.LogTransacaoService;
import com.example.apipix.util.ClientePixHttp;

@RestController
@RequestMapping("/api/pix")
public class PixController {

    @Autowired
    private RepositorioCliente repositorioClienteInterno;

    @Autowired
    private RepositorioTransacao repositorioTransacaoInterno;

    @Autowired
    private IAService iaService;

    @Autowired
    private LogTransacaoService logTransacaoService;

    @Autowired
    private FraudeService fraudeService;

    @PostMapping
    public ResponseEntity<PixResponse> gerarPix(@RequestBody PixRequest request) throws Exception {

        Long clienteId = request.getClienteId();
        if (clienteId == null) {
            throw new RuntimeException("ID do cliente é obrigatório");
        }

        // Recuperar cliente
        Cliente cliente = repositorioClienteInterno.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        String chavePixDestino = request.getChavePixDestino();
        if (chavePixDestino == null || chavePixDestino.isEmpty()) {
            throw new RuntimeException("Chave Pix de destino é obrigatória");
        }

        // Gerar código Pix
        String codigoPix = ClientePixHttp.gerarCodigoPix(
                chavePixDestino,
                cliente.getNome(),
                "SAO PAULO",
                request.getValor()
        );

        // Gerar QR Code e converter
        BufferedImage qrCode = ClientePixHttp.gerarQrCode(codigoPix);
        String base64Qr = ClientePixHttp.converterImagemParaBase64(qrCode);

        // Criar transação
        TransacaoPix transacao = new TransacaoPix();
        transacao.setRemetente(cliente);
        transacao.setDestinatario(cliente);
        transacao.setValor(request.getValor());
        transacao.setChaveDestino(chavePixDestino);
        transacao.setDescricao("Transação Pix gerada com sucesso.");
        transacao.setDataHora(java.time.LocalDateTime.now());
        transacao.setTipoChave(TransacaoPix.TipoChave.ALEATORIA);

        // Salvar transação
        TransacaoPix transacaoSalva = repositorioTransacaoInterno.save(transacao);

        // 🔹 Chamar serviço de IA para análise da transação
        IAResponse iaResult = (IAResponse) iaService.analisarTransacao(transacaoSalva);

        // 🔹 Registrar log da transação
        LogTransacao log = new LogTransacao();
        log.setTransactionId(transacaoSalva.getId().toString());
        log.setResultadoAnalise(iaResult.getAcaoTomada());
        log.setPontuacaoRisco(iaResult.getPontuacaoRisco());
        log.setAcaoTomada(iaResult.getAcaoTomada());
        log.setDetalhesJson(iaResult.getDetalhesJson());
        logTransacaoService.registrar(log);

        // 🔹 Se for identificado risco de fraude, registrar
        if (iaResult.isFraude()) {
            TransacaoFraudulenta fraude = new TransacaoFraudulenta();
            fraude.setTransactionId(transacaoSalva.getId().toString());
            fraude.setRemetenteId(cliente.getId());
            fraude.setDestinatarioId(cliente.getId());
            fraude.setValor(transacaoSalva.getValor());
            fraude.setPontuacaoRisco(iaResult.getPontuacaoRisco());

            // Ajuste conforme regra de negócio ou resposta da IA
            fraude.setNivelRisco(NivelRisco.ALTO);
            fraude.setAlertas(iaResult.getDetalhesJson());
            fraude.setStatus(StatusFraude.DETECTADA);

            fraudeService.registrar(fraude);
        }

        // Criar resposta
        PixResponse response = new PixResponse(
                codigoPix,
                base64Qr,
                "Transação Pix realizada com sucesso.",
                chavePixDestino
        );

        return ResponseEntity.ok(response);
    }
}




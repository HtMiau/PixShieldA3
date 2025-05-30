package com.example.apipix.controller;

import java.awt.image.BufferedImage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.apipix.dto.PixRequest;
import com.example.apipix.dto.PixResponse;
import com.example.apipix.model.Cliente;
import com.example.apipix.model.TransacaoPix;
import com.example.apipix.repository.RepositorioCliente;
import com.example.apipix.repository.RepositorioTransacao;
import com.example.apipix.util.ClientePixHttp;

@RestController
@RequestMapping("/api/pix")
public class PixController {

    @Autowired
    private RepositorioCliente repositorioClienteInterno;

    @Autowired
    private RepositorioTransacao repositorioTrasacaoInterno;

    @PostMapping
    public ResponseEntity<PixResponse> gerarPix(@RequestBody PixRequest request) throws Exception {
        
        Long clienteId = request.getClienteId();
        if (clienteId == null) {
            throw new RuntimeException("ID do cliente é obrigatório");
        }

        // Recuperar cliente
        Cliente cliente = repositorioClienteInterno.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        // Usar chave de destino do JSON
        String chavePixDestino = request.getChavePixDestino();
        if (chavePixDestino == null || chavePixDestino.isEmpty()) {
            throw new RuntimeException("Chave Pix de destino é obrigatória");
        }

        // Gerar código Pix com a chave de destino
        String codigoPix = ClientePixHttp.gerarCodigoPix(
                chavePixDestino,
                cliente.getNome(),
                "SAO PAULO",
                request.getValor()
        );

        // Gerar QR Code
        BufferedImage qrCode = ClientePixHttp.gerarQrCode(codigoPix);

        // Converter para Base64
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

        repositorioTrasacaoInterno.save(transacao);

        PixResponse response = new PixResponse(
        	    codigoPix,
        	    base64Qr,
        	    "Transação Pix realizada com sucesso.",
        	    chavePixDestino
        	);


        return ResponseEntity.ok(response);
    }
}






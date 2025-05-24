package com.example.apipix.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.util.Base64;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.apipix.dto.PixRequest;
import com.example.apipix.dto.PixResponse;
import com.example.apipix.model.Cliente;
import com.example.apipix.model.TransacaoPix;
import com.example.apipix.repository.RepositorioCliente;
import com.example.apipix.repository.RepositorioTrasacao;
import com.example.apipix.util.PixInicio;

@RestController
@RequestMapping("/api/pix")
public class PixController {

    
    @Autowired
    private RepositorioCliente repositorioClienteInterno;


    @Autowired
    private RepositorioTrasacao repositorioTrasacaoInterno;

    @PostMapping
    public ResponseEntity<PixResponse> gerarPix(@RequestBody PixRequest request) throws Exception {
        Long clienteId = request.getClienteId();
        if (clienteId == null) {
            throw new RuntimeException("ID do cliente é obrigatório");
        }
        
        Cliente cliente = repositorioClienteInterno.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        String codigoPix = PixInicio.gerarCodigoPix("suachave@pix.com", cliente.getNome(), "SAO PAULO", request.getValor());
        BufferedImage qrCode = PixInicio.gerarQrCode(codigoPix);

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(qrCode, "png", baos);
        String base64Qr = Base64.getEncoder().encodeToString(baos.toByteArray());

        TransacaoPix transacao = new TransacaoPix();
        transacao.setCliente(cliente);
        transacao.setValor(request.getValor());
        transacao.setCodigoPix(codigoPix);
        repositorioTrasacaoInterno.save(transacao);

        return ResponseEntity.ok(new PixResponse(codigoPix, base64Qr, "Transação Pix gerada com sucesso."));
    }
}




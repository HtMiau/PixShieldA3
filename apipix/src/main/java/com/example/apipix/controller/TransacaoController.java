package com.example.apipix.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.example.apipix.dto.TransacaoRequest;
import com.example.apipix.dto.AnaliseResponse;

@RestController
@RequestMapping("/api/transacoes")
public class TransacaoController {

    @Autowired
    private RestTemplate restTemplate;

    @PostMapping("/analisar")
    public ResponseEntity<AnaliseResponse> analisarTransacao(@RequestBody TransacaoRequest request) {
        // Prepara os dados para enviar ao N8N
        Map<String, Object> dadosAnalise = new HashMap<>();
        dadosAnalise.put("valor", request.getValor());
        dadosAnalise.put("chaveDestino", request.getChaveDestino());
        dadosAnalise.put("tipoChave", request.getTipoChave());
        dadosAnalise.put("descricao", request.getDescricao());
        dadosAnalise.put("remetenteId", request.getRemetenteId());
        dadosAnalise.put("destinatarioId", request.getDestinatarioId());

        // Verifica se dataHora foi enviada, caso contrário usa a atual
        if (request.getDataHora() != null && !request.getDataHora().isEmpty()) {
            dadosAnalise.put("dataHora", request.getDataHora());
        } else {
            dadosAnalise.put("dataHora", LocalDateTime.now());
        }

        // Envia para o N8N
        String n8nUrl = "https://abraaoia.app.n8n.cloud/webhook-test/pix-transaction";
        System.out.println("Enviando dados para o N8N: " + dadosAnalise);
        AnaliseResponse resposta = restTemplate.postForObject(n8nUrl, dadosAnalise, AnaliseResponse.class);
        System.out.println("Resposta do N8N: " + resposta);

        return ResponseEntity.ok(resposta);
    }
}




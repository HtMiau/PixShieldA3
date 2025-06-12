package com.example.apipix.controller;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

public class WebhookCliente{

    public static void main(String[] args) {
        String webhookUrl = "https://abraaoia.app.n8n.cloud/webhook-test/pix-transaction";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> payload = new HashMap<>();
        payload.put("valor", 6000);
        payload.put("chaveDestino", "123412341");
        payload.put("tipoChave", "EMAIL");
        payload.put("descricao", "Pagamento de serviço");
        payload.put("remetenteId", "1");
        payload.put("destinatarioId", "2");
        payload.put("dataHora", LocalDateTime.now().toString());

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(webhookUrl, request, String.class);

        System.out.println("Resposta do n8n: " + response.getBody());
    }
}

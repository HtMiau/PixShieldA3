package com.example.apipix.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.apipix.model.TransacaoPix;



@Service
public class IAService {

    // ✅ Removemos o RestTemplate e o @Value, não são necessários para o Mock
    // private final RestTemplate restTemplate = new RestTemplate();

    public IAResponse analisarTransacao(TransacaoPix transacao) {
        // ✅ MOCK SIMPLES → substitui a chamada HTTP para a IA
        return new IAResponse(
            true,                         // fraude
            15,                            // pontuacaoRisco
            "Aprovada",                    // acaoTomada
            "{\"nivel\": \"baixo\"}"       // detalhesJson
        );
    }
}


  //@Service

      //@Value("${ia.api.url}")
     // private String iaApiUrl;

      //private final RestTemplate restTemplate = new RestTemplate();

      //public IAResponse analisarTransacao(TransacaoPix transacao) {
          //HttpEntity<TransacaoPix> request = new HttpEntity<>(transacao);

         // ResponseEntity<IAResponse> response = restTemplate.postForEntity(
            //  iaApiUrl,
            //  request,
            //  IAResponse.class
         // );
  //
         // return response.getBody();
      //}
  //}




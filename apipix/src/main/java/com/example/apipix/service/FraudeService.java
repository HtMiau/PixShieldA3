package com.example.apipix.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.apipix.model.TransacaoFraudulenta;
import com.example.apipix.repository.RepositorioTransacaoFraudulenta;

@Service
public class FraudeService {

    @Autowired
    private RepositorioTransacaoFraudulenta repositorio;

    public void registrar(TransacaoFraudulenta transacao) {
        repositorio.save(transacao);
    }
}


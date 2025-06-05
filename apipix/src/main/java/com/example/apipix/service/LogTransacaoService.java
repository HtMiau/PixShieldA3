package com.example.apipix.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.apipix.model.LogTransacao;
import com.example.apipix.repository.RepositorioLogTransacao;

@Service
public class LogTransacaoService {

    @Autowired
    private RepositorioLogTransacao repositorio;

    public void registrar(LogTransacao log) {
        repositorio.save(log);
    }
}


package com.example.apipix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.apipix.model.TransacaoFraudulenta;

@Repository
public interface RepositorioTransacaoFraudulenta extends JpaRepository<TransacaoFraudulenta, Integer> {
}


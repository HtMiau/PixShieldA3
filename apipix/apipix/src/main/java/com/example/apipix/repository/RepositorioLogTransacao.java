package com.example.apipix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.apipix.model.LogTransacao;

@Repository
public interface RepositorioLogTransacao extends JpaRepository<LogTransacao, Integer> {
}

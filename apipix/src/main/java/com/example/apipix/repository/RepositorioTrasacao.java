package com.example.apipix.repository;

import com.example.apipix.model.TransacaoPix;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioTrasacao extends JpaRepository<TransacaoPix, Long> {
}

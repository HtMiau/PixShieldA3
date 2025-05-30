package com.example.apipix.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.apipix.model.Cliente;

@Repository
public interface RepositorioCliente extends JpaRepository<Cliente, Long> {
    Optional<Cliente> findByCpf(String cpf);
}


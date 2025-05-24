package com.example.apipix.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.apipix.model.Cliente;
import com.example.apipix.repository.RepositorioCliente;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private RepositorioCliente repositorioCliente;

    @PostMapping
    public ResponseEntity<Cliente> criarCliente(@RequestBody Cliente cliente) {
        Cliente salvo = repositorioCliente.save(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

    @GetMapping
    public List<Cliente> listarClientes() {
        return repositorioCliente.findAll();
    }
}

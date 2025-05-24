package com.example.apipix.dto;

import java.math.BigDecimal;

public class PixRequest {

    private Long clienteId;
    private BigDecimal valor;

    public PixRequest() {
        // Construtor padrão obrigatório para desserialização JSON
    }

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }
}


	
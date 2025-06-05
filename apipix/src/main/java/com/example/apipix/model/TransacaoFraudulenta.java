package com.example.apipix.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.example.apipix.model.NivelRisco;
import com.example.apipix.model.StatusFraude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "transacoes_fraudulentas")
public class TransacaoFraudulenta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String transactionId;
    private Long remetenteId;
    private Long destinatarioId;
    private BigDecimal valor;
    private Integer pontuacaoRisco;

    @Enumerated(EnumType.STRING)
    private NivelRisco nivelRisco;

    @Column(columnDefinition = "json")
    private String alertas;

    @CreationTimestamp
    private LocalDateTime dataDeteccao;

    @Enumerated(EnumType.STRING)
    private StatusFraude status;

    // Getters e Setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public Long getRemetenteId() {
        return remetenteId;
    }

    public void setRemetenteId(Long remetenteId) {
        this.remetenteId = remetenteId;
    }

    public Long getDestinatarioId() {
        return destinatarioId;
    }

    public void setDestinatarioId(Long destinatarioId) {
        this.destinatarioId = destinatarioId;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Integer getPontuacaoRisco() {
        return pontuacaoRisco;
    }

    public void setPontuacaoRisco(Integer pontuacaoRisco) {
        this.pontuacaoRisco = pontuacaoRisco;
    }

    public NivelRisco getNivelRisco() {
        return nivelRisco;
    }

    public void setNivelRisco(NivelRisco nivelRisco) {
        this.nivelRisco = nivelRisco;
    }

    public String getAlertas() {
        return alertas;
    }

    public void setAlertas(String alertas) {
        this.alertas = alertas;
    }

    public LocalDateTime getDataDeteccao() {
        return dataDeteccao;
    }

    public void setDataDeteccao(LocalDateTime dataDeteccao) {
        this.dataDeteccao = dataDeteccao;
    }

    public StatusFraude getStatus() {
        return status;
    }

    public void setStatus(StatusFraude status) {
        this.status = status;
    }
}



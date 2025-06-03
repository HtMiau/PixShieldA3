package com.example.apipix.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "log_transacoes")
public class LogTransacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String transactionId;
    private String resultadoAnalise;
    private Integer pontuacaoRisco;
    private String acaoTomada;

    @Column(columnDefinition = "json")
    private String detalhesJson;

    @CreationTimestamp
    private LocalDateTime timestampLog;

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

    public String getResultadoAnalise() {
        return resultadoAnalise;
    }

    public void setResultadoAnalise(String resultadoAnalise) {
        this.resultadoAnalise = resultadoAnalise;
    }

    public Integer getPontuacaoRisco() {
        return pontuacaoRisco;
    }

    public void setPontuacaoRisco(Integer pontuacaoRisco) {
        this.pontuacaoRisco = pontuacaoRisco;
    }

    public String getAcaoTomada() {
        return acaoTomada;
    }

    public void setAcaoTomada(String acaoTomada) {
        this.acaoTomada = acaoTomada;
    }

    public String getDetalhesJson() {
        return detalhesJson;
    }

    public void setDetalhesJson(String detalhesJson) {
        this.detalhesJson = detalhesJson;
    }

    public LocalDateTime getTimestampLog() {
        return timestampLog;
    }

    public void setTimestampLog(LocalDateTime timestampLog) {
        this.timestampLog = timestampLog;
    }
}





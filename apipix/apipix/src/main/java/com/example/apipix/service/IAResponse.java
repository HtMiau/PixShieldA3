package com.example.apipix.service;

public class IAResponse {

    private boolean fraude;
    private int pontuacaoRisco;
    private String acaoTomada;
    private String detalhesJson;

    // Construtor vazio (necessário para deserialização do JSON)
    public IAResponse() {
    }

    //Construtor completo
    public IAResponse(boolean fraude, int pontuacaoRisco, String acaoTomada, String detalhesJson) {
        this.fraude = fraude;
        this.pontuacaoRisco = pontuacaoRisco;
        this.acaoTomada = acaoTomada;
        this.detalhesJson = detalhesJson;
    }

    //Getters e Setters
    public boolean isFraude() {
        return fraude;
    }

    public void setFraude(boolean fraude) {
        this.fraude = fraude;
    }

    public int getPontuacaoRisco() {
        return pontuacaoRisco;
    }

    public void setPontuacaoRisco(int pontuacaoRisco) {
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
}



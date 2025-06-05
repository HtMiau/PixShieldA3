package com.example.apipix.dto;

public class AnaliseResponse {

    private String status;           
    private String mensagem;         
    private String risco;           
    private double pontuacaoRisco;   
    private String recomendacao;    

    public AnaliseResponse() {
    }

    // Getters e Setters
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getRisco() {
        return risco;
    }

    public void setRisco(String risco) {
        this.risco = risco;
    }

    public double getPontuacaoRisco() {
        return pontuacaoRisco;
    }

    public void setPontuacaoRisco(double pontuacaoRisco) {
        this.pontuacaoRisco = pontuacaoRisco;
    }

    public String getRecomendacao() {
        return recomendacao;
    }

    public void setRecomendacao(String recomendacao) {
        this.recomendacao = recomendacao;
    }
}

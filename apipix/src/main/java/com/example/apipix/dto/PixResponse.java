package com.example.apipix.dto;

public class PixResponse {

    private String codigoPix;
    private String base64Qr;
    private String mensagem;
    private String chaveDestino;

    public PixResponse(String codigoPix, String base64Qr, String mensagem, String chaveDestino) {
        this.codigoPix = codigoPix;
        this.base64Qr = base64Qr;
        this.mensagem = mensagem;
        this.chaveDestino = chaveDestino;
    }

    // Getters e Setters
    public String getCodigoPix() {
        return codigoPix;
    }

    public void setCodigoPix(String codigoPix) {
        this.codigoPix = codigoPix;
    }

    public String getBase64Qr() {
        return base64Qr;
    }

    public void setBase64Qr(String base64Qr) {
        this.base64Qr = base64Qr;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public String getChaveDestino() {
        return chaveDestino;
    }

    public void setChaveDestino(String chaveDestino) {
        this.chaveDestino = chaveDestino;
    }
}
 







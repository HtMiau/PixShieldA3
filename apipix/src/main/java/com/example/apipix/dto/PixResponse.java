package com.example.apipix.dto;

public class PixResponse {
    public String codigoPix;
    public String qrCodeBase64;
    public String mensagem;

    public PixResponse(String codigoPix, String qrCodeBase64, String mensagem) {
        this.codigoPix = codigoPix;
        this.qrCodeBase64 = qrCodeBase64;
        this.mensagem = mensagem;
    }
}




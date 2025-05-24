package com.example.apipix.util;

import java.awt.image.BufferedImage;
import java.math.BigDecimal;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;

public class PixInicio {

    public static String gerarCodigoPix(String chave, String nome, String cidade, BigDecimal valor) {
        if (chave == null || nome == null || cidade == null || valor == null) {
            throw new IllegalArgumentException("Parâmetros inválidos para gerar o código Pix.");
        }

        String payload = "000201"
                + "26" + String.format("%02d", chave.length() + 4) + "0014BR.GOV.BCB.PIX01" + String.format("%02d", chave.length()) + chave
                + "52040000"
                + "5303986"
                + "54" + String.format("%02d", valor.toString().length()) + valor.toString().replace(",", ".")
                + "5802BR"
                + "59" + String.format("%02d", nome.length()) + nome
                + "60" + String.format("%02d", cidade.length()) + cidade
                + "6304"; // CRC é opcional para testes

        return payload;
    }

    public static BufferedImage gerarQrCode(String texto) throws Exception {
        if (texto == null || texto.isEmpty()) {
            throw new IllegalArgumentException("Texto para gerar o QR Code está vazio ou nulo.");
        }

        BitMatrix matrix = new MultiFormatWriter().encode(texto, BarcodeFormat.QR_CODE, 300, 300);
        return MatrixToImageWriter.toBufferedImage(matrix);
    }
}



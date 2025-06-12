package com.example.apipix.util;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Base64;

import javax.imageio.ImageIO;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.client.j2se.MatrixToImageWriter;

public class ClientePixHttp {

    public static void main(String[] args) {
      try {
            // URL da sua API
          URL url = new URL("http://localhost:8080/api/pix");
          HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //Configurações da requisição
           conn.setRequestMethod("POST");
           conn.setDoOutput(true);
           conn.setRequestProperty("Content-Type", "application/json");

            // JSON de entrada
           String jsonInputString = "{\"clienteId\":1,\"valor\":250.00}";

            // Enviando o JSON
            try (OutputStream os = conn.getOutputStream()) {
             byte[] input = jsonInputString.getBytes("utf-8");
            os.write(input, 0, input.length);
           }

          //  // Código de resposta
          int code = conn.getResponseCode();
          System.out.println("Resposta: " + code);

            // Se quiser ler a resposta, descomente abaixo:
            /*
            try (BufferedReader br = new BufferedReader(
                    new InputStreamReader(conn.getInputStream(), "utf-8"))) {
                StringBuilder response = new StringBuilder();
                String responseLine;
                while ((responseLine = br.readLine()) != null) {
                    response.append(responseLine.trim());
                }
                System.out.println("Resposta completa: " + response.toString());
            }
            */

       } catch (Exception e) {
         e.printStackTrace();
     }
 }

    //Método para gerar código Pix
    public static String gerarCodigoPix(String chavePix, String nome, String cidade, BigDecimal valor) {
        String valorFormatado = String.format("%.2f", valor);
        // Simulação de código Pix conforme padrão BR Code
        String codigoPix = "00020126360014BR.GOV.BCB.PIX0114" + chavePix +
                "5204000053039865802BR5913" + nome +
                "6009" + cidade +
                "540" + valorFormatado +
                "6304ABCD";  // Código de verificação fictício
        return codigoPix;
    }

   //Método para gerar QR Code a partir do código Pix
    public static BufferedImage gerarQrCode(String codigoPix) {
        try {
            BitMatrix matrix = new MultiFormatWriter().encode(
                    codigoPix,
                    BarcodeFormat.QR_CODE,
                    300,
                    300
            );
            return MatrixToImageWriter.toBufferedImage(matrix); 
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    //Método para converter BufferedImage em Base64
    public static String converterImagemParaBase64(BufferedImage image) {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(image, "png", baos);
            byte[] bytes = baos.toByteArray();
            return Base64.getEncoder().encodeToString(bytes);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}




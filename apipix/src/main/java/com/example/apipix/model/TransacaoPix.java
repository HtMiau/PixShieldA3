package com.example.apipix.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class TransacaoPix {


	    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private BigDecimal valor;

	    @ManyToOne
	    private Cliente cliente;

	    private String codigoPix;

		public void setCliente(Cliente cliente2) {	
			
		}

		public void setValor(BigDecimal valor2) {
			
		}

		public void setCodigoPix(String codigoPix2) {
		
		}

		public static void save(TransacaoPix transacao) {
			
		}
}


	
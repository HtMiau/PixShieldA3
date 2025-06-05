// src/types/pix.ts
export interface PixRequest {
    clienteId: number
    chavePixDestino: string
    valor: number
}

export interface PixResponse {
    codigoPix:   string
    base64Qr:    string
    mensagem:    string
    chaveDestino: string
}

export interface IAResponse {
    fraude: boolean;
    pontuacao: number;
    acaoTomada: string;
}

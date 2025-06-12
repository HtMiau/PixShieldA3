// POST /types/pix
export interface PixRequest {
    clienteId: number;
    valor: number;            // usar string se quiser manter precisão exata
    chavePixDestino: string;
}
export interface PixResponse {
    codigoPix: string;        // pode exibir ou salvar
    base64Qr: string;         // img src="data:image/png;base64,{base64Qr}"
    mensagem: string;
    chaveDestino: string;
}

// Payload que o back pede
export interface TransacaoRequest {
    valor: string;              // "100.00"
    chaveDestino: string;
    tipoChave: 'CPF' | 'EMAIL' | 'TELEFONE' | 'ALEATORIA';
    descricao: string;
    remetenteId: number;
    destinatarioId: number;
    dataHora: string;           // ISO local → 2025-06-12T23:05:00
}

// Resposta que o back devolve
export interface AnaliseResponse {
    success: boolean;
    transaction_id: string;
    fraude_detectada: boolean;
    nivel_risco: 'BAIXO' | 'MÉDIO' | 'ALTO';
    acao_recomendada: 'LIBERAR' | 'ALERTAR' | 'BLOQUEAR';
    pontuacao_risco: number;
    alertas: string;    // JSON-string
    mensagem: string;
}



// POST /api/clientes
export interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    dataNascimento: string;   // ISO
}

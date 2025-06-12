//services/pixService.ts

import axios from 'axios';
import type { TransacaoRequest, AnaliseResponse } from '@/types/pix';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080/api',
});

export const analisarTransacao = async (payload: TransacaoRequest) =>
    api.post<AnaliseResponse>('/transacoes/analisar', payload).then(r => r.data);

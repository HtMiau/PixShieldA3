// src/services/pixService.ts
import axios from 'axios'
import type { PixRequest, PixResponse } from '@/types/pix'

const api = axios.create({ baseURL: 'http://localhost:8080/api' })

export const gerarPix = async (dados: PixRequest): Promise<PixResponse> => {
    const res = await api.post<PixResponse>('/pix', dados, {
        headers: { 'Content-Type': 'application/json' },
    })
    return res.data
}

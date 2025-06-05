// src/pages/GerarPix.tsx
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { gerarPix } from '@/services/pixService'
import type { PixRequest, PixResponse } from '@/types/pix'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Warning, WarningCircle} from "@phosphor-icons/react";

export default function GerarPix() {
    // **clienteId agora é string**, para filtrar caracteres
    const [clienteId, setClienteId]       = useState<string>("1")
    const [chaveDestino, setChaveDestino] = useState<string>("123412341234@pix")
    const [valor, setValor]               = useState<number>(100)
    const [contaSuspeita, setContaSuspeita] = useState(true)
    const [qr, setQr]   = useState<string>("")
    const [msg, setMsg] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    // converte a string de clienteId em número na hora de enviar
    const enviar = async (e: React.FormEvent) => {
        e.preventDefault()

        // validações básicas
        if (!clienteId || !chaveDestino || valor <= 0) {
            setMsg("Todos os campos são obrigatórios")
            return
        }

        // parseInt aqui, porque API espera número
        const payload: PixRequest = {
            clienteId: parseInt(clienteId, 10),
            chavePixDestino: chaveDestino,
            valor
        }

        try {
            setLoading(true)
            const res: PixResponse = await gerarPix(payload)
            setQr(res.base64Qr)
            setMsg(res.mensagem)
        } catch (err: any) {
            setMsg(err.response?.data?.mensagem ?? err.message ?? "Erro ao gerar PIX")
        } finally {
            setLoading(false)
        }
    }

    // mantém apenas dígitos no clienteId
    const handleClienteIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valorDigitado = e.target.value
        const apenasDigitos = valorDigitado.replace(/\D/g, "")
        setClienteId(apenasDigitos)
    }

    return (
        <Card className="max-w-4xl w-full mx-auto">
            <CardHeader>
                <CardTitle>Gerar PIX</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={enviar} className="space-y-4">
                    <div>
                        <Label htmlFor="id">Cliente ID</Label>
                        <Input
                            id="id"
                            type="text"               // texto simples, sem spinner
                            value={clienteId}
                            onChange={handleClienteIdChange}
                            placeholder="Somente números"
                        />
                    </div>

                    <div>
                        <Label htmlFor="chave">Chave destino</Label>
                        <Input
                            id="chave"
                            type="text"
                            value={chaveDestino}
                            onChange={e => setChaveDestino(e.target.value)}
                            placeholder="ex: 123412341234@pix"
                        />
                    </div>

                    <div>
                        <Label htmlFor="valor">Valor (R$)</Label>
                        <Input
                            id="valor"
                            type="text"              // use text e valide com parseFloat, pra evitar spinner e permitir apenas números e ponto
                            value={valor.toString()}
                            onChange={e => {
                                // permite apenas dígitos e ponto
                                const raw = e.target.value.replace(/[^0-9.]/g, "")
                                // se houver mais de um ponto, ignora extras
                                const partes = raw.split(".")
                                const sanitized =
                                    partes.length > 1
                                        ? partes[0] + "." + partes.slice(1).join("")
                                        : partes[0]
                                setValor(sanitized === "" ? 0 : parseFloat(sanitized))
                            }}
                            placeholder="0.00"
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Gerando…" : "Gerar PIX"}

                    </Button>
                </form>

                {msg && <p className="mt-4 text-center text-green-700">{msg}</p>}

                {qr && (
                    <div className="mt-6 text-center">
                        <img
                            src={`data:image/png;base64,${qr}`}
                            alt="QR Code PIX"
                            className="inline-block border rounded"
                        />
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

// src/pages/Transferencia.tsx
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Transferencia() {
    const [conta, setConta] = useState("")
    const [valor, setValor] = useState(0)
    const [msg, setMsg] = useState("")

    const enviar = (e: React.FormEvent) => {
        e.preventDefault()
        if (!conta || valor <= 0) { setMsg("Preencha tudo"); return }
        setMsg(`Transferido R$ ${valor.toFixed(2)} para ${conta}`)
    }

    return (
        <section className="mx-auto max-w-lg space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">Transferência</h1>

            <form onSubmit={enviar} className="space-y-4 rounded-lg bg-white p-6 shadow">
                <div>
                    <Label htmlFor="conta">Conta destino</Label>
                    <Input id="conta" value={conta} onChange={e => setConta(e.target.value)} />
                </div>

                <div>
                    <Label htmlFor="valor">Valor (R$)</Label>
                    <Input
                        id="valor"
                        type="number"
                        step="0.01"
                        value={valor}
                        onChange={e => setValor(+e.target.value)}
                    />
                </div>

                <Button type="submit" className="w-full">Transferir</Button>
            </form>

            {msg && <p className="text-center text-green-700">{msg}</p>}
        </section>
    )
}

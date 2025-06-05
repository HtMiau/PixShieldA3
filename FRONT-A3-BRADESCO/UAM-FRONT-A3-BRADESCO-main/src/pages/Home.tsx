// src/pages/Home.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Bank, QrCode } from "@phosphor-icons/react"

export default function Home() {
    // estados só para demo
    const [saldo] = useState(12345.67)

    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-6 space-y-6">
            {/* bloco de saldo */}
            <div className="rounded-xl bg-gradient-to-r from-red-600 to-red-500 p-5 text-white shadow-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xs uppercase tracking-wider opacity-80">Saldo disponível</span>
                        <p className="mt-1 flex items-end gap-2">
                            <strong className="text-3xl font-semibold">
                                {saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            </strong>
                            <ArrowUpRight size={20} weight="bold" className="translate-y-0.5 opacity-80" />
                        </p>
                        <span className="text-[10px] opacity-70">atualizado há poucos segundos</span>
                    </div>
                    <Bank size={32} weight="fill" className="opacity-70" />
                </div>
            </div>

            {/* gráfico ultra leve - puro SVG */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">
                    Evolução do saldo (7 dias)
                </h2>
                <svg viewBox="0 0 300 100" className="h-32 w-full text-red-600">
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        points="0,80 40,60 80,65 120,50 160,30 200,35 240,20 300,25"
                    />
                    <circle cx="0" cy="80" r="3" fill="currentColor" />
                    <circle cx="40" cy="60" r="3" fill="currentColor" />
                    <circle cx="80" cy="65" r="3" fill="currentColor" />
                    <circle cx="120" cy="50" r="3" fill="currentColor" />
                    <circle cx="160" cy="30" r="3" fill="currentColor" />
                    <circle cx="200" cy="35" r="3" fill="currentColor" />
                    <circle cx="240" cy="20" r="3" fill="currentColor" />
                    <circle cx="300" cy="25" r="3" fill="currentColor" />
                </svg>
            </div>

            {/* ações rápidas */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="flex-1">
                    <a href="/transferencia" className="flex items-center justify-center gap-2">
                        <Bank size={18} weight="bold" /> Transferência
                    </a>
                </Button>
                <Button asChild variant="secondary" className="flex-1">
                    <a href="/gerar-pix" className="flex items-center justify-center gap-2">
                        <QrCode size={18} weight="bold" /> Gerar PIX
                    </a>
                </Button>
            </div>
        </section>
    )
}

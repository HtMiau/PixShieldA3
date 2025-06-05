// src/pages/Dashboard.tsx
import { ArrowUpRight } from "@phosphor-icons/react"

export default function Dashboard() {
    return (
        <section className="space-y-6">
            {/* Caixa de saldo */}
            <div className="rounded-lg bg-gradient-to-r from-red-600 to-red-500 p-6 text-white shadow">
                <span className="text-sm uppercase tracking-wider opacity-70">Saldo disponível</span>
                <div className="my-1 flex items-end gap-2">
                    <strong className="text-3xl font-semibold">R$ 12 345,67</strong>
                    <ArrowUpRight size={20} weight="bold" className="opacity-80" />
                </div>
                <span className="text-xs opacity-80">atualizado há poucos segundos</span>
            </div>

            {/* Gráfico fake bem leve */}
            <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Evolução do saldo nos últimos 7 dias</h2>

                {/* puro SVG para não puxar lib pesada */}
                <svg viewBox="0 0 300 100" className="h-40 w-full text-red-500">
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
        </section>
    )
}

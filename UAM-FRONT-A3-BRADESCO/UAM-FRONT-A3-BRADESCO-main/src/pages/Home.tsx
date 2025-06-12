import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Bank, QrCode, TrendUp } from "@phosphor-icons/react"
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { gsap } from "gsap";
import { useHoverAnimation } from "@/hooks/useHoverAnimation";

export default function Home() {
    const [saldo] = useState(12345.67);
    const saldoRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const balanceCardRef = useHoverAnimation();
    const chartCardRef = useHoverAnimation();

    useEffect(() => {
        const saldoElement = saldoRef.current;
        const chartElement = chartRef.current;
        const actionsElement = actionsRef.current;

        if (!saldoElement || !chartElement || !actionsElement) return;

        // Animação do saldo com efeito de contador
        gsap.fromTo(
            saldoElement,
            { scale: 0.8, opacity: 0, rotationX: -15 },
            {
                scale: 1,
                opacity: 1,
                rotationX: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                delay: 0.2
            }
        );

        // Animação do gráfico
        gsap.fromTo(
            chartElement,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power2.out' }
        );

        // Animação das ações com stagger
        gsap.fromTo(
            actionsElement.children,
            { y: 30, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                stagger: 0.15,
                delay: 0.6,
                ease: 'back.out(1.4)'
            }
        );

        // Animação do gráfico SVG
        const svgPath = chartElement.querySelector('polyline');
        const circles = chartElement.querySelectorAll('circle');

        if (svgPath) {
            gsap.fromTo(
                svgPath,
                { strokeDasharray: 1000, strokeDashoffset: 1000 },
                { strokeDashoffset: 0, duration: 2, delay: 0.8, ease: 'power2.out' }
            );
        }

        if (circles.length > 0) {
            gsap.fromTo(
                circles,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.2,
                    delay: 1.5,
                    ease: 'back.out(1.7)'
                }
            );
        }
    }, []);

    return (
        <section className="mx-auto w-full space-y-8">
            {/* Bloco de saldo com efeitos melhorados */}
            <div
                ref={(el) => {
                    if (saldoRef.current !== el) saldoRef.current = el;
                    if (balanceCardRef.current !== el) balanceCardRef.current = el;
                }}
                className="rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-6 text-white shadow-2xl relative overflow-hidden"
            >
                {/* Efeito de brilho sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full animate-pulse"></div>

                <div className="relative flex items-center justify-between">
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider opacity-90 font-medium">
                            Saldo disponível
                        </span>
                        <div className="flex items-end gap-3">
                            <strong className="text-4xl font-bold tracking-tight">
                                {saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            </strong>
                            <div className="flex items-center gap-1 opacity-80">
                                <TrendUp size={16} weight="bold" />
                                <ArrowUpRight size={18} weight="bold" />
                            </div>
                        </div>
                        <span className="text-xs opacity-80 flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            atualizado há poucos segundos
                        </span>
                    </div>
                    <Bank size={40} weight="fill" className="opacity-30" />
                </div>
            </div>

            {/* Gráfico melhorado */}
            <div
                ref={(el) => {
                    if (chartRef.current !== el) chartRef.current = el;
                    if (chartCardRef.current !== el) chartCardRef.current = el;
                }}
                className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-gray-800">
                        Evolução do saldo
                    </h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        7 dias
                    </span>
                </div>

                <div className="relative">
                    <svg viewBox="0 0 300 100" className="h-32 w-full text-red-500">
                        {/* Gradient para a linha */}
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ef4444" />
                                <stop offset="50%" stopColor="#dc2626" />
                                <stop offset="100%" stopColor="#b91c1c" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        <polyline
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            filter="url(#glow)"
                            points="0,80 40,60 80,65 120,50 160,30 200,35 240,20 300,25"
                        />

                        {[
                            {x: 0, y: 80}, {x: 40, y: 60}, {x: 80, y: 65}, {x: 120, y: 50},
                            {x: 160, y: 30}, {x: 200, y: 35}, {x: 240, y: 20}, {x: 300, y: 25}
                        ].map((point, index) => (
                            <circle
                                key={index}
                                cx={point.x}
                                cy={point.y}
                                r="4"
                                fill="url(#lineGradient)"
                                className="drop-shadow-sm"
                            />
                        ))}
                    </svg>
                </div>
            </div>

            {/* Ações rápidas melhoradas */}
            <div ref={actionsRef} className="grid gap-4 sm:grid-cols-2">
                <Button
                    asChild
                    className="group relative h-16 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Link to="/transferencia" className="flex items-center justify-center gap-3">
                        <Bank weight="bold" size={24} className="group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-semibold text-lg">Transferência</span>
                    </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    className="group relative h-16 border-2 border-gray-200 hover:border-red-300 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <Link to="/pix" className="flex items-center justify-center gap-3">
                        <QrCode weight="bold" size={24} className="text-red-600 group-hover:scale-110 transition-transform duration-200" />
                        <span className="font-semibold text-lg text-red-600">Gerar PIX</span>
                    </Link>
                </Button>
            </div>
        </section>
    )
}
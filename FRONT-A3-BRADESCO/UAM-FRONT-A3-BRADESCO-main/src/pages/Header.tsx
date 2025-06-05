// src/pages/Header.tsx
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 h-16 border-b bg-white">
            <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
                <h1 className="flex items-center gap-2 text-xl font-semibold text-bradesco">
                    <img
                        src="/logo-bradesco-escudo-1024.png"
                        alt="Bradesco"
                        className="h-8 w-auto object-contain"
                    />
                    Bradesco
                </h1>

                <nav className="hidden gap-1 md:flex">
                    <Button asChild variant="ghost"><Link to="/">Início</Link></Button>
                    <Button asChild variant="ghost"><Link to="/transferencia">Transferência</Link></Button>
                    <Button asChild variant="ghost"><Link to="/gerar-pix">Gerar PIX</Link></Button>
                </nav>
            </div>
        </header>
    )
}

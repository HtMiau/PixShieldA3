import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default React.memo(function Header() {
    const headerRef = useRef<HTMLHeaderElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLNavElement>(null);
    const location = useLocation();

    useEffect(() => {
        const header = headerRef.current;
        const logo = logoRef.current;
        const nav = navRef.current;

        if (!header || !logo || !nav) return;

        // Animação inicial do header
        gsap.fromTo(
            header,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        );

        gsap.fromTo(
            logo,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
        );

        gsap.fromTo(
            nav.children,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power2.out' }
        );
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <header
            ref={headerRef}
            className="sticky top-0 z-50 h-16 border-b bg-white/90 backdrop-blur-md shadow-sm"
        >
            <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
                <div
                    ref={logoRef}
                    className="flex items-center gap-2 text-xl font-semibold text-red-600 hover:scale-105 transition-transform duration-300"
                >
                    <img
                        src="/logo-bradesco-escudo-1024.png"
                        alt="Bradesco"
                        className="h-8 w-auto object-contain drop-shadow-sm"
                    />
                    Bradesco
                </div>

                <nav ref={navRef} className="hidden gap-1 md:flex">
                    <Button
                        asChild
                        variant={isActive('/') ? "default" : "ghost"}
                        className="hover:scale-105 transition-all duration-200"
                    >
                        <Link to="/">Início</Link>
                    </Button>
                    <Button
                        asChild
                        variant={isActive('/transferencia') ? "default" : "ghost"}
                        className="hover:scale-105 transition-all duration-200"
                    >
                        <Link to="/transferencia">Transferência</Link>
                    </Button>
                    <Button
                        asChild
                        variant={isActive('/pix') ? "default" : "ghost"}
                        className="hover:scale-105 transition-all duration-200"
                    >
                        <Link to="/pix">Gerar PIX</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
});
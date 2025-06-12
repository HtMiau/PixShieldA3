import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Header from "@/pages/Header.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";
import { PageTransition } from '@/components/PageTransition';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Layout() {
    const location = useLocation();
    const outletRef = useRef<HTMLDivElement>(null);
    const previousPathname = useRef(location.pathname);

    useEffect(() => {
        const outlet = outletRef.current;
        if (!outlet) return;

        // Animação de saída quando a página muda
        if (previousPathname.current !== location.pathname) {
            gsap.fromTo(
                outlet,
                { opacity: 1, x: 0 },
                {
                    opacity: 0,
                    x: -50,
                    duration: 0.3,
                    onComplete: () => {
                        // Animação de entrada da nova página
                        gsap.fromTo(
                            outlet,
                            { opacity: 0, x: 50 },
                            { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
                        );
                    }
                }
            );
        }

        previousPathname.current = location.pathname;
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header */}
            <Header/>

            {/* Main content with page transitions */}
            <main className="flex-1 max-w-5xl mx-auto px-6 py-8">
                <div ref={outletRef} className="outlet-container">
                    <PageTransition>
                        <Outlet />
                    </PageTransition>
                </div>
            </main>

            {/* Footer with subtle animation */}
            <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
                <div className="max-w-4xl mx-auto py-4 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} Mini Banco
                </div>
            </footer>
            <Toaster className="" expand={true} />
        </div>
    )
}
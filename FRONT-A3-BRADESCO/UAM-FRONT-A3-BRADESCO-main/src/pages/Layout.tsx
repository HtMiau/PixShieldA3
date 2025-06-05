// src/pages/Layout.tsx
import { Link, Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Header from "@/pages/Header.tsx";
// import {Toaster} from "@/components/ui/sonner.tsx";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* topo */}
            <Header/>


            {/* miolo (rotas) */}
            <main className="flex-1 max-w-5xl mx-auto py-8 px-6">
                <Outlet />
            </main>

            {/* rodapé */}
            <footer className="bg-white border-t">
                <div className="max-w-4xl mx-auto py-4 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} Mini Banco
                </div>
            </footer>
            {/*<Toaster position="top-right" richColors />*/}
        </div>
    )
}

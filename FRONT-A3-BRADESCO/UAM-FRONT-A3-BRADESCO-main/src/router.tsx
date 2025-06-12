// src/router.tsx
import { createBrowserRouter } from 'react-router-dom'
import Layout      from '@/pages/Layout'
import Home        from '@/pages/Home.tsx'
import Transfer    from '@/pages/Transferencia'
import FazerPix from "@/pages/FazerPix.tsx";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'transferencia', element: <Transfer /> },
            { path: 'pix',     element: <FazerPix /> },
            { path: '*', element: <div className='text-center mt-20'>Página não encontrada</div> },
        ],
    },
])

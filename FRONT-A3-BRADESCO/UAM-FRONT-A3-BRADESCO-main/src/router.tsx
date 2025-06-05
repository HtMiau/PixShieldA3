// src/router.tsx
import { createBrowserRouter } from 'react-router-dom'
import Layout      from '@/pages/Layout'
import Home        from '@/pages/Home.tsx'
import Transfer    from '@/pages/Transferencia'
import GerarPix    from '@/pages/GerarPix'

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'transferencia', element: <Transfer /> },
            { path: 'gerar-pix',     element: <GerarPix /> },
            { path: '*', element: <div className='text-center mt-20'>Página não encontrada</div> },
        ],
    },
])

import { usePageTransition } from '@/hooks/usePageTransition.ts';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    className?: string;
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
    const containerRef = usePageTransition();

    return (
        <div ref={containerRef} className={`page-transition ${className}`}>
            {children}
        </div>
    );
};
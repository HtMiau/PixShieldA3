import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const previousLocation = useRef(location.pathname);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Se é a primeira renderização
        if (previousLocation.current === location.pathname) {
            // Animação de entrada inicial
            gsap.fromTo(
                container.children,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                }
            );
        } else {
            // Animação de transição de página
            gsap.fromTo(
                container,
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                }
            );

            gsap.fromTo(
                container.children,
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    delay: 0.2,
                    ease: 'power2.out',
                }
            );
        }

        previousLocation.current = location.pathname;
    }, [location.pathname]);

    return containerRef;
};
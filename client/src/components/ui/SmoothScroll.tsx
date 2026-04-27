import { useEffect, useRef, type FC, type ReactNode } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useLocation } from 'react-router-dom';

interface SmoothScrollProps {
    children: ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
    const lenisRef = useRef<Lenis | null>(null);
    const location = useLocation();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current && !location.hash) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [location.pathname, location.hash]);

    useEffect(() => {
        const handleModalScrollLock = (event: Event) => {
            const shouldLock = (event as CustomEvent<boolean>).detail;

            if (shouldLock) {
                lenisRef.current?.stop();
            } else {
                lenisRef.current?.start();
            }
        };

        window.addEventListener('modal-scroll-lock', handleModalScrollLock);

        return () => {
            window.removeEventListener('modal-scroll-lock', handleModalScrollLock);
            lenisRef.current?.start();
        };
    }, []);

    return <div className="w-full min-h-screen">{children}</div>;
};

export default SmoothScroll;

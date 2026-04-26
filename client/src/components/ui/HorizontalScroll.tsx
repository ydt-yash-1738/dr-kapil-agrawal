import { useRef, type FC, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollProps {
    children: ReactNode;
    className?: string;
}

const HorizontalScroll: FC<HorizontalScrollProps> = ({ children, className = "" }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className={`relative h-[300vh] bg-neutral-900 ${className}`}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;

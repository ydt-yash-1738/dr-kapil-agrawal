import { useRef, type FC } from 'react';
import { useInView } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: FC<SectionProps> = ({ children, className = "", id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <section
            ref={ref}
            id={id}
            className={`min-h-screen flex flex-col justify-center py-10 md:py-20 ${className}`}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(50px)",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            {children}
        </section>
    );
};

export default Section;

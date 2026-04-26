import { useRef, type FC } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

const TextReveal: FC<TextRevealProps> = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const words = children.split(" ");

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block mr-[0.2em] overflow-hidden align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.6, 0.01, -0.05, 0.95],
                            delay: delay + i * 0.02
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </div>
    );
};

export default TextReveal;

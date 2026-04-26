import { type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './ui/TextReveal';

const heroImage = '/static/optimized/luxury-medical-spa-hero.jpg';

const Hero: FC = () => {
    const { scrollY } = useScroll();

    const heroScale = useTransform(scrollY, [0, 800], [1, 1.08]);
    const contentOpacity = useTransform(scrollY, [0, 520], [1, 0]);
    const contentY = useTransform(scrollY, [0, 520], [0, 80]);

    return (
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            <motion.div
                style={{ scale: heroScale, willChange: 'transform' }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={heroImage}
                    alt="Luxury plastic surgery medical spa suite"
                    className="h-full w-full object-cover"
                    width="1600"
                    height="914"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                />
            </motion.div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(10,10,10,0.2),_rgba(10,10,10,0.78))]"></div>
            <div className="absolute inset-0 z-0 bg-black/35"></div>

            <motion.div
                style={{ opacity: contentOpacity, y: contentY, willChange: 'transform, opacity' }}
                className="z-10 text-center px-4 relative"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sm md:text-base uppercase tracking-[0.5em] mb-6 text-yellow-500"
                >
                    Dr. Kapil Agrawal
                </motion.h2>
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold leading-none mb-8 tracking-tighter text-white">
                    <TextReveal>SCULPTING</TextReveal>
                    <br />
                    <TextReveal delay={0.1}>PERFECTION</TextReveal>
                </h1>
            </motion.div>
        </div>
    );
};

export default Hero;

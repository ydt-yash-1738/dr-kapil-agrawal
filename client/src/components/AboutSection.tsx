import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../constants/homeContent';
import MagneticButton from './ui/MagneticButton';
import Section from './ui/Section';
import TextReveal from './ui/TextReveal';

const AboutSection: FC = () => {
    return (
        <Section id="about" className="container mx-auto px-4 md:px-6 z-10 relative bg-[#0a0a0a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">{aboutData.tagline}</h2>
                    <div className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                        <TextReveal>
                            {aboutData.heading}
                        </TextReveal>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {aboutData.description}
                    </p>
                    <MagneticButton>
                        <Link to={aboutData.buttonLink} className="px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                            {aboutData.buttonText}
                        </Link>
                    </MagneticButton>
                </div>
                <div className="relative aspect-[4/5] w-full md:w-[90%] lg:w-[85%] mx-auto overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        src={aboutData.image}
                        alt={aboutData.imageAlt}
                        loading="lazy"
                        decoding="async"
                        width="900"
                        height="1125"
                        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </Section>
    );
};

export default AboutSection;

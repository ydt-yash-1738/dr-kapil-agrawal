import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from '../components/ui/MagneticButton';
import TextReveal from '../components/ui/TextReveal';
import Section from '../components/ui/Section';
import { getAboutDoctorContent } from '../constants/aboutDoctorContent';

const AboutDoctor: FC = () => {
    const content = getAboutDoctorContent();

    return (
        <div className="bg-[#0a0a0a] min-h-screen pb-10 md:pb-20">
            <Section className="container mx-auto px-4 md:px-6 z-10 relative justify-start pt-28 md:pt-36">
                <div className="mb-10 md:mb-12">
                    <MagneticButton>
                        <Link to="/" className="inline-flex items-center text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                            <span className="mr-2">←</span> Back to Home
                        </Link>
                    </MagneticButton>
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8 md:mb-12 border-b border-gray-800 pb-4">{content.subtitle}</h2>
                        
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
                            {/* Image Section - Sticky on Desktop */}
                            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex-shrink-0">
                                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden group shadow-2xl">
                                    <img
                                        src="/static/optimized/doc-image-home.avif"
                                        alt={content.title}
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="async"
                                        width="900"
                                        height="1125"
                                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="text-2xl md:text-3xl font-serif leading-tight mb-2 text-white">
                                            {content.title}
                                        </div>
                                        <p className="text-gray-400 text-sm tracking-wide uppercase">Specialist Plastic Surgeon</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-7/12">
                                <div className="hidden lg:block text-5xl font-serif leading-tight mb-12 text-white">
                                    <TextReveal>
                                        Biography & Techniques
                                    </TextReveal>
                                </div>

                                <div className="text-gray-400 text-lg leading-relaxed space-y-6">
                                    {content.content.map((block, index) => {
                                        if (block.type === "paragraph") {
                                            return <p key={index} className="text-gray-300 font-light">{block.text}</p>;
                                        }

                                        if (block.type === "heading") {
                                            return (
                                                <h3 key={index} className="text-white text-3xl font-serif mt-16 mb-8 flex items-center">
                                                    <span className="w-8 h-px bg-gray-700 mr-4"></span>
                                                    {block.text}
                                                </h3>
                                            );
                                        }

                                        if (block.type === "list") {
                                            return (
                                                <ul key={index} className="list-none pl-0 space-y-4 my-8 bg-gray-900/30 p-6 md:p-8 rounded-2xl border border-gray-800/50">
                                                    {block.items.map((item, i) => (
                                                        <li key={i} className="flex items-start text-gray-300 font-light">
                                                            <span className="text-gray-600 mr-4 mt-1.5 text-xs">◆</span>
                                                            <span className="flex-1">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }

                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default AboutDoctor;

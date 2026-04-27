import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import { procedures } from '../constants/homeContent';
import RhinoplastyDetails from './RhinoplastyDetails';
import Section from './ui/Section';

const ProceduresSection: FC = () => {
    const [isRhinoplastyOpen, setIsRhinoplastyOpen] = useState(false);

    return (
        <>
            <Section id="procedures" className="container mx-auto px-4 md:px-6 z-10 relative bg-[#0a0a0a]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
                    <div className="max-w-2xl">
                        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6 flex items-center">
                            <span className="w-12 h-px bg-gray-700 mr-4"></span>
                            Procedures
                        </h2>
                        <h3 className="text-5xl md:text-7xl font-serif leading-tight">
                            Our <span className="text-gray-500 italic">Expertise</span>
                        </h3>
                    </div>
                    <p className="text-gray-400 max-w-md text-lg mt-8 md:mt-0 font-light border-l border-gray-800 pl-6">
                        Discover a range of procedures tailored to enhance your natural beauty and restore your confidence with artistic precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {procedures.map((proc, index) => {
                        const hasDetails = proc.title === 'Rhinoplasty';

                        return (
                            <motion.div
                                key={index}
                                role={hasDetails ? 'button' : undefined}
                                tabIndex={hasDetails ? 0 : undefined}
                                onClick={() => hasDetails && setIsRhinoplastyOpen(true)}
                                onKeyDown={(event) => {
                                    if (!hasDetails) {
                                        return;
                                    }

                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setIsRhinoplastyOpen(true);
                                    }
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                className={`group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-gray-800/50 flex flex-col outline-none ${
                                    hasDetails ? 'cursor-pointer focus-visible:border-yellow-500/70 focus-visible:ring-2 focus-visible:ring-yellow-500/30' : ''
                                } ${
                                    index === 1 || index === 4 || index === 7 ? 'md:translate-y-12 lg:translate-y-16' : ''
                                }`}
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden relative">
                                    <img
                                        src={proc.img}
                                        alt={proc.title}
                                        loading="lazy"
                                        decoding="async"
                                        width="760"
                                        height="570"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-90"></div>
                                </div>

                                <div className="p-8 md:p-10 flex-1 flex flex-col relative z-10 -mt-20">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-yellow-500 transition-colors duration-500">
                                            {proc.title}
                                        </h4>
                                        <span className="text-gray-600 font-light text-sm italic">0{index + 1}</span>
                                    </div>
                                    <p className="text-gray-400 font-light leading-relaxed mb-10 flex-1">
                                        {proc.desc}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-800/50">
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                if (hasDetails) {
                                                    setIsRhinoplastyOpen(true);
                                                }
                                            }}
                                            disabled={!hasDetails}
                                            tabIndex={hasDetails ? -1 : undefined}
                                            className={`inline-flex items-center text-left text-sm uppercase tracking-widest transition-colors duration-300 ${
                                                hasDetails
                                                    ? 'text-gray-400 group-hover:text-white'
                                                    : 'cursor-not-allowed text-gray-700'
                                            }`}
                                        >
                                            <span className={`mr-4 w-8 h-[1px] transition-colors duration-300 ${
                                                hasDetails ? 'bg-gray-700 group-hover:bg-yellow-500' : 'bg-gray-800'
                                            }`}></span>
                                            {hasDetails ? 'Explore Details' : 'Coming Soon'}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            <RhinoplastyDetails
                isOpen={isRhinoplastyOpen}
                onClose={() => setIsRhinoplastyOpen(false)}
            />
        </>
    );
};

export default ProceduresSection;

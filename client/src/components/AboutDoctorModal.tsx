import { type FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { getAboutDoctorContent } from '../constants/aboutDoctorContent';

interface AboutDoctorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const panelVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutDoctorModal: FC<AboutDoctorModalProps> = ({ isOpen, onClose }) => {
    const content = getAboutDoctorContent();

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new CustomEvent('modal-scroll-lock', { detail: true }));
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.dispatchEvent(new CustomEvent('modal-scroll-lock', { detail: false }));
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-xl px-3 py-3 md:px-8 md:py-8"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="about-doctor-title"
                    onClick={onClose}
                    data-lenis-prevent
                >
                    <motion.article
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                        data-lenis-prevent
                    >
                        <div className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b0b]/95 px-5 py-4 backdrop-blur md:px-8">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="mb-1 text-xs uppercase tracking-[0.35em] text-yellow-500">The Surgeon</p>
                                    <h2 id="about-doctor-title" className="font-serif text-2xl leading-tight text-white md:text-3xl">
                                        Biography & Techniques
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="relative h-11 w-11 flex-shrink-0 rounded-full border border-white/15 text-white transition-colors hover:border-yellow-500 hover:text-yellow-500"
                                    aria-label="Close about doctor details"
                                >
                                    <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current"></span>
                                    <span className="absolute left-1/2 top-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current"></span>
                                </button>
                            </div>
                        </div>

                        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent>
                            <div className="px-5 py-10 md:px-10 md:py-14">
                                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8 md:mb-12 border-b border-gray-800 pb-4">{content.subtitle}</h2>
                        
                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
                                    {/* Image Section - Sticky on Desktop */}
                                    <div className="w-full lg:w-5/12 lg:sticky lg:top-10 flex-shrink-0">
                                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden group shadow-2xl">
                                            <img
                                                src="/static/optimized/doc-image-home.jpg"
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
                                                                    <span className="text-yellow-500 mr-4 mt-1.5 text-xs h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-500 flex items-center justify-center"></span>
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
                            </div>
                        </div>
                    </motion.article>
                </motion.div>
            )}
        </AnimatePresence>
        ,
        document.body
    );
};

export default AboutDoctorModal;

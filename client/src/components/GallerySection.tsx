import { type FC } from 'react';
import MagneticButton from './ui/MagneticButton';
import Section from './ui/Section';

const GallerySection: FC = () => {
    return (
        <Section id="gallery" className="container mx-auto px-4 md:px-6 z-10 relative bg-[#0a0a0a]">
            <div className="text-center mb-10 md:mb-20">
                <h2 className="text-5xl md:text-7xl font-serif mb-6">Real Results</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Witness the transformative power of expert plastic surgery through our patient stories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
                <div className="md:col-span-2 h-full relative overflow-hidden group">
                    <img
                        src="/static/optimized/gallery-result-1.jpg"
                        alt="Result 1"
                        loading="lazy"
                        decoding="async"
                        width="1400"
                        height="1050"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex-1 relative overflow-hidden group">
                        <img
                            src="/static/optimized/gallery-result-2.jpg"
                            alt="Result 2"
                            loading="lazy"
                            decoding="async"
                            width="800"
                            height="800"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="flex-1 relative overflow-hidden group bg-neutral-900 flex items-center justify-center">
                        <MagneticButton>
                            <a href="#" className="text-xl uppercase tracking-widest border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all">
                                View Full Gallery
                            </a>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default GallerySection;

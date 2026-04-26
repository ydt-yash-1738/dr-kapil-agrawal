import { type FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import MagneticButton from '../components/ui/MagneticButton';
import { procedures, aboutData } from '../constants/homeContent';

const Home: FC = () => {
    const { scrollY } = useScroll();

    const heroScale = useTransform(scrollY, [0, 800], [1, 0.8]);
    const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

    return (
        <div className="bg-[#0a0a0a]">

            {/* Hero Section with Zoom Out Effect */}
            <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity, willChange: 'transform, opacity' }}
                    className="fixed inset-0 z-0"
                >
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50"></div>
                    {/* Placeholder for high-quality video/image */}
                    <img
                        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
                        alt="Abstract Medical Art"
                        className="w-full h-full object-cover opacity-60"
                        fetchPriority="high"
                        loading="eager"
                    />
                </motion.div>

                <div className="z-10 text-center px-4 mix-blend-difference relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm md:text-base uppercase tracking-[0.5em] mb-6 text-yellow-500"
                    >
                        Dr. Kapil Agrawal
                    </motion.h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold leading-none mb-8 tracking-tighter">
                        <TextReveal>SCULPTING</TextReveal>
                        <br />
                        <TextReveal delay={0.1}>PERFECTION</TextReveal>
                    </h1>
                </div>
            </div>



            {/* About Section */}
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
                    <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
                        <img
                            src={aboutData.image}
                            alt={aboutData.imageAlt}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </Section>

            {/* Expertise Section Redesigned */}
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
                    {procedures.map((proc, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-gray-800/50 flex flex-col ${
                                index === 1 || index === 4 || index === 7 ? 'md:translate-y-12 lg:translate-y-16' : ''
                            }`}
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={proc.img}
                                    alt={proc.title}
                                    loading="lazy"
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
                                    <Link to={`#`} className="inline-flex items-center text-sm uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                                        <span className="mr-4 w-8 h-[1px] bg-gray-700 group-hover:bg-yellow-500 transition-colors duration-300"></span>
                                        Explore Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Gallery Teaser */}
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
                            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop"
                            alt="Result 1"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex-1 relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop"
                                alt="Result 2"
                                loading="lazy"
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

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center justify-center relative z-10 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">Get in Touch</h2>
                    <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 md:mb-12 hover:text-yellow-500 transition-colors duration-500 cursor-default">
                        Let's Talk
                    </h1>
                    <div className="flex justify-center gap-8">
                        <MagneticButton>
                            <button className="bg-white text-black px-12 py-6 rounded-full text-xl font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-white transition-all duration-300">
                                Book Consultation
                            </button>
                        </MagneticButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

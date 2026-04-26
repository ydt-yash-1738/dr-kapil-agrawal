import { type FC } from 'react';
import MagneticButton from './ui/MagneticButton';

const ContactSection: FC = () => {
    return (
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
    );
};

export default ContactSection;

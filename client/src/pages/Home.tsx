import { type FC } from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import GallerySection from '../components/GallerySection';
import Hero from '../components/Hero';
import ProceduresSection from '../components/ProceduresSection';

const Home: FC = () => {
    return (
        <div className="bg-[#0a0a0a]">
            <Hero />
            <AboutSection />
            <ProceduresSection />
            <GallerySection />
            <ContactSection />
        </div>
    );
};

export default Home;

import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScroll from './ui/SmoothScroll';

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <SmoothScroll>
            <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-yellow-500/30">
                <Navbar />
                <main className="relative z-10">
                    {children}
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
};

export default Layout;

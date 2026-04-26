

const Footer = () => {
    return (
        <footer className="bg-neutral-900 py-10 md:py-20 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">DR. KAPIL AGRAWAL</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Redefining beauty with precision and artistry. Dedicated to providing the highest quality of care in plastic and cosmetic surgery.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contact</h4>
                        <div className="space-y-4 text-gray-400">
                            <p>123 Medical Center Drive</p>
                            <p>Mumbai, India 400001</p>
                            <p>+91 98765 43210</p>
                            <p>info@drkapilagrawal.com</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Connect</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Dr. Kapil Agrawal. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

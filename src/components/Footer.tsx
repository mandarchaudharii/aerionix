
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-aerionix-black border-t border-aerionix-gold/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-aerionix-gold text-xl font-bold mb-4">AERIONIX</h3>
            <p className="text-aerionix-silver mb-6">
              Making India self-reliant in drone technology with efficient, affordable, and reliable BLDC motors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-aerionix-darkgray flex items-center justify-center hover:bg-aerionix-gold/20 transition-colors duration-500">
                <Facebook size={20} className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-aerionix-darkgray flex items-center justify-center hover:bg-aerionix-gold/20 transition-colors duration-500">
                <Twitter size={20} className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-aerionix-darkgray flex items-center justify-center hover:bg-aerionix-gold/20 transition-colors duration-500">
                <Instagram size={20} className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-aerionix-darkgray flex items-center justify-center hover:bg-aerionix-gold/20 transition-colors duration-500">
                <Linkedin size={20} className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">About Us</a></li>
              <li><a href="#products" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Products</a></li>
              <li><a href="#advantages" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Our Advantages</a></li>
              <li><a href="#roadmap" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Roadmap</a></li>
              <li><a href="#contact" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Hobby Grade Motors</a></li>
              <li><a href="#products" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Professional Grade Motors</a></li>
              <li><a href="#products" className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">Electronic Speed Controllers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-aerionix-silver mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-aerionix-darkgray border border-aerionix-gold/30 rounded-l-md p-2 flex-grow text-white focus:outline-none focus:border-aerionix-gold transition-all duration-500"
              />
              <button type="submit" className="bg-aerionix-gold text-aerionix-black py-2 px-4 rounded-r-md hover:bg-aerionix-gold/80 transition-all duration-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-aerionix-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-aerionix-silver text-sm mb-4 md:mb-0 flex flex-col md:flex-row items-center gap-2">
            <p>&copy; {new Date().getFullYear()} AERIONIX. All rights reserved.</p>
            <p className="hidden md:inline">|</p>
            <p>Developed by <a href="https://in.linkedin.com/in/mandar-chaudhari" target="_blank" rel="noopener noreferrer" className="text-aerionix-gold hover:underline">Mandar Chaudhari</a></p>
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="text-aerionix-silver hover:text-aerionix-gold text-sm transition-colors duration-500">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-aerionix-silver hover:text-aerionix-gold text-sm transition-colors duration-500">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-aerionix-gold text-aerionix-black flex items-center justify-center shadow-lg hover:bg-aerionix-gold/80 transition-colors duration-500"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;

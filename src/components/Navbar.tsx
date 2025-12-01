
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Check if we're on the home page
    setIsHomePage(window.location.pathname === '/');
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate links that either use hash anchors on home page or redirect to home page with hash on other pages
  const getNavLink = (anchor: string, label: string) => {
    if (isHomePage) {
      return <a href={`#${anchor}`} className="text-white hover:text-aerionix-gold transition-colors">{label}</a>;
    } else {
      return <Link to={`/#${anchor}`} className="text-white hover:text-aerionix-gold transition-colors">{label}</Link>;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-aerionix-black/90 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-aerionix-gold font-bold text-2xl tracking-wider">AERIONIX</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavLink("about", "About")}
            {getNavLink("products", "Products")}
            {getNavLink("advantages", "Advantages")}
            {getNavLink("roadmap", "Roadmap")}
            {isHomePage ? (
              <a href="#contact">
                <Button className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black">
                  Contact Us
                </Button>
              </a>
            ) : (
              <Link to="/#contact">
                <Button className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black">
                  Contact Us
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-aerionix-black border-t border-aerionix-gold/30 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <a href="#about" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#products" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Products</a>
                <a href="#advantages" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Advantages</a>
                <a href="#roadmap" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black w-full">
                    Contact Us
                  </Button>
                </a>
              </>
            ) : (
              <>
                <Link to="/#about" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/#products" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/#advantages" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Advantages</Link>
                <Link to="/#roadmap" className="text-white hover:text-aerionix-gold transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Roadmap</Link>
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black w-full">
                    Contact Us
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

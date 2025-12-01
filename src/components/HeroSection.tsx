
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-aerionix-black/90 to-aerionix-black"></div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-float">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              <span className="gold-gradient">AERIONIX</span>
            </h1>
            <p className="text-xl md:text-2xl text-aerionix-silver italic">
              "Soaring Skies Of Tomorrow"
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Making India <span className="text-aerionix-gold">Self-Reliant</span> in Drone Technology
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-aerionix-silver max-w-3xl mx-auto">
            Manufacturing efficient, affordable, and reliable BLDC motors tailored to the unique needs of the Indian drone industry.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black text-lg py-6 px-8 transition-all duration-700"
              onClick={scrollToProducts}
            >
              Explore Products
            </Button>
            <Button 
              variant="outline" 
              className="border-aerionix-silver hover:border-aerionix-gold text-aerionix-silver hover:text-aerionix-gold text-lg py-6 px-8 transition-all duration-700"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" onClick={scrollToAbout} className="text-aerionix-silver hover:text-aerionix-gold transition-colors duration-500">
          <ChevronDown size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

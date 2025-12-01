
import { ArrowRight, Globe, Cpu, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-aerionix-black to-aerionix-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our <span className="text-aerionix-gold">Vision</span></h2>
        <p className="section-subtitle">
          At AERIONIX, we're on a mission to revolutionize India's drone industry by developing high-quality, affordable motor solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="aerionix-card">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-aerionix-gold/20 flex items-center justify-center">
                <Globe className="text-aerionix-gold" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Market Opportunity</h3>
            <p className="text-aerionix-silver">
              The global consumer drone market is valued at USD 4.12 billion in 2022, with India's market projected to reach USD 392.1 million by 2030 at a CAGR of 17.6%.
            </p>
          </div>
          
          <div className="aerionix-card">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-aerionix-gold/20 flex items-center justify-center">
                <Cpu className="text-aerionix-gold" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Solution</h3>
            <p className="text-aerionix-silver">
              AERIONIX leverages India's manufacturing strengths to produce high-quality BLDC motors at a fraction of the cost of imported alternatives.
            </p>
          </div>
          
          <div className="aerionix-card">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-aerionix-gold/20 flex items-center justify-center">
                <TrendingUp className="text-aerionix-gold" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Our Impact</h3>
            <p className="text-aerionix-silver">
              By providing reliable, efficient motors at accessible prices, we're helping India achieve self-reliance in drone technology.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#products" className="inline-flex items-center text-aerionix-gold hover:underline group">
            Discover Our Products
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

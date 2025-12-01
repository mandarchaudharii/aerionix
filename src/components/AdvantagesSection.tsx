
import { CheckCircle } from 'lucide-react';

const ComparisonRow = ({ feature, aerionix, others }: { feature: string; aerionix: string | JSX.Element; others: string | JSX.Element }) => {
  return (
    <tr className="border-b border-aerionix-gold/20">
      <td className="py-4 px-2 md:px-4 text-left text-sm md:text-base">{feature}</td>
      <td className="py-4 px-2 md:px-4 text-center font-medium text-sm md:text-base">{aerionix}</td>
      <td className="py-4 px-2 md:px-4 text-center text-aerionix-silver text-sm md:text-base">{others}</td>
    </tr>
  );
};

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-24 bg-gradient-to-b from-aerionix-black to-aerionix-darkgray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our <span className="text-aerionix-gold">Advantages</span></h2>
        <p className="section-subtitle">
          See how AERIONIX stands out from the competition with our locally manufactured, high-quality motors.
        </p>
        
        <div className="overflow-x-auto mt-12">
          <table className="w-full">
            <thead>
              <tr className="bg-aerionix-gold/10">
                <th className="py-4 px-4 text-left">Feature</th>
                <th className="py-4 px-4 text-center text-aerionix-gold">AERIONIX</th>
                <th className="py-4 px-4 text-center">Foreign Brands</th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRow 
                feature="Price (Hobby Grade)" 
                aerionix="500-700 INR" 
                others="1,000+ INR" 
              />
              <ComparisonRow 
                feature="Price (Professional Grade)" 
                aerionix="2,500-3,000 INR" 
                others="5,000+ INR" 
              />
              <ComparisonRow 
                feature="Electronic Speed Controller" 
                aerionix="800-1,000 INR" 
                others="2,000+ INR" 
              />
              <ComparisonRow 
                feature="Manufacturing" 
                aerionix="Made in India" 
                others="Imported" 
              />
              <ComparisonRow 
                feature="Quality Standards" 
                aerionix={<span className="text-aerionix-gold">High</span>} 
                others="High" 
              />
              <ComparisonRow 
                feature="Performance Data" 
                aerionix={<span className="text-aerionix-gold">Transparent & Verified</span>} 
                others="Often Unreliable" 
              />
              <ComparisonRow 
                feature="Customer Support" 
                aerionix={<span className="text-aerionix-gold">Local & Responsive</span>} 
                others="Limited" 
              />
              <ComparisonRow 
                feature="Custom Solutions" 
                aerionix={<CheckCircle size={20} className="mx-auto text-aerionix-gold" />} 
                others="Limited Options" 
              />
            </tbody>
          </table>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="advantages-content p-6 rounded-lg bg-gradient-to-br from-aerionix-black/80 to-aerionix-gold/20 backdrop-blur-sm transition-all duration-700">
            <h3 className="text-2xl font-bold mb-4">Why Choose <span className="text-aerionix-gold">AERIONIX</span>?</h3>
            <p className="text-aerionix-silver mb-6">
              We're not just building motors—we are building trust, efficiency, and the foundation for India's self-reliance in drone technology.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="mr-2 text-aerionix-gold mt-1 flex-shrink-0" />
                <span>Cost advantage through affordable labor and local production</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="mr-2 text-aerionix-gold mt-1 flex-shrink-0" />
                <span>High-quality motors tailored to drones at a fraction of imported costs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="mr-2 text-aerionix-gold mt-1 flex-shrink-0" />
                <span>Investment in electronic speed controllers for enhanced efficiency</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="mr-2 text-aerionix-gold mt-1 flex-shrink-0" />
                <span>Reliable, efficient motors accessible to India's 1.5 billion population</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-aerionix-gold/20 flex items-center justify-center animate-pulse-gold">
                <div className="w-48 h-48 rounded-full bg-aerionix-gold/30 flex items-center justify-center">
                  <img src="/motor-cutaway.png" alt="AERIONIX Motor Technology" className="w-36 h-36 object-contain animate-spin-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

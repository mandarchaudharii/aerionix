
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const RoadmapItem = ({ 
  year, 
  title, 
  description, 
  isActive, 
  onClick 
}: { 
  year: string; 
  title: string; 
  description: string; 
  isActive: boolean; 
  onClick: () => void;
}) => {
  return (
    <div 
      className={`cursor-pointer transition-all duration-700 ${isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
      onClick={onClick}
    >
      <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto transition-all duration-700 ${isActive ? 'bg-aerionix-gold text-aerionix-black' : 'bg-aerionix-darkgray border border-aerionix-gold/50'}`}>
        <span className="font-bold">{year}</span>
      </div>
      <h3 className={`text-lg font-bold text-center mb-2 transition-colors duration-700 ${isActive ? 'text-aerionix-gold' : 'text-white'}`}>{title}</h3>
    </div>
  );
};

const RoadmapSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const roadmapSteps = [
    {
      year: '2025',
      title: 'Market Entry',
      description: 'Launch of our first hobby-grade BLDC motors to the market. Establishing initial customer base and gathering user feedback for continued improvement.'
    },
    {
      year: '2026',
      title: 'Expansion',
      description: 'Introduction of high-performance motors and electronic speed controllers. Scaling production operations and expanding market reach across India.'
    },
    {
      year: '2027',
      title: 'Innovation',
      description: 'Development of next-generation drone propulsion technologies. Expanding product line to include integrated propulsion systems and custom solutions.'
    },
    {
      year: '2027',
      title: 'Research & Development',
      description: 'Prototyping of hobby-grade BLDC motors and establishing key component supply chains. Building relationships with engineering colleges for testing and feedback.'
    }
  ];

  // Highlight feature that updates info as year is selected
  useEffect(() => {
    const highlightClass = 'highlight-content';
    const content = document.querySelector('.roadmap-content');
    
    if (content) {
      content.classList.remove(highlightClass);
      // Fix: Cast the element to HTMLElement to access offsetWidth property
      (content as HTMLElement).offsetWidth; // Trigger reflow to restart animation
      content.classList.add(highlightClass);
    }
  }, [activeStep]);

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-aerionix-darkgray to-aerionix-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our <span className="text-aerionix-gold">Roadmap</span></h2>
        <p className="section-subtitle">
          Our journey to revolutionize India's drone motor industry is carefully planned for sustainable growth and innovation.
        </p>
        
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {roadmapSteps.map((step, index) => (
              <RoadmapItem 
                key={index}
                year={step.year}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
          
          <div className="relative">
            <div className="h-1 w-full bg-aerionix-darkgray">
              <div 
                className="h-1 bg-aerionix-gold transition-all duration-700" 
                style={{ width: `${((activeStep + 1) / roadmapSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mt-10 p-6 aerionix-card roadmap-content">
            <p className="text-aerionix-silver">
              {roadmapSteps[activeStep].description}
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="aerionix-card">
            <h3 className="text-xl font-bold mb-4 text-center">R&D Focus</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Motor efficiency optimization</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Material science research</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Design for manufacturability</span>
              </li>
            </ul>
          </div>
          
          <div className="aerionix-card">
            <h3 className="text-xl font-bold mb-4 text-center">Manufacturing</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Local component sourcing</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Quality control processes</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Scaling production capabilities</span>
              </li>
            </ul>
          </div>
          
          <div className="aerionix-card">
            <h3 className="text-xl font-bold mb-4 text-center">Market Strategy</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Educational partnerships</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Direct-to-consumer sales</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">B2B distribution channels</span>
              </li>
            </ul>
          </div>
          
          <div className="aerionix-card">
            <h3 className="text-xl font-bold mb-4 text-center">Future Vision</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Integrated propulsion systems</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Custom motor solutions</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-aerionix-gold flex-shrink-0" />
                <span className="text-aerionix-silver text-sm">Global market expansion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

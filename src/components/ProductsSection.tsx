
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCard = ({ type, price, features, image, comingSoon = false }: {
  type: string;
  price: string;
  features: string[];
  image: string;
  comingSoon?: boolean;
}) => {
  return (
    <div className="product-card p-4">
      <div className="aerionix-card h-full flex flex-col">
        <div className="relative mb-6">
          <img 
            src={image} 
            alt={`AERIONIX ${type} Motor`} 
            className="w-full h-48 object-contain rounded-lg" // Added rounded-lg here
          />
          {comingSoon && (
            <div className="absolute top-2 right-2 bg-aerionix-gold text-aerionix-black text-sm font-bold py-1 px-3 rounded-lg">
              Coming Soon
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{type}</h3>
        <p className="text-2xl font-bold text-aerionix-gold mb-4">{price}</p>
        
        <ul className="mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start mb-2">
              <span className="text-aerionix-gold mr-2">•</span>
              <span className="text-aerionix-silver">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={`w-full ${comingSoon ? 'bg-aerionix-silver/30 hover:bg-aerionix-silver/50 cursor-not-allowed' : 'bg-aerionix-gold hover:bg-aerionix-gold/80 text-aerionix-black'}`}>
          {comingSoon ? 'Coming Soon' : 'Learn More'}
        </Button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      type: "Hobby Grade Motor",
      price: "500-700 INR",
      features: [
        "High efficiency design",
        "Lightweight construction",
        "Reliable performance",
        "Perfect for beginner drones",
        "Launching early 2026"
      ],
      image: "/hobby-motor.png",
      comingSoon: true
    },
    {
      type: "Professional Grade Motor",
      price: "2,500-3,000 INR",
      features: [
        "Premium efficiency",
        "Enhanced power-to-weight ratio",
        "Extended flight time",
        "Durable construction",
        "Launching late 2026"
      ],
      image: "/pro-motor.png",
      comingSoon: true
    },
    {
      type: "Electronic Speed Controller",
      price: "800-1,000 INR",
      features: [
        "Precise motor control",
        "Optimized performance",
        "Compatible with all AERIONIX motors",
        "Enhanced battery efficiency",
        "Launching late 2026"
      ],
      image: "/esc.png",
      comingSoon: true
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-aerionix-darkgray to-aerionix-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our <span className="text-aerionix-gold">Products</span></h2>
        <p className="section-subtitle">
          Engineered for excellence, our motors combine reliability with affordability to power the future of Indian drone technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              type={product.type}
              price={product.price}
              features={product.features}
              image={product.image}
              comingSoon={product.comingSoon}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#advantages" className="inline-flex items-center text-aerionix-gold hover:underline group transition-all duration-700">
            See Our Competitive Advantages
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-700" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

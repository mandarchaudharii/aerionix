
import React, { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = '', prefix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(startAnimation);
      }
    };

    animationFrameId = requestAnimationFrame(startAnimation);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);
  
  return (
    <div ref={counterRef} className="text-3xl md:text-4xl font-bold mb-2">
      {prefix}{count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-aerionix-gold/5 backdrop-blur-sm border-y border-aerionix-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <Counter end={392} prefix="$" suffix="M+" />
            <p className="text-aerionix-silver">Indian Drone Market by 2030</p>
          </div>
          <div>
            <Counter end={17.6} suffix="%" />
            <p className="text-aerionix-silver">CAGR of Indian Drone Market</p>
          </div>
          <div>
            <Counter end={70} suffix="%" />
            <p className="text-aerionix-silver">Cost Savings vs Imports</p>
          </div>
          <div>
            <Counter end={1.5} suffix="B+" />
            <p className="text-aerionix-silver">Potential Customers in India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-stone-100 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070")' 
        }}
      >
        <div className="absolute inset-0 bg-stone-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-widest uppercase mb-6 leading-tight">
          Timeless Moments
        </h1>
        <p className="font-light text-lg md:text-xl mb-10 text-stone-100 max-w-2xl mx-auto leading-relaxed tracking-wide">
          A boutique photography studio dedicated to capturing authentic stories with clarity and craft.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="white" onClick={() => navigate('/portfolio')}>
            View Portfolio
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-stone-900" onClick={() => navigate('/contact')}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
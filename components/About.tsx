import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[3/4] bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1470" 
                alt="Photographer in studio" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            {/* Decorative Outline Box */}
            <div className="absolute top-6 left-6 w-full h-full border-2 border-stone-800 pointer-events-none hidden md:block -z-10" />
          </div>

          {/* Text Side */}
          <div className="md:pl-8">
            <h2 className="text-3xl font-heading font-bold text-stone-900 uppercase tracking-wide mb-6">
              The Studio
            </h2>
            <div className="w-12 h-1 bg-stone-800 mb-8" />
            <div className="text-stone-600 space-y-6 leading-relaxed font-light">
              <p>
                Founded in 2015, Lumina Studio was built on a simple philosophy: photography should be honest, timeless, and crafted with intention. We believe that the most powerful images are those that capture the genuine essence of a subject, stripped of unnecessary distractions.
              </p>
              <p>
                Our approach blends classic portraiture techniques with a modern sensibility. We don't chase trends. Instead, we focus on light, composition, and connection. Whether it's a quiet wedding moment or a bold commercial campaign, our process remains grounded in preparation and precision.
              </p>
              <p>
                We invite you to step into our world, where every frame is considered and every client is treated as a collaborator in the creative process.
              </p>
            </div>
            <div className="mt-10">
              <Button onClick={() => navigate('/contact')}>
                Work With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
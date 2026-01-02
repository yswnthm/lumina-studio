import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-stone-800 uppercase tracking-wide mb-6 leading-tight">
              Ready to capture<br />your story?
            </h2>
            <p className="text-lg md:text-xl text-stone-600 font-light max-w-lg">
              We are currently accepting bookings for the 2024 season. Let's create something beautiful together that lasts a lifetime.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Button onClick={() => navigate('/contact')} className="px-8 py-4 text-lg">
              Let's talk about your project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
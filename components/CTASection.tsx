import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-stone-100 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-heading font-bold text-stone-800 uppercase tracking-wide mb-6">
          Ready to capture your story?
        </h2>
        <p className="text-stone-600 mb-8 font-light">
          We are currently accepting bookings for the 2024 season. Let's create something beautiful together.
        </p>
        <Button onClick={() => navigate('/contact')}>
          Let's talk about your project
        </Button>
      </div>
    </section>
  );
};
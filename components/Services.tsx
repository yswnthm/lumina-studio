import React from 'react';
import { SERVICES } from '../constants';
import { SectionHeading } from './SectionHeading';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          title="Services" 
          subtitle="Comprehensive photography solutions tailored to your needs."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 border border-stone-200 hover:border-stone-400 transition-colors duration-300">
              <h3 className="font-heading font-bold text-lg text-stone-900 uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 italic mb-6">
            Custom packages available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};
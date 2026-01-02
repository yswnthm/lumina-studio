import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-wide mb-4">
            Kind Words
          </h2>
          <div className="w-12 h-1 bg-stone-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center text-center">
              <Quote className="text-stone-700 mb-6 w-8 h-8" />
              <p className="font-light italic text-stone-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white">
                  {testimonial.author}
                </h4>
                {testimonial.role && (
                  <span className="text-stone-500 text-xs uppercase tracking-wider mt-1 block">
                    {testimonial.role}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { CATEGORIES, PORTFOLIO_ITEMS } from '../constants';
import { SectionHeading } from './SectionHeading';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          title="Selected Work" 
          subtitle="A curated collection of our recent projects."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs font-bold uppercase tracking-widest pb-1 border-b-2 transition-colors duration-300 ${
                activeCategory === category 
                  ? 'text-stone-900 border-stone-800' 
                  : 'text-stone-400 border-transparent hover:text-stone-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] bg-stone-100 cursor-pointer overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <span className="text-xs font-bold uppercase tracking-widest mb-2 text-stone-300">
                  {item.category}
                </span>
                <h3 className="font-heading font-semibold text-xl tracking-wide text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
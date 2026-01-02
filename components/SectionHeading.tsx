import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center' 
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-heading font-bold text-stone-900 uppercase tracking-wide mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className={`w-12 h-1 bg-stone-300 mb-6 ${alignment === 'center' ? 'mx-auto' : ''}`} />
      )}
      {subtitle && (
        <p className="text-stone-500 font-light text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
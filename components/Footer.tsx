import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 py-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <span className="font-heading font-bold text-xl tracking-widest text-stone-900 uppercase mb-6">
          Lumina
        </span>

        <div className="flex space-x-6 mb-8">
          {['Instagram', 'Facebook', 'Pinterest'].map(social => (
            <a key={social} href="#" className="text-stone-400 hover:text-stone-800 text-xs font-bold uppercase tracking-widest transition-colors">
              {social}
            </a>
          ))}
        </div>

        <p className="text-stone-400 text-xs">
          MADE WITH LOVE BY <a href="https://solicate.in" target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 transition-colors">SOLICATE</a> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
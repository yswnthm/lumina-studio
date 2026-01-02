import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 uppercase tracking-[0.15em] text-xs font-bold transition-colors duration-300 rounded-none border-2 font-heading";
  
  const variants = {
    primary: "bg-stone-800 text-white border-stone-800 hover:bg-stone-700 hover:border-stone-700",
    outline: "bg-transparent text-stone-800 border-stone-800 hover:bg-stone-800 hover:text-white",
    white: "bg-white text-stone-900 border-white hover:bg-stone-100 hover:border-stone-100"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
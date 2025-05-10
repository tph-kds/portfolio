import React from 'react';
import { MARBLE_SIZE, LINE_AMPLITUDE } from '@/contants/contants';
import { MarbleDotProps } from '@/contants/types';


// Marble Component (main scrolling dot) - Unchanged
const Marble = ({ marbleDotProps , isDark}: { marbleDotProps: MarbleDotProps , isDark: boolean}) => {
  // Marble horizontal position matches the active marker dot's horizontal position
  const xOffset = marbleDotProps.activeIndex % 2 === 0 ? LINE_AMPLITUDE - LINE_AMPLITUDE / 2 + 10 : -LINE_AMPLITUDE + 20;
  return (
    <div
      className="absolute rounded-full shadow-xl transition-all duration-300 ease-out"
      style={{
        width: MARBLE_SIZE,
        height: MARBLE_SIZE,
        left: '50%',
        // Adjust transform to position the marble center over the active marker dot's horizontal position
        transform: `translateX(calc(-50% + ${xOffset}px)) translateY(${marbleDotProps.top}px)`,
        background: isDark ? 'radial-gradient(circle at 30% 30%, rgba(100,255,255,1) 0%, rgba(50,180,255,0.9) 50%, rgba(150,100,220,0.8) 100%)' : 'radial-gradient(circle at 30% 30%, #ff64aa 0%, rgba(125, 50, 255, 0.9) 50%, rgba(239, 228, 30, 0.8) 100%)',
        border: isDark ? '3px solid rgba(255, 255, 255, 0.5)' : '3px solid rgba(118, 103, 103, 0.5)',
        boxShadow: '0 0 10px rgba(0,255,255,0.5), 0 0 15px rgba(0,150,255,0.3)',
        zIndex: 20,
      }}
      aria-hidden="true"
    />
  );
};

export default Marble;
import React, { useEffect, useRef } from 'react';

interface CyclingAnimationProps {
  scrollPosition: number;
}

const CyclingAnimation: React.FC<CyclingAnimationProps> = ({ scrollPosition }) => {
  const cyclistRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cyclistElement = cyclistRef.current;
    if (!cyclistElement) return;
    
    // Calculate position based on scroll - keep cyclist in view while scrolling
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    
    // Adjust the cyclist's vertical position based on scroll
    // This creates a "following" effect as user scrolls
    if (scrollPosition < windowHeight) {
      // In the first viewport height, cyclist starts near the bottom
      cyclistElement.style.bottom = `${20}%`;
    } else if (scrollPosition > maxScroll - windowHeight) {
      // In the last viewport height, cyclist moves toward the bottom
      cyclistElement.style.bottom = `${20}%`;
    } else {
      // In between, cyclist stays in middle area
      cyclistElement.style.bottom = `${30}%`;
    }
    
  }, [scrollPosition]);
  
  return (
    <div 
      ref={cyclistRef}
      className="fixed left-0 h-24 z-20 animate-cycling"
      style={{ 
        bottom: '20%',
        transition: 'bottom 0.5s ease',
      }}
    >
      {/* Cyclist SVG */}
      <div className="relative w-24 h-24">
        {/* Person */}
        <div className="absolute top-2 left-8 w-6 h-6 bg-blue-700 rounded-full">
          {/* Head */}
        </div>
        <div className="absolute top-8 left-9 w-4 h-10 bg-blue-700 rounded">
          {/* Body */}
        </div>
        <div className="absolute top-12 left-11 w-8 h-2 bg-blue-700 transform -rotate-45">
          {/* Arms */}
        </div>
        
        {/* Bicycle */}
        <div className="absolute top-18 left-6">
          {/* Bike frame */}
          <div className="absolute top-6 left-4 w-10 h-1 bg-black transform -rotate-12"></div>
          <div className="absolute top-6 left-4 w-8 h-1 bg-black transform rotate-45"></div>
          <div className="absolute top-12 left-4 w-10 h-1 bg-black"></div>
          
          {/* Wheels */}
          <div className="absolute top-12 left-2 w-6 h-6 rounded-full border-2 border-black"></div>
          <div className="absolute top-12 left-14 w-6 h-6 rounded-full border-2 border-black"></div>
          
          {/* Pedal */}
          <div className="absolute top-12 left-8 w-1 h-6 bg-black origin-top animate-pedal"></div>
        </div>
      </div>
    </div>
  );
};

export default CyclingAnimation;


import React, { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  scrollPosition: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollPosition }) => {
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; size: string; delay: string }>>([]);
  
  // Generate stars on component mount
  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      // Generate 100 stars with random positions
      for (let i = 0; i < 100; i++) {
        starsArray.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 0.2 + 0.1}rem`,
          delay: `${Math.random() * 10}s`
        });
      }
      setStars(starsArray);
    };

    generateStars();
  }, []);

  // Generate shooting stars
  const shootingStars = Array(5).fill(0).map((_, i) => (
    <div 
      key={`shooting-${i}`} 
      className="absolute h-0.5 w-20 bg-white opacity-0 animate-shooting-star"
      style={{ 
        top: `${Math.random() * 50}%`, 
        left: `${Math.random() * 100}%`,
        transform: 'rotate(-45deg)',
        animationDelay: `${Math.random() * 15}s`,
      }}
    />
  ));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {/* Night sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-[#121212]"></div>
      
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {shootingStars}
      
      {/* Moon */}
      <div 
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 animate-float" 
        style={{
          top: '15%',
          right: '15%',
          boxShadow: '0 0 70px 10px rgba(255, 255, 255, 0.4)',
        }}
      />
      
      {/* Distant Mountains - Parallax effect */}
      <div className="absolute bottom-0 w-full">
        {/* Far mountain (moves slower) */}
        <div 
          className="absolute bottom-0 w-full h-48 bg-indigo-900 rounded-t-full"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.02}px)`,
            opacity: 0.6,
            borderRadius: '100% 100% 0 0',
          }}
        />
        
        {/* Middle mountain */}
        <div 
          className="absolute bottom-0 w-full h-64 bg-indigo-800 rounded-t-full"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.05}px)`,
            opacity: 0.7,
            borderRadius: '100% 100% 0 0',
          }}
        />
        
        {/* Near mountain (moves faster) */}
        <div 
          className="absolute bottom-0 w-full h-80 bg-indigo-700 rounded-t-full"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.08}px)`,
            borderRadius: '100% 100% 0 0',
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;

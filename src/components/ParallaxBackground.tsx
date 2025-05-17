
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

interface ParallaxBackgroundProps {
  scrollPosition: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollPosition }) => {
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; size: string; delay: string }>>([]);
  const { theme } = useTheme();
  
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
      className={`absolute h-0.5 w-20 bg-white ${theme === 'night' || theme === 'evening' ? 'opacity-0 animate-shooting-star' : 'opacity-0'}`}
      style={{ 
        top: `${Math.random() * 50}%`, 
        left: `${Math.random() * 100}%`,
        transform: 'rotate(-45deg)',
        animationDelay: `${Math.random() * 15}s`,
      }}
    />
  ));

  // Theme-based backgrounds
  const getBackgroundGradient = () => {
    switch(theme) {
      case 'morning':
        return 'bg-gradient-to-b from-orange-300 via-blue-300 to-purple-900';
      case 'day':
        return 'bg-gradient-to-b from-sky-400 via-blue-400 to-blue-600';
      case 'evening':
        return 'bg-gradient-to-b from-orange-400 via-purple-500 to-indigo-900';
      case 'night':
      default:
        return 'bg-gradient-to-b from-indigo-900 via-purple-900 to-[#121212]';
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0 transition-colors duration-1000">
      {/* Night sky background - changes with theme */}
      <div className={`absolute inset-0 ${getBackgroundGradient()} transition-all duration-1000`}></div>
      
      {/* Stars - only visible at night and evening */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white transition-opacity duration-1000 ${theme === 'night' || theme === 'evening' ? 'animate-twinkle opacity-100' : 'opacity-0'}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
      
      {/* Shooting stars - only visible at night */}
      {theme === 'night' || theme === 'evening' ? shootingStars : null}
      
      {/* Sun or Moon based on theme */}
      <div 
        className={`absolute w-20 h-20 rounded-full transition-all duration-1000 animate-float`}
        style={{
          top: theme === 'morning' ? '35%' : theme === 'day' ? '15%' : theme === 'evening' ? '60%' : '200%',
          right: '15%',
          opacity: theme === 'night' ? 0 : 1,
          background: theme === 'morning' 
            ? 'linear-gradient(to right bottom, #ffab91, #ff9800)'
            : theme === 'day' 
              ? 'linear-gradient(to right bottom, #ffeb3b, #ffc107)'
              : 'linear-gradient(to right bottom, #ff7043, #e64a19)',
          boxShadow: `0 0 70px 10px rgba(255, ${theme === 'morning' || theme === 'day' ? '255' : '150'}, 0, 0.4)`,
        }}
      />
      
      {/* Moon - only visible at night and partially in evening */}
      <div 
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 animate-float transition-all duration-1000" 
        style={{
          top: theme === 'night' ? '15%' : theme === 'evening' ? '35%' : '200%',
          right: '15%',
          opacity: theme === 'night' ? 1 : theme === 'evening' ? 0.7 : 0,
          boxShadow: '0 0 70px 10px rgba(255, 255, 255, 0.4)',
        }}
      />
      
      {/* Clouds - more prominent during day and evening */}
      <div
        className="absolute w-40 h-20 left-1/4 bg-white opacity-80 rounded-full animate-cloud-slow transition-opacity duration-1000"
        style={{
          top: '25%',
          filter: 'blur(8px)',
          opacity: theme === 'day' || theme === 'morning' ? 0.8 : theme === 'evening' ? 0.4 : 0,
        }}
      />
      
      <div
        className="absolute w-32 h-16 right-1/4 bg-white opacity-80 rounded-full animate-cloud-fast transition-opacity duration-1000"
        style={{
          top: '30%',
          filter: 'blur(6px)',
          opacity: theme === 'day' || theme === 'morning' ? 0.7 : theme === 'evening' ? 0.3 : 0,
        }}
      />
      
      {/* Distant Mountains - Parallax effect */}
      <div className="absolute bottom-0 w-full">
        {/* Far mountain (moves slower) */}
        <div 
          className="absolute bottom-0 w-full h-48 rounded-t-full transition-all duration-1000"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.02}px)`,
            opacity: 0.6,
            borderRadius: '100% 100% 0 0',
            backgroundColor: theme === 'night' ? '#1e1b4b' : 
                            theme === 'evening' ? '#4c1d95' :
                            theme === 'day' ? '#3b82f6' : '#7e22ce',
          }}
        />
        
        {/* Middle mountain */}
        <div 
          className="absolute bottom-0 w-full h-64 rounded-t-full transition-all duration-1000"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.05}px)`,
            opacity: 0.7,
            borderRadius: '100% 100% 0 0',
            backgroundColor: theme === 'night' ? '#312e81' : 
                            theme === 'evening' ? '#581c87' :
                            theme === 'day' ? '#2563eb' : '#9333ea',
          }}
        />
        
        {/* Near mountain (moves faster) */}
        <div 
          className="absolute bottom-0 w-full h-80 rounded-t-full transition-all duration-1000"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.08}px)`,
            borderRadius: '100% 100% 0 0',
            backgroundColor: theme === 'night' ? '#4338ca' : 
                            theme === 'evening' ? '#7e22ce' :
                            theme === 'day' ? '#1d4ed8' : '#a855f7',
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;

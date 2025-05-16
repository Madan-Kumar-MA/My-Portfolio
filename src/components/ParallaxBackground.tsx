
import React from 'react';

interface ParallaxBackgroundProps {
  scrollPosition: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollPosition }) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-sky"></div>
      
      {/* Sun */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-yellow-300 animate-float" 
        style={{
          boxShadow: '0 0 70px 20px rgba(255, 236, 173, 0.7)',
        }}></div>
      
      {/* Clouds - Different speeds and initial positions */}
      <div className="absolute top-16 animate-cloud-slow opacity-90" 
        style={{ animationDelay: '0s', transform: `translateX(${50 - scrollPosition * 0.05}%)` }}>
        <div className="w-32 h-12 bg-white rounded-full"></div>
        <div className="w-16 h-10 bg-white rounded-full absolute -top-4 left-10"></div>
        <div className="w-16 h-10 bg-white rounded-full absolute -top-2 left-20"></div>
      </div>
      
      <div className="absolute top-36 animate-cloud-fast opacity-80" 
        style={{ animationDelay: '5s', transform: `translateX(${70 - scrollPosition * 0.08}%)` }}>
        <div className="w-24 h-10 bg-white rounded-full"></div>
        <div className="w-12 h-8 bg-white rounded-full absolute -top-3 left-8"></div>
        <div className="w-12 h-8 bg-white rounded-full absolute -top-1 left-14"></div>
      </div>
      
      <div className="absolute top-24 animate-cloud-slow opacity-70" 
        style={{ animationDelay: '2s', transform: `translateX(${10 - scrollPosition * 0.03}%)` }}>
        <div className="w-20 h-8 bg-white rounded-full"></div>
        <div className="w-10 h-6 bg-white rounded-full absolute -top-2 left-6"></div>
        <div className="w-10 h-6 bg-white rounded-full absolute -top-1 left-12"></div>
      </div>
      
      {/* Hills - Parallax effect */}
      <div className="absolute bottom-0 w-full">
        {/* Far hill (moves slower) */}
        <div className="absolute bottom-0 w-full h-32 bg-green-700 rounded-t-full"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.02}px)`,
            opacity: 0.6,
            borderRadius: '100% 100% 0 0',
          }}>
        </div>
        
        {/* Middle hill */}
        <div className="absolute bottom-0 w-full h-48 bg-green-600 rounded-t-full"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.04}px)`,
            opacity: 0.8,
            borderRadius: '100% 100% 0 0',
          }}>
        </div>
        
        {/* Near hill (moves faster) */}
        <div className="absolute bottom-0 w-full h-64 bg-green-500 rounded-t-full"
          style={{ 
            transform: `translateX(${-scrollPosition * 0.06}px)`,
            borderRadius: '100% 100% 0 0',
          }}>
        </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;

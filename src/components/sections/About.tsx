
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const About: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();
  
  const getThemeClasses = () => {
    const baseStyle = 'section transition-all duration-1000 ';
    
    switch(theme) {
      case 'morning':
        return baseStyle + 'bg-orange-50/30 backdrop-blur-sm';
      case 'day':
        return baseStyle + 'bg-blue-50/30 backdrop-blur-sm';
      case 'evening':
        return baseStyle + 'bg-purple-100/30 backdrop-blur-sm';
      case 'night':
      default:
        return baseStyle + 'bg-indigo-950/70 backdrop-blur-sm';
    }
  };

  const getTextColor = () => {
    switch(theme) {
      case 'morning':
        return 'text-gray-800';
      case 'day':
        return 'text-gray-900';
      case 'evening':
        return 'text-gray-100';
      case 'night':
      default:
        return 'text-white';
    }
  };

  return (
    <section id="about" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.03}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden shadow-xl shadow-purple-500/20">
            <img
              src="/madan-photo.jpg"
              alt="Madan Kumar M A Portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={getTextColor()}>
            <h3 className="text-2xl font-semibold font-display mb-4">Who am I?</h3>
            <p className="mb-6">
              I'm a tech-savvy leader skilled in Kotlin development, creative video editing, clear audio enhancement, and impactful visual branding. Currently pursuing M.C.A. in Computer Applications at RNS Institute of Technology with an 8.7 CGPA.
            </p>
            <p className="mb-6">
              My journey encompasses frontend development, mobile app development with Android Studio, and comprehensive video/graphics editing. I specialize in creating engaging digital content and user-friendly applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p>Bengaluru, Karnataka</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Institution</h4>
                <p>RNS Institute Of Technology</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Degree</h4>
                <p>M.C.A. Computer Applications</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">CGPA</h4>
                <p>8.7 / 10.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../contexts/ThemeContext';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getButtonStyle = () => {
    switch(theme) {
      case 'morning':
        return 'bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white shadow-md shadow-orange-500/20';
      case 'day':
        return 'bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 text-white shadow-md shadow-sky-500/20';
      case 'evening':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md shadow-purple-500/20';
      case 'night':
      default:
        return 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-700/20';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#hero" className="text-xl font-bold font-display text-primary">
          <span className="text-gradient">John Smith</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-700 hover:text-primary transition-colors hover:underline underline-offset-4"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button className={`hidden md:block ${getButtonStyle()} transition-all duration-300 hover:-translate-y-1`}>Download CV</Button>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;

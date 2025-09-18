
import React from 'react';
import { Button } from "@/components/ui/button";
import { useTheme } from '../../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
  const getButtonStyles = () => {
    switch(theme) {
      case 'morning':
        return {
          primary: "bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-600 text-white shadow-lg shadow-orange-500/30",
          secondary: "border-2 border-orange-400 text-orange-400 hover:bg-orange-400/20 shadow-lg shadow-orange-400/20"
        };
      case 'day':
        return {
          primary: "bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-500 hover:to-sky-600 text-white shadow-lg shadow-sky-500/30",
          secondary: "border-2 border-blue-400 text-blue-400 hover:bg-blue-400/20 shadow-lg shadow-blue-400/20"
        };
      case 'evening':
        return {
          primary: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30",
          secondary: "border-2 border-purple-400 text-purple-400 hover:bg-purple-400/20 shadow-lg shadow-purple-400/20"
        };
      case 'night':
      default:
        return {
          primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-700/30",
          secondary: "border-2 border-indigo-400 text-white hover:bg-indigo-400/20 shadow-lg shadow-indigo-600/20"
        };
    }
  };

  const buttonStyles = getButtonStyles();

  return (
    <section id="hero" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
            Hi, I'm <span className="text-gradient">Madan Kumar M A</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Web Developer • Android Developer • Machine Learning
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild className={`${buttonStyles.primary} transition-all duration-300 transform hover:scale-105`}>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className={`${buttonStyles.secondary} transition-all duration-300 transform hover:scale-105`}>
              <a href="#projects">View My Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

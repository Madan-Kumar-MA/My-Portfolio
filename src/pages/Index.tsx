
import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/ParallaxBackground';
import { useTheme } from '../contexts/ThemeContext';

// Import section components
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { setTheme } = useTheme();
  const pageHeight = useRef(0);

  useEffect(() => {
    // Get document height for percentage calculation
    pageHeight.current = Math.max(
      document.body.scrollHeight, 
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight, 
      document.documentElement.offsetHeight
    );
    
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Calculate scroll percentage
      const scrollPercentage = (position / (pageHeight.current - window.innerHeight)) * 100;
      
      // Change theme based on scroll percentage
      if (scrollPercentage < 25) {
        setTheme('morning');
      } else if (scrollPercentage < 50) {
        setTheme('day');
      } else if (scrollPercentage < 75) {
        setTheme('evening');
      } else {
        setTheme('night');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set correct theme
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setTheme]);

  return (
    <>
      <ParallaxBackground scrollPosition={scrollPosition} />
      <NavBar />
      
      <main className="pt-16">
        <Hero />
        <About scrollPosition={scrollPosition} />
        <Skills scrollPosition={scrollPosition} />
        <Projects scrollPosition={scrollPosition} />
        <Experience scrollPosition={scrollPosition} />
        <Education scrollPosition={scrollPosition} />
        <Contact scrollPosition={scrollPosition} />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;


import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-white">
            Hi, I'm <span className="text-gradient">John Smith</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            Computer Science Student & Full Stack Developer
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-white border-white hover:bg-white/20">
              <a href="#projects">View My Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

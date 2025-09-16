
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ProjectCard from '../ProjectCard';
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const Projects: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      title: "Simple Calculator",
      description: "A user-friendly Android application that functions as a basic calculator, capable of performing fundamental arithmetic operations including addition, subtraction, multiplication, and division.",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=500",
      tags: ["Java", "XML", "Android Studio"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Podcast Editing",
      description: "Comprehensive video editing service improving viewer engagement by trimming silence, adding visuals, maintaining brand identity with consistent intros, logos, and styles for multiple platforms.",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500",
      tags: ["Video Editing", "Computer Vision", "Audio Enhancement"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio website that effectively showcases professional skills, projects, and achievements with clean UI and optimal user experience.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

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

  const getButtonStyle = () => {
    switch(theme) {
      case 'morning':
        return 'border-2 border-orange-500 text-orange-600 hover:bg-orange-500/20 shadow-lg shadow-orange-500/20';
      case 'day':
        return 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500/20 shadow-lg shadow-blue-500/20';
      case 'evening':
        return 'border-2 border-purple-400 text-white hover:bg-purple-400/20 shadow-lg shadow-purple-400/20';
      case 'night':
      default:
        return 'border-2 border-indigo-400 text-white hover:bg-indigo-400/20 shadow-lg shadow-indigo-600/20';
    }
  };

  return (
    <section id="projects" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.01}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className={`${getButtonStyle()} transition-all duration-300 transform hover:scale-105`}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


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
      title: "E-learning Platform",
      description: "A responsive web application for online learning with interactive quizzes and progress tracking.",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=500",
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity tool with drag-and-drop interface for managing tasks and deadlines.",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500",
      tags: ["Vue.js", "Firebase", "Tailwind"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecast application with interactive maps and historical data.",
      imageUrl: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?auto=format&fit=crop&q=80&w=500",
      tags: ["JavaScript", "OpenWeatherAPI", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with interactive elements and responsive design.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500",
      tags: ["React", "Tailwind CSS", "Three.js"],
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
          <Button variant="outline" size="lg" asChild className={`${theme === 'night' ? 'text-white border-white hover:bg-white/20' : theme === 'evening' ? 'text-white border-white hover:bg-white/20' : 'text-indigo-900 border-indigo-900 hover:bg-indigo-900/20'}`}>
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

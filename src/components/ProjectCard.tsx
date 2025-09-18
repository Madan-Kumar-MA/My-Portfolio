
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from '../contexts/ThemeContext';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  tags,
  demoUrl,
  codeUrl
}) => {
  const { theme } = useTheme();
  
  const getButtonStyle = (isPrimary: boolean = false) => {
    switch(theme) {
      case 'morning':
        return isPrimary 
          ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-white border-none hover:from-orange-500 hover:to-yellow-600" 
          : "border border-orange-400 text-orange-600 hover:bg-orange-400/10";
      case 'day':
        return isPrimary 
          ? "bg-gradient-to-r from-blue-400 to-sky-500 text-white border-none hover:from-blue-500 hover:to-sky-600" 
          : "border border-blue-400 text-blue-600 hover:bg-blue-400/10";
      case 'evening':
        return isPrimary 
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:from-purple-600 hover:to-pink-600" 
          : "border border-purple-400 text-purple-200 hover:bg-purple-400/10";
      case 'night':
      default:
        return isPrimary 
          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none hover:from-indigo-700 hover:to-purple-700" 
          : "border border-indigo-400 text-indigo-200 hover:bg-indigo-400/10";
    }
  };
  
  const getTagStyle = () => {
    switch(theme) {
      case 'morning':
        return 'bg-orange-400/20 text-orange-700';
      case 'day':
        return 'bg-blue-400/20 text-blue-700';
      case 'evening':
        return 'bg-purple-400/20 text-purple-100';
      case 'night':
      default:
        return 'bg-indigo-400/20 text-indigo-100';
    }
  };

  const getCardStyle = () => {
    switch(theme) {
      case 'morning':
        return 'bg-white/80 border-orange-200 shadow-orange-200/20';
      case 'day':
        return 'bg-white/80 border-blue-200 shadow-blue-200/20';
      case 'evening':
        return 'bg-purple-900/40 border-purple-300/30 shadow-purple-500/20';
      case 'night':
      default:
        return 'bg-indigo-950/40 border-indigo-300/30 shadow-indigo-500/20';
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border shadow-xl ${getCardStyle()}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`px-2 py-1 text-xs font-medium rounded-full ${getTagStyle()}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        {codeUrl && (
          <Button variant="outline" size="sm" asChild className={`${getButtonStyle(true)} transition-all duration-300 transform hover:scale-105`}>
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

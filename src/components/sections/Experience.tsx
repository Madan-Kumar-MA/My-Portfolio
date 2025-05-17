
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";

interface WorkExperience {
  position: string;
  company: string;
  period: string;
  description: string;
}

const Experience: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();
  
  const experiences: WorkExperience[] = [
    {
      position: "Web Development Intern",
      company: "Tech Innovations Inc.",
      period: "May 2023 - Aug 2023",
      description: "Developed responsive web applications using React and Node.js. Collaborated with the design team to implement UI/UX improvements."
    },
    {
      position: "Student Research Assistant",
      company: "University AI Lab",
      period: "Jan 2023 - Present",
      description: "Researching applications of machine learning in web development. Implemented prototype systems for automated accessibility testing."
    },
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      period: "2021 - Present",
      description: "Designed and developed websites for small businesses and non-profit organizations."
    }
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
    <section id="experience" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.02}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className={`${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-800' : 'text-orange-800'} font-medium`}>{exp.period}</span>
                </div>
                <p className={`font-medium opacity-80 mb-2`}>{exp.company}</p>
                <p className="opacity-70">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

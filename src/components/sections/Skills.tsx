
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();
  
  const skills: Skill[] = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
    { name: "TypeScript", level: 82 },
    { name: "Git", level: 88 },
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
    <section id="skills" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.02}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className={getTextColor()}>
            <h3 className="text-2xl font-semibold font-display mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className={`h-2 ${theme === 'night' ? 'bg-indigo-900' : theme === 'evening' ? 'bg-purple-800' : theme === 'day' ? 'bg-blue-700' : 'bg-orange-700'}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-semibold font-display mb-6 ${getTextColor()}`}>Other Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Problem Solving</h4>
                  <p className="text-sm opacity-80">
                    Analytical approach to debug issues and develop efficient solutions
                  </p>
                </CardContent>
              </Card>
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Communication</h4>
                  <p className="text-sm opacity-80">
                    Clear and effective communication in technical and non-technical contexts
                  </p>
                </CardContent>
              </Card>
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Project Management</h4>
                  <p className="text-sm opacity-80">
                    Experience with Agile methodologies and team collaboration tools
                  </p>
                </CardContent>
              </Card>
              <Card className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-sm opacity-80">
                    Creating intuitive user interfaces with focus on user experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

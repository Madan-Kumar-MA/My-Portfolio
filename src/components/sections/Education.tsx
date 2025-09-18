
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface Achievement {
  title: string;
  description: string;
}

const Education: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const { theme } = useTheme();
  
  const education: EducationItem[] = [
    {
      degree: "Master of Computer Applications (M.C.A.)",
      institution: "RNS Institute of Technology",
      year: "Dec 2024 - Present",
      description: "Machine Learning, DSA, DBMS, Java, Web Technologies"
    },
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Mahatma Gandhi Memorial College, Bangalore",
      year: "2020 - 2023",
      description: "Udupi"
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Explore Machine Learning using Python",
      issuer: "Online Certification",
      year: "2024"
    },
    {
      name: "Front End Web Developer Certification",
      issuer: "Online Certification",
      year: "2024"
    },
    {
      name: "Certification of Excellence in Front-End Web Development [MCA x IEEE]",
      issuer: "RNS Institute Of Technology • IEEE",
      year: "2024"
    },
    {
      name: "Mastering Kotlin for Android Development",
      issuer: "Online Certification",
      year: "2025"
    }
  ];
  
  const achievements: Achievement[] = [
    {
      title: "Class Representative – MCA Department",
      description: "Acted as a bridge between faculty and students ensuring smooth communication. Coordinated academic and extracurricular activities on behalf of the class."
    },
    {
      title: "Lead Organizer – Sportify, Akanksh Alumni Meet",
      description: "Planned and executed the MCA department’s sports fest, cultural fest, and alumni meet. Managed logistics, team coordination, and student engagement, ensuring successful events."
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
    <section id="education" className={getThemeClasses()}>
      <div 
        className="container mx-auto px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.02}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold font-display mb-12 text-center ${getTextColor()}`}>
          My <span className="text-gradient">Education</span>
        </h2>
        
        <Tabs defaultValue="education" className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className={theme === 'night' ? 'bg-indigo-900/50' : theme === 'evening' ? 'bg-purple-800/50' : theme === 'day' ? 'bg-blue-600/30' : 'bg-orange-600/30'}>
              <TabsTrigger 
                value="education" 
                className={`data-[state=active]:${theme === 'night' ? 'bg-purple-600' : theme === 'evening' ? 'bg-purple-500' : theme === 'day' ? 'bg-blue-500' : 'bg-orange-500'}`}
              >
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="certifications" 
                className={`data-[state=active]:${theme === 'night' ? 'bg-purple-600' : theme === 'evening' ? 'bg-purple-500' : theme === 'day' ? 'bg-blue-500' : 'bg-orange-500'}`}
              >
                Certifications
              </TabsTrigger>
              <TabsTrigger 
                value="achievements" 
                className={`data-[state=active]:${theme === 'night' ? 'bg-purple-600' : theme === 'evening' ? 'bg-purple-500' : theme === 'day' ? 'bg-blue-500' : 'bg-orange-500'}`}
              >
                Achievements
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="education">
            <div className="space-y-8">
              {education.map((item, index) => (
                <Card key={index} className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <span className={`${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-800' : 'text-orange-800'} font-medium`}>{item.year}</span>
                    </div>
                    <p className="font-medium opacity-80 mb-2">{item.institution}</p>
                    <p className="opacity-70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications">
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm opacity-80">{cert.issuer}</p>
                    </div>
                    <span className={`${theme === 'night' ? 'text-purple-400' : theme === 'evening' ? 'text-purple-300' : theme === 'day' ? 'text-blue-800' : 'text-orange-800'}`}>{cert.year}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`${theme === 'night' ? 'bg-indigo-950/50 border-purple-500/30' : theme === 'evening' ? 'bg-purple-900/50 border-purple-400/30' : theme === 'day' ? 'bg-blue-600/20 border-blue-300/30' : 'bg-orange-600/20 border-orange-300/30'} ${getTextColor()}`}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="opacity-70">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Education;

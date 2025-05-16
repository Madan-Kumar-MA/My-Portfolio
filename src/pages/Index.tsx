
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CyclingAnimation from '../components/CyclingAnimation';
import ParallaxBackground from '../components/ParallaxBackground';
import ProjectCard from '../components/ProjectCard';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 70 },
  ];

  const projects = [
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
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2020 - 2024",
      description: "Focus on Web Development and Artificial Intelligence"
    },
    {
      degree: "High School Diploma",
      institution: "Green Valley High School",
      year: "2016 - 2020",
      description: "Advanced Placement in Mathematics and Computer Science"
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      year: "2023"
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "Coursera",
      year: "2022"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023"
    },
  ];

  return (
    <>
      <ParallaxBackground scrollPosition={scrollPosition} />
      <CyclingAnimation scrollPosition={scrollPosition} />
      <NavBar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero" className="section min-h-screen flex items-center">
          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Hi, I'm <span className="text-gradient">John Smith</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Computer Science Student & Full Stack Developer
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">View My Projects</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
                  alt="John Smith Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-display mb-4">Who am I?</h3>
                <p className="text-gray-700 mb-6">
                  I'm a Computer Science student at University of Technology with a passion for web development and software engineering. Currently in my final year, I'm focusing on building accessible and user-friendly web applications.
                </p>
                <p className="text-gray-700 mb-6">
                  My journey started with simple HTML/CSS websites, but I've since expanded my skills to include full stack development with modern JavaScript frameworks and backend technologies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p>Cambridge, MA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p>john.smith@example.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Study</h4>
                    <p>University of Technology</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Degree</h4>
                    <p>B.Sc. Computer Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
              My <span className="text-gradient">Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-semibold font-display mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold font-display mb-6">Other Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Problem Solving</h4>
                      <p className="text-sm text-gray-600">
                        Analytical approach to debug issues and develop efficient solutions
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Communication</h4>
                      <p className="text-sm text-gray-600">
                        Clear and effective communication in technical and non-technical contexts
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Project Management</h4>
                      <p className="text-sm text-gray-600">
                        Experience with Agile methodologies and team collaboration tools
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">UI/UX Design</h4>
                      <p className="text-sm text-gray-600">
                        Creating intuitive user interfaces with focus on user experience
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
              My <span className="text-gradient">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
              My <span className="text-gradient">Education</span>
            </h2>
            
            <Tabs defaultValue="education" className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="education">
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                          <h3 className="text-xl font-semibold">{item.degree}</h3>
                          <span className="text-primary font-medium">{item.year}</span>
                        </div>
                        <p className="font-medium text-gray-600 mb-2">{item.institution}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="certifications">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                        </div>
                        <span className="text-primary">{cert.year}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <h3 className="text-2xl font-semibold font-display mb-4">Contact Information</h3>
                <p className="text-gray-700 mb-6">
                  Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">john.smith@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-3 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">Cambridge, MA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;

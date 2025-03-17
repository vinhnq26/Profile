import { useRef, useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with cart functionality, user authentication, and payment integration.",
      image: "https://picsum.photos/id/3/600/400",
      tags: ["React", "Redux", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A creative portfolio website with smooth animations and interactive elements.",
      image: "https://picsum.photos/id/24/600/400",
      tags: ["React", "GSAP", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "frontend"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
      image: "https://picsum.photos/id/48/600/400",
      tags: ["React", "Firebase", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      descriptiondescription: "An interactive weather dashboard with location-based forecasts, historical data, and beautiful visualizations.",
      image: "https://picsum.photos/id/60/600/400",
      tags: ["React", "Chart.js", "API Integration"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "frontend"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for social media analytics with real-time data visualization.",
      image: "https://picsum.photos/id/96/600/400",
      tags: ["React", "D3.js", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "frontend"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A full-featured blog platform with rich text editing, comments, and user profiles.",
      image: "https://picsum.photos/id/42/600/400",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "fullstack"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll opacity-0 translate-y-4">My Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-on-scroll opacity-0 translate-y-4">
            Here are some of my recent projects that showcase my skills and expertise in frontend development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-on-scroll opacity-0 translate-y-4">
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"} 
              onClick={() => setActiveFilter("all")}
              className="transition-all duration-300"
            >
              All Projects
            </Button>
            <Button 
              variant={activeFilter === "frontend" ? "default" : "outline"} 
              onClick={() => setActiveFilter("frontend")}
              className="transition-all duration-300"
            >
              Frontend
            </Button>
            <Button 
              variant={activeFilter === "fullstack" ? "default" : "outline"} 
              onClick={() => setActiveFilter("fullstack")}
              className="transition-all duration-300"
            >
              Full Stack
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
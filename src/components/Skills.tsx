import { useRef, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            
            // Animate progress bars when they come into view
            const progressBars = entry.target.querySelectorAll("[data-progress]");
            progressBars.forEach((bar: Element) => {
              const progressBar = bar as HTMLElement;
              const value = progressBar.dataset.progress;
              if (value) {
                setTimeout(() => {
                  progressBar.style.width = value;
                }, 100);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: "HTML5/CSS3", level: "95%" },
    { name: "JavaScript (ES6+)", level: "90%" },
    { name: "React", level: "92%" },
    { name: "TypeScript", level: "85%" },
    { name: "Tailwind CSS", level: "88%" },
  ];

  const otherSkills = [
    { name: "Next.js", level: "80%" },
    { name: "Redux", level: "85%" },
    { name: "GraphQL", level: "75%" },
    { name: "Webpack/Vite", level: "78%" },
    { name: "Jest/Testing Library", level: "82%" },
  ];

  const technologies = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Next.js", "Redux", "GraphQL", "Webpack", 
    "Vite", "Jest", "React Testing Library", "Git", "GitHub",
    "Figma", "Responsive Design", "PWA", "Web Animation API", "GSAP"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll opacity-0 translate-y-4">My Skills</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-4">
            Over the years, I've honed my skills in various frontend technologies, focusing on creating performant and visually appealing web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-on-scroll opacity-0 translate-x-[-20px]">
            <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: "0%" }}
                    data-progress={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 animate-on-scroll opacity-0 translate-x-[20px]">
            <h3 className="text-2xl font-bold mb-4">Other Skills</h3>
            {otherSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: "0%" }}
                    data-progress={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-4">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="text-sm py-1.5 px-3 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
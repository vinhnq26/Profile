import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const letters = title.innerText.split("");
    title.innerHTML = "";
    
    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.className = "inline-block animate-fade-in opacity-0";
      title.appendChild(span);
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in-up">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Frontend Developer
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Crafting beautiful, interactive web experiences with 4 years of expertise in modern frontend technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex space-x-4 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-float">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/80 to-primary/20 blur-2xl opacity-70 animate-pulse"></div>
            <img 
              src="https://picsum.photos/id/1005/400/400" 
              alt="Developer Portrait" 
              className="rounded-full object-cover w-full h-full border-4 border-background relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-3 shadow-lg z-20 animate-bounce-slow">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center text-primary-foreground font-bold">
                4 YRS
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
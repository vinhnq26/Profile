import { useRef, useEffect } from "react";
import { motion } from "./ui/motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 animate-on-scroll opacity-0 translate-y-4">About Me</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll opacity-0 translate-y-4">My Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-4">
            With 4 years of experience in frontend development, I've built a diverse portfolio of projects and mastered modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll opacity-0 translate-x-[-20px]">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-xl opacity-70"></div>
            <Card className="relative z-10 overflow-hidden border-primary/20">
              <CardContent className="p-0">
                <img 
                  src="https://picsum.photos/id/1/600/800" 
                  alt="Developer working" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <motion.div className="animate-on-scroll opacity-0 translate-x-[20px]">
              <h3 className="text-2xl font-bold mb-2">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a passionate frontend developer who loves creating beautiful, interactive web experiences. My journey began 4 years ago, and I've been constantly learning and evolving ever since.
              </p>
            </motion.div>

            <motion.div className="animate-on-scroll opacity-0 translate-x-[20px]" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-2">My Approach</h3>
              <p className="text-muted-foreground mb-4">
                I believe in clean, maintainable code and user-centered design. I'm obsessed with performance optimization and creating smooth, engaging animations that enhance the user experience.
              </p>
            </motion.div>

            <motion.div className="animate-on-scroll opacity-0 translate-x-[20px]" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-2">Career Highlights</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Led frontend development for 10+ successful projects</li>
                <li>Reduced load times by 40% through optimization techniques</li>
                <li>Implemented responsive designs for various screen sizes</li>
                <li>Collaborated with cross-functional teams to deliver exceptional products</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
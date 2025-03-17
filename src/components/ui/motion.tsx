import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  animateFrom?: "left" | "right" | "top" | "bottom";
}

export const motion = {
  div: ({
    children,
    delay = 0,
    duration = 0.5,
    once = true,
    className,
    animateFrom = "bottom",
    ...props
  }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              if (once) observer.unobserve(entry.target);
            } else if (!once) {
              entry.target.classList.remove("animate-in");
            }
          });
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [once]);

    let initialClasses = "opacity-0 transition-all duration-500";
    
    switch (animateFrom) {
      case "left":
        initialClasses += " -translate-x-10";
        break;
      case "right":
        initialClasses += " translate-x-10";
        break;
      case "top":
        initialClasses += " -translate-y-10";
        break;
      case "bottom":
        initialClasses += " translate-y-10";
        break;
    }

    const style = {
      transitionDelay: `${delay}s`,
      transitionDuration: `${duration}s`,
    };

    return (
      <div
        ref={ref}
        className={cn(initialClasses, className)}
        style={style}
        {...props}
      >
        {children}
      </div>
    );
  },
};
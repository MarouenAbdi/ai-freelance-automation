
import React, { useEffect, useRef } from 'react';
import { 
  Search, 
  Lightbulb, 
  Code as CodeIcon, 
  Rocket,
  ArrowRight
} from "lucide-react";

type Step = {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    icon: Search,
    title: "Discovery",
    description: "We begin by understanding your business needs, challenges, and objectives through in-depth consultations."
  },
  {
    number: 2,
    icon: Lightbulb,
    title: "Strategy",
    description: "Our team develops a tailored AI strategy that outlines the approach, technologies, and implementation plan."
  },
  {
    number: 3,
    icon: CodeIcon,
    title: "Development",
    description: "We build custom AI solutions using advanced technologies and iterative development methodologies."
  },
  {
    number: 4,
    icon: Rocket,
    title: "Deployment",
    description: "After thorough testing, we deploy your solution, provide training, and ensure seamless integration."
  }
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const animatedItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedItems = animatedItemsRef.current;
    animatedItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      animatedItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
            <span className="text-xs font-medium text-primary">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Streamlined Process for Delivering Excellence
          </h2>
          <p className="text-muted-foreground">
            We follow a proven methodology to ensure the success of every AI automation project,
            from initial discovery to final deployment and beyond.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              ref={(el) => el && (animatedItemsRef.current[index] = el)}
              className="flex flex-col md:flex-row items-start gap-6 mb-12 pb-12 border-b border-border/50 last:border-0 animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center relative">
                  <step.icon className="w-7 h-7 text-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {step.number}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block mt-6 ml-2">
                    <ArrowRight className="w-5 h-5 text-primary rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;


import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const wordsList = [
    'Businesses',
    'Workflows',
    'Customer Support',
    'Operations'
  ];
  const [currentWord, setCurrentWord] = useState(wordsList[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord('');
      setTimeout(() => {
        const nextIndex = (index + 1) % wordsList.length;
        setIndex(nextIndex);
        setCurrentWord(wordsList[nextIndex]);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [index, wordsList]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Abstract background elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/10 filter blur-3xl opacity-70 animate-pulse-subtle"></div>
      <div className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-accent/20 filter blur-3xl opacity-70 animate-float"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
              <span className="text-xs font-medium text-primary">
                Independent AI Development Specialist
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight">
              Transforming <span className="gradient-text">
                {currentWord}
              </span> <br />
              with Intelligent Automation
            </h1>
            
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              I build custom AI agents and automation solutions that streamline your operations,
              enhance customer experiences, and drive business growth.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  Get Started 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View Services
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero visual element */}
        <div className={`mt-16 max-w-4xl mx-auto glass-panel p-3 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary animate-pulse"></div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Interactive Demo Visual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

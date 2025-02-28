
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 dark:bg-black/80 shadow-sm backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold flex items-center">
          <span className="text-primary">AI</span>
          <span className="ml-1">Nexus</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="underline-link text-sm font-medium">Services</a>
          <a href="#process" className="underline-link text-sm font-medium">Process</a>
          <a href="#blog" className="underline-link text-sm font-medium">Blog</a>
          <a href="#contact" className="underline-link text-sm font-medium">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost" size="sm">
            <a href="#contact">
              <MessageSquare className="h-4 w-4 mr-2" />
              Book a Demo
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg border-b border-border animate-fade-in p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#blog" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#contact" className="text-sm font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Button asChild size="sm" className="mt-2">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Book a Demo</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

import React from 'react';
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <a href="mailto:hello@marouenabdi.com" className="text-muted-foreground hover:text-primary transition-colors">
              hello@marouenabdi.com
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimations } from '@/utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    setupScrollAnimations();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Services />
        <Process />
        <Blog />
        <Contact />
      </main>
      <Footer />
      
      <style>
        {`
        .clip-path-contact {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        }
        
        @media (max-width: 768px) {
          .clip-path-contact {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
          }
        }
        `}
      </style>
    </div>
  );
};

export default Index;

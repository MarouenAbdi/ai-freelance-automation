
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with this AI specialist transformed our business operations. The custom solutions implemented were exactly what we needed to streamline our workflow.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "TechForward Inc."
  },
  {
    id: 2,
    content: "The AI automation tools developed for our team saved us countless hours of manual work. Incredibly responsive and professional throughout the entire project.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateNow"
  },
  {
    id: 3,
    content: "I was amazed by how quickly my business needs were understood and translated into practical AI solutions. The results exceeded my expectations in every way.",
    author: "Priya Patel",
    role: "Founder",
    company: "Nexus Creative"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-10 left-[5%] w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-[5%] w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working together.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm relative overflow-hidden">
            <CardContent className="pt-8 pb-8 px-6 md:px-10">
              <div className="absolute top-6 left-6 text-primary/60">
                <Quote size={40} />
              </div>

              <div className="min-h-[180px] md:min-h-[160px] flex items-center justify-center">
                <div className="relative transition-all duration-300 animate-fade-in">
                  <blockquote className="text-lg md:text-xl italic text-center relative z-10 px-8 md:px-12">
                    {testimonials[activeIndex].content}
                  </blockquote>

                  <div className="mt-6 text-center">
                    <p className="font-semibold text-primary">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2 items-center mx-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "bg-primary scale-110"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { TextReveal } from '@/components/ui/text-reveal';
import { Spotlight } from '@/components/ui/spotlight';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

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
    content:
      'Working with this AI specialist transformed our business operations. The custom solutions implemented were exactly what we needed to streamline our workflow.',
    author: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'TechForward Inc.',
  },
  {
    id: 2,
    content:
      'The AI automation tools developed for our team saved us countless hours of manual work. Incredibly responsive and professional throughout the entire project.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateNow',
  },
  {
    id: 3,
    content:
      'I was amazed by how quickly my business needs were understood and translated into practical AI solutions. The results exceeded my expectations in every way.',
    author: 'Priya Patel',
    role: 'Founder',
    company: 'Nexus Creative',
  },
  {
    id: 4,
    content:
      'The AI chatbot built for our customer service team has reduced response times by 80% and improved customer satisfaction scores dramatically.',
    author: 'David Rodriguez',
    role: 'Customer Experience Manager',
    company: 'GlobalRetail',
  },
  {
    id: 5,
    content:
      'Our sales team productivity increased by 35% after implementing the AI automation solutions. The ROI was evident within the first month.',
    author: 'Jennifer Lee',
    role: 'Sales Director',
    company: 'GrowthTech Solutions',
  },
  {
    id: 6,
    content:
      'The voice assistant integration was seamless and has completely transformed how our clients interact with our services. Truly revolutionary work.',
    author: 'Robert Williams',
    role: 'Product Manager',
    company: 'VoiceTech Innovations',
  },
];

const Testimonials = () => {
  const testimonialItems = testimonials.map((testimonial) => ({
    id: testimonial.id,
    content: (
      <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm relative overflow-hidden h-full">
        <CardContent className="pt-6 pb-6 px-5 md:px-6 h-full flex flex-col">
          <div className="absolute top-4 left-4 text-primary/60">
            <Quote size={24} />
          </div>

          <blockquote className="text-sm md:text-base relative z-10 px-6 flex-grow">
            {testimonial.content}
          </blockquote>

          <div className="mt-4 text-center">
            <p className="font-semibold text-primary text-sm">
              {testimonial.author}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </CardContent>
      </Card>
    ),
  }));

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-10 left-[5%] w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-[5%] w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
            <span className="text-xs font-medium text-primary">
              Testimonials
            </span>
          </div>
          <TextReveal
            text="What Our Clients Say"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          />
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what clients have to say
            about working together.
          </p>
        </div>

        <Spotlight className="relative max-w-7xl mx-auto">
          <InfiniteMovingCards
            items={testimonialItems}
            direction="left"
            speed="slow"
          />
        </Spotlight>
      </div>
    </section>
  );
};

export default Testimonials;
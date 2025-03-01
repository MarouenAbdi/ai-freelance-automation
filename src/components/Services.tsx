import React, { useEffect, useRef } from 'react';
import {
  MessageSquare,
  Mic,
  Bot,
  Settings,
  Book,
  Code,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { TextReveal } from '@/components/ui/text-reveal';
import { Spotlight } from '@/components/ui/spotlight';

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: MessageSquare,
    title: 'AI Chat Agents',
    description:
      'I build intelligent conversational agents that understand context and provide personalized responses.',
    features: [
      'Natural language processing',
      'Context awareness',
      '24/7 availability',
      'Seamless integration',
    ],
  },
  {
    icon: Mic,
    title: 'Voice Assistants',
    description:
      'Voice-activated AI agents with natural speech capabilities for hands-free interactions.',
    features: [
      'Speech recognition',
      'Natural voice synthesis',
      'Multi-language support',
      'Voice authentication',
    ],
  },
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description:
      'I create tailor-made AI solutions designed specifically for your business needs and workflows.',
    features: [
      'Domain-specific training',
      'Custom knowledge base',
      'Specialized capabilities',
      'Branded experience',
    ],
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description:
      'I streamline your repetitive tasks and processes with intelligent automation solutions.',
    features: [
      'Process optimization',
      'Error reduction',
      'Increased efficiency',
      'Time savings',
    ],
  },
  {
    icon: Book,
    title: 'AI Consultancy',
    description:
      'I provide expert guidance on implementing AI solutions for your business challenges.',
    features: [
      'AI strategy development',
      'Technology assessment',
      'Implementation roadmaps',
      'ROI analysis',
    ],
  },
  {
    icon: Code,
    title: 'Integration Services',
    description:
      'I seamlessly connect AI solutions with your existing systems and platforms.',
    features: [
      'API development',
      'Third-party integrations',
      'Data pipeline setup',
      'Unified experience',
    ],
  },
];

export function Services() {
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
    <section
      id="services"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute top-40 left-0 w-full h-[500px] bg-accent/30 -skew-y-6 transform -z-10"></div>

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
            <span className="text-xs font-medium text-primary">
              My Expertise
            </span>
          </div>
          <TextReveal
            text="Specialized AI Solutions for Your Business"
            as="h2"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-muted-foreground">
            I offer a range of specialized AI services to help businesses
            automate processes, enhance customer interactions, and gain
            competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <CardContainer
              key={service.title}
              className="w-full"
              containerClassName="w-full"
            >
              <CardBody
                ref={(el) => el && (animatedItemsRef.current[index] = el)}
                className="service-card animate-on-scroll border border-primary/20 p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardItem translateZ={20}>
                  <div className="feature-icon-wrapper mb-6 w-12 h-12">
                    <service.icon className="w-6 h-6" />
                  </div>
                </CardItem>
                <CardItem translateZ={30}>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                </CardItem>
                <CardItem translateZ={20}>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </CardItem>
                <CardItem translateZ={10}>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-primary mr-2 text-lg">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

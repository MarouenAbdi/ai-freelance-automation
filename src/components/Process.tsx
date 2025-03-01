import React, { useEffect, useRef } from 'react';
import {
  Search,
  Lightbulb,
  Code as CodeIcon,
  Rocket,
  ArrowRight,
} from 'lucide-react';

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
    title: 'Discovery & Kickoff',
    description:
      'We start with a deep dive into your goals, challenges, and unique needs. Through a collaborative consultation, I uncover opportunities where AI can drive the most value for your business.',
  },
  {
    number: 2,
    icon: Lightbulb,
    title: 'Solution design',
    description:
      'Next, I craft a custom AI solution, blending cutting-edge technologies with an agile, iterative approach. This ensures your automation is powerful, practical, and perfectly aligned with your objectives.',
  },
  {
    number: 3,
    icon: CodeIcon,
    title: 'Build & Deployment',
    description:
      'I develop and rigorously test your solution, then deploy it seamlessly into your workflow. You’ll receive clear handoff guidance and training to hit the ground running with confidence.',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Ongoing Support',
    description:
      'Need long-term optimization? I offer maintenance and support to keep your AI solution running smoothly, adapting to your evolving needs over time.',
  },
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
    <section
      id="process"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
            <span className="text-xs font-medium text-primary">
              My Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Seamless Process for AI-Powered Success
          </h2>
          <p className="text-muted-foreground">
            I use a refined, step-by-step methodology to deliver exceptional AI
            automation solutions tailored to your business—taking you from
            vision to reality with precision and care.
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


import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "How AI Chatbots Are Revolutionizing Customer Service",
    excerpt: "Discover how businesses are leveraging AI chatbots to provide 24/7 support, reduce response times, and improve customer satisfaction.",
    date: "May 15, 2023",
    category: "AI Trends",
    readTime: "5 min read"
  },
  {
    title: "The Future of Voice Assistants in Enterprise Applications",
    excerpt: "Explore how voice-enabled AI assistants are transforming workplace productivity and creating new opportunities for businesses.",
    date: "April 28, 2023",
    category: "Voice Technology",
    readTime: "7 min read"
  },
  {
    title: "Implementing AI Automation: Best Practices and Pitfalls to Avoid",
    excerpt: "Learn the essential strategies for successful AI implementation and how to navigate common challenges in your automation journey.",
    date: "March 10, 2023",
    category: "Implementation",
    readTime: "9 min read"
  }
];

export function Blog() {
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
    <section id="blog" ref={sectionRef} className="py-24 bg-accent/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
            <span className="text-xs font-medium text-primary">Latest Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI Automation Insights
          </h2>
          <p className="text-muted-foreground">
            Stay updated with the latest trends, strategies, and innovations in AI automation
            through our regularly published articles and case studies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              ref={(el) => el && (animatedItemsRef.current[index] = el)}
              className="border-border/40 bg-card/60 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center border-t border-border/40 pt-4">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <Button variant="ghost" size="sm" className="group">
                  Read more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="group">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;

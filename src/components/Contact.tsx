
import React, { useState } from 'react';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, MessageSquare, Calendar, Mail, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service you're interested in",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Demo request submitted",
      description: "I'll be in touch with you shortly to schedule your demo.",
    });
    
    form.reset();
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 clip-path-contact -z-10"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
              <span className="text-xs font-medium text-primary">Get Started</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo to see how my AI automation solutions
              can address your specific business challenges and unlock new opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Email Me</h3>
                  <p className="text-muted-foreground">hello@aifreelancer.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Call Me</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">Availability</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM EST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold">
                <MessageSquare className="inline-block mr-2 w-5 h-5 text-primary" />
                Book a Demo
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>
            
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your demo request has been successfully submitted. I'll be in touch shortly.
                </p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="chat-agents">AI Chat Agents</SelectItem>
                              <SelectItem value="voice-assistants">Voice Assistants</SelectItem>
                              <SelectItem value="custom-agents">Custom AI Agents</SelectItem>
                              <SelectItem value="automation">Workflow Automation</SelectItem>
                              <SelectItem value="consultancy">AI Consultancy</SelectItem>
                              <SelectItem value="integration">Integration Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project or requirements..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

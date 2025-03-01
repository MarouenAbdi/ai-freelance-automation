import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogModal } from "@/components/ui/blog-modal";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  coverImage: string;
  thumbnail: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "How AI Chatbots Are Revolutionizing Customer Service",
    excerpt: "Discover how businesses are leveraging AI chatbots to provide 24/7 support, reduce response times, and improve customer satisfaction.",
    date: "May 15, 2023",
    category: "AI Trends",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    content: `
      <h2>The Rise of AI-Powered Customer Service</h2>
      <p>In today's fast-paced digital world, customers expect immediate responses to their queries and concerns. Traditional customer service models often struggle to meet these expectations, especially outside of business hours. This is where AI chatbots have emerged as a game-changing solution.</p>
      
      <img src="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="AI chatbot interface on a laptop" class="rounded-lg my-6" />
      
      <p>AI chatbots are revolutionizing customer service by providing 24/7 support, reducing response times, and improving overall customer satisfaction. These intelligent virtual assistants can handle multiple conversations simultaneously, ensuring that no customer is left waiting in a queue.</p>
      
      <h2>Key Benefits of AI Chatbots in Customer Service</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="bg-accent/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">1. Round-the-Clock Availability</h3>
          <p>Unlike human agents who need breaks and work specific hours, AI chatbots are available 24/7. This means customers can get assistance at any time, regardless of time zones or holidays.</p>
        </div>
        
        <div class="bg-accent/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">2. Instant Response Times</h3>
          <p>AI chatbots respond to customer queries instantly, eliminating wait times that can frustrate customers. Studies show that 40% of customers expect a response within the first hour.</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div class="bg-accent/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">3. Consistent Service Quality</h3>
          <p>Human agents may have varying levels of knowledge, experience, and even mood swings that can affect service quality. AI chatbots deliver consistent responses based on their programming.</p>
        </div>
        
        <div class="bg-accent/20 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">4. Cost Efficiency</h3>
          <p>Implementing AI chatbots can significantly reduce operational costs for businesses. By automating routine inquiries, companies can allocate their human resources to more complex tasks.</p>
        </div>
      </div>
      
      <h2>Real-World Success Stories</h2>
      
      <div class="flex flex-col md:flex-row gap-6 my-6">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Customer service representative with headset" class="rounded-lg w-full md:w-1/3 object-cover" />
        
        <div class="w-full md:w-2/3">
          <p>Many leading companies have already embraced AI chatbots with impressive results:</p>
          
          <p><strong>Sephora:</strong> The beauty retailer's chatbot helps customers find products, provides beauty tips, and even allows users to virtually try on makeup. This has led to increased engagement and sales.</p>
          
          <p><strong>Bank of America:</strong> Their virtual assistant, Erica, helps customers check balances, pay bills, and get financial insights. Since its launch, Erica has served millions of customers and handled countless transactions.</p>
          
          <p><strong>Domino's Pizza:</strong> Their chatbot allows customers to place orders through various platforms, including Facebook Messenger and Twitter. This has streamlined the ordering process and improved customer satisfaction.</p>
        </div>
      </div>
      
      <h2>The Future of AI in Customer Service</h2>
      
      <p>As AI technology continues to evolve, we can expect even more sophisticated chatbots that can understand context, emotions, and complex queries. The integration of natural language processing (NLP) and machine learning will enable these virtual assistants to have more human-like conversations and provide more personalized assistance.</p>
      
      <div class="bg-primary/10 p-6 rounded-lg my-6 border border-primary/20">
        <h3 class="text-xl font-semibold mb-3">Emerging Trends in AI Customer Service</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>Voice-enabled AI assistants that can understand and respond to spoken queries</li>
          <li>Emotion detection capabilities that allow chatbots to adapt their responses based on customer sentiment</li>
          <li>Predictive analytics that anticipate customer needs before they're expressed</li>
          <li>Integration with AR/VR for immersive customer support experiences</li>
        </ul>
      </div>
      
      <p>Furthermore, the combination of AI chatbots with other technologies like augmented reality (AR) and virtual reality (VR) could create immersive customer service experiences that were previously unimaginable.</p>
      
      <h2>Conclusion</h2>
      
      <p>AI chatbots are not just a trend; they represent a fundamental shift in how businesses approach customer service. By providing immediate, consistent, and personalized assistance, these virtual assistants are setting new standards for customer experience.</p>
      
      <p>As we move forward, businesses that embrace this technology will likely gain a significant competitive advantage, while those that resist may find themselves struggling to meet evolving customer expectations.</p>
      
      <p>The revolution is already underway, and the question for businesses is no longer whether to implement AI chatbots, but how to implement them effectively to maximize their potential.</p>
    `
  },
  {
    title: "The Future of Voice Assistants in Enterprise Applications",
    excerpt: "Explore how voice-enabled AI assistants are transforming workplace productivity and creating new opportunities for businesses.",
    date: "April 28, 2023",
    category: "Voice Technology",
    readTime: "7 min read",
    thumbnail: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    content: `
      <h2>Voice Assistants: Beyond Consumer Applications</h2>
      <p>Voice assistants have become commonplace in our homes, with devices like Amazon Echo, Google Home, and Apple HomePod helping us check the weather, play music, or control smart home devices. However, the true potential of voice technology extends far beyond these consumer applications.</p>
      
      <div class="flex flex-col md:flex-row gap-6 my-6 items-center">
        <img src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Smart speaker devices" class="rounded-lg w-full md:w-1/2 object-cover" />
        
        <div class="w-full md:w-1/2">
          <p>In the enterprise world, voice-enabled AI assistants are emerging as powerful tools that can transform workplace productivity, streamline operations, and create new opportunities for businesses across various industries.</p>
          
          <p>From hands-free data access in healthcare settings to voice-guided manufacturing processes, these technologies are changing how we work and interact with business systems.</p>
        </div>
      </div>
      
      <h2>Transforming Workplace Productivity</h2>
      
      <h3>1. Hands-Free Data Access and Entry</h3>
      <p>Voice assistants allow employees to access information and enter data without using their hands or looking at screens. This is particularly valuable for workers in fields like healthcare, manufacturing, and field service, where hands-free operation can significantly improve efficiency and safety.</p>
      
      <div class="bg-accent/20 p-6 rounded-lg my-6">
        <div class="flex items-start gap-4">
          <div class="bg-primary/20 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-2">Real-World Example: Healthcare</h4>
            <p>Surgeons can access patient records or medical reference materials during procedures without breaking sterility, while nurses can document patient care in real-time without interrupting their workflow.</p>
          </div>
        </div>
      </div>
      
      <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Medical professional using voice technology" class="rounded-lg my-6" />
      
      <h3>2. Meeting Enhancement</h3>
      <p>Voice assistants are revolutionizing meetings by handling tasks such as scheduling, note-taking, action item tracking, and even real-time translation. This allows participants to focus on the discussion rather than administrative details.</p>
      
      <p>Advanced systems can even analyze meeting content to identify key points, decisions, and follow-up items, creating comprehensive summaries that can be shared with all participants.</p>
      
      <h3>3. Workflow Automation</h3>
      <p>By integrating voice assistants with enterprise systems like CRM, ERP, and project management tools, businesses can automate routine workflows through simple voice commands. This reduces the time spent on administrative tasks and minimizes the learning curve for complex enterprise software.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div class="bg-primary/10 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Reduced Training Time</h4>
          <p class="text-sm">Voice interfaces can reduce the time needed to train employees on complex software systems by 40%.</p>
        </div>
        <div class="bg-primary/10 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Increased Accuracy</h4>
          <p class="text-sm">Voice-guided workflows can reduce error rates by up to 60% compared to manual data entry.</p>
        </div>
        <div class="bg-primary/10 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Time Savings</h4>
          <p class="text-sm">Employees can save an average of 3 hours per week by using voice commands for routine tasks.</p>
        </div>
      </div>
      
      <h2>Industry-Specific Applications</h2>
      
      <div class="flex flex-col md:flex-row gap-6 my-6">
        <div class="w-full md:w-1/2">
          <h3>Healthcare</h3>
          <p>Voice assistants are helping healthcare providers document patient encounters more efficiently, reducing the administrative burden that often leads to burnout. Doctors can dictate notes, order tests, and prescribe medications using voice commands, allowing them to spend more time focusing on patients.</p>
          
          <h3>Manufacturing</h3>
          <p>On factory floors, voice-enabled systems are guiding workers through complex assembly processes, conducting quality checks, and reporting issues in real-time. This hands-free approach improves safety and accuracy while reducing training time for new employees.</p>
        </div>
        
        <img src="https://images.unsplash.com/photo-1581093458791-9d15482442f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Factory worker using voice technology" class="rounded-lg w-full md:w-1/2 object-cover" />
      </div>
      
      <h3>Financial Services</h3>
      <p>Banks and financial institutions are using voice authentication for secure customer identification and implementing voice-guided self-service for common transactions. This enhances security while providing a more convenient customer experience.</p>
      
      <h2>Overcoming Implementation Challenges</h2>
      
      <p>Despite the promising benefits, enterprises face several challenges when implementing voice assistant technology:</p>
      
      <div class="bg-accent/20 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-3">Common Implementation Challenges</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 class="font-semibold mb-2">1. Security and Privacy Concerns</h4>
            <p>Voice data is sensitive and must be protected, especially in industries with strict regulatory requirements like healthcare and finance.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">2. Integration with Legacy Systems</h4>
            <p>Many enterprises rely on legacy systems that weren't designed with voice interfaces in mind.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">3. Accuracy in Noisy Environments</h4>
            <p>Enterprise environments can be noisy, making accurate voice recognition challenging.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">4. User Adoption</h4>
            <p>Employees may be resistant to changing established workflows and adopting new technologies.</p>
          </div>
        </div>
      </div>
      
      <h2>The Road Ahead</h2>
      
      <p>As natural language processing and machine learning continue to advance, we can expect voice assistants to become even more capable and intuitive. Future developments may include:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Emotional intelligence, allowing assistants to recognize and respond to user emotions</li>
        <li>More sophisticated context awareness, enabling more natural conversations</li>
        <li>Multimodal interfaces that combine voice with visual and tactile elements</li>
        <li>Enhanced personalization based on individual user preferences and behaviors</li>
      </ul>
      
      <img src="https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Futuristic voice interface concept" class="rounded-lg my-6" />
      
      <h2>Conclusion</h2>
      
      <p>Voice-enabled AI assistants represent a significant opportunity for enterprises to enhance productivity, improve customer experiences, and gain competitive advantages. While challenges remain, the technology is rapidly maturing, and forward-thinking organizations are already reaping the benefits.</p>
      
      <p>As we look to the future, voice technology will likely become as fundamental to enterprise computing as keyboards and touchscreens are today, creating new paradigms for how we interact with information systems in the workplace.</p>
    `
  },
  {
    title: "Implementing AI Automation: Best Practices and Pitfalls to Avoid",
    excerpt: "Learn the essential strategies for successful AI implementation and how to navigate common challenges in your automation journey.",
    date: "March 10, 2023",
    category: "Implementation",
    readTime: "9 min read",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    content: `
      <h2>The Promise and Challenge of AI Automation</h2>
      <p>Artificial Intelligence (AI) automation holds tremendous promise for organizations seeking to improve efficiency, reduce costs, and enhance customer experiences. However, implementing AI solutions is not without challenges. Many organizations embark on AI initiatives with high expectations, only to encounter obstacles that delay or derail their projects.</p>
      
      <div class="flex flex-col md:flex-row gap-6 my-6 items-center">
        <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="AI automation concept" class="rounded-lg w-full md:w-1/2 object-cover" />
        
        <div class="w-full md:w-1/2">
          <p>This article explores best practices for successful AI implementation and highlights common pitfalls to avoid, drawing on real-world experiences and expert insights.</p>
          
          <p>By understanding these guidelines, organizations can increase their chances of success and maximize the return on their AI investments.</p>
        </div>
      </div>
      
      <h2>Best Practices for Successful AI Implementation</h2>
      
      <div class="bg-primary/10 p-6 rounded-lg my-6 border border-primary/20">
        <h3 class="text-xl font-semibold mb-4">Implementation Framework</h3>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="AI implementation framework" class="rounded-lg mb-4" />
        <p class="text-sm text-muted-foreground">A structured approach to AI implementation increases success rates by up to 70%.</p>
      </div>
      
      <h3>1. Start with a Clear Business Problem</h3>
      <p>Successful AI implementations begin with a well-defined business problem rather than a desire to implement AI for its own sake. Identify specific challenges or opportunities where AI can provide tangible value, and establish clear metrics for measuring success.</p>
      
      <div class="bg-accent/20 p-6 rounded-lg my-6">
        <div class="flex items-start gap-4">
          <div class="bg-primary/20 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-2">Example: Specific vs. Vague Objectives</h4>
            <p class="mb-2"><strong>Vague:</strong> "We need to implement AI"</p>
            <p><strong>Specific:</strong> "We need to reduce customer service response times by 30% while maintaining or improving customer satisfaction scores."</p>
          </div>
        </div>
      </div>
      
      <h3>2. Ensure Data Readiness</h3>
      <p>AI systems are only as good as the data they're trained on. Before implementing AI, assess your data quality, quantity, and accessibility. This includes:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="bg-accent/20 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Data Quality Assessment</h4>
          <ul class="list-disc pl-4 space-y-1">
            <li>Evaluating data completeness and accuracy</li>
            <li>Identifying and addressing biases in historical data</li>
          </ul>
        </div>
        
        <div class="bg-accent/20 p-4 rounded-lg">
          <h4 class="font-semibold mb-2">Data Governance</h4>
          <ul class="list-disc pl-4 space-y-1">
            <li>Ensuring proper data governance and compliance</li>
            <li>Establishing processes for ongoing data collection</li>
          </ul>
        </div>
      </div>
      
      <img src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Data visualization concept" class="rounded-lg my-6" />
      
      <h3>3. Adopt an Iterative Approach</h3>
      <p>Rather than attempting a large-scale implementation all at once, start with a minimum viable product (MVP) and iterate based on feedback and results. This approach allows you to:</p>
      
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>Demonstrate value quickly</li>
        <li>Learn and adjust before making major investments</li>
        <li>Build organizational support through early wins</li>
        <li>Identify and address challenges on a smaller scale</li>
      </ul>
      
      <div class="flex flex-col md:flex-row gap-6 my-6">
        <div class="w-full">
          <h3>4. Focus on Change Management</h3>
          <p>AI implementation is as much about people as it is about technology. Develop a comprehensive change management strategy that includes:</p>
          
          <ul class="list-disc pl-6 my-4 space-y-2">
            <li>Clear communication about the purpose and benefits of AI automation</li>
            <li>Training programs to help employees work effectively with AI systems</li>
            <li>Involvement of end-users in the design and implementation process</li>
            <li>Plans for addressing concerns about job displacement or changes in responsibilities</li>
          </ul>
        </div>
      </div>
      
      <h3>5. Build Cross-Functional Teams</h3>
      <p>Successful AI implementation requires collaboration across multiple disciplines. Create teams that include:</p>
      
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 my-6 text-center">
        <div class="bg-primary/10 p-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <p class="text-sm font-medium">Domain Experts</p>
        </div>
        
        <div class="bg-primary/10 p-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-primary"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>
          <p class="text-sm font-medium">Data Scientists</p>
        </div>
        
        <div class="bg-primary/10 p-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-primary"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
          <p class="text-sm font-medium">IT Professionals</p>
        </div>
        
        <div class="bg-primary/10 p-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-primary"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <p class="text-sm font-medium">End Users</p>
        </div>
        
        <div class="bg-primary/10 p-4 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          <p class="text-sm font-medium">Legal & Compliance</p>
        </div>
      </div>
      
      <h2>Common Pitfalls to Avoid</h2>
      
      <div class="bg-accent/20 p-6 rounded-lg my-6">
        <h3 class="text-xl font-semibold mb-3">1. Underestimating the Importance of Data</h3>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-2/3">
            <p>One of the most common reasons AI projects fail is inadequate attention to data quality and quantity. Organizations often discover too late that their data is insufficient, inconsistent, or biased, leading to poor AI performance.</p>
            <p class="mt-2">To avoid this pitfall, conduct a thorough data assessment before beginning implementation, and be prepared to invest in data cleaning, enrichment, and governance.</p>
          </div>
          <div class="w-full md:w-1/3">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Data quality concept" class="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </div>
      
      <h3>2. Setting Unrealistic Expectations</h3>
      <p>Influenced by media hype and vendor promises, organizations sometimes expect AI to deliver magical results overnight. This leads to disappointment when the reality involves gradual improvements and ongoing refinement.</p>
      
      <p>Set realistic expectations about what AI can achieve, the timeline for implementation, and the resources required for success. Communicate these expectations clearly to stakeholders at all levels.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <h3>3. Neglecting Ethics and Governance</h3>
          <p>AI systems can perpetuate or amplify biases, make decisions that affect people's lives, and raise privacy concerns. Organizations that fail to address these ethical considerations may face reputational damage, legal challenges, or regulatory penalties.</p>
          
          <p>Develop clear guidelines for ethical AI use, establish governance structures to oversee AI implementation, and regularly audit AI systems for bias and fairness.</p>
        </div>
        
        <div>
          <h3>4. Treating AI as a One-Time Project</h3>
          <p>Unlike traditional software, AI systems require ongoing monitoring, maintenance, and improvement. Organizations that treat AI implementation as a one-time project often find that performance degrades over time as conditions change.</p>
          
          <p>Plan for continuous monitoring, regular retraining, and periodic reassessment of AI systems to ensure they continue to deliver value.</p>
        </div>
      </div>
      
      <h3>5. Failing to Integrate with Existing Workflows</h3>
      <p>Even the most sophisticated AI solution will fail if it doesn't integrate smoothly with existing systems and workflows. Users will resist adoption if AI tools are cumbersome or disruptive to their work.</p>
      
      <p>Design AI solutions with user experience in mind, and ensure seamless integration with the tools and processes that employees already use.</p>
      
      <h2>Case Study: A Successful Implementation</h2>
      
      <div class="bg-primary/10 p-6 rounded-lg my-6 border border-primary/20">
        <h3 class="text-xl font-semibold mb-3">Insurance Company AI Implementation</h3>
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Insurance company office" class="rounded-lg mb-4" />
        
        <p>A mid-sized insurance company successfully implemented an AI-powered claims processing system by following these best practices:</p>
        
        <ul class="list-disc pl-6 my-4 space-y-2">
          <li>They started with a specific goal: reducing claims processing time by 50% while maintaining accuracy</li>
          <li>They spent six months cleaning and organizing their claims data before beginning implementation</li>
          <li>They began with a pilot program for a single type of claim, then gradually expanded</li>
          <li>They involved claims adjusters in the design process and provided comprehensive training</li>
          <li>They established a cross-functional team that included claims experts, data scientists, and IT specialists</li>
          <li>They implemented continuous monitoring and regular retraining of the AI system</li>
        </ul>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div class="bg-white/20 p-3 rounded-lg text-center">
            <p class="text-2xl font-bold text-primary">60%</p>
            <p class="text-sm">Reduction in processing time</p>
          </div>
          <div class="bg-white/20 p-3 rounded-lg text-center">
            <p class="text-2xl font-bold text-primary">18 months</p>
            <p class="text-sm">Time to ROI</p>
          </div>
          <div class="bg-white/20 p-3 rounded-lg text-center">
            <p class="text-2xl font-bold text-primary">95%</p>
            <p class="text-sm">Customer satisfaction</p>
          </div>
        </div>
      </div>
      
      <h2>Conclusion</h2>
      
      <p>AI automation offers tremendous potential for organizations across industries, but successful implementation requires careful planning, realistic expectations, and attention to both technical and human factors.</p>
      
      <p>By starting with clear business problems, ensuring data readiness, adopting an iterative approach, focusing on change management, and building cross-functional teams, organizations can maximize their chances of success. Equally important is avoiding common pitfalls related to data quality, expectations, ethics, maintenance, and integration.</p>
      
      <p>With the right approach, AI automation can deliver significant and sustainable value, transforming operations and creating competitive advantages in an increasingly digital world.</p>
    `
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openBlogPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <section id="blog" className="py-24 bg-accent/10">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
            <span className="text-xs font-medium text-primary">Latest Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI Automation Insights & Trends
          </h2>
          <p className="text-muted-foreground">
            Explore the latest articles on AI automation, industry trends, and practical implementation strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.title}
              ref={(el) => el && (animatedItemsRef.current[index] = el)}
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/40">
                <CardHeader className="p-0">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {post.date}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group"
                    onClick={() => openBlogPost(post)}
                  >
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {selectedPost && (
        <BlogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedPost.title}
          date={selectedPost.date}
          category={selectedPost.category}
          content={selectedPost.content}
          coverImage={selectedPost.coverImage}
        />
      )}
    </section>
  );
}
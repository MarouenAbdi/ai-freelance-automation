import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Bot, Sparkles, Zap } from 'lucide-react';
import { HeroParallax, HeroHighlight } from '@/components/ui/hero-parallax';
import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';

export function Hero() {
	const [isVisible, setIsVisible] = useState(false);
	const [currentMessage, setCurrentMessage] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const [conversation, setConversation] = useState<
		{ type: 'user' | 'ai'; text: string }[]
	>([
		{
			type: 'user',
			text: 'How can AI help my business automate customer support?',
		},
		{
			type: 'ai',
			text: 'I can build custom AI agents that handle routine inquiries 24/7, learn from interactions, and seamlessly escalate complex issues to your team when needed.',
		},
	]);

	const typewriterText = useTypewriter({
		words: [
			'Businesses',
			'Operations',
			'Customer Service',
			'Sales Teams',
			'Marketing',
		],
		loop: true,
		typeSpeed: 100,
		deleteSpeed: 80,
		delayBetweenWords: 2000,
	});

	useEffect(() => {
		setIsVisible(true);
	}, []);

	useEffect(() => {
		// Simulate typing effect for the last AI message
		if (
			conversation.length > 0 &&
			conversation[conversation.length - 1].type === 'ai'
		) {
			const fullMessage = conversation[conversation.length - 1].text;
			let i = 0;
			setCurrentMessage('');
			setIsTyping(true);

			const typingInterval = setInterval(() => {
				if (i < fullMessage.length) {
					setCurrentMessage((prev) => prev + fullMessage.charAt(i));
					i++;
				} else {
					clearInterval(typingInterval);
					setIsTyping(false);
				}
			}, 30);

			return () => clearInterval(typingInterval);
		}
	}, [conversation]);

	const simulateNewConversation = () => {
		// Add user message
		const userMessages = [
			'Can AI help reduce our customer response time?',
			'What kind of automation can you implement for our sales team?',
			'How do you ensure data privacy with AI solutions?',
		];

		const aiResponses = [
			'Absolutely! My AI solutions can reduce response times by up to 80% by providing instant answers to common questions while continuously learning from new interactions.',
			'I can build custom AI agents that qualify leads, schedule meetings, follow up with prospects, and provide sales teams with real-time insights and recommendations.',
			'Privacy is a top priority. All solutions I build include data encryption, access controls, and compliance with regulations like GDPR. We can also implement data minimization principles.',
		];

		const randomIndex = Math.floor(Math.random() * userMessages.length);

		setConversation([{ type: 'user', text: userMessages[randomIndex] }]);

		// Simulate AI thinking and then responding
		setTimeout(() => {
			setConversation((prev) => [
				...prev,
				{ type: 'ai', text: aiResponses[randomIndex] },
			]);
		}, 1500);
	};

	return (
		<HeroParallax className="min-h-screen flex flex-col justify-center">
			<div className="container relative z-10 h-screen flex flex-col md:flex-row items-center justify-center">
				<div className="w-full md:w-1/2 flex flex-col justify-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="space-y-4"
					>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight">
							Transforming <br className="hidden md:block" />
							<HeroHighlight>
								{typewriterText || 'Businesses'}
							</HeroHighlight>{' '}
							<br className="hidden md:block" />
							with AI
						</h1>

						<p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl">
							I build custom AI agents and automation solutions that streamline
							your operations, enhance customer experiences, and drive business
							growth.
						</p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="mt-10 flex flex-col sm:flex-row gap-4"
						>
							<Button size="lg" asChild className="group">
								<a href="#contact">
									Get Started
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</a>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<a href="#services">
									<MessageSquare className="mr-2 h-4 w-4" />
									View Services
								</a>
							</Button>
						</motion.div>
					</motion.div>
				</div>

				{/* Interactive demo visual - Responsive for all devices */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="w-full md:w-1/2 mt-10 md:mt-0 glass-panel p-2 md:p-3"
				>
					<div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-black/5 p-2 md:p-4">
						<div className="absolute top-0 left-0 right-0 h-8 md:h-10 bg-background/80 backdrop-blur-sm border-b border-border/20 flex items-center px-2 md:px-4">
							<div className="flex space-x-1 md:space-x-2">
								<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/70"></div>
								<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/70"></div>
								<div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/70"></div>
							</div>
							<div className="mx-auto text-xs md:text-sm font-medium text-muted-foreground">
								Your AI Assistant
							</div>
						</div>

						<div className="mt-8 md:mt-10 h-[200px] md:h-[300px] overflow-y-auto flex flex-col space-y-3 p-1 md:p-2">
							{conversation.map((msg, i) => (
								<div
									key={i}
									className={`flex ${
										msg.type === 'user' ? 'justify-end' : 'justify-start'
									}`}
								>
									{msg.type === 'ai' && (
										<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0">
											<Bot className="w-3 h-3 md:w-4 md:h-4 text-primary" />
										</div>
									)}
									<div
										className={`max-w-[80%] p-2 md:p-3 rounded-lg text-xs md:text-sm ${
											msg.type === 'user'
												? 'bg-primary/20 text-foreground ml-auto'
												: 'bg-accent text-foreground'
										}`}
									>
										{i === conversation.length - 1 && msg.type === 'ai'
											? currentMessage
											: msg.text}
										{i === conversation.length - 1 &&
											msg.type === 'ai' &&
											isTyping && (
												<span className="inline-block w-1.5 md:w-2 h-3 md:h-4 ml-1 bg-primary/50 animate-pulse"></span>
											)}
									</div>
									{msg.type === 'user' && (
										<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent/30 flex items-center justify-center ml-2 flex-shrink-0">
											<Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
										</div>
									)}
								</div>
							))}
						</div>

						<div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 flex items-center">
							<div className="flex-1 bg-background rounded-lg border border-border/40 p-1.5 md:p-2 flex items-center">
								<input
									type="text"
									className="flex-1 bg-transparent border-none outline-none text-xs md:text-sm"
									placeholder="Type your message..."
									disabled
								/>
								<Button
									size="sm"
									variant="ghost"
									className="h-6 w-6 md:h-8 md:w-8 p-0 rounded-full"
									onClick={simulateNewConversation}
								>
									<Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
								</Button>
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Floating elements */}
			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
				<div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
					<div className="w-1 h-2 bg-primary rounded-full animate-float"></div>
				</div>
			</div>
		</HeroParallax>
	);
}

export default Hero;

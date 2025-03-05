import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

interface LogoItem {
	id: number;
	name: string;
	logo: string;
}

const integrationLogos: LogoItem[] = [
	{
		id: 1,
		name: 'WhatsApp',
		logo: 'https://cdn.worldvectorlogo.com/logos/whatsapp-3.svg',
	},
	{
		id: 2,
		name: 'Slack',
		logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
	},
	{
		id: 3,
		name: 'Discord',
		logo: 'https://cdn.worldvectorlogo.com/logos/discord.svg',
	},
	{
		id: 4,
		name: 'Facebook Messenger',
		logo: 'https://cdn.worldvectorlogo.com/logos/facebook-messenger-3.svg',
	},
	{
		id: 5,
		name: 'X',
		logo: 'https://cdn.worldvectorlogo.com/logos/x-2.svg',
	},
	{
		id: 6,
		name: 'Instagram',
		logo: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg',
	},
	{
		id: 7,
		name: 'LinkedIn',
		logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg',
	},
	{
		id: 11,
		name: 'Salesforce',
		logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
	},
	{
		id: 13,
		name: 'Zoho CRM',
		logo: 'https://cdn.worldvectorlogo.com/logos/zoho-1.svg',
	},
	{
		id: 14,
		name: 'Zendesk',
		logo: 'https://cdn.worldvectorlogo.com/logos/zendesk-3.svg',
	},
	{
		id: 16,
		name: 'Shopify',
		logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
	},
	{
		id: 19,
		name: 'Google Sheets',
		logo: 'https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg',
	},
	{
		id: 20,
		name: 'Microsoft Excel',
		logo: 'https://cdn.worldvectorlogo.com/logos/excel-4.svg',
	},
];

const Integrations = () => {
	const logoItems = integrationLogos.map((logo) => ({
		id: logo.id,
		content: (
			<img
				src={logo.logo}
				alt={`${logo.name}`}
				className="h-10 w-auto object-contain transition-all duration-300"
			/>
		),
	}));

	return (
		<section className="py-12 bg-background relative overflow-hidden">
			<div className="relative">
				<InfiniteMovingCards
					items={logoItems}
					direction="left"
					speed="slow"
					pauseOnHover={true}
				/>
			</div>
		</section>
	);
};

export default Integrations;

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
    name: "Slack",
    logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
  },
  {
    id: 2,
    name: "Microsoft Teams",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg"
  },
  {
    id: 3,
    name: "Google Workspace",
    logo: "https://cdn.worldvectorlogo.com/logos/google-workspace-icon-2020.svg"
  },
  {
    id: 4,
    name: "Salesforce",
    logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
  },
  {
    id: 5,
    name: "Zendesk",
    logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg"
  },
  {
    id: 6,
    name: "HubSpot",
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg"
  },
  {
    id: 7,
    name: "Zapier",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg"
  },
  {
    id: 8,
    name: "Notion",
    logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg"
  },
  {
    id: 9,
    name: "Asana",
    logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg"
  },
  {
    id: 10,
    name: "Jira",
    logo: "https://cdn.worldvectorlogo.com/logos/jira-3.svg"
  },
  {
    id: 11,
    name: "Trello",
    logo: "https://cdn.worldvectorlogo.com/logos/trello.svg"
  },
  {
    id: 12,
    name: "Zoom",
    logo: "https://cdn.worldvectorlogo.com/logos/zoom-5.svg"
  }
];

const Integrations = () => {
  const logoItems = integrationLogos.map((logo) => ({
    id: logo.id,
    content: (
      <img 
        src={logo.logo} 
        alt={`${logo.name} logo`} 
        className="h-10 w-auto object-contain transition-all duration-300"
      />
    ),
  }));

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container relative z-10 mb-6 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-accent/60 backdrop-blur-sm border border-accent-foreground/10">
          <span className="text-xs font-medium text-primary">Integrations</span>
        </div>
      </div>
      
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
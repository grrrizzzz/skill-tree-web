export const site = {
  name: "Skill Tree AI Solutions",
  shortName: "Skill Tree AI",
  tagline: "Do more, with AI",
  description:
    "Helping businesses reach their goals with Artificial Intelligence.",
  url: "https://skilltreeai.com",
  // PLACEHOLDER contact details — replace before launch
  contact: {
    email: "hello@skilltreeai.com",
    phone: "(555) 123-4567",
    linkedin: "https://linkedin.com/company/skill-tree-ai",
    hours: "Monday–Friday, 9am–5pm PT",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
  ] as const,
  cta: {
    label: "Book a Free Consultation",
    href: "/contact",
  },
};

export type ServiceId =
  | "agents"
  | "consulting"
  | "custom"
  | "training";

export interface Service {
  id: ServiceId;
  slug: string;
  title: string;
  shortDescription: string;
  icon:
    | "Bot"
    | "Compass"
    | "Wrench"
    | "GraduationCap";
  lead: string;
  secondary: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "agents",
    slug: "specialized-ai-agents",
    title: "Specialized AI Agents",
    shortDescription:
      "Purpose-built AI agents that handle real business tasks, from answering calls to qualifying leads. Deploy in days, not months.",
    icon: "Bot",
    lead: "Specialized AI agents are purpose-built digital workers that handle specific business functions around the clock. From answering phones and scheduling appointments to qualifying leads and routing customer inquiries, our agents deliver consistent results without the overhead of hiring, training, and managing additional staff.",
    secondary:
      "Each agent is tuned for a specific job — which means faster deployment, more reliable results, and a clear return on investment. We handle the setup, integration, and ongoing tuning so you can focus on running your business.",
    benefits: [
      "Deploy in days, not months",
      "24/7 coverage with no overtime costs",
      "Consistent quality on every interaction",
      "Seamless integration with your existing tools",
      "Transparent performance metrics",
    ],
  },
  {
    id: "consulting",
    slug: "ai-consulting",
    title: "AI Consulting",
    shortDescription:
      "Strategic guidance to identify where AI will deliver the most value for your business. We help you choose the right tools, the right use cases, and the right path forward.",
    icon: "Compass",
    lead: "Most businesses know AI matters but aren't sure where to start. Our consulting engagements cut through the hype to identify the specific opportunities where AI will deliver real value for your business — and the ones that aren't worth pursuing yet.",
    secondary:
      "We start with a thorough assessment of your workflows, tools, and goals. Then we deliver a clear, prioritized roadmap with concrete next steps, honest tradeoffs, and realistic timelines.",
    benefits: [
      "Unbiased, vendor-neutral recommendations",
      "Clear ROI analysis for every proposed initiative",
      "Practical roadmap you can execute on",
      "Help choosing the right tools and partners",
      "Avoid costly missteps and vendor lock-in",
    ],
  },
  {
    id: "custom",
    slug: "custom-ai-development",
    title: "Custom AI Development",
    shortDescription:
      "Bespoke AI solutions built around your unique workflows. When off-the-shelf tools aren't enough, we design and build what you need.",
    icon: "Wrench",
    lead: "When off-the-shelf tools can't solve your specific problem, custom development bridges the gap. We design and build tailored AI solutions — chatbots, automation pipelines, data integrations, internal tools — that fit your workflows exactly.",
    secondary:
      "Our engineering-first approach means we focus on what works in production, not what looks good in a demo. Every project is built to be maintainable, documented, and handed off cleanly.",
    benefits: [
      "Solutions tailored to your exact requirements",
      "Built on proven, well-supported AI platforms",
      "Fully documented and maintainable code",
      "Integration with your existing systems",
      "Clear ownership and IP transfer",
    ],
  },
  {
    id: "training",
    slug: "ai-training-and-workshops",
    title: "AI Training & Workshops",
    shortDescription:
      "Hands-on training that gives your team practical skills with today's AI tools. Walk away with real workflows you can use tomorrow.",
    icon: "GraduationCap",
    lead: "The biggest gap in AI adoption isn't the technology — it's knowing how to use it effectively. Our training sessions give your team hands-on experience with the tools that matter, using real examples from your own business.",
    secondary:
      "Workshops are tailored to your team's role and skill level, from non-technical staff learning prompt basics to engineers building production AI features. Every session ends with workflows your team can use immediately.",
    benefits: [
      "Hands-on, practical exercises (not lecture slides)",
      "Customized to your team's actual work",
      "Leave with workflows you can use tomorrow",
      "Covers ChatGPT, Claude, and leading AI tools",
      "Remote or on-site delivery",
    ],
  },
];

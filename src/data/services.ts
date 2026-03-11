export interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Residential Construction",
    description:
      "From foundation to finishing touches, we build custom homes designed for Saskatchewan's climate and your unique lifestyle.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    features: [
      "Custom floor plans and architectural design",
      "Energy-efficient building for harsh winters",
      "Premium material selection",
      "Full project management from start to finish",
    ],
  },
  {
    title: "Commercial Construction",
    description:
      "We deliver commercial spaces that are functional, modern, and built to code — on time and within budget.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    features: [
      "Office buildings and retail spaces",
      "Warehouse and industrial facilities",
      "Full code compliance and accessibility",
      "Minimal disruption to your business operations",
    ],
  },
  {
    title: "Home Renovations",
    description:
      "Transform your existing space with our expert renovation services. We breathe new life into outdated rooms.",
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    features: [
      "Complete home makeovers",
      "Structural modifications and additions",
      "Modern upgrades and finishes",
      "Permit handling and inspections",
    ],
  },
  {
    title: "Kitchen Remodeling",
    description:
      "Create the kitchen of your dreams with custom cabinetry, premium countertops, and thoughtful layouts.",
    icon: "CookingPot",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    features: [
      "Custom cabinetry and storage solutions",
      "Granite, quartz, and marble countertops",
      "Modern appliance installation",
      "Lighting and electrical upgrades",
    ],
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Upgrade your bathrooms into spa-like retreats with modern fixtures, tiling, and smart storage solutions.",
    icon: "Bath",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    features: [
      "Walk-in showers and soaking tubs",
      "Custom tile work and waterproofing",
      "Vanity and storage installation",
      "Plumbing upgrades and fixture replacement",
    ],
  },
  {
    title: "Custom Home Builds",
    description:
      "Build your dream home from the ground up. We work with you every step to create a space that's uniquely yours.",
    icon: "Ruler",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    features: [
      "Architect and designer collaboration",
      "Lot selection assistance",
      "Custom material and finish selection",
      "Smart home technology integration",
    ],
  },
  {
    title: "Project Management",
    description:
      "Let our experienced project managers coordinate every aspect of your build for a smooth, stress-free experience.",
    icon: "ClipboardList",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    features: [
      "Dedicated project manager for every job",
      "Real-time progress updates",
      "Budget tracking and cost control",
      "Vendor and subcontractor coordination",
    ],
  },
];

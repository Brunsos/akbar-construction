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
    image: "https://images.unsplash.com/photo-1583430691214-abff69c2748a?w=600&h=400&fit=crop",
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
    image: "https://plus.unsplash.com/premium_photo-1683122033068-f5eeebaf4d29?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1768321902794-c24fb1f00661?w=600&h=400&fit=crop",
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
    image: "https://plus.unsplash.com/premium_photo-1683141538689-b022c674280d?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1758548157466-7c454382035a?w=600&h=400&fit=crop",
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
    image: "https://images.unsplash.com/photo-1762813384339-c526d5533976?w=600&h=400&fit=crop",
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
    image: "https://plus.unsplash.com/premium_photo-1681823801287-4326e7e22676?w=600&h=400&fit=crop",
    features: [
      "Dedicated project manager for every job",
      "Real-time progress updates",
      "Budget tracking and cost control",
      "Vendor and subcontractor coordination",
    ],
  },
];

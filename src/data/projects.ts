export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  location: string;
  year: number;
}

export const projects: Project[] = [
  {
    title: "Prairie Modern Home",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1583430691214-abff69c2748a?w=600&h=400&fit=crop",
    description:
      "A stunning 3,800 sq ft prairie-style home with open-concept living, triple-pane windows, and in-floor heating for Saskatchewan winters.",
    location: "Harbour Landing, Regina",
    year: 2025,
  },
  {
    title: "Full Kitchen Renovation",
    category: "Renovation",
    image: "https://plus.unsplash.com/premium_photo-1683141538689-b022c674280d?w=600&h=400&fit=crop",
    description:
      "Complete kitchen transformation with custom cabinetry, quartz waterfall island, and professional-grade appliances.",
    location: "Cathedral, Regina",
    year: 2025,
  },
  {
    title: "Downtown Office Buildout",
    category: "Commercial",
    image: "https://plus.unsplash.com/premium_photo-1683122033068-f5eeebaf4d29?w=600&h=400&fit=crop",
    description:
      "12,000 sq ft office space with modern open floor plan, private offices, conference rooms, and collaborative break areas.",
    location: "Downtown Regina",
    year: 2024,
  },
  {
    title: "Custom Family Home",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1583430699099-3dedc92f1d18?w=600&h=400&fit=crop",
    description:
      "A custom-built family home with covered front porch, energy-efficient design, and a fully finished basement suite.",
    location: "Wascana View, Regina",
    year: 2024,
  },
  {
    title: "Modern Bathroom Remodel",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1758548157466-7c454382035a?w=600&h=400&fit=crop",
    description:
      "Spa-inspired master bath with heated floors, frameless glass shower, freestanding soaking tub, and dual vanities.",
    location: "Lakeview, Regina",
    year: 2025,
  },
  {
    title: "Retail Space Construction",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1759050486852-fdfe2fdc7bea?w=600&h=400&fit=crop",
    description:
      "6,500 sq ft boutique retail space on Victoria Ave with custom storefront, fitting rooms, and inviting customer areas.",
    location: "East Regina",
    year: 2024,
  },
  {
    title: "Heritage Home Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1768321902794-c24fb1f00661?w=600&h=400&fit=crop",
    description:
      "Complete renovation of a 1920s heritage home preserving original character while adding modern insulation, wiring, and finishes.",
    location: "Old Lakeview, Regina",
    year: 2025,
  },
  {
    title: "Energy-Efficient Family Home",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1583381707695-676570b40d38?w=600&h=400&fit=crop",
    description:
      "4,200 sq ft family home built to exceed Saskatchewan energy codes with ICF foundation, spray foam insulation, and HRV system.",
    location: "Hawkstone, Regina",
    year: 2024,
  },
  {
    title: "Multi-Unit Townhome Development",
    category: "Residential",
    image: "https://plus.unsplash.com/premium_photo-1731192707161-ca4bed1b9241?w=600&h=400&fit=crop",
    description:
      "Modern townhome development with 8 units featuring contemporary finishes, attached garages, and low-maintenance exteriors.",
    location: "Greens on Gardiner, Regina",
    year: 2025,
  },
];

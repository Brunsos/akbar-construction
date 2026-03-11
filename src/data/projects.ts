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
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    description:
      "A stunning 3,800 sq ft prairie-style home with open-concept living, triple-pane windows, and in-floor heating for Saskatchewan winters.",
    location: "Harbour Landing, Regina",
    year: 2025,
  },
  {
    title: "Luxury Kitchen Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    description:
      "Complete kitchen transformation with custom walnut cabinetry, quartz waterfall island, and professional-grade appliances.",
    location: "Cathedral, Regina",
    year: 2025,
  },
  {
    title: "Downtown Office Buildout",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    description:
      "12,000 sq ft office space with modern open floor plan, private offices, conference rooms, and collaborative break areas.",
    location: "Downtown Regina",
    year: 2024,
  },
  {
    title: "Custom Craftsman Home",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    description:
      "A custom craftsman-style home with covered front porch, exposed beams, and energy-efficient design throughout.",
    location: "Wascana View, Regina",
    year: 2024,
  },
  {
    title: "Spa-Inspired Bathroom",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
    description:
      "Spa-inspired master bath with heated floors, frameless glass shower, freestanding soaking tub, and dual vanities.",
    location: "Lakeview, Regina",
    year: 2025,
  },
  {
    title: "Retail Space Construction",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description:
      "6,500 sq ft boutique retail space on Victoria Ave with custom storefront, fitting rooms, and inviting customer areas.",
    location: "East Regina",
    year: 2024,
  },
  {
    title: "Heritage Home Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop",
    description:
      "Complete renovation of a 1920s heritage home preserving original character while adding modern insulation, wiring, and finishes.",
    location: "Old Lakeview, Regina",
    year: 2025,
  },
  {
    title: "Energy-Efficient Family Home",
    category: "Custom",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    description:
      "4,200 sq ft family home built to exceed Saskatchewan energy codes with ICF foundation, spray foam insulation, and HRV system.",
    location: "Hawkstone, Regina",
    year: 2024,
  },
  {
    title: "Multi-Unit Townhome Development",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    description:
      "Modern townhome development with 8 units featuring contemporary finishes, attached garages, and low-maintenance exteriors.",
    location: "Greens on Gardiner, Regina",
    year: 2025,
  },
];

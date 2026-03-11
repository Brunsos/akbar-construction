"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Residential", "Commercial", "Renovation", "Custom"];

interface ProjectGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectGallery({
  limit,
  showFilters = true,
}: ProjectGalleryProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="Browse our portfolio of completed residential, commercial, and renovation projects."
        />

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Permanent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category pill */}
                <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {project.category}
                </span>

                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold font-heading text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs text-gray-300">
                      {project.location} &middot; {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

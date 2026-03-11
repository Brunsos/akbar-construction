const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Years in Business" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "5-Star Reviews" },
];

export default function Stats() {
  return (
    <section className="relative py-14 bg-foreground overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold font-heading text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

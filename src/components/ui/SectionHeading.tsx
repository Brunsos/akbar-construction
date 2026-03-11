interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${light ? "text-accent-light" : "text-accent"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold font-heading ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

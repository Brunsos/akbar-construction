interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-border overflow-hidden ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

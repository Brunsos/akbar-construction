import { CalendarCheck, ClipboardList, HardHat, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  CalendarCheck,
  ClipboardList,
  HardHat,
  CheckCircle,
};

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Our Process
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            A simple, transparent process from your first call to project completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <div
                key={step.step}
                className={`relative p-8 text-center group ${
                  i < PROCESS_STEPS.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                } ${i < 2 ? "md:border-b md:border-white/10 lg:border-b-0" : ""}`}
              >
                {/* Step number */}
                <div className="relative inline-flex mb-5">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

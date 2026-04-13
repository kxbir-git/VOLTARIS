import { ScrollReveal } from "@/hooks/useScrollAnimation";

const regions = [
  { name: "North America", cities: "New York · Los Angeles · Toronto", count: "120+" },
  { name: "Europe", cities: "London · Berlin · Paris · Milan", count: "200+" },
  { name: "Asia Pacific", cities: "Tokyo · Shanghai · Dubai · Seoul", count: "150+" },
  { name: "Middle East", cities: "Dubai · Riyadh · Doha", count: "45+" },
];

const GlobalPresence = () => (
  <section id="global" className="py-24 lg:py-32 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3 text-glow-blue">Worldwide</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">A Global Vision</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Voltaris showrooms and charging stations span across 42 countries.</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { value: "42", label: "Countries" },
          { value: "515+", label: "Showrooms" },
          { value: "50K+", label: "Charge Stations" },
          { value: "1M+", label: "Vehicles Delivered" },
        ].map((stat, idx) => (
          <ScrollReveal key={stat.label} delay={idx * 0.1}>
            <div className="text-center p-6 rounded-xl bg-card/50 gradient-border h-full">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary text-glow-blue">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {regions.map((region, idx) => (
          <ScrollReveal key={region.name} delay={0.4 + idx * 0.1}>
            <div className="p-6 rounded-xl bg-card/30 border border-border hover:border-primary/30 transition-colors duration-300 h-full">
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{region.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{region.cities}</p>
              <p className="text-xs text-primary font-semibold">{region.count} locations</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalPresence;

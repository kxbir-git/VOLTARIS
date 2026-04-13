const regions = [
  { name: "North America", cities: "New York · Los Angeles · Toronto", count: "120+" },
  { name: "Europe", cities: "London · Berlin · Paris · Milan", count: "200+" },
  { name: "Asia Pacific", cities: "Tokyo · Shanghai · Dubai · Seoul", count: "150+" },
  { name: "Middle East", cities: "Dubai · Riyadh · Doha", count: "45+" },
];

const GlobalPresence = () => {
  return (
    <section id="global" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3 text-glow-blue">
            Worldwide
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            A Global Vision
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Voltaris showrooms and charging stations span across 42 countries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { value: "42", label: "Countries" },
            { value: "515+", label: "Showrooms" },
            { value: "50K+", label: "Charge Stations" },
            { value: "1M+", label: "Vehicles Delivered" },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card/50 gradient-border"
              style={{ animation: `slideUp 0.6s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-primary text-glow-blue">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((region, idx) => (
            <div
              key={region.name}
              className="p-6 rounded-xl bg-card/30 border border-border hover:border-primary/30 transition-colors duration-300"
              style={{ animation: `slideUp 0.6s ease-out ${0.4 + idx * 0.1}s forwards`, opacity: 0 }}
            >
              <h3 className="font-display text-sm font-bold text-foreground mb-2">
                {region.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">{region.cities}</p>
              <p className="text-xs text-primary font-semibold">{region.count} locations</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;

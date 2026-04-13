import { Brain, BatteryCharging, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Autonomous Drive",
    description:
      "Level 5 autonomous driving powered by neural processors. 360° awareness with 24 sensors mapping your environment in real-time.",
  },
  {
    icon: BatteryCharging,
    title: "Solid-State Battery",
    description:
      "Next-gen solid-state cells deliver 720 km range. Ultra-fast charging restores 80% in just 18 minutes.",
  },
  {
    icon: MapPin,
    title: "Global Charging Network",
    description:
      "Access 50,000+ Voltaris Hypercharge stations worldwide. Automatic route planning with live availability.",
  },
  {
    icon: Shield,
    title: "Quantum Security",
    description:
      "Post-quantum encrypted communications. Biometric vehicle access with facial recognition and heartbeat ID.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3 text-glow-blue">
            Innovation
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Technology Beyond Tomorrow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every Voltaris is engineered with technologies that haven't reached the mainstream yet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group p-8 rounded-xl bg-card/50 backdrop-blur-sm gradient-border hover-lift"
              style={{ animation: `slideUp 0.6s ease-out ${idx * 0.12}s forwards`, opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCar} alt="Voltaris electric supercar" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <ScrollReveal delay={0.1}>
            <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4 text-glow-blue">
              2026 Model Lineup
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="text-foreground">Redefining</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-neon-cyan to-accent bg-clip-text text-transparent">
                Electric Luxury
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Where cutting-edge technology meets uncompromising elegance. Experience the future of mobility.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="neon" size="lg" className="text-base animate-pulse-glow">
                Explore Models
              </Button>
              <Button variant="neon-outline" size="lg" className="text-base">
                Watch Film
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;

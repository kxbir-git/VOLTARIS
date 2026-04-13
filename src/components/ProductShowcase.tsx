import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Gauge, Battery, Timer } from "lucide-react";

import heroCarImg from "@/assets/hero-car.jpg";
import carSedanImg from "@/assets/car-sedan.jpg";
import carSuvImg from "@/assets/car-suv.jpg";
import heroBikeImg from "@/assets/hero-bike.jpg";
import bikeSportImg from "@/assets/bike-sport.jpg";
import bikeCruiserImg from "@/assets/bike-cruiser.jpg";

type Category = "cars" | "bikes";

const vehicles = {
  cars: [
    {
      name: "Voltaris Phantom",
      tagline: "The Apex Predator",
      image: heroCarImg,
      speed: "260 km/h",
      range: "720 km",
      battery: "120 kWh",
      charge: "18 min",
      price: "$189,000",
    },
    {
      name: "Voltaris Aether",
      tagline: "Silent Elegance",
      image: carSedanImg,
      speed: "220 km/h",
      range: "680 km",
      battery: "100 kWh",
      charge: "22 min",
      price: "$124,000",
    },
    {
      name: "Voltaris Titan",
      tagline: "Command the Road",
      image: carSuvImg,
      speed: "200 km/h",
      range: "600 km",
      battery: "110 kWh",
      charge: "25 min",
      price: "$145,000",
    },
  ],
  bikes: [
    {
      name: "Voltaris Spectre",
      tagline: "Pure Electric Fury",
      image: heroBikeImg,
      speed: "240 km/h",
      range: "350 km",
      battery: "35 kWh",
      charge: "12 min",
      price: "$42,000",
    },
    {
      name: "Voltaris Blaze",
      tagline: "Born to Race",
      image: bikeSportImg,
      speed: "220 km/h",
      range: "300 km",
      battery: "30 kWh",
      charge: "15 min",
      price: "$35,000",
    },
    {
      name: "Voltaris Nova",
      tagline: "The Future Cruiser",
      image: bikeCruiserImg,
      speed: "180 km/h",
      range: "400 km",
      battery: "40 kWh",
      charge: "20 min",
      price: "$38,000",
    },
  ],
};

const specs = [
  { icon: Gauge, label: "Top Speed", key: "speed" as const },
  { icon: Battery, label: "Range", key: "range" as const },
  { icon: Zap, label: "Battery", key: "battery" as const },
  { icon: Timer, label: "Fast Charge", key: "charge" as const },
];

const ProductShowcase = () => {
  const [category, setCategory] = useState<Category>("cars");

  return (
    <section id="models" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3 text-glow-blue">
            2026 Lineup
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Machine
          </h2>
          <div className="flex justify-center gap-2">
            <Button
              variant={category === "cars" ? "neon" : "neon-outline"}
              size="sm"
              onClick={() => setCategory("cars")}
            >
              Electric Cars
            </Button>
            <Button
              variant={category === "bikes" ? "neon" : "neon-outline"}
              size="sm"
              onClick={() => setCategory("bikes")}
            >
              Electric Bikes
            </Button>
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles[category].map((vehicle, idx) => (
            <div
              key={vehicle.name}
              className="group bg-card rounded-xl overflow-hidden gradient-border hover-lift cursor-pointer"
              style={{ animation: `slideUp 0.6s ease-out ${idx * 0.15}s forwards`, opacity: 0 }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-display text-xs tracking-[0.2em] uppercase text-primary text-glow-blue">
                    {vehicle.tagline}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  {vehicle.name}
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {specs.map((spec) => (
                    <div key={spec.key} className="flex items-center gap-2">
                      <spec.icon className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="text-sm font-semibold text-foreground">
                          {vehicle[spec.key]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-primary">
                    {vehicle.price}
                  </span>
                  <Button variant="neon" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

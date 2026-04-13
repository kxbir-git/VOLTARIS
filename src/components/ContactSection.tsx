import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "Our concierge team will respond within 24 hours." });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-3 text-glow-blue">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Private Concierge
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Experience personalized service from our dedicated concierge team.
              Whether you're configuring your dream vehicle or scheduling a private viewing,
              we're here to assist.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "concierge@voltaris.com" },
                { icon: Phone, text: "+1 (888) VOLTARIS" },
                { icon: MapPin, text: "Voltaris Tower, Manhattan, NY" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              required
              maxLength={100}
              className="bg-card border-border focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              required
              maxLength={255}
              className="bg-card border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              required
              maxLength={1000}
              rows={5}
              className="bg-card border-border focus:border-primary resize-none"
            />
            <Button variant="neon" size="lg" type="submit" className="w-full">
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

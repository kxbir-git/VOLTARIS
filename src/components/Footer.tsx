import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          <span className="font-display text-sm font-bold tracking-widest text-foreground">VOLTARIS</span>
        </div>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
          <a href="#" className="hover:text-primary transition-colors">Press</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Voltaris. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

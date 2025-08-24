import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="font-display font-bold text-xl">Editkaro.in</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">Portfolio</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">Portfolio</a>
              <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
              <Button className="bg-gradient-primary hover:shadow-glow transition-smooth w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
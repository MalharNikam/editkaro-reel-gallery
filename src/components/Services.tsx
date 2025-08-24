import { Button } from "@/components/ui/button";
import { Video, Film, Gamepad2, Target, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Short-form Videos",
    description: "Engaging vertical videos optimized for TikTok, Instagram Reels, and YouTube Shorts",
    features: ["Hook-first storytelling", "Trend integration", "Platform optimization"]
  },
  {
    icon: Film,
    title: "Long-form Content",
    description: "Comprehensive video production for YouTube, documentaries, and educational content",
    features: ["Narrative structure", "Advanced editing", "Custom graphics"]
  },
  {
    icon: Gamepad2,
    title: "Gaming Videos",
    description: "High-energy gaming content with dynamic transitions and effects",
    features: ["Montage editing", "Highlight reels", "Stream overlays"]
  },
  {
    icon: Target,
    title: "eCommerce Ads",
    description: "Conversion-focused product videos that drive sales and engagement",
    features: ["Product showcasing", "Call-to-action optimization", "A/B testing"]
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and grading for cinematic quality",
    features: ["Color matching", "Mood enhancement", "Brand consistency"]
  },
  {
    icon: Zap,
    title: "Creative Effects",
    description: "Custom animations, transitions, and visual effects for unique content",
    features: ["Motion graphics", "VFX", "Brand animations"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to your brand and platform needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-spring group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-secondary hover:shadow-glow-accent transition-spring">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
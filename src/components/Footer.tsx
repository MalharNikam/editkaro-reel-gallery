const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="font-display font-bold text-xl">Editkaro.in</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional video editing agency specializing in creating viral content 
              that captivates audiences and drives engagement across all platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                YouTube
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Short-form Videos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Gaming Content</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">eCommerce Ads</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Color Grading</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-smooth">Portfolio</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Editkaro.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
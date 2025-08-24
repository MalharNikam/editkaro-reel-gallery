import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Let's Create <span className="bg-gradient-secondary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your content? Get in touch and let's discuss your next video project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
            <h3 className="font-semibold text-2xl mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full bg-background border border-input rounded-md px-3 py-2">
                  <option>Select a service</option>
                  <option>Short-form Videos</option>
                  <option>Long-form Videos</option>
                  <option>Gaming Videos</option>
                  <option>Football Edits</option>
                  <option>eCommerce Ads</option>
                  <option>Documentary Style</option>
                  <option>Color Grading</option>
                  <option>Anime Videos</option>
                  <option>General Ads</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-spring group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-2xl mb-6">Get in touch</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help bring your vision to life. Whether you need a quick consultation 
                or a comprehensive video strategy, our team is ready to assist.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">hello@editkaro.in</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6 border border-border">
              <h4 className="font-medium mb-3">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 24 hours. 
                For urgent projects, please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
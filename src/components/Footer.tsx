import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Join Club", href: "#join" },
    { name: "Contact", href: "#contact" }
  ];

  const resources = [
    { name: "Learning Resources", href: "#" },
    { name: "Project Guidelines", href: "#" },
    { name: "Code of Conduct", href: "#" },
    { name: "Member Portal", href: "#" },
    { name: "FAQ", href: "#" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Club Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/lovable-uploads/cb4a4376-21d6-4660-bb24-110a14a20e1d.png" 
                  alt="ACC Logo" 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold">Amity Coding Club</h3>
                  <p className="text-white/70 text-sm">Code. Create. Collaborate.</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Empowering the next generation of developers through collaborative learning, 
                innovative projects, and community building.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Amity University, Sector 125, Noida</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@amitycodingclub.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <p className="text-white/80 text-sm mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
                  />
                  <Button variant="accent" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Amity Coding Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
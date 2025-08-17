import { Button } from "@/components/ui/button";
import { Code2, Users, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-club-blue/90 via-club-blue/70 to-club-orange/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Code2 size={60} className="text-white" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <Users size={50} className="text-white" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Rocket size={40} className="text-white" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-slide-up">
          <img 
            src="/lovable-uploads/cb4a4376-21d6-4660-bb24-110a14a20e1d.png" 
            alt="Amity Coding Club Logo" 
            className="w-32 h-32 mx-auto mb-6 animate-glow"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Amity Coding Club
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Where innovation meets collaboration. Join a community of passionate developers building the future, one line of code at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Join the Club
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-club-blue"
          >
            Explore Projects
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">200+</div>
            <div className="text-white/80 text-sm">Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-white/80 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">15+</div>
            <div className="text-white/80 text-sm">Events</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
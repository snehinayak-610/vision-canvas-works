import { Card } from "@/components/ui/card";
import { Code, Brain, Trophy, Heart } from "lucide-react";
import teamImage from "@/assets/team-coding.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Learn & Grow",
      description: "Master programming languages, frameworks, and best practices through hands-on workshops and mentorship."
    },
    {
      icon: Brain,
      title: "Innovation Hub",
      description: "Transform ideas into reality with cutting-edge technologies and collaborative project development."
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description: "Participate in hackathons, coding competitions, and technical challenges to showcase your skills."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Build lasting connections with like-minded developers in a supportive and inclusive environment."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our <span className="bg-gradient-accent bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're more than just a coding club—we're a family of developers, innovators, and dreamers 
            working together to push the boundaries of technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-glow">
              <img 
                src={teamImage} 
                alt="Team coding together" 
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-club-blue/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -right-6 p-6 shadow-card bg-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-club-blue">3+</div>
                <div className="text-sm text-muted-foreground">Years Strong</div>
              </div>
            </Card>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Empowering the Next Generation of Developers
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with the vision of creating a thriving tech community at Amity University, 
                our club has become the epicenter of innovation and learning. We believe that the 
                best way to learn is by doing, and the best way to grow is together.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From beginner-friendly workshops to advanced project collaborations, we provide 
                opportunities for every skill level to flourish and contribute to meaningful projects.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-lg font-bold text-primary">Weekly</div>
                <div className="text-sm text-muted-foreground">Workshops</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <div className="text-lg font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
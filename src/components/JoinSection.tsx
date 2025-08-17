import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Award, MessageCircle } from "lucide-react";
import { useState } from "react";

const JoinSection = () => {
  const [email, setEmail] = useState("");

  const benefits = [
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with like-minded developers and industry professionals"
    },
    {
      icon: Calendar,
      title: "Exclusive Events",
      description: "Access to workshops, hackathons, and tech talks throughout the year"
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Earn certificates and badges for completing projects and challenges"
    },
    {
      icon: MessageCircle,
      title: "Mentorship Program",
      description: "Get guidance from senior students and industry experts"
    }
  ];

  const membershipTiers = [
    {
      name: "Student Member",
      price: "Free",
      period: "",
      features: [
        "Access to all workshops",
        "Project collaboration",
        "Community Discord access",
        "Resource library",
        "Networking events"
      ],
      highlighted: false
    },
    {
      name: "Active Contributor",
      price: "Earn by",
      period: "Contributing",
      features: [
        "All Student Member benefits",
        "Priority workshop seats",
        "Mentor matching",
        "Leadership opportunities",
        "Conference sponsorships",
        "Exclusive swag"
      ],
      highlighted: true
    }
  ];

  const requirements = [
    "Currently enrolled at Amity University",
    "Basic programming knowledge (any language)",
    "Enthusiasm for learning and collaboration",
    "Commitment to attend regular meetings"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    // Handle newsletter signup
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="bg-gradient-accent bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Become part of a vibrant community of developers and innovators. Start your journey with us today!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {membershipTiers.map((tier, index) => (
            <Card key={index} className={`p-8 relative overflow-hidden ${
              tier.highlighted 
                ? 'ring-2 ring-club-blue shadow-glow bg-gradient-to-br from-white to-club-blue/5' 
                : 'bg-gradient-card'
            } border-0`}>
              {tier.highlighted && (
                <Badge className="absolute top-4 right-4 bg-gradient-hero text-white">
                  Recommended
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-club-blue">
                  {tier.price}
                  {tier.period && <span className="text-lg text-muted-foreground ml-1">{tier.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-club-blue flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlighted ? "hero" : "club"} 
                className="w-full"
                size="lg"
              >
                {tier.highlighted ? "Apply Now" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Requirements Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Membership Requirements
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-club-blue flex-shrink-0" />
                <span className="text-muted-foreground">{requirement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 bg-gradient-hero text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-6 opacity-90">
            Get notified about upcoming events, workshops, and opportunities
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              required
            />
            <Button type="submit" variant="accent" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Ready to Join? Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Reach out to our team for more information or to schedule a club visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Apply for Membership
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
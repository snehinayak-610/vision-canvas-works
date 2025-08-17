import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Campus Connect",
      description: "A full-stack social platform connecting students across campus with real-time messaging, event sharing, and study groups.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      stars: 124,
      forks: 32,
      status: "Active",
      type: "Web App",
      contributors: 8,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    },
    {
      title: "Smart Library System",
      description: "AI-powered library management system with book recommendations, automatic cataloging, and predictive analytics.",
      technologies: ["Python", "Django", "TensorFlow", "PostgreSQL"],
      stars: 89,
      forks: 21,
      status: "Active",
      type: "AI/ML",
      contributors: 5,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
    },
    {
      title: "Code Review Bot",
      description: "Automated code review tool that analyzes pull requests for best practices, security issues, and performance optimizations.",
      technologies: ["TypeScript", "GitHub API", "Docker", "Redis"],
      stars: 76,
      forks: 18,
      status: "Beta",
      type: "DevOps",
      contributors: 4,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    }
  ];

  const projectCategories = [
    { name: "Web Development", count: 15, color: "bg-blue-100 text-blue-800" },
    { name: "Mobile Apps", count: 8, color: "bg-green-100 text-green-800" },
    { name: "AI/ML", count: 12, color: "bg-purple-100 text-purple-800" },
    { name: "DevOps", count: 6, color: "bg-orange-100 text-orange-800" },
    { name: "Blockchain", count: 4, color: "bg-yellow-100 text-yellow-800" },
    { name: "IoT", count: 7, color: "bg-pink-100 text-pink-800" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Beta": return "bg-yellow-500";
      case "Completed": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover innovative projects built by our community members. From web applications to AI solutions, 
            our club is constantly pushing the boundaries of technology.
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {projectCategories.map((category, index) => (
            <Badge 
              key={index} 
              className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-pointer px-4 py-2`}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-white border-0">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${project.type === 'Web App' ? 'bg-blue-100 text-blue-800' : 
                                     project.type === 'AI/ML' ? 'bg-purple-100 text-purple-800' : 
                                     'bg-orange-100 text-orange-800'}`}>
                    {project.type}
                  </Badge>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)} mt-1`}></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  <div className="text-xs">
                    {project.contributors} contributors
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="club" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Showcase Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-club-blue mb-2">50+</div>
            <div className="text-muted-foreground">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-club-orange mb-2">1.2k+</div>
            <div className="text-muted-foreground">GitHub Stars</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-club-blue mb-2">300+</div>
            <div className="text-muted-foreground">Commits</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-club-orange mb-2">15+</div>
            <div className="text-muted-foreground">Languages</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to contribute or start your own project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our GitHub organization and start collaborating with fellow developers on exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Join GitHub Org
            </Button>
            <Button variant="outline" size="lg">
              Submit Project Idea
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ProjectsSection />
      <JoinSection />
      <Footer />
    </main>
  );
};

export default Index;

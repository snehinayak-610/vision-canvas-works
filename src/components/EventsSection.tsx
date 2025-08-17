import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "React Workshop: Building Modern UIs",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab A-301",
      attendees: 45,
      maxAttendees: 60,
      type: "Workshop",
      status: "Open"
    },
    {
      title: "Hackathon 2024: Code for Good",
      date: "March 22-24, 2024",
      time: "48 Hours",
      location: "Innovation Center",
      attendees: 120,
      maxAttendees: 150,
      type: "Competition",
      status: "Filling Fast"
    },
    {
      title: "Tech Talk: AI in Modern Development",
      date: "April 5, 2024",
      time: "6:00 PM - 7:30 PM",
      location: "Auditorium B",
      attendees: 85,
      maxAttendees: 200,
      type: "Seminar",
      status: "Open"
    }
  ];

  const pastEvents = [
    "Python Fundamentals Bootcamp",
    "Database Design Workshop",
    "Mobile App Development Series",
    "Open Source Contribution Drive",
    "Interview Preparation Session"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-500";
      case "Filling Fast": return "bg-yellow-500";
      case "Full": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Workshop": return "bg-blue-100 text-blue-800";
      case "Competition": return "bg-purple-100 text-purple-800";
      case "Seminar": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Upcoming <span className="bg-gradient-accent bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for workshops, hackathons, tech talks, and networking sessions designed to enhance your skills and expand your network.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
              {/* Event Header */}
              <div className="flex justify-between items-start mb-4">
                <Badge className={getTypeColor(event.type)}>
                  {event.type}
                </Badge>
                <div className={`w-3 h-3 rounded-full ${getStatusColor(event.status)}`}></div>
              </div>

              {/* Event Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-club-blue" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-club-blue" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-club-blue" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-4 h-4 text-club-blue" />
                  <span className="text-sm">{event.attendees}/{event.maxAttendees} registered</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Register Button */}
              <Button 
                variant={event.status === "Full" ? "secondary" : "club"} 
                className="w-full"
                disabled={event.status === "Full"}
              >
                {event.status === "Full" ? "Event Full" : "Register Now"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Past Events Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Recent Events
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {pastEvents.map((event, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
              >
                {event}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
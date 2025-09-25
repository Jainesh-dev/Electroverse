import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Cpu, Zap, Code2 } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  type: "past" | "current" | "upcoming";
  description: string;
  participants: number;
  icon: React.ReactNode;
  color: string;
}

const EventsSection = () => {
  const [filter, setFilter] = useState<"all" | "past" | "current" | "upcoming">("all");

  const events: Event[] = [
    {
      id: 1,
      title: "Circuit Design Workshop",
      date: "2024-01-15",
      type: "past",
      description: "Hands-on workshop covering PCB design and electronic circuit fundamentals.",
      participants: 45,
      icon: <Cpu className="w-6 h-6" />,
      color: "vibranium"
    },
    {
      id: 2,
      title: "AI/ML Bootcamp",
      date: "2024-02-20",
      type: "past",
      description: "Intensive 3-day bootcamp on machine learning and artificial intelligence.",
      participants: 120,
      icon: <Zap className="w-6 h-6" />,
      color: "royal"
    },
    {
      id: 3,
      title: "IoT Innovation Challenge",
      date: "2024-03-10",
      type: "past",
      description: "48-hour hackathon focused on Internet of Things solutions.",
      participants: 80,
      icon: <Trophy className="w-6 h-6" />,
      color: "silver"
    },
    {
      id: 4,
      title: "Web Development Series",
      date: "2024-04-05",
      type: "current",
      description: "Ongoing weekly sessions covering modern web development technologies.",
      participants: 95,
      icon: <Code2 className="w-6 h-6" />,
      color: "vibranium"
    },
    {
      id: 5,
      title: "Robotics Competition",
      date: "2024-05-15",
      type: "current",
      description: "Build and program robots for various challenges and competitions.",
      participants: 60,
      icon: <Cpu className="w-6 h-6" />,
      color: "royal"
    },
    {
      id: 6,
      title: "Tech-a-thon 2024",
      date: "2024-06-20",
      type: "upcoming",
      description: "Our flagship annual hackathon bringing together the best tech minds.",
      participants: 200,
      icon: <Zap className="w-6 h-6" />,
      color: "silver"
    }
  ];

  const filteredEvents = filter === "all" ? events : events.filter(event => event.type === filter);

  const getStatusColor = (type: string) => {
    switch (type) {
      case "past": return "text-muted-foreground";
      case "current": return "text-cyber";
      case "upcoming": return "text-electric";
      default: return "text-foreground";
    }
  };

  const getStatusBadge = (type: string) => {
    switch (type) {
      case "past": return "Completed";
      case "current": return "Ongoing";
      case "upcoming": return "Upcoming";
      default: return "";
    }
  };

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 sm:w-48 h-40 sm:h-48 rounded-full bg-electric/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/4 w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-neon/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 text-electric">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Our Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-tech font-bold mb-4 sm:mb-6">
            <span className="text-electric">EVENT</span> <span className="text-cyber">TIMELINE</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8">
            From workshops to hackathons, explore our journey of innovation and learning
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["all", "past", "current", "upcoming"].map((filterType) => (
              <Button
                key={filterType}
                variant={filter === filterType ? "vibranium" : "outline_vibranium"}
                onClick={() => setFilter(filterType as any)}
                className="capitalize"
              >
                {filterType === "all" ? "All Events" : filterType}
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line (hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vibranium via-royal to-silver transform -translate-x-1/2" />
          <div className="absolute left-4 md:hidden top-0 bottom-0 w-0.5 bg-gradient-to-b from-vibranium via-royal to-silver" />

          {/* Events */}
          <div className="space-y-10 md:space-y-16">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className={`flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } relative`}>
                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-${event.color} glow-${event.color === "vibranium" ? "vibranium" : event.color === "royal" ? "royal" : "silver"} transform md:-translate-x-1/2 z-10`} />

                {/* Event Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}>
                  <div className={`bg-card/50 backdrop-blur-sm border border-${event.color}/20 rounded-lg p-4 sm:p-6 hover:scale-105 transition-all duration-300 glow-${event.color === "vibranium" ? "vibranium" : event.color === "royal" ? "royal" : "silver"}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`text-${event.color} mb-2`}>{event.icon}</div>
                      <span className={`text-xs px-2 py-1 rounded-full bg-${event.color}/20 ${getStatusColor(event.type)} font-semibold`}>
                        {getStatusBadge(event.type)}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 leading-relaxed">{event.description}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech-a-thon CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-vibranium/20 rounded-lg p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-tech font-bold mb-3 sm:mb-4">
              <span className="text-vibranium">READY FOR</span> <span className="text-royal">TECH-A-THON?</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
              Join our flagship event where innovation meets competition. Build, code, and create solutions that matter.
            </p>
            <Button variant="vibranium" size="lg">
              Learn More About Tech-a-thon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

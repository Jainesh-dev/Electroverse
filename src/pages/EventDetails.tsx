import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Zap, Cpu, ArrowLeft, MapPin, Clock, Award, BookOpen, Users as UsersIcon } from "lucide-react";

interface EventDetail {
  id: number;
  title: string;
  date: string;
  description: string;
  detailedDescription: string;
  participants: number;
  icon: React.ReactNode;
  color: string;
  learnings: string[];
  experience: string[];
  pastWinners: { name: string; project: string }[];
  location: string;
  duration: string;
  registrationLink?: string;
  schedule: { time: string; activity: string }[];
  
}

const EventDetails = () => {
  const { eventName } = useParams<{ eventName: string }>();
  const [event, setEvent] = useState<EventDetail | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock events data - Code Rush removed
  const mockEvents: EventDetail[] = [
    {
      id: 1,
      title: "Techathon 2024",
      date: "2024-06-20",
      description: "Our flagship annual hackathon bringing together the best tech minds.",
      detailedDescription: "Tech-a-thon is our premier 48-hour hackathon that challenges participants to solve real-world problems using cutting-edge technology. This event brings together students, professionals, and tech enthusiasts to collaborate, innovate, and build solutions that matter. With mentorship from industry experts and exciting prizes, it's the perfect platform to showcase your skills.",
      participants: 200,
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "vibranium",
      learnings: [
        "Full-stack development with modern frameworks",
        "Team collaboration and project management",
        "Pitching ideas to investors and judges",
        "Problem-solving under time constraints",
        "API integration and cloud deployment",
        "UI/UX design principles"
      ],
      experience: [
        "48 hours of intense coding and innovation",
        "Mentorship sessions with industry experts",
        "Networking opportunities with tech companies",
        "Prize pool of ₹50,000+ and internship offers",
        "Workshops on trending technologies",
        "Career guidance sessions"
      ],
      pastWinners: [
        { name: "Team Quantum", project: "AI-based Healthcare Diagnosis System" },
        { name: "Byte Crushers", project: "Blockchain Voting System for Elections" },
        { name: "Circuit Wizards", project: "Smart Energy Management using IoT" },
        { name: "Data Ninjas", project: "Predictive Analytics for Agriculture" }
      ],
      location: "Tech Hub Auditorium, Main Campus",
      duration: "48 Hours",
      registrationLink: "https://forms.google.com/tech-a-thon-2024",
      schedule: [
        { time: "Day 1: 9:00 AM", activity: "Opening Ceremony & Problem Statement Reveal" },
        { time: "Day 1: 10:00 AM", activity: "Hacking Begins" },
        { time: "Day 1: 2:00 PM", activity: "Mentorship Session 1" },
        { time: "Day 2: 10:00 AM", activity: "Mid-review Checkpoint" },
        { time: "Day 2: 4:00 PM", activity: "Mentorship Session 2" },
        { time: "Day 3: 10:00 AM", activity: "Submission Deadline" },
        { time: "Day 3: 2:00 PM", activity: "Project Presentations" },
        { time: "Day 3: 5:00 PM", activity: "Award Ceremony & Closing" }
      ]
    },
    {
      id: 2,
      title: "Circuitry Maze Workshop",
      date: "2024-03-15",
      description: "Hands-on workshop covering PCB design and electronic circuit fundamentals.",
      detailedDescription: "The Circuitry Maze Workshop is designed for electronics enthusiasts who want to dive deep into PCB design and circuit fundamentals. From beginners to intermediate learners, this workshop provides hands-on experience with circuit simulation, PCB layout design, and soldering techniques. Participants will build their own functional circuit board to take home.",
      participants: 45,
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "silver",
      learnings: [
        "PCB design using KiCAD software",
        "Circuit simulation and analysis",
        "Electronic component selection",
        "Soldering techniques (SMD & through-hole)",
        "Circuit troubleshooting",
        "Power supply design"
      ],
      experience: [
        "Hands-on PCB assembly session",
        "Live circuit troubleshooting demonstrations",
        "Take-home project kit included",
        "Industry expert Q&A session",
        "Certificate of completion",
        "Networking with electronics professionals"
      ],
      pastWinners: [
        { name: "Arjun Mehta", project: "Smart Home Automation System" },
        { name: "Priya Sharma", project: "Solar Tracker Circuit with Arduino" },
        { name: "Rohan Verma", project: "High-fidelity Audio Amplifier" },
        { name: "Sneha Patel", project: "Digital Thermometer with LCD Display" }
      ],
      location: "Electronics Lab, Block B",
      duration: "8 Hours",
      registrationLink: "https://forms.google.com/circuitry-workshop",
      schedule: [
        { time: "9:00 AM - 10:30 AM", activity: "Introduction to Electronics & PCB Basics" },
        { time: "10:30 AM - 1:00 PM", activity: "Hands-on: Circuit Design using KiCAD" },
        { time: "1:00 PM - 2:00 PM", activity: "Lunch Break" },
        { time: "2:00 PM - 4:00 PM", activity: "PCB Layout & Component Placement" },
        { time: "4:00 PM - 5:30 PM", activity: "Soldering Practice & Assembly" },
        { time: "5:30 PM - 6:00 PM", activity: "Testing & Troubleshooting" }
      ]
    }
  ];

  useEffect(() => {
    // Create a normalized version of the eventName from URL
    const normalizeForMatching = (str: string) => {
      return str.toLowerCase().replace(/-/g, ' ').trim();
    };
    
    const normalizedEventName = eventName ? normalizeForMatching(eventName) : '';
    
    // Find matching event
    const foundEvent = mockEvents.find(event => {
      const normalizedEventTitle = event.title.toLowerCase().trim();
      return normalizedEventTitle === normalizedEventName;
    });
    
    if (foundEvent) {
      setEvent(foundEvent);
    }
    setLoading(false);
  }, [eventName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-electric animate-pulse">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Event Not Found</h1>
        <p className="text-sm text-muted-foreground mb-4 sm:mb-6">The event you're looking for doesn't exist.</p>
        <Link to="/">
          <Button variant="vibranium" size="sm" className="text-xs sm:text-sm">
            <ArrowLeft className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-16 sm:pt-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-4 sm:py-6 md:py-8">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-4 sm:mb-6 text-xs sm:text-sm">
            <ArrowLeft className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
            Back to Events
          </Button>
        </Link>

        {/* Event Header */}
        <div className={`bg-gradient-to-r from-${event.color}/10 to-background border-l-4 border-${event.color} p-4 sm:p-5 md:p-6 rounded-lg mb-6 sm:mb-8`}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`text-${event.color} p-2 sm:p-3 rounded-lg bg-${event.color}/20`}>
                {event.icon}
              </div>
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{event.title}</h1>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.participants} Participants</span>
                  </div>
                </div>
              </div>
            </div>
            
            {event.registrationLink && (
              <Button 
                variant="vibranium" 
                size="sm"
                className="mt-3 sm:mt-0 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2"
                asChild
              >
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Event Description */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-electric" />
                About This Event
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{event.detailedDescription}</p>
            </div>

            {/* Schedule */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyber" />
                Event Schedule
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 md:gap-4 p-2 sm:p-3 rounded-lg bg-background/50">
                    <div className="font-semibold text-xs sm:text-sm md:text-base text-electric min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">{item.time}</div>
                    <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Winners */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                Past Winners
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {event.pastWinners.map((winner, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-lg bg-background/50 border border-electric/10">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-electric mb-1">{winner.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{winner.project}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Key Learnings */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-electric" />
                What You'll Learn
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {event.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="text-electric mt-1">•</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyber" />
                Experience Highlights
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                {event.experience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="text-cyber mt-1">•</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            

            {/* Quick Info Card */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
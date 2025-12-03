import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState<"mentors" | "core" | "heads">("mentors");

  // Leadership Team
  const leadershipTeam: TeamMember[] = [
    { id: 1, name: "alen Stanley", role: "Secretary", image: "/team/Alen.jpg" },
    { id: 2, name: "Tejas", role: "Secretary", image: "/team/tejas.jpg" },
    { id: 3, name: "Alex Chen", role: "President", image: "/team/alex.jpg" },
    { id: 4, name: "Sarah Johnson", role: "Vice President", image: "/team/sarah.jpg" },
    { id: 5, name: "Marcus Rodriguez", role: "Technical Lead", image: "/team/marcus.jpg" },
    { id: 6, name: "Emily Watson", role: "Events Coordinator", image: "/team/emily.jpg" },
  ];

  // Core Members
  const coreMembers: TeamMember[] = [
    { id: 7, name: "David Kim", role: "Developer", image: "/team/david.jpg" },
    { id: 8, name: "Lisa Park", role: "Designer", image: "/team/lisa.jpg" },
    { id: 9, name: "James Wilson", role: "Developer", image: "/team/james.jpg" },
    { id: 10, name: "Maya Patel", role: "Marketing Lead", image: "/team/maya.jpg" },
    { id: 11, name: "Ryan Scott", role: "Developer", image: "/team/ryan.jpg" },
    { id: 12, name: "Sophia Lee", role: "Content Writer", image: "/team/sophia.jpg" },
    { id: 13, name: "Rohan Verma", role: "Developer", image: "/team/rohan.jpg" },
    { id: 14, name: "Priya Sharma", role: "Designer", image: "/team/priya.jpg" },
    { id: 15, name: "Ankit Gupta", role: "Developer", image: "/team/ankit.jpg" },
    { id: 16, name: "Neha Reddy", role: "Marketing", image: "/team/neha.jpg" },
  ];

  // Mentors
  const mentors: TeamMember[] = [
    { id: 101, name: "Dr. Jennifer Adams", role: "Faculty Advisor", image: "/mentors/jennifer.jpg" },
    { id: 102, name: "Prof. Michael Zhang", role: "Technical Mentor", image: "/mentors/michael.jpg" },
    { id: 103, name: "Dr. Rachel Thompson", role: "Innovation Mentor", image: "/mentors/rachel.jpg" },
  ];

  const allMembers = [...leadershipTeam, ...coreMembers, ...mentors];

  const filteredMembers = activeCategory === "mentors" 
    ? mentors
    : activeCategory === "heads" 
      ? leadershipTeam 
      : activeCategory === "core" 
        ? coreMembers 
        : mentors;

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-lg p-4 hover:scale-105 transition-all duration-300 group">
      <div className="mb-3">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-vibranium to-royal overflow-hidden border-2 border-vibranium/30">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8B5CF6&color=fff&bold=true&size=96`;
            }}
          />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-sm font-bold mb-1">{member.name}</h3>
        <div className="text-xs text-vibranium font-medium">{member.role}</div>
      </div>
    </div>
  );

  const CategoryButton = ({ category, label }: { category: string; label: string }) => (
    <button
      onClick={() => setActiveCategory(category as any)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        activeCategory === category
          ? "bg-vibranium text-background glow-vibranium"
          : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-vibranium/20"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-20 relative overflow-hidden" id="team">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-vibranium/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-royal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-royal">
            <span className="text-sm font-semibold uppercase tracking-wider">Meet the Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
            <span className="text-vibranium">OUR</span> <span className="text-royal">TEAM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The brilliant minds behind Electroverse
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <CategoryButton category="mentors" label="Mentors" />
            <CategoryButton category="core" label="Core Members" />
            <CategoryButton category="leadership" label="Heads" />
            
            
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Partner with us - UNCHANGED */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-vibranium/20 rounded-lg p-8">
            <h3 className="text-2xl font-tech font-bold mb-4">
              <span className="text-vibranium">Partner</span> <span className="text-royal">with us</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join us as a sponsor to empower aspiring programmers, fuel innovation, and make a lasting impact on the tech community.
              electroverse@gmail.com
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-royal text-royal bg-transparent rounded-md hover:bg-royal hover:text-background glow-royal transition-all duration-300"
              >
                Checkout Our brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
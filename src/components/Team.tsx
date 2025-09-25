import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  isHead: boolean;
}

const TeamSection = () => {
  const mentors: TeamMember[] = [
    {
      id: 101,
      name: "Dr. Jennifer Adams",
      role: "Faculty Advisor",
      department: "Computer Science",
      image: "/api/placeholder/200/200",
      bio: "Professor with 15+ years experience in AI and machine learning research, guiding students towards excellence.",
      social: {
        linkedin: "#",
        email: "j.adams@university.edu"
      },
      isHead: false
    },
    {
      id: 102,
      name: "Prof. Michael Zhang",
      role: "Technical Mentor",
      department: "Electrical Engineering",
      image: "/api/placeholder/200/200",
      bio: "Industry veteran and professor specializing in embedded systems and IoT development.",
      social: {
        linkedin: "#",
        email: "m.zhang@university.edu"
      },
      isHead: false
    },
    {
      id: 103,
      name: "Dr. Rachel Thompson",
      role: "Innovation Mentor",
      department: "Software Engineering",
      image: "/api/placeholder/200/200",
      bio: "Startup founder turned educator, helping students bridge the gap between academia and industry.",
      social: {
        linkedin: "#",
        email: "r.thompson@university.edu"
      },
      isHead: false
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Chen",
      role: "President",
      department: "Computer Science",
      image: "/api/placeholder/200/200",
      bio: "Passionate about AI and machine learning, leading the committee towards innovative horizons.",
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@electroverse.org"
      },
      isHead: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Vice President",
      department: "Electrical Engineering",
      image: "/api/placeholder/200/200",
      bio: "Hardware enthusiast with expertise in IoT and embedded systems development.",
      social: {
        github: "#",
        linkedin: "#",
        email: "sarah@electroverse.org"
      },
      isHead: true
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Technical Lead",
      department: "Software Engineering",
      image: "/api/placeholder/200/200",
      bio: "Full-stack developer focusing on modern web technologies and cloud architecture.",
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@electroverse.org"
      },
      isHead: true
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "Events Coordinator",
      department: "Information Technology",
      image: "/api/placeholder/200/200",
      bio: "Organizing engaging tech events and workshops that bring the community together.",
      social: {
        linkedin: "#",
        email: "emily@electroverse.org"
      },
      isHead: true
    },
    {
      id: 5,
      name: "David Kim",
      role: "Developer",
      department: "Computer Science",
      image: "/api/placeholder/200/200",
      bio: "Mobile app developer with a passion for creating user-friendly applications.",
      social: {
        github: "#",
        linkedin: "#"
      },
      isHead: false
    },
    {
      id: 6,
      name: "Lisa Park",
      role: "Designer",
      department: "Digital Media",
      image: "/api/placeholder/200/200",
      bio: "UI/UX designer crafting beautiful and intuitive digital experiences.",
      social: {
        linkedin: "#",
        email: "lisa@electroverse.org"
      },
      isHead: false
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Developer",
      department: "Software Engineering",
      image: "/api/placeholder/200/200",
      bio: "Backend specialist focusing on scalable systems and database optimization.",
      social: {
        github: "#",
        linkedin: "#"
      },
      isHead: false
    },
    {
      id: 8,
      name: "Maya Patel",
      role: "Marketing Lead",
      department: "Business Technology",
      image: "/api/placeholder/200/200",
      bio: "Spreading the word about our innovative projects and community initiatives.",
      social: {
        linkedin: "#",
        email: "maya@electroverse.org"
      },
      isHead: false
    }
  ];

  const teamHeads = teamMembers.filter(member => member.isHead);
  const teamDevelopers = teamMembers.filter(member => !member.isHead);

  const TeamCard = ({ member }: { member: TeamMember }) => (
    <div className="bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-lg p-6 hover:scale-105 transition-all duration-300 glow-vibranium group">
      <div className="relative mb-4">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-vibranium to-royal overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8B5CF6&color=000000&size=200`;
            }}
          />
        </div>
        {member.isHead && (
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-vibranium rounded-full flex items-center justify-center glow-vibranium">
            <span className="text-background text-xs font-bold">★</span>
          </div>
        )}
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <div className="text-vibranium font-semibold text-sm mb-1">{member.role}</div>
        <div className="text-royal text-xs mb-3">{member.department}</div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {member.social.github && (
            <a
              href={member.social.github}
              className="text-muted-foreground hover:text-vibranium transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="text-muted-foreground hover:text-royal transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="text-muted-foreground hover:text-silver transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-vibranium/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-royal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-royal">
            <span className="text-sm font-semibold uppercase tracking-wider">Meet the Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
            <span className="text-vibranium">OUR</span> <span className="text-royal">ELECTROVERSE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the brilliant minds behind Electroverse - passionate individuals driving technological innovation
          </p>
        </div>

        {/* Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-tech font-bold text-center mb-8">
            <span className="text-vibranium">MENTORS</span> <span className="text-royal">& ADVISORS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team Heads */}
        <div className="mb-16">
          <h3 className="text-2xl font-tech font-bold text-center mb-8">
            <span className="text-vibranium">LEADERSHIP</span> <span className="text-royal">TEAM</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHeads.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-tech font-bold text-center mb-8">
            <span className="text-vibranium">CORE</span> <span className="text-royal">MEMBERS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamDevelopers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-vibranium/20 rounded-lg p-8">
            <h3 className="text-2xl font-tech font-bold mb-4">
              <span className="text-vibranium">JOIN</span> <span className="text-royal">OUR TEAM</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Are you passionate about technology and innovation? We're always looking for talented individuals 
              to join our growing community of tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:recruitment@electroverse.org"
                className="inline-flex items-center justify-center px-6 py-3 bg-vibranium text-background font-semibold rounded-md glow-vibranium hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-royal text-royal bg-transparent rounded-md hover:bg-royal hover:text-background glow-royal transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

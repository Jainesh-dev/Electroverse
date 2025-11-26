import { Users, Target, Zap, Code } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build Connections",
      description: "Collaborate with like-minded peers, industry professionals, and mentors to grow your network and explore new opportunities.",
      color: "electric"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Pushing boundaries in technology and creating solutions for tomorrow.",
      color: "cyber"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Create Impact",
      description: "Work on real-world projects, participate in coding events, and contribute to a thriving tech community that drives innovation.",
      color: "neon"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Enhance Skills",
      description: "Gain hands-on experience, sharpen your technical expertise, and stay ahead in the ever-evolving world of technology.",
      color: "electric"
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-4 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-cyber/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-4 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-electric/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 text-cyber">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-tech font-bold mb-4 sm:mb-6">
            <span className="text-electric">POWERING</span> <span className="text-cyber">THE FUTURE</span>
          </h2>
          <div className="max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground">
            <p>
              Welcome to <span className="text-electric font-semibold">Electroverse</span> - where innovation meets passion and technology comes alive. 
              We are a dynamic committee of tech enthusiasts, creators, and visionaries dedicated to fostering the next generation of technological excellence.
            </p>
            <p>
              Founded on the principles of collaboration, learning, and innovation, our committee serves as a catalyst for technological advancement 
              within our community. We believe that the future belongs to those who dare to innovate, experiment, and push the boundaries of what's possible.
            </p>
            <p>
              From organizing cutting-edge workshops and hackathons to hosting industry experts and facilitating peer-to-peer learning, 
              we create an ecosystem where technology enthusiasts can thrive, learn, and build solutions that matter.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`bg-card/50 backdrop-blur-sm border border-${feature.color}/20 rounded-lg p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 glow-${feature.color === "electric" ? "electric" : feature.color === "cyber" ? "cyan" : "purple"}`}
            >
              <div className={`text-${feature.color} mb-3 flex justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card/30 backdrop-blur-sm border border-electric/20 rounded-lg p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-tech font-bold mb-4 sm:mb-6">
            <span className="text-electric">OUR</span> <span className="text-cyber">MISSION</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            To create an electrifying environment where technology enthusiasts can explore, learn, and innovate together. 
            We strive to bridge the gap between theoretical knowledge and practical application, empowering our community 
            to build solutions that shape the future of technology.
          </p>
          <div className="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base text-electric font-semibold">
            "Innovation is our voltage, collaboration is our current, and the future is our destination."
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

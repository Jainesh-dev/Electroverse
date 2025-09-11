import { Users, Target, Zap, Code } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Built by techies, for techies. We foster collaboration and knowledge sharing.",
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
      title: "High Energy",
      description: "Electrifying events, workshops, and competitions that energize minds.",
      color: "neon"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech Excellence",
      description: "From coding bootcamps to hardware hacks, we cover all tech domains.",
      color: "electric"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-cyber/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-electric/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-cyber">
            <Zap className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
            <span className="text-electric">POWERING</span> <span className="text-cyber">THE FUTURE</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card/50 backdrop-blur-sm border border-${feature.color}/20 rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 glow-${feature.color === "electric" ? "electric" : feature.color === "cyber" ? "cyan" : "purple"}`}
            >
              <div className={`text-${feature.color} mb-4 flex justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card/30 backdrop-blur-sm border border-electric/20 rounded-lg p-8 lg:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-tech font-bold mb-6">
            <span className="text-electric">OUR</span> <span className="text-cyber">MISSION</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To create an electrifying environment where technology enthusiasts can explore, learn, and innovate together. 
            We strive to bridge the gap between theoretical knowledge and practical application, empowering our community 
            to build solutions that shape the future of technology.
          </p>
          <div className="mt-8 text-sm text-electric font-semibold">
            "Innovation is our voltage, collaboration is our current, and the future is our destination."
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
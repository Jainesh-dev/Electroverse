import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      content: "info@electroverse.org",
      link: "mailto:info@electroverse.org"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      content: "Tech Hub Central, Innovation District",
      link: "#"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-vibranium/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-royal/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-vibranium">
            <Send className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tech font-bold mb-6">
            <span className="text-vibranium">CONTACT</span> <span className="text-royal">US</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions, ideas, or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="bg-card/50 backdrop-blur-sm border border-vibranium/20 rounded-lg p-8 text-center glow-vibranium hover:scale-105 transition-all duration-300">
                <div className="text-vibranium mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-vibranium transition-colors"
                >
                  {info.content}
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-royal/20 rounded-lg p-8 glow-royal">
              <h3 className="text-2xl font-tech font-bold mb-4">
                <span className="text-vibranium">CONNECT</span> <span className="text-royal">WITH US</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're interested in joining our events, collaborating on projects, 
                or simply want to learn more about Electroverse, we're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@electroverse.org"
                  className="inline-flex items-center justify-center px-6 py-3 bg-vibranium text-background font-semibold rounded-md glow-vibranium hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
                <a 
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-royal text-royal bg-transparent rounded-md hover:bg-royal hover:text-background glow-royal transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

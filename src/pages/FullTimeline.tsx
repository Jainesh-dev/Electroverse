import React, { useState, useEffect } from "react";
import { ArrowRightCircle, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

type TimelineStatus = "past" | "upcoming";

interface TimelineEventItem {
  title: string;
  description: string;
  status: TimelineStatus;
  image?: string; // ✅ optional image for each event
}

interface TimelineYearBlock {
  year: number;
  events: TimelineEventItem[];
}

const timelineData: TimelineYearBlock[] = [
  {
    year: 2025,
    events: [
      {
        title: "Electroverse Summit 2025",
        description: "A tech summit featuring expo, talks and hiring drives.",
        status: "upcoming",
        image: "/events/summit-2025.jpg", // ✅ put your actual image paths
      },
      {
        title: "Techathon 2025",
        description: "48-hour hackathon with 300+ participants.",
        status: "upcoming",
        image: "/events/techathon-2025.jpg",
      },
    ],
  },
  {
    year: 2024,
    events: [
      {
        title: "Circuitry Maze Workshop",
        description: "Hands-on PCB design workshop.",
        status: "past",
        image: "/events/circuitry-maze-2024.jpg",
      },
      {
        title: "Techathon 2024",
        description: "AI, IoT and Web3 hackathon with ₹50,000 prize pool.",
        status: "past",
        image: "/events/techathon-2024.jpg",
      },
    ],
  },
  {
    year: 2023,
    events: [
      {
        title: "Circuitry Maze 2023",
        description: "Large-scale electronics building event.",
        status: "past",
        image: "/events/circuitry-maze-2023.jpg",
      },
      {
        title: "CodeSprint 2023",
        description: "Competitive coding sprint with 120+ coders.",
        status: "past",
        image: "/events/codesprint-2023.jpg",
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        title: "Electroverse Launch Event",
        description: "The first-ever inauguration of the Electroverse club.",
        status: "past",
        image: "/events/launch-2022.jpg",
      },
      {
        title: "Mini Hackathon 2022",
        description: "Theme-based hackathon for freshers.",
        status: "past",
        image: "/events/mini-hack-2022.jpg",
      },
    ],
  },
];

const FullTimeline = () => {
  const [filter, setFilter] = useState<"all" | "past" | "upcoming">("all");
  const navigate = useNavigate();

  // ensure page opens at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* glowing background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-electric/10 blur-3xl rounded-full" />
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-neon/10 blur-3xl rounded-full"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Title */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-tech font-bold">
            <span className="text-electric">Electroverse</span>{" "}
            <span className="text-neon">Timeline</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A journey through our major workshops, hackathons, and innovations — from{" "}
            <strong>2022</strong> to <strong>2025</strong>.
          </p>
        </div>

        {/* FILTER TABS: ALL / PAST / UPCOMING */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { label: "All", value: "all" as const },
            { label: "Past", value: "past" as const },
            { label: "Upcoming", value: "upcoming" as const },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${
                filter === tab.value
                  ? "bg-electric/20 text-electric border-electric shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                  : "bg-card/40 text-muted-foreground border-white/10 hover:border-electric/40 hover:text-electric"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center laser line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[3px] -translate-x-1/2 bg-gradient-to-b from-electric via-neon to-electric opacity-80 shadow-[0_0_25px_rgba(56,189,248,0.9)]" />
          {/* Inner animated beam */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-electric/60 animate-pulse" />

          <div className="space-y-12 md:space-y-16">
            {timelineData.map((block, index) => {
              const filteredEvents =
                filter === "all"
                  ? block.events
                  : block.events.filter((ev) => ev.status === filter);

              if (filteredEvents.length === 0) return null;

              const isLeft = index % 2 === 0;

              return (
                <div
                  key={block.year}
                  className="relative md:flex md:items-stretch md:min-h-[140px]"
                >
                  {/* Mobile (single column) */}
                  <div className="md:hidden w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-electric/40" />
                        <div className="relative w-5 h-5 rounded-full bg-electric border-2 border-white shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
                      </div>
                      <span className="text-electric font-bold text-2xl">
                        {block.year}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {filteredEvents.map((event, idx) => (
                        <div
                          key={idx}
                          className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-electric/40 transition-all"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-electric" />
                            <h4 className="text-lg font-semibold">
                              {event.title}
                            </h4>
                          </div>

                          {/* ✅ Event image (mobile) */}
                          {event.image && (
                            <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-white/10">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-40 object-cover"
                              />
                            </div>
                          )}

                          <p className="text-sm text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop left side */}
                  <div className="hidden md:flex w-1/2 items-center">
                    {isLeft && (
                      <div className="w-full pr-10 text-right relative">
                        <div className="absolute top-1/2 right-0 h-px w-10 bg-electric/60 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                        <div className="mb-3">
                          <span className="text-electric font-bold text-3xl">
                            {block.year}
                          </span>
                        </div>
                        <div className="space-y-4">
                          {filteredEvents.map((event, idx) => (
                            <div
                              key={idx}
                              className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-electric/40 transition-all"
                            >
                              <div className="flex items-center justify-end gap-2 mb-1">
                                <h4 className="text-lg font-semibold">
                                  {event.title}
                                </h4>
                                <Calendar className="w-4 h-4 text-electric" />
                              </div>

                              {/* ✅ Event image (desktop left) */}
                              {event.image && (
                                <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-white/10">
                                  <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover"
                                  />
                                </div>
                              )}

                              <p className="text-sm text-muted-foreground text-right">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-0 flex-col items-center mx-4">
                    <div className="w-6 h-6 rounded-full bg-electric border-2 border-white shadow-[0_0_14px_rgba(56,189,248,0.9)]" />
                  </div>

                  {/* Desktop right side */}
                  <div className="hidden md:flex w-1/2 items-center">
                    {!isLeft && (
                      <div className="w-full pl-10 relative">
                        <div className="absolute top-1/2 left-0 h-px w-10 bg-electric/60 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                        <div className="mb-3">
                          <span className="text-electric font-bold text-3xl">
                            {block.year}
                          </span>
                        </div>
                        <div className="space-y-4">
                          {filteredEvents.map((event, idx) => (
                            <div
                              key={idx}
                              className="bg-card/50 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-electric/40 transition-all"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="w-4 h-4 text-electric" />
                                <h4 className="text-lg font-semibold">
                                  {event.title}
                                </h4>
                              </div>

                              {/* ✅ Event image (desktop right) */}
                              {event.image && (
                                <div className="mt-2 mb-3 rounded-lg overflow-hidden border border-white/10">
                                  <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover"
                                  />
                                </div>
                              )}

                              <p className="text-sm text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back Button → back to events section on home */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/", { state: { scrollTo: "events" } })}
            className="inline-flex items-center gap-2 text-electric hover:text-neon transition-all text-lg font-semibold"
          >
            Back to Events
            <ArrowRightCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FullTimeline;

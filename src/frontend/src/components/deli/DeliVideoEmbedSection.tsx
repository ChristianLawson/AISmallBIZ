import { Badge } from "@/components/ui/badge";
import { Play, Video } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Taffer's Bar Rescue: Restaurant & Deli Transformation",
    desc: "Watch Jon Taffer diagnose a failing food service operation in real time: the same analysis framework applies directly to your deli.",
    topic: "Bar Rescue Framework",
    duration: "~45 min",
  },
  {
    id: 2,
    title: "How to Optimize Your Google Business Profile for a Deli",
    desc: "Step-by-step walkthrough: complete every section, add high-converting photos, respond to reviews, and post weekly updates that boost your local search ranking.",
    topic: "Google Optimization",
    duration: "~18 min",
  },
  {
    id: 3,
    title: "NYC Department of Health Inspection Walkthrough",
    desc: "Learn exactly what DOHMH inspectors look for, what triggers an A vs. B grade, and how to prepare your kitchen to pass on the first inspection.",
    topic: "Health & Compliance",
    duration: "~22 min",
  },
  {
    id: 4,
    title: "How to Train Deli Staff: The Accountability Model",
    desc: "Taffer's shadow day, test day, solo day protocol applied to deli counter training. Includes pre-shift briefing structure and accountability checklist.",
    topic: "Staff Training",
    duration: "~30 min",
  },
  {
    id: 5,
    title: "Viral Food Plating for Delis: Instagram-Ready Shots",
    desc: "Simple plating and lighting techniques that turn your sandwiches into social media content. No professional equipment needed: just a phone and intentional presentation.",
    topic: "Social Media & Visuals",
    duration: "~15 min",
  },
];

const TOPIC_COLORS: Record<string, string> = {
  "Bar Rescue Framework": "bg-red-50 text-red-700 border-red-200",
  "Google Optimization": "bg-blue-50 text-blue-700 border-blue-200",
  "Health & Compliance": "bg-amber-50 text-amber-700 border-amber-200",
  "Staff Training": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Social Media & Visuals": "bg-purple-50 text-purple-700 border-purple-200",
};

export function DeliVideoEmbedSection() {
  return (
    <section id="video-library" data-ocid="deli-guide.video_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <Video size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Video Library
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Watch This: Video Resources for Deli Owners
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Five essential video topics every serious deli owner should watch. Embed
        your own training videos in these slots to create a custom resource
        library for your team.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {VIDEOS.map((v) => (
          <div
            key={v.id}
            className="rounded-2xl border border-border bg-card overflow-hidden group"
            data-ocid={`deli-guide.video.${v.id}`}
          >
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-700 h-40 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#6366F1] flex items-center justify-center group-hover:scale-110 transition-transform duration-200 cursor-pointer shadow-lg">
                <Play size={22} className="text-white ml-1" />
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                {v.duration}
              </div>
              <div className="absolute top-3 left-3">
                <Badge
                  className={`text-[11px] px-2 py-0.5 border ${TOPIC_COLORS[v.topic]}`}
                >
                  {v.topic}
                </Badge>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-bold text-sm text-foreground mb-2 leading-snug">
                {v.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-[#6366F1]/40 bg-[#EEF2FF]/50 p-5 text-center">
        <Video size={20} className="text-[#6366F1] mx-auto mb-2" />
        <p className="text-sm font-semibold text-foreground mb-1">
          Embed Your Own Training Videos Here
        </p>
        <p className="text-xs text-muted-foreground">
          Contact AISmallBiz™ to add your custom staff training content,
          franchise onboarding videos, or supplier demos to these slots.
        </p>
      </div>
    </section>
  );
}

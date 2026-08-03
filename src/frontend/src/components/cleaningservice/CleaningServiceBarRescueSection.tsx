import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Megaphone } from "lucide-react";

const TAFFER_PRINCIPLES = [
  {
    quote: '"Rescue the experience before you rescue the revenue."',
    detail:
      "For cleaning services: if the client experience is broken: missed spots, inconsistent results, poor communication: no amount of marketing will fix churn. The cleaning result IS the product. Taffer's first principle: fix what clients already experience before acquiring new ones.",
  },
  {
    quote: '"The mystery client reveals the truth about your operation."',
    detail:
      "Conduct a stress test: have a trusted contact book your service as a mystery client and provide unfiltered feedback. The gap between your self-assessment and the client experience is your first fix target. Most owners are surprised: in a bad way.",
  },
  {
    quote: '"Systems create consistency. Consistency creates trust."',
    detail:
      "Your cleaning checklist is your brand standard. Every team member must execute the same 47-point process on every job: no exceptions. Clients do not pay for a 'great clean' once. They pay for a reliably great clean every time. That requires a system, not a skill.",
  },
  {
    quote: '"Staff training is not a cost. It is your product."',
    detail:
      "Taffer invests heavily in staff training before reopening: because the staff deliver the product. For cleaning services: a 2-hour onboarding session on your checklist, product protocols, client communication standards, and how to handle complaints professionally is worth more than any equipment upgrade.",
  },
];

const AUDIT_CATEGORIES = [
  {
    category: "Quality & Results",
    color: "oklch(0.50 0.22 290)",
    bg: "oklch(0.55 0.18 290 / 0.08)",
    items: [
      "47-point cleaning checklist completed and signed off on every job",
      "Before/after photos taken at every job for quality control and marketing",
      "Supervisor spot-checks 20% of jobs weekly without advance notice",
    ],
  },
  {
    category: "Speed & Efficiency",
    color: "oklch(0.45 0.14 150)",
    bg: "oklch(0.45 0.14 150 / 0.08)",
    items: [
      "Job time estimates are accurate within 15%: overbooking is a quality killer",
      "Equipment prepared and loaded the night before every job",
      "Supply restocking happens on a schedule, not when you run out",
    ],
  },
  {
    category: "Staff & Professionalism",
    color: "oklch(0.55 0.14 85)",
    bg: "oklch(0.78 0.12 85 / 0.08)",
    items: [
      "All staff in branded uniform on every job: no exceptions",
      "Background check on file for every team member: share on request",
      "Complaint protocol: every complaint acknowledged within 2 hours, resolved within 24",
    ],
  },
  {
    category: "Client Communication",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    items: [
      "Appointment confirmation sent 24 hours before every job",
      "'We are on our way' text sent 30 minutes before arrival",
      "Post-job text with completion photo and review request sent within 1 hour",
    ],
  },
];

export function CleaningServiceBarRescueSection() {
  return (
    <section
      id="bar-rescue"
      data-ocid="cleaning-service-guide.bar_rescue_section"
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.78 0.12 85 / 0.15)" }}
        >
          <Megaphone size={20} style={{ color: "oklch(0.55 0.14 85)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.78 0.12 85 / 0.15)",
            color: "oklch(0.45 0.1 85)",
            border: "1px solid oklch(0.78 0.12 85 / 0.35)",
          }}
        >
          Section 3
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Bar Rescue Principles for Your Cleaning Business
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&rsquo;s no-excuses operational framework, adapted for
        cleaning services where consistency and trust are the entire product.
      </p>

      {/* Hero Taffer quote */}
      <div
        className="rounded-2xl p-7 mb-8"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.12 330 / 0.92) 0%, oklch(0.22 0.1 30 / 0.9) 100%)",
        }}
      >
        <AlertTriangle
          size={28}
          className="mb-3"
          style={{ color: "oklch(0.82 0.14 85)" }}
        />
        <blockquote
          className="font-display text-xl md:text-2xl font-bold italic leading-snug mb-3"
          style={{ color: "oklch(0.97 0.006 75)" }}
        >
          &ldquo;I don&rsquo;t save bars. I save businesses. The bar is the
          vehicle: the systems, the standards, and the people are what I
          actually fix.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          : Jon Taffer, Bar Rescue. For cleaning services: the mop is the
          vehicle. The checklist, the team training, and the client
          communication protocol are what determine whether you scale or stall.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.quote}>
            <CardContent className="p-5">
              <blockquote
                className="font-display text-base font-semibold italic mb-2"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {p.quote}
              </blockquote>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 4-Category Audit */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Cleaning Service Rescue Audit: 4-Category Checklist
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {AUDIT_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="rounded-xl p-5"
            style={{ background: cat.bg, border: `1px solid ${cat.color}30` }}
          >
            <h4
              className="font-semibold text-sm mb-3"
              style={{ color: cat.color }}
            >
              {cat.category}
            </h4>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    size={13}
                    className="shrink-0 mt-0.5"
                    style={{ color: cat.color }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

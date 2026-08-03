import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckSquare, Megaphone } from "lucide-react";
import { useState } from "react";

const TAFFER_PRINCIPLES = [
  {
    title: "Walk Your Store Like a First-Time Customer",
    body: "Walk in through your front door right now, as if you have never been there. What do you see in the first 10 seconds? Is your window display compelling or cluttered? Is there a greeting? Does the layout guide you toward a purchase or confuse you? Is the lighting flattering or harsh? Taffer's rule: if you would not browse your own store for 20 minutes, your customers will not either.",
  },
  {
    title: "Your Staff Are Brand Ambassadors, Not Order Takers",
    body: "The difference between a staff member who says 'let me know if you need anything' and one who says 'I noticed you looking at that: it pairs perfectly with what we just got in' is the difference between a browsing customer and a buying one. Train your team to engage, educate, and personalize: not just process transactions. Taffer's rule: your worst customer service moment is your brand's reality, not your best one.",
  },
  {
    title: "The 10-Second Rule Is Your Operations Test",
    body: "Every product in your store must earn its floor space in 10 seconds. If a customer can walk past it without being drawn to it, it is a display problem, a placement problem, or a product problem. Test your store: bring in someone who has never visited and watch where they go, what they pick up, and what they walk past. Their behavior is your audit.",
  },
  {
    title: "Never Let a Customer Leave Without a Reason to Return",
    body: "Every interaction should end with a planted seed for the next visit: 'We are getting new arrivals Thursday: you would love them.' 'I will text you when the piece you liked comes back in stock.' 'Our VIP shopping hour is Saturday morning: I will add you to the list.' Taffer's rule: retention is cheaper than acquisition, and retention starts at the end of the current visit.",
  },
];

type CheckItem = {
  id: number;
  task: string;
  checked: boolean;
};

type CheckCategory = {
  name: string;
  color: string;
  bg: string;
  border: string;
  items: CheckItem[];
};

const INITIAL_CATEGORIES: CheckCategory[] = [
  {
    name: "Window & First Impression",
    color: "oklch(0.28 0.12 330)",
    bg: "oklch(0.28 0.12 330 / 0.07)",
    border: "oklch(0.28 0.12 330 / 0.2)",
    items: [
      {
        id: 1,
        task: "Window display updated this month: compelling, not cluttered",
        checked: false,
      },
      {
        id: 2,
        task: "Store entrance clear and inviting: 10-second test passed",
        checked: false,
      },
      {
        id: 3,
        task: "Lighting is flattering and highlights featured products",
        checked: false,
      },
    ],
  },
  {
    name: "Store Layout & Flow",
    color: "oklch(0.45 0.1 85)",
    bg: "oklch(0.78 0.12 85 / 0.07)",
    border: "oklch(0.78 0.12 85 / 0.2)",
    items: [
      {
        id: 4,
        task: "Store layout guides customers naturally toward featured products",
        checked: false,
      },
      {
        id: 5,
        task: "High-margin items positioned in prime sightlines",
        checked: false,
      },
      {
        id: 6,
        task: "Dead zones in the store identified and addressed",
        checked: false,
      },
      {
        id: 7,
        task: "Every display earns its floor space in 10 seconds",
        checked: false,
      },
    ],
  },
  {
    name: "Staff Performance",
    color: "oklch(0.35 0.08 15)",
    bg: "oklch(0.62 0.1 15 / 0.07)",
    border: "oklch(0.62 0.1 15 / 0.2)",
    items: [
      {
        id: 8,
        task: "Every customer greeted within 30 seconds of entering",
        checked: false,
      },
      {
        id: 9,
        task: "Staff trained to engage and suggest, not just process transactions",
        checked: false,
      },
      {
        id: 10,
        task: "Every staff member can articulate the brand in one sentence",
        checked: false,
      },
    ],
  },
  {
    name: "Product & Display",
    color: "oklch(0.28 0.12 180)",
    bg: "oklch(0.28 0.12 180 / 0.07)",
    border: "oklch(0.28 0.12 180 / 0.2)",
    items: [
      {
        id: 11,
        task: "New arrivals photographed and posted within 24 hours of landing",
        checked: false,
      },
      {
        id: 12,
        task: "Slow-moving inventory identified and actioned this week",
        checked: false,
      },
      {
        id: 13,
        task: "Top 20% SKUs by revenue featured prominently",
        checked: false,
      },
    ],
  },
  {
    name: "Digital & Omnichannel",
    color: "oklch(0.38 0.1 330)",
    bg: "oklch(0.28 0.12 330 / 0.05)",
    border: "oklch(0.28 0.12 330 / 0.15)",
    items: [
      {
        id: 14,
        task: "Google Business Profile updated this week with photo + post",
        checked: false,
      },
      {
        id: 15,
        task: "E-commerce site live with accurate inventory and pricing",
        checked: false,
      },
      {
        id: 16,
        task: "Instagram/TikTok posted minimum 4x this week",
        checked: false,
      },
    ],
  },
  {
    name: "Customer Retention",
    color: "oklch(0.35 0.12 150)",
    bg: "oklch(0.55 0.14 150 / 0.07)",
    border: "oklch(0.55 0.14 150 / 0.2)",
    items: [
      {
        id: 17,
        task: "Every interaction ends with a planted seed for the next visit",
        checked: false,
      },
      {
        id: 18,
        task: "Loyalty program promoted to every customer at checkout",
        checked: false,
      },
      {
        id: 19,
        task: "Top 20% spenders receiving VIP treatment and early access",
        checked: false,
      },
    ],
  },
];

export function RetailTafferSection() {
  const [categories, setCategories] =
    useState<CheckCategory[]>(INITIAL_CATEGORIES);

  const toggle = (catIdx: number, itemId: number) => {
    setCategories((prev) =>
      prev.map((cat, ci) =>
        ci === catIdx
          ? {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, checked: !item.checked } : item,
              ),
            }
          : cat,
      ),
    );
  };

  return (
    <section id="taffer" data-ocid="retail-guide.taffer_section">
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
          Section 2
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Bar Rescue Principles Applied to Your Store
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Jon Taffer&apos;s principles of accountability, systems, and customer
        experience: applied directly to retail operations.
      </p>

      {/* Hero banner */}
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
          &ldquo;Jon Taffer&apos;s principles of accountability, systems, and
          customer experience apply directly to retail. The same questions he
          asks in a failing bar need to be asked in your store: today, before
          another customer leaves without buying.&rdquo;
        </blockquote>
        <p className="text-sm" style={{ color: "oklch(0.80 0.008 75)" }}>
          Applied to retail: if your store is struggling, the problem is
          decisions: and decisions can change.
        </p>
      </div>

      {/* Principles grid */}
      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {TAFFER_PRINCIPLES.map((p) => (
          <Card key={p.title}>
            <CardContent className="p-5">
              <h3
                className="font-display text-base font-bold mb-2"
                style={{ color: "oklch(0.28 0.12 330)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rescue Checklist */}
      <h3 className="font-display text-xl font-bold text-foreground mb-4">
        Store Rescue Checklist: Taffer&apos;s 6-Category Audit
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, ci) => (
          <div
            key={cat.name}
            className="rounded-xl overflow-hidden"
            style={{ border: `1px solid ${cat.border}` }}
            data-ocid={`retail-guide.taffer_checklist.${ci + 1}`}
          >
            <div className="px-4 py-3" style={{ background: cat.bg }}>
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold text-sm"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: cat.color }}
                >
                  {cat.items.filter((i) => i.checked).length}/{cat.items.length}
                </span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              {cat.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggle(ci, item.id)}
                  className="flex items-start gap-2.5 text-left w-full group"
                  data-ocid={`retail-guide.taffer_check.${item.id}`}
                >
                  <CheckSquare
                    size={14}
                    className="mt-0.5 shrink-0 transition-colors duration-200"
                    style={{
                      color: item.checked ? cat.color : "oklch(0.75 0.01 50)",
                    }}
                  />
                  <p
                    className="text-xs leading-relaxed transition-colors duration-200"
                    style={{
                      color: item.checked
                        ? "oklch(0.35 0.02 50)"
                        : "oklch(0.5 0.01 50)",
                      textDecoration: item.checked ? "line-through" : "none",
                    }}
                  >
                    {item.task}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

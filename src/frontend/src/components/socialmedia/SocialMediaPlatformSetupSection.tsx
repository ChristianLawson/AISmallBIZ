import {
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Settings,
  Twitter,
} from "lucide-react";

const FB_STEPS = [
  {
    step: 1,
    title: "Create a Business Page (Not Personal)",
    items: [
      "Go to Facebook.com",
      "Click 'Create' > 'Page'",
      "Choose 'Business or Brand'",
      "Enter your business name and category",
    ],
  },
  {
    step: 2,
    title: "Profile Picture",
    items: [
      "Use your logo OR a clear photo of your storefront",
      "Must be recognizable at small sizes",
      "Keep consistent across all platforms",
    ],
  },
  {
    step: 3,
    title: "Cover Photo",
    items: [
      "High-quality image of your business",
      "Show storefront, products, or team in action",
      "Recommended: 1200 x 628 pixels",
    ],
  },
  {
    step: 4,
    title: "Complete the About Section (ALL Fields)",
    items: [
      "Description: What you do, specifically",
      "Business hours, address, phone, website",
      "Category (Restaurant, Boutique, Salon, etc.)",
    ],
  },
  {
    step: 5,
    title: "Add a CTA Button",
    items: [
      "Click 'Add Button' under your cover photo",
      "Choose: Book Now, Buy Now, Contact Us, Learn More",
      "Link it to your booking page, website, or phone",
    ],
  },
  {
    step: 6,
    title: "Set Up Greetings & Quick Replies",
    items: [
      "Set a greeting: 'Thanks for messaging! We respond within 24 hours.'",
      "Add auto-replies for common questions (hours, reservations, pricing)",
    ],
  },
  {
    step: 7,
    title: "Plan Your Content Calendar",
    items: [
      "Use Google Sheets or Caffeine.ai to plan 4 weeks ahead",
      "Assign days and times before you start posting",
      "Follow the 80/20 Amex Rule from Section 4",
    ],
  },
];

const IG_STEPS = [
  {
    step: 1,
    title: "Download the App & Create Account",
    desc: "Use your business name as username. Keep it simple: @YourBusinessName not @YourBusinessName42TheGreat",
  },
  {
    step: 2,
    title: "Convert to Business Account",
    desc: "Go to Settings > Account Type and Tools > Switch to Professional Account > Choose Business (not Creator)",
  },
  {
    step: 3,
    title: "Complete Your Profile",
    desc: "150-character bio that acts as your elevator pitch. Add website link (the ONLY clickable link on Instagram). Create Highlights for Hours, Menu, Services, FAQ.",
  },
  {
    step: 4,
    title: "Plan Visual-First Content",
    desc: "Minimum 3 posts/week. Use Stories daily for behind-the-scenes (less pressure, disappears in 24 hrs). Stories get more engagement than feed posts.",
  },
];

export function SocialMediaPlatformSetupSection() {
  return (
    <section
      id="platform-setup"
      className="py-16 md:py-20 bg-muted/30"
      data-ocid="social-media.platform_setup_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#E0E7FF] dark:bg-[#1e1b4b]/50 flex items-center justify-center">
            <Settings size={20} className="text-[#6366F1]" />
          </div>
          <span className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider">
            Section 6
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Setting Up Your Platforms the Right Way
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
          An incomplete profile is ignored by algorithms AND customers. Every
          field matters. Take 2 hours to do this right once and it works for
          years.
        </p>

        {/* Facebook Setup */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Facebook size={20} className="text-blue-600" />
            Facebook: 7-Step Business Page Setup
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FB_STEPS.map((s, i) => (
              <div
                key={s.step}
                data-ocid={`social-media.fb_setup.item.${i + 1}`}
                className="rounded-xl border border-border bg-card p-5 hover:border-[#6366F1]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-blue-300">
                    Step {s.step}
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground mb-3">
                  {s.title}
                </p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2
                        size={12}
                        className="mt-0.5 text-[#6366F1] shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Setup */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Instagram size={20} className="text-pink-600" />
            Instagram: Converting to a Business Account
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IG_STEPS.map((s, i) => (
              <div
                key={s.step}
                data-ocid={`social-media.ig_setup.item.${i + 1}`}
                className="rounded-xl border border-border bg-card p-5 hover:border-pink-300/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-pink-100 dark:bg-pink-950/40 flex items-center justify-center text-xs font-bold text-pink-700 dark:text-pink-300">
                    Step {s.step}
                  </span>
                  <p className="text-sm font-bold text-foreground">{s.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Twitter & LinkedIn Brief */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/20 p-5">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Twitter size={16} className="text-sky-600" />
              Twitter / X: When to Use It
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                Use Twitter if:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-emerald-500">+</span>Your customers are
                  18-35
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">+</span>You want real-time
                  conversations
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">+</span>You can post 3+
                  times per day
                </li>
              </ul>
              <p className="text-red-600 dark:text-red-400 font-medium mt-3">
                Skip Twitter if:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-red-400">-</span>Your customer base is
                  mostly 50+
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">-</span>You are a local,
                  community-based business
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">-</span>You do not have time
                  for frequent posting
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20 p-5">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Linkedin size={16} className="text-blue-700" />
              LinkedIn: Only for B2B
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-emerald-700 dark:text-emerald-400 font-medium">
                Use LinkedIn if:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-emerald-500">+</span>You sell to other
                  businesses
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">+</span>You want to
                  establish professional credibility
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">+</span>You are a
                  consultant, agency, or professional service
                </li>
              </ul>
              <p className="text-red-600 dark:text-red-400 font-medium mt-3">
                Skip LinkedIn if:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-red-400">-</span>You are a local
                  consumer business (salon, deli, pool hall)
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400">-</span>Your customers are
                  individual consumers, not companies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageSquare, Store } from "lucide-react";

type BusinessCard = {
  type: string;
  emoji: string;
  primaryPlatform: string;
  primaryColor: string;
  primaryBg: string;
  secondaryPlatform: string;
  secondaryColor: string;
  persona: string;
  weekPlan: { day: string; post: string; promo: boolean }[];
  bestContent: string[];
  hashtags: string[];
};

const BUSINESSES: BusinessCard[] = [
  {
    type: "NYC Deli",
    emoji: "🥪",
    primaryPlatform: "Facebook",
    primaryColor: "text-blue-600",
    primaryBg: "bg-blue-50 dark:bg-blue-950/30",
    secondaryPlatform: "Instagram",
    secondaryColor: "text-pink-500",
    persona:
      "Local regulars aged 30-65 who want fast, reliable lunch and a neighborhood feel.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: 'Best NYC delis' article from a local food blog",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Today's fresh-cut special with photo",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: 'How to spot a real NY bagel' tip piece",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Behind the counter: staff story",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Friday Special: free pickle with any sandwich",
        promo: true,
      },
      {
        day: "Sat",
        post: "Share: NYC neighborhood food guide from local source",
        promo: false,
      },
    ],
    bestContent: [
      "Daily specials photos",
      "Staff spotlights",
      "NYC neighborhood nostalgia",
      "Customer regulars",
    ],
    hashtags: ["#NYCDeli", "#LunchNYC", "#DeliLife", "#NewYorkEats"],
  },
  {
    type: "Salon",
    emoji: "💇‍♀️",
    primaryPlatform: "Instagram",
    primaryColor: "text-pink-600",
    primaryBg: "bg-pink-50 dark:bg-pink-950/30",
    secondaryPlatform: "Facebook",
    secondaryColor: "text-blue-500",
    persona:
      "Women 25-55 who want to feel beautiful, trust their stylist, and discover new trends.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Trending hair color of the season from beauty magazine",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Before/After client transformation (with permission)",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: 'How to keep color fresh longer' expert tip",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Stylist spotlight: meet our team",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Book this weekend, get a free deep conditioning treatment",
        promo: true,
      },
      {
        day: "Sat",
        post: "Share: Summer hair care routine from beauty editor",
        promo: false,
      },
    ],
    bestContent: [
      "Before/after transformations",
      "Color trends",
      "Stylist tutorials",
      "Client testimonials",
    ],
    hashtags: ["#SalonLife", "#HairGoals", "#BeautyNYC", "#HairTransformation"],
  },
  {
    type: "Restaurant",
    emoji: "🍽️",
    primaryPlatform: "Instagram",
    primaryColor: "text-pink-600",
    primaryBg: "bg-pink-50 dark:bg-pink-950/30",
    secondaryPlatform: "Facebook",
    secondaryColor: "text-blue-500",
    persona:
      "Foodies and families aged 25-50 seeking memorable dining, not just a meal.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Food trend article: seasonal ingredients spotlight",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: New dish reveal with chef's description",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Local farm/supplier post: your sourcing story",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Customer photo enjoying a meal (tagged with permission)",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Friday Night: 20% off bottle of wine with dinner",
        promo: true,
      },
      {
        day: "Sat",
        post: "Your own: Weekend special preview + chef feature",
        promo: false,
      },
    ],
    bestContent: [
      "Food photography",
      "Chef stories",
      "Local sourcing",
      "Weekend specials",
    ],
    hashtags: ["#NYCEats", "#FoodNYC", "#RestaurantLife", "#ChefLife"],
  },
  {
    type: "Pool Hall",
    emoji: "🎱",
    primaryPlatform: "Facebook",
    primaryColor: "text-blue-600",
    primaryBg: "bg-blue-50 dark:bg-blue-950/30",
    secondaryPlatform: "Instagram",
    secondaryColor: "text-pink-500",
    persona:
      "Adults 21-45: regulars seeking community, newcomers looking for a welcoming venue to socialize.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Pool trick shot video from billiards community",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Spotlight on anti-harassment policy + welcoming atmosphere",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: 'Best bar games for groups' article with your mention",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: League night recap: celebrate the winners",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Ladies' Night: free lesson + free drink for first-timers",
        promo: true,
      },
      {
        day: "Sat",
        post: "Your own: Weekend tournament preview or bracket",
        promo: false,
      },
    ],
    bestContent: [
      "Tournament highlights",
      "Trick shot videos",
      "Ladies' Night events",
      "Community atmosphere",
    ],
    hashtags: ["#PoolHall", "#Billiards", "#BilliardsNYC", "#LadiesNight"],
  },
  {
    type: "Retail Store",
    emoji: "🛍️",
    primaryPlatform: "Instagram",
    primaryColor: "text-pink-600",
    primaryBg: "bg-pink-50 dark:bg-pink-950/30",
    secondaryPlatform: "Facebook",
    secondaryColor: "text-blue-500",
    persona:
      "Shoppers 25-55 who value local over chain and want curated, thoughtful product selection.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: 'Support local retail' article or community piece",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: New arrival showcase: flat lay product photo",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Trend report from industry publication",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Behind the scenes: how we choose what we stock",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Weekend sale: 15% off selected items",
        promo: true,
      },
      {
        day: "Sat",
        post: "Share: Local lifestyle blog feature or partner shoutout",
        promo: false,
      },
    ],
    bestContent: [
      "New arrivals",
      "Flat-lay styling",
      "Local neighborhood stories",
      "Gift guides",
    ],
    hashtags: ["#ShopLocal", "#LocalRetail", "#SmallBiz", "#NYCShopping"],
  },
  {
    type: "Start New Business",
    emoji: "🚀",
    primaryPlatform: "LinkedIn",
    primaryColor: "text-blue-700",
    primaryBg: "bg-blue-50 dark:bg-blue-950/30",
    secondaryPlatform: "Facebook",
    secondaryColor: "text-blue-500",
    persona:
      "Aspiring entrepreneurs and small business peers looking for insight, validation, and connection.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Entrepreneurship article from Inc or Forbes",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Lesson learned this week building your business",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: NYC Small Business Services resource or program",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Behind-the-scenes of your launch journey",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Announce your grand opening or new service",
        promo: true,
      },
      {
        day: "Sat",
        post: "Share: Founder story that resonates with your journey",
        promo: false,
      },
    ],
    bestContent: [
      "Launch milestones",
      "Founder lessons",
      "Behind-the-scenes journey",
      "NYC resources",
    ],
    hashtags: [
      "#Entrepreneur",
      "#StartupNYC",
      "#SmallBusiness",
      "#NYCBusiness",
    ],
  },
  {
    type: "Online Services",
    emoji: "💻",
    primaryPlatform: "LinkedIn",
    primaryColor: "text-blue-700",
    primaryBg: "bg-blue-50 dark:bg-blue-950/30",
    secondaryPlatform: "Twitter / X",
    secondaryColor: "text-sky-500",
    persona:
      "Business owners and decision-makers who need reliable, expert digital or professional services.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Industry insight or thought leadership article",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Quick tip your ideal client can use today",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Client success story or case study (anonymized)",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Process breakdown: how you solve the problem",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Book a free 30-min consultation this month",
        promo: true,
      },
      {
        day: "Sat",
        post: "Share: Useful tool or resource for your target audience",
        promo: false,
      },
    ],
    bestContent: [
      "Expert tips",
      "Case studies",
      "Process breakdowns",
      "Industry commentary",
    ],
    hashtags: ["#FreelanceLife", "#DigitalServices", "#B2B", "#BusinessGrowth"],
  },
  {
    type: "Fitness Studio",
    emoji: "💪",
    primaryPlatform: "Instagram",
    primaryColor: "text-pink-600",
    primaryBg: "bg-pink-50 dark:bg-pink-950/30",
    secondaryPlatform: "Facebook",
    secondaryColor: "text-blue-500",
    persona:
      "Health-conscious adults 25-45 who want results, community accountability, and motivation.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Fitness motivation article or scientific workout tip",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Workout of the week demo with instructor",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Nutrition tip from registered dietitian or trusted source",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Member transformation story or class highlight",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: New member special: first month 50% off",
        promo: true,
      },
      {
        day: "Sat",
        post: "Your own: Class in action video, community energy feel",
        promo: false,
      },
    ],
    bestContent: [
      "Member transformations",
      "Workout demos",
      "Class community photos",
      "Challenge results",
    ],
    hashtags: [
      "#FitnessNYC",
      "#WorkoutMotivation",
      "#GymLife",
      "#FitnessStudio",
    ],
  },
  {
    type: "Bakery & Café",
    emoji: "☕",
    primaryPlatform: "Instagram",
    primaryColor: "text-pink-600",
    primaryBg: "bg-pink-50 dark:bg-pink-950/30",
    secondaryPlatform: "Facebook",
    secondaryColor: "text-blue-500",
    persona:
      "Coffee lovers and neighborhood regulars who want atmosphere, quality, and a personal connection.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Coffee roasting or baking technique from industry expert",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Today's fresh bake: still-warm photo with story",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Local food blogger's review or neighborhood feature",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Behind the scenes: your 5am baking routine",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Friday Flash: buy 2 pastries, get 1 free",
        promo: true,
      },
      {
        day: "Sat",
        post: "Your own: Weekend cozy atmosphere photo + seasonal special",
        promo: false,
      },
    ],
    bestContent: [
      "Fresh bake photos",
      "Coffee art",
      "Cozy atmosphere",
      "Seasonal specials",
    ],
    hashtags: ["#NYCCoffee", "#Bakery", "#CafeLife", "#LocalCafe"],
  },
  {
    type: "Cleaning Service",
    emoji: "🧹",
    primaryPlatform: "Facebook",
    primaryColor: "text-blue-600",
    primaryBg: "bg-blue-50 dark:bg-blue-950/30",
    secondaryPlatform: "Nextdoor",
    secondaryColor: "text-emerald-600",
    persona:
      "Busy homeowners and families aged 30-60 who need reliable, trustworthy, hassle-free cleaning.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: '5 cleaning hacks that actually work' from trusted source",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: Before/after of a deep clean (kitchen or bathroom)",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Eco-friendly cleaning article or tips piece",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: Trusted staff spotlight: background-checked, experienced",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Book by Sunday: $20 off your first clean",
        promo: true,
      },
      {
        day: "Sat",
        post: "Share: Local community group shoutout or neighborhood event",
        promo: false,
      },
    ],
    bestContent: [
      "Before/after cleans",
      "Staff trust signals",
      "Eco-friendly tips",
      "Customer testimonials",
    ],
    hashtags: [
      "#CleaningService",
      "#HouseCleaningNYC",
      "#TrustedClean",
      "#LocalService",
    ],
  },
  {
    type: "Boutique Clothing",
    emoji: "👗",
    primaryPlatform: "Instagram",
    primaryColor: "text-pink-600",
    primaryBg: "bg-pink-50 dark:bg-pink-950/30",
    secondaryPlatform: "Pinterest",
    secondaryColor: "text-red-500",
    persona:
      "Fashion-forward women 20-45 who want unique, curated pieces that express personal style.",
    weekPlan: [
      {
        day: "Mon",
        post: "Share: Fashion trend forecast from Vogue or style editor",
        promo: false,
      },
      {
        day: "Tue",
        post: "Your own: New arrival styled 3 ways: same piece, different looks",
        promo: false,
      },
      {
        day: "Wed",
        post: "Share: Sustainable fashion article or local designer feature",
        promo: false,
      },
      {
        day: "Thu",
        post: "Your own: 'What our customers are wearing this week' reposts",
        promo: false,
      },
      {
        day: "Fri",
        post: "PROMO: Weekend Flash: 20% off new arrivals, in-store only",
        promo: true,
      },
      {
        day: "Sat",
        post: "Your own: Styling event recap or fitting room inspo",
        promo: false,
      },
    ],
    bestContent: [
      "Outfit styling",
      "New arrival flatlays",
      "Customer style reposts",
      "Season lookbooks",
    ],
    hashtags: ["#BoutiqueNYC", "#OOTD", "#ShopLocal", "#FashionNYC"],
  },
];

export function SocialMediaByBusinessSection() {
  return (
    <section
      id="by-business-type"
      className="py-16 md:py-20 bg-muted/30"
      data-ocid="social-media.by_business_section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-accent-neutral-soft dark:bg-accent-neutral-soft flex items-center justify-center">
            <Store size={20} className="text-accent-neutral" />
          </div>
          <span className="text-sm font-semibold text-accent-neutral uppercase tracking-wider">
            Section 10
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
          Social Media Strategy by Business Type
        </h2>
        <p className="text-base text-muted-foreground max-w-3xl mb-6 leading-relaxed">
          One size does NOT fit all. Taffer's approach: diagnose your business
          type first, then build your strategy around it. Reid Holmes: your
          brand's social media voice should feel native to your industry: not
          generic.
        </p>

        {/* Callouts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="rounded-xl border-l-4 border-[#DC2626] bg-red-50 dark:bg-red-950/20 dark:border-red-700 p-4">
            <div className="flex items-start gap-3">
              <MessageSquare
                size={16}
                className="mt-0.5 shrink-0 text-red-600"
              />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Taffer:
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  "A coffee shop and a law firm have nothing in common on social
                  media. One sells atmosphere, the other sells authority. Treat
                  your strategy like your menu: it has to match your customer."
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-accent-neutral-border bg-accent-neutral-soft dark:bg-accent-neutral-soft dark:border-accent-neutral-border p-4">
            <div className="flex items-start gap-3">
              <MessageSquare
                size={16}
                className="mt-0.5 shrink-0 text-accent-neutral"
              />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  Reid Holmes:
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  "Appreciated Branding is industry-specific. What makes a
                  boutique customer feel <em>seen</em> is completely different
                  from what makes a deli customer feel at home. Know the
                  difference."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento grid of business cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {BUSINESSES.map((biz, i) => (
            <div
              key={biz.type}
              data-ocid={`social-media.by_business.card.item.${i + 1}`}
              className="rounded-2xl border border-border bg-card hover:border-accent-neutral-border hover:shadow-neutral transition-all duration-200 overflow-hidden"
            >
              {/* Card header */}
              <div
                className={`px-5 py-4 ${biz.primaryBg} border-b border-border`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{biz.emoji}</span>
                    <p className="text-base font-bold text-foreground">
                      {biz.type}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${biz.primaryBg} border border-current ${biz.primaryColor}`}
                    >
                      {biz.primaryPlatform}
                    </span>
                    <span
                      className={
                        "text-xs font-medium px-2 py-0.5 rounded-full bg-card text-muted-foreground border border-border"
                      }
                    >
                      +{biz.secondaryPlatform}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {biz.persona}
                </p>
              </div>

              {/* Week plan */}
              <div className="px-5 py-4">
                <p className="text-xs font-bold text-accent-neutral uppercase tracking-wide mb-2">
                  80/20 Sample Week
                </p>
                <div className="space-y-1.5">
                  {biz.weekPlan.map((day) => (
                    <div
                      key={day.day}
                      className={`flex gap-2 text-xs rounded-md px-2 py-1.5 ${
                        day.promo
                          ? "bg-accent-neutral-soft dark:bg-accent-neutral-soft border border-accent-neutral-border dark:border-accent-neutral-border"
                          : "bg-muted/40"
                      }`}
                    >
                      <span
                        className={`font-bold shrink-0 w-7 ${
                          day.promo
                            ? "text-accent-neutral"
                            : "text-muted-foreground"
                        }`}
                      >
                        {day.day}
                      </span>
                      <span
                        className={`leading-relaxed ${
                          day.promo
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {day.post}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best content + hashtags */}
              <div className="px-5 pb-4">
                <div className="border-t border-border/50 pt-3">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Best Content Types
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {biz.bestContent.map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-muted/60 px-2 py-0.5 rounded-full text-muted-foreground border border-border/50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {biz.hashtags.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-accent-neutral font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const QA_ITEMS = [
  {
    id: 1,
    q: "How much inventory should I start with for a new boutique?",
    a: "Most successful boutique owners start with $10,000 to $25,000 in opening inventory. Enough to fill the store without overcommitting cash to slow-moving pieces. The key is buying narrow and deep: 15 to 20 styles in your core aesthetic rather than 60 styles with only 1 to 2 units each. Start with 2 to 3 units per size per style. You can reorder best-sellers within 2 to 4 weeks from most wholesale suppliers. Running lean in the first 90 days and restocking winners is far better than sitting on $40,000 in mixed inventory.",
  },
  {
    id: 2,
    q: "How do I find wholesale clothing suppliers?",
    a: "The best wholesale sourcing channels in 2026 are: (1) Faire.com, the largest wholesale marketplace for independent boutiques with net-60 payment terms for new accounts; (2) FashionGo, the top U.S. wholesale platform specifically for fashion retail; (3) LA Showrooms and the New York Garment District for in-person buying where you can touch, feel, and negotiate directly; (4) Joor and NuOrder for contemporary and designer-adjacent brands; (5) Brand-direct wholesale applications for labels you love. Attend the Atlanta Apparel Market, Las Vegas Market, or Dallas Market for the best in-season buying opportunities. Always verify the minimum order quantity and return policy before committing.",
  },
  {
    id: 3,
    q: "How do I price items to make a profit?",
    a: "The boutique industry standard is a 2.0 to 2.5x keystone markup on wholesale cost. If you paid $40 wholesale, retail at $80 to $100. Aim for a 50 to 65% gross margin on your total inventory. Factor in: cost of goods (wholesale), freight and duties, returns and markdowns (budget 8 to 12% of revenue), and shrinkage. Use this formula: Retail Price equals Wholesale Cost divided by (1 minus Target Margin%). For a 55% margin: $40 divided by 0.45 equals $88.89. Never compete on price with fast fashion. Compete on curation, service, and experience. Your customers are paying for the edit, not just the garment.",
  },
  {
    id: 4,
    q: "Should I also sell online, or just focus on the physical store?",
    a: "Both. But prioritize in a specific order. In months 1 to 3: focus all energy on the physical store experience, getting operations right, building local word-of-mouth, and growing your social media organically. In months 3 to 6: launch a simple Shopify store with your top 20 best-sellers. In months 6 to 12: activate Instagram Shopping, TikTok Shop, and Pinterest Shopping so your social content converts directly. A physical boutique is your brand anchor. It creates the trust and aesthetic that makes online sales possible. Boutiques that launch online-only without a physical presence consistently struggle to differentiate from the mass market.",
  },
  {
    id: 5,
    q: "How do I compete with fast fashion brands like Zara and ASOS?",
    a: "You do not compete on price, and you should not try. Fast fashion wins on price and speed. You win on: (1) Curation, having edited 10,000 options down to 200 pieces worth buying; (2) Fit and service, helping customers find what works for their actual body; (3) Community, knowing your customers by name and they know yours; (4) Ethics, many boutique customers actively choose to shop local and independent; (5) Style authority, posting styling content that helps people dress better, not just sell product. The boutiques that survive the next decade make the shopping experience irreplaceable. An algorithm cannot give a compliment or notice when a customer has lost weight.",
  },
  {
    id: 6,
    q: "How do I get featured on local media or influencer posts?",
    a: "For local media: send a personal email to your city's lifestyle editor, fashion blogger, or Best Of column editor. Lead with a story angle, not we are a boutique, but we are the first size-inclusive boutique in this neighborhood or we hosted 14 women in an after-hours shopping event last month. Local editors get press releases constantly and ignore them. A personal email with a real story gets opened. For influencer posts: research local creators using Instagram's location search and boutique-adjacent hashtags. Reach out personally. Comment on their recent posts before DMing. Gift one item genuinely suited to their aesthetic and ask only for honest content if they love it. The most powerful local influencer is the woman in your community with 3,500 followers who every other woman in your neighborhood trusts.",
  },
];

export function BoutiqueQASection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="qa" data-ocid="boutique-guide.qa_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.55 0.18 290 / 0.12)" }}
        >
          <HelpCircle size={20} style={{ color: "oklch(0.50 0.22 290)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.55 0.18 290 / 0.1)",
            color: "oklch(0.40 0.18 290)",
            border: "1px solid oklch(0.55 0.18 290 / 0.25)",
          }}
        >
          Section 9
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Boutique Q&amp;A
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The 6 questions boutique owners ask most &mdash; answered with the
        specificity you actually need to make decisions.
      </p>

      <div className="space-y-3">
        {QA_ITEMS.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden transition-all duration-200"
            style={{
              border:
                openId === item.id
                  ? "1.5px solid oklch(0.55 0.18 290 / 0.5)"
                  : "1px solid oklch(0.55 0.18 290 / 0.18)",
              background:
                openId === item.id
                  ? "oklch(0.55 0.18 290 / 0.05)"
                  : "transparent",
            }}
            data-ocid={`boutique-guide.qa.item.${item.id}`}
          >
            <button
              type="button"
              className="w-full flex items-center gap-3 p-4 text-left"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              aria-expanded={openId === item.id}
            >
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-display"
                style={{
                  background: "oklch(0.55 0.23 285)",
                  color: "#fff",
                }}
              >
                {item.id}
              </span>
              <span className="flex-1 font-display font-semibold text-base text-foreground">
                {item.q}
              </span>
              <ChevronDown
                size={16}
                className="shrink-0 transition-transform duration-200"
                style={{
                  color: "oklch(0.55 0.23 285)",
                  transform:
                    openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {openId === item.id && (
              <div className="px-4 pb-5">
                <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

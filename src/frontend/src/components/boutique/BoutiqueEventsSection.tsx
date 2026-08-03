import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const EVENTS = [
  {
    emoji: "\u{1F3A8}",
    title: "Trunk Show with Local Designers",
    frequency: "Quarterly",
    description:
      "Invite 2 to 3 local independent designers to show their collections in your boutique for a single evening. They bring their customer list, you provide the space and atmosphere. Each designer gets a dedicated rack and styling area. Cross-promotion means new customers for both parties and the event creates extraordinary social content.",
    tips: [
      "Announce 3 weeks ahead across all channels",
      "Charge $15 to $20 entry applied to purchase to pre-qualify attendees",
      "Set up a professional photo station. Every guest wants a photo with the designer",
    ],
  },
  {
    emoji: "\u{1F457}",
    title: "Seasonal Styling Workshop Nights",
    frequency: "Monthly",
    description:
      "Host a 90-minute workshop on a seasonal styling challenge: How to transition summer pieces into fall, Building a capsule work wardrobe for under $500, or What to wear to a wedding as a curvier guest. Charge $25 to $35 applied to purchase. Positions your boutique as a style authority, not just a store.",
    tips: [
      "Invite a local personal stylist to co-host. They promote it to their list",
      "Record 90-second highlights for TikTok and Instagram Reels",
      "Follow up with every attendee by name with items that match what they tried on",
    ],
  },
  {
    emoji: "\u{1F942}",
    title: "Girls Night Out Private Shopping Events",
    frequency: "Monthly (after hours)",
    description:
      "Close the store to the public at 7pm and open it exclusively to a group of 15 to 25 invited customers for a private shopping experience. Light prosecco, a curated playlist, first access to new arrivals, and styling assistance from every staff member. These events consistently generate the highest per-visit spend of any boutique event format.",
    tips: [
      "Invite through text or email. Make it feel exclusive, not promotional",
      "Offer a 10% evening-only discount to drive purchase decisions",
      "Feature 3 to 4 outfit combinations styled specifically for the group's demographics",
    ],
  },
  {
    emoji: "\u{1F485}",
    title: "Pop-Up Collaborations with Local Salons & Spas",
    frequency: "Seasonal",
    description:
      "Partner with a local women's salon, spa, or nail bar to host a combined experience: style consultation plus mini treatment. Run it at the salon (they promote you) or at your boutique (you promote them). The combined audience doubles both businesses' reach and the cross-referral customer tends to spend significantly more than average.",
    tips: [
      "Co-create a shared promotional graphic for both social media channels",
      "Offer a bundle deal: $150 boutique spend plus nail service at partner price",
      "Photograph the collaboration heavily. It is high-performing content for both",
    ],
  },
  {
    emoji: "\u2728",
    title: "Charity Fashion Show Fundraiser",
    frequency: "Annually",
    description:
      "Host an annual charity fashion show featuring your real customers as models and proceeds going to a local women's organization. This event generates press, social media, and community goodwill simultaneously. Model calls through Instagram drive organic reach. Local media often covers charity fashion shows in the week preceding the event.",
    tips: [
      "Partner with a local women's shelter, dress code charity, or girls' education fund",
      "Use all real customers as models, not hired talent. This is the whole point",
      "Send a press release to local lifestyle media 4 weeks ahead",
    ],
  },
  {
    emoji: "\u{1F454}",
    title: "Dress for Success Donation Drives",
    frequency: "Biannual",
    description:
      "Twice a year, run a professional clothing donation drive in partnership with Dress for Success or a local women's re-entry program. Customers bring gently used professional pieces and receive 15% off their next purchase. This creates community impact, social content, and drives a repeat visit incentive in one action.",
    tips: [
      "Announce on social media 2 weeks ahead with a clear donation guidelines post",
      "Set up a visually appealing donation station in-store for photos",
      "Post the donation total and impact story after. This content gets massive saves",
    ],
  },
  {
    emoji: "\u{1F91D}",
    title: "Women's Business Group Co-Hosting",
    frequency: "Quarterly",
    description:
      "Invite a local women's business association, BNI women's group, or female entrepreneur community to hold their monthly meeting in your boutique after hours. You provide the space and light refreshments. They bring 20 to 40 women directly in your target demographic into your store. Offer an exclusive guest discount for the evening.",
    tips: [
      "Reach out to 3 local groups and offer a free meeting space arrangement",
      "Set up the store with the new arrivals you most want to sell that month",
      "Have a sign-up sheet for your newsletter and loyalty program at the door",
    ],
  },
];

export function BoutiqueEventsSection() {
  return (
    <section id="events" data-ocid="boutique-guide.events_section">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "oklch(0.28 0.12 180 / 0.12)" }}
        >
          <Calendar size={20} style={{ color: "oklch(0.28 0.12 180)" }} />
        </div>
        <Badge
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "oklch(0.28 0.12 180 / 0.1)",
            color: "oklch(0.20 0.1 180)",
            border: "1px solid oklch(0.28 0.12 180 / 0.3)",
          }}
        >
          Section 6
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        Events &amp; Community Building
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        The boutiques that survive and thrive in the age of e-commerce do so
        because they create experiences you can&rsquo;t get from a website.
        These 7 event formats are your competitive moat.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        {EVENTS.map((event, i) => (
          <Card
            key={event.title}
            className="hover:shadow-md transition-all duration-200"
            data-ocid={`boutique-guide.events.item.${i + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl shrink-0">{event.emoji}</span>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-0.5">
                    {event.title}
                  </h3>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: "oklch(0.28 0.12 180 / 0.1)",
                      color: "oklch(0.20 0.1 180)",
                    }}
                  >
                    {event.frequency}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {event.description}
              </p>
              <div
                className="rounded-lg p-3"
                style={{
                  background: "oklch(0.28 0.12 180 / 0.06)",
                  border: "1px solid oklch(0.28 0.12 180 / 0.18)",
                }}
              >
                <p className="text-xs font-semibold text-foreground mb-1.5">
                  Execution tips:
                </p>
                <ul className="space-y-1">
                  {event.tips.map((tip) => (
                    <li
                      key={tip}
                      className="text-xs text-muted-foreground flex items-start gap-1.5"
                    >
                      <span style={{ color: "oklch(0.28 0.12 180)" }}>
                        &rsaquo;
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

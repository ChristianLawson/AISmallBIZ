import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const QA_ITEMS = [
  {
    q: "What is the difference between an LLC and a C-Corp for a small business?",
    a: "For most local or service businesses (restaurants, salons, retail, delis), an LLC is the right choice. It protects your personal assets, passes taxes through to you personally (no double taxation), and is much simpler to maintain. A C-Corp is best only if you plan to raise venture capital or issue equity to employees: investors require it. Unless you are building a tech startup, start with an LLC.",
  },
  {
    q: "Do I need a registered agent? Cannot I just use my own address?",
    a: "Technically yes, but it is a bad idea. Your registered agent address is a matter of public record: using your home address makes it publicly searchable. More importantly, if you are not available during business hours when a legal notice arrives, you could miss a lawsuit filing deadline. Registered agent services cost $50-$150/year and are worth every penny for privacy and peace of mind.",
  },
  {
    q: "Is ZenBusiness really free? What is the catch?",
    a: "ZenBusiness's $0 formation plan is legitimate: you pay only the state filing fee (usually $50-$150 depending on your state). The catch: the free plan includes registered agent service for one year, then auto-renews at their paid rate. They will also upsell you during checkout on compliance and banking services. Buy only what you need: the free plan is genuinely sufficient for most new LLCs.",
  },
  {
    q: "How long does business formation actually take?",
    a: "Standard processing varies by state and service: most formation services file within 1-3 business days, then you are waiting on the state. States like Delaware and Wyoming process in 1-2 days. California and New York can take 2-3 weeks for standard processing. Every service offers expedited processing (usually $50-$150 extra) that can cut this to 24-48 hours in most states.",
  },
  {
    q: "Can I hire a freelancer from Fiverr before my business is officially formed?",
    a: "Yes: you do not need a formal business entity to hire a freelancer for a logo or website. You can engage freelancers as an individual and transfer the work to your business entity once it is formed. For significant projects over $600, your formed LLC will need to issue a 1099 at year-end, which Gusto handles automatically.",
  },
  {
    q: "Do I need Gusto if I am only hiring contractors, not full-time employees?",
    a: "Gusto handles contractor payments too, including automated 1099 filing at year-end. For a small operation with 1-5 contractors, Gusto's contractor-only plan ($6/contractor/month) is worth it purely to eliminate the year-end 1099 paperwork. If you are only paying one or two contractors occasionally, you can manage manually: but as soon as you have 3+ regular contractors, Gusto pays for itself.",
  },
  {
    q: "Is Stripe Atlas only for tech companies?",
    a: "No: Stripe Atlas is for any business that collects money online. E-commerce, online services, digital products, subscription apps, content creators, and consulting businesses all benefit from the Stripe Atlas package. The Delaware C-Corp structure is optimized for VC fundraising, but the banking + payment infrastructure is useful for any online business. If you are purely a local brick-and-mortar business with no online revenue, you do not need it.",
  },
  {
    q: "What is the single most important service to get right from day one?",
    a: "Business formation with the right entity structure. Getting this wrong: choosing an LLC when you need a C-Corp for investors, or forming in the wrong state: is expensive and time-consuming to fix later. Everything else (banking, payroll, legal docs) can be added as needed. But reforming your business entity after the fact often means dissolving and re-forming, which triggers tax events and requires updating every account, contract, and permit. Take an extra 30 minutes to get this right.",
  },
];

export function OnlineServicesQA() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3" data-ocid="online-services-guide.qa_list">
      {QA_ITEMS.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={item.q}
            className="rounded-xl border transition-all duration-200"
            style={{
              borderColor: isOpen
                ? "oklch(0.28 0.12 330 / 0.35)"
                : "oklch(0.88 0.018 280)",
              background: isOpen
                ? "oklch(0.28 0.12 330 / 0.04)"
                : "transparent",
            }}
            data-ocid={`online-services-guide.qa_item.${idx + 1}`}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-foreground leading-snug">
                {item.q}
              </span>
              <ChevronDown
                size={16}
                className="mt-0.5 shrink-0 transition-transform duration-200 text-muted-foreground"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

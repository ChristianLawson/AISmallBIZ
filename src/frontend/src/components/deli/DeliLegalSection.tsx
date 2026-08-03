import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle2, Scale } from "lucide-react";

type Priority = "Critical" | "Important" | "Nice-to-Have";

const LEGAL_ITEMS: Array<{
  item: string;
  agency: string;
  cost: string;
  notes: string;
  priority: Priority;
  reidNote: string;
}> = [
  {
    item: "NYC Food Handler Certification",
    agency: "NYC DOHMH",
    cost: "~$15-$30 per person",
    notes:
      "Required for all food handlers. Take the NYC Food Protection Course online or in-person. Certificate valid for life.",
    priority: "Critical",
    reidNote:
      "Post your certification at the counter. It is a brand trust signal: customers notice.",
  },
  {
    item: "Food Service Establishment Permit",
    agency: "NYC DOHMH",
    cost: "~$280/yr (under 25 seats)",
    notes:
      "Annual permit required to operate. Inspections by DOHMH: grade posted on front window. An 'A' grade is a marketing asset.",
    priority: "Critical",
    reidNote:
      "That 'A' grade in your window is more powerful than any ad. It tells every passerby: I run a clean operation.",
  },
  {
    item: "Certificate of Occupancy",
    agency: "NYC DOB",
    cost: "Varies (building-specific)",
    notes:
      "Required before opening. Confirms the space is legally approved for food service use. Get this before you sign a lease.",
    priority: "Critical",
    reidNote:
      "No CO = no legal operation. Verify it exists before you pay a deposit.",
  },
  {
    item: "NYS Sales Tax Registration",
    agency: "NYS Department of Taxation",
    cost: "Free",
    notes:
      "Register for a Certificate of Authority to collect and remit sales tax. Required before your first sale. File online at tax.ny.gov.",
    priority: "Critical",
    reidNote:
      "Tax compliance is invisible: until you fail. Set it up right from day one.",
  },
  {
    item: "EIN (Employer Identification Number)",
    agency: "IRS",
    cost: "Free",
    notes:
      "Required to hire employees, open a business bank account, and file taxes. Apply online at IRS.gov in 15 minutes.",
    priority: "Critical",
    reidNote: "Do this on Day 1. No exceptions.",
  },
  {
    item: "DBA Filing (if using a trade name)",
    agency: "NYC County Clerk",
    cost: "~$100",
    notes:
      "Required if your business name differs from your legal name. File with the county clerk and publish in a local newspaper per NYS law.",
    priority: "Important",
    reidNote:
      "Your trade name is your brand. Protect it legally from the start.",
  },
  {
    item: "NYC Fire Safety Inspection",
    agency: "FDNY",
    cost: "Varies",
    notes:
      "Cooking equipment requires fire suppression systems. Must pass FDNY inspection before opening. Certificate of fitness required for some equipment.",
    priority: "Critical",
    reidNote:
      "A kitchen fire that closes you for 2 weeks will cost more than every safety investment combined.",
  },
  {
    item: "Workers' Compensation Insurance",
    agency: "NYS Workers' Comp Board",
    cost: "~$3-$8 per $100 payroll",
    notes:
      "Mandatory in NYS for all employers with 1+ employees. Fine for non-compliance: $2,000+ per 10-day period.",
    priority: "Critical",
    reidNote:
      "This protects your staff and your business. Non-compliance is not a risk: it is a guarantee of a future crisis.",
  },
  {
    item: "General Liability Insurance",
    agency: "Private insurer",
    cost: "~$500-$1,500/yr",
    notes:
      "Covers slip-and-fall incidents, property damage, and food safety claims. Most landlords require this before lease signing.",
    priority: "Important",
    reidNote:
      "One lawsuit can end a business that took years to build. This is non-negotiable.",
  },
  {
    item: "Allergen Disclosure Notices",
    agency: "NYC Health Code",
    cost: "~$0-$50 for signage",
    notes:
      "Required to post allergen information. FDA's Big 9 allergens must be disclosed. Use clear menu labeling or printed allergen sheets.",
    priority: "Important",
    reidNote:
      "Clear allergen labeling is a trust signal: especially with women customers who statistically manage more dietary restrictions.",
  },
  {
    item: "OSHA Food Service Compliance",
    agency: "OSHA / NYS DOL",
    cost: "~$0 (training cost)",
    notes:
      "Hazard communication, slip prevention, equipment safety, and emergency action plans. Annual training recommended.",
    priority: "Nice-to-Have",
    reidNote:
      "A safe kitchen is a happy kitchen. Staff who feel safe stay longer.",
  },
];

const STYLES: Record<Priority, { badge: string; icon: string }> = {
  Critical: {
    badge: "bg-red-50 text-red-700 border-red-200",
    icon: "text-red-500",
  },
  Important: {
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    icon: "text-amber-500",
  },
  "Nice-to-Have": {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: "text-emerald-500",
  },
};

export function DeliLegalSection() {
  return (
    <section id="legal-compliance" data-ocid="deli-guide.legal_section">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#EEF2FF]">
          <Scale size={20} className="text-[#6366F1]" />
        </div>
        <Badge className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EEF2FF] text-[#312e81] border border-[#C7D2FE]">
          Legal & Compliance
        </Badge>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
        NYC Deli Legal & Compliance Checklist
      </h2>
      <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
        Taffer's rule: ignorance of the law is not a defense: it is just a more
        expensive way to learn. Get this right before day one.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {(["Critical", "Important", "Nice-to-Have"] as Priority[]).map((p) => (
          <div
            key={p}
            className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border ${STYLES[p].badge}`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  p === "Critical"
                    ? "#EF4444"
                    : p === "Important"
                      ? "#F59E0B"
                      : "#10B981",
              }}
            />
            {p}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {LEGAL_ITEMS.map((item) => (
          <div
            key={item.item}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className={`mt-0.5 shrink-0 ${STYLES[item.priority].icon}`}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-semibold text-sm text-foreground">
                    {item.item}
                  </span>
                  <Badge
                    className={`text-[11px] px-2 py-0.5 border ${STYLES[item.priority].badge}`}
                  >
                    {item.priority}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-2">
                  <span className="text-xs text-muted-foreground">
                    <strong>Agency:</strong> {item.agency}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    <strong>Cost:</strong> {item.cost}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {item.notes}
                </p>
                <div className="flex items-start gap-2 rounded-lg bg-[#EEF2FF]/60 border border-indigo-100 p-2">
                  <AlertTriangle
                    size={12}
                    className="text-[#6366F1] mt-0.5 shrink-0"
                  />
                  <p className="text-xs text-[#6366F1] italic">
                    {item.reidNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

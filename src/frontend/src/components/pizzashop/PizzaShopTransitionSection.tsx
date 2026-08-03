import { SectionQA } from "@/components/SectionQA";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  ClipboardCheck,
  DollarSign,
  FileText,
  MapPin,
  Truck,
  Zap,
} from "lucide-react";

const ACCENT = "oklch(0.65 0.18 65)";

export function PizzaShopTransitionSection() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Truck size={20} className="text-primary" />
        </div>
        <div>
          <Badge
            variant="secondary"
            className="mb-1 bg-primary/10 text-primary border-primary/20"
          >
            Transition
          </Badge>
          <h2 className="font-display text-xl font-bold text-foreground">
            From Pizza Truck to Brick-and-Mortar
          </h2>
        </div>
      </div>

      <p className="text-[15px] text-muted-foreground leading-relaxed">
        Moving from a mobile pizza operation to a permanent location is one of
        the biggest leaps a food entrepreneur can make. This section covers
        permits, zoning, lease negotiation, and the logistics of transitioning
        your customer base from chasing your truck to walking through your door.
      </p>

      {/* City Permits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                NYC Permits &amp; Licenses
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <FileText
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Mobile Food Vendor Permit</strong>: required for truck
                  operation; must be renewed annually ($200 fee)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FileText
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Food Service Establishment Permit</strong>:
                  brick-and-mortar health permit from NYC DOHMH ($280 initial,
                  $280 renewal)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FileText
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Certificate of Occupancy</strong>: verify your space
                  is zoned for restaurant use (contact NYC DOB)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FileText
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Signage Permit</strong>: any exterior sign over 6 sq
                  ft requires DOB approval
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Other Major Cities
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Building2
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Los Angeles</strong>: Health permit ($300+), business
                  tax registration, fire dept inspection for wood-fired ovens
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Building2
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Chicago</strong>: Food service sanitation certificate,
                  business license ($250), sign permit from Dept of Buildings
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Building2
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Houston</strong>: Food dealer permit ($300), fire
                  marshal approval for gas lines, TABC if serving alcohol
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Building2
                  size={14}
                  className="mt-0.5 shrink-0 text-primary/70"
                />
                <span>
                  <strong>Phoenix</strong>: Maricopa County health permit, city
                  business license, zoning verification for restaurant use
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Zoning & Lease Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <ClipboardCheck size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Zoning Checklist
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">1.</span>
                <span>Verify C of O allows restaurant/food service use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">2.</span>
                <span>Check grease trap requirements with health dept</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">3.</span>
                <span>Confirm hood/ventilation compliance for pizza ovens</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">4.</span>
                <span>Review ADA accessibility requirements for seating</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">5.</span>
                <span>Check parking minimums if required by municipality</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Lease Negotiation
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <Zap size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Percentage rent clause</strong>: negotiate 5-8% of
                  gross sales instead of fixed rent during ramp-up
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Tenant improvement allowance</strong>: request
                  $30-60/sq ft for buildout (ovens, hoods, plumbing)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Personal guarantee limits</strong>: cap at 12-24
                  months, not the full lease term
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={14} className="mt-0.5 shrink-0 text-primary/70" />
                <span>
                  <strong>Assignment rights</strong>: ensure you can
                  sell/transfer the lease if you exit
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-subtle">
          <CardContent className="p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-primary" />
              <h3 className="font-display font-semibold text-[15px] text-foreground">
                Customer Migration
              </h3>
            </div>
            <ul className="space-y-2 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">1.</span>
                <span>
                  Announce location 60 days before opening via social + email
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">2.</span>
                <span>
                  Offer "truck loyalist" discount: 20% off first dine-in visit
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">3.</span>
                <span>
                  Keep the truck running weekends for 3 months as bridge
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">4.</span>
                <span>
                  Host a "grand opening" event with free slices for first 100
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">5.</span>
                <span>
                  Update Google Business, Yelp, and all listings with new
                  address
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* NYC SBS Resources */}
      <Card className="border-primary/20 bg-primary/[0.03] shadow-subtle">
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-primary" />
            <h3 className="font-display font-semibold text-[15px] text-foreground">
              NYC Small Business Services Resources
            </h3>
          </div>
          <p className="text-[14px] text-muted-foreground leading-relaxed">
            NYC SBS offers free services specifically for food businesses
            transitioning to permanent locations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 text-[14px] text-muted-foreground">
              <ClipboardCheck
                size={14}
                className="mt-0.5 shrink-0 text-primary"
              />
              <span>
                <strong>Business Acceleration</strong>: free permit expediting
                and regulatory navigation for new restaurants
              </span>
            </div>
            <div className="flex items-start gap-2 text-[14px] text-muted-foreground">
              <ClipboardCheck
                size={14}
                className="mt-0.5 shrink-0 text-primary"
              />
              <span>
                <strong>Commercial Lease Assistance</strong>: free legal review
                of lease terms and negotiation support
              </span>
            </div>
            <div className="flex items-start gap-2 text-[14px] text-muted-foreground">
              <ClipboardCheck
                size={14}
                className="mt-0.5 shrink-0 text-primary"
              />
              <span>
                <strong>Neighborhood 360°</strong>: grants up to $100K for
                storefront improvements in select commercial corridors
              </span>
            </div>
            <div className="flex items-start gap-2 text-[14px] text-muted-foreground">
              <ClipboardCheck
                size={14}
                className="mt-0.5 shrink-0 text-primary"
              />
              <span>
                <strong>WE NYC</strong>: mentorship and financing connections
                for women-owned food businesses
              </span>
            </div>
          </div>
          <p className="text-[13px] text-muted-foreground">
            Call <strong>888-SBS-4NYC</strong> or visit{" "}
            <a
              href="https://www.nyc.gov/sbs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              nyc.gov/sbs
            </a>{" "}
            to connect with a business advisor.
          </p>
        </CardContent>
      </Card>

      {/* Section Q&A */}
      <SectionQA
        accentColor={ACCENT}
        items={[
          {
            q: "How long does the permit process take in NYC?",
            a: "Plan for 3-6 months. The Food Service Establishment permit requires plan review (4-8 weeks), followed by a pre-operational inspection. If you are converting from a truck, your existing food protection certificate transfers, but you will need a new site-specific inspection.",
          },
          {
            q: "Should I keep my truck running after opening the store?",
            a: "Yes, for 60-90 days. It serves as a marketing vehicle, captures customers who miss the old locations, and provides revenue insurance while the store ramps up. Many successful operators run the truck at events while the store handles daily service.",
          },
          {
            q: "What is the biggest mistake when negotiating a restaurant lease?",
            a: "Signing a personal guarantee for the full 10-year term. Instead, negotiate a limited guarantee (12-24 months), a percentage rent clause for the first year, and an exit clause if sales do not hit a threshold. Also verify the space has adequate electrical (220V+) and gas capacity for pizza ovens before signing.",
          },
          {
            q: "Do I need new insurance when transitioning from truck to store?",
            a: "Yes. Food truck insurance (commercial auto + general liability) differs from restaurant insurance (general liability + property + workers' comp). Budget $3,000-6,000 annually for a brick-and-mortar policy. If you keep the truck, you will need both policies.",
          },
        ]}
      />
    </div>
  );
}

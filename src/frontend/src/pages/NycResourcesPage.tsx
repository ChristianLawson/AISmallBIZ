import { Layout } from "@/components/Layout";
import { NycCourseSection } from "@/components/NycCourseSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFetchCourses, useNycCourses } from "@/hooks/useNycCourses";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Briefcase,
  Building2,
  DollarSign,
  ExternalLink,
  Heart,
  MapPin,
  Phone,
  Search,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const EDUCATION_PROGRAMS = [
  {
    id: "launch-online",
    icon: "🚀",
    name: "Launch Your Online Business",
    description:
      "A 15-hour course developed with SUNY/FIT covering digital marketing, branding, website development, SEO, e-commerce, and key performance indicators. Perfect for owners ready to build or grow an online presence.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Register on Eventbrite",
    tags: ["Digital Marketing", "E-Commerce", "SEO", "Branding"],
    contact: "Register via Eventbrite: free live online sessions",
  },
  {
    id: "fasttrac",
    icon: "📋",
    name: "FastTrac Business Planning",
    description:
      "A structured program that takes you from initial business concept to a working business plan. Ideal for aspiring entrepreneurs who need structured guidance before launch.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "View Program Details",
    tags: ["Business Planning", "Startup", "Entrepreneurship"],
    contact: "Contact NYC SBS at 888-SBS-4NYC",
  },
  {
    id: "nite-school",
    icon: "🌙",
    name: "NITE School",
    description:
      "Evening business education designed for working owners who cannot attend daytime sessions. Covers core business skills including finance, operations, and customer acquisition.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "View Schedule",
    tags: ["Evening Classes", "Operations", "Finance"],
    contact: "Free live sessions: register at nyc-business.nyc.gov",
  },
  {
    id: "live-online",
    icon: "💻",
    name: "Free Live Online Business Courses",
    description:
      "Frequently offered free online courses across all aspects of running a small business. Sessions are live and interactive: not pre-recorded: so you get real answers to your questions.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Register on Eventbrite",
    tags: ["Free", "Online", "Live Sessions"],
    contact: "Free: register on Eventbrite",
  },
  {
    id: "multilingual",
    icon: "🌍",
    name: "Courses in Spanish, Chinese & Russian",
    description:
      "NYC SBS offers select courses in Spanish, Chinese (Mandarin/Cantonese), and Russian so that language is never a barrier to learning. Check the current schedule for available sessions.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "View Multilingual Courses",
    tags: ["Spanish", "Chinese", "Russian", "Multilingual"],
    contact: "Available via NYC SBS course portal",
  },
];

const SUPPORT_PROGRAMS = [
  {
    id: "solutions-centers",
    icon: "🏢",
    name: "NYC Business Solutions Centers",
    description:
      "Free one-on-one services to help you start, operate, and grow your business. Expert advisors help with business plans, financing, hiring, permits, and more: no catch, no cost.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Find Your Center",
    tags: ["Free", "One-on-One", "Business Plans", "Permits"],
    contact: "888-SBS-4NYC · Monday-Friday 9am-5pm",
  },
  {
    id: "mycity",
    icon: "🗝️",
    name: "MyCity Business",
    description:
      "Your single source for NYC business licenses, permits, certificates, and compliance requirements. Replaces hours of research with a clear, guided experience tailored to your business type.",
    link: "https://mycity.nyc.gov/",
    linkLabel: "Visit MyCity Business",
    tags: ["Licenses", "Permits", "Compliance", "One-Stop"],
    contact: "Available 24/7 online at mycity.nyc.gov",
  },
  {
    id: "lease-assistance",
    icon: "📝",
    name: "Commercial Lease Assistance",
    description:
      "Free legal and negotiation support for small business owners navigating commercial leases. NYC SBS attorneys help you understand your rights before you sign: saving thousands in bad deal terms.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Learn More",
    tags: ["Legal", "Lease", "Free Attorneys"],
    contact: "Call 888-SBS-4NYC to schedule a consultation",
  },
  {
    id: "legal-advice",
    icon: "⚖️",
    name: "Free Legal Advice",
    description:
      "Pro bono legal consultations for NYC small business owners covering contracts, employment law, intellectual property, and business structure. Real attorneys, no billing surprise.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Schedule Consultation",
    tags: ["Legal", "Free", "Contracts", "Employment Law"],
    contact: "Call 888-SBS-4NYC to book",
  },
  {
    id: "emergency-prep",
    icon: "🛡️",
    name: "Business Emergency Preparedness & Recovery",
    description:
      "Resources and planning support so your business can survive and recover from emergencies: storms, fires, public health events, and economic disruptions. Build a resilience plan before you need it.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Get Prepared",
    tags: ["Emergency", "Resilience", "Recovery", "Planning"],
    contact: "nyc-business.nyc.gov/nycbusiness/",
  },
];

const FUNDING_PROGRAMS = [
  {
    id: "funding-help",
    icon: "💰",
    name: "Free Funding Application Help",
    description:
      "One-on-one support from NYC SBS advisors who help you identify and apply for grants, loans, and financing. They know what lenders look for: and they help you look ready.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Find Funding Help",
    tags: ["Grants", "Loans", "Free", "Financing"],
    contact: "Call 888-SBS-4NYC to start",
  },
  {
    id: "apex",
    icon: "🏆",
    name: "NYC SBS APEX Accelerator",
    description:
      "A specialized program that helps small businesses compete for government contracts: federal, state, and city. APEX advisors guide you through registration, certifications, and bidding strategy.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Join APEX Accelerator",
    tags: ["Government Contracts", "Federal", "Bidding", "Accelerator"],
    contact: "Contact NYC SBS: 888-SBS-4NYC",
  },
  {
    id: "bond-readiness",
    icon: "📊",
    name: "Bond Readiness Program & Bonding Services",
    description:
      "Free preparation to help your business qualify for surety bonds: a requirement for many government and construction contracts. Bonding opens doors that were previously closed to small firms.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Learn About Bonding",
    tags: ["Bonding", "Construction", "Contracts", "Certifications"],
    contact: "888-SBS-4NYC",
  },
  {
    id: "mwbe",
    icon: "🌟",
    name: "M/WBE Vendor Services",
    description:
      "Minority and Women-Owned Business Enterprise certification support. Get certified so you can access NYC's M/WBE supplier diversity programs and preferential contract opportunities worth billions annually.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Start M/WBE Certification",
    tags: ["Women-Owned", "Minority-Owned", "Certification", "Contracts"],
    contact: "888-SBS-4NYC · nyc-business.nyc.gov",
  },
];

const SPECIALIZED_PROGRAMS = [
  {
    id: "dining-out",
    icon: "🍽️",
    name: "Dining Out NYC",
    description:
      "NYC's permanent outdoor dining program. NYC SBS helps restaurants navigate the permit process to expand seating outdoors: increasing revenue without increasing rent.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Apply for Outdoor Dining",
    tags: ["Restaurants", "Outdoor Dining", "Permits", "Revenue"],
    contact: "nyc-business.nyc.gov/nycbusiness/",
  },
  {
    id: "shop-your-city",
    icon: "🛍️",
    name: "Shop Your City",
    description:
      "A neighborhood business support initiative that connects NYC shoppers directly to local businesses. Get your business listed, promoted, and featured as part of the city's buy-local ecosystem.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "List Your Business",
    tags: ["Retail", "Local Business", "Promotion", "Neighborhood"],
    contact: "nyc-business.nyc.gov/nycbusiness/",
  },
  {
    id: "worker-coops",
    icon: "🤝",
    name: "Worker Cooperatives",
    description:
      "Resources and education for businesses that want to transition to or start as a worker-owned cooperative. NYC SBS helps with the legal structure, financing, and governance setup.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Explore Co-ops",
    tags: ["Cooperative", "Worker-Owned", "Legal Structure"],
    contact: "888-SBS-4NYC",
  },
  {
    id: "construction",
    icon: "🏗️",
    name: "Construction Ramp-Up Program",
    description:
      "Targeted support for construction-sector small businesses, including M/WBE firms. Covers bonding, certifications, bid preparation, and connections to public works project managers.",
    link: "https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses",
    linkLabel: "Learn More",
    tags: ["Construction", "Bonding", "M/WBE", "Public Works"],
    contact: "888-SBS-4NYC",
  },
];

const SOLUTIONS_CENTERS = [
  {
    id: "bronx",
    borough: "Bronx",
    name: "Bronx Business Solutions Center",
    address: "1 Fordham Plaza, Suite 901, Bronx, NY 10458",
    phone: "888-SBS-4NYC",
    services: [
      "Business plan development",
      "Legal advice",
      "Commercial lease assistance",
      "Financing",
      "Permits & licenses",
      "Employment services",
    ],
    mapsLink: "https://maps.google.com/?q=1+Fordham+Plaza+Bronx+NY+10458",
  },
  {
    id: "brooklyn",
    borough: "Brooklyn",
    name: "Brooklyn Business Solutions Center",
    address: "9 Bond Street, Suite 702, Brooklyn, NY 11201",
    phone: "888-SBS-4NYC",
    services: [
      "Business plan development",
      "Legal advice",
      "Commercial lease assistance",
      "Financing",
      "Permits & licenses",
      "Employment services",
    ],
    mapsLink: "https://maps.google.com/?q=9+Bond+Street+Brooklyn+NY+11201",
  },
  {
    id: "manhattan",
    borough: "Manhattan",
    name: "Manhattan Business Solutions Center",
    address: "110 William Street, 7th Floor, New York, NY 10038",
    phone: "888-SBS-4NYC",
    services: [
      "Business plan development",
      "Legal advice",
      "Commercial lease assistance",
      "Financing",
      "Permits & licenses",
      "Employment services",
    ],
    mapsLink: "https://maps.google.com/?q=110+William+Street+New+York+NY+10038",
  },
  {
    id: "queens",
    borough: "Queens",
    name: "Queens Business Solutions Center",
    address: "120-55 Queens Blvd, Suite 309, Kew Gardens, NY 11424",
    phone: "888-SBS-4NYC",
    services: [
      "Business plan development",
      "Legal advice",
      "Commercial lease assistance",
      "Financing",
      "Permits & licenses",
      "Employment services",
    ],
    mapsLink:
      "https://maps.google.com/?q=120-55+Queens+Blvd+Kew+Gardens+NY+11424",
  },
  {
    id: "staten-island",
    borough: "Staten Island",
    name: "Staten Island Business Solutions Center",
    address: "1 Edgewater Street, Suite 304, Staten Island, NY 10305",
    phone: "888-SBS-4NYC",
    services: [
      "Business plan development",
      "Legal advice",
      "Commercial lease assistance",
      "Financing",
      "Permits & licenses",
      "Employment services",
    ],
    mapsLink:
      "https://maps.google.com/?q=1+Edgewater+Street+Staten+Island+NY+10305",
  },
];

const BOROUGHS = [
  "All",
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
] as const;
type Borough = (typeof BOROUGHS)[number];

// ─── Sub-Components ───────────────────────────────────────────────────────────

interface ProgramCardProps {
  icon: string;
  name: string;
  description: string;
  link: string;
  linkLabel: string;
  tags: string[];
  contact: string;
  ocid: string;
}

function ProgramCard({
  icon,
  name,
  description,
  link,
  linkLabel,
  tags,
  contact,
  ocid,
}: ProgramCardProps) {
  return (
    <div
      data-ocid={ocid}
      className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-card transition-all duration-200 group"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0" role="img" aria-hidden="true">
          {icon}
        </span>
        <h3 className="font-display font-semibold text-base text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex flex-col gap-2 pt-2 border-t border-border/60">
        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Phone size={11} className="shrink-0 text-primary/60" />
          {contact}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`${ocid}.link`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
        >
          {linkLabel}
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="font-display font-bold text-2xl text-foreground mb-1">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function NycResourcesPage() {
  const [search, setSearch] = useState("");
  const [boroughFilter, setBoroughFilter] = useState<Borough>("All");

  const {
    data: courses,
    lastUpdated,
    isLoading: coursesLoading,
  } = useNycCourses();
  const { mutate: refreshCourses, isPending: isRefreshing } = useFetchCourses();

  const q = search.toLowerCase().trim();

  function matchesSearch<
    T extends { name: string; description: string; tags: string[] },
  >(p: T) {
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  const filteredEducation = EDUCATION_PROGRAMS.filter(matchesSearch);
  const filteredSupport = SUPPORT_PROGRAMS.filter(matchesSearch);
  const filteredFunding = FUNDING_PROGRAMS.filter(matchesSearch);
  const filteredSpecialized = SPECIALIZED_PROGRAMS.filter(matchesSearch);
  const filteredCenters = SOLUTIONS_CENTERS.filter((c) => {
    const boroughOk = boroughFilter === "All" || c.borough === boroughFilter;
    if (!q) return boroughOk;
    return (
      boroughOk &&
      (c.name.toLowerCase().includes(q) ||
        c.borough.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.services.some((s) => s.toLowerCase().includes(q)))
    );
  });

  const totalResults =
    filteredEducation.length +
    filteredSupport.length +
    filteredFunding.length +
    filteredSpecialized.length;

  return (
    <Layout>
      {/* Sticky Contact Banner */}
      <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-medium">
        <span className="hidden sm:inline">
          Free expert help for NYC businesses:{" "}
        </span>
        <a
          href="tel:888-727-4NYC"
          className="font-bold hover:underline inline-flex items-center gap-1"
          data-ocid="nyc_resources.contact_banner.phone_link"
        >
          <Phone size={13} /> 888-SBS-4NYC
        </a>
        <span className="mx-2 opacity-60">·</span>
        <span>Mon-Fri 9am-5pm</span>
        <span className="mx-2 opacity-60">·</span>
        <a
          href="https://nyc-business.nyc.gov/nycbusiness/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
          data-ocid="nyc_resources.contact_banner.website_link"
        >
          nyc-business.nyc.gov
        </a>
      </div>

      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
                <MapPin size={13} />
                NYC Small Business Services
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-4">
                Free NYC Resources for{" "}
                <span className="text-primary">Small Business Owners</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
                No catch. No cost. Real experts funded by New York City to help
                businesses like yours start, grow, and succeed. Jon Taffer says
                fix what is broken: NYC SBS helps you find out what that is and
                gives you the tools to do it.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield size={14} className="text-primary" /> 100% Free
                  Programs
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-primary" /> Expert One-on-One
                  Advisors
                </span>
                <span className="flex items-center gap-1.5">
                  <Star size={14} className="text-primary" /> All 5 NYC Boroughs
                </span>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-3 shrink-0">
              <div className="bg-primary/8 rounded-2xl border border-primary/20 p-6 text-center w-52">
                <p className="font-display font-bold text-4xl text-primary mb-1">
                  100%
                </p>
                <p className="text-sm text-muted-foreground">Free programs</p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-6 text-center w-52">
                <p className="font-display font-bold text-4xl text-foreground mb-1">
                  5
                </p>
                <p className="text-sm text-muted-foreground">Borough centers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="bg-background border-b border-border py-5 sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="relative max-w-xl">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter programs by keyword (e.g. legal, women, online)…"
              data-ocid="nyc_resources.search_input"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors duration-200"
            />
          </div>
          {q && (
            <p className="mt-2 text-xs text-muted-foreground">
              Showing {totalResults} program{totalResults !== 1 ? "s" : ""}{" "}
              matching "{q}"
            </p>
          )}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-14 space-y-20">
        {/* ─── WE NYC Hero Card ─────────────────────────────────── */}
        <section data-ocid="nyc_resources.we_nyc.section">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary bg-primary/5 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-label="Women entrepreneurs"
                  >
                    👩‍💼
                  </span>
                  <Badge className="bg-primary text-primary-foreground border-0 text-xs font-semibold">
                    Featured Program
                  </Badge>
                </div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-3">
                  Women Entrepreneurs of NYC
                  <span className="text-primary ml-2">WE NYC</span>
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-lg">
                  NYC's flagship program for women business owners: free
                  resources, mentorship, peer networks, and direct connections
                  to funding. If you are a woman building a business in NYC,
                  this is your starting point. Appreciated Branding author Reid
                  Holmes calls it: "Build the community before you need it."
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Free Mentorship",
                    "Peer Networks",
                    "Funding Access",
                    "Women-Led",
                    "NYC-Based",
                  ].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href="https://nyc-business.nyc.gov/nycbusiness/business-services/education-programs/business-courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="nyc_resources.we_nyc.cta_link"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors duration-200"
                >
                  <Heart size={15} />
                  Join WE NYC
                  <ExternalLink size={13} />
                </a>
              </div>
              <div className="hidden md:flex flex-col gap-3">
                <div className="bg-card rounded-2xl border border-primary/20 p-5 text-center w-44">
                  <p className="font-display font-bold text-3xl text-primary mb-1">
                    Free
                  </p>
                  <p className="text-xs text-muted-foreground">All programs</p>
                </div>
                <div className="bg-card rounded-2xl border border-primary/20 p-5 text-center w-44">
                  <p className="font-display font-bold text-3xl text-foreground mb-1">
                    NYC
                  </p>
                  <p className="text-xs text-muted-foreground">City-funded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── NYC SBS Business Courses (Dynamic) ───────────────── */}
        <NycCourseSection
          courses={courses}
          lastUpdated={lastUpdated}
          onRefresh={() => refreshCourses()}
          isRefreshing={isRefreshing || coursesLoading}
          searchQuery={search}
        />

        <div className="section-divider" />

        {/* ─── Education & Training ─────────────────────────────── */}
        {filteredEducation.length > 0 && (
          <section data-ocid="nyc_resources.education.section">
            <SectionHeader
              icon={<BookOpen size={22} className="text-primary" />}
              title="Education & Training"
              subtitle="Free courses taught by real instructors: live sessions, not recordings. Covers everything from digital marketing to business planning."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEducation.map((p, i) => (
                <ProgramCard
                  key={p.id}
                  {...p}
                  ocid={`nyc_resources.education.item.${i + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* ─── Direct Business Support ──────────────────────────── */}
        {filteredSupport.length > 0 && (
          <section data-ocid="nyc_resources.support.section">
            <SectionHeader
              icon={<Building2 size={22} className="text-primary" />}
              title="Direct Business Support"
              subtitle="One-on-one expert advisors who sit with you, understand your situation, and give you a real plan. Not a hotline: actual people who know NYC's business landscape."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSupport.map((p, i) => (
                <ProgramCard
                  key={p.id}
                  {...p}
                  ocid={`nyc_resources.support.item.${i + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* ─── Funding & Contracts ──────────────────────────────── */}
        {filteredFunding.length > 0 && (
          <section data-ocid="nyc_resources.funding.section">
            <SectionHeader
              icon={<DollarSign size={22} className="text-primary" />}
              title="Funding & Contracts"
              subtitle="Free help applying for grants and loans, plus specialized support to compete for government contracts that most small businesses do not know they are eligible for."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFunding.map((p, i) => (
                <ProgramCard
                  key={p.id}
                  {...p}
                  ocid={`nyc_resources.funding.item.${i + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* ─── Specialized Programs ─────────────────────────────── */}
        {filteredSpecialized.length > 0 && (
          <section data-ocid="nyc_resources.specialized.section">
            <SectionHeader
              icon={<Briefcase size={22} className="text-primary" />}
              title="Specialized Programs"
              subtitle="Industry-specific programs and initiatives for particular business types: from outdoor dining to worker cooperatives."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSpecialized.map((p, i) => (
                <ProgramCard
                  key={p.id}
                  {...p}
                  ocid={`nyc_resources.specialized.item.${i + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* ─── Business Solutions Centers ───────────────────────── */}
        <section data-ocid="nyc_resources.centers.section">
          <SectionHeader
            icon={<MapPin size={22} className="text-primary" />}
            title="Business Solutions Centers"
            subtitle="One in every borough. Walk in or call ahead: free, confidential, and staffed by people who want your business to succeed."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {BOROUGHS.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBoroughFilter(b)}
                data-ocid={`nyc_resources.centers.filter.${b.toLowerCase().replace(" ", "_")}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  boroughFilter === b
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground",
                )}
              >
                {b}
              </button>
            ))}
          </div>

          {filteredCenters.length === 0 ? (
            <div
              data-ocid="nyc_resources.centers.empty_state"
              className="text-center py-12 text-muted-foreground text-sm"
            >
              No centers found for the selected filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCenters.map((center, i) => (
                <div
                  key={center.id}
                  data-ocid={`nyc_resources.centers.item.${i + 1}`}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-card transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Badge
                        variant="outline"
                        className="text-xs mb-2 border-primary/30 text-primary"
                      >
                        {center.borough}
                      </Badge>
                      <h3 className="font-display font-semibold text-base text-foreground leading-snug">
                        {center.name}
                      </h3>
                    </div>
                    <Building2
                      size={18}
                      className="text-primary/50 shrink-0 mt-1"
                    />
                  </div>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <p className="flex items-start gap-1.5">
                      <MapPin
                        size={13}
                        className="text-primary/60 shrink-0 mt-0.5"
                      />
                      {center.address}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Phone size={13} className="text-primary/60 shrink-0" />
                      {center.phone}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border/60">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Services offered:
                    </p>
                    <ul className="space-y-1">
                      {center.services.slice(0, 4).map((s) => (
                        <li
                          key={s}
                          className="text-xs text-muted-foreground flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                          {s}
                        </li>
                      ))}
                      {center.services.length > 4 && (
                        <li className="text-xs text-muted-foreground/60">
                          +{center.services.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>
                  <a
                    href={center.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`nyc_resources.centers.item.${i + 1}.directions_link`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <MapPin size={13} />
                    Get Directions
                    <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ─── Bottom CTA Banner ────────────────────────────────── */}
        <section
          data-ocid="nyc_resources.cta.section"
          className="bg-muted/40 rounded-3xl border border-border p-8 md:p-12 text-center"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Ready to Talk to a Real Advisor?
          </h2>
          <p className="text-base text-muted-foreground mb-6 max-w-lg mx-auto">
            All NYC Business Solutions Centers offer free, confidential
            consultations. No appointment required at most locations: walk in
            and get help today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:888-727-4NYC"
              data-ocid="nyc_resources.cta.phone_button"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors duration-200"
            >
              <Phone size={16} />
              Call 888-SBS-4NYC
            </a>
            <a
              href="https://nyc-business.nyc.gov/nycbusiness/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nyc_resources.cta.website_button"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:border-primary/40 transition-colors duration-200"
            >
              <ExternalLink size={15} />
              Visit nyc-business.nyc.gov
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

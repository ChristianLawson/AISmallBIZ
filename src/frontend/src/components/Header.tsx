import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  LayoutDashboard,
  LogIn,
  LogOut,
  MapPin,
  Menu,
  Moon,
  Search,
  Shield,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type NavLink = {
  to: "/" | "/start-here" | "/learn" | "/branding" | "/faq";
  label: string;
  exact: boolean;
};

const PRIMARY_NAV_LINKS: NavLink[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/start-here", label: "Start Here", exact: true },
  { to: "/learn", label: "Learn", exact: true },
  { to: "/branding", label: "Branding", exact: true },
  { to: "/faq", label: "FAQ", exact: true },
];

const RESOURCES_NAV_LINKS = [
  { to: "/taffer-advice" as const, label: "Business Rescue", exact: true },
  { to: "/hiring" as const, label: "Hiring", exact: true },
  { to: "/ai-training" as const, label: "AI Training and Tools", exact: true },
  { to: "/ai-search-prep" as const, label: "AI Search Prep", exact: true },
  {
    to: "/online-schooling" as const,
    label: "Online Schooling",
    exact: true,
  },
  { to: "/nyc-resources" as const, label: "NYC Resources", exact: true },
  {
    to: "/cloud-monitoring" as const,
    label: "Website Health",
    exact: true,
  },
  { to: "/ask-a-question" as const, label: "Contact", exact: true },
];

const SEARCH_ITEMS = [
  { label: "NYC Deli Guide", to: "/deli-guide", category: "Guide" },
  { label: "Salon Guide", to: "/salon-guide", category: "Guide" },
  { label: "Restaurant Guide", to: "/restaurant-guide", category: "Guide" },
  { label: "Pool Hall Guide", to: "/pool-hall-guide", category: "Guide" },
  {
    label: "Fitness Studio Guide",
    to: "/fitness-studio-guide",
    category: "Guide",
  },
  { label: "Bakery & Café Guide", to: "/bakery-guide", category: "Guide" },
  { label: "Retail Guide", to: "/retail-guide", category: "Guide" },
  {
    label: "Cleaning Service Guide",
    to: "/cleaning-service",
    category: "Guide",
  },
  {
    label: "Boutique Clothing Store Guide",
    to: "/boutique-guide",
    category: "Guide",
  },
  { label: "AI Training and Tools", to: "/ai-training", category: "Page" },
  {
    label: "NYC Resources (Free SBS Programs)",
    to: "/nyc-resources",
    category: "Page",
  },
  { label: "Google Maps Optimization", to: "/guides", category: "Topic" },
  { label: "Social Media Advertising", to: "/guides", category: "Topic" },
  { label: "Business Planning", to: "/guides", category: "Topic" },
  { label: "Appreciated Branding", to: "/branding", category: "Article" },
  {
    label: "Business Rescue (Jon Taffer)",
    to: "/taffer-advice",
    category: "Article",
  },
  { label: "FAQ", to: "/faq", category: "Page" },
  { label: "Contact", to: "/ask-a-question", category: "Page" },
];

export function Header() {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const router = useRouterState();
  const pathname = router.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const searchResults =
    searchQuery.trim().length > 0
      ? SEARCH_ITEMS.filter(
          (item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()),
        ).slice(0, 6)
      : [];

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery("");
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(e.target as Node)
      ) {
        setResourcesOpen(false);
      }
      if (
        mobileRef.current &&
        !mobileRef.current.contains(e.target as Node) &&
        mobileOpen
      ) {
        setMobileOpen(false);
      }
    }
    if (searchOpen || mobileOpen || resourcesOpen)
      document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [searchOpen, mobileOpen, resourcesOpen]);

  const isActive = (to: string, exact: boolean) =>
    exact ? pathname === to : pathname.startsWith(to);

  const isResourcesActive = RESOURCES_NAV_LINKS.some((link) =>
    isActive(link.to, link.exact),
  );

  const linkBaseClass =
    "px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap min-h-12 flex items-center";
  const activeLinkClass = "text-primary-text bg-primary/10 font-semibold";
  const idleLinkClass =
    "text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-card border-b border-border transition-all duration-300",
        scrolled && "glass-scrolled",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 group"
          data-ocid="header.logo_link"
          aria-label="AISmallBiz home"
        >
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-vibrant group-hover:scale-105">
            <MapPin size={19} className="text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-2xl text-foreground tracking-tight">
            AI<span className="text-primary-text">SmallBiz</span>
            <sup className="text-[0.55em] align-super text-primary-text">™</sup>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Main navigation"
        >
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={`header.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className={cn(
                linkBaseClass,
                isActive(link.to, link.exact) ? activeLinkClass : idleLinkClass,
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div
            ref={resourcesRef}
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              data-ocid="header.nav.resources_dropdown"
              className={cn(
                linkBaseClass,
                "gap-1 focus-visible:ring-2 focus-visible:ring-ring",
                isResourcesActive ? activeLinkClass : idleLinkClass,
              )}
            >
              Resources
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-200",
                  resourcesOpen && "rotate-180",
                )}
              />
            </button>
            {resourcesOpen && (
              <div
                role="menu"
                className="absolute top-full left-0 mt-1 w-64 bg-card border border-primary/15 rounded-xl shadow-elevated z-50 overflow-hidden py-1"
              >
                {RESOURCES_NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setResourcesOpen(false)}
                    data-ocid={`header.nav.resources.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    role="menuitem"
                    className={cn(
                      "flex items-center px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring",
                      isActive(link.to, link.exact)
                        ? activeLinkClass
                        : idleLinkClass,
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isAuthenticated && (
            <Link
              to="/dashboard"
              data-ocid="header.nav.dashboard_link"
              className={cn(
                linkBaseClass,
                "gap-1.5",
                isActive("/dashboard", false) ? activeLinkClass : idleLinkClass,
              )}
            >
              <LayoutDashboard size={15} />
              Dashboard
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/admin"
              data-ocid="header.nav.admin_link"
              className={cn(
                linkBaseClass,
                "gap-1.5",
                isActive("/admin", false) ? activeLinkClass : idleLinkClass,
              )}
            >
              <Shield size={15} />
              Admin
            </Link>
          )}
        </nav>

        {/* Divider separating nav links from the Dark Mode toggle */}
        <div
          aria-hidden="true"
          className="hidden md:block h-8 w-px self-center bg-border"
        />

        {/* Search */}
        <div ref={searchRef} className="hidden md:flex items-center relative">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-background border border-primary/25 rounded-lg px-3 py-1.5 shadow-card w-64">
              <Search size={15} className="text-muted-foreground shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search guides, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }
                }}
                data-ocid="header.search_input"
                aria-label="Search guides and topics"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring min-w-0"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring rounded"
                aria-label="Close search"
              >
                <X size={13} />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              data-ocid="header.search_button"
              className="w-12 h-12 flex items-center justify-center rounded-md text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Search size={17} />
            </button>
          )}
          {/* Search dropdown */}
          {searchOpen && searchResults.length > 0 && (
            <div className="absolute top-full mt-1 left-0 w-72 bg-card border border-primary/15 rounded-xl shadow-elevated z-50 overflow-hidden py-1">
              {searchResults.map((item) => (
                <Link
                  key={item.label}
                  to={item.to as Parameters<typeof Link>[0]["to"]}
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                    window.scrollTo(0, 0);
                  }}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground/80 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.category}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          data-ocid="header.theme_toggle"
          className="hidden md:flex relative w-12 h-12 items-center justify-center rounded-md text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Sun
            size={17}
            className="rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={17}
            className="absolute rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
          />
        </button>

        {/* Auth Button */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => logout()}
              data-ocid="header.logout_button"
              className="gap-2"
            >
              <LogOut size={14} />
              Sign Out
            </Button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          data-ocid="header.mobile_menu_toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="md:hidden border-t border-border bg-card px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto"
        >
          {PRIMARY_NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              data-ocid={`header.mobile.nav.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className={cn(
                "flex items-center px-3 py-3 min-h-12 rounded-md text-base font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring",
                isActive(link.to, link.exact)
                  ? "text-primary-text bg-primary/10 font-semibold"
                  : "text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200",
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Resources expandable section */}
          <div>
            <button
              type="button"
              onClick={() => setMobileResourcesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={mobileResourcesOpen}
              data-ocid="header.mobile.nav.resources_dropdown"
              className={cn(
                "w-full flex items-center justify-between px-3 py-3 min-h-12 rounded-md text-base font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring",
                isResourcesActive
                  ? "text-primary-text bg-primary/10 font-semibold"
                  : "text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200",
              )}
            >
              <span>Resources</span>
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200",
                  mobileResourcesOpen && "rotate-180",
                )}
              />
            </button>
            {mobileResourcesOpen && (
              <div
                role="menu"
                className="ml-3 mt-1 space-y-1 border-l border-border pl-3"
              >
                {RESOURCES_NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    data-ocid={`header.mobile.nav.resources.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    role="menuitem"
                    className={cn(
                      "flex items-center px-3 py-2.5 min-h-11 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring",
                      isActive(link.to, link.exact)
                        ? "text-primary-text bg-primary/10 font-semibold"
                        : "text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-3 min-h-12 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LayoutDashboard size={15} />
              Dashboard
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/admin"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-3 min-h-12 rounded-md text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Shield size={15} />
              Admin
            </Link>
          )}

          {/* Divider separating nav links from the Dark Mode toggle */}
          <div aria-hidden="true" className="my-1 h-px w-full bg-border" />

          {/* Mobile Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            data-ocid="header.mobile.theme_toggle"
            className="w-full flex items-center gap-3 px-3 py-3 min-h-12 rounded-md text-base font-medium text-foreground/70 hover:text-primary-text hover:bg-primary/8 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Sun size={15} className="dark:hidden" />
            <Moon size={15} className="hidden dark:block" />
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          <div className="pt-3 mt-2 border-t border-border">
            {isAuthenticated && (
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2 min-h-12"
                onClick={() => {
                  logout();
                  setMobileOpen(false);
                }}
              >
                <LogOut size={14} />
                Sign Out
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

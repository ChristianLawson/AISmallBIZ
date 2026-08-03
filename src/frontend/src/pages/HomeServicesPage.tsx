import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Hammer, Sparkles } from "lucide-react";

export default function HomeServicesPage() {
  return (
    <Layout>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-hero-vibrant"
        data-ocid="home-services.hero_section"
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <span className="badge-primary-vibrant inline-flex items-center gap-1.5">
              <Hammer size={12} />
              Home Service Business Playbook
            </span>
            <h1 className="heading-hero text-foreground">
              The Home Service Business{" "}
              <span className="text-gradient-vibrant">Playbook</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-[rgb(var(--text-muted-readable))]">
              This is the complete free growth system for home service
              businesses with one to ten people. It applies everything from the
              AI Search Prep guide to the home service industry, so your
              business becomes the one AI systems recommend.
            </p>
            <Link
              to="/ai-search-prep"
              data-ocid="home-services.hero.cta_button"
              className="button-cta inline-flex items-center gap-2 mt-2"
            >
              <BookOpen size={15} />
              Read the AI Search Prep Guide
            </Link>
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section
        className="py-16 md:py-20 bg-background"
        data-ocid="home-services.coming_soon_section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="card-guide text-center"
            data-ocid="home-services.coming_soon.card"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-[rgb(var(--accent-neutral-soft))] dark:bg-[rgb(var(--accent-neutral-soft))]/40 flex items-center justify-center">
                <Sparkles
                  size={22}
                  className="text-[rgb(var(--accent-neutral))]"
                />
              </div>
            </div>
            <h2 className="heading-section text-foreground mb-3">
              The Full Playbook Is Coming Soon
            </h2>
            <p className="text-base text-[rgb(var(--text-muted-readable))] leading-relaxed mb-6">
              The complete home service growth playbook is being written. It
              will cover pricing transparency, online booking, real customer
              questions turned into content, a knowledge catalog built for AI,
              and technical visibility for home service businesses of one to ten
              people.
            </p>
            <p className="text-base text-[rgb(var(--text-muted-readable))] leading-relaxed mb-8">
              While the playbook is being finished, you can read the AI Search
              Prep guide. Every principle in it applies directly to home service
              businesses, and the steps you take now will compound the moment
              the full playbook lands.
            </p>
            <Link
              to="/ai-search-prep"
              data-ocid="home-services.coming_soon.cta_button"
              className="button-cta inline-flex items-center gap-2"
            >
              <BookOpen size={15} />
              Read the AI Search Prep Guide
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

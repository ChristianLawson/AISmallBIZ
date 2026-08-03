import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change is the intended trigger
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  return null;
}

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:font-medium"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

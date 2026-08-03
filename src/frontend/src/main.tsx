import { InternetIdentityProvider } from "@caffeineai/core-infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

// Created once at module scope so the same QueryClient instance is reused
// across the entire app tree (including RouterProvider and all routes).
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <InternetIdentityProvider>{children}</InternetIdentityProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

// Remove the inline branded loading screen from index.html before React mounts
// so it never lingers if the bundle hydrates faster than a paint cycle.
const loadingEl = document.getElementById("aisb-loading");
if (loadingEl) {
  loadingEl.remove();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>,
);

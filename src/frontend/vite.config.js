import { fileURLToPath, URL } from "url";
import { readFileSync } from "fs";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import environment from "vite-plugin-environment";
import {
  generateSnapshots,
  SOCIAL_CARD_PNG_BASE64,
} from "./scripts/generate-snapshots.mjs";

const socialCardPath = resolve(
  fileURLToPath(new URL(".", import.meta.url)),
  "public/assets/generated/social-card.png",
);

const PNG_MAGIC = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function isValidPng(buffer) {
  return (
    Buffer.isBuffer(buffer) &&
    buffer.length >= 8 &&
    buffer.subarray(0, 8).equals(PNG_MAGIC)
  );
}

function readSocialCardSource() {
  // Primary path: read the real PNG file from public/assets/generated/.
  let sourceBytes;
  try {
    sourceBytes = readFileSync(socialCardPath);
    if (!isValidPng(sourceBytes)) {
      console.error(
        `[aismallbiz-generate-snapshots] Source social card PNG at ${socialCardPath} has invalid magic bytes. Falling back to embedded base64.`,
      );
      sourceBytes = null;
    }
  } catch (error) {
    console.error(
      `[aismallbiz-generate-snapshots] Failed to read source social card PNG at ${socialCardPath}: ${error instanceof Error ? error.message : error}. Falling back to embedded base64.`,
    );
    sourceBytes = null;
  }

  // Fallback path: decode the embedded base64 string from generate-snapshots.mjs.
  if (sourceBytes === null) {
    try {
      const fallback = Buffer.from(SOCIAL_CARD_PNG_BASE64, "base64");
      if (!isValidPng(fallback)) {
        throw new Error(
          "Embedded base64 social card PNG has invalid magic bytes.",
        );
      }
      console.warn(
        `[aismallbiz-generate-snapshots] Using embedded base64 fallback for social card PNG (${fallback.length} bytes).`,
      );
      return fallback;
    } catch (fallbackError) {
      console.error(
        `[aismallbiz-generate-snapshots] Embedded base64 fallback also failed: ${fallbackError instanceof Error ? fallbackError.message : fallbackError}`,
      );
      throw fallbackError;
    }
  }

  return sourceBytes;
}

const ii_url =
  process.env.DFX_NETWORK === "local"
    ? `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:8081/`
    : `https://identity.internetcomputer.org/`;

process.env.II_URL = process.env.II_URL || ii_url;
process.env.STORAGE_GATEWAY_URL =
  process.env.STORAGE_GATEWAY_URL || "https://blob.caffeine.ai";

export default defineConfig({
  logLevel: "error",
  build: {
    emptyOutDir: true,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.includes("social-card")) {
            return "assets/generated/social-card.png";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    environment(["II_URL"]),
    environment(["STORAGE_GATEWAY_URL"]),
    react(),
    {
      name: "aismallbiz-generate-snapshots",
      apply: "build",
      generateBundle() {
        try {
          const source = readSocialCardSource();
          this.emitFile({
            type: "asset",
            fileName: "assets/generated/social-card.png",
            source,
          });
          console.log(
            `[aismallbiz-generate-snapshots] Emitted social-card.png (${source.length} bytes) as a core bundle asset at assets/generated/social-card.png`,
          );
        } catch (error) {
          console.error(
            "[aismallbiz-generate-snapshots] Failed to emit social-card.png:",
            error instanceof Error ? error.message : error,
          );
          throw error;
        }
      },
      closeBundle() {
        try {
          const { count } = generateSnapshots();
          console.log(
            `[aismallbiz-generate-snapshots] Wrote ${count} static HTML snapshots to dist/ at their route paths`,
          );
        } catch (error) {
          console.error(
            "[aismallbiz-generate-snapshots] Failed to generate snapshots:",
            error instanceof Error ? error.message : error,
          );
          throw error;
        }
      },
    },
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
    dedupe: ["@dfinity/agent", "@tanstack/react-query"]
  },
});

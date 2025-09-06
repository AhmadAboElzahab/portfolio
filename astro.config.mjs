import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server",

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),

  site: "https://ahmad.studio",
  integrations: [sitemap(), tailwindcss()],

  vite: {
    plugins: [tailwindcss()],
  },
});
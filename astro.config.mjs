// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), db()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: netlify(),
});
// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "server", // 👈 importante
  adapter: node({
    mode: "standalone", // o 'middleware'
  }),
});

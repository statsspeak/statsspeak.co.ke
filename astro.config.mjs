import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	renderers: [svelte()],
	integrations: [svelte()],
	output: "static",
	// adapter: cloudflare(),
});

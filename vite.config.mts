import ViteYaml from "@modyfi/vite-plugin-yaml";
// @ts-expect-error: missing type declaration
import riot from "rollup-plugin-riot";
import { defineConfig } from "vite";

// https://vite.dev/config
export default defineConfig({
	base: "/portfolio/",
	plugins: [riot(), ViteYaml()],
	resolve: { alias: { "@": "/src" } },
});

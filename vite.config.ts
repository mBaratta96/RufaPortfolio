import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import content from "@originjs/vite-plugin-content";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
	const isDev = configEnv.mode === "development";
	return {
		plugins: [react(), content()],
		css: {
			modules: {
				generateScopedName: isDev
					? "[name]__[local]__[hash:base64:5]"
					: "[hash:base64:5]",
			},
		},
	};
});

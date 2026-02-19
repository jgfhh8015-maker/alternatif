import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Node.js utility scripts (use CommonJS require, not part of the app)
    "generate_logos.js",
    "optimize_images.js",
    "optimize_images_size.js",
    "process_photos_seo.js",
    "new_images_list.js",
  ]),
]);

export default eslintConfig;

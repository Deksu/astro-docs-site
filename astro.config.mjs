// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://deksu.github.io',
  base: '/astro-docs-site',
  integrations: [react(), keystatic()]
});

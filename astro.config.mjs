// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import keystatic from '@keystatic/astro';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  ...(isProd
    ? {
        site: 'https://deksu.github.io',
        base: '/astro-docs-site',
      }
    : {}),
  integrations: [react(), ...(isProd ? [] : [keystatic()])],
});

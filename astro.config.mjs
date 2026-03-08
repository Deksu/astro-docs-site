// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

const isProd = process.env.NODE_ENV === 'production';
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  ...(base && base !== '/' ? { base } : {}),
  integrations: [react(), ...(isProd ? [] : [keystatic()])],
});

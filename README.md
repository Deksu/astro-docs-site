# Astro Design System Docs

High‑performance documentation site for our design system, built with Astro and Keystatic.

## Quick Start

```sh
npm install
npm run dev
```

## Keystatic Cloud Setup

1. Create a Keystatic Cloud project.
2. Set the environment variable in `.env`:

```env
KEYSTATIC_CLOUD_PROJECT=bravado/astro-docs-site
```

Optional branch prefix:

```env
KEYSTATIC_BRANCH_PREFIX=keystatic
```

3. Start the dev server and open the admin UI at:

```
http://localhost:4321/keystatic
```

## GitHub Pages Deploy

This repo is configured for GitHub Pages project hosting:

- `site`: `https://deksu.github.io`
- `base`: `/astro-docs-site`

These values are set in `astro.config.mjs`.

## Commands

| Command         | Action                              |
| :-------------- | :---------------------------------- |
| `npm install`   | Install dependencies                |
| `npm run dev`   | Start dev server at `localhost:4321`|
| `npm run build` | Build production site to `./dist/`  |
| `npm run preview` | Preview the build locally         |

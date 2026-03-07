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
PUBLIC_KEYSTATIC_CLOUD_PROJECT=bravado/astro-docs-site
```

Optional branch prefix:

```env
PUBLIC_KEYSTATIC_BRANCH_PREFIX=keystatic
```

3. Start the dev server and open the admin UI at:

```
http://localhost:4321/keystatic
```

Note: Keystatic’s local admin routes are only enabled in development. GitHub Pages builds are fully static, so use Keystatic Cloud’s hosted editor for production content updates.

## GitHub Pages Deploy

This repo is configured for GitHub Pages project hosting:

- `site`: `https://deksu.github.io`
- `base`: `/astro-docs-site`

These values are set in `astro.config.mjs`.

Keystatic Cloud requires `PUBLIC_KEYSTATIC_CLOUD_PROJECT` at build time so the admin UI can load. The GitHub Pages workflow sets it automatically for production builds.

## Commands

| Command         | Action                              |
| :-------------- | :---------------------------------- |
| `npm install`   | Install dependencies                |
| `npm run dev`   | Start dev server at `localhost:4321`|
| `npm run build` | Build production site to `./dist/`  |
| `npm run preview` | Preview the build locally         |

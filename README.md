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

## Static.app Manual Deploy

This site can also be hosted on Static.app by uploading only the built `dist/` output.

1. Build the site locally:

```sh
npm run build
```

2. Upload the contents of `./dist` to Static.app.
3. Replace the previously uploaded files when publishing an update.

Important notes:

- Do not upload the whole project folder. Only upload `dist/`.
- The generated site is small; the large local project size mostly comes from `node_modules`.
- `astro.config.mjs` now reads `SITE_URL` and `BASE_PATH` from environment variables, so a normal build works for root-hosted Static.app sites.

## GitHub Pages Deploy

This repo can also be built for GitHub Pages project hosting:

- `site`: `https://deksu.github.io`
- `base`: `/astro-docs-site`

Build with:

```sh
SITE_URL=https://deksu.github.io BASE_PATH=/astro-docs-site npm run build
```

Keystatic Cloud requires `PUBLIC_KEYSTATIC_CLOUD_PROJECT` at build time so the admin UI can load. The GitHub Pages workflow sets it automatically for production builds.

## Commands

| Command         | Action                              |
| :-------------- | :---------------------------------- |
| `npm install`   | Install dependencies                |
| `npm run dev`   | Start dev server at `localhost:4321`|
| `npm run build` | Build production site to `./dist/`  |
| `npm run preview` | Preview the build locally         |

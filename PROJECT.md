# Project Documentation

## Project Goal
Build a high‑performance, accessible documentation site for our design system, with a clean UI, fast navigation, and editor‑friendly content.

## Stack & Architecture
- **Framework:** Astro
- **UI Logic:** React Aria Components (headless)
- **Styling:** CSS Modules + `src/styles/tokens.css`
- **Content:** Keystatic (Markdoc) in `src/content/docs`
  - Note: We briefly tried Pages CMS, but it felt too buggy and limited for our needs, so we reverted back to Keystatic. We may evaluate Keystatic Cloud later.
  - Keystatic Cloud is the intended path for GitHub‑backed edits (Designer‑to‑PR workflow).
- **Static hosting option:** Static.app works for Astro static output if we upload only `dist/`. This is worth considering in other static-site projects where simple file hosting is enough and we do not need the host to replace the CMS/build workflow.

**Layout structure**
- `src/layouts/Layout.astro` defines the 3‑column shell (header, sidebar nav, content, TOC).
- Pages live under `src/pages` with content sourced from Keystatic.
- Tokens pages are standalone Astro pages with JSON‑backed data.

## Key UI/UX Decisions (Today’s Work)
- Added a **Tokens** section with:
  - `/tokens/overview`
  - `/tokens/color`
  - `/tokens/typography`
- Introduced a **tokens JSON data model** at `src/data/tokens.json`.
- Built reusable **token UI components**:
  - group cards, tables, swatches, badges.
- Added **copy‑to‑clipboard** interactions for token names (swatches and typography tables).
- Implemented **inline search UI** with:
  - result dropdown
  - clear button
  - Cmd/Ctrl+K focus shortcut
- Added **TOC active state** highlighting (no width shift).

## Data Sources
- `src/styles/tokens.css` is the styling source of truth.
- `src/data/tokens.json` drives token overview pages.

## Navigation & IA
- **Getting Started** (Keystatic docs)
- **Foundations** (Colors, Typography)
- **Components** (Keystatic docs)
- **Tokens** (Overview, Color, Typography)

## Tests
- **Unit tests:** `npm run test:unit` (Vitest)
- **E2E tests:** `npm run test:e2e` (Playwright)
- **Full suite:** `npm test`

## Known Gaps / Next Steps
- Keyboard navigation in search results.
- Extend token coverage (spacing, radius, shadow).
- Consider theme/dark‑mode support when needed.
 - Connect Keystatic admin to GitHub (Designer‑to‑PR workflow) via Keystatic Cloud.
 - Ensure GitHub Pages build uses `PUBLIC_KEYSTATIC_CLOUD_PROJECT`.

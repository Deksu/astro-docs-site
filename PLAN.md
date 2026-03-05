# Design System Documentation Site Plan

This project is a high-performance, accessible documentation site for our company design system.

## Stack
- **Framework**: Astro
- **UI Logic**: React Aria Components (Headless)
- **Styling**: CSS Modules
- **CMS**: Pages CMS

## Next Steps

### 1. Design Tokens & Styling
- Define CSS Variables in `src/styles/tokens.css`.
- Set up a global reset in `src/styles/global.css`.

### 2. Layout (OpenAI Style)
- Build the 3-column shell (Navigation, Content, TOC).
- Style using CSS Modules for clean, non-leaking styles.

### 3. Components
- Create atomic components (Button, Link, Input) using React Aria Primitives.
- Ensure 100% accessibility compliance.

### 4. Admin UI (Pages CMS)
- Install and configure Pages CMS.
- Connect to GitHub for the "Designer-to-PR" workflow.

## Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

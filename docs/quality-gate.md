# Comprehensive Testing Suite & CI Implementation Plan

Implement an enterprise-grade testing and quality assurance suite exceeding expected standards, including unit, component, integration, and end-to-end (E2E) testing with high code coverage, strict linting, typechecking, and a robust GitHub Actions CI workflow required for branch merges.

---

## User Review Required

> [!IMPORTANT]
> **Testing Architecture**:
> - **Unit & Component Testing**: [Vitest](https://vitest.dev) + [@testing-library/react](https://testing-library.com) + `jsdom` + `@vitest/coverage-v8` with strict coverage threshold (>90%).
> - **End-to-End (E2E) Testing**: [Playwright](https://playwright.dev) testing user flows, video modals, dropdowns, keyboard accessibility, OS detection, responsive viewports (Desktop, Mobile, Tablet), and canvas interactions.
> - **Linting & Code Quality**: ESLint (Next.js Core Web Vitals + TypeScript) + Typechecking (`tsc --noEmit`).
> - **GitHub Actions CI Pipeline**: Matrix testing with multi-job pipeline (`lint-and-typecheck`, `unit-coverage`, `e2e-tests`, `build`).

---

## Proposed Changes & Test Architecture

### 1. Test Dependencies & Scripts
Install:
- `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `@vitest/coverage-v8`
- `@playwright/test`

Update `package.json` scripts:
- `test`: `vitest run`
- `test:watch`: `vitest`
- `test:coverage`: `vitest run --coverage`
- `test:e2e`: `playwright test`
- `test:e2e:ui`: `playwright test --ui`
- `typecheck`: `tsc --noEmit`
- `lint`: `eslint`
- `ci`: `npm run typecheck && npm run lint && npm run test:coverage && npm run build`

---

### 2. Configuration Files
- [NEW] `vitest.config.ts`: Vitest setup with React plugin, jsdom environment, path aliases (`@/*`), setup file, and coverage thresholds.
- [NEW] `vitest.setup.ts`: Polyfills for `matchMedia`, `ResizeObserver`, `IntersectionObserver`, `HTMLCanvasElement.prototype.getContext`, and clipboard APIs.
- [NEW] `playwright.config.ts`: Playwright configuration with webServer support (auto-launching local Next.js dev/preview server), multi-device matrix (Desktop Chrome, Firefox, Safari WebKit, Mobile Chrome, Mobile Safari).

---

### 3. Unit & Component Test Specs (Targeting >90% Coverage)

#### [NEW] `src/config/site.config.test.ts`
- Validates full siteConfig structure, required URLs, download platform definitions, feature items, blog metadata, and context menu actions.

#### [NEW] `src/lib/utils.test.ts`
- Tests `cn()` class merging, handling undefined/conditional classes.
- Tests `detectUserOS()` under simulated navigator userAgents (macOS Apple Silicon, Intel, Windows, Linux, undefined fallback).

#### [NEW] `src/components/ui/*.test.tsx`
- `Button.test.tsx`: variants (primary, secondary, glass, outline, ghost), icon placements, external link rendering, disabled states, click handlers.
- `Card.test.tsx`: variants (glow, glass, bordered), hover states, children rendering.
- `CustomCursor.test.tsx`: hover transitions, mouse move coordinates, label rendering, click triggers.

#### [NEW] `src/components/navigation/*.test.tsx`
- `Header.test.tsx`: scroll opacity behavior, brand logo presence, Remote Control button visibility.
- `DropdownMenu.test.tsx`: mouse enter/leave triggers, keyboard toggle, item and badge rendering, external link icons.
- `LogoContextMenu.test.tsx`: right-click custom context menu opening, clipboard copy SVG, outside click dismissal.
- `MobileMenu.test.tsx`: hamburger drawer toggle, accordion submenu expansion, download CTA.

#### [NEW] `src/components/hero/*.test.tsx`
- `HeroSection.test.tsx`: headline, gradient text, CTAs, video trigger, particle canvas mount.
- `ParticleCanvas.test.tsx`: canvas creation, resize listener, mousemove reactivity.
- `VideoModal.test.tsx`: open/closed state, iframe embedding, ESC key dismiss, backdrop click dismiss, body scroll lock.

#### [NEW] `src/components/showcase/*.test.tsx`
- `StatementSection.test.tsx`: vision statement copy, floating glyph badges, styling.
- `FeatureExplorer.test.tsx`: tab switching between Monorepo, Cartridges, Uberedux, Design System; terminal snippet display; code copy button with copied state; design tokens simulation.
- `UseCaseSlider.test.tsx`: developer role carousel navigation, next/prev slide updates, video modal opening.
- `SolutionsSection.test.tsx`: developer vs enterprise tier cards, checkmark list rendering, action buttons.
- `BlogSection.test.tsx`: category tags, dates, publication summaries, pagination next/prev navigation.
- `DownloadBanner.test.tsx`: email sign-up submission, confetti trigger, CLI bootstrap copy.
- `Footer.test.tsx`: columns, legal links, Goldlabel copyright notice.
- `page.test.tsx`: full integration smoke test verifying that all 7 core sections mount cleanly in order.

---

### 4. End-to-End Test Matrix (`e2e/*.spec.ts`)
Playwright tests executed across multiple browser engines (**Chromium**, **Firefox**, **WebKit**, **Mobile Chrome / Pixel 5**):

- `landing-page.spec.ts`: full-page load, title/meta checks, smooth scrolling on anchor click.
- `navigation.spec.ts`:
  - Hovering and opening dropdown menus.
  - Right-click on NX logo to open custom context menu and copy SVG.
  - Responsive mobile drawer accordion expansion.
- `hero-and-video.spec.ts`:
  - Playing YouTube video modal from the hero preview frame.
  - Dismissing video lightbox on ESC key press.
- `feature-explorer.spec.ts`:
  - Switching between tabs (Monorepo, Cartridges, Uberedux, Design System).
- Verifying code snippet display and terminal output.
- Interacting with Copy Code button.

#### [NEW] `e2e/use-cases-and-solutions.spec.ts`
- Use case slider buttons, active card transitions, watch case modal launch.

#### [NEW] `e2e/download-flow.spec.ts`
- Verifying OS detection auto-highlights recommended platform.
- Copying shell install command to clipboard.
- Interacting with download buttons.

---

### 5. GitHub Actions CI Workflow

#### [NEW] `.github/workflows/ci.yml`
- Triggers on `push` to `main`/`master` and all `pull_request` events.
- **Job 1: Lint & Typecheck**: `npm run lint` and `npm run typecheck`.
- **Job 2: Unit & Component Tests**: `npm run test:coverage` with coverage report upload.
- **Job 3: End-to-End Tests**: Multi-browser matrix (Chromium, Firefox, WebKit) running Playwright with Next.js webServer.
- **Job 4: Production Build**: `npm run build` validating production output.

---

## Verification Plan

### Automated Tests
```bash
# 1. Typecheck
npm run typecheck

# 2. Linting
npm run lint

# 3. Unit & Component tests with coverage
npm run test:coverage

# 4. Playwright E2E tests
npm run test:e2e

# 5. Production build
npm run build
```

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic homepage for Lin Long (龍麟), a CS master student at Zhejiang University. Static single-page site showcasing publications, experience, and news.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build (static export to `out/`)
- `npx next lint` — run ESLint (note: ESLint is ignored during builds via `next.config.ts`)
- `npm run deploy` — build + export + deploy to GitHub Pages via gh-pages

No test framework is configured.

## Architecture

- **Next.js 15 App Router** with static export (`output: "export"`)
- **Single-page app**: all content lives in `app/page.tsx` (a `'use client'` component)
- `app/layout.tsx` — root layout with metadata
- `app/globals.css` — Tailwind directives only
- `utils/path.ts` — base path helpers (currently unused/commented out in page.tsx)

## Key Configuration Details

- **Static export**: `output: "export"` with `distDir: "out"` in `next.config.ts`
- **GitHub Pages base path**: production uses `basePath: "/llongme"` and `assetPrefix: "/llongme/"` — all asset/link paths must work with this prefix
- **Images**: `unoptimized: true` (required for static export)
- **Path alias**: `@/*` maps to project root (tsconfig.json)
- **Local fonts**: Outfit font family + ChunLianXingShuZiTi (Chinese calligraphy) loaded via `next/font/local` in page.tsx
- **Styling**: Tailwind CSS 3 with default config; design uses gray-100 background with white card components

## Content Structure in page.tsx

All site data (publications, experiences, events) is defined as inline arrays in the `Home` component. The page sections are: About (profile), Experience, News (expandable list), Preprints, Publications, Misc. Publication authors use `dangerouslySetInnerHTML` to render bold/italic markup for author names.

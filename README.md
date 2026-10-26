# Madhav Manoharan — Portfolio

Custom content-design portfolio built with Astro and deployed through GitHub Pages.

## What this repository is

This repository contains **public-safe portfolio code and content only**. Raw IBM evidence, internal screenshots, Slack conversations, private Figma files, Jira tickets, customer data, and unreleased product information must never be committed here.

## Technology

- Astro
- Markdown content collections
- CSS design tokens
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Build

```bash
npm run build
npm run preview
```

## Where things live

- `src/site.config.ts` — name, positioning, links, résumé path
- `src/content/work/` — one Markdown file per case study
- `src/content.config.ts` — required fields for every case study
- `src/components/` — reusable portfolio UI
- `src/pages/` — Home, Work, About, dynamic case-study route
- `src/styles/global.css` — visual tokens and global typography/layout
- `public/assets/` — public-safe images and downloadable files
- `PORTFOLIO-SYSTEM.md` — maintenance guide for future updates
- `PUBLICATION-CHECKLIST.md` — confidentiality and launch checks

## Draft vs public case studies

Every project has a `published` field in frontmatter.

- `published: false` — visible locally during development, excluded from production builds
- `published: true` — included in the deployed public portfolio

This prevents unfinished or unreviewed IBM material from accidentally appearing on the live site.

## Deployment

The included GitHub Action builds the site when `main` changes and deploys `dist/` to GitHub Pages.

After the repository is on GitHub:

1. Open **Settings → Pages**.
2. Set the source to **GitHub Actions**.
3. Push to `main`.
4. GitHub Actions builds and publishes the site.

The Astro config automatically detects whether the repository is a normal project site (`username.github.io/repo`) or a personal root site (`username.github.io`).

## Current status

**v0.1 — architecture scaffold.**

The copy, typography, color palette, project selection, screenshots, and final case-study narratives are intentionally not final yet.

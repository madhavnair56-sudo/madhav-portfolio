# Portfolio system

This file exists so a future ChatGPT session or collaborator can understand the site quickly without reverse-engineering it.

## Design intent

The portfolio is **content-design first**. It should feel editorial, restrained, product-oriented, and evidence-led rather than like a SaaS marketing template.

The public site should communicate one clear professional identity while allowing projects to demonstrate wider strengths across:

- Product content design
- UI / UX content
- Content systems and terminology
- Technical/product content
- Product marketing and GTM content
- Product thinking
- Cross-functional influence

## Content principle

A case study should show:

**problem → understanding → collaboration → decisions → contribution → delivery → evidence/outcome**

Do not publish a project merely because work exists.

## Content architecture

Each case study is a Markdown file in `src/content/work/`.

Required metadata is defined in `src/content.config.ts`.

Useful fields:

- `title`
- `eyebrow`
- `summary`
- `year`
- `period`
- `role`
- `team`
- `tags`
- `featured`
- `published`
- `order`
- `accent`
- `confidentiality`
- `decisions`
- `outcomes`

### `featured`

Controls whether a project is eligible for the homepage selected-work section.

### `published`

The safety switch. Keep `false` until the project is approved for public viewing.

### `decisions`

Reusable structured evidence for before/after/reasoning moments. Example:

```yaml
decisions:
  - label: "Terminology"
    before: "Old term"
    after: "New term"
    rationale: "Why the change better matched product behavior and user understanding."
```

### `outcomes`

Only include claims supported by evidence. Never invent metrics.

## Visual system

Current tokens in `src/styles/global.css` are **provisional**.

The intended direction is:

- warm neutral background
- near-black typography
- restrained accent usage
- large editorial headings
- generous whitespace
- project visuals supplying much of the color
- minimal decorative UI
- responsive by default
- reduced-motion support

## Images

Only public-safe assets belong in `public/assets/`.

Recommended project organization later:

```text
public/assets/work/
  concert-content-system/
    cover.webp
    decision-01.webp
  secure-coder/
    cover.webp
```

Use descriptive filenames and provide meaningful alt text when images are added to components.

## Adding a new project

1. Create `src/content/work/project-name.md`.
2. Copy the metadata structure from an existing project.
3. Keep `published: false`.
4. Add sanitized/public-safe assets only.
5. Draft the case study.
6. Run confidentiality review.
7. Run accessibility/content QA.
8. Change `published: true` only when ready.
9. Commit and push.

## Six-month update workflow

When updating through ChatGPT:

1. Provide the current repository or connected GitHub repo.
2. Provide the new project evidence separately, including confidentiality notes.
3. Ask ChatGPT to update the project inventory first.
4. Decide whether the work is flagship, short case study, project card, interview-only, or archive-only.
5. Update/create the Markdown entry and any reusable components required.
6. Preview before publishing.
7. Commit only public-safe material.

## Future improvements already anticipated

- final font selection
- custom project covers
- image/figure component with captions and alt text
- before/after visual component with images
- collaboration/team-map component
- résumé download
- LinkedIn/contact links
- metadata/Open Graph images
- custom domain
- analytics only if useful and privacy-appropriate

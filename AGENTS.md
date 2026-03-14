# AGENTS.md

## Purpose

This repository is a static, one-page, responsive timeline site.
It contains plain HTML and CSS with no framework or build pipeline.

Primary files:
- `index.html`
- `styles.css`
- `README.md`
- `CNAME`

Use this guide when making changes as an agent.

---

## Quick Start

- This is a static site. There is no compile/build step.
- Prefer minimal, surgical edits.
- Keep layout responsive across mobile and desktop.
- Preserve the chronological timeline structure and visual rhythm.
- Avoid introducing heavy tooling unless explicitly requested.

---

## Environment Rules

- `flake.nix` is currently **not** present.
- Run commands directly (no `nix develop` wrapper needed today).
- If a `flake.nix` with `devShells.default` is added later, run commands as:
  - `nix develop -d <COMMAND>`

---

## Build / Run Commands

### Local preview server

- Python:
  - `python3 -m http.server 8080`
- Node (if installed):
  - `npx serve .`
- Then open:
  - `http://localhost:8080`

### Build

- There is no build step.
- Treat "build" as "serve and verify rendering."

---

## Lint / Validation Commands

No lint tooling is configured in-repo.
Use lightweight validation commands if available on the machine.

### HTML checks

- Basic parse check:
  - `tidy -qe index.html`
- Alternative:
  - `xmllint --html --noout index.html`

### CSS checks

- If `stylelint` is available globally:
  - `stylelint "styles.css"`

If these tools are unavailable, do manual review and visual verification.

---

## Test Commands

No automated tests currently exist.

### Full "test" workflow (manual)

1. Start local server:
   - `python3 -m http.server 8080`
2. Open page and verify:
   - Timeline alternates left/right on desktop
   - Timeline collapses correctly for <= 768px and <= 480px
   - Text remains readable
   - Images scale without overflow
   - No horizontal scroll
3. Verify browser console is clean.

### Running a single test

There is no test runner yet, so "single test" means a single manual scenario.
Examples:
- "Mobile layout at 375px width"
- "One specific timeline entry rendering"
- "Marker alignment for right-side card"

Document what scenario you validated in your PR or change notes.

---

## Code Style: HTML

- Use semantic HTML where possible.
- Keep existing indentation style (4 spaces in this repo).
- Preserve class naming patterns already in use:
  - `timeline-*`
  - modifiers like `.left` / `.right`
- Keep structure predictable:
  - `timeline-item` -> `timeline-content-wrapper` -> `timeline-content`
- Use descriptive `alt` text for images.
- Do not inline CSS in HTML.
- Avoid inline JS unless explicitly requested.
- Keep the file UTF-8 compatible (existing content includes Swedish characters).

---

## Code Style: CSS

- Follow existing formatting style:
  - 4-space indentation
  - one declaration per line
  - clear section grouping
- Keep selectors readable and moderately specific.
- Prefer class selectors over element/id selectors for component styling.
- Reuse existing color and spacing patterns unless redesign is requested.
- Preserve responsive behavior at existing breakpoints:
  - `@media (max-width: 768px)`
  - `@media (max-width: 480px)`
- Avoid `!important` unless absolutely necessary.
- Keep transitions subtle and purposeful.

---

## Naming Conventions

- Classes: kebab-case, component-oriented.
  - Good: `.timeline-date-wrapper`
- Modifier classes: short and explicit.
  - Good: `.left`, `.right`
- Avoid unclear abbreviations in class names.

---

## Imports / Dependencies

- Current imports are limited to:
  - `<link rel="stylesheet" href="styles.css">`
- Do not add external CSS/JS frameworks by default.
- If adding a dependency, justify why native HTML/CSS is insufficient.

---

## Types / JavaScript Guidance

No JavaScript or TypeScript exists right now.

If script is introduced:
- Keep logic minimal and progressive-enhancement friendly.
- Prefer plain JavaScript unless TS is requested.
- If TypeScript is added, require strict mode and explicit types at boundaries.
- Do not add a bundler without explicit instruction.

---

## Error Handling Guidance

For static HTML/CSS, "error handling" means graceful rendering behavior:
- Missing image should not break layout.
- Long text should wrap cleanly.
- Content should remain accessible at small viewport widths.
- Avoid hardcoded heights that cause clipping.

If JS is added later:
- Fail gracefully with user-safe defaults.
- Guard DOM queries and nullable values.
- Log actionable errors, avoid noisy console spam.

---

## Accessibility Baseline

- Keep meaningful heading structure.
- Provide `alt` text on all meaningful images.
- Maintain sufficient color contrast.
- Ensure keyboard users can scroll and read all content.
- Do not rely on color alone to convey meaning.

---

## Change Scope Rules for Agents

- Keep edits focused on the user request.
- Do not perform broad rewrites unless asked.
- Preserve unrelated content and existing chronology.
- If placeholders are replaced, keep dimensions/layout consistent.
- Mention manual verification steps in your final notes.

---

## Recommended Commit Hygiene

- Small, focused commits.
- Commit message should explain why, not only what.
- Example:
  - `Improve timeline mobile spacing to prevent marker overlap`

---

## Definition of Done

A change is done when:
- HTML/CSS remains clean and readable.
- Page renders correctly on desktop and mobile.
- No new overflow/alignment regressions are introduced.
- Any new classes follow existing naming/structure.
- Manual checks were performed and documented.

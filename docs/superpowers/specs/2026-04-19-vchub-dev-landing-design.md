# vchub.dev Landing Redesign

## Goal

Replace current landing (year progress widget + email) with a single-page
project showcase built entirely from ASCII/box-drawing characters. Modern
landing layout, ASCII-style visuals.

## Stack

- `index.html` + `styles.css` + `main.ts` compiled to `main.js` via `tsc`
- No runtime dependencies. `typescript` as devDep only.
- Font: JetBrains Mono (Google Fonts or self-hosted)
- Deploy: GitHub Pages, `CNAME` -> `vchub.dev`

## Palette

- bg: `#0a0e14` (deep ink)
- text: `#d4d4d4`
- muted: `#6b7280`
- primary cyan: `#5ccfe6` (borders, `░▒▓█` blocks)
- teal: `#3aa7aa` (gradients)
- orange: `#ff9e3b` (beta, hover)
- yellow: `#ffcc66` (testing, links)
- green: `#95e454` (production)

## Status -> color mapping

| Status       | Color  |
|--------------|--------|
| PRODUCTION   | green  |
| BETA         | orange |
| TESTING      | yellow |
| LIVE         | cyan   |
| RUNNING      | cyan   |
| RESEARCH     | muted  |

## Layout

```
+-- header bar (full width) --------------+
|  vchub.dev                              |
+-----------------------------------------+

    +-- card --+ +-- card --+ +-- card --+
    | preview  | | preview  | | preview  |
    | desc     | | desc     | | desc     |
    | [STATUS] | [STATUS]   | | [STATUS] |
    | domain > | | ...      | | domain > |
    +----------+ +----------+ +----------+
    (3 cols desktop, 2 tablet, 1 mobile)

+-- footer -------------------------------+
|                  mail@vchub.dev (obf)   |
+-----------------------------------------+
```

- Header: thin bar, `vchub.dev` left-aligned in cyan.
- Grid: CSS Grid, 3/2/1 columns responsive, gap.
- Card: box-drawing frame (`┌─┐│└┘`). Title in top border
  (`┌── SubTick ──┐`). Inside: ASCII preview placeholder
  (`░▒▓█` gradient until real screenshots), description (2-3
  lines), status badge, link with `→`.
- Footer: obfuscated email, centered.

## Projects (copy)

| Project     | Description                                                           | Status     | Link              |
|-------------|-----------------------------------------------------------------------|------------|-------------------|
| SubTick     | Subscription tracker — renewals, spending, reminders. Web + Android.  | PRODUCTION | subtick.net       |
| Phity       | 5-minute adaptive workouts for people with sedentary lifestyle.       | BETA       | —                 |
| CybDash     | Real-time cyber threat intelligence dashboard.                        | BETA       | cybdash.com       |
| TrendRadar  | Scans the internet for unmet demand. One-feature-one-pain ideas.      | LIVE       | —                 |
| Astroscient | Science-based astrology decision-support system.                      | RUNNING    | astroscient.com   |
| DiffAlarm   | Broken link checker for SMB. Scheduled scans + email alerts.          | TESTING    | diffalarm.com     |
| RedMimic    | Pentest-as-a-Service for SMB. Market research phase.                  | RESEARCH   | —                 |

## Email obfuscation

- HTML entities for each char of `mail@vchub.dev`
- `mailto:` link built in TS on `DOMContentLoaded`
- Result: bots without JS + entity decoding see garbled text; users click
  a working link

## ASCII preview placeholder

Until real screenshots provided, each card shows a decorative ASCII
block built from `░▒▓█` gradient plus box-drawing. Unique pattern per
project so cards look distinct.

When screenshots arrive: `aalib.js` converts PNG -> ASCII, replaces
placeholder. Out of scope for v1.

## File structure

```
vchub.dev/
├── index.html
├── styles.css
├── main.ts          (source)
├── main.js          (compiled, committed)
├── tsconfig.json
├── CNAME
└── docs/superpowers/specs/*.md
```

Old files removed: `jquery.min.js`, year progress JS logic.

## Out of scope (v1)

- Real ASCII screenshots (placeholder only)
- Year progress widget (removed)
- Social links, bio, about section
- Analytics
- Dark/light toggle (dark only)

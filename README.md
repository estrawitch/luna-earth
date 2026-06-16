# AI Footprint Lab

AI Footprint Lab is a small frontend-only educational website about the
environmental and economic trade-offs of artificial intelligence. The first
version is intentionally simple: one homepage with a clear title, mission
statement, and three preview cards.

The site explains that AI can be useful while also depending on real-world
infrastructure such as servers, data centers, chips, electricity, and cooling.
The goal is balanced student-friendly learning, not fearmongering or hype.

## Tech Stack

- **Next.js:** runs the website and provides the app folder structure.
- **React:** builds the homepage as reusable UI pieces.
- **TypeScript:** checks the code for common mistakes.
- **Tailwind CSS:** styles the page with readable utility classes.

This project is frontend only. It does not use a backend, database, login,
secret keys, paid APIs, or live AI calls.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in a browser.

On Windows, you can also run one of these helper scripts:

```bash
.\run-homepage.ps1
```

or:

```bash
run-homepage.bat
```

Build the site for production:

```bash
npm run build
```

## Current App

- [Homepage](app/page.tsx) introduces AI Footprint Lab.
- [Global styles](app/globals.css) load Tailwind CSS and set the base font.
- [App layout](app/layout.tsx) sets page metadata and wraps the homepage.

## Current Product Docs

- [Simulation game spec](docs/current/simulation-game-spec.md)
- [Scope lock](docs/current/scope-lock.md)

## Archived Context

Older AI Footprint Lab material has been moved to
[docs/archive/ai-footprint-lab](docs/archive/ai-footprint-lab/). It is preserved
for reference and was used for this starter homepage.

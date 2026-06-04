# Water + Electricity + Air Quality Simulation Game

This repo now centers on a frontend-only educational simulation game where
students run a city utility system and balance water, electricity, budget,
reliability, and air-quality trade-offs. It is designed as a portfolio-ready
software project for explaining environmental systems in plain language: the
player can save water with no-water cooling, but must see the electricity,
pollution, and reliability consequences instead of treating conservation as a
one-variable problem.

The strongest review signal in this repo is the product framing. The current
documents define a scoped, teachable simulation that a beginner can build in
short lessons while still showing systems thinking, finite-resource modeling,
user-facing explanation, and careful handling of assumptions.

## Tech Stack And Why Chosen

- **Markdown product docs:** keeps the current scope readable, reviewable, and
  easy to revise before app scaffolding begins.
- **Frontend-only app target:** avoids backend, account, database, and API
  complexity so the project can focus on the simulation loop and learning
  experience.
- **Planned Next.js, React, TypeScript, and Tailwind CSS:** matches the current
  scope lock and gives the eventual implementation a modern deployable web
  stack with typed simulation state and beginner-readable UI components.
- **Static local data:** keeps scenarios, actions, formulas, sources, and
  assumptions transparent enough for students and reviewers to inspect.

## Current Product Docs

- [Simulation game spec](docs/current/simulation-game-spec.md)
- [Scope lock](docs/current/scope-lock.md)

## Archived Context

Older AI Footprint Lab material has been moved to
[docs/archive/ai-footprint-lab](docs/archive/ai-footprint-lab/). It is preserved
for reference, but it is no longer the active product direction.

## Bootstrap From Source

No dependency install is required yet. This repository currently contains
product planning documents only, not a scaffolded web app.

From a checked-out copy, start with the current product docs above and keep new
active-product notes under `docs/current/`.

## Day-to-Day Usage

- Update `docs/current/` for active simulation-game scope, formulas, screens,
  scenarios, and assumptions.
- Move superseded product ideas to `docs/archive/` instead of deleting them.
- Update this README when app scaffolding, commands, deployment, or product
  behavior changes.

## Commands And Flags

There are no README-documented project commands or command-line flags yet. Once
the app is scaffolded, this section should document install, local development,
type-checking, tests, and build commands with any meaningful options.

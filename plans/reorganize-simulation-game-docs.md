# Reorganize Simulation Game Docs

## Goal

Make the Water + Electricity + Air Quality Simulation Game the active product
for this repo, while preserving older AI Footprint Lab material as archived
context.

## Assumptions

- The simulation game is the current product direction.
- Old AI Footprint Lab documents are useful historical context, but should not
  appear as the active root-level project.
- This change is documentation organization only; it does not scaffold the app.

## Tasks

- [x] Confirm that the simulation game is the active product.
- [x] Move active simulation docs into `docs/current/`.
- [x] Move old AI Footprint Lab docs into `docs/archive/ai-footprint-lab/`.
- [x] Add a root README that points readers to the current product docs.
- [x] Add an archive note explaining why the old docs moved.
- [x] Verify the final tree, moved links, and git diff.

## Review Notes

- Keep archived documents intact except for path references that would otherwise
  break after the move.
- Do not delete old project material.

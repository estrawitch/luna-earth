# Slider UX Spec: Brain vs AI Efficiency Comparison Page

**Feature:** Page that compares how efficient a human brain is versus AI software when solving the same idea-generation task.

## 1) Objectives
- Help users understand how a human and AI perform on the same brief under one adjustable comparison.
- Use one slider as a clear control for contribution balance (Brain vs AI).
- Keep the framing transparent, educational, and easy to interpret.

## 2) Scope & Audience
- Scope: one interactive page (single-case/demo experience).
- Audience: product/design stakeholders, researchers, and curious users evaluating ideation workflows.
- Assumption: comparisons are benchmark scenarios for demonstration, not absolute truth claims.

## 3) User Experience
- **Primary controls:**
  - Single horizontal slider labeled `Brain ↔ AI`.
  - Real-time labels: `Brain-first`, `Hybrid`, `AI-first`.
  - Optional toggle for `Show one scenario` / `Show scenario set`.
- **Core story:** same problem statement + same constraints feed both “Brain” and “AI” tracks.
- **Primary output:** side-by-side efficiency cards and timeline visual.
- **Secondary output:** short explanatory outcome summary with metric-level winners.

## 4) Layout
- Hero
  - Claim headline
  - Single challenge description
  - Clarifying method note
- Slider section (center)
  - Left: `Brain-only`
  - Right: `AI-only`
  - Center: `50%` (balanced hybrid)
- Results section
  - Left column: Brain track metrics
  - Right column: AI track metrics
  - Under rows: timeline mini-chart, efficiency meter, recommendation line
- Bottom explainers
  - What changed at this slider position
  - assumptions / limitations
  - action row (`Run another scenario`, `Try own prompt`)

## 5) Slider Specs
- Type: single range input
- Numeric domain: `0–100`
- Default: `50`
- Step: `1` (display can snap visuals at key points)
- Snap points (labels only): `0`, `25`, `50`, `75`, `100`
- Interaction
  - updates on input (live)
  - reads as `Brain X% / AI Y%` where `Y = 100 - X`
  - transitions animate smoothly (<= 180ms)

## 6) Metrics
Each result set should expose:
- `time_to_first_viable_idea_sec`
- `ideas_generated`
- `usable_ideas`
- `quality_score_0_to_100`
- `effort_index`
  - Brain: cognitive effort proxy
  - AI: compute/token proxy
- `efficiency_index` (composite: quality x output rate / effort)
- `confidence`
- `repeatability`

## 7) Behavior by slider range
- `0–24`: Brain-dominant
  - Higher contextual depth cues
  - Higher variance
  - Strong “novelty depth” framing
- `25–49`: Brain-led hybrid
  - Brain seeds + AI expansion
  - balanced explanation
- `50`: Equal split
  - Show both paths converge/diverge
- `51–75`: AI-led hybrid
  - AI expands fast; human review remains visible
  - explicit caveat on dependence on prompt quality
- `76–100`: AI-dominant
  - higher throughput and repeatability
  - explicit caveat on dependence on prompt quality

## 8) States and edge cases
- Loading state: lightweight progress shimmer and “simulating…” label
- Empty state: first-run defaults to neutral values and instruction text
- Extreme states (`0`, `100`) must show limitations explicitly
- Accessibility state for screen readers: slider updates are announced in plain language

## 9) Accessibility
- Keyboard support: arrow keys and Home/End
- Proper labels and instructions (`aria-label`, `aria-valuenow`, units)
- Contrast-compliant color + pattern/shape distinction between Brain and AI bars
- Motion safety: honor `prefers-reduced-motion`

## 10) Copy tone
- Neutral and non-dogmatic
- Must include trust line: “Benchmarked examples only; outcomes vary by prompt, model, and context.”
- Avoid certainty language (“always better”, “guaranteed superiority”).

## 11) Acceptance criteria
- Slider movement updates visible metrics in < 300ms perceived response.
- For every 10-point interval, at least one metric visibly changes.
- Users can identify which side is winning by one metric without extra taps.
- All formulas/assumptions are explainable from inline help text.

## 12) Non-goals (v1)
- Not a formal scientific benchmark.
- Not a pricing calculator.
- Not a personalized diagnostic tool.

## 13) Suggested implementation notes
- Use a small state object for slider position and derived outputs.
- Precompute scenario outputs and interpolate where safe for continuity.
- Keep graph/animation updates decoupled from data fetch/update timing.

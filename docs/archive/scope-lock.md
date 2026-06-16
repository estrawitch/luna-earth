# Scope Lock: Water + Electricity + Air Quality Simulation Site (8 x 1h)

## 0) One-line project summary
A frontend-only educational site where students run a city utility simulation over ~12 weeks, balancing **water use**, **electricity usage**, and **air quality** (NOx / ozone risk), with finite resources and an explicit **no-water mode** that forces air cooling and raises pollution/cost.

## 1) Final scope lock (do not expand)
- Target users: high school and non-expert learners.
- Delivery target: complete in **8 one-hour lessons**.
- Stack: frontend only (Next.js/React/TypeScript/Tailwind style stack), static JSON/TS data, no backend, no external APIs, no user accounts.
- Core gameplay loop: each week players choose actions, run simulation tick, and view outcomes.
- Core constraint: all resources are finite (budget, water quota, maintenance capacity, infrastructure health).
- Required system feature: **No-Water option** exists and visibly increases electricity and air-impact risk.
- Hard non-goals: no real GIS, no real-time data/API, no advanced chemistry/hydraulics model, no multiplayer/backend.

## 2) Must-have functional pieces
1. Landing/mission page (plain-language framing + glossary).
2. Scenario runner (12–16 week turns).
3. Resource panel: budget, water quota, service reliability, maintenance/actions remaining.
4. Water panel: inflow, demand, supplied, shortage, losses/leaks, storage.
5. Electricity panel: kWh used, cost, and mode-based efficiency.
6. Air-quality panel: NOx proxy, ozone-risk index, AQ status.
7. Cooling mode control: Water / Hybrid / Air (No-Water mode).
8. Emergency fallback: if water is running out, drinkable public water can be used temporarily, with visible consequences (cost increase, public-health concern, and service reliability drops).
9. Event log: one-sentence “why changed” explanation each tick.
10. Win/loss summary after scenario.
11. Sources + assumptions page (explicit uncertainty + non-expert language).
12. README updated to match scope and features.

## 3) One-page 8-hour implementation plan
**Lesson 1:** Agree on what the project will do, what the game rules are, and what terms mean. Make a simple screen sketch.

**Lesson 2:** Set up the project files and pages. Put in a basic page structure and empty cards for stats.

**Lesson 3:** Build the water part first. Add logic for demand, water in system, leaks, shortage, and one week-at-a-time steps.

**Lesson 4:** Add electricity costs. Show how actions use power and spend money from the budget.

**Lesson 5:** Add the “no water” option. Let students switch cooling to Water / Hybrid / Air and show the tradeoff (more electricity + more air impact when no water is used).

**Lesson 6:** Add event weeks (heat wave, storm, equipment failure) and hard limits (running out of budget/water/health).

**Lesson 7:** Clean up how it feels to use. Add clear labels, short explanations, trend arrows, and simple accessibility checks.

**Lesson 8:** Final pass and finish line. Add sources, assumptions, final tuning, and a short demo story with final checks.

## 4) Acceptance list (Definition of done)
- A full scenario can run 12+ weeks without crash or negative/NaN state values.
- No-water mode is available and **always** changes outputs meaningfully (electricity + pollution + service effects).
- Finite resources can be exhausted; user cannot solve by infinite actions.
- Every turn includes at least one metric change tied to user choice.
- Air and water metrics are visible simultaneously and interpretable to non-experts.
- Failure and success conditions are explicit (shortage, overspend, environmental breach, final score).
- All major terms include short explanations for non-expert readers.
- README + scope doc + assumptions align with shipped behavior.

## 5) 20-minute completion focus (if running out of time)
Prioritize: (1) core tick engine, (2) no-water cooling tradeoff, (3) finite budget/water gates, (4) event log, (5) acceptance checks above, then finalize README and short demo notes.

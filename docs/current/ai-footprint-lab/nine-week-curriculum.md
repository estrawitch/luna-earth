Absolutely, KM. This is a strong project idea because it combines **environmental science, AI literacy, economics, data storytelling, and frontend engineering** into one portfolio piece.

The project should be framed as:

> **AI Footprint Lab:** an interactive website that helps students explore the real trade-offs behind AI: energy use, water/cooling, economic benefits, social value, and future sustainability solutions.

The content has a strong research base: the IEA projects global data-center electricity use could reach around **945 TWh by 2030**, while DOE/LBNL estimated U.S. data centers used about **176 TWh in 2023** and could rise to **325-580 TWh by 2028**. MIT also highlights that generative AI's footprint includes electricity demand, water for cooling, and hardware manufacturing impacts. ([IEA][1])

For the tech stack, **Next.js + React + TypeScript + Tailwind CSS** is a good choice because it teaches modern frontend fundamentals while still supporting static, frontend-only deployment. Next.js official docs cover `create-next-app`, TypeScript, ESLint, app routing, layouts, pages, and deployment; Tailwind has an official Next.js setup guide; TypeScript has beginner docs and a handbook; GitHub and Vercel support the GitHub-to-live-site workflow with Preview Deployments. ([Next.js][2])

---

# AI Footprint Lab: 9-Week Frontend Curriculum

## Assumptions

This plan assumes:

* 9 weeks
* 1-2 sessions per week
* Beginner student
* Frontend only
* No backend, database, login, paid API, secret key, or server-side AI call
* Static data stored inside the repo
* GitHub as the source of truth
* Vercel for deployment
* AI tools used as a **coding assistant**, not as a replacement for understanding

By the end, the student should have:

* A live deployed website
* A clean GitHub repo
* A strong README
* A sources page
* Interactive frontend features
* A portfolio-ready project explanation
* A basic understanding of prompting, debugging, React, TypeScript, Tailwind, and deployment

---

# Core App Features by Week 9

The final site should include:

1. **Landing page**

   * Hero section
   * Clear explanation of the project
   * Call-to-action buttons

2. **AI footprint overview**

   * Energy usage
   * Water/cooling
   * Hardware/manufacturing
   * Economic value
   * Social trade-offs

3. **Interactive data cards**

   * Statistics from credible sources
   * Each stat includes source, year, and plain-English explanation

4. **Trade-off explorer**

   * User selects an AI use case
   * Site shows benefits, costs, and sustainability questions

5. **Scenario calculator**

   * Frontend-only, estimate-style calculator
   * Clearly labeled as educational, not exact
   * Uses static assumptions

6. **Future solutions gallery**

   * Efficient chips
   * Renewable-powered data centers
   * Smaller models
   * Edge AI
   * Neuromorphic or brain-inspired computing

7. **Sources page**

   * IEA
   * DOE/LBNL
   * MIT
   * Google sustainability reports
   * IBM/Nature for neuromorphic computing examples

8. **Portfolio polish**

   * Responsive design
   * Accessibility
   * README screenshots
   * Deployment link
   * “What I learned” section

---

# Teaching Loop for Every Lesson

Use this pattern every time:

## 1. Explain the concept simply

Example:

> A React component is like a reusable LEGO piece for a website. Instead of writing one giant page, we build smaller pieces like `HeroSection`, `StatCard`, and `SourceCard`.

## 2. Give a tiny task

Example:

> Today, change the homepage headline and add two buttons.

## 3. Show the code

Only show the code needed for that tiny task.

## 4. Explain what changed

Example:

> We changed the text inside the `h1`, added a paragraph, and created two links styled like buttons.

## 5. Ask a check-for-understanding question

Example:

> Which part controls the text, and which part controls the styling?

---

# Prompting Framework to Teach Every Week

The student should use this every time they ask Codex, Cursor, or ChatGPT for coding help:

```text
Context:
Goal:
Current files:
Constraints:
Acceptance criteria:
Ask:
Error or screenshot, if any:
```

## Banned vague prompts

```text
fix it
make it better
build the whole app
add everything
it does not work
```

## Better prompt example

```text
Context:
I am building a frontend-only Next.js app called AI Footprint Lab.

Goal:
Update the HeroSection component so it introduces the website clearly.

Current files:
src/app/page.tsx
src/components/HeroSection.tsx

Constraints:
Use React, TypeScript, and Tailwind CSS.
Do not add a backend, API route, login, database, or external API.
Keep the code beginner-readable.
Add helpful comments.
Update README only if setup or usage changes.

Acceptance criteria:
- Hero has a headline
- Hero has a one-sentence subtitle
- Hero has two CTA buttons
- Layout works on mobile and desktop
- Buttons have accessible text

Ask:
Show the updated component code and explain the changes in beginner-friendly language.

Error or screenshot, if any:
None.
```

---

# Week 1: Project Setup, First Page, and GitHub Habits

## Weekly theme

**“Make the project real.”**

The goal is not to build a perfect app yet. The goal is to create the repo, understand the file structure, edit the homepage, commit changes, and deploy an early version.

## Learning goals

By the end of Week 1, the student can:

* Explain what a frontend app is
* Open the project files
* Understand that `page.tsx` controls the homepage
* Run the site locally
* Make a simple visual change
* Commit changes with a Conventional Commit
* Push to GitHub
* Understand what Vercel deployment does

## Technical concepts

* What a website is
* HTML structure
* CSS styling
* JavaScript behavior
* React components
* Next.js App Router
* TypeScript files
* Tailwind utility classes
* Git basics: add, commit, push
* README basics

## Setup commands

Use the official Next.js and Tailwind setup path.

```bash
npx create-next-app@latest ai-footprint-lab --typescript --eslint --app --src-dir --import-alias "@/*"
cd ai-footprint-lab
npm run dev
```

When asked during setup, choose:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ directory: Yes
App Router: Yes
Turbopack: Yes is okay
Import alias: @/*
```

## Tiny task

Edit the homepage so it says what the project is.

## Starter homepage code

File:

```text
src/app/page.tsx
```

Code:

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* The hero section is the first thing visitors see. */}
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
          AI Footprint Lab
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Explore the hidden environmental cost of AI.
        </h1>

        <p className="max-w-2xl text-lg text-slate-300">
          Learn how data centers use electricity, water, and hardware, then
          compare future solutions that could make AI more sustainable.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#lab"
            className="rounded-full bg-emerald-400 px-5 py-3 text-center font-semibold text-slate-950"
          >
            Start the Lab
          </a>

          <a
            href="#sources"
            className="rounded-full border border-slate-700 px-5 py-3 text-center font-semibold text-white"
          >
            View Sources
          </a>
        </div>
      </section>
    </main>
  );
}
```

## Explain what changed

* `main` wraps the whole page.
* `section` creates the hero area.
* `h1` is the main headline.
* `p` tags hold supporting text.
* `a` tags act like buttons.
* Tailwind classes control spacing, color, font size, and responsive layout.

## Prompting skill

Teach the student to describe one small goal at a time.

### Good Week 1 prompt

```text
Context:
I am a beginner building a frontend-only Next.js app called AI Footprint Lab.

Goal:
Make the homepage hero clearer and more polished.

Current files:
src/app/page.tsx

Constraints:
Use only React, TypeScript, and Tailwind CSS.
Do not add a backend, API, database, login, or external API.
Keep the code beginner-readable.
Use helpful comments.

Acceptance criteria:
- Keep the page simple
- Add a headline
- Add a subtitle
- Add two CTA buttons
- Make it responsive for mobile and desktop

Ask:
Update only src/app/page.tsx and explain each important change.

Error or screenshot, if any:
None.
```

## Git commits

Use small commits:

```bash
git add .
git commit -m "chore: create Next.js project"
```

```bash
git add .
git commit -m "feat: add homepage hero"
```

```bash
git add README.md
git commit -m "docs: add project overview"
```

## README update

Add:

```md
# AI Footprint Lab

AI Footprint Lab is a frontend-only educational website about the environmental and economic trade-offs of artificial intelligence.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel

## Project Rules

- No backend
- No database
- No paid APIs
- No secret keys
- No login
- Static data only
```

## Check-for-understanding question

> Why is it safer for this project to use static data files instead of secret API keys or a backend?

## Week 1 deliverable

A live or locally running homepage with a clear hero section and a basic README.

---

# Week 2: Research, Static Data, and Source Credibility

## Weekly theme

**“Turn research into website content.”**

This week teaches the student that strong projects are not just pretty. They need credible information.

## Learning goals

The student can:

* Collect trustworthy sources
* Separate claims from opinions
* Store facts in static data files
* Add source labels to website content
* Understand why citations matter

## Technical concepts

* Arrays
* Objects
* TypeScript types
* Static imports
* Mapping over data
* Source cards
* Content modeling

## Build tasks

Create:

```text
src/data/impactStats.ts
src/components/StatCard.tsx
src/components/StatsSection.tsx
```

The student should add 4-6 starter stats, such as:

* Global data-center electricity projection
* U.S. data-center energy growth
* Water/cooling issue
* Renewable energy or efficiency case study
* Neuromorphic or efficient chip example

Important: teach the student to avoid fake precision. For example, do not claim “one AI prompt uses exactly X water” unless the source clearly supports it. The safer approach is to say that exact per-query footprints vary by model, hardware, data center, electricity mix, and cooling method.

## Recommended sources for the app

Use these as the first research set:

* IEA for global AI/data-center electricity projections
* DOE/LBNL for U.S. data-center electricity demand
* MIT News for environmental impact framing
* Google sustainability report for a company case study
* IBM/Nature for efficient chip or neuromorphic computing examples

Google's 2025 sustainability page reports reduced data-center energy emissions in 2024, water replenishment, and clean energy procurement, which can be used as a case study while still asking whether company-level sustainability claims fully solve the broader problem. IBM's NorthPole research is useful for explaining how memory-near-compute and brain-inspired chip design can reduce data movement and improve efficiency for certain AI workloads. ([Sustainability][3])

## Prompting skill

Teach source-aware prompting.

```text
Context:
I am building the research data file for AI Footprint Lab.

Goal:
Create a TypeScript array of credible AI footprint statistics.

Current files:
src/data/impactStats.ts

Constraints:
Use static data only.
Each stat must include title, value, explanation, sourceName, sourceYear, and sourceUrl.
Do not invent numbers.
Mark uncertain or estimate-based claims clearly.
Keep explanations beginner-friendly.

Acceptance criteria:
- Include 5 statistics
- Each statistic has a source
- No vague claims like "AI uses tons of energy" without context
- The data shape is easy to map into React cards

Ask:
Create the TypeScript data structure and explain how each field will be used.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "feat: add static impact statistics"
```

```bash
git commit -m "feat: add statistic cards"
```

```bash
git commit -m "docs: add research source notes"
```

## Check-for-understanding question

> What is the difference between a statistic, a source, and an interpretation?

## Week 2 deliverable

A stats section powered by static TypeScript data.

---

# Week 3: Components, Props, and Reusable Design

## Weekly theme

**“Build with reusable pieces.”**

This week teaches the student that frontend apps should not be one giant file.

## Learning goals

The student can:

* Explain what a component is
* Pass props into a component
* Use reusable layouts
* Create consistent cards, buttons, and section headers
* Keep files organized

## Technical concepts

* Components
* Props
* TypeScript interfaces
* Reusable UI
* File organization
* Tailwind design patterns
* Responsive layout

## Build tasks

Create:

```text
src/components/HeroSection.tsx
src/components/SectionHeader.tsx
src/components/StatCard.tsx
src/components/CalloutBox.tsx
src/components/SiteFooter.tsx
```

Move homepage pieces out of `page.tsx`.

The homepage should become easier to read:

```tsx
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SiteFooter />
    </>
  );
}
```

## Prompting skill

Teach component-scoped prompts.

```text
Context:
I am organizing my Next.js homepage into reusable components.

Goal:
Move the hero section from src/app/page.tsx into src/components/HeroSection.tsx.

Current files:
src/app/page.tsx

Constraints:
Use React, TypeScript, and Tailwind CSS.
Do not change the visual design too much.
Keep comments beginner-friendly.
Do not add new libraries.

Acceptance criteria:
- HeroSection is in its own file
- page.tsx imports and renders HeroSection
- The page still looks the same
- Code is easier to read

Ask:
Show the new HeroSection file, the updated page.tsx file, and explain the import/export pattern.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "refactor: move hero into reusable component"
```

```bash
git commit -m "feat: add shared section header component"
```

## Check-for-understanding question

> Why is it better to use a `StatCard` component multiple times instead of copying and pasting the same card code?

## Week 3 deliverable

A cleaner component-based homepage.

---

# Week 4: Pros, Cons, and Trade-Off Storytelling

## Weekly theme

**“Teach nuance, not just doom.”**

The site should not say “AI is bad.” It should explain trade-offs.

## Learning goals

The student can:

* Organize information into categories
* Show both benefits and costs
* Create a balanced educational section
* Use data-driven rendering
* Explain environmental and economic trade-offs

## Technical concepts

* Static data arrays
* `.map()`
* Conditional styling
* Grid layouts
* Semantic HTML
* Accessible headings

## Build tasks

Create a section called:

```text
AI Trade-Off Explorer
```

Categories:

* Environmental costs
* Economic benefits
* Social benefits
* Local community concerns
* Future engineering solutions

Each card should answer:

```text
What is the issue?
Why does it matter?
Who benefits?
Who might be harmed?
What could reduce the impact?
```

## Prompting skill

Teach balanced prompts.

```text
Context:
I am building a balanced trade-off section for AI Footprint Lab.

Goal:
Create content cards that explain both benefits and costs of AI data centers.

Current files:
src/data/tradeOffs.ts
src/components/TradeOffCard.tsx

Constraints:
Use static data only.
Do not make one-sided claims.
Use beginner-friendly language.
Each card should include benefits, concerns, and possible solutions.
Keep the tone educational.

Acceptance criteria:
- At least 5 trade-off cards
- Each card has a title, category, benefit, concern, and solution
- The UI is easy to scan
- The content does not exaggerate

Ask:
Create the data structure and a React card component to display it.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "feat: add AI trade-off explorer"
```

```bash
git commit -m "docs: explain trade-off framing in README"
```

## Check-for-understanding question

> Why is “AI uses energy” less useful than explaining when, where, and why AI uses energy?

## Week 4 deliverable

A balanced trade-off section with reusable cards.

---

# Week 5: Interactive Scenario Calculator

## Weekly theme

**“Make the site interactive.”**

This is where the project starts feeling like a lab.

## Learning goals

The student can:

* Use React state
* Build a controlled form
* Calculate values from user input
* Display results instantly
* Label estimates honestly

## Technical concepts

* `"use client"`
* `useState`
* Forms
* Inputs
* Select dropdowns
* Number parsing
* Derived values
* Conditional rendering
* Educational disclaimers

## Build tasks

Create:

```text
src/components/ScenarioCalculator.tsx
```

The calculator should let users choose:

* AI use case: chatbot, image generation, coding assistant, video generation
* Usage level: low, medium, high
* Model type: small, medium, large
* Energy source: fossil-heavy grid, mixed grid, renewable-heavy grid
* Cooling type: air cooling, water cooling, advanced cooling

Important: do **not** pretend this gives exact real-world emissions. The calculator should say:

> This is a simplified educational scenario model. Real impacts depend on hardware, model size, data center efficiency, electricity mix, cooling system, and usage patterns.

## Prompting skill

Teach logic prompts and sanity checks.

```text
Context:
I am building a frontend-only educational scenario calculator for AI Footprint Lab.

Goal:
Create a React component where users choose an AI use case, model size, usage level, energy source, and cooling type. The component should show a simplified impact score.

Current files:
src/components/ScenarioCalculator.tsx
src/data/scenarioOptions.ts

Constraints:
Frontend only.
No backend.
No APIs.
No exact real-world claims.
Use static assumptions.
Clearly label results as educational estimates.
Use React state and TypeScript.
Keep the code beginner-readable with comments.

Acceptance criteria:
- User can change dropdowns
- Impact score updates immediately
- Result explanation changes based on choices
- Includes a disclaimer
- Works on mobile

Ask:
Create the component and explain how useState and derived calculations work.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "feat: add interactive scenario calculator"
```

```bash
git commit -m "docs: document calculator assumptions"
```

## Check-for-understanding question

> Why should this calculator use words like “scenario,” “estimate,” and “assumption” instead of claiming exact results?

## Week 5 deliverable

A working interactive calculator.

---

# Week 6: Future Solutions Gallery

## Weekly theme

**“Show how engineering choices can reduce harm.”**

This week gives the project optimism and innovation.

## Learning goals

The student can:

* Explain future AI sustainability solutions
* Build a data-driven gallery
* Use filters or tabs
* Connect technical ideas to environmental impact
* Avoid hype

## Technical concepts

* Filtered arrays
* Tabs
* Reusable cards
* Optional accordions
* Icons or emoji as visual aids
* Responsive grid
* Content hierarchy

## Solution topics

Include:

1. **Efficient chips**

   * Specialized hardware can reduce wasted computation.

2. **Renewable-powered data centers**

   * Cleaner electricity can reduce emissions, though grid timing and location still matter.

3. **Smaller models**

   * Not every task needs the largest model.

4. **Edge AI**

   * Some AI can run closer to the user or device.

5. **Better cooling**

   * Cooling design affects water and electricity needs.

6. **Neuromorphic computing**

   * Brain-inspired chips may reduce data movement and improve energy efficiency for certain workloads.

## Prompting skill

Teach research-to-feature prompting.

```text
Context:
I am adding a Future Solutions Gallery to AI Footprint Lab.

Goal:
Create a data-driven gallery of possible solutions for reducing AI's environmental footprint.

Current files:
src/data/solutions.ts
src/components/SolutionCard.tsx
src/components/SolutionsGallery.tsx

Constraints:
Static data only.
No hype.
Each solution needs a plain-English explanation, benefit, limitation, and example.
Use React, TypeScript, and Tailwind.
Keep comments beginner-friendly.

Acceptance criteria:
- At least 6 solution cards
- Each card includes benefit and limitation
- User can filter by category
- Design works on mobile and desktop
- Content stays balanced

Ask:
Create the data structure and components, then explain how filtering works.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "feat: add future solutions gallery"
```

```bash
git commit -m "feat: add solution category filters"
```

## Check-for-understanding question

> Why should every “solution” card also include a limitation?

## Week 6 deliverable

A solutions gallery that feels innovative but still honest.

---

# Week 7: Accessibility, Responsive Design, and Visual Polish

## Weekly theme

**“Make it usable by real people.”**

A strong university portfolio project should feel complete and thoughtful.

## Learning goals

The student can:

* Test mobile layout
* Use accessible headings
* Add alt text where needed
* Improve contrast
* Make buttons and links clear
* Use consistent spacing
* Explain design decisions

## Technical concepts

* Responsive Tailwind classes
* Semantic HTML
* Focus states
* Color contrast
* Keyboard navigation
* Section landmarks
* Mobile-first design

## Build tasks

Improve:

* Navbar
* Hero spacing
* Card layouts
* Footer
* Source section
* Button focus states
* Mobile readability

Add:

```text
src/components/SiteHeader.tsx
```

Suggested nav links:

```text
Overview
Trade-Offs
Calculator
Solutions
Sources
```

## Prompting skill

Teach review prompts.

```text
Context:
I am polishing the accessibility and responsive design of AI Footprint Lab.

Goal:
Review my components for accessibility, mobile layout, and beginner-readable code.

Current files:
src/components/SiteHeader.tsx
src/components/HeroSection.tsx
src/components/StatCard.tsx
src/components/ScenarioCalculator.tsx

Constraints:
Do not change the project structure unless necessary.
Use Tailwind CSS.
Keep the visual style consistent.
Do not add new libraries.

Acceptance criteria:
- Navigation works on mobile
- Buttons have visible focus states
- Headings are in logical order
- Text has good contrast
- Layout does not feel cramped on small screens

Ask:
Suggest improvements and show only the changed code sections.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "style: improve responsive layout"
```

```bash
git commit -m "fix: improve keyboard focus states"
```

```bash
git commit -m "docs: add accessibility notes"
```

## Check-for-understanding question

> Why does accessibility make the project stronger, even for users who do not use assistive technology?

## Week 7 deliverable

A polished, mobile-friendly, accessible site.

---

# Week 8: Testing, Debugging, README, and Portfolio Strength

## Weekly theme

**“Make it reliable and explainable.”**

This week teaches the student how to present the project professionally.

## Learning goals

The student can:

* Run a production build
* Debug common errors
* Read error messages
* Update README clearly
* Add screenshots
* Explain project decisions
* Prepare a portfolio case study

## Technical concepts

* Build checks
* Debugging workflow
* Error messages
* README structure
* Project screenshots
* Manual QA checklist
* Browser testing

## Manual QA checklist

The student should test:

```text
Homepage loads
Navbar links work
Stats render correctly
Calculator updates when inputs change
Sources are visible
Mobile layout works
No console errors
No broken links
README has setup instructions
Vercel deployment works
```

## README sections

Add:

```md
## Live Demo

## Project Goal

## Why This Matters

## Features

## Tech Stack

## Data Sources

## How to Run Locally

## What I Learned

## Future Improvements
```

## Help request template

Whenever the student asks for debugging help, require:

```text
1. What I was trying to do:
2. What happened instead:
3. Exact error message:
4. Relevant file:
5. What I already tried:
```

## Prompting skill

Teach debugging prompts.

```text
Context:
I am debugging my frontend-only Next.js project called AI Footprint Lab.

Goal:
Fix a build error before deploying to Vercel.

Current files:
src/components/ScenarioCalculator.tsx
src/data/scenarioOptions.ts

Constraints:
Use React, TypeScript, and Tailwind.
Do not add a backend or API.
Keep the fix beginner-readable.
Explain the cause of the error.

Acceptance criteria:
- npm run build passes
- The calculator still works
- No TypeScript errors
- Explain what caused the issue

Ask:
Help me debug this using the exact error message below.

Error or screenshot, if any:
[paste exact error here]
```

## Commit examples

```bash
git commit -m "fix: resolve calculator type error"
```

```bash
git commit -m "docs: expand README with setup and sources"
```

```bash
git commit -m "docs: add portfolio case study notes"
```

## Check-for-understanding question

> Why is an exact error message more useful than saying “it does not work”?

## Week 8 deliverable

A reliable project with a strong README and clean build.

---

# Week 9: Final Deployment, Demo, and University Portfolio Presentation

## Weekly theme

**“Ship it and explain it proudly.”**

This week turns the app into a portfolio artifact.

## Learning goals

The student can:

* Deploy with Vercel
* Explain the project in 60 seconds
* Walk through the code
* Discuss trade-offs
* Reflect on what they learned
* Prepare future improvements

## Technical concepts

* Production deployment
* Vercel preview deployments
* GitHub repo presentation
* README polish
* Portfolio writing
* Project demo flow
* Final QA

## Final demo script

The student should be able to say:

```text
AI Footprint Lab is an interactive educational website about the environmental and economic trade-offs of artificial intelligence.

I built it with Next.js, React, TypeScript, and Tailwind CSS. It is frontend-only, so it uses static data files instead of a backend, database, login system, or paid API.

The site teaches users about AI data-center energy usage, water and cooling concerns, economic benefits, and future solutions like efficient chips, renewable-powered data centers, smaller models, edge AI, and neuromorphic computing.

My goal was to make a balanced social-impact project that explains both the benefits and costs of AI, while helping users think critically about sustainable technology.
```

## Prompting skill

Teach presentation prompts.

```text
Context:
I finished a frontend-only project called AI Footprint Lab.

Goal:
Create a clear portfolio explanation for selective university applications.

Current files:
README.md
Live demo link
GitHub repo

Constraints:
Do not exaggerate.
Explain what I personally built and learned.
Mention the project is frontend-only.
Mention the research and social impact angle.
Keep it honest and polished.

Acceptance criteria:
- Includes a 2-sentence summary
- Includes a technical explanation
- Includes a social impact explanation
- Includes what I learned
- Includes future improvements

Ask:
Write a portfolio case study section for my README.

Error or screenshot, if any:
None.
```

## Commit examples

```bash
git commit -m "docs: add final project case study"
```

```bash
git commit -m "style: polish final homepage spacing"
```

```bash
git commit -m "docs: add live demo link"
```

## Check-for-understanding question

> What makes this project more impressive than a simple informational website?

## Week 9 deliverable

A live, polished, portfolio-ready project with a GitHub repo, Vercel deployment, and final README.

---

# Suggested Final Repo Structure

```text
ai-footprint-lab/
├── README.md
├── public/
│   └── screenshots/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── SiteHeader.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── StatCard.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TradeOffCard.tsx
│   │   ├── TradeOffExplorer.tsx
│   │   ├── ScenarioCalculator.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── SolutionsGallery.tsx
│   │   └── SiteFooter.tsx
│   ├── data/
│   │   ├── impactStats.ts
│   │   ├── tradeOffs.ts
│   │   ├── scenarioOptions.ts
│   │   ├── solutions.ts
│   │   └── sources.ts
│   └── types/
│       └── index.ts
```

---

# Suggested Grading Rubric

| Category         | Strong Evidence                                                          |
| ---------------- | ------------------------------------------------------------------------ |
| Technical skill  | Uses React components, props, state, TypeScript, and Tailwind correctly  |
| Research quality | Uses credible sources and avoids unsupported claims                      |
| Interactivity    | Includes calculator, filters, or trade-off explorer                      |
| Design           | Responsive, readable, consistent, accessible                             |
| Communication    | README clearly explains purpose, setup, features, and learning           |
| Git workflow     | Uses clean commits with Conventional Commit messages                     |
| Portfolio value  | Shows social impact, technical growth, and thoughtful trade-off analysis |

---

# The Strongest Portfolio Angle

The best version of this project is not:

> “AI is bad for the environment.”

The best version is:

> “AI has real environmental costs and real social value. AI Footprint Lab helps users explore the trade-offs and understand how engineering, policy, and design choices can shape a more sustainable future.”

That framing is much stronger for selective universities because it shows maturity, nuance, research ability, and technical execution.

[1]: https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai "Energy demand from AI – Energy and AI – Analysis - IEA"
[2]: https://nextjs.org/docs/app/getting-started "App Router: Getting Started | Next.js"
[3]: https://sustainability.google/google-2025-environmental-report/ "Sustainability Reports & Case Studies - Google Sustainability"

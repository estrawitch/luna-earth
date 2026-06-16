# AI Footprint Lab - Project Context for Codex

## Project Name

AI Footprint Lab

## One-Sentence Pitch

AI Footprint Lab is a portfolio-ready software-engineering project that demonstrates how to evaluate AI trade-offs in software development by balancing speed, quality, cost, maintainability, and environmental impact through evidence-based, interactive learning.

## Core Idea

This project explores a balanced question:

> AI is useful and powerful in software engineering, but what does it cost in developer productivity, code quality, reliability, infrastructure spend, and environmental impact?

The website should not argue that AI is simply good or bad.

Instead, it should help users understand:

- What AI is
- Why AI is useful
- How AI helps society
- Why AI needs servers, GPUs, electricity, cooling, and data centers
- What environmental trade-offs exist
- What economic benefits AI creates
- What economic costs AI can create
- How future technology might make AI more sustainable
- How people can use AI more responsibly

### GPU Efficiency Context (Neural Network Focus)

The site should explain that modern GPUs run neural networks efficiently by reducing wasted work, not just by being "faster" hardware.

At a beginner level, cover these core ideas:

1. **Data movement is often the biggest energy cost**
   - Modern chips spend significant energy moving weights, activations, and gradients between memory and compute units.
   - Explain concepts like cache locality and memory hierarchy as "how far data has to travel inside the chip."
   - Show that reducing memory bandwidth demands can reduce power use more than just adding raw FLOPs.

2. **Specialized compute matters for AI workloads**
   - Convolution, matrix multiply, and attention operations dominate many models.
   - Tensor cores / matrix engines can do these operations with much better utilization than general ALUs.
   - This makes the same workload faster and less wasteful when model and software use the hardware correctly.

3. **Quantization and lower precision lower cost**
   - FP16/BF16/INT8 execution lowers memory footprint and compute cost.
   - Good quantization preserves quality when done carefully but can reduce accuracy if overdone.
   - Good site language: trade-off between efficiency gain and potential quality drop.

4. **Pruning and sparsity reduce unnecessary work**
   - Remove redundant parameters (pruning) or skip near-zero operations (sparsity-aware kernels).
   - Better for inference cost and often smaller model size.
   - Emphasize practical limits: too much sparsity can hurt stability and accuracy.

5. **Model and architecture choices matter**
   - Distillation, smaller models for simpler tasks, and smarter routing (mixture-of-experts) can cut compute.
   - Batch sizing and input length management reduce overhead.
   - Dynamic batching and right-sizing saves time and energy in shared deployments.

6. **Chip and system-level design are linked**
   - Better interconnects, voltage/frequency controls, chiplet designs, and advanced cooling all reduce wasted power.
   - Site framing: hardware efficiency is not only the chip itself, but the whole stack (chip, software, datacenter).

7. **Thermal and power management are design constraints**
   - Throttling, DVFS (dynamic voltage/frequency scaling), and thermal-aware scheduling keep performance stable.
   - Running at lower stable power can improve energy per inference and reduce cooling burden.

8. **Software stack determines how close we get to theoretical gains**
   - Compilers, runtimes, operator fusion, and kernel optimization decide whether model code maps well to hardware.
   - Even efficient chips can be underused if software is not tuned for them.

A simple framing for users: "Efficient AI chips do three things well: use less precise math when safe, do less work, and keep data local."

Add this as a short educational module under the "Future Solutions" area, with a simple "Why it helps" line per bullet and one limitation per bullet.


The strongest framing is:

> How can software teams keep AI's productivity and quality gains while managing long-term cost, reliability, and environmental impact?

## Admissions-Ready Positioning

Every page, lesson, and deliverable should support the same portfolio narrative:

1. I can define a meaningful problem.
2. I can research using credible sources and admit uncertainty.
3. I can build a full frontend product, not just a concept deck.
4. I can communicate findings clearly to technical and non-technical readers.
5. I can reflect on what I learned and what to improve next.

Avoid:

- Overclaiming outcomes for university admission.
- Exaggerated language that sounds hype-heavy.
- Vague outcomes without measurable artifacts (live site, commit history, screenshots, source links, notes).?

## Student Context

This project is being built by a beginner high school student who is interested in:

- Environment
- Science
- AI
- Technology
- Social impact
- Education
- Selective-university portfolio preparation with a software engineering lens

The student is learning how to use Codex and ChatGPT as coding mentors.

The student is new to web development and should learn step by step.

This project should help the student demonstrate:

- Technical curiosity
- Research ability
- Communication skill
- Balanced thinking
- Social impact
- Environmental awareness
- AI literacy
- Ability to build and deploy a real web app
- Ability to use AI tools responsibly

Important: The project should be strong for a portfolio, but never claim or imply that it guarantees admission to any university.

## Target Audience

Primary audience:

- Middle school and high school students
- Teachers
- Parents
- Environmental science students
- Beginners curious about AI and sustainability

Secondary audience:

- University admissions readers
- STEM mentors
- School clubs
- Community workshop participants

The writing should be clear enough for a motivated high school student, software mentors, and admissions reviewers.

Avoid overly technical jargon unless it is explained simply.

## Admissions / Portfolio Goal

The project should look like a serious student-built social-impact technology project.

It should show:

1. A meaningful problem
2. Clear research
3. A working deployed website
4. Polished frontend design
5. Interactive learning features
6. Balanced pros and cons
7. Thoughtful use of sources
8. Community education potential
9. Evidence of iteration over 9 weeks
10. A strong final README and demo script

The ideal portfolio description:

> I built AI Footprint Lab, an interactive educational website that explains the environmental and economic trade-offs of artificial intelligence. The project combines environmental science, AI literacy, data visualization, and web development to help students think critically about how society can use AI responsibly.

## Project Scope

Frontend only.

No backend.

No database.

No paid APIs.

No secret keys.

No user login.

No live AI API calls.

No server-side data fetching required.

Use static data files in the repo.

The project should be deployable through GitHub and Vercel.

## Tech Stack

Preferred stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel

Use simple, beginner-readable code.

Avoid unnecessary packages.

If adding any package, explain why it is needed.

## Deployment Plan

Use GitHub as the source of truth.

Use Vercel for deployment.

The student should learn:

- GitHub stores the code.
- Vercel builds and hosts the website.
- A production deployment is the live public version.
- A preview deployment lets us test changes before merging or publishing.

## Portfolio Evidence Checklist

- Live production URL (Vercel or equivalent).
- Source code that is clean, understandable, and consistently organized.
- Research notes with dated, cited sources and uncertainty notes.
- One page explaining methodology and trade-off limits.
- A short demo script suitable for a 60-second portfolio explanation.
- A clear commit history with readable messages (even if only a few commits).

## Tone and Style

The site should feel:

- Educational
- Hopeful
- Balanced
- Clear
- Credible
- Modern
- Student-friendly
- Science-focused
- Social-impact focused

Avoid:

- Doom-only language
- Fearmongering
- "AI is evil"
- "Technology will destroy the world"
- Unsupported statistics
- Overclaiming
- Fake precision
- Too much jargon
- Overly corporate language

Use this framing instead:

- AI has benefits and costs.
- Resource use matters.
- Trade-offs are real.
- Future solutions are possible.
- Better design, policy, and technology can reduce harm.
- Students can understand and discuss these issues.

## Main Research Question

How can we explain the environmental and economic trade-offs of artificial intelligence in a way that is accurate, balanced, interactive, and understandable for students?

## Supporting Research Questions

### AI and Energy

- Why do AI systems use electricity?
- What are data centers?
- What are GPUs and why are they important for AI?
- How does AI training differ from AI inference?
- Why might AI increase electricity demand?
- How does the energy source matter?
- What is the difference between renewable and fossil-fuel-powered compute?

### AI and Water

- Why do some data centers use water?
- What role does cooling play?
- Why does water use depend on location, cooling method, and climate?
- How can data centers reduce water consumption?
- If a community is running out of water, can use drinkable/public water temporarily, but with clear consequences.

### AI and Economics

- What economic benefits can AI create?
- What new jobs, industries, and productivity gains might AI support?
- What economic costs can AI create?
- Who pays for grid upgrades, water use, land use, and infrastructure?
- How can communities benefit from or be harmed by data center growth?

### AI and Environment

- How can AI increase emissions?
- How can AI reduce emissions in other sectors?
- Can AI help climate modeling, energy grids, agriculture, transportation, or scientific discovery?
- What are the trade-offs between digital innovation and resource use?

### Future Solutions

- How can smaller models reduce compute needs?
- How can more efficient chips help?
- How can renewable-powered data centers reduce carbon impact?
- How can better cooling reduce water and electricity use?
- What is edge AI?
- What is neuromorphic computing?
- Why is the human brain an interesting comparison for energy-efficient intelligence?

### Community Impact

- How can this website help students learn?
- How can it be used in an environmental science class?
- How can it support a school club or library workshop?
- What discussion questions should students reflect on?
- How can the project encourage responsible AI use without shaming people?

## Key Source Anchors To Research And Cite

Use credible sources. Do not invent statistics.

Start with these source anchors:

### AI energy and data centers

International Energy Agency, Energy and AI report:
- Data center electricity consumption was estimated around 415 TWh in 2024.
- IEA projects data center electricity consumption could more than double to around 945 TWh by 2030.
- AI is one major driver of this growth.

Source:
https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai

### U.S. data center energy growth

U.S. Department of Energy / Lawrence Berkeley National Laboratory report:
- U.S. data center load growth has tripled over the past decade.
- It is projected to double or triple by 2028.

Source:
https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers

### Data center water use

Environmental and Energy Study Institute:
- Some large data centers can consume up to 5 million gallons of water per day.
- Water use depends heavily on facility size, cooling system, location, and climate.

Source:
https://www.eesi.org/articles/view/data-centers-and-water-consumption

### Brain-inspired / neuromorphic computing

MIT News:
- Brain-inspired computing is being researched as a possible path toward more energy-efficient AI.
- Use this as a future-solutions topic, not as a guaranteed solution.

Source:
https://news.mit.edu/2025/brain-power-behind-sustainable-ai-miranda-schwacke-1024

### Admissions / project framing

Harvard admissions criteria:
- Academics matter, but applications are evaluated using many factors including community involvement, leadership, extracurricular distinction, and personal qualities.

Source:
https://college.harvard.edu/resources/faq/what-admissions-criteria-do-you-use

Princeton admissions tips:
- Princeton looks for intellectual curiosity, academic excellence, and strong personal/extracurricular accomplishments.

Source:
https://admission.princeton.edu/apply/before-you-apply/helpful-tips

MIT Maker Portfolio:
- MIT describes the Maker Portfolio as a way to showcase projects requiring creative insight, technical skill, and hands-on learning.

Source:
https://mitadmissions.org/help/faq/maker-portfolio-slideroom/

### Coding and deployment

OpenAI Codex / GitHub:
- Codex can help write, review, and work with code.
- GitHub-connected repos can be used as project context.

Sources:
https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
https://help.openai.com/en/articles/11145903-connecting-github-to-chatgpt

Vercel GitHub deployment:
- Vercel can automatically deploy GitHub projects and provide preview deployments.

Source:
https://vercel.com/docs/git/vercel-for-github

## Important Research Rule

When adding statistics to the website:

- Cite the source.
- Include the year.
- Explain uncertainty.
- Avoid fake precision.
- Say "estimated" or "projected" where appropriate.
- Do not present one number as universal for all AI systems.
- Explain that energy and water impact varies by model size, data center, cooling system, location, electricity source, and usage volume.

Good wording:

> Estimates vary because AI systems differ in model size, hardware, data center efficiency, cooling method, electricity source, and how often users run them.

Bad wording:

> Every AI prompt uses exactly X amount of energy.

## Main Pages / Sections

The final site should include these major sections.

### 1. Homepage

Purpose:
Introduce the project and make the topic immediately interesting.

Hero message:

> AI feels invisible, but every answer depends on real-world infrastructure: servers, electricity, cooling, chips, and data centers.

Homepage should include:

- Clear title
- One-sentence mission
- Call-to-action buttons
- Short explanation of the issue
- Preview cards for key sections
- Balanced tone: benefits and costs

### 2. What Is The Hidden Cost Of AI?

Purpose:
Explain the infrastructure behind AI.

Cover:

- Data centers
- GPUs
- Electricity
- Cooling
- Water
- Hardware manufacturing
- Grid demand
- Training vs inference

Beginner explanation:

> AI does not live in the air. It runs on computers in data centers. Those computers need power, cooling, networking, and physical materials.

### 3. Pros And Cons Of AI

Purpose:
Show balanced thinking.

Benefits to include:

- Education support
- Climate modeling
- Scientific research
- Accessibility tools
- Smarter energy grids
- Productivity
- Medical and environmental research

Costs to include:

- Electricity demand
- Water/cooling demand
- Carbon emissions depending on energy source
- Hardware waste
- Local community impacts
- Unequal access
- Cost of infrastructure

### 4. Statistics Dashboard

Purpose:
Show key statistics visually.

Possible stat cards:

- Estimated global data center electricity use in 2024
- Projected data center electricity use in 2030
- U.S. data center load growth trend
- Large data center water use example
- Why estimates vary

Each stat card should include:

- Number
- Label
- Plain-language explanation
- Source
- Year
- Caveat

### 5. Interactive Resource Impact Calculator

Purpose:
Let users explore trade-offs.

Frontend-only educational calculator.

Inputs:

- Number of users
- Prompts per user per day
- Model size: small, medium, large
- Energy source: fossil-heavy, mixed grid, renewable-heavy
- Cooling efficiency: low, average, high
- Task type: text, image, video, training-like workload

Outputs:

- Relative electricity impact: low / medium / high
- Relative water/cooling concern: low / medium / high
- Relative carbon concern: low / medium / high
- Suggested mitigation
- Explanation of assumptions

Important:
The calculator should be labeled as educational, not a precise scientific measurement.

### 6. Brain vs AI Energy Efficiency

Purpose:
Use the human brain as a memorable comparison.

Core idea:

> The human brain performs complex intelligence with very low power compared with modern computing infrastructure. Researchers are studying brain-inspired computing to make AI more efficient.

Cover:

- Brain efficiency
- Why biological intelligence is inspiring
- Neuromorphic computing
- Spiking neural networks at a high level
- Why this is promising
- Why it is not a magic solution yet

Avoid overclaiming.

### 7. Future Solutions

Purpose:
Make the project hopeful and solution-oriented.

Solutions to explain:

- Smaller AI models
- More efficient chips
- Renewable-powered data centers
- Better cooling systems
- Heat reuse
- Edge AI
- Efficient algorithms
- Transparent reporting
- Responsible AI use
- Neuromorphic / brain-inspired computing

Each solution card should answer:

- What is it?
- How could it help?
- What is the trade-off or limitation?

### 8. Classroom / Community Lesson Page

Purpose:
Turn the site into social impact.

Include:

- 30-minute lesson plan
- 45-minute lesson plan
- Discussion questions
- Vocabulary list
- Calculator activity
- Reflection prompt
- Teacher notes
- Student worksheet-style questions

Possible discussion question:

> Should AI companies be required to report energy and water use? Why or why not?

### 9. About / Methodology Page

Purpose:
Build trust.

Include:

- Who built the project
- Why the project exists
- What sources were used
- How estimates were handled
- Why exact AI footprint numbers are difficult
- What the site does and does not claim
- How the project could improve in the future

## 9-Week Curriculum Overview

### Week 1 - Project understanding, prompting basics, first homepage

Student is brand new and may not have local Codex access yet.

Focus:

- Understand the project idea
- Learn what Codex is for
- Learn good prompting format
- Create project brief
- Create GitHub repo
- Create README
- Build first simple homepage
- Deploy first simple version to Vercel using teacher support
- Make one tiny text/UI edit

Week 1 should end with a small win:
A live website link, even if simple.

### Week 2 - Local setup and components

Focus:

- Set up local dev environment
- Run the app
- Understand file tree
- Learn components
- Split homepage into reusable components
- Add simple navigation

### Week 3 - Research and static data

Focus:

- Gather source-backed content
- Create static data files
- Add pros and cons data
- Add stat data
- Learn how UI maps over arrays

### Week 4 - Statistics dashboard

Focus:

- Build stat cards
- Add source notes
- Add visual hierarchy
- Explain uncertainty

### Week 5 - Interactive calculator

Focus:

- Learn React state
- Build sliders/selects
- Show derived impact levels
- Add assumptions box

### Week 6 - Future solutions and brain-inspired computing

Focus:

- Add solution cards
- Add brain vs AI section
- Explain complex science simply

### Week 7 - Classroom/community page

Focus:

- Create lesson plan page
- Add discussion questions
- Add community impact framing

### Week 8 - Polish and accessibility

Focus:

- Responsive design
- Accessibility
- Better navigation
- Better visual design
- README screenshots
- About/methodology polish

### Week 9 - Final deployment and presentation

Focus:

- Final QA
- Final Vercel deployment
- Demo script
- Portfolio writeup
- Project reflection

## Prompting Framework For The Student

Every coding prompt should use this format:

Context:
Goal:
Current files:
Constraints:
Acceptance criteria:
Ask:
Error or screenshot, if any:

Example:

Context:
We are building AI Footprint Lab, a frontend-only educational website about the environmental and economic trade-offs of AI.

Goal:
Create a statistics dashboard section.

Current files:
The homepage has a hero section and feature cards. Static data will live in data/stats.ts.

Constraints:
Use TypeScript and Tailwind CSS. Do not add a backend. Do not use live APIs. Keep code beginner-readable. Add helpful comments.

Acceptance criteria:
- Create a stats data file
- Create reusable StatCard component
- Show at least 4 stat cards
- Each stat includes a source label and caveat
- Update the README

Ask:
Implement this in the smallest safe steps and explain each file changed.

## Bad Prompts To Avoid

Do not use vague prompts like:

- Make it better
- Fix it
- Add AI
- Build the whole app
- Build a generic “Ivy League” project
- Make the design amazing
- Do everything

Instead, use precise prompts:

- Add a hero section with a headline, subtitle, and two buttons.
- Create a reusable card component for pros and cons.
- Add a static data file for statistics with source labels.
- Review this component for accessibility and mobile layout.
- Explain this error in beginner language and suggest the smallest fix.

## Teaching Rules For Codex

Codex should act like a mentor, not just a code generator.

When helping the student:

1. Explain the concept simply.
2. Identify the files that will change.
3. Make the smallest useful change.
4. Keep code beginner-readable.
5. Add helpful comments.
6. Explain what changed.
7. Provide a check-for-understanding question.
8. Suggest a commit message.
9. Update README when behavior or setup changes.

## Coding Style Rules

Use:

- Clear component names
- Simple TypeScript types
- Small components
- Static data files
- Helpful comments
- Accessible HTML
- Responsive Tailwind classes
- Conventional Commits

Avoid:

- Overengineering
- Backend code
- Database setup
- Authentication
- Paid APIs
- Environment variables unless absolutely needed
- Huge files
- Unexplained code
- Complex animations too early

## Preferred Folder Structure

Suggested structure:

app/
  page.tsx
  about/
    page.tsx
  lesson/
    page.tsx
  methodology/
    page.tsx

components/
  SiteHeader.tsx
  HeroSection.tsx
  FeatureCard.tsx
  ProsConsSection.tsx
  StatCard.tsx
  StatsDashboard.tsx
  Calculator.tsx
  SolutionCard.tsx
  Footer.tsx

data/
  stats.ts
  prosCons.ts
  solutions.ts
  glossary.ts
  sources.ts

docs/
  research-notes.md
  teaching-plan.md
  demo-script.md

public/
  screenshots/

README.md
PROJECT_CONTEXT.md

## Feature Roadmap

### Must Have

- Homepage
- Pros and cons section
- Statistics dashboard
- Interactive calculator
- Future solutions section
- Brain vs AI explainer
- Lesson/community page
- Methodology page
- Source citations
- Deployed Vercel link
- Strong README

### Nice To Have

- Simple animations
- Glossary
- Quiz
- Timeline of AI/data-center growth
- Downloadable classroom activity as printable HTML
- Dark/light theme toggle
- More polished chart visuals

### Do Not Add Yet

- Backend
- Database
- User accounts
- Live AI chatbot
- Paid APIs
- Real-time data scraping
- Complex admin panel

## Acceptance Criteria For Final Project

The final project is successful if:

- The site is live on Vercel.
- The repo is organized and readable.
- The README clearly explains the project.
- The student can explain the code at a high level.
- The student can explain the environmental trade-offs.
- The student can explain how Codex helped.
- The site uses credible sources.
- The site includes interactive learning.
- The site is mobile-friendly.
- The site has a clear social-impact purpose.
- The student has a short demo script.

## Final Demo Script Draft

This is AI Footprint Lab, an interactive educational website about the environmental and economic trade-offs of artificial intelligence.

I built it as a frontend-only web app using Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel.

The project explains both the benefits and costs of AI. It includes a pros and cons section, a statistics dashboard, an interactive resource-impact calculator, a future solutions section, and a classroom lesson page.

I used Codex and ChatGPT as coding mentors, but I learned to guide them with specific prompts, read the code, debug errors, and improve the project step by step.

The goal is to help students understand that AI is not simply good or bad. In software engineering, it brings real productivity gains, but also measurable trade-offs in quality, complexity, cost, and environmental footprint.

## Final Portfolio Description

AI Footprint Lab is a student-built educational technology project exploring the environmental and economic trade-offs of artificial intelligence. The website combines environmental science, AI literacy, data visualization, and interactive frontend development to help students understand how AI infrastructure uses electricity, water, hardware, and data centers, while also exploring the benefits of AI and possible sustainability solutions.

## Reminder For Codex

Always preserve the educational mission.

This is not just a website.

It is a 9-week software-engineering learning project designed to help a beginner student:

- Learn prompting
- Learn frontend development
- Learn GitHub workflow
- Learn deployment
- Learn responsible AI use
- Build a meaningful social-impact portfolio project


For this project, I would **not start with coding.**

The biggest mistake beginners make is:

```text
Open VS Code
Create Next.js app
Start building pages
Realize they don't know what the site should contain
Rewrite everything later
```

Instead, start with **research → structure → design → code**.

---

# Week 1 Day 1

## Step 1: Define the software-engineering research question

Before writing a single line of code, answer:

> What question is this website trying to help people understand?

If you go with the SWE angle, I'd use:

> Does AI-assisted software development create enough productivity benefits to justify its environmental and economic costs?

This becomes the theme of the entire project.

---

# Step 2: Define the target audience

Pick ONE.

### Option A

High school students interested in AI

### Option B

People learning programming

### Option C

Developers curious about AI coding

I would choose:

> High school students interested in AI and software engineering.

---

# Step 3: Create a content map

Open Google Docs.

Create:

```text
AI Footprint Lab

1. Home
2. What is AI Coding?
3. Benefits
4. Costs
5. Trade-Off Explorer
6. Scenario Calculator
7. Future Solutions
8. Sources
```

No coding yet.

---

# Step 4: Gather research

Create a spreadsheet.

Columns:

| Topic | Fact | Source | URL | Notes |
| ----- | ---- | ------ | --- | ----- |

Example:

| Topic        | Fact                                                        |
| ------------ | ----------------------------------------------------------- |
| Productivity | AI helps developers complete tasks faster in many workflows |
| Energy       | Data center electricity demand is increasing                |
| AI Coding    | Many engineers use Copilot, Claude Code, Cursor             |
| Environment  | AI workloads require electricity and cooling                |
| Solutions    | Smaller models can reduce compute demand                    |

---

# Research categories

I would gather around:

## Category 1

AI in software engineering

Questions:

* How are developers using AI?
* What companies use AI coding tools?
* What productivity gains are reported?

Goal:

5-10 facts

---

## Category 2

Environmental costs

Questions:

* Why do AI models need data centers?
* Why do data centers consume energy?
* Why is cooling needed?

Goal:

5-10 facts

---

## Category 3

Economic impact

Questions:

* Does AI lower barriers to entry?
* Can one developer build more?
* Does it change hiring?

Goal:

5-10 facts

---

## Category 4

Future solutions

Questions:

* Smaller models
* Edge AI
* Efficient chips
* Neuromorphic computing
* Renewable-powered data centers

Goal:

5-10 facts

---

# Step 5: Decide site features

Before coding, decide:

### Homepage

Explains project

### Statistics Section

Key facts

### Benefits vs Costs

Cards

### Interactive Explorer

User explores trade-offs

### Calculator

Educational simulation

### Sources Page

Research citations

---

# Step 6: Sketch the site

Literally on paper.

Homepage:

```text
--------------------------------
AI Footprint Lab

Headline

Subheadline

Button

--------------------------------

Key Statistics

--------------------------------

Benefits vs Costs

--------------------------------

Calculator

--------------------------------

Solutions

--------------------------------

Sources
--------------------------------
```

A napkin sketch is enough.

---

# Step 7: THEN create the Next.js project

Now:

```bash
npx create-next-app@latest ai-developer-impact-lab
```

At this point you know:

* What the site is
* What pages exist
* What content exists
* What research exists
* What components exist

---

# First Coding Milestone

The first thing I'd build is only:

```text
Home page
```

Containing:

* Project title
* One paragraph
* Two buttons

Nothing else.

---

# If I were teaching this student tomorrow

I'd spend the entire first session doing only:

### Research

30-45 min

### Content map

15 min

### Paper wireframe

15 min

### GitHub repo creation

10 min

### Next.js setup

20 min

### Hero section

20 min

That's enough for a very productive first class.

The biggest lesson would be:

> Software projects do not start with code. They start with understanding the problem you're trying to solve.

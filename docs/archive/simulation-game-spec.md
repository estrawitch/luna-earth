# Detailed Spec Sheet: Water + Electricity + Air Quality Simulation Game

## 1) Project summary
This project is a small browser game for high school students and non-experts. The player runs a city utility system for 12 simulated weeks and must balance three things:

- People need enough water.
- The system needs electricity to pump, treat, and cool equipment.
- Electricity use and cooling choices affect air quality.

The main lesson is simple: using less water is not automatically better. If the player chooses to use no water for cooling, the system switches to air cooling. That saves water, but it uses more electricity and increases air pollution risk.

## 2) Target audience
- High school students
- Beginners learning about environmental systems
- Teachers, parents, mentors, or admissions readers reviewing the project
- People who do not already know environmental science vocabulary

Every screen should explain ideas in plain language. If a term like NOx, ozone risk, or kWh appears, the site should explain it in one short sentence.

## 3) Hard project scope
This site should be possible to build in 8 one-hour classes.

In scope:

- One playable simulation game
- One main scenario dashboard
- Two starter scenarios
- Simple weekly turns
- Static local data
- Clear water, electricity, and air quality outputs
- Sources and assumptions page
- README update

Out of scope:

- Real-time weather data
- Real maps or GIS
- User accounts
- Backend database
- Live API calls
- Full chemistry or water engineering models
- Multiplayer
- Advanced optimization or AI recommendations

## 4) Core gameplay loop
Each round is one simulated week.

1. The player sees the current week, event, resources, and environmental scores.
2. The player chooses a cooling mode and a few utility actions.
3. The player clicks `Run Week`.
4. The game updates water, electricity, budget, air quality, and reliability.
5. The event log explains what happened in plain English.
6. The player repeats until week 12.

The game should feel like running a small control room, not like filling out a science worksheet.

## 5) Player goal
By the end of the scenario, the player is trying to:

- Keep enough water available for the community.
- Avoid running out of budget.
- Keep the system reliable.
- Keep air quality from getting too risky.
- Make choices they can explain.

The player wins if the final run stays within safe limits. The player loses if the system runs out of key resources or crosses a major danger threshold.

## 6) Finite resources
Resources must be limited. The player should not be able to click unlimited upgrades or solve every problem at once.

Track these resources:

- `budgetUSD`: money available for operations and repairs
- `waterQuotaM3`: water available for the scenario
- `storageM3`: water currently stored
- `facilityHealth`: equipment health from 0 to 100
- `maintenanceActions`: limited actions available each week
- `week`: current week from 1 to 12

Rules:

- Budget cannot be spent if the player cannot afford the action.
- Water cannot go below 0.
- Facility health drops when equipment is stressed.
- Maintenance actions reset each week, but only a small number are available.

## 7) Required cooling choice
The cooling mode is the most important decision in the game.

Modes:

- Water cooling: uses more water, uses less electricity, lower air impact.
- Hybrid cooling: uses some water and some extra electricity.
- Air cooling / No-water mode: uses no water for cooling, but uses more electricity and raises air pollution risk.

Required behavior for No-water mode:

- `coolingWaterUsedM3 = 0`
- electricity use goes up
- NOx pollution estimate goes up
- ozone-risk score goes up, especially during heat weeks
- reliability can drop during extreme heat

Required message:

> No-water cooling used this week. Water was saved, but electricity use and air pollution risk increased.

## 8) Main metrics
Show these numbers on the main dashboard.

Water:

- Water demand
- Water supplied
- Water shortage
- Water storage left
- Water lost from leaks

Electricity:

- Electricity used this week
- Electricity cost this week
- Budget remaining
- Energy mode effect from cooling choice

Air quality:

- NOx estimate
- Ozone-risk score
- Air quality status: Good, Caution, Warning, Danger

System health:

- Facility health
- Service reliability
- Overall score

## 9) Player actions
Keep actions simple. Each week, the player should choose only a few things.

Required actions:

- Cooling mode: Water, Hybrid, or Air / No-water
- Pumping level: Low, Medium, or High
- Leak repair: None, Basic, or Full
- Maintenance: None, Quick Fix, or Deep Service

Optional action if time allows:

- Conservation message: ask the city to reduce water use this week

Each action should show:

- cost
- benefit
- downside
- whether the player can afford it

## 10) Starter scenarios
Build two scenarios first.

Scenario 1: Heat Wave

- Water demand increases.
- Air cooling becomes less reliable.
- Ozone risk increases.
- Electricity gets more expensive.

Scenario 2: Storm Week

- Water inflow increases.
- Treatment load increases.
- Facility health may drop.
- Pumping and treatment use more electricity.

Optional third scenario:

- Equipment Trouble: facility health starts low and maintenance matters more.

## 11) Simple formulas
The formulas should be easy to explain. They do not need to be scientifically perfect.

Water:

```text
demand = baseDemand + weatherDemandChange
waterAvailable = storage + inflow
waterSupplied = min(waterAvailable, demand, pumpLimit)
shortage = max(0, demand - waterSupplied)
leakLoss = storage * leakRate
storageNext = storage + inflow - waterSupplied - leakLoss
```

Electricity:

```text
pumpElectricity = waterSupplied * pumpEnergyRate
treatmentElectricity = waterSupplied * treatmentEnergyRate
coolingElectricity = baseCoolingElectricity * coolingModeMultiplier
totalElectricity = pumpElectricity + treatmentElectricity + coolingElectricity
electricityCost = totalElectricity * electricityPrice
```

Air:

```text
noxEstimate = totalElectricity * noxPerKwh * coolingAirImpactMultiplier
ozoneRisk = baseOzoneRisk + heatEffect + noxEffect
airQualityScore = 100 - pollutionPenalty
```

Scores should stay between 0 and 100.

## 12) Screen layout
Main screen:

- Top bar: week, scenario name, budget, overall status
- Left area: player controls
- Center area: water, electricity, and air cards
- Right or bottom area: event log and weekly explanation
- End screen: final score, what went well, what caused problems

Keep the first screen useful immediately. The student should not need to click through a long intro before playing.

## 13) Page list
Required pages:

- Simulation page
- Sources page
- Assumptions page
- About or reflection section

Optional:

- Home page if needed for project presentation

## 14) Data files
Suggested local files:

- `src/data/scenarios.ts`
- `src/data/actions.ts`
- `src/data/assumptions.ts`
- `src/lib/runWeek.ts`
- `src/types/simulation.ts`

The project can use JSON instead of TypeScript data files if that is easier for the student.

## 15) Key components
Suggested components:

- `SimulationDashboard`
- `ResourcePanel`
- `CoolingModeSelector`
- `ActionPanel`
- `WaterPanel`
- `ElectricityPanel`
- `AirQualityPanel`
- `EventLog`
- `RunWeekButton`
- `EndSummary`
- `SourcesPage`
- `AssumptionsPage`

## 16) Student-friendly vocabulary
Use simple labels:

- Use `water left` before `storageM3`
- Use `power used` before `kWh`
- Use `air risk` before `NOx`
- Use `equipment health` before `facilityHealth`
- Use `weekly event` before `scenario modifier`

When technical terms appear, explain them:

- kWh: a unit for electricity use
- NOx: air pollution from burning fuel or producing power
- ozone risk: chance that air pollution and heat create unhealthy air
- water shortage: the amount of demand the system could not meet

## 17) Win and loss rules
Win if, after week 12:

- service reliability is 80 or higher
- air quality score is 65 or higher
- budget is 0 or higher
- total water shortage is not too high

Lose immediately or show a major warning if:

- budget goes below 0
- water shortage becomes severe
- facility health reaches 0
- air quality reaches Danger for too many weeks

## 18) Acceptance list
The project is done when:

- A player can complete a full 12-week run.
- The no-water option works and clearly changes water, electricity, and air outcomes.
- Budget, water, and equipment health are limited.
- The game explains each weekly result in plain English.
- Two scenarios are playable.
- The site includes sources and assumptions.
- The README explains what the project does and what is simplified.
- The game works on laptop and phone-sized screens.

## 19) Eight-class build plan
Lesson 1: Decide the rules and sketch the screen.

Lesson 2: Set up the site and main dashboard layout.

Lesson 3: Build the water part: demand, supply, shortage, storage, and leaks.

Lesson 4: Add electricity use and budget.

Lesson 5: Add Water / Hybrid / Air cooling and the no-water tradeoff.

Lesson 6: Add events and hard limits.

Lesson 7: Add explanations, better labels, warnings, and final score screen.

Lesson 8: Add sources, assumptions, README updates, and demo script.

## 20) Research needed
Keep research lightweight and practical.

Needed source categories:

- Why water systems use electricity
- Why cooling systems use water or air
- Why air cooling can use more electricity
- How electricity production can affect air quality
- What NOx and ozone risk mean in simple terms

Each source note should include:

- source name
- year
- one useful fact
- how confident we are
- what the site should not overclaim

## 21) Demo script
The final student demo should be about two minutes.

Suggested flow:

1. Show the goal of the game.
2. Run one normal water-cooled week.
3. Switch to no-water mode and show the tradeoff.
4. Explain how electricity and air quality changed.
5. Finish with the final score and one thing the student learned.

## 22) Important teaching reminder
This is not a real environmental forecasting tool. It is a learning game. The best version is not the most complicated one. The best version is the one where a student can explain:

- what choice they made
- what changed
- why it changed
- what tradeoff they noticed

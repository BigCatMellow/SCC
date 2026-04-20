# Rules Audit Summary

This summary is based on the generated reference files in this folder and the current merged builder runtime.

## What is now available

- `part9_army_building.json` for army-building rules
- `part11_keywords.json` for the glossary
- `part12_units_and_upgrades.json` for composition options and upgrade costs
- `part12_tactical_cards.json` for tactical card gas costs
- `faction_expanded_reference.json` for faction-expanded item lists and extracted body text
- `runtime_vs_rules_audit.json` for current merged runtime coverage versus the rule sources
- `RUNTIME_VALIDATION.md` for detailed field-level runtime validation

## Current runtime coverage

- zerg: source has 2 faction cards, 12 units, and 11 tactical cards; runtime has 2 faction cards, 12 units, and 11 tactical cards.
- protoss: source has 2 faction cards, 7 units, and 10 tactical cards; runtime has 2 faction cards, 7 units, and 10 tactical cards.
- terran: source has 2 faction cards, 7 units, and 10 tactical cards; runtime has 2 faction cards, 7 units, and 10 tactical cards.

## Coverage gaps

- No unit-card or tactical-card count gaps were found in the current merged runtime.

## Important source-backed corrections already visible

- Part 9 defines Vespene Gas as 10% of Minerals at each engagement scale, not a fixed manual number.
- Part 9 names the largest scale `Grand Offensive`, not `Grand`.
- Part 12 uses `EN` for Protoss tactical-card resource/cost context, so any earlier `PE` placeholder in runtime data should be treated as suspect.

## Recommendation

Use the `Rules` HTML files and the generated references here as the canonical source for future rebuild passes.
For detailed correctness checks, prefer `RUNTIME_VALIDATION.md` and `runtime-validation-report.json` over older audit assumptions.

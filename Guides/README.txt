StarCraft TMG modular package

Structure
- index.html                    main library hub
- core/index.html               core contents hub
- core/foundations-and-front-matter.html
- core/movement-and-battlefield.html
- core/turn-structure-and-actions.html
- core/advanced-reference.html
- factions/index.html           faction contents hub
- factions/groundwork.html
- factions/protoss.html
- factions/terran.html
- factions/zerg.html
- assets/css/                   shared style files per book
- assets/js/                    shared behavior files per book

Why this is better for long-term maintenance
- Smaller files are easier to edit and QA.
- Shared CSS/JS means style or behavior changes only need to be made once per book type.
- Cross-file anchors were rewritten so section links continue to work after splitting.
- Faction styling can evolve independently without touching the core rulebook.

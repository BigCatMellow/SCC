window.__companionRuleParts = window.__companionRuleParts || {};
window.__companionRuleParts['part-10'] = {
  "num": "10",
  "kicker": "Part X",
  "title": "Advanced Rules",
  "id": "part-10",
  "color": "#a791c2",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "The basic systems outline the essentials of movement, firing, and hand-to-hand combat, but the true depth of StarCraft: The Miniatures Game lies in the complex systems built upon these fundamental ones. This section will introduce <b><span class=\"kw\">Special Abilities</span></b> (Active, Passive, and Reaction), the <b>Tactical</b> and <b>Faction Card</b> systems, which give every army a unique personality, and the resources needed to unleash powerful abilities in crucial moments.",
      "plain": "The basic systems outline the essentials of movement, firing, and hand-to-hand combat, but the true depth of StarCraft: The Miniatures Game lies in the complex systems built upon these fundamental ones. This section will introduce Special Abilities (Active, Passive, and Reaction), the Tactical and Faction Card systems, which give every army a unique personality, and the resources needed to unleash powerful abilities in crucial moments."
    }
  ],
  "rules": [
    {
      "id": "10-1-special-abilities",
      "title": "10.1 Special Abilities",
      "rows": [
        {
          "type": "text",
          "html": "All <b>Special Abilitie</b> s follow the same structure and universal rules. Each ability on a <b>Unit Card</b> or <b>Tactical Card</b> is presented using a consistent format:",
          "plain": "All Special Abilitie s follow the same structure and universal rules. Each ability on a Unit Card or Tactical Card is presented using a consistent format:"
        },
        {
          "type": "bullet",
          "html": "A <b>Name</b> identifying the ability.",
          "plain": "A Name identifying the ability."
        },
        {
          "type": "bullet",
          "html": "A <b>Phase Limitation</b> restricting when it can be used (if applicable).",
          "plain": "A Phase Limitation restricting when it can be used (if applicable)."
        },
        {
          "type": "bullet",
          "html": "A <b>Type</b> declaring whether it is Passive, Active, or Reaction.",
          "plain": "A Type declaring whether it is Passive, Active, or Reaction."
        },
        {
          "type": "bullet",
          "html": "A <b>Cost</b> specifying the resource payment required in CP, BM, or PE (if any), and the <b>Instruction</b> text describing exactly what occurs when the ability resolves.",
          "plain": "A Cost specifying the resource payment required in CP, BM, or PE (if any), and the Instruction text describing exactly what occurs when the ability resolves."
        },
        {
          "type": "text",
          "html": "An ability may be used only when <b>all</b> its requirements are met.",
          "plain": "An ability may be used only when all its requirements are met."
        },
        {
          "type": "bullet",
          "html": "The timing or trigger condition <b>must</b> be correct, and any Phase restrictions <b>must</b> be satisfied.",
          "plain": "The timing or trigger condition must be correct, and any Phase restrictions must be satisfied."
        },
        {
          "type": "bullet",
          "html": "The target <b>must</b> be <b><span class=\"kw\">Within</span></b> Range and <b><span class=\"kw\">Line of Sight</span></b> (unless the ability explicitly states otherwise).",
          "plain": "The target must be Within Range and Line of Sight (unless the ability explicitly states otherwise)."
        },
        {
          "type": "bullet",
          "html": "All Costs <b>must</b> be paid in full before the ability resolves, and the Unit using the ability <b>must</b> be on the battlefield.",
          "plain": "All Costs must be paid in full before the ability resolves, and the Unit using the ability must be on the battlefield."
        },
        {
          "type": "text",
          "html": "Unless stated otherwise, all effects granted by Active or <span class=\"kw\">Reaction Abilities</span> that expire &quot; at the End of the Round&quot; remain active until all End of the Round effects (Part <span class=\"ref\">8. 9. 4</span>) are resolved. They are removed during <span class=\"kw\">Cleanup &amp; Refresh</span> (Part <span class=\"ref\">8. 9. 5</span>).",
          "plain": "Unless stated otherwise, all effects granted by Active or Reaction Abilities that expire \" at the End of the Round\" remain active until all End of the Round effects (Part 8. 9. 4 ) are resolved. They are removed during Cleanup & Refresh (Part 8. 9. 5 )."
        }
      ],
      "children": []
    },
    {
      "id": "10-2-active-abilities-full-rules",
      "title": "10.2 Active Abilities (Full Rules)",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Active Abilities</span></b> represent deliberate manoeuvres, technologies or enhancements that require a command to execute. A Unit may only use an <b>Active Ability</b> when it is currently <b>Activated</b>.",
          "plain": "Active Abilities represent deliberate manoeuvres, technologies or enhancements that require a command to execute. A Unit may only use an Active Ability when it is currently Activated ."
        },
        {
          "type": "bullet",
          "html": "The ability <b>must</b> be triggered either immediately before declaring an action or immediately after fully resolving one.",
          "plain": "The ability must be triggered either immediately before declaring an action or immediately after fully resolving one."
        },
        {
          "type": "bullet",
          "html": "It <b>cannot</b> be used during an action.",
          "plain": "It cannot be used during an action."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Active Abilities</span></b><b>cannot</b> be used while the Unit is in <b><span class=\"kw\">Reserves</span></b> unless the ability explicitly states otherwise.",
          "plain": "Active Abilities cannot be used while the Unit is in Reserves unless the ability explicitly states otherwise."
        },
        {
          "type": "bullet",
          "html": "Unless stated otherwise, <span class=\"kw\">modifiers</span> and effects granted by an <b>Active Ability</b> expire at the End of the Current Round.",
          "plain": "Unless stated otherwise, modifiers and effects granted by an Active Ability expire at the End of the Current Round."
        },
        {
          "type": "text",
          "html": "<b>Once Per Round:</b> A specific Unit may use a named <b>Active Ability</b> only once per Game Round, unless the ability has the <b><span class=\"kw\">REPEATABLE</span></b> Keyword. This limit applies to each Unit individually. Two different squads of the same Unit type can both use the same-named ability in the same Round, but a single squad <b>may not</b> use it twice. If a Unit gains access to an <b>Active Ability</b> via a <b>Tactical Card</b>, the Once Per Round limit still applies, regardless of how many copies of that card the player controls.",
          "plain": "Once Per Round: A specific Unit may use a named Active Ability only once per Game Round, unless the ability has the REPEATABLE Keyword. This limit applies to each Unit individually. Two different squads of the same Unit type can both use the same-named ability in the same Round, but a single squad may not use it twice. If a Unit gains access to an Active Ability via a Tactical Card , the Once Per Round limit still applies, regardless of how many copies of that card the player controls."
        },
        {
          "type": "text",
          "html": "Effects granted by <b><span class=\"kw\">Active Abilities</span></b> that expire at the End of the Round remain active through the resolution of all End of the Round effects (Part <span class=\"ref\">8. 9. 4</span>). They are removed during <span class=\"kw\">Cleanup &amp; Refresh</span> (Part <span class=\"ref\">8. 9. 5</span>).",
          "plain": "Effects granted by Active Abilities that expire at the End of the Round remain active through the resolution of all End of the Round effects (Part 8. 9. 4 ). They are removed during Cleanup & Refresh (Part 8. 9. 5 )."
        }
      ],
      "children": []
    },
    {
      "id": "10-3-passive-abilities-full-rules",
      "title": "10.3 Passive Abilities (Full Rules)",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Passive Abilities</span></b> represent innate traits, permanent equipment or constant biological adaptations.",
          "plain": "Passive Abilities represent innate traits, permanent equipment or constant biological adaptations."
        },
        {
          "type": "bullet",
          "html": "They are <b>always active</b> as long as the Unit is on the battlefield and do not require the Unit to be <b>Activated</b> to function.",
          "plain": "They are always active as long as the Unit is on the battlefield and do not require the Unit to be Activated to function."
        },
        {
          "type": "bullet",
          "html": "Like <b><span class=\"kw\">Active Abilities</span></b>, <b><span class=\"kw\">Passive Abilities</span></b> on a Unit are not in effect while that Unit is in <b><span class=\"kw\">Reserves</span></b>, unless the ability explicitly states otherwise.",
          "plain": "Like Active Abilities , Passive Abilities on a Unit are not in effect while that Unit is in Reserves , unless the ability explicitly states otherwise."
        },
        {
          "type": "text",
          "html": "<b>Priority:</b> If multiple <b><span class=\"kw\">Passive Abilities</span></b> trigger simultaneously, the <span class=\"kw\">controlling player</span> chooses the order in which they resolve. If both players have <b><span class=\"kw\">Passive Abilities</span></b> triggering at the same time, the <span class=\"kw\">Active Player</span> resolves theirs first.",
          "plain": "Priority: If multiple Passive Abilities trigger simultaneously, the controlling player chooses the order in which they resolve. If both players have Passive Abilities triggering at the same time, the Active Player resolves theirs first."
        }
      ],
      "children": []
    },
    {
      "id": "10-4-reaction-abilities-full-rules",
      "title": "10.4 Reaction Abilities (Full Rules)",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Reaction Abilities</span></b> allow a player to act outside the usual activation sequence, responding to specific events as they occur. A Reaction is used in direct response to a defined trigger (for example, &quot; When this Unit is targeted by an attack&quot; ).",
          "plain": "Reaction Abilities allow a player to act outside the usual activation sequence, responding to specific events as they occur. A Reaction is used in direct response to a defined trigger (for example, \" When this Unit is targeted by an attack\" )."
        },
        {
          "type": "bullet",
          "html": "It <b>must</b> be declared at the exact moment the trigger occurs.",
          "plain": "It must be declared at the exact moment the trigger occurs."
        },
        {
          "type": "bullet",
          "html": "If the window is missed, the ability <b>cannot</b> be used retroactively.",
          "plain": "If the window is missed, the ability cannot be used retroactively."
        },
        {
          "type": "bullet",
          "html": "Like <b><span class=\"kw\">Active Abilities</span></b>, <b><span class=\"kw\">Reaction Abilities</span></b><b>cannot</b> be used while the Unit is in <b><span class=\"kw\">Reserves</span></b> unless stated otherwise.",
          "plain": "Like Active Abilities , Reaction Abilities cannot be used while the Unit is in Reserves unless stated otherwise."
        },
        {
          "type": "bullet",
          "html": "Unless stated otherwise, <span class=\"kw\">modifiers</span> and effects granted by a <b>Reaction Ability</b> expire at the End of the Current Round.",
          "plain": "Unless stated otherwise, modifiers and effects granted by a Reaction Ability expire at the End of the Current Round."
        },
        {
          "type": "text",
          "html": "<b>Frequency Limit:</b> A specific Unit may use a named <b>Reaction Ability</b> only once per Game Round. This follows the same rules as the <b>Active Ability</b> frequency limit described in Part <span class=\"ref\">10. 2</span>.",
          "plain": "Frequency Limit: A specific Unit may use a named Reaction Ability only once per Game Round. This follows the same rules as the Active Ability frequency limit described in Part 10. 2 ."
        },
        {
          "type": "text",
          "html": "<b>Reaction Limit:</b> Each player may resolve only one Reaction per each Activation. If both players wish to use a Reaction in response to the same trigger, the <b><span class=\"kw\">Active Player</span></b> resolves their Reaction first, and the opponent resolves theirs second.",
          "plain": "Reaction Limit: Each player may resolve only one Reaction per each Activation. If both players wish to use a Reaction in response to the same trigger, the Active Player resolves their Reaction first, and the opponent resolves theirs second."
        },
        {
          "type": "example",
          "html": "<b>EXAMPLE:</b> If a <span class=\"kw\">Zealot</span> Unit is attacked. It may use <i>Zealous Round</i> OR <i>Ground Armour</i>, not both in the same <b><span class=\"kw\">Enemy</span> Activation</b>.<br/>If a <span class=\"kw\">Marine</span> Unit is attacked, and it uses <i>Infantry Armor</i> for its Armour Roll, the <span class=\"kw\">Medic</span> Unit behind will not be able to use its <i>Life Support</i> in the same <b><span class=\"kw\">Enemy</span> Activation</b>.",
          "plain": "EXAMPLE: If a Zealot Unit is attacked. It may use Zealous Round OR Ground Armour , not both in the same Enemy Activation . If a Marine Unit is attacked, and it uses Infantry Armor for its Armour Roll, the Medic Unit behind will not be able to use its Life Support in the same Enemy Activation ."
        }
      ],
      "children": [
        {
          "id": "summary-table",
          "title": "Summary Table",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><br/></th><th scope=\"col\"><p><span>ACTIVE ABILITY</span></p></th><th scope=\"col\"><p><span>PASSIVE ABILITY</span></p></th><th scope=\"col\"><p><span>REACTION ABILITY</span></p></th></tr></thead><tbody><tr><td><p><span>When to Use</span></p></td><td><p><span>Immediately before declaring an action or immediately after one fully resolves</span></p></td><td><p><span>Always on - no trigger needed</span></p></td><td><p><span>At the exact moment the specified trigger occurs</span></p></td></tr><tr><td><p><span>Requires Activation?</span></p></td><td><p><span>Yes</span><span> - the Unit must be currently</span><span>Activated</span></p></td><td><p><span>No</span></p></td><td><p><span>No</span></p></td></tr><tr><td><p><span>Player Decision?</span></p></td><td><p><span>Yes</span><span> - a deliberate choice</span></p></td><td><p><span>No</span><span> - automatic</span></p></td><td><p><span>Yes</span><span> - must be declared at the trigger</span></p></td></tr><tr><td><p><span>Frequency</span></p></td><td><p><span>Once per Round per Unit per named ability, unless</span><span><span class=\"kw\">REPEATABLE</span></span></p></td><td><p><span>Always active - no limit</span></p></td><td><p><span>Once per Round per Unit per named ability, unless</span><span><span class=\"kw\">REPEATABLE</span></span></p></td></tr><tr><td><p><span>Reactions per Activation</span></p></td><td><p><span>-</span></p></td><td><p><span>-</span></p></td><td><p><span>One</span><span> Reaction per player per Activation</span></p></td></tr><tr><td><p><span>Can Interrupt an action?</span></p></td><td><p><span>No</span><span> - only before or after</span></p></td><td><p><span>Resolves as conditions are met</span></p></td><td><p><span>Yes</span><span> - fires at the trigger point mid-sequence</span></p></td></tr><tr><td><p><span>In <span class=\"kw\">Reserves</span>?</span></p></td><td><p><span>No</span><span>, unless the ability states otherwise</span></p></td><td><p><span>No</span><span>, unless the ability states otherwise</span></p></td><td><p><span>No</span><span>, unless the ability states otherwise</span></p></td></tr><tr><td><p><span>Effect Duration</span></p></td><td><p><span>Expires at the End of the Round unless stated otherwise</span></p></td><td><p><span>Permanent while the Unit remains on the battlefield</span></p></td><td><p><span>Expires at the End of the Round unless stated otherwise</span></p></td></tr><tr><td><p><span>Simultaneous Triggers</span></p></td><td><p><span>-</span></p></td><td><p><span>The <span class=\"kw\">controlling player</span> chooses order. The</span><span><span class=\"kw\">Active Player</span></span><span> resolves first if both players trigger</span></p></td><td><p><span>The</span><span><span class=\"kw\">Active Player</span></span><span> resolves first</span></p></td></tr><tr><td><p><span>Cost</span></p></td><td><p><span>Pay in full before resolving</span></p></td><td><p><span>None</span></p></td><td><p><span>Pay in full before resolving</span></p></td></tr></tbody></table>",
              "plain": "ACTIVE ABILITY PASSIVE ABILITY REACTION ABILITY When to Use Immediately before declaring an action or immediately after one fully resolves Always on - no trigger needed At the exact moment the specified trigger occurs Requires Activation? Yes - the Unit must be currently Activated No No Player Decision? Yes - a deliberate choice No - automatic Yes - must be declared at the trigger Frequency Once per Round per Unit per named ability, unless REPEATABLE Always active - no limit Once per Round per Unit per named ability, unless REPEATABLE Reactions per Activation - - One Reaction per player per Activation Can Interrupt an action? No - only before or after Resolves as conditions are met Yes - fires at the trigger point mid-sequence In Reserves ? No , unless the ability states otherwise No , unless the ability states otherwise No , unless the ability states otherwise Effect Duration Expires at the End of the Round unless stated otherwise Permanent while the Unit remains on the battlefield Expires at the End of the Round unless stated otherwise Simultaneous Triggers - The controlling player chooses order. The Active Player resolves first if both players trigger The Active Player resolves first Cost Pay in full before resolving None Pay in full before resolving"
            }
          ]
        }
      ]
    },
    {
      "id": "10-5-tactical-cards-faction-cards",
      "title": "10.5 Tactical Cards & Faction Cards",
      "rows": [
        {
          "type": "text",
          "html": "An army isn’t just men and guns; it’s doctrine, infrastructure, and command structure that keep everything in line. The <b><span class=\"kw\">Faction Cards</span></b> outline what you are, what philosophy you adhere to, and what command structure your men follow. The <b><span class=\"kw\">Tactical Cards</span></b> represent the facilities, technology, and strategic planning done before the first bullet is ever fired. Together, they define not just what you can bring to the battlefield, but how you can <span class=\"kw\">deploy</span> it.",
          "plain": "An army isn’t just men and guns; it’s doctrine, infrastructure, and command structure that keep everything in line. The Faction Cards outline what you are, what philosophy you adhere to, and what command structure your men follow. The Tactical Cards represent the facilities, technology, and strategic planning done before the first bullet is ever fired. Together, they define not just what you can bring to the battlefield, but how you can deploy it."
        },
        {
          "type": "text",
          "html": "Each card is presented with a standard layout. It displays a <b>Card Name</b>. The card specifies its <b>Type</b> (either <b>Faction Card</b> or <b>Tactical Card</b>), lists the <b>Resources</b> it provides in CP, BM, or PE when <b>Exhausted</b>, and includes any <b><span class=\"kw\">Special Abilities</span></b> that are resolved using the standard rules described in Parts <span class=\"ref\">10. 1</span> through <span class=\"ref\">10. 4</span>.",
          "plain": "Each card is presented with a standard layout. It displays a Card Name . The card specifies its Type (either Faction Card or Tactical Card ), lists the Resources it provides in CP, BM, or PE when Exhausted , and includes any Special Abilities that are resolved using the standard rules described in Parts 10. 1 through 10. 4 ."
        },
        {
          "type": "text",
          "html": "If a card is marked as <b>Unique</b>, only a single copy is allowed (Part <span class=\"ref\">9. 1. 5</span>).",
          "plain": "If a card is marked as Unique , only a single copy is allowed (Part 9. 1. 5 )."
        }
      ],
      "children": [
        {
          "id": "10-5-1-resources-and-costs",
          "title": "10.5.1 Resources and Costs",
          "rows": [
            {
              "type": "text",
              "html": "Each faction has a separate resource type to spend on the faction’s abilities: <b><span class=\"kw\">Terran</span></b> uses <b>CP</b>, <b><span class=\"kw\">Zerg</span></b> uses <b>BM</b>, and <b><span class=\"kw\">Protoss</span></b> uses <b>PE</b>. These resources are provided by <b>Exhausting</b> cards.",
              "plain": "Each faction has a separate resource type to spend on the faction’s abilities: Terran uses CP , Zerg uses BM , and Protoss uses PE . These resources are provided by Exhausting cards."
            },
            {
              "type": "text",
              "html": "<b>Exhausting a Card</b>: To pay for an ability’s cost, such as &quot; Cost: 1 CP, &quot; the player must <b>Exhaust</b> a <span class=\"kw\">Ready</span> card that matches the resource type of the cost, such as a CP card. Exhausting a card means flipping it face down, after which it is regarded as <b>Exhausted</b>.",
              "plain": "Exhausting a Card : To pay for an ability’s cost, such as \" Cost: 1 CP, \" the player must Exhaust a Ready card that matches the resource type of the cost, such as a CP card. Exhausting a card means flipping it face down, after which it is regarded as Exhausted ."
            },
            {
              "type": "text",
              "html": "If the player cannot <b>Exhaust</b> enough cards to pay the entire cost, they cannot activate the ability. If a card generates more resources than are needed to pay for a cost, any excess resources are lost. Resources generated to activate one ability can not be saved or spent on another ability.",
              "plain": "If the player cannot Exhaust enough cards to pay the entire cost, they cannot activate the ability. If a card generates more resources than are needed to pay for a cost, any excess resources are lost. Resources generated to activate one ability can not be saved or spent on another ability."
            }
          ]
        },
        {
          "id": "10-5-2-managing-card-states",
          "title": "10.5.2 Managing Card States",
          "rows": [
            {
              "type": "text",
              "html": "Every <b>Tactical Card</b> and <b>Faction Card</b> is in one of two states: <b><span class=\"kw\">Ready</span></b> (face-up) or <b>Exhausted</b> (face-down). A <span class=\"kw\">Ready</span> card may be <b>Exhausted</b> in two ways: the player <b>Exhausts</b> it to use a <b><span class=\"kw\">Special Ability</span></b> printed directly on the card, or the player <b>Exhausts</b> it to generate its Resource in order to pay for an ability located elsewhere (for example, on a <b>Unit Card</b>).",
              "plain": "Every Tactical Card and Faction Card is in one of two states: Ready (face-up) or Exhausted (face-down). A Ready card may be Exhausted in two ways: the player Exhausts it to use a Special Ability printed directly on the card, or the player Exhausts it to generate its Resource in order to pay for an ability located elsewhere (for example, on a Unit Card )."
            },
            {
              "type": "text",
              "html": "Once a card is <b>Exhausted,</b> it provides no resources for the rest of the round, and its abilities <b>cannot</b> be used until it is <b>Refreshed</b> (flipped face-up) during Phase 4 Cleanup.",
              "plain": "Once a card is Exhausted, it provides no resources for the rest of the round, and its abilities cannot be used until it is Refreshed (flipped face-up) during Phase 4 Cleanup."
            }
          ]
        }
      ]
    }
  ]
};
window.__companionRuleParts['part-11'] = {
  "num": "11",
  "kicker": "Part XI",
  "title": "Keyword Glossary and Definitions",
  "id": "part-11",
  "color": "#b4889b",
  "group": "reference",
  "introRows": [
    {
      "type": "text",
      "html": "<span class=\"kw\">Keywords</span> are the shorthand of the battlefield. The word on a <b>Unit Card</b> or weapon profile may change its function in an <span class=\"kw\">instant</span> - from giving it armour bypass to allowing it to burrow underground or make itself invisible. This section collates all the <span class=\"kw\">Keywords</span> used in the game, explains exactly what each does, and sets out the rules on how they combine with each other.",
      "plain": "Keywords are the shorthand of the battlefield. The word on a Unit Card or weapon profile may change its function in an instant - from giving it armour bypass to allowing it to burrow underground or make itself invisible. This section collates all the Keywords used in the game, explains exactly what each does, and sets out the rules on how they combine with each other."
    },
    {
      "type": "text",
      "html": "<span class=\"kw\">Keywords</span> are written in <b>BOLD CAPS</b>. Unless stated otherwise, <span class=\"kw\">Keywords</span> do not stack - gaining the same Keyword twice provides no extra benefit, and numeric <span class=\"kw\">Keywords</span> use only the highest value.",
      "plain": "Keywords are written in BOLD CAPS . Unless stated otherwise, Keywords do not stack - gaining the same Keyword twice provides no extra benefit, and numeric Keywords use only the highest value."
    }
  ],
  "rules": [
    {
      "id": "access-point",
      "title": "ACCESS POINT",
      "rows": [
        {
          "type": "text",
          "html": "Part of a <b>Terrain</b> that connects different elevation levels. <span class=\"kw\">Models</span> moving through an <b><span class=\"kw\">ACCESS POINT</span></b> can change their elevation.",
          "plain": "Part of a Terrain that connects different elevation levels. Models moving through an ACCESS POINT can change their elevation."
        }
      ],
      "children": []
    },
    {
      "id": "active-player",
      "title": "ACTIVE PLAYER",
      "rows": [
        {
          "type": "text",
          "html": "The player whose turn it is to act.",
          "plain": "The player whose turn it is to act."
        }
      ],
      "children": []
    },
    {
      "id": "anti-evade",
      "title": "ANTI-EVADE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">ANTI-EVADE</span> (X) -<b></b> When resolving an attack with this weapon against <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>, the target Unit suffers a <b>-X <span class=\"kw\">Modifier</span></b> to its <b>Evade Roll</b> for this attack (Part <span class=\"ref\">8. 7. 4</span>, Step 4).",
          "plain": "ANTI-EVADE (X) - When resolving an attack with this weapon against Enemy Units , the target Unit suffers a -X Modifier to its Evade Roll for this attack (Part 8. 7. 4 , Step 4)."
        }
      ],
      "children": []
    },
    {
      "id": "blocking-terrain",
      "title": "BLOCKING TERRAIN",
      "rows": [
        {
          "type": "text",
          "html": "Any terrain piece with an <b><span class=\"kw\">Effective Size</span></b> of 1 or greater. <b><span class=\"kw\">Blocking Terrain</span></b> obstructs <b><span class=\"kw\">Line of Sight</span></b> according to the <span class=\"kw\">Cover</span> rules (Part <span class=\"ref\">7. 1. 1</span>).",
          "plain": "Any terrain piece with an Effective Size of 1 or greater. Blocking Terrain obstructs Line of Sight according to the Cover rules (Part 7. 1. 1 )."
        },
        {
          "type": "text",
          "html": "Whether a model may <span class=\"kw\">move</span> through that terrain is determined separately by the movement rules, terrain Size, <b>ACCESS POINTS</b>, Gap Clearance, and any relevant terrain <span class=\"kw\">Keywords</span>.",
          "plain": "Whether a model may move through that terrain is determined separately by the movement rules, terrain Size, ACCESS POINTS , Gap Clearance, and any relevant terrain Keywords ."
        }
      ],
      "children": []
    },
    {
      "id": "buff",
      "title": "BUFF",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">BUFF</span> [Characteristic] (X)<b></b> The Unit gains a bonus<b> of X</b> to the specified Characteristic until the End of the Round.",
          "plain": "BUFF [Characteristic] (X) The Unit gains a bonus of X to the specified Characteristic until the End of the Round."
        },
        {
          "type": "bullet",
          "html": "Target Number Characteristic (e. g. <b>Armour</b>, <b>Hit</b>): reduce the value <b>by X</b> (easier to roll).",
          "plain": "Target Number Characteristic (e. g. Armour , Hit ): reduce the value by X (easier to roll)."
        },
        {
          "type": "bullet",
          "html": "Value Characteristic (e. g. <b>Speed</b>, <b>RoA</b>): increase the value <b>by X</b>.",
          "plain": "Value Characteristic (e. g. Speed , RoA ): increase the value by X ."
        }
      ],
      "children": []
    },
    {
      "id": "bulky",
      "title": "BULKY",
      "rows": [
        {
          "type": "text",
          "html": "This weapon <b>cannot</b> be used to make a <b><span class=\"kw\">Ranged Attack</span></b> while the Unit is currently <b><span class=\"kw\">Engaged</span></b> (Part <span class=\"ref\">8. 7. 3</span>).",
          "plain": "This weapon cannot be used to make a Ranged Attack while the Unit is currently Engaged (Part 8. 7. 3 )."
        }
      ],
      "children": []
    },
    {
      "id": "burrowed",
      "title": "BURROWED",
      "rows": [
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">BURROWED</span></b> is classified as a <b><span class=\"kw\">Status</span></b>.",
          "plain": "A BURROWED is classified as a Status ."
        },
        {
          "type": "block",
          "html": "<div>• A <b><span class=\"kw\">BURROWED</span></b> Unit gains the <b><span class=\"kw\">HIDDEN</span></b> <b><span class=\"kw\">Status</span></b>.<br/><br/>• Its Size is treated as 0 for all purposes<br/><br/>• Its <b>Current Supply</b> Value is treated as 0 for <b><span class=\"kw\">Disengage</span></b> checks.<br/><br/>• A <b><span class=\"kw\">BURROWED</span></b> Unit <b>cannot</b> Control or Contest <b><span class=\"kw\">Mission Markers</span></b> (overrides Parts <span class=\"ref\">6. 2</span> and <span class=\"ref\">8. 9. 1</span>).<br/><br/>• While <b><span class=\"kw\">BURROWED</span></b>, the Unit may only perform <b><span class=\"kw\">Deploy</span>, <span class=\"kw\">Move</span></b>, <b><span class=\"kw\">Disengage</span></b>, <b>Run</b>, <b><span class=\"kw\">Hold</span></b> and <b>Close Ranks</b> actions. Performing any of these (except <b><span class=\"kw\">Hold</span></b>) immediately removes the <b><span class=\"kw\">BURROWED</span></b> <span class=\"kw\">status</span>.<br/><br/>• <b><span class=\"kw\">BURROWED</span></b> <span class=\"kw\">Units</span> may use <b><span class=\"kw\">Special Abilities</span></b> unless stated otherwise.<br/><br/>• <b><span class=\"kw\">BURROWED</span></b> <span class=\"kw\">Units</span> may make an <b>Evade Roll</b> against every attack targeting them.<br/><br/>• Other <span class=\"kw\">models</span> may <span class=\"kw\">move</span> through a <b><span class=\"kw\">BURROWED</span></b> Unit’s <span class=\"kw\">models</span>, provided they do not end <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of the <b><span class=\"kw\">BURROWED</span></b> Unit (overrides Part <span class=\"ref\">8. 5. 3</span>).<br/><br/>• If a <b><span class=\"kw\">BURROWED</span></b> Unit is <b><span class=\"kw\">Engaged</span></b> at the start of the Combat Phase, it must be <b>Activated</b> but cannot perform a <b>Close Combat Attack</b> in its <b><span class=\"kw\">BURROWED</span></b> state. The Unit may perform <b>Close Ranks</b> as its first step, which immediately removes the <b><span class=\"kw\">BURROWED</span></b> <span class=\"kw\">status</span>. Once the <span class=\"kw\">status</span> is removed, the Unit completes the remaining steps of the <b>Close Combat Attack</b> normally. If the Unit does not or cannot perform <b>Close Ranks</b>, it does not attack. <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> <b><span class=\"kw\">Engaged</span></b> with a <b><span class=\"kw\">BURROWED</span></b> Unit may attack it as normal regardless of its <span class=\"kw\">status</span>.</div>",
          "plain": "• A BURROWED Unit gains the HIDDEN Status . • Its Size is treated as 0 for all purposes • Its Current Supply Value is treated as 0 for Disengage checks. • A BURROWED Unit cannot Control or Contest Mission Markers (overrides Parts 6. 2 and 8. 9. 1 ). • While BURROWED , the Unit may only perform Deploy , Move , Disengage , Run , Hold and Close Ranks actions. Performing any of these (except Hold ) immediately removes the BURROWED status . • BURROWED Units may use Special Abilities unless stated otherwise. • BURROWED Units may make an Evade Roll against every attack targeting them. • Other models may move through a BURROWED Unit’s models , provided they do not end Within the Engagement Range of the BURROWED Unit (overrides Part 8. 5. 3 ). • If a BURROWED Unit is Engaged at the start of the Combat Phase, it must be Activated but cannot perform a Close Combat Attack in its BURROWED state. The Unit may perform Close Ranks as its first step, which immediately removes the BURROWED status . Once the status is removed, the Unit completes the remaining steps of the Close Combat Attack normally. If the Unit does not or cannot perform Close Ranks , it does not attack. Enemy Units Engaged with a BURROWED Unit may attack it as normal regardless of its status ."
        }
      ],
      "children": []
    },
    {
      "id": "burst-fire",
      "title": "BURST FIRE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">BURST FIRE</span> Y&quot; (X)<b></b> When making a <b><span class=\"kw\">Ranged Attack</span></b> against a target <b><span class=\"kw\">Within</span> Y\"</b> of the attacking model, increase this weapon’s <b>RoA by X</b> for that attack.",
          "plain": "BURST FIRE Y\" (X) When making a Ranged Attack against a target Within Y\" of the attacking model, increase this weapon’s RoA by X for that attack."
        }
      ],
      "children": []
    },
    {
      "id": "concentrated-fire",
      "title": "CONCENTRATED FIRE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">CONCENTRATED FIRE</span> (X)<b></b> Attacks with this weapon may remove no more than <b>X</b> <span class=\"kw\">models</span> as casualties. Once X <span class=\"kw\">models</span> have been removed, discard any remaining <b>Total Damage</b>. It is not recorded as a Damage Marker and does not carry over.",
          "plain": "CONCENTRATED FIRE (X) Attacks with this weapon may remove no more than X models as casualties. Once X models have been removed, discard any remaining Total Damage . It is not recorded as a Damage Marker and does not carry over."
        }
      ],
      "children": []
    },
    {
      "id": "controlling-player",
      "title": "CONTROLLING PLAYER",
      "rows": [
        {
          "type": "text",
          "html": "The player who commands a specific Unit, model, or Token. They make all decisions and roll all <span class=\"kw\">dice</span>. Certain abilities (e. g. , Neural Parasite) can transfer control; the new controller then acts in every respect as though the Unit were their own.",
          "plain": "The player who commands a specific Unit, model, or Token. They make all decisions and roll all dice . Certain abilities (e. g. , Neural Parasite) can transfer control; the new controller then acts in every respect as though the Unit were their own."
        }
      ],
      "children": []
    },
    {
      "id": "critical-hit",
      "title": "CRITICAL HIT",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">CRITICAL HIT</span> (X)<b></b> <span class=\"kw\">Move</span><b> X</b> <span class=\"kw\">dice</span> from the <b>Armour Pool</b> directly to the <b>Damage Pool</b>, bypassing Armour. <b><span class=\"kw\">CRITICAL HIT</span></b> can <b>never</b> <span class=\"kw\">move</span> more <span class=\"kw\">dice</span> than are in the <b>Armour Pool</b>.",
          "plain": "CRITICAL HIT (X) Move X dice from the Armour Pool directly to the Damage Pool , bypassing Armour. CRITICAL HIT can never move more dice than are in the Armour Pool ."
        }
      ],
      "children": []
    },
    {
      "id": "debuff",
      "title": "DEBUFF",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">DEBUFF</span> [Characteristic] (X)<b></b> The Unit suffers a penalty <b>of</b><b>X</b> to the specified <b>Characteristic</b> until the End of the Round.",
          "plain": "DEBUFF [Characteristic] (X) The Unit suffers a penalty of X to the specified Characteristic until the End of the Round."
        },
        {
          "type": "bullet",
          "html": "Target Number<b> Characteristic</b>: increase the value <b>by</b><b>X</b> (harder to roll).",
          "plain": "Target Number Characteristic : increase the value by X (harder to roll)."
        },
        {
          "type": "bullet",
          "html": "Value <b>Characteristic</b>: decrease the value <b>by</b><b>X</b> (minimum 0).",
          "plain": "Value Characteristic : decrease the value by X (minimum 0)."
        }
      ],
      "children": []
    },
    {
      "id": "displacement",
      "title": "DISPLACEMENT",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Leading Model</span></b> may end a <span class=\"kw\">move</span> Overlapping this Token or Unit (overrides Part <span class=\"ref\">7. 3. 1</span>).",
          "plain": "The Leading Model may end a move Overlapping this Token or Unit (overrides Part 7. 3. 1 )."
        },
        {
          "type": "text",
          "html": "If the <b><span class=\"kw\">Leading Model</span></b> ends any <b><span class=\"kw\">Move</span></b>, <b><span class=\"kw\">Deploy</span></b>, <b>Run</b>, <b><span class=\"kw\">Charge</span></b>, <b><span class=\"kw\">Disengage</span></b>, <b>Close Ranks</b> or <b><span class=\"kw\">Special Ability</span></b> <span class=\"kw\">move</span><b>Overlapping</b> this Token or model, the <span class=\"kw\">controlling player</span> of the <b><span class=\"kw\">Leading Model</span></b> immediately set it in <b>Base-to-Base</b> contact with the <b><span class=\"kw\">Leading Model</span></b>. If <b>Base-to-Base</b> is not possible, set it as close as possible.",
          "plain": "If the Leading Model ends any Move , Deploy , Run , Charge , Disengage , Close Ranks or Special Ability move Overlapping this Token or model, the controlling player of the Leading Model immediately set it in Base-to-Base contact with the Leading Model . If Base-to-Base is not possible, set it as close as possible."
        }
      ],
      "children": []
    },
    {
      "id": "dodge",
      "title": "DODGE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">DODGE</span> (X)<b></b> When this Unit is targeted by an attack, reduce the number of <span class=\"kw\">dice</span> moved from the <b>Armour Pool</b> to the <b>Damage Pool</b> by <b>Surge</b> or <b><span class=\"kw\">CRITICAL HIT</span> by X</b> (minimum 0). Apply during the <b>Resolve Surge</b> step.",
          "plain": "DODGE (X) When this Unit is targeted by an attack, reduce the number of dice moved from the Armour Pool to the Damage Pool by Surge or CRITICAL HIT by X (minimum 0). Apply during the Resolve Surge step."
        }
      ],
      "children": []
    },
    {
      "id": "entry-edge",
      "title": "ENTRY EDGE",
      "rows": [
        {
          "type": "text",
          "html": "The table edge assigned to a player by the <b><span class=\"kw\">Deployment</span> Card</b>. <span class=\"kw\">Units</span> enter the battlefield from this edge when deploying from <b><span class=\"kw\">Reserves</span></b>.",
          "plain": "The table edge assigned to a player by the Deployment Card . Units enter the battlefield from this edge when deploying from Reserves ."
        }
      ],
      "children": []
    },
    {
      "id": "fighting-rank",
      "title": "FIGHTING RANK",
      "rows": [
        {
          "type": "text",
          "html": "A model is in the <span class=\"kw\">Fighting Rank</span> if it is <b><span class=\"kw\">Within</span></b> the<b> <span class=\"kw\">Engagement Range</span></b> (1&quot; ) of an <b><span class=\"kw\">Enemy</span></b> model. <span class=\"kw\">Models</span> in the <span class=\"kw\">Fighting Rank</span> may strike with their Combat Phase<b> weapons</b>. See Part <span class=\"ref\">8. 8. 1</span>, Step 2.",
          "plain": "A model is in the Fighting Rank if it is Within the Engagement Range (1\" ) of an Enemy model. Models in the Fighting Rank may strike with their Combat Phase weapons . See Part 8. 8. 1 , Step 2."
        }
      ],
      "children": []
    },
    {
      "id": "first-player-marker",
      "title": "FIRST PLAYER MARKER",
      "rows": [
        {
          "type": "text",
          "html": "A physical Token used to track which player has initiative. At the start of the game, the winner of the Roll-Off (Part <span class=\"ref\">3. 2</span>) assigns the <b><span class=\"kw\">First Player Marker</span></b> to either player for Round 1. The holder of the <b><span class=\"kw\">First Player Marker</span></b> chooses which player activates first at the start of each Phase. The Marker changes hands in two ways: the first player to <b>Pass</b> during Phase 1 or Phase 2 takes the <b><span class=\"kw\">First Player Marker</span></b> for the following Phase, and at the end of Phase 4 the Marker is awarded to the player with fewer <b>Victory Points</b> (Part <span class=\"ref\">8. 9. 6</span>). If Victory Points are tied, both players Roll-Off and the winner takes the Marker.",
          "plain": "A physical Token used to track which player has initiative. At the start of the game, the winner of the Roll-Off (Part 3. 2 ) assigns the First Player Marker to either player for Round 1. The holder of the First Player Marker chooses which player activates first at the start of each Phase. The Marker changes hands in two ways: the first player to Pass during Phase 1 or Phase 2 takes the First Player Marker for the following Phase, and at the end of Phase 4 the Marker is awarded to the player with fewer Victory Points (Part 8. 9. 6 ). If Victory Points are tied, both players Roll-Off and the winner takes the Marker."
        }
      ],
      "children": []
    },
    {
      "id": "flying",
      "title": "FLYING",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> trade board control (no <b><span class=\"kw\">Mission Markers</span></b>, no melee) for mobility and immunity to terrain.",
          "plain": "Flying Units trade board control (no Mission Markers , no melee) for mobility and immunity to terrain."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit ignores all terrain for movement purposes. The <b><span class=\"kw\">Leading Model</span></b> moves point-to-point, measuring horizontally. Other <span class=\"kw\">models</span> may pass through a <b><span class=\"kw\">Flying</span></b> model’s base as if it were not there, and vice versa.",
          "plain": "A Flying Unit ignores all terrain for movement purposes. The Leading Model moves point-to-point, measuring horizontally. Other models may pass through a Flying model’s base as if it were not there, and vice versa."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit is never <b><span class=\"kw\">Engaged</span></b>. <b>Ground</b> <span class=\"kw\">models</span> cannot <b>Engage <span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span>, and <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> cannot <b>Engage</b> other <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span>. A <b><span class=\"kw\">Flying</span></b> Unit must end its movement at least 1&quot; away from all <b><span class=\"kw\">Enemy</span> <span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span>.",
          "plain": "A Flying Unit is never Engaged . Ground models cannot Engage Flying models , and Flying models cannot Engage other Flying models . A Flying Unit must end its movement at least 1\" away from all Enemy Flying Units ."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Flying</span></b> model, ignore the Full <span class=\"kw\">Cover</span> rule. Direct <span class=\"kw\">Cover</span> and the Elevation Dead Zone rules still apply. Assume that <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span>’ <b><span class=\"kw\">Effective Size</span></b> is higher than the <b><span class=\"kw\">Effective Size</span></b> of any terrain piece on the table.",
          "plain": "Flying model, ignore the Full Cover rule. Direct Cover and the Elevation Dead Zone rules still apply. Assume that Flying Units ’ Effective Size is higher than the Effective Size of any terrain piece on the table."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit does not benefit from <b>HIGH GROUND</b> <span class=\"kw\">Cover</span> (Part <span class=\"ref\">7. 1. 3</span>).",
          "plain": "A Flying Unit does not benefit from HIGH GROUND Cover (Part 7. 1. 3 )."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit cannot Control or Contest <b><span class=\"kw\">Mission Markers</span></b> (overrides Parts <span class=\"ref\">6. 2</span> and <span class=\"ref\">8. 9. 1</span>).",
          "plain": "A Flying Unit cannot Control or Contest Mission Markers (overrides Parts 6. 2 and 8. 9. 1 )."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit cannot <b><span class=\"kw\">Charge</span></b> or be <b>Charged</b>.",
          "plain": "A Flying Unit cannot Charge or be Charged ."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit cannot participate in the Combat Phase (Part <span class=\"ref\">8. 8</span>).",
          "plain": "A Flying Unit cannot participate in the Combat Phase (Part 8. 8 )."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit ignores elevation. It does not use <b>Access Points</b>. For <span class=\"kw\">Cover</span> and <b><span class=\"kw\">Line of Sight</span></b> purposes, treat a <b><span class=\"kw\">Flying</span></b> unit&#x27; s <b><span class=\"kw\">Effective Size</span></b> as higher than the <span class=\"kw\">Effective Size</span> of any terrain piece on the table (Part <span class=\"ref\">7. 1. 4</span>). Terrain does not contribute to a <b><span class=\"kw\">Flying</span></b> model&#x27; s <b><span class=\"kw\">Effective Size</span></b>.",
          "plain": "A Flying Unit ignores elevation. It does not use Access Points . For Cover and Line of Sight purposes, treat a Flying unit' s Effective Size as higher than the Effective Size of any terrain piece on the table (Part 7. 1. 4 ). Terrain does not contribute to a Flying model' s Effective Size ."
        },
        {
          "type": "bullet",
          "html": "A <b><span class=\"kw\">Flying</span></b> Unit moving over <span class=\"kw\">Grass</span> does not destroy the <span class=\"kw\">Grass</span> terrain piece. If a <span class=\"kw\">Flying</span> Unit ends on a <span class=\"kw\">Grass</span> terrain piece, it is removed as normal.",
          "plain": "A Flying Unit moving over Grass does not destroy the Grass terrain piece. If a Flying Unit ends on a Grass terrain piece, it is removed as normal."
        }
      ],
      "children": []
    },
    {
      "id": "grass",
      "title": "GRASS",
      "rows": [
        {
          "type": "text",
          "html": "A terrain piece with a Size of 2 that follows special rules. Unlike other Size 2 terrain, <span class=\"kw\">Grass</span><b>does not block movement</b> but <b>does block <span class=\"kw\">Line of Sight</span></b>, following the standard <span class=\"kw\">Cover</span> rules (Part <span class=\"ref\">7. 1. 1</span>).",
          "plain": "A terrain piece with a Size of 2 that follows special rules. Unlike other Size 2 terrain, Grass does not block movement but does block Line of Sight , following the standard Cover rules (Part 7. 1. 1 )."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Grass</span> is destroyed by the passage of war. If a <b><span class=\"kw\">Leading Model</span>’s</b> path of travel passes through or any model of a Unit ends on a <span class=\"kw\">Grass</span> terrain piece during any movement action (<b><span class=\"kw\">Move</span></b>, <b><span class=\"kw\">Deploy</span></b>, <b>Run</b>, <b><span class=\"kw\">Charge</span></b>, <b><span class=\"kw\">Disengage</span></b> or <b>Close Ranks</b>), that <span class=\"kw\">Grass</span> terrain piece is immediately removed from the game. It does not return during <span class=\"kw\">Cleanup &amp; Refresh</span> and cannot be replaced by any means.",
          "plain": "Grass is destroyed by the passage of war. If a Leading Model ’s path of travel passes through or any model of a Unit ends on a Grass terrain piece during any movement action ( Move , Deploy , Run , Charge , Disengage or Close Ranks ), that Grass terrain piece is immediately removed from the game. It does not return during Cleanup & Refresh and cannot be replaced by any means."
        },
        {
          "type": "text",
          "html": "A <span class=\"kw\">Flying</span> Unit moving over <span class=\"kw\">Grass</span> does not destroy the <span class=\"kw\">Grass</span> terrain piece. <span class=\"kw\">Flying</span> <span class=\"kw\">models</span> pass above the terrain, not through it. If any model of a <span class=\"kw\">Flying</span> Unit ends on a <span class=\"kw\">Grass</span> terrain piece, it is removed as normal.",
          "plain": "A Flying Unit moving over Grass does not destroy the Grass terrain piece. Flying models pass above the terrain, not through it. If any model of a Flying Unit ends on a Grass terrain piece, it is removed as normal."
        }
      ],
      "children": []
    },
    {
      "id": "heal",
      "title": "HEAL",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">HEAL</span> (X)<b></b> Remove X points of accumulated <b>Damage</b> from the Unit (reduce its <b>Damage Marker</b> accordingly). <b><span class=\"kw\">HEAL</span></b><b>cannot</b> return Destroyed <span class=\"kw\">models</span> - it only reduces existing <b>Damage</b>. See also: <b><span class=\"kw\">RESPAWN</span></b>.",
          "plain": "HEAL (X) Remove X points of accumulated Damage from the Unit (reduce its Damage Marker accordingly). HEAL cannot return Destroyed models - it only reduces existing Damage . See also: RESPAWN ."
        }
      ],
      "children": []
    },
    {
      "id": "hidden",
      "title": "HIDDEN",
      "rows": [
        {
          "type": "text",
          "html": "This Unit <b>cannot</b> be selected as the target of a <b><span class=\"kw\">Ranged Attack</span></b> or any LoS-requiring <b><span class=\"kw\">Special Ability</span></b> unless the acting model is<b> <span class=\"kw\">Within</span> 4\"</b> of it. A <b><span class=\"kw\">HIDDEN</span></b> Unit is immune to the <b><span class=\"kw\">IMPACT</span></b><b>Keyword</b>. A <b><span class=\"kw\">HIDDEN</span></b> Unit may make an <b>Evade Roll</b> against every attack targeting it.",
          "plain": "This Unit cannot be selected as the target of a Ranged Attack or any LoS-requiring Special Ability unless the acting model is Within 4\" of it. A HIDDEN Unit is immune to the IMPACT Keyword . A HIDDEN Unit may make an Evade Roll against every attack targeting it."
        },
        {
          "type": "block",
          "html": "<div>• A <span class=\"kw\">HIDDEN</span> is classified as a <span class=\"kw\">Status</span>.</div>",
          "plain": "• A HIDDEN is classified as a Status ."
        }
      ],
      "children": []
    },
    {
      "id": "hits",
      "title": "HITS",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">HITS</span> X (Y) The affected Unit suffers <b>X</b> automatic <span class=\"kw\">hits</span>. Set <b>X</b> <span class=\"kw\">dice</span> directly into the<b> Armour Pool</b> and proceed immediately to <b>Armour Rolls</b> (Part <span class=\"ref\">8. 7. 4</span>, Steps 3–4). Treat the <b>Damage</b> characteristic <b>as</b><b>Y</b>. These <span class=\"kw\">hits</span> do not generate Surge.",
          "plain": "HITS X (Y) The affected Unit suffers X automatic hits . Set X dice directly into the Armour Pool and proceed immediately to Armour Rolls (Part 8. 7. 4 , Steps 3–4). Treat the Damage characteristic as Y . These hits do not generate Surge."
        }
      ],
      "children": []
    },
    {
      "id": "impact",
      "title": "IMPACT",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">IMPACT</span> (X) Y<b></b> Immediately after this Unit completes a successful <b><span class=\"kw\">Charge</span></b>, check every model in the <span class=\"kw\">Fighting Rank</span><b></b> or <span class=\"kw\">Supporting Rank</span>. For each eligible model, generate <b>X</b> <span class=\"kw\">Impact</span> <span class=\"kw\">Dice</span>:",
          "plain": "IMPACT (X) Y Immediately after this Unit completes a successful Charge , check every model in the Fighting Rank or Supporting Rank . For each eligible model, generate X Impact Dice :"
        },
        {
          "type": "bullet",
          "html": "If the model is in the <span class=\"kw\">Fighting Rank</span> or <span class=\"kw\">Supporting Rank</span> against only one <b><span class=\"kw\">Enemy</span></b> Unit, all <b>X</b> <span class=\"kw\">dice</span> go to that Unit.",
          "plain": "If the model is in the Fighting Rank or Supporting Rank against only one Enemy Unit, all X dice go to that Unit."
        },
        {
          "type": "bullet",
          "html": "If the model is in the <span class=\"kw\">Fighting Rank</span> or <span class=\"kw\">Supporting Rank</span> against multiple <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>, the <span class=\"kw\">controlling player</span> may split the <span class=\"kw\">dice</span> between those <span class=\"kw\">Units</span>.",
          "plain": "If the model is in the Fighting Rank or Supporting Rank against multiple Enemy Units , the controlling player may split the dice between those Units ."
        },
        {
          "type": "text",
          "html": "Roll the allocated <span class=\"kw\">dice</span> for each target Unit separately (this is the <span class=\"kw\">Impact</span><b>Hit Roll</b>). For each result <b>of Y</b> or higher, set <b>1</b> die into the target’s <b>Armour Pool</b>. Proceed immediately to <b>Armour Rolls</b>. These <span class=\"kw\">hits</span> do not generate Surge and treat <b>Damage as 1</b>.",
          "plain": "Roll the allocated dice for each target Unit separately (this is the Impact Hit Roll ). For each result of Y or higher, set 1 die into the target’s Armour Pool . Proceed immediately to Armour Rolls . These hits do not generate Surge and treat Damage as 1 ."
        }
      ],
      "children": []
    },
    {
      "id": "impassable-terrain",
      "title": "IMPASSABLE TERRAIN",
      "rows": [
        {
          "type": "text",
          "html": "A terrain piece is Impassable if it has no <b><span class=\"kw\">Access Point</span></b> connecting it to an adjacent elevation level. <span class=\"kw\">Models</span><b>cannot</b> <span class=\"kw\">move</span> through, onto, or across <b><span class=\"kw\">IMPASSABLE TERRAIN</span></b>, and no model may end its movement overlapping it. Terrains of sizes 0 and 1 are never considered <span class=\"kw\">IMPASSABLE TERRAIN</span>.",
          "plain": "A terrain piece is Impassable if it has no Access Point connecting it to an adjacent elevation level. Models cannot move through, onto, or across IMPASSABLE TERRAIN , and no model may end its movement overlapping it. Terrains of sizes 0 and 1 are never considered IMPASSABLE TERRAIN ."
        }
      ],
      "children": []
    },
    {
      "id": "indirect-fire",
      "title": "INDIRECT FIRE",
      "rows": [
        {
          "type": "text",
          "html": "<b>Ranged Attacks</b> with this weapon may ignore <b><span class=\"kw\">Line of Sight</span></b> when selecting a target and resolving <b>Damage</b>. The target <b>must</b> still be <b><span class=\"kw\">Within</span></b> Range. If the target is not<b> <span class=\"kw\">Visible</span></b>, it may make an <b>Evade Roll</b> against this attack.",
          "plain": "Ranged Attacks with this weapon may ignore Line of Sight when selecting a target and resolving Damage . The target must still be Within Range. If the target is not Visible , it may make an Evade Roll against this attack."
        }
      ],
      "children": []
    },
    {
      "id": "instant",
      "title": "INSTANT",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span><b>cannot</b> declare or resolve <b><span class=\"kw\">Reaction abilities</span></b> in response to attacks made with this weapon.",
          "plain": "Enemy Units cannot declare or resolve Reaction abilities in response to attacks made with this weapon."
        }
      ],
      "children": []
    },
    {
      "id": "large-x",
      "title": "LARGE (X)",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">LARGE</span> (X)<b></b> When this Unit’s <b><span class=\"kw\">Leading Model</span></b> moves, it may pass through physical gaps at least <b>X\"</b> wide, regardless of its <b>base size</b>.",
          "plain": "LARGE (X) When this Unit’s Leading Model moves, it may pass through physical gaps at least X\" wide, regardless of its base size ."
        }
      ],
      "children": []
    },
    {
      "id": "locked-in",
      "title": "LOCKED IN",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">LOCKED IN</span> (X)<b></b> When making a <b><span class=\"kw\">Ranged Attack</span></b> with this weapon, add<b> X</b> to its <b>RoA</b> if the target Unit has <b><span class=\"kw\">Stationary</span> <span class=\"kw\">Status</span></b>.",
          "plain": "LOCKED IN (X) When making a Ranged Attack with this weapon, add X to its RoA if the target Unit has Stationary Status ."
        }
      ],
      "children": []
    },
    {
      "id": "long-range",
      "title": "LONG RANGE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">LONG RANGE</span> (X)<b></b> The maximum <b>Range</b> of this weapon increases to<b> X\"</b>.",
          "plain": "LONG RANGE (X) The maximum Range of this weapon increases to X\" ."
        },
        {
          "type": "text",
          "html": "Measure each attacking model’s distance to the target individually:",
          "plain": "Measure each attacking model’s distance to the target individually:"
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Within</span></b> normal profile <b>Range</b>: attack resolves normally.",
          "plain": "Within normal profile Range : attack resolves normally."
        },
        {
          "type": "bullet",
          "html": "Beyond profile <b>Range</b> but <b><span class=\"kw\">Within</span></b><b>X\"</b>: the model suffers a <b>-1 <span class=\"kw\">Modifier</span></b> to its <b>Hit roll</b>.",
          "plain": "Beyond profile Range but Within X\" : the model suffers a -1 Modifier to its Hit roll ."
        },
        {
          "type": "text",
          "html": "If a Batch contains <span class=\"kw\">models</span> at both <b>Standard</b> and <b><span class=\"kw\">Long Range</span></b>, generate the total <span class=\"kw\">dice</span> but roll the two groups separately to account for different <b>Hit Target Numbers</b>.",
          "plain": "If a Batch contains models at both Standard and Long Range , generate the total dice but roll the two groups separately to account for different Hit Target Numbers ."
        }
      ],
      "children": []
    },
    {
      "id": "non-lethal-damage",
      "title": "NON-LETHAL DAMAGE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">NON-LETHAL DAMAGE</span> (X)<b></b> The Unit suffers <b>X</b> points of <b>Damage</b>. Add this amount effectively to the Unit’s <b>Damage Marker</b>. Unlike standard <b>Damage</b>, <b><span class=\"kw\">NON-LETHAL DAMAGE</span></b> does not trigger the Remove Casualties step (Part <span class=\"ref\">8. 7. 4</span>, Step 5), even if <b>Total Damage</b> exceeds a model’s <b>HP</b>. If the Unit subsequently suffers standard <b>Damage</b>, the combined <b>Total Damage</b> triggers <span class=\"kw\">casualty removal</span> normally.",
          "plain": "NON-LETHAL DAMAGE (X) The Unit suffers X points of Damage . Add this amount effectively to the Unit’s Damage Marker . Unlike standard Damage , NON-LETHAL DAMAGE does not trigger the Remove Casualties step (Part 8. 7. 4 , Step 5), even if Total Damage exceeds a model’s HP . If the Unit subsequently suffers standard Damage , the combined Total Damage triggers casualty removal normally."
        }
      ],
      "children": []
    },
    {
      "id": "on-creep",
      "title": "ON CREEP",
      "rows": [
        {
          "type": "text",
          "html": "A <b><span class=\"kw\">Friendly</span></b> or <b><span class=\"kw\">Enemy</span> Ground <span class=\"kw\">Zerg</span></b> Unit is considered to be <b><span class=\"kw\">ON CREEP</span></b> while it is <b><span class=\"kw\">Within</span> 6\"</b> of any <b>Creep Tumor</b> Token or any model designated as a <b>Source of Creep</b>. While satisfying this condition, the Unit gains the <b><span class=\"kw\">ON CREEP</span> Keyword</b>. This allows the Unit to trigger specific <b><span class=\"kw\">Special Abilities</span></b> or <b>Upgrades</b> that require this state.",
          "plain": "A Friendly or Enemy Ground Zerg Unit is considered to be ON CREEP while it is Within 6\" of any Creep Tumor Token or any model designated as a Source of Creep . While satisfying this condition, the Unit gains the ON CREEP Keyword . This allows the Unit to trigger specific Special Abilities or Upgrades that require this state."
        }
      ],
      "children": []
    },
    {
      "id": "pierce",
      "title": "PIERCE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">PIERCE</span> [TAG] X<b></b> When attacking a Unit with the specified <b>Combat Tag</b>, treat this weapon’s <b>Damage</b> characteristic <b>as X</b>.",
          "plain": "PIERCE [TAG] X When attacking a Unit with the specified Combat Tag , treat this weapon’s Damage characteristic as X ."
        }
      ],
      "children": []
    },
    {
      "id": "pinpoint",
      "title": "PINPOINT",
      "rows": [
        {
          "type": "text",
          "html": "<b>Ranged Attacks</b> with this weapon may target <b><span class=\"kw\">Engaged</span></b><b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>, ignoring the standard <b>Engagement <span class=\"kw\">Status</span></b> restriction (overrides Part <span class=\"ref\">8. 7. 3</span>, Step 1).",
          "plain": "Ranged Attacks with this weapon may target Engaged Enemy Units , ignoring the standard Engagement Status restriction (overrides Part 8. 7. 3 , Step 1)."
        }
      ],
      "children": []
    },
    {
      "id": "place",
      "title": "PLACE",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">PLACE</span> (X)<b></b> Choose a <b><span class=\"kw\">Leading Model</span></b>. Remove it and set it <b><span class=\"kw\">Wholly Within</span> X\"</b> of its starting position. Then remove and replace all other <span class=\"kw\">models</span> in the Unit, maintaining <b>Coherency</b> (Part <span class=\"ref\">4. 4</span>). <b><span class=\"kw\">PLACE</span></b> ignores Gap Clearance, terrain restrictions, and elevation requirements. The<b> <span class=\"kw\">Leading Model</span></b> is removed and set directly, not moved along a path. However, they <b>must</b> end in a legal position. <span class=\"kw\">Models</span> may be set <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> (the Unit becomes<b> <span class=\"kw\">Engaged</span></b>) unless stated otherwise.",
          "plain": "PLACE (X) Choose a Leading Model . Remove it and set it Wholly Within X\" of its starting position. Then remove and replace all other models in the Unit, maintaining Coherency (Part 4. 4 ). PLACE ignores Gap Clearance, terrain restrictions, and elevation requirements. The Leading Model is removed and set directly, not moved along a path. However, they must end in a legal position. Models may be set Within the Engagement Range of Enemy models (the Unit becomes Engaged ) unless stated otherwise."
        }
      ],
      "children": []
    },
    {
      "id": "ready",
      "title": "READY",
      "rows": [
        {
          "type": "text",
          "html": "The default state of a <b>Tactical Card</b> or <b>Faction Card</b>. A <span class=\"kw\">Ready</span> card is face-up, its abilities are available, and it may be <b>Exhausted</b> to pay resource costs or activate its <b><span class=\"kw\">Special Abilities</span></b>. All <b><span class=\"kw\">Tactical Cards</span></b> and <b><span class=\"kw\">Faction Cards</span></b> begin each Round in the <span class=\"kw\">Ready</span> state. Cards that have been <b>Exhausted</b> are returned to <span class=\"kw\">Ready</span> during <span class=\"kw\">Cleanup &amp; Refresh</span> (Part <span class=\"ref\">8. 9. 5</span>).",
          "plain": "The default state of a Tactical Card or Faction Card . A Ready card is face-up, its abilities are available, and it may be Exhausted to pay resource costs or activate its Special Abilities . All Tactical Cards and Faction Cards begin each Round in the Ready state. Cards that have been Exhausted are returned to Ready during Cleanup & Refresh (Part 8. 9. 5 )."
        }
      ],
      "children": []
    },
    {
      "id": "stationary",
      "title": "STATIONARY",
      "rows": [
        {
          "type": "text",
          "html": "At the <b>Start of the Round</b>, all <span class=\"kw\">Units</span> gain this <span class=\"kw\">Status</span>. A Unit immediately loses this <span class=\"kw\">Status</span> if any model in this Unit moves, is moved, or is <b>PLACED</b> for any reason.",
          "plain": "At the Start of the Round , all Units gain this Status . A Unit immediately loses this Status if any model in this Unit moves, is moved, or is PLACED for any reason."
        }
      ],
      "children": []
    },
    {
      "id": "precision",
      "title": "PRECISION",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">PRECISION</span> (X)<b></b> After rolling to<b> Hit</b>, <span class=\"kw\">move</span> up to<b> X</b> failed <b>Attack <span class=\"kw\">Dice</span></b> directly into the <b>Armour Pool</b>. Treat them as successful <b><span class=\"kw\">Hits</span></b> for all purposes, including <b>Surge</b>.",
          "plain": "PRECISION (X) After rolling to Hit , move up to X failed Attack Dice directly into the Armour Pool . Treat them as successful Hits for all purposes, including Surge ."
        }
      ],
      "children": []
    },
    {
      "id": "repeatable",
      "title": "REPEATABLE",
      "rows": [
        {
          "type": "text",
          "html": "This ability is exempt from the <b>Once Per Round</b> limit (Part <span class=\"ref\">2. 7. 1</span>). It may be used multiple times per <b>Round</b> and per <b>Activation</b>, provided all <b>Costs</b> and trigger conditions are met each time.",
          "plain": "This ability is exempt from the Once Per Round limit (Part 2. 7. 1 ). It may be used multiple times per Round and per Activation , provided all Costs and trigger conditions are met each time."
        }
      ],
      "children": []
    },
    {
      "id": "reserves",
      "title": "RESERVES",
      "rows": [
        {
          "type": "text",
          "html": "A holding area off the battlefield where <span class=\"kw\">Units</span> remain until they are deployed. All <span class=\"kw\">Units</span> begin the game in <b><span class=\"kw\">Reserves</span></b>. A Unit in <b><span class=\"kw\">Reserves</span></b> is part of the player’s army for all purposes - it counts towards <span class=\"kw\">Army Building</span> limits and is tracked on the Army Roster - but it is <b>not</b> on the battlefield.",
          "plain": "A holding area off the battlefield where Units remain until they are deployed. All Units begin the game in Reserves . A Unit in Reserves is part of the player’s army for all purposes - it counts towards Army Building limits and is tracked on the Army Roster - but it is not on the battlefield."
        },
        {
          "type": "text",
          "html": "While in <b><span class=\"kw\">Reserves</span></b>, a Unit:",
          "plain": "While in Reserves , a Unit:"
        },
        {
          "type": "bullet",
          "html": "Cannot be targeted by attacks or abilities unless an ability explicitly states it affects <span class=\"kw\">Units</span> in <b><span class=\"kw\">Reserves</span></b>.",
          "plain": "Cannot be targeted by attacks or abilities unless an ability explicitly states it affects Units in Reserves ."
        },
        {
          "type": "bullet",
          "html": "Cannot use <b><span class=\"kw\">Active Abilities</span></b>, <b><span class=\"kw\">Passive Abilities</span></b>, or <b><span class=\"kw\">Reaction Abilities</span></b> unless the ability explicitly states otherwise.",
          "plain": "Cannot use Active Abilities , Passive Abilities , or Reaction Abilities unless the ability explicitly states otherwise."
        },
        {
          "type": "bullet",
          "html": "Cannot control or contest <b><span class=\"kw\">Mission Markers</span></b>.",
          "plain": "Cannot control or contest Mission Markers ."
        },
        {
          "type": "bullet",
          "html": "Does not contribute its <b>Current Supply</b> to the player’s <b>Total Current Supply</b> on the battlefield.",
          "plain": "Does not contribute its Current Supply to the player’s Total Current Supply on the battlefield."
        },
        {
          "type": "bullet",
          "html": "Retains all equipment, upgrades, and weapon selections assigned during <b><span class=\"kw\">Army Building</span></b>.",
          "plain": "Retains all equipment, upgrades, and weapon selections assigned during Army Building ."
        },
        {
          "type": "text",
          "html": "A Unit enters <b><span class=\"kw\">Reserves</span></b> at the start of the game and leaves <b><span class=\"kw\">Reserves</span></b> when it is deployed to the battlefield. Some rules may return a Unit to <b><span class=\"kw\">Reserves</span></b> during play - see Part <span class=\"ref\">8. 5. 5</span> (<span class=\"kw\">Units</span> Returned to <b><span class=\"kw\">Reserves</span></b>) for how <b>Damage</b>, effects, and Supply are handled when this occurs.",
          "plain": "A Unit enters Reserves at the start of the game and leaves Reserves when it is deployed to the battlefield. Some rules may return a Unit to Reserves during play - see Part 8. 5. 5 ( Units Returned to Reserves ) for how Damage , effects, and Supply are handled when this occurs."
        },
        {
          "type": "text",
          "html": "In the final Round of the game, all <span class=\"kw\">Units</span> still in <b><span class=\"kw\">Reserves</span></b> that are not deployed are treated as <b>Destroyed</b> for scoring purposes (Part <span class=\"ref\">8. 10</span>).",
          "plain": "In the final Round of the game, all Units still in Reserves that are not deployed are treated as Destroyed for scoring purposes (Part 8. 10 )."
        }
      ],
      "children": []
    },
    {
      "id": "respawn",
      "title": "RESPAWN",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">RESPAWN</span> (X)<b></b> Return up to <b>X</b> Destroyed <span class=\"kw\">models</span> to this Unit.",
          "plain": "RESPAWN (X) Return up to X Destroyed models to this Unit."
        },
        {
          "type": "bullet",
          "html": "The return <b>cannot</b> increase the Unit’s <b>Current Supply</b><b>Value</b>. Do not return a model if doing so would push the Unit into a higher Supply bracket.",
          "plain": "The return cannot increase the Unit’s Current Supply Value . Do not return a model if doing so would push the Unit into a higher Supply bracket."
        },
        {
          "type": "bullet",
          "html": "Set each returned model in <b>Base-to-Base</b> contact with an existing model in the Unit. Returned <span class=\"kw\">models</span><b>cannot</b> be set <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of any <b><span class=\"kw\">Enemy</span></b> Unit.",
          "plain": "Set each returned model in Base-to-Base contact with an existing model in the Unit. Returned models cannot be set Within the Engagement Range of any Enemy Unit."
        },
        {
          "type": "bullet",
          "html": "If a model <b>cannot</b> be set legally, it cannot be returned.",
          "plain": "If a model cannot be set legally, it cannot be returned."
        }
      ],
      "children": []
    },
    {
      "id": "shielded",
      "title": "SHIELDED",
      "rows": [
        {
          "type": "text",
          "html": "If a <b>Shield</b> value is present on a Unit Card, add it to the H<b>it Points (HP)</b> of the first model. The Unit is <b><span class=\"kw\">Shielded</span></b>. The Unit loses its <b><span class=\"kw\">Shielded</span> <span class=\"kw\">Status</span></b> when the <b>Total Damage</b> assigned to it exceeds its <b>Shield</b> value or when the first model in the Unit is removed.",
          "plain": "If a Shield value is present on a Unit Card, add it to the H it Points (HP) of the first model. The Unit is Shielded . The Unit loses its Shielded Status when the Total Damage assigned to it exceeds its Shield value or when the first model in the Unit is removed."
        },
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Shielded</span> <span class=\"kw\">Status</span></b> is referenced by other abilities. Losing <b><span class=\"kw\">Shielded</span> <span class=\"kw\">Status</span></b> does not remove any remaining <b>Hit Points</b>, it only ends effects that require the Unit to be <b><span class=\"kw\">Shielded</span></b>.",
          "plain": "The Shielded Status is referenced by other abilities. Losing Shielded Status does not remove any remaining Hit Points , it only ends effects that require the Unit to be Shielded ."
        }
      ],
      "children": []
    },
    {
      "id": "sidearm",
      "title": "SIDEARM",
      "rows": [
        {
          "type": "text",
          "html": "When this Unit performs a <b><span class=\"kw\">Ranged Attack</span></b> or <b>Close Combat Attack</b>, <span class=\"kw\">models</span> equipped with this weapon may use it, ignoring the normal restriction of one weapon per model (Part <span class=\"ref\">8. 7. 3</span>). If a model is equipped with multiple <b><span class=\"kw\">SIDEARM</span></b> weapons, it may use all of them in the same activation.",
          "plain": "When this Unit performs a Ranged Attack or Close Combat Attack , models equipped with this weapon may use it, ignoring the normal restriction of one weapon per model (Part 8. 7. 3 ). If a model is equipped with multiple SIDEARM weapons, it may use all of them in the same activation."
        },
        {
          "type": "text",
          "html": "Attacks made with each <b><span class=\"kw\">SIDEARM</span></b> must be resolved in separate Batches. Because they are separate Batches, <b><span class=\"kw\">SIDEARM</span></b> attacks may target a different <b><span class=\"kw\">Enemy</span></b> Unit than the Unit&#x27; s other weapons, subject to all standard target eligibility requirements.",
          "plain": "Attacks made with each SIDEARM must be resolved in separate Batches. Because they are separate Batches, SIDEARM attacks may target a different Enemy Unit than the Unit' s other weapons, subject to all standard target eligibility requirements."
        }
      ],
      "children": []
    },
    {
      "id": "supporting-rank",
      "title": "SUPPORTING RANK",
      "rows": [
        {
          "type": "text",
          "html": "A model is in the <span class=\"kw\">Supporting Rank</span> if it is in <b>Base-to-Base</b> contact with a <b><span class=\"kw\">Friendly</span></b> model from the same Unit that is in the <span class=\"kw\">Fighting Rank</span>, but is not itself <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of an <b><span class=\"kw\">Enemy</span></b> model. <span class=\"kw\">Models</span> in the <span class=\"kw\">Supporting Rank</span> may strike with their Combat Phase<b> weapons</b> as though they were in the fight. See Part <span class=\"ref\">8. 8. 1</span>, Step 2.",
          "plain": "A model is in the Supporting Rank if it is in Base-to-Base contact with a Friendly model from the same Unit that is in the Fighting Rank , but is not itself Within the Engagement Range of an Enemy model. Models in the Supporting Rank may strike with their Combat Phase weapons as though they were in the fight. See Part 8. 8. 1 , Step 2."
        }
      ],
      "children": []
    },
    {
      "id": "specialist",
      "title": "SPECIALIST",
      "rows": [
        {
          "type": "text",
          "html": "A Unit may include only one model equipped with this weapon. Multiple upgrades configuring more than one instance of this weapon are not permitted (Part <span class=\"ref\">9. 1. 7</span>).",
          "plain": "A Unit may include only one model equipped with this weapon. Multiple upgrades configuring more than one instance of this weapon are not permitted (Part 9. 1. 7 )."
        }
      ],
      "children": []
    },
    {
      "id": "spillover",
      "title": "SPILLOVER",
      "rows": [
        {
          "type": "text",
          "html": "Additional <span class=\"kw\">hits</span> generated by a <b>Template Weapon</b> that strike <span class=\"kw\">models</span> outside the Primary target Unit. When a <b>Blast Template (BT)</b> or <b>Flamer Template (FT)</b> covers <span class=\"kw\">models</span> belonging to <span class=\"kw\">Units</span> other than the Primary target, those <span class=\"kw\">models</span> are resolved as <span class=\"kw\">Spillover</span>. Each affected Unit is resolved as a separate <b>Batch</b>. <span class=\"kw\">Spillover</span> Batches do not apply <b>Rate of Attack</b> <span class=\"kw\">modifiers</span> and do not generate Surge. <span class=\"kw\">Spillover</span> may affect both <b><span class=\"kw\">Friendly</span></b> and <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>. See Part <span class=\"ref\">8. 7. 6</span> for the full Template Weapon procedure.",
          "plain": "Additional hits generated by a Template Weapon that strike models outside the Primary target Unit. When a Blast Template (BT) or Flamer Template (FT) covers models belonging to Units other than the Primary target, those models are resolved as Spillover . Each affected Unit is resolved as a separate Batch . Spillover Batches do not apply Rate of Attack modifiers and do not generate Surge. Spillover may affect both Friendly and Enemy Units . See Part 8. 7. 6 for the full Template Weapon procedure."
        }
      ],
      "children": []
    },
    {
      "id": "stay-in-play",
      "title": "STAY IN PLAY",
      "rows": [
        {
          "type": "text",
          "html": "This Token, Marker or <b>Ability Effect</b> persists through <span class=\"kw\">Cleanup &amp; Refresh</span> (overrides Part <b><span class=\"ref\">8. 9. 5</span></b>). It remains until a specific condition removes it (e. g. destroyed or duration expires).",
          "plain": "This Token, Marker or Ability Effect persists through Cleanup & Refresh (overrides Part 8. 9. 5 ). It remains until a specific condition removes it (e. g. destroyed or duration expires)."
        }
      ],
      "children": []
    },
    {
      "id": "status",
      "title": "STATUS",
      "rows": [
        {
          "type": "text",
          "html": "A category of <b>Keyword</b> representing a temporary or persistent operational mode, condition, or statistic <span class=\"kw\">modifier</span> affecting a Unit (e. g. <b><span class=\"kw\">BURROWED</span></b>, <b>SIEGE MODE</b>).",
          "plain": "A category of Keyword representing a temporary or persistent operational mode, condition, or statistic modifier affecting a Unit (e. g. BURROWED , SIEGE MODE )."
        },
        {
          "type": "text",
          "html": "A Unit’s active <span class=\"kw\">Status</span> is visually tracked using <b><span class=\"kw\">Status</span> <span class=\"kw\">Markers</span></b> set next to the Unit:",
          "plain": "A Unit’s active Status is visually tracked using Status Markers set next to the Unit:"
        },
        {
          "type": "bullet",
          "html": "<b>Modes:</b> Use Plastic <span class=\"kw\">Markers</span> to track operational shifts (e. g. <b>SIEGE MODE, <span class=\"kw\">BURROWED</span></b>). Those <b><span class=\"kw\">Status</span> <span class=\"kw\">Markers</span></b> have <b><span class=\"kw\">STAY IN PLAY</span></b>.",
          "plain": "Modes: Use Plastic Markers to track operational shifts (e. g. SIEGE MODE, BURROWED ). Those Status Markers have STAY IN PLAY ."
        },
        {
          "type": "bullet",
          "html": "<b>Buffs/Debuffs:</b> Use <span class=\"kw\">Markers</span> to track temporary changes to characteristics (Blue = <span class=\"kw\">Buff</span>, Red = <span class=\"kw\">Debuff</span>).",
          "plain": "Buffs/Debuffs: Use Markers to track temporary changes to characteristics (Blue = Buff , Red = Debuff )."
        }
      ],
      "children": []
    },
    {
      "id": "summon",
      "title": "SUMMON",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">SUMMON</span> (Unit Name)<b></b> Set the<b> <span class=\"kw\">Leading Model</span></b> of the named Unit in <b>Base-to-Base</b> contact with the <b>Parent</b> Unit. Set remaining <span class=\"kw\">models</span><b>In</b><b>Coherency</b>. <span class=\"kw\">Models</span> cannot be set <b><span class=\"kw\">Within</span></b> the<b> <span class=\"kw\">Engagement Range</span></b> of any <b><span class=\"kw\">Enemy</span></b> Unit.",
          "plain": "SUMMON (Unit Name) Set the Leading Model of the named Unit in Base-to-Base contact with the Parent Unit. Set remaining models In Coherency . Models cannot be set Within the Engagement Range of any Enemy Unit."
        },
        {
          "type": "text",
          "html": "Set an <b>Activation Marker</b> next to the summoned Unit - it cannot be <b>Activated</b> during the Phase in which it was summoned. In subsequent Phases, this Unit must be <b>Activated</b> immediately after its Parent Unit’s activation ends, before the opponent’s next activation.",
          "plain": "Set an Activation Marker next to the summoned Unit - it cannot be Activated during the Phase in which it was summoned. In subsequent Phases, this Unit must be Activated immediately after its Parent Unit’s activation ends, before the opponent’s next activation."
        },
        {
          "type": "text",
          "html": "The Summoned Unit cannot be set <b><span class=\"kw\">Within</span></b> the opponent’s <b><span class=\"kw\">Zone of Influence</span></b>.",
          "plain": "The Summoned Unit cannot be set Within the opponent’s Zone of Influence ."
        },
        {
          "type": "text",
          "html": "The player <b>must</b> have sufficient <b><span class=\"kw\">Available Supply</span></b>. If the Unit’s <b><span class=\"kw\">Current Supply Value</span></b> would cause <b>Total Current Supply</b> to exceed <span class=\"kw\">the Supply Pool</span>, it cannot be Summoned.",
          "plain": "The player must have sufficient Available Supply . If the Unit’s Current Supply Value would cause Total Current Supply to exceed the Supply Pool , it cannot be Summoned."
        },
        {
          "type": "text",
          "html": "If the Parent is not present on the battlefield, this Unit can be <b>Activated</b> normally.",
          "plain": "If the Parent is not present on the battlefield, this Unit can be Activated normally."
        }
      ],
      "children": []
    },
    {
      "id": "tactical-mass",
      "title": "TACTICAL MASS",
      "rows": [
        {
          "type": "text",
          "html": "A Unit has <span class=\"kw\">Tactical Mass</span> when its Current <b><span class=\"kw\">Supply Value</span></b> exceeds the Combined Current <b><span class=\"kw\">Supply Value</span></b> of all <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> it is <b><span class=\"kw\">Engaged</span></b> with. A Unit with <span class=\"kw\">Tactical Mass</span> ignores the <b><span class=\"kw\">Disengage</span></b> penalty (Part <span class=\"ref\">8. 5. 4</span>): it may <b><span class=\"kw\">Ranged Attack</span></b> and <b><span class=\"kw\">Charge</span></b> normally in the following Assault Phase after Disengaging.",
          "plain": "A Unit has Tactical Mass when its Current Supply Value exceeds the Combined Current Supply Value of all Enemy Units it is Engaged with. A Unit with Tactical Mass ignores the Disengage penalty (Part 8. 5. 4 ): it may Ranged Attack and Charge normally in the following Assault Phase after Disengaging."
        }
      ],
      "children": []
    },
    {
      "id": "tough",
      "title": "TOUGH",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">TOUGH</span> (X)<b></b> When this Unit resolves an <b>Armour Roll</b>, change up <b>to X</b> failed results into successes. Treat them as meeting or exceeding the <b>Armour</b> characteristic - discard them without moving to the <b>Damage Pool</b>.",
          "plain": "TOUGH (X) When this Unit resolves an Armour Roll , change up to X failed results into successes. Treat them as meeting or exceeding the Armour characteristic - discard them without moving to the Damage Pool ."
        }
      ],
      "children": []
    },
    {
      "id": "zone-of-influence",
      "title": "ZONE OF INFLUENCE",
      "rows": [
        {
          "type": "text",
          "html": "A restricted area of the battlefield extending <b>6\"</b> inward from a player’s <b><span class=\"kw\">Entry Edge</span></b>, as defined by the <b><span class=\"kw\">Deployment</span> Card</b>. Where the <b>Entry Edg</b> e does not run the full length of a table edge, the <b><span class=\"kw\">Zone of Influence</span></b> is marked using <b><span class=\"kw\">Zone of Influence</span> <span class=\"kw\">Markers</span></b> set at the corners of the <b><span class=\"kw\">Entry Edge</span></b>.",
          "plain": "A restricted area of the battlefield extending 6\" inward from a player’s Entry Edge , as defined by the Deployment Card . Where the Entry Edg e does not run the full length of a table edge, the Zone of Influence is marked using Zone of Influence Markers set at the corners of the Entry Edge ."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Units</span> arriving from <b><span class=\"kw\">Reserves</span></b> cannot end their <span class=\"kw\">deployment</span><b><span class=\"kw\">Within</span></b> the opponent’s <b><span class=\"kw\">Zone of Influence</span></b>. This restriction applies to all forms of arrival - whether by standard <span class=\"kw\">deployment</span>, transport, or <b><span class=\"kw\">SUMMON</span></b> (Part <span class=\"ref\">8. 3. 3</span>).",
          "plain": "Units arriving from Reserves cannot end their deployment Within the opponent’s Zone of Influence . This restriction applies to all forms of arrival - whether by standard deployment , transport, or SUMMON (Part 8. 3. 3 )."
        },
        {
          "type": "text",
          "html": "The Z<b>one of Influence</b> does not affect <span class=\"kw\">Units</span> already on the battlefield. It does not restrict movement, block <b><span class=\"kw\">Line of Sight</span></b>, or interact with any other rule once a Unit has completed its arrival.",
          "plain": "The Z one of Influence does not affect Units already on the battlefield. It does not restrict movement, block Line of Sight , or interact with any other rule once a Unit has completed its arrival."
        }
      ],
      "children": []
    },
    {
      "id": "friendly",
      "title": "FRIENDLY",
      "rows": [
        {
          "type": "text",
          "html": "All <span class=\"kw\">Units</span>, <span class=\"kw\">Tokens</span>, and cards belonging to the <span class=\"kw\">Controlling Player</span> are <b><span class=\"kw\">Friendly</span></b> to one another. In <span class=\"kw\">team games</span>, all teammates&#x27; <span class=\"kw\">Units</span>, <span class=\"kw\">Tokens</span>, and cards are also <b><span class=\"kw\">Friendly</span></b>. A Unit&#x27; s own <span class=\"kw\">models</span> are always <b><span class=\"kw\">Friendly</span></b> to it. <b><span class=\"kw\">Friendly</span></b> is the opposite of <b><span class=\"kw\">Enemy</span></b> and is used throughout the rules to determine targeting restrictions, movement interactions, and ability eligibility.",
          "plain": "All Units , Tokens , and cards belonging to the Controlling Player are Friendly to one another. In team games , all teammates' Units , Tokens , and cards are also Friendly . A Unit' s own models are always Friendly to it. Friendly is the opposite of Enemy and is used throughout the rules to determine targeting restrictions, movement interactions, and ability eligibility."
        }
      ],
      "children": []
    },
    {
      "id": "enemy",
      "title": "ENEMY",
      "rows": [
        {
          "type": "text",
          "html": "All <span class=\"kw\">Units</span>, <span class=\"kw\">Tokens</span>, and cards belonging to the opponent are <b>Enemies</b>. In <span class=\"kw\">team games</span>, all opposing players&#x27; <span class=\"kw\">Units</span>, <span class=\"kw\">Tokens</span>, and cards are <b>Enemies</b>. A Unit may never target a <b><span class=\"kw\">Friendly</span></b> Unit with an attack unless a rule explicitly states otherwise. <b><span class=\"kw\">Enemy</span></b> is the opposite of <b><span class=\"kw\">Friendly</span></b> and is referenced throughout the rules to determine valid targets, <b>Engagement</b>, and <b>Mission Marker</b> contests.",
          "plain": "All Units , Tokens , and cards belonging to the opponent are Enemies . In team games , all opposing players' Units , Tokens , and cards are Enemies . A Unit may never target a Friendly Unit with an attack unless a rule explicitly states otherwise. Enemy is the opposite of Friendly and is referenced throughout the rules to determine valid targets, Engagement , and Mission Marker contests."
        }
      ],
      "children": []
    },
    {
      "id": "visible",
      "title": "VISIBLE",
      "rows": [
        {
          "type": "text",
          "html": "A model is <b><span class=\"kw\">Visible</span></b> to another model if a valid <b><span class=\"kw\">Line of Sight</span></b> trace can be drawn between them (Part <span class=\"ref\">7. 1</span>). If the trace does not pass through any <b><span class=\"kw\">Blocking Terrain</span></b>, the target is <b><span class=\"kw\">Visible</span></b> without further checks. If the trace passes through <b><span class=\"kw\">Blocking Terrain</span></b>, apply the <span class=\"kw\">Cover</span> rules (Part <span class=\"ref\">7. 1. 1</span>)- the target remains <b><span class=\"kw\">Visible</span></b> unless Full <span class=\"kw\">Cover</span> or Direct <span class=\"kw\">Cover</span> blocks the <b><span class=\"kw\">Line of Sight</span></b>.",
          "plain": "A model is Visible to another model if a valid Line of Sight trace can be drawn between them (Part 7. 1 ). If the trace does not pass through any Blocking Terrain , the target is Visible without further checks. If the trace passes through Blocking Terrain , apply the Cover rules (Part 7. 1. 1 )- the target remains Visible unless Full Cover or Direct Cover blocks the Line of Sight ."
        },
        {
          "type": "text",
          "html": "A model with the <b><span class=\"kw\">HIDDEN</span></b> Keyword is not <b><span class=\"kw\">Visible</span></b> to any model more than <b>4\"</b> away, regardless of <b><span class=\"kw\">Line of Sight</span></b>.",
          "plain": "A model with the HIDDEN Keyword is not Visible to any model more than 4\" away, regardless of Line of Sight ."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Visible</span></b> is a reciprocal state: if Model A is <b><span class=\"kw\">Visible</span></b> to Model B, then Model B is <b><span class=\"kw\">Visible</span></b> to Model A.",
          "plain": "Visible is a reciprocal state: if Model A is Visible to Model B, then Model B is Visible to Model A."
        }
      ],
      "children": []
    },
    {
      "id": "combat-tags",
      "title": "COMBAT TAGS",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Combat Tags</span></b> are <span class=\"kw\">Keywords</span> printed on a <b>Unit Card</b> that identify a Unit&#x27; s physical nature and tactical class.",
          "plain": "Combat Tags are Keywords printed on a Unit Card that identify a Unit' s physical nature and tactical class."
        },
        {
          "type": "text",
          "html": "<b>Type <span class=\"kw\">Tags</span>: Armoured, Biological, Light, Mechanical, Psionic, <span class=\"kw\">Flying</span>, and Ground.</b>",
          "plain": "Type Tags : Armoured, Biological, Light, Mechanical, Psionic, Flying , and Ground."
        },
        {
          "type": "bullet",
          "html": "<b>Targeting:</b> Some weapons can fire only at specific <b><span class=\"kw\">Combat Tags</span></b> (e. g. , &quot; Target: <b><span class=\"kw\">Flying</span></b>&quot; ).",
          "plain": "Targeting: Some weapons can fire only at specific Combat Tags (e. g. , \" Target: Flying \" )."
        },
        {
          "type": "bullet",
          "html": "<b>Surge:</b> A weapon&#x27; s Surge efficiency triggers only when the target has the <b>Combat Tag</b> listed in the weapon&#x27; s <b>Surge Type</b> (Part <span class=\"ref\">8. 7. 4</span>).",
          "plain": "Surge: A weapon' s Surge efficiency triggers only when the target has the Combat Tag listed in the weapon' s Surge Type (Part 8. 7. 4 )."
        },
        {
          "type": "bullet",
          "html": "<b>Bonuses:</b> Abilities such as <b><span class=\"kw\">ANTI-EVADE</span> (X)</b> or <b><span class=\"kw\">PIERCE</span> (X)</b> often apply only against specific <b><span class=\"kw\">Combat Tags</span></b>.",
          "plain": "Bonuses: Abilities such as ANTI-EVADE (X) or PIERCE (X) often apply only against specific Combat Tags ."
        },
        {
          "type": "text",
          "html": "Note: The <b>Ground Combat Tag</b> and the <b>GROUND LEVEL</b> elevation (Part <span class=\"ref\">8. 5. 3</span>) are distinct concepts. A <b><span class=\"kw\">Flying</span></b> Unit standing on the playmat is at <b>GROUND LEVEL</b> but does not have the <b>Ground Combat Tag</b>. Throughout these rules, <b>Ground</b> in bold always refers to the <b>Combat Tag</b>. <b>GROUND LEVEL</b> always refers to elevation.",
          "plain": "Note: The Ground Combat Tag and the GROUND LEVEL elevation (Part 8. 5. 3 ) are distinct concepts. A Flying Unit standing on the playmat is at GROUND LEVEL but does not have the Ground Combat Tag . Throughout these rules, Ground in bold always refers to the Combat Tag . GROUND LEVEL always refers to elevation."
        }
      ],
      "children": []
    },
    {
      "id": "army-slot",
      "title": "ARMY SLOT",
      "rows": [
        {
          "type": "text",
          "html": "<b>Army Slots</b> determine how many and what types of <span class=\"kw\">Units</span> may be included in an army. Each <b><span class=\"kw\">Army Slot</span></b> has a type: Core, Elite, Support, Air, or Hero. Every Unit occupies a number of <b>Army Slots</b> of its designated type equal to its starting <b><span class=\"kw\">Supply Value</span></b>.",
          "plain": "Army Slots determine how many and what types of Units may be included in an army. Each Army Slot has a type: Core, Elite, Support, Air, or Hero. Every Unit occupies a number of Army Slots of its designated type equal to its starting Supply Value ."
        },
        {
          "type": "text",
          "html": "The <b>Faction Card</b> provides the initial pool of <b>Army Slots</b>. Additional <b>Army Slots</b> are unlocked by purchasing <b><span class=\"kw\">Tactical Cards</span></b> with <span class=\"kw\">Vespene Gas</span> during <span class=\"kw\">Army Building</span> (Part <span class=\"ref\">9. 1. 5</span>). Unused <b>Army Slots</b> are lost- they cannot be converted, exchanged, or carried forward.",
          "plain": "The Faction Card provides the initial pool of Army Slots . Additional Army Slots are unlocked by purchasing Tactical Cards with Vespene Gas during Army Building (Part 9. 1. 5 ). Unused Army Slots are lost- they cannot be converted, exchanged, or carried forward."
        }
      ],
      "children": []
    },
    {
      "id": "faction-tags",
      "title": "FACTION TAGS",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Faction Tags</span></b> are <span class=\"kw\">Keywords</span> printed on <b><span class=\"kw\">Unit Cards</span></b>, <b><span class=\"kw\">Tactical Cards</span></b>, and <b><span class=\"kw\">Faction Cards</span></b> that identify allegiance.",
          "plain": "Faction Tags are Keywords printed on Unit Cards , Tactical Cards , and Faction Cards that identify allegiance."
        },
        {
          "type": "bullet",
          "html": "<b>Race <span class=\"kw\">Tags</span>:</b><b><span class=\"kw\">Terran</span></b>, <b><span class=\"kw\">Zerg</span></b>, <b><span class=\"kw\">Protoss</span></b>.",
          "plain": "Race Tags : Terran , Zerg , Protoss ."
        },
        {
          "type": "bullet",
          "html": "<b>Sub-<span class=\"kw\">Faction Tags</span>:</b> Specific broods or organisations, e. g. , <b><span class=\"kw\">Kerrigan</span>'s Swarm</b>, <b>Raynor's Raiders</b>.",
          "plain": "Sub- Faction Tags : Specific broods or organisations, e. g. , Kerrigan 's Swarm , Raynor's Raiders ."
        },
        {
          "type": "bullet",
          "html": "<b>Function:</b> During <span class=\"kw\">Army Building</span>, a player may include only <span class=\"kw\">Units</span> and <b><span class=\"kw\">Tactical Cards</span></b> whose <b><span class=\"kw\">Faction Tags</span></b> all appear on the chosen <b>Faction Card</b>. If even one tag on the Unit or <b>Tactical Card</b> does not appear on the <b>Faction Card</b>, that card cannot be included. A Unit with fewer <span class=\"kw\">tags</span> than the <b>Faction Card</b> is permitted- it only requires its own <span class=\"kw\">tags</span> to be present (Part <span class=\"ref\">9. 1. 2</span>).",
          "plain": "Function: During Army Building , a player may include only Units and Tactical Cards whose Faction Tags all appear on the chosen Faction Card . If even one tag on the Unit or Tactical Card does not appear on the Faction Card , that card cannot be included. A Unit with fewer tags than the Faction Card is permitted- it only requires its own tags to be present (Part 9. 1. 2 )."
        }
      ],
      "children": []
    },
    {
      "id": "special-ability",
      "title": "SPECIAL ABILITY",
      "rows": [
        {
          "type": "text",
          "html": "A <b><span class=\"kw\">Special Ability</span></b> is any named ability printed on a <b>Unit Card</b>, <b>Tactical Card</b>, or <b>Faction Card</b>. Every <b><span class=\"kw\">Special Ability</span></b> falls into one of three categories: <b>Active Ability</b>, <b>Passive Ability</b>, or <b>Reaction Ability</b> (Part <span class=\"ref\">2. 7</span>).",
          "plain": "A Special Ability is any named ability printed on a Unit Card , Tactical Card , or Faction Card . Every Special Ability falls into one of three categories: Active Ability , Passive Ability , or Reaction Ability (Part 2. 7 )."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Active Abilities</span></b> require the Unit to be Activated and are triggered immediately before or after an action. Each named <b>Active Ability</b> may be used once per Round per Unit unless it has the <b><span class=\"kw\">REPEATABLE</span></b> Keyword.",
          "plain": "Active Abilities require the Unit to be Activated and are triggered immediately before or after an action. Each named Active Ability may be used once per Round per Unit unless it has the REPEATABLE Keyword."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Passive Abilities</span></b> are always in effect as long as the Unit is on the battlefield.",
          "plain": "Passive Abilities are always in effect as long as the Unit is on the battlefield."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Reaction Abilities</span></b> fire in response to a specific trigger. Each player may resolve only one <b>Reaction</b> per Activation, and each named <b>Reaction Ability</b> may be used only once per Round per Unit.",
          "plain": "Reaction Abilities fire in response to a specific trigger. Each player may resolve only one Reaction per Activation, and each named Reaction Ability may be used only once per Round per Unit."
        },
        {
          "type": "text",
          "html": "All three types are inactive while the Unit is in <b><span class=\"kw\">Reserves</span></b> unless the ability explicitly states otherwise.",
          "plain": "All three types are inactive while the Unit is in Reserves unless the ability explicitly states otherwise."
        }
      ],
      "children": []
    },
    {
      "id": "reserves",
      "title": "RESERVES",
      "rows": [
        {
          "type": "text",
          "html": "A holding area off the battlefield where <span class=\"kw\">Units</span> remain until they are deployed. All <span class=\"kw\">Units</span> begin the game in <b><span class=\"kw\">Reserves</span></b>.",
          "plain": "A holding area off the battlefield where Units remain until they are deployed. All Units begin the game in Reserves ."
        },
        {
          "type": "text",
          "html": "While in <b><span class=\"kw\">Reserves</span></b>, a Unit:",
          "plain": "While in Reserves , a Unit:"
        },
        {
          "type": "bullet",
          "html": "Cannot be targeted by attacks or abilities unless an ability explicitly states it affects <span class=\"kw\">Units</span> in <b><span class=\"kw\">Reserves</span></b>.",
          "plain": "Cannot be targeted by attacks or abilities unless an ability explicitly states it affects Units in Reserves ."
        },
        {
          "type": "bullet",
          "html": "Cannot use <b><span class=\"kw\">Active Abilities</span></b>, <b><span class=\"kw\">Passive Abilities</span></b>, or <b><span class=\"kw\">Reaction Abilities</span></b> unless the ability explicitly states otherwise.",
          "plain": "Cannot use Active Abilities , Passive Abilities , or Reaction Abilities unless the ability explicitly states otherwise."
        },
        {
          "type": "bullet",
          "html": "Cannot Control or Contest <b><span class=\"kw\">Mission Markers</span></b>.",
          "plain": "Cannot Control or Contest Mission Markers ."
        },
        {
          "type": "bullet",
          "html": "Does not contribute its <b><span class=\"kw\">Current Supply Value</span></b> to the player&#x27; s <b>Total Current Supply</b> on the battlefield.",
          "plain": "Does not contribute its Current Supply Value to the player' s Total Current Supply on the battlefield."
        },
        {
          "type": "bullet",
          "html": "Retains all equipment, upgrades, and weapon selections assigned during <span class=\"kw\">Army Building</span>.",
          "plain": "Retains all equipment, upgrades, and weapon selections assigned during Army Building ."
        },
        {
          "type": "text",
          "html": "A Unit leaves <b><span class=\"kw\">Reserves</span></b> when it is deployed to the battlefield via a <b><span class=\"kw\">Deploy</span></b> action (Part <span class=\"ref\">8. 5. 5</span>). Some rules may return a Unit to <b><span class=\"kw\">Reserves</span></b> during play- see Part <span class=\"ref\">8. 5. 5</span> for how <b>Damage</b>, effects, and Supply are handled. In the final Round of the game, all <span class=\"kw\">Units</span> still in <b><span class=\"kw\">Reserves</span></b> that are not deployed are treated as <b>Destroyed</b> for scoring purposes (Part <span class=\"ref\">8. 10</span>).",
          "plain": "A Unit leaves Reserves when it is deployed to the battlefield via a Deploy action (Part 8. 5. 5 ). Some rules may return a Unit to Reserves during play- see Part 8. 5. 5 for how Damage , effects, and Supply are handled. In the final Round of the game, all Units still in Reserves that are not deployed are treated as Destroyed for scoring purposes (Part 8. 10 )."
        }
      ],
      "children": []
    },
    {
      "id": "modifier",
      "title": "MODIFIER",
      "rows": [
        {
          "type": "text",
          "html": "A <b><span class=\"kw\">Modifier</span></b> adjusts the Target Number of a roll. Apply all <span class=\"kw\">Modifiers</span> before rolling (Part <span class=\"ref\">3. 4</span>).",
          "plain": "A Modifier adjusts the Target Number of a roll. Apply all Modifiers before rolling (Part 3. 4 )."
        },
        {
          "type": "bullet",
          "html": "<b>+X <span class=\"kw\">Modifier</span>:</b> Makes the roll easier by reducing the Target Number by X.",
          "plain": "+X Modifier : Makes the roll easier by reducing the Target Number by X."
        },
        {
          "type": "bullet",
          "html": "<b>-X <span class=\"kw\">Modifier</span>:</b> Makes the roll harder by increasing the Target Number by X.",
          "plain": "-X Modifier : Makes the roll harder by increasing the Target Number by X."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Modifiers</span> from different named sources are cumulative unless otherwise stated. A Target Number can never be modified below <b>2+</b> or above <b>6+</b>. <span class=\"kw\">Modifiers</span> adjust the Target Number, not the <span class=\"kw\">dice</span> result. A natural roll of <b>6</b> always succeeds and a natural roll of <b>1</b> always fails, regardless of <span class=\"kw\">Modifiers</span> (Part <span class=\"ref\">3. 6</span>).",
          "plain": "Modifiers from different named sources are cumulative unless otherwise stated. A Target Number can never be modified below 2+ or above 6+ . Modifiers adjust the Target Number, not the dice result. A natural roll of 6 always succeeds and a natural roll of 1 always fails, regardless of Modifiers (Part 3. 6 )."
        },
        {
          "type": "text",
          "html": "A <b><span class=\"kw\">Modifier</span></b> is distinct from a Fixed Addition (Part <span class=\"ref\">3. 5</span>), which generates a value rather than adjusting a Target Number.",
          "plain": "A Modifier is distinct from a Fixed Addition (Part 3. 5 ), which generates a value rather than adjusting a Target Number."
        }
      ],
      "children": []
    },
    {
      "id": "wholly-within",
      "title": "WHOLLY WITHIN",
      "rows": [
        {
          "type": "text",
          "html": "A model is <b><span class=\"kw\">Wholly Within</span></b> a distance only if its entire base sits inside that range- no part of the base may extend beyond the edge. A Unit is <b><span class=\"kw\">Wholly Within</span></b> a distance only if every model in the Unit satisfies this condition.",
          "plain": "A model is Wholly Within a distance only if its entire base sits inside that range- no part of the base may extend beyond the edge. A Unit is Wholly Within a distance only if every model in the Unit satisfies this condition."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Wholly Within</span></b> is a stricter requirement than <b><span class=\"kw\">Within</span></b> and is used for Coherency checks (Part <span class=\"ref\">4. 4</span>), certain ability areas of effect, and <b>Mission Marker</b> eligibility. When a rule specifies <b><span class=\"kw\">Wholly Within</span></b>, partial overlap is not sufficient.",
          "plain": "Wholly Within is a stricter requirement than Within and is used for Coherency checks (Part 4. 4 ), certain ability areas of effect, and Mission Marker eligibility. When a rule specifies Wholly Within , partial overlap is not sufficient."
        }
      ],
      "children": []
    },
    {
      "id": "within",
      "title": "WITHIN",
      "rows": [
        {
          "type": "text",
          "html": "A model is <b><span class=\"kw\">Within</span></b> a distance if any part of its base touches or crosses into that range. A Unit is <b><span class=\"kw\">Within</span></b> a distance if at least one model in the Unit meets this condition.",
          "plain": "A model is Within a distance if any part of its base touches or crosses into that range. A Unit is Within a distance if at least one model in the Unit meets this condition."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Within</span></b> is a less restrictive requirement than <b><span class=\"kw\">Wholly Within</span></b>. When a rule specifies <b><span class=\"kw\">Within</span></b> without the word &quot; Wholly, &quot; partial overlap is sufficient.",
          "plain": "Within is a less restrictive requirement than Wholly Within . When a rule specifies Within without the word \" Wholly, \" partial overlap is sufficient."
        }
      ],
      "children": []
    },
    {
      "id": "leading-model",
      "title": "LEADING MODEL",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Leading Model</span></b> is a temporary reference point used to execute a Unit&#x27; s movement. Whenever a Unit performs a <b><span class=\"kw\">Move</span></b>, <b><span class=\"kw\">Deploy</span></b>, <b>Run</b>, <b><span class=\"kw\">Charge</span></b>, <b><span class=\"kw\">Disengage</span></b>, <b>Close Ranks</b>, or any action that instructs the Unit to nominate a <b><span class=\"kw\">Leading Model</span></b>, the <span class=\"kw\">Controlling Player</span> selects one model in the Unit.",
          "plain": "The Leading Model is a temporary reference point used to execute a Unit' s movement. Whenever a Unit performs a Move , Deploy , Run , Charge , Disengage , Close Ranks , or any action that instructs the Unit to nominate a Leading Model , the Controlling Player selects one model in the Unit."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Move</span> the <b><span class=\"kw\">Leading Model</span></b> first, measuring its exact path. Then set the remaining <span class=\"kw\">models</span> in valid <b>Coherency</b> around the <b><span class=\"kw\">Leading Model</span>'s</b> new position (Part <span class=\"ref\">4. 4</span>). The <b><span class=\"kw\">Leading Model</span></b> nomination ends once the action resolves. The <b><span class=\"kw\">Leading Model</span></b> determines the Unit&#x27; s <b>Gap Clearance</b> category and interacts with terrain restrictions (Part <span class=\"ref\">4. 6</span>).",
          "plain": "Move the Leading Model first, measuring its exact path. Then set the remaining models in valid Coherency around the Leading Model 's new position (Part 4. 4 ). The Leading Model nomination ends once the action resolves. The Leading Model determines the Unit' s Gap Clearance category and interacts with terrain restrictions (Part 4. 6 )."
        }
      ],
      "children": []
    },
    {
      "id": "supply-value",
      "title": "SUPPLY VALUE",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Supply Value</span></b> of a Unit is the value shown on the <b>Unit Card's</b> Supply Profile corresponding to the Unit&#x27; s current model count. A Unit&#x27; s starting <b><span class=\"kw\">Supply Value</span></b> is determined during <span class=\"kw\">Army Building</span> by the Composition Option selected (Part <span class=\"ref\">9. 1. 6</span>) and defines how many <b>Army Slots</b> the Unit occupies.",
          "plain": "The Supply Value of a Unit is the value shown on the Unit Card's Supply Profile corresponding to the Unit' s current model count. A Unit' s starting Supply Value is determined during Army Building by the Composition Option selected (Part 9. 1. 6 ) and defines how many Army Slots the Unit occupies."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Supply Value</span></b> is a dynamic characteristic- as casualties reduce the model count into a lower bracket on <span class=\"kw\">the Supply Profile</span>, the <b><span class=\"kw\">Supply Value</span></b> decreases. Update immediately when a casualty moves the Unit into a lower bracket. Supply is used for <span class=\"kw\">Deployment</span>, <b>Mission Marker</b> Control, <b><span class=\"kw\">Tactical Mass</span></b>, and scoring.",
          "plain": "Supply Value is a dynamic characteristic- as casualties reduce the model count into a lower bracket on the Supply Profile , the Supply Value decreases. Update immediately when a casualty moves the Unit into a lower bracket. Supply is used for Deployment , Mission Marker Control, Tactical Mass , and scoring."
        }
      ],
      "children": []
    },
    {
      "id": "current-supply-value",
      "title": "CURRENT SUPPLY VALUE",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Current Supply Value</span></b> of a Unit is its <b><span class=\"kw\">Supply Value</span></b> at this moment, based on the number of <span class=\"kw\">models</span> remaining in the Unit as shown on <span class=\"kw\">the Supply Profile</span> (Part <span class=\"ref\">6. 1</span>). Update the <b><span class=\"kw\">Current Supply Value</span></b> immediately whenever a casualty reduces the model count into a lower bracket.",
          "plain": "The Current Supply Value of a Unit is its Supply Value at this moment, based on the number of models remaining in the Unit as shown on the Supply Profile (Part 6. 1 ). Update the Current Supply Value immediately whenever a casualty reduces the model count into a lower bracket."
        },
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Current Supply Value</span></b> is referenced when checking whether a Unit may be deployed from <b><span class=\"kw\">Reserves</span></b> (Part <span class=\"ref\">8. 3. 2</span>), when determining <b>Mission Marker</b> Control (Part <span class=\"ref\">8. 9. 1</span>), when evaluating <b><span class=\"kw\">Tactical Mass</span></b> for <b><span class=\"kw\">Disengage</span></b> (Part <span class=\"ref\">8. 5. 4</span>), and when calculating <b>Victory Points</b> for Supply-based scoring conditions.",
          "plain": "The Current Supply Value is referenced when checking whether a Unit may be deployed from Reserves (Part 8. 3. 2 ), when determining Mission Marker Control (Part 8. 9. 1 ), when evaluating Tactical Mass for Disengage (Part 8. 5. 4 ), and when calculating Victory Points for Supply-based scoring conditions."
        }
      ],
      "children": []
    },
    {
      "id": "available-supply",
      "title": "AVAILABLE SUPPLY",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Available Supply</span></b> is the amount of Supply capacity remaining for new deployments. It equals the current <b>Supply Pool</b> minus the <b>Total <span class=\"kw\">Current Supply Value</span></b> of all <b><span class=\"kw\">Friendly</span></b> <span class=\"kw\">Units</span> on the battlefield (Part <span class=\"ref\">8. 3. 2</span>).",
          "plain": "Available Supply is the amount of Supply capacity remaining for new deployments. It equals the current Supply Pool minus the Total Current Supply Value of all Friendly Units on the battlefield (Part 8. 3. 2 )."
        },
        {
          "type": "text",
          "html": "A Unit may only be deployed from <b><span class=\"kw\">Reserves</span></b> if its <b><span class=\"kw\">Current Supply Value</span></b> is less than or equal to the <b><span class=\"kw\">Available Supply</span></b>. At no point may the <b>Total Current Supply</b> of a player&#x27; s on-table <span class=\"kw\">Units</span> exceed the <b>Supply Pool</b>. <span class=\"kw\">Units</span> Destroyed or reduced by casualties free up <b><span class=\"kw\">Available Supply</span></b> for new arrivals. In the final Round of the game, the <b>Supply Pool</b> becomes unlimited and <b><span class=\"kw\">Available Supply</span></b> restrictions are lifted.",
          "plain": "A Unit may only be deployed from Reserves if its Current Supply Value is less than or equal to the Available Supply . At no point may the Total Current Supply of a player' s on-table Units exceed the Supply Pool . Units Destroyed or reduced by casualties free up Available Supply for new arrivals. In the final Round of the game, the Supply Pool becomes unlimited and Available Supply restrictions are lifted."
        }
      ],
      "children": []
    },
    {
      "id": "effective-size",
      "title": "EFFECTIVE SIZE",
      "rows": [
        {
          "type": "text",
          "html": "A model&#x27; s <b><span class=\"kw\">Effective Size</span></b> is equal to its Size characteristic plus the Size of any terrain it is standing on (Part <span class=\"ref\">7. 1. 2</span>).",
          "plain": "A model' s Effective Size is equal to its Size characteristic plus the Size of any terrain it is standing on (Part 7. 1. 2 )."
        },
        {
          "type": "text",
          "html": "A model at <b>GROUND LEVEL</b> has an <b><span class=\"kw\">Effective Size</span></b> equal to its own Size characteristic only. A model on <b>HIGH GROUND</b> (Size 3+) or <b>MID GROUND</b> (Size 1–2) adds the terrain&#x27; s Size to its own. Terrain pieces set on elevated surfaces stack in the same way- a terrain piece&#x27; s <b><span class=\"kw\">Effective Size</span></b> equals its own Size plus the Size of the terrain it stands on.",
          "plain": "A model at GROUND LEVEL has an Effective Size equal to its own Size characteristic only. A model on HIGH GROUND (Size 3+) or MID GROUND (Size 1–2) adds the terrain' s Size to its own. Terrain pieces set on elevated surfaces stack in the same way- a terrain piece' s Effective Size equals its own Size plus the Size of the terrain it stands on."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Effective Size</span></b> determines which terrain blocks <b><span class=\"kw\">Line of Sight</span></b> through Full <span class=\"kw\">Cover</span> and Direct <span class=\"kw\">Cover</span> (Part <span class=\"ref\">7. 1. 1</span>). <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> are treated as having an <b><span class=\"kw\">Effective Size</span></b> higher than any terrain piece on the table for <span class=\"kw\">Cover</span> purposes (Part <span class=\"ref\">7. 1. 4</span>).",
          "plain": "Effective Size determines which terrain blocks Line of Sight through Full Cover and Direct Cover (Part 7. 1. 1 ). Flying models are treated as having an Effective Size higher than any terrain piece on the table for Cover purposes (Part 7. 1. 4 )."
        }
      ],
      "children": []
    },
    {
      "id": "engaged",
      "title": "ENGAGED",
      "rows": [
        {
          "type": "text",
          "html": "A <b>Ground</b> Unit is <b><span class=\"kw\">Engaged</span></b> when any of its <span class=\"kw\">models</span> is <b><span class=\"kw\">Within</span> 1\"</b> (<b><span class=\"kw\">Engagement Range</span></b>) of any model in an <b><span class=\"kw\">Enemy</span> Ground</b> Unit, provided the following conditions are met (Part <span class=\"ref\">7. 2. 1</span>):",
          "plain": "A Ground Unit is Engaged when any of its models is Within 1\" ( Engagement Range ) of any model in an Enemy Ground Unit, provided the following conditions are met (Part 7. 2. 1 ):"
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Combat Tags</span> match:</b><b>Ground</b> <span class=\"kw\">models</span> Engage only <b>Ground</b> <span class=\"kw\">models</span>. <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> cannot be <b><span class=\"kw\">Engaged</span></b> by any model.",
          "plain": "Combat Tags match: Ground models Engage only Ground models . Flying models cannot be Engaged by any model."
        },
        {
          "type": "bullet",
          "html": "<b>Terrain does not block:</b> Size 2+ terrain between the <span class=\"kw\">models</span> prevents <b>Engagement</b>, even if they are <b><span class=\"kw\">Within</span> 1\"</b>. <span class=\"kw\">Models</span> on <b>HIGH GROUND</b> cannot <b>Engage</b> <span class=\"kw\">models</span> at <b>GROUND LEVEL</b>, and vice versa.",
          "plain": "Terrain does not block: Size 2+ terrain between the models prevents Engagement , even if they are Within 1\" . Models on HIGH GROUND cannot Engage models at GROUND LEVEL , and vice versa."
        },
        {
          "type": "text",
          "html": "When any model in a Unit is <b><span class=\"kw\">Engaged</span></b>, the entire Unit is considered <b><span class=\"kw\">Engaged</span></b>. An <b><span class=\"kw\">Engaged</span></b> Unit cannot perform a standard <b><span class=\"kw\">Move</span></b>- it must <b><span class=\"kw\">Disengage</span></b> (Part <span class=\"ref\">8. 5. 4</span>) or <b><span class=\"kw\">Hold</span></b>. <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span> are also subject to restrictions on <b>Ranged Attacks</b> (Part <span class=\"ref\">8. 7. 3</span>).",
          "plain": "When any model in a Unit is Engaged , the entire Unit is considered Engaged . An Engaged Unit cannot perform a standard Move - it must Disengage (Part 8. 5. 4 ) or Hold . Engaged Units are also subject to restrictions on Ranged Attacks (Part 8. 7. 3 )."
        }
      ],
      "children": []
    },
    {
      "id": "engagement-range",
      "title": "ENGAGEMENT RANGE",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Engagement Range</span></b> extends <b>1\"</b> horizontally from any model&#x27; s base. When two <b><span class=\"kw\">Enemy</span> Ground</b> <span class=\"kw\">models</span> are <b><span class=\"kw\">Within</span></b> each other&#x27; s <b><span class=\"kw\">Engagement Range</span></b>, they are <b><span class=\"kw\">Engaged</span></b> (Part <span class=\"ref\">7. 2</span>).",
          "plain": "The Engagement Range extends 1\" horizontally from any model' s base. When two Enemy Ground models are Within each other' s Engagement Range , they are Engaged (Part 7. 2 )."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Engagement Range</span></b> is measured horizontally from a top-down perspective, ignoring vertical height (Part <span class=\"ref\">4. 1</span>). It is referenced when resolving <b><span class=\"kw\">Move</span></b> restrictions (Part <span class=\"ref\">8. 5. 3</span>), <b><span class=\"kw\">Disengage</span></b> (Part <span class=\"ref\">8. 5. 4</span>), <b><span class=\"kw\">Charge</span></b> (Part <span class=\"ref\">8. 6. 2</span>), the <span class=\"kw\">Fighting Rank</span> (Part <span class=\"ref\">8. 8. 1</span>), and <b><span class=\"kw\">PLACE</span></b> effects. Melee weapons list <b>E</b> as their Range, indicating they may only strike targets <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b>.",
          "plain": "Engagement Range is measured horizontally from a top-down perspective, ignoring vertical height (Part 4. 1 ). It is referenced when resolving Move restrictions (Part 8. 5. 3 ), Disengage (Part 8. 5. 4 ), Charge (Part 8. 6. 2 ), the Fighting Rank (Part 8. 8. 1 ), and PLACE effects. Melee weapons list E as their Range, indicating they may only strike targets Within the Engagement Range ."
        }
      ],
      "children": []
    },
    {
      "id": "unengaged",
      "title": "UNENGAGED",
      "rows": [
        {
          "type": "text",
          "html": "A <b>Ground</b> Unit is <b><span class=\"kw\">Unengaged</span></b> when none of its <span class=\"kw\">models</span> is <b><span class=\"kw\">Within</span> 1\"</b> of any <b><span class=\"kw\">Enemy</span> Ground</b> model, or when terrain restrictions (Part <span class=\"ref\">7. 2. 1</span>) prevent valid <b>Engagement</b> despite proximity. <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> are always <b><span class=\"kw\">Unengaged</span></b>.",
          "plain": "A Ground Unit is Unengaged when none of its models is Within 1\" of any Enemy Ground model, or when terrain restrictions (Part 7. 2. 1 ) prevent valid Engagement despite proximity. Flying Units are always Unengaged ."
        },
        {
          "type": "text",
          "html": "An <b><span class=\"kw\">Unengaged</span></b> Unit may perform a standard <b><span class=\"kw\">Move</span></b>, <b>Run</b>, <b><span class=\"kw\">Ranged Attack</span></b>, or <b><span class=\"kw\">Charge</span></b> without restriction. Only <b><span class=\"kw\">Unengaged</span></b> <span class=\"kw\">Units</span> may be selected to perform a <b><span class=\"kw\">Move</span></b> action (Part <span class=\"ref\">8. 5. 2</span>).",
          "plain": "An Unengaged Unit may perform a standard Move , Run , Ranged Attack , or Charge without restriction. Only Unengaged Units may be selected to perform a Move action (Part 8. 5. 2 )."
        }
      ],
      "children": []
    },
    {
      "id": "mission-markers",
      "title": "MISSION MARKERS",
      "rows": [
        {
          "type": "text",
          "html": "Numbered <span class=\"kw\">Markers</span> set on the battlefield during Setup at coordinates shown on the <b><span class=\"kw\">Deployment</span> Card</b>. Each Marker is 32mm in diameter and has two sides: <b>Activated</b> or <b>Deactivated</b>. <span class=\"kw\">Markers</span> 1 &amp; 3 are Red, <span class=\"kw\">Markers</span> 2 &amp; 4 are Blue, and Marker 5 is Neutral.",
          "plain": "Numbered Markers set on the battlefield during Setup at coordinates shown on the Deployment Card . Each Marker is 32mm in diameter and has two sides: Activated or Deactivated . Markers 1 & 3 are Red, Markers 2 & 4 are Blue, and Marker 5 is Neutral."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Mission Markers</span></b> are the primary scoring mechanism. At the end of each Round, players determine Control of each Marker by comparing the <b>Total <span class=\"kw\">Current Supply Value</span></b> of their eligible contesting <span class=\"kw\">Units</span> (Part <span class=\"ref\">8. 9. 1</span>). A Unit may Contest a <b>Mission Marker</b> only if it is on the battlefield, <b>In Coherency</b>, and has at least one model <b><span class=\"kw\">Within</span> 3\"</b> with <b><span class=\"kw\">Line of Sight</span></b> to the Marker on the same elevation. <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> and <b><span class=\"kw\">BURROWED</span></b> <span class=\"kw\">Units</span> cannot Contest or Control <b><span class=\"kw\">Mission Markers</span></b>.",
          "plain": "Mission Markers are the primary scoring mechanism. At the end of each Round, players determine Control of each Marker by comparing the Total Current Supply Value of their eligible contesting Units (Part 8. 9. 1 ). A Unit may Contest a Mission Marker only if it is on the battlefield, In Coherency , and has at least one model Within 3\" with Line of Sight to the Marker on the same elevation. Flying Units and BURROWED Units cannot Contest or Control Mission Markers ."
        },
        {
          "type": "text",
          "html": "Control is <b>Sticky</b>- once a player Controls a Marker, it remains under their control until the opponent reclaims it with a higher contesting Supply total. A tied result never transfers control.",
          "plain": "Control is Sticky - once a player Controls a Marker, it remains under their control until the opponent reclaims it with a higher contesting Supply total. A tied result never transfers control."
        }
      ],
      "children": []
    },
    {
      "id": "line-of-sight-los",
      "title": "LINE OF SIGHT (LoS)",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Line of Sight</span></b> determines what a model can see and, by extension, what it can target with attacks and abilities.",
          "plain": "Line of Sight determines what a model can see and, by extension, what it can target with attacks and abilities."
        },
        {
          "type": "text",
          "html": "All <b><span class=\"kw\">Line of Sight</span></b> checks are resolved from a <b>2D top-down perspective</b>, looking directly down at the battlefield from above. To check whether a model can see a target, trace an imaginary straight line from <b>any part</b> of the acting model&#x27; s base to <b>any part</b> of the target model&#x27; s base. Vertical height is never factored into the trace.",
          "plain": "All Line of Sight checks are resolved from a 2D top-down perspective , looking directly down at the battlefield from above. To check whether a model can see a target, trace an imaginary straight line from any part of the acting model' s base to any part of the target model' s base. Vertical height is never factored into the trace."
        },
        {
          "type": "text",
          "html": "If the trace does not pass through any <b><span class=\"kw\">Blocking Terrain</span></b> (any terrain piece with an <b><span class=\"kw\">Effective Size</span></b> of 1 or greater), the target is <b><span class=\"kw\">Visible</span></b>. No further checks are required.",
          "plain": "If the trace does not pass through any Blocking Terrain (any terrain piece with an Effective Size of 1 or greater), the target is Visible . No further checks are required."
        },
        {
          "type": "text",
          "html": "If the trace passes through <b><span class=\"kw\">Blocking Terrain</span></b>, the target is not automatically <span class=\"kw\">hidden</span>. Apply the <span class=\"kw\">Cover</span> rules (Part <span class=\"ref\">7. 1. 1</span>) to determine whether that terrain actually blocks the <b><span class=\"kw\">Line of Sight</span></b>:",
          "plain": "If the trace passes through Blocking Terrain , the target is not automatically hidden . Apply the Cover rules (Part 7. 1. 1 ) to determine whether that terrain actually blocks the Line of Sight :"
        },
        {
          "type": "bullet",
          "html": "<b>Full <span class=\"kw\">Cover</span>:</b> The terrain&#x27; s <b><span class=\"kw\">Effective Size</span></b> is equal to or greater than the <b><span class=\"kw\">Effective Size</span></b> of <b>both</b> the attacker and the target. <b><span class=\"kw\">Line of Sight</span></b> is blocked.",
          "plain": "Full Cover : The terrain' s Effective Size is equal to or greater than the Effective Size of both the attacker and the target. Line of Sight is blocked."
        },
        {
          "type": "bullet",
          "html": "<b>Direct <span class=\"kw\">Cover</span>:</b> The trace passes through a terrain piece, and either the attacker or the target is <b><span class=\"kw\">Within</span> 1\"</b> of that terrain, provided the terrain&#x27; s <b><span class=\"kw\">Effective Size</span></b> is equal to or greater than the <b><span class=\"kw\">Effective Size</span></b> of the model that is <b><span class=\"kw\">Within</span> 1\"</b>. <b><span class=\"kw\">Line of Sight</span></b> is blocked. <b>Exception:</b> If both the attacker and the target are <b><span class=\"kw\">Within</span> 1\"</b> of the same terrain piece and <b><span class=\"kw\">Within</span> 3\"</b> of each other, resolve <b><span class=\"kw\">Line of Sight</span></b> normally.",
          "plain": "Direct Cover : The trace passes through a terrain piece, and either the attacker or the target is Within 1\" of that terrain, provided the terrain' s Effective Size is equal to or greater than the Effective Size of the model that is Within 1\" . Line of Sight is blocked. Exception: If both the attacker and the target are Within 1\" of the same terrain piece and Within 3\" of each other, resolve Line of Sight normally."
        },
        {
          "type": "bullet",
          "html": "<b>Elevation Dead Zone:</b> A model on <b>HIGH GROUND</b> (Size 3+) cannot see a model at <b>GROUND LEVEL</b> that is <b><span class=\"kw\">Within</span> 1\"</b> of the base of the same terrain piece, and vice versa. The same Close Quarters exception applies.",
          "plain": "Elevation Dead Zone: A model on HIGH GROUND (Size 3+) cannot see a model at GROUND LEVEL that is Within 1\" of the base of the same terrain piece, and vice versa. The same Close Quarters exception applies."
        },
        {
          "type": "text",
          "html": "Each terrain piece is assessed independently. Terrain pieces do not combine their <b><span class=\"kw\">Effective Size</span></b> or proximity. If no single terrain piece meets the requirements for Full <span class=\"kw\">Cover</span> or Direct <span class=\"kw\">Cover</span>, <b><span class=\"kw\">Line of Sight</span></b> is not blocked regardless of how many terrain pieces the trace passes through.",
          "plain": "Each terrain piece is assessed independently. Terrain pieces do not combine their Effective Size or proximity. If no single terrain piece meets the requirements for Full Cover or Direct Cover , Line of Sight is not blocked regardless of how many terrain pieces the trace passes through."
        },
        {
          "type": "text",
          "html": "A terrain piece&#x27; s footprint is defined by its physical base or outermost edges viewed from above. Gaps, windows, doorways, and open interiors <span class=\"kw\">within</span> the footprint <b>do block</b> the <b><span class=\"kw\">Line of Sight</span></b> unless players agree otherwise during <span class=\"kw\">Battlefield Setup</span> (Part <span class=\"ref\">7. 1</span>).",
          "plain": "A terrain piece' s footprint is defined by its physical base or outermost edges viewed from above. Gaps, windows, doorways, and open interiors within the footprint do block the Line of Sight unless players agree otherwise during Battlefield Setup (Part 7. 1 )."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> ignore the Full <span class=\"kw\">Cover</span> rule. Direct <span class=\"kw\">Cover</span> and the Elevation Dead Zone still apply. Treat a <b><span class=\"kw\">Flying</span></b> model&#x27; s <b><span class=\"kw\">Effective Size</span></b> as higher than the <b><span class=\"kw\">Effective Size</span></b> of any terrain piece on the table (Part <span class=\"ref\">7. 1. 4</span>).",
          "plain": "Flying models ignore the Full Cover rule. Direct Cover and the Elevation Dead Zone still apply. Treat a Flying model' s Effective Size as higher than the Effective Size of any terrain piece on the table (Part 7. 1. 4 )."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Line of Sight</span></b> is reciprocal: if Model A can see Model B, Model B can see Model A through the same trace.",
          "plain": "Line of Sight is reciprocal: if Model A can see Model B, Model B can see Model A through the same trace."
        }
      ],
      "children": []
    }
  ]
};
window.__companionRuleParts['part-12'] = {
  "num": "12",
  "kicker": "Part XII",
  "title": "Quick Reference",
  "id": "part-12",
  "color": "#96a6b8",
  "group": "reference",
  "introRows": [
    {
      "type": "text",
      "html": "This Part compiles the most frequently referenced rules, sequences and tables into a single location for quick reference during play. It is not a substitute for the full rules, but it should answer most questions that arise mid-game without the need to search through earlier Parts.",
      "plain": "This Part compiles the most frequently referenced rules, sequences and tables into a single location for quick reference during play. It is not a substitute for the full rules, but it should answer most questions that arise mid-game without the need to search through earlier Parts."
    }
  ],
  "rules": [
    {
      "id": "12-1-pre-game-protocol",
      "title": "12.1 Pre-Game Protocol",
      "rows": [
        {
          "type": "bullet",
          "html": "Select a <b>Mission Card</b> and a <b><span class=\"kw\">Deployment</span> Card</b>.",
          "plain": "Select a Mission Card and a Deployment Card ."
        },
        {
          "type": "bullet",
          "html": "Set <b><span class=\"kw\">Mission Markers</span></b> at the coordinates on the <b><span class=\"kw\">Deployment</span> Card</b>.",
          "plain": "Set Mission Markers at the coordinates on the Deployment Card ."
        },
        {
          "type": "bullet",
          "html": "Set Terrain pieces (balanced across four quarters, at least 3&quot; between major structures).",
          "plain": "Set Terrain pieces (balanced across four quarters, at least 3\" between major structures)."
        },
        {
          "type": "bullet",
          "html": "Roll-Off - winner assigns the <b><span class=\"kw\">First Player Marker</span></b> for Round 1.",
          "plain": "Roll-Off - winner assigns the First Player Marker for Round 1."
        }
      ],
      "children": []
    },
    {
      "id": "12-2-round-sequence",
      "title": "12.2 Round Sequence",
      "rows": [
        {
          "type": "microhead",
          "html": "START OF THE ROUND EFFECTS",
          "plain": "START OF THE ROUND EFFECTS"
        },
        {
          "type": "text",
          "html": "↓",
          "plain": "↓"
        },
        {
          "type": "microhead",
          "html": "<span class=\"kw\">PHASE 1: MOVEMENT</span>",
          "plain": "PHASE 1: MOVEMENT"
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Deploy</span> / <span class=\"kw\">Move</span> / <span class=\"kw\">Disengage</span> / <span class=\"kw\">Hold</span>",
          "plain": "Deploy / Move / Disengage / Hold"
        },
        {
          "type": "text",
          "html": "↓",
          "plain": "↓"
        },
        {
          "type": "microhead",
          "html": "<span class=\"kw\">PHASE 2: ASSAULT</span>",
          "plain": "PHASE 2: ASSAULT"
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Ranged Attack</span> / <span class=\"kw\">Charge</span> / Run / <span class=\"kw\">Hold</span>",
          "plain": "Ranged Attack / Charge / Run / Hold"
        },
        {
          "type": "text",
          "html": "↓",
          "plain": "↓"
        },
        {
          "type": "microhead",
          "html": "<span class=\"kw\">PHASE 3: COMBAT</span>",
          "plain": "PHASE 3: COMBAT"
        },
        {
          "type": "text",
          "html": "Close Combat Attack",
          "plain": "Close Combat Attack"
        },
        {
          "type": "text",
          "html": "↓",
          "plain": "↓"
        },
        {
          "type": "microhead",
          "html": "<span class=\"kw\">PHASE 4: SCORING &amp; CLEANUP</span>",
          "plain": "PHASE 4: SCORING & CLEANUP"
        },
        {
          "type": "text",
          "html": "Control <span class=\"kw\">Markers</span> → Score VP → <span class=\"kw\">End of Game Check</span> → End of the Round Effects → Cleanup → Initiative",
          "plain": "Control Markers → Score VP → End of Game Check → End of the Round Effects → Cleanup → Initiative"
        }
      ],
      "children": []
    },
    {
      "id": "12-3-phase-1-movement",
      "title": "12.3 Phase 1: Movement",
      "rows": [
        {
          "type": "text",
          "html": "<b>Actions (choose one per Unit):</b>",
          "plain": "Actions (choose one per Unit):"
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Move</span>:</b> <span class=\"kw\">Move</span> across the Battlefield.<b></b>",
          "plain": "Move : Move across the Battlefield."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Deploy</span>:</b> <span class=\"kw\">Move</span> from <b><span class=\"kw\">Reserves</span></b> via <b><span class=\"kw\">Entry Edge</span></b> (<b>must</b> have <b><span class=\"kw\">Available Supply</span></b>; <b>cannot</b> end in <b><span class=\"kw\">Enemy</span> <span class=\"kw\">Zone of Influence</span></b>) to the Battlefield.",
          "plain": "Deploy : Move from Reserves via Entry Edge ( must have Available Supply ; cannot end in Enemy Zone of Influence ) to the Battlefield."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Disengage</span>:</b> If <b><span class=\"kw\">Engaged</span></b> - <span class=\"kw\">move</span> out of combat. <b>Cannot</b> perform <b><span class=\"kw\">Ranged Attack</span></b> or <b><span class=\"kw\">Charge</span></b> next Phase unless own Supply &gt; <b><span class=\"kw\">Enemy</span></b> Combined Supply.",
          "plain": "Disengage : If Engaged - move out of combat. Cannot perform Ranged Attack or Charge next Phase unless own Supply > Enemy Combined Supply."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Hold</span>:</b> Do nothing.",
          "plain": "Hold : Do nothing."
        },
        {
          "type": "text",
          "html": "<b>First to Pass</b> takes <b><span class=\"kw\">First Player Marker</span></b> for Phase 2.",
          "plain": "First to Pass takes First Player Marker for Phase 2."
        },
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/></colgroup><tbody><tr><td><p><span>Moving a Unit:</span><span></span><span><span class=\"kw\">Leading Model</span></span><span> moves up to Speed. Set the rest of the unit</span><span>In</span><span></span><span>Coherency</span><span>.</span></p></td></tr></tbody></table>",
          "plain": "Moving a Unit: Leading Model moves up to Speed. Set the rest of the unit In Coherency ."
        },
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/></colgroup><tbody><tr><td><p><span><span class=\"kw\">Available Supply</span></span><span> =</span><span>Supply Pool</span><span>−</span><span>Total Supply</span><span> of</span><span><span class=\"kw\">Friendly</span></span><span><span class=\"kw\">Units</span> on the Battlefield.</span></p></td></tr></tbody></table>",
          "plain": "Available Supply = Supply Pool − Total Supply of Friendly Units on the Battlefield."
        }
      ],
      "children": []
    },
    {
      "id": "12-4-phase-2-assault",
      "title": "12.4 Phase 2: Assault",
      "rows": [
        {
          "type": "text",
          "html": "<b>Actions (choose one per Unit):</b>",
          "plain": "Actions (choose one per Unit):"
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Ranged Attack</span>:</b> Use ranged weapons to attack <b>Enemies</b>.",
          "plain": "Ranged Attack : Use ranged weapons to attack Enemies ."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Charge</span>:</b> <span class=\"kw\">Move</span> to <b>Engage Enemies</b>.",
          "plain": "Charge : Move to Engage Enemies ."
        },
        {
          "type": "bullet",
          "html": "<b>Run:</b> <span class=\"kw\">Move</span> across the battlefield.",
          "plain": "Run: Move across the battlefield."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Hold</span>:</b> Do nothing.",
          "plain": "Hold : Do nothing."
        },
        {
          "type": "text",
          "html": "<b>First to Pass</b> takes <b><span class=\"kw\">First Player Marker</span></b> for Phase 3.",
          "plain": "First to Pass takes First Player Marker for Phase 3."
        },
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/></colgroup><tbody><tr><td><p><span><span class=\"kw\">Ranged Attack</span>:</span></p><ol><li aria-level=\"1\"><p role=\"presentation\"><span>Declare a target:</span><span> Select an</span><span><span class=\"kw\">Enemy</span></span><span>not</span><span><span class=\"kw\">Engaged</span></span><span>with any other Unit. Check the weapon’s Range,</span><span>LoS</span><span>and if the Target’s tag matches.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Build Attack Pool:</span><span> Sum</span><span>RoA</span><span>of eligible <span class=\"kw\">models</span> + <span class=\"kw\">modifiers</span> +</span><span>Surge</span><span></span><span>Die</span><span>(if weapon has S <span class=\"kw\">Dice</span>).</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Roll to Hit:</span><span> Each die result equal to or higher than the Hit characteristic is a success and moves to the</span><span>Armour Pool</span><span>.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Resolve Surge:</span><span> If the target’s Combat Tag matches the weapon’s</span><span>Surge Type</span><span>, a number of <span class=\"kw\">dice</span> equal to the</span><span>Surge Die</span><span>are not included in the</span><span>Armour Roll</span><span>.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Armour Roll:</span><span>Each die result equal to or higher than the</span><span>Armour</span><span>characteristic is saved and discarded.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Evade Roll:</span><span>If eligible, each die result equal to or higher than the</span><span>Evade</span><span>characteristic is saved and discarded.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Damage &amp; Casualties:</span><span>Multiply all remaining <span class=\"kw\">dice</span> by the weapon’s</span><span>Damage</span><span> characteristic. Remove <span class=\"kw\">models</span> accordingly.</span></p></li></ol></td></tr></tbody></table>",
          "plain": "Ranged Attack : Declare a target: Select an Enemy not Engaged with any other Unit. Check the weapon’s Range, LoS and if the Target’s tag matches. Build Attack Pool: Sum RoA of eligible models + modifiers + Surge Die (if weapon has S Dice ). Roll to Hit: Each die result equal to or higher than the Hit characteristic is a success and moves to the Armour Pool . Resolve Surge: If the target’s Combat Tag matches the weapon’s Surge Type , a number of dice equal to the Surge Die are not included in the Armour Roll . Armour Roll: Each die result equal to or higher than the Armour characteristic is saved and discarded. Evade Roll: If eligible, each die result equal to or higher than the Evade characteristic is saved and discarded. Damage & Casualties: Multiply all remaining dice by the weapon’s Damage characteristic. Remove models accordingly."
        },
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/></colgroup><tbody><tr><td><p><span><span class=\"kw\">Charge</span>:</span></p><ol><li aria-level=\"1\"><p role=\"presentation\"><span>Declare Targets:</span><span> Select an</span><span><span class=\"kw\">Enemy</span> Ground</span><span> <span class=\"kw\">Units</span> (no</span><span>LoS</span><span>needed).</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Determine <span class=\"kw\">Charge</span> Distance:</span><span>Roll a D6; the</span><span><span class=\"kw\">Leading Model</span></span><span> moves up to Speed + the result.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Success:</span><span> If <span class=\"kw\">the leading model</span> is able to end a movement</span><span><span class=\"kw\">Within</span></span><span> the</span><span><span class=\"kw\">Engagement Range</span></span><span> (1\") of all targets, <span class=\"kw\">move</span> it. Set the rest of the unitsquad</span><span>In Coherency</span><span>, following <span class=\"kw\">the priority</span>:</span></p></li><ol><li aria-level=\"2\"><p role=\"presentation\"><span>Base-to-Base,</span></p></li><li aria-level=\"2\"><p role=\"presentation\"><span><span class=\"kw\">Engagement Range</span>,</span></p></li><li aria-level=\"2\"><p role=\"presentation\"><span>Coherency.</span></p></li></ol><li aria-level=\"1\"><p role=\"presentation\"><span>Fail:</span><span>Unit stays, activation ends.</span></p></li></ol></td></tr></tbody></table>",
          "plain": "Charge : Declare Targets: Select an Enemy Ground Units (no LoS needed). Determine Charge Distance: Roll a D6; the Leading Model moves up to Speed + the result. Success: If the leading model is able to end a movement Within the Engagement Range (1\") of all targets, move it. Set the rest of the unitsquad In Coherency , following the priority : Base-to-Base, Engagement Range , Coherency. Fail: Unit stays, activation ends."
        }
      ],
      "children": []
    },
    {
      "id": "12-5-phase-3-combat",
      "title": "12.5 Phase 3: Combat",
      "rows": [
        {
          "type": "text",
          "html": "All <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span><b>must</b> activate. Players alternate.",
          "plain": "All Engaged Units must activate. Players alternate."
        },
        {
          "type": "text",
          "html": "<b>Actions:</b>",
          "plain": "Actions:"
        },
        {
          "type": "bullet",
          "html": "<b>Close Combat Attack:</b> Use a Close Combat weapon to attack <b>Enemies</b>.",
          "plain": "Close Combat Attack: Use a Close Combat weapon to attack Enemies ."
        },
        {
          "type": "text",
          "html": "<b>Pass</b> only when no<b> <span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span> remain.",
          "plain": "Pass only when no Engaged Units remain."
        },
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/></colgroup><tbody><tr><td><p><span>Close Combat Attack:</span></p><ol><li aria-level=\"1\"><p role=\"presentation\"><span>Close Ranks (Optional):</span><span> <span class=\"kw\">Move</span></span><span><span class=\"kw\">Leading Model</span></span><span> up to 3\" -</span><span>must</span><span> end closer to the <span class=\"kw\">enemy</span>. Reposition the rest of the Unit for maximum</span><span>Base-to-Base</span><span>.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Declare Ranks:</span><span> <span class=\"kw\">Fighting Rank</span> (</span><span><span class=\"kw\">Within</span> 1\"</span><span>) + <span class=\"kw\">Supporting Rank</span> (</span><span>Base-to-Base</span><span> with <span class=\"kw\">Fighting Rank</span> model). <span class=\"kw\">Models</span> in those ranks are eligible for attacking in step 3.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Roll Attacks:</span><span> Follow the</span><span><span class=\"kw\">Ranged Attack</span></span><span> sequence, but as a target, choose an</span><span><span class=\"kw\">Enemy</span></span><span></span><span><span class=\"kw\">Engaged</span></span><span>with this Unit.</span></p></li><li aria-level=\"1\"><p role=\"presentation\"><span>Remove Casualties:</span><span> Use</span><span><span class=\"kw\">Engaged</span></span><span> Unit priority (Priority 1 → 2 → 3).</span></p></li></ol></td></tr></tbody></table>",
          "plain": "Close Combat Attack: Close Ranks (Optional): Move Leading Model up to 3\" - must end closer to the enemy . Reposition the rest of the Unit for maximum Base-to-Base . Declare Ranks: Fighting Rank ( Within 1\" ) + Supporting Rank ( Base-to-Base with Fighting Rank model). Models in those ranks are eligible for attacking in step 3. Roll Attacks: Follow the Ranged Attack sequence, but as a target, choose an Enemy Engaged with this Unit. Remove Casualties: Use Engaged Unit priority (Priority 1 → 2 → 3)."
        }
      ],
      "children": []
    },
    {
      "id": "12-6-phase-4-scoring-cleanup",
      "title": "12.6 Phase 4: Scoring & Cleanup",
      "rows": [
        {
          "type": "bullet",
          "html": "<b>Control:</b> Sum Supply <b><span class=\"kw\">Within</span> 3\"</b> of each Marker. Higher total controls. Ties = Contested.",
          "plain": "Control: Sum Supply Within 3\" of each Marker. Higher total controls. Ties = Contested."
        },
        {
          "type": "bullet",
          "html": "<b>Score VP:</b> Per <b>Mission Card</b> conditions.",
          "plain": "Score VP: Per Mission Card conditions."
        },
        {
          "type": "bullet",
          "html": "<b>End of Game:</b> Check winning conditions.",
          "plain": "End of Game: Check winning conditions."
        },
        {
          "type": "bullet",
          "html": "<b>End of the Round Effects:</b> Resolve triggered abilities.",
          "plain": "End of the Round Effects: Resolve triggered abilities."
        },
        {
          "type": "bullet",
          "html": "<b>Cleanup:</b> Remove <span class=\"kw\">Tokens</span>/<span class=\"kw\">Markers</span> (keep <b><span class=\"kw\">STAY IN PLAY</span></b>, <b>Damage <span class=\"kw\">Markers</span></b>, <b><span class=\"kw\">Mission Markers</span></b>, <b>Faction Indicator</b> s). Refresh all <b>Exhausted</b> cards.",
          "plain": "Cleanup: Remove Tokens / Markers (keep STAY IN PLAY , Damage Markers , Mission Markers , Faction Indicator s). Refresh all Exhausted cards."
        },
        {
          "type": "bullet",
          "html": "<b>Initiative:</b> Fewer <b>VP</b> = <b><span class=\"kw\">First Player Marker</span></b>. Tie = Roll-Off.",
          "plain": "Initiative: Fewer VP = First Player Marker . Tie = Roll-Off."
        }
      ],
      "children": []
    },
    {
      "id": "12-7-casualty-removal",
      "title": "12.7 Casualty Removal",
      "rows": [
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Unengaged</span> target:</b>",
          "plain": "Unengaged target:"
        },
        {
          "type": "bullet",
          "html": "<b>Cannot</b> remove more <span class=\"kw\">models</span> than are <span class=\"kw\">Visible</span> to the attacker.",
          "plain": "Cannot remove more models than are Visible to the attacker."
        },
        {
          "type": "bullet",
          "html": "Excess <b>Damage</b> beyond <span class=\"kw\">Visible</span> kills is discarded.",
          "plain": "Excess Damage beyond Visible kills is discarded."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Engaged</span> target (strict order):</b>",
          "plain": "Engaged target (strict order):"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Models</span> not <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of any <span class=\"kw\">Enemy</span> Unit.",
          "plain": "Models not Within the Engagement Range of any Enemy Unit."
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Models</span><b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> but not in <b>Base-to-Base</b> contact.",
          "plain": "Models Within the Engagement Range but not in Base-to-Base contact."
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Models</span> in <b>Base-to-Base</b> contact with an <b><span class=\"kw\">Enemy</span></b> model.",
          "plain": "Models in Base-to-Base contact with an Enemy model."
        },
        {
          "type": "text",
          "html": "<b><i>Cannot</i></b><i> remove a model if doing so breaks Engagement with an <span class=\"kw\">enemy</span>, provided another valid casualty exists.</i>",
          "plain": "Cannot remove a model if doing so breaks Engagement with an enemy , provided another valid casualty exists."
        }
      ],
      "children": []
    },
    {
      "id": "12-8-template-weapons",
      "title": "12.8 Template Weapons",
      "rows": [
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><tbody><tr><td><br/></td><td><p><span>Blast (BT)</span></p></td><td><p><span>Flamer (FT)</span></p></td></tr><tr><td><p><span>Alignment</span></p></td><td><p><span>Centre hole over the target base</span></p></td><td><p><span>Narrow end flush with the attacker base</span></p></td></tr><tr><td><p><span>LoS check</span></p></td><td><p><span>From the centre hole to each model</span></p></td><td><p><span>From the attacker base through the template to each model</span></p></td></tr><tr><td><p><span>Hit roll</span></p></td><td><p><span>Roll to Hit as normal</span></p></td><td><p><span>Roll to Hit as normal</span></p></td></tr><tr><td><p><span>Surge Die</span></p></td><td><p><span>No Surge Die is rolled</span></p></td><td><p><span>No Surge Die is rolled</span></p></td></tr><tr><td><p><span>Surge Result</span></p></td><td><p><span>Equals affected <span class=\"kw\">models</span> in the Main target Unit only</span></p></td><td><p><span>Equals affected <span class=\"kw\">models</span> in the Main target Unit only</span></p></td></tr><tr><td><p><span><span class=\"kw\">Spillover</span></span></p></td><td><p><span>Resolve each affected Unit as a separate Batch. Do not apply Rate of Attack <span class=\"kw\">modifiers</span> or Surge to <span class=\"kw\">Spillover</span> attacks</span></p></td><td><p><span>Resolve each affected Unit as a separate Batch. Do not apply Rate of Attack <span class=\"kw\">modifiers</span> or Surge to <span class=\"kw\">Spillover</span> attacks</span></p></td></tr></tbody></table>",
          "plain": "Blast (BT) Flamer (FT) Alignment Centre hole over the target base Narrow end flush with the attacker base LoS check From the centre hole to each model From the attacker base through the template to each model Hit roll Roll to Hit as normal Roll to Hit as normal Surge Die No Surge Die is rolled No Surge Die is rolled Surge Result Equals affected models in the Main target Unit only Equals affected models in the Main target Unit only Spillover Resolve each affected Unit as a separate Batch. Do not apply Rate of Attack modifiers or Surge to Spillover attacks Resolve each affected Unit as a separate Batch. Do not apply Rate of Attack modifiers or Surge to Spillover attacks"
        }
      ],
      "children": []
    },
    {
      "id": "12-9-dispute-resolution",
      "title": "12.9 Dispute Resolution",
      "rows": [
        {
          "type": "text",
          "html": "If a rules dispute <b>cannot</b> be resolved swiftly:",
          "plain": "If a rules dispute cannot be resolved swiftly:"
        },
        {
          "type": "bullet",
          "html": "Both players Roll-Off (2D6). Higher total wins.",
          "plain": "Both players Roll-Off (2D6). Higher total wins."
        },
        {
          "type": "bullet",
          "html": "The winner decides how the rule applies in this specific instance.",
          "plain": "The winner decides how the rule applies in this specific instance."
        },
        {
          "type": "bullet",
          "html": "Continue playing. Verify the ruling after the match.",
          "plain": "Continue playing. Verify the ruling after the match."
        },
        {
          "type": "text",
          "html": "<i>This rule exists to keep the game moving, not to provide a tactical loophole.</i>",
          "plain": "This rule exists to keep the game moving, not to provide a tactical loophole."
        }
      ],
      "children": []
    },
    {
      "id": "12-10-units-and-upgrade-points",
      "title": "12.10 Units and upgrade points.",
      "rows": [
        {
          "type": "text",
          "html": "This section lists the Mineral Cost and available Composition Options for each Unit in the game. When mustering a Unit during <span class=\"kw\">Army Building</span> (Part <span class=\"ref\">9. 1. 6</span>), select one Composition Option from the Unit’s entry below. The chosen option determines the number of <span class=\"kw\">models</span> in the Unit, the Mineral Cost paid, and the Unit’s initial <span class=\"kw\">Supply Value</span> as shown on its <b>Unit Card’s Supply Profile</b>.",
          "plain": "This section lists the Mineral Cost and available Composition Options for each Unit in the game. When mustering a Unit during Army Building (Part 9. 1. 6 ), select one Composition Option from the Unit’s entry below. The chosen option determines the number of models in the Unit, the Mineral Cost paid, and the Unit’s initial Supply Value as shown on its Unit Card’s Supply Profile ."
        },
        {
          "type": "text",
          "html": "Upgrade costs are listed separately beneath each Unit’s Composition Options. A purchased upgrade applies to every model in the Unit unless it has the <b><span class=\"kw\">SPECIALIST</span></b> keyword (Part <span class=\"ref\">9. 1. 7</span>).",
          "plain": "Upgrade costs are listed separately beneath each Unit’s Composition Options. A purchased upgrade applies to every model in the Unit unless it has the SPECIALIST keyword (Part 9. 1. 7 )."
        }
      ],
      "children": [
        {
          "id": "terran",
          "title": "Terran",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span><span class=\"kw\">Models</span></span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Supply Value</span></span></p></th></tr></thead><tbody><tr><td><p><span>6</span></p></td><td><p><span>160</span></p></td><td><p><span>1</span></p></td></tr><tr><td><p><span>9</span></p></td><td><p><span>210</span></p></td><td><p><span>2</span></p></td></tr></tbody></table>",
              "plain": "Models Mineral Cost Supply Value 6 160 1 9 210 2"
            },
            {
              "type": "text",
              "html": "<b><i>Upgrades:</i></b>",
              "plain": "Upgrades:"
            },
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Upgrade</span></p></th><th scope=\"col\"><p><span>Type</span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p><p><span>(6-<span class=\"kw\">Models</span>)</span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p><p><span>(9-<span class=\"kw\">Models</span>)</span></p></th></tr></thead><tbody><tr><td><p><span>AGG-12</span></p></td><td><p><span><span class=\"kw\">SPECIALIST</span>,</span></p><p><span>↑ FOR C-14 Rifle</span></p></td><td><p><span>10</span></p></td><td><p><span>10</span></p></td></tr><tr><td><p><span>Bayonet</span></p></td><td><p><span>-</span></p></td><td><p><span>20</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Combat Shield</span></p></td><td><p><span>-</span></p></td><td><p><span>20</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Grenades - Frag</span></p></td><td><p><span>-</span></p></td><td><p><span>10</span></p></td><td><p><span>10</span></p></td></tr><tr><td><p><span>Rocket Launcher</span></p></td><td><p><span><span class=\"kw\">SPECIALIST</span></span></p></td><td><p><span>40</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span>Slugthrower</span></p></td><td><p><span>-</span></p></td><td><p><span>10</span></p></td><td><p><span>20</span></p></td></tr></tbody></table>",
              "plain": "Upgrade Type Mineral Cost (6- Models ) Mineral Cost (9- Models ) AGG-12 SPECIALIST , ↑ FOR C-14 Rifle 10 10 Bayonet - 20 30 Combat Shield - 20 30 Grenades - Frag - 10 10 Rocket Launcher SPECIALIST 40 40 Slugthrower - 10 20"
            }
          ]
        },
        {
          "id": "zerg",
          "title": "Zerg",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span><span class=\"kw\">Models</span></span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Supply Value</span></span></p></th></tr></thead><tbody><tr><td><p><span>12</span></p></td><td><p><span>180</span></p></td><td><p><span>1</span></p></td></tr><tr><td><p><span>18</span></p></td><td><p><span>220</span></p></td><td><p><span>2</span></p></td></tr></tbody></table>",
              "plain": "Models Mineral Cost Supply Value 12 180 1 18 220 2"
            },
            {
              "type": "text",
              "html": "<b><i>Upgrades:</i></b>",
              "plain": "Upgrades:"
            },
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Upgrade</span></p></th><th scope=\"col\"><p><span>Type</span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p><p><span>(12-<span class=\"kw\">Models</span>)</span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p><p><span>(18-<span class=\"kw\">Models</span>)</span></p></th></tr></thead><tbody><tr><td><p><span>Adrenal Glands</span></p></td><td><p><span>-</span></p></td><td><p><span>30</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Burrow Ambush</span></p></td><td><p><span>-</span></p></td><td><p><span>20</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Shredding Claws</span></p></td><td><p><span>↑ Claws</span></p></td><td><p><span>20</span></p></td><td><p><span>20</span></p></td></tr></tbody></table>",
              "plain": "Upgrade Type Mineral Cost (12- Models ) Mineral Cost (18- Models ) Adrenal Glands - 30 30 Burrow Ambush - 20 30 Shredding Claws ↑ Claws 20 20"
            }
          ]
        },
        {
          "id": "protoss",
          "title": "Protoss",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span><span class=\"kw\">Models</span></span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Supply Value</span></span></p></th></tr></thead><tbody><tr><td><p><span>3</span></p></td><td><p><span>160</span></p></td><td><p><span>2</span></p></td></tr></tbody></table>",
              "plain": "Models Mineral Cost Supply Value 3 160 2"
            },
            {
              "type": "text",
              "html": "<b><i>Upgrades:</i></b>",
              "plain": "Upgrades:"
            },
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Upgrade</span></p></th><th scope=\"col\"><p><span>Type</span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p><p><span>(3-<span class=\"kw\">Models</span>)</span></p></th><th scope=\"col\"><p><span>Mineral Cost</span></p><br/></th></tr></thead><tbody><tr><td><p><span>Leg Enhancements</span></p></td><td><p><span>-</span></p></td><td><p><span>20</span></p></td><td><p><span>-</span></p></td></tr><tr><td><p><span>My Life for Aiur</span></p></td><td><p><span>-</span></p></td><td><p><span>10</span></p></td><td><p><span>-</span></p></td></tr><tr><td><p><span>We Stand as One</span></p></td><td><p><span>-</span></p></td><td><p><span>20</span></p></td><td><p><span>-</span></p></td></tr><tr><td><p><span>Zealous Round</span></p></td><td><p><span>-</span></p></td><td><p><span>10</span></p></td><td><p><span>-</span></p></td></tr></tbody></table>",
              "plain": "Upgrade Type Mineral Cost (3- Models ) Mineral Cost Leg Enhancements - 20 - My Life for Aiur - 10 - We Stand as One - 20 - Zealous Round - 10 -"
            }
          ]
        }
      ]
    },
    {
      "id": "12-11-tactical-card-points",
      "title": "12.11 Tactical Card points.",
      "rows": [],
      "children": [
        {
          "id": "terran",
          "title": "TERRAN",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Name</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Vespene Gas</span> Cost</span></p></th></tr></thead><tbody><tr><td><p><span>Barracks</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span>Barracks (Proxy)</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span>Barracks (Tech Lab)</span></p></td><td><p><span>45</span></p></td></tr><tr><td><p><span>Supply Depot</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span>Factory</span></p></td><td><p><span>35</span></p></td></tr><tr><td><p><span>Engineering Bay</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Armory</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Academy</span></p></td><td><p><span>35</span></p></td></tr><tr><td><p><span>Orbital Command</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span>Dropship</span></p></td><td><p><span>40</span></p></td></tr></tbody></table>",
              "plain": "Name Vespene Gas Cost Barracks 25 Barracks (Proxy) 40 Barracks (Tech Lab) 45 Supply Depot 40 Factory 35 Engineering Bay 30 Armory 30 Academy 35 Orbital Command 25 Dropship 40"
            }
          ]
        },
        {
          "id": "zerg",
          "title": "Zerg",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Name</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Vespene Gas</span> Cost</span></p></th></tr></thead><tbody><tr><td><p><span>Spawning Pool</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span>Spawning Pool (Six Pool)</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span><span class=\"kw\">Roach</span> Warren</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span><span class=\"kw\">Hydralisk</span> Den</span></p></td><td><p><span>35</span></p></td></tr><tr><td><p><span>Evolution Chamber</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Hatchery</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Lair</span></p></td><td><p><span>35</span></p></td></tr><tr><td><p><span>Overseer</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span>Overlord</span></p></td><td><p><span>45</span></p></td></tr></tbody></table>",
              "plain": "Name Vespene Gas Cost Spawning Pool 25 Spawning Pool (Six Pool) 40 Roach Warren 25 Hydralisk Den 35 Evolution Chamber 30 Hatchery 30 Lair 35 Overseer 25 Overlord 45"
            },
            {
              "type": "text",
              "html": "<b><i>Creep cards:</i></b>",
              "plain": "Creep cards:"
            },
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Name</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Vespene Gas</span> Cost</span></p></th></tr></thead><tbody><tr><td><p><span>Accelerating Creep</span></p></td><td><p><span>0</span></p></td></tr><tr><td><p><span>Malignant Creep</span></p></td><td><p><span>10</span></p></td></tr></tbody></table>",
              "plain": "Name Vespene Gas Cost Accelerating Creep 0 Malignant Creep 10"
            }
          ]
        },
        {
          "id": "protoss",
          "title": "Protoss",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/></colgroup><thead><tr><th scope=\"col\"><p><span>Name</span></p></th><th scope=\"col\"><p><span><span class=\"kw\">Vespene Gas</span> Cost</span></p></th></tr></thead><tbody><tr><td><p><span>Gateway</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span>Warp Gate</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span>Gate Chronoboosted</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span>Observer</span></p></td><td><p><span>25</span></p></td></tr><tr><td><p><span>Nexus</span></p></td><td><p><span>35</span></p></td></tr><tr><td><p><span>Nexus Overcharged</span></p></td><td><p><span>35</span></p></td></tr><tr><td><p><span>Power Field</span></p></td><td><p><span>40</span></p></td></tr><tr><td><p><span>Forge</span></p></td><td><p><span>30</span></p></td></tr><tr><td><p><span>Warp Prism</span></p></td><td><p><span>45</span></p></td></tr><tr><td><p><span>Twilight Council</span></p></td><td><p><span>40</span></p></td></tr></tbody></table>",
              "plain": "Name Vespene Gas Cost Gateway 25 Warp Gate 40 Gate Chronoboosted 40 Observer 25 Nexus 35 Nexus Overcharged 35 Power Field 40 Forge 30 Warp Prism 45 Twilight Council 40"
            }
          ]
        }
      ]
    }
  ]
};
window.__companionRuleParts['part-2'] = {
  "num": "2",
  "kicker": "Part II",
  "title": "Core Concepts",
  "id": "part-2",
  "color": "#87a9b2",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "Before the first shot is fired, every commander must understand the language of the battlefield. This Part covers the basic building blocks of the game: <span class=\"kw\">models</span>, <span class=\"kw\">Units</span>, measurements, and the terminology used throughout the rest of the rulebook.",
      "plain": "Before the first shot is fired, every commander must understand the language of the battlefield. This Part covers the basic building blocks of the game: models , Units , measurements, and the terminology used throughout the rest of the rulebook."
    }
  ],
  "rules": [
    {
      "id": "2-1-models",
      "title": "2.1 Models",
      "rows": [
        {
          "type": "text",
          "html": "Every Archon Studio miniature in a player’s army is a model - a single entity (<span class=\"kw\">Marine</span>, <span class=\"kw\">Zergling</span>, Ultralisk) mounted on its own independent base. All rules apply to the model through its base. The physical miniature above the base is purely for aesthetic purposes.",
          "plain": "Every Archon Studio miniature in a player’s army is a model - a single entity ( Marine , Zergling , Ultralisk) mounted on its own independent base. All rules apply to the model through its base. The physical miniature above the base is purely for aesthetic purposes."
        }
      ],
      "children": []
    },
    {
      "id": "2-2-units",
      "title": "2.2 Units",
      "rows": [
        {
          "type": "text",
          "html": "An army is made up of <span class=\"kw\">Units</span>. A Unit is one or more <span class=\"kw\">models</span> acting together as a single formation.",
          "plain": "An army is made up of Units . A Unit is one or more models acting together as a single formation."
        },
        {
          "type": "bullet",
          "html": "<b>Composition:</b> Each <b>Unit Card</b> specifies the number of <span class=\"kw\">models</span> it contains. An infantry squad may have many soldiers; a vehicle may operate alone.",
          "plain": "Composition: Each Unit Card specifies the number of models it contains. An infantry squad may have many soldiers; a vehicle may operate alone."
        },
        {
          "type": "bullet",
          "html": "<b>Cohesion:</b> <span class=\"kw\">Models</span> <span class=\"kw\">within</span> a Unit fight and <span class=\"kw\">move</span> as a single entity. They are bound by the rules of <b>Coherency</b> (Part <span class=\"ref\">4. 4</span>), representing the discipline and communication required to operate on a battlefield.",
          "plain": "Cohesion: Models within a Unit fight and move as a single entity. They are bound by the rules of Coherency (Part 4. 4 ), representing the discipline and communication required to operate on a battlefield."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Friendly</span> &amp; <span class=\"kw\">Enemy</span>:</b> A player’s own <span class=\"kw\">Units</span> are <b><span class=\"kw\">Friendly</span></b>. The opponent’s <span class=\"kw\">Units</span> are <b>Enemies</b>.",
          "plain": "Friendly & Enemy : A player’s own Units are Friendly . The opponent’s Units are Enemies ."
        }
      ],
      "children": []
    },
    {
      "id": "2-3-bases",
      "title": "2.3 Bases",
      "rows": [
        {
          "type": "text",
          "html": "Every model stands on a base, and that base is the single most important physical object in the game. It does not matter how a miniature is posed, whether a <span class=\"kw\">Zealot</span> is mid-leap or a <span class=\"kw\">Hydralisk</span> is rearing back to strike; the rules see only the base. Every measurement, every <b><span class=\"kw\">Line of Sight</span></b> check, and every question about whether two <span class=\"kw\">models</span> are touching or overlapping is resolved by looking at their <span class=\"kw\">bases</span>, nothing else.",
          "plain": "Every model stands on a base, and that base is the single most important physical object in the game. It does not matter how a miniature is posed, whether a Zealot is mid-leap or a Hydralisk is rearing back to strike; the rules see only the base. Every measurement, every Line of Sight check, and every question about whether two models are touching or overlapping is resolved by looking at their bases , nothing else."
        },
        {
          "type": "text",
          "html": "Every model must be mounted on the correct base size as specified on its <b>Unit Card</b>. Using the wrong base size changes a model’s physical footprint and directly affects gameplay, so consistency matters.",
          "plain": "Every model must be mounted on the correct base size as specified on its Unit Card . Using the wrong base size changes a model’s physical footprint and directly affects gameplay, so consistency matters."
        },
        {
          "type": "bullet",
          "html": "<b>No Overlap:</b> <span class=\"kw\">Bases</span> may never overlap. If a model cannot be set without its base overlapping another base or <span class=\"kw\">impassable terrain</span>, it simply cannot go there.",
          "plain": "No Overlap: Bases may never overlap. If a model cannot be set without its base overlapping another base or impassable terrain , it simply cannot go there."
        },
        {
          "type": "bullet",
          "html": "<b>Scenic Freedom:</b> Players are free to add scenic basing, custom conversions, player dramatic poses, and flight stands. The game encourages creativity - just know that, for rules purposes, the base and the Size Characteristic on the <b>Unit Card</b> are the only things that count. A <span class=\"kw\">Marine</span> standing on a pile of rubble is no taller than one standing on a bare base. A Mutalisk on a towering flight stand has the same Size as one on a short peg. <b>Flight Stands:</b> If a model uses a flight stand, the bottom of the stand counts as the model&#x27; s base for all measurements and positioning.",
          "plain": "Scenic Freedom: Players are free to add scenic basing, custom conversions, player dramatic poses, and flight stands. The game encourages creativity - just know that, for rules purposes, the base and the Size Characteristic on the Unit Card are the only things that count. A Marine standing on a pile of rubble is no taller than one standing on a bare base. A Mutalisk on a towering flight stand has the same Size as one on a short peg. Flight Stands: If a model uses a flight stand, the bottom of the stand counts as the model' s base for all measurements and positioning."
        },
        {
          "type": "bullet",
          "html": "<b>Wobbly Model Syndrome</b>: When a model cannot sit flat on the terrain, both players should agree on where the model would stand if the surface allowed it. Set the model as close to that spot as possible, or use a marker to indicate its actual position. The model is treated as occupying the agreed position for all purposes.",
          "plain": "Wobbly Model Syndrome : When a model cannot sit flat on the terrain, both players should agree on where the model would stand if the surface allowed it. Set the model as close to that spot as possible, or use a marker to indicate its actual position. The model is treated as occupying the agreed position for all purposes."
        }
      ],
      "children": []
    },
    {
      "id": "2-4-tags",
      "title": "2.4 Tags",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">Tags</span> are <span class=\"kw\">Keywords</span> printed at the bottom of each <b>Unit Card</b>. They allow rules to target specific types of <span class=\"kw\">Units</span> without repeating lengthy definitions.",
          "plain": "Tags are Keywords printed at the bottom of each Unit Card . They allow rules to target specific types of Units without repeating lengthy definitions."
        }
      ],
      "children": [
        {
          "id": "2-4-1-faction-tags",
          "title": "2.4.1 Faction Tags",
          "rows": [
            {
              "type": "text",
              "html": "<b>Faction Tag</b> s identify a Unit’s allegiance.",
              "plain": "Faction Tag s identify a Unit’s allegiance."
            },
            {
              "type": "bullet",
              "html": "<b>Race <span class=\"kw\">Tags</span>:</b><b><span class=\"kw\">Terran</span></b>, <b><span class=\"kw\">Zerg</span></b>, <b><span class=\"kw\">Protoss</span></b>.",
              "plain": "Race Tags : Terran , Zerg , Protoss ."
            },
            {
              "type": "bullet",
              "html": "<b>Sub-<span class=\"kw\">Faction Tags</span>:</b> Specific broods or organisations, e. g. , <b><span class=\"kw\">Kerrigan</span>’s Swarm</b>, <b>Raynor’s Raiders</b>.",
              "plain": "Sub- Faction Tags : Specific broods or organisations, e. g. , Kerrigan ’s Swarm , Raynor’s Raiders ."
            },
            {
              "type": "bullet",
              "html": "<b>Function:</b> During <span class=\"kw\">Army Building</span>, a player may include only <span class=\"kw\">Units</span> and <b><span class=\"kw\">Tactical Cards</span></b> that share <b><span class=\"kw\">Faction Tags</span></b> with the chosen <b>Faction Card</b>.",
              "plain": "Function: During Army Building , a player may include only Units and Tactical Cards that share Faction Tags with the chosen Faction Card ."
            }
          ]
        },
        {
          "id": "2-4-2-combat-tags",
          "title": "2.4.2 Combat Tags",
          "rows": [
            {
              "type": "text",
              "html": "<b>Combat Tag</b> s identify a Unit’s physical nature and tactical class.",
              "plain": "Combat Tag s identify a Unit’s physical nature and tactical class."
            },
            {
              "type": "text",
              "html": "<b>Type <span class=\"kw\">Tags</span>: Armoured, Biological, Light, Mechanical, Psionic, <span class=\"kw\">Flying</span>, and Ground.</b>",
              "plain": "Type Tags : Armoured, Biological, Light, Mechanical, Psionic, Flying , and Ground."
            },
            {
              "type": "bullet",
              "html": "<b>Targeting:</b> Some weapons can fire only at specific <span class=\"kw\">tags</span> (e. g. , &quot; Target: <b><span class=\"kw\">Flying</span></b>&quot; ).",
              "plain": "Targeting: Some weapons can fire only at specific tags (e. g. , \" Target: Flying \" )."
            },
            {
              "type": "bullet",
              "html": "<b>Surge:</b> A weapon’s Surge efficiency triggers only when the target has the <b>Combat Tag</b> listed in the weapon’s <b>Surge Type</b> (Part <span class=\"ref\">8. 7. 4</span>).",
              "plain": "Surge: A weapon’s Surge efficiency triggers only when the target has the Combat Tag listed in the weapon’s Surge Type (Part 8. 7. 4 )."
            },
            {
              "type": "bullet",
              "html": "<b>Bonuses:</b> Abilities such as <span class=\"kw\">ANTI-EVADE</span> (X) or <span class=\"kw\">PIERCE</span> (X) often apply only against specific <span class=\"kw\">tags</span>.",
              "plain": "Bonuses: Abilities such as ANTI-EVADE (X) or PIERCE (X) often apply only against specific tags ."
            },
            {
              "type": "text",
              "html": "Note: The <b>Ground Combat Tag</b> and the<b> GROUND LEVEL</b> elevation (Part <span class=\"ref\">8. 5. 3</span>) are distinct concepts. A <b><span class=\"kw\">Flying</span></b> Unit standing on the playmat is at <b>GROUND LEVEL</b> but does not have the <b>Ground Combat Tag.</b> Throughout these rules, <b>Ground</b> in bold caps always refers to the <b>Combat Tag</b>. <b>GROUND LEVEL</b> always refers to elevation.",
              "plain": "Note: The Ground Combat Tag and the GROUND LEVEL elevation (Part 8. 5. 3 ) are distinct concepts. A Flying Unit standing on the playmat is at GROUND LEVEL but does not have the Ground Combat Tag. Throughout these rules, Ground in bold caps always refers to the Combat Tag . GROUND LEVEL always refers to elevation."
            }
          ]
        }
      ]
    },
    {
      "id": "2-5-player-roles",
      "title": "2.5 Player Roles",
      "rows": [
        {
          "type": "text",
          "html": "At any given moment, each player occupies one or more of the following roles. These terms appear throughout the rules and determine who makes decisions, who rolls <span class=\"kw\">dice</span>, and who is affected by an ability.",
          "plain": "At any given moment, each player occupies one or more of the following roles. These terms appear throughout the rules and determine who makes decisions, who rolls dice , and who is affected by an ability."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Active Player</span>:</b> The player whose turn it is to act. Some rules, particularly <b>Reactions</b>, refer to this to determine priority when both sides respond to the same event.",
          "plain": "Active Player : The player whose turn it is to act. Some rules, particularly Reactions , refer to this to determine priority when both sides respond to the same event."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Controlling Player</span>:</b> The player who commands a specific Unit, model, or Token. They make all decisions and roll all <span class=\"kw\">dice</span>. Certain abilities (e. g. , Neural Parasite) can transfer control; the new controller then acts in every respect as though the Unit were their own.",
          "plain": "Controlling Player : The player who commands a specific Unit, model, or Token. They make all decisions and roll all dice . Certain abilities (e. g. , Neural Parasite) can transfer control; the new controller then acts in every respect as though the Unit were their own."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Friendly</span> and <span class=\"kw\">Enemy</span>:</b> Anything belonging to the <span class=\"kw\">controlling player</span> or their teammates is <b><span class=\"kw\">Friendly</span></b>. Anything belonging to an opponent is an <span class=\"kw\">enemy</span>. In <span class=\"kw\">team games</span>, all teammates are <b><span class=\"kw\">Friendly</span></b> to one another.",
          "plain": "Friendly and Enemy : Anything belonging to the controlling player or their teammates is Friendly . Anything belonging to an opponent is an enemy . In team games , all teammates are Friendly to one another."
        }
      ],
      "children": []
    },
    {
      "id": "2-6-keywords-and-rule-priority",
      "title": "2.6 Keywords and Rule Priority",
      "rows": [],
      "children": [
        {
          "id": "2-6-1-keywords",
          "title": "2.6.1 Keywords",
          "rows": [
            {
              "type": "text",
              "html": "<span class=\"kw\">Keywords</span> are written in <b>BOLD CAPS (e. g. <span class=\"kw\">SIDEARM</span>, <span class=\"kw\">PIERCE</span>, <span class=\"kw\">HIDDEN</span>).</b> A Keyword always means the same thing, regardless of the Unit in which it appears. Full definitions are in Part 11: Keyword Glossary and Definitions.",
              "plain": "Keywords are written in BOLD CAPS (e. g. SIDEARM , PIERCE , HIDDEN ). A Keyword always means the same thing, regardless of the Unit in which it appears. Full definitions are in Part 11: Keyword Glossary and Definitions."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Keywords</span> do not stack.</b> Gaining the same Keyword twice provides no extra benefit. If a Keyword has a numeric value (e. g. , <b><span class=\"kw\">PRECISION</span> (1)</b> and <b><span class=\"kw\">PRECISION</span> (2)</b>), use only the highest value.",
              "plain": "Keywords do not stack. Gaining the same Keyword twice provides no extra benefit. If a Keyword has a numeric value (e. g. , PRECISION (1) and PRECISION (2) ), use only the highest value."
            }
          ]
        },
        {
          "id": "2-6-2-the-priority",
          "title": "2.6.2 The Priority",
          "rows": [
            {
              "type": "text",
              "html": "Specific Rules take precedence over General Rules. If text on a <b>Unit Card</b>, <b>Mission Card</b>, or <b><span class=\"kw\">Special Ability</span></b> contradicts the Core Rules, the card or ability takes precedence.",
              "plain": "Specific Rules take precedence over General Rules. If text on a Unit Card , Mission Card , or Special Ability contradicts the Core Rules, the card or ability takes precedence."
            }
          ]
        }
      ]
    },
    {
      "id": "2-7-ability-types",
      "title": "2.7 Ability Types",
      "rows": [
        {
          "type": "text",
          "html": "Every <b><span class=\"kw\">Special Ability</span></b> falls into one of three categories. Understanding the difference is essential, as it determines when the ability can be used, whether it requires a conscious decision, and what happens if both players want to act at the same time. Part 10 covers these in full detail; what follows is a working summary.",
          "plain": "Every Special Ability falls into one of three categories. Understanding the difference is essential, as it determines when the ability can be used, whether it requires a conscious decision, and what happens if both players want to act at the same time. Part 10 covers these in full detail; what follows is a working summary."
        }
      ],
      "children": [
        {
          "id": "2-7-1-active-abilities",
          "title": "2.7.1 Active Abilities",
          "rows": [
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Active Abilities</span></b> are deliberate choices, a stim injection, a mode switch, a called shot. They require the Unit to be<b> Activated</b>, and must be triggered immediately before declaring an action or immediately after one fully resolves. A player cannot interrupt an action mid-flow to use one.",
              "plain": "Active Abilities are deliberate choices, a stim injection, a mode switch, a called shot. They require the Unit to be Activated , and must be triggered immediately before declaring an action or immediately after one fully resolves. A player cannot interrupt an action mid-flow to use one."
            },
            {
              "type": "text",
              "html": "A Unit in <b><span class=\"kw\">Reserves</span></b> cannot use <b><span class=\"kw\">Active Abilities</span></b> unless the ability explicitly states otherwise. Each named <b>Active Ability</b> may be used only once per Round by a specific Unit, unless it has the <b><span class=\"kw\">REPEATABLE</span></b> keyword. Effects granted by <b><span class=\"kw\">Active Abilities</span></b> expire at the End of the Current Round unless otherwise stated.",
              "plain": "A Unit in Reserves cannot use Active Abilities unless the ability explicitly states otherwise. Each named Active Ability may be used only once per Round by a specific Unit, unless it has the REPEATABLE keyword. Effects granted by Active Abilities expire at the End of the Current Round unless otherwise stated."
            }
          ]
        },
        {
          "id": "2-7-2-passive-abilities",
          "title": "2.7.2 Passive Abilities",
          "rows": [
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Passive Abilities</span></b> are always active. They represent innate traits, permanent equipment, or biological adaptations that require no decision to activate; they simply function as long as the Unit is on the battlefield.",
              "plain": "Passive Abilities are always active. They represent innate traits, permanent equipment, or biological adaptations that require no decision to activate; they simply function as long as the Unit is on the battlefield."
            },
            {
              "type": "text",
              "html": "Like <b><span class=\"kw\">Active Abilities</span></b>, <b><span class=\"kw\">Passive Abilities</span></b> are inactive while the Unit is in <b><span class=\"kw\">Reserves</span></b>, unless otherwise stated.",
              "plain": "Like Active Abilities , Passive Abilities are inactive while the Unit is in Reserves , unless otherwise stated."
            }
          ]
        },
        {
          "id": "2-7-3-reaction-abilities",
          "title": "2.7.3 Reaction Abilities",
          "rows": [
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Reaction Abilities</span></b> are the battlefield’s reflexes. They fire in response to a specific trigger, such as an incoming attack, an <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Charge</span>, or a model being Destroyed, and allow a player to act outside the normal activation sequence. The catch is timing: a Reaction must be declared at the <b>exact moment</b> its trigger occurs. If the moment passes, the opportunity is gone.",
              "plain": "Reaction Abilities are the battlefield’s reflexes. They fire in response to a specific trigger, such as an incoming attack, an Enemy Charge , or a model being Destroyed, and allow a player to act outside the normal activation sequence. The catch is timing: a Reaction must be declared at the exact moment its trigger occurs. If the moment passes, the opportunity is gone."
            },
            {
              "type": "text",
              "html": "Each player may resolve only <b>one Reaction per Activation</b>.",
              "plain": "Each player may resolve only one Reaction per Activation ."
            },
            {
              "type": "text",
              "html": "Each named <b>Reaction Ability</b> may be used only <b>once per Round</b> by a specific Unit. This limit applies across the entire Round (all Phases and all <span class=\"kw\">Activations</span>). A single Unit cannot use the same-named Reaction more than once per Round, even on different triggers.",
              "plain": "Each named Reaction Ability may be used only once per Round by a specific Unit. This limit applies across the entire Round (all Phases and all Activations ). A single Unit cannot use the same-named Reaction more than once per Round, even on different triggers."
            },
            {
              "type": "text",
              "html": "Different <span class=\"kw\">Units</span> may each use the same named Reaction once per Round.",
              "plain": "Different Units may each use the same named Reaction once per Round."
            },
            {
              "type": "text",
              "html": "If both players want to react to the same trigger, the <b><span class=\"kw\">Active Player</span></b> resolves their <b>Reaction</b> first.",
              "plain": "If both players want to react to the same trigger, the Active Player resolves their Reaction first."
            },
            {
              "type": "text",
              "html": "Like Active and <span class=\"kw\">Passive Abilities</span>, <span class=\"kw\">Reaction Abilities</span> cannot be used while the Unit is in <span class=\"kw\">Reserves</span> unless stated otherwise.",
              "plain": "Like Active and Passive Abilities , Reaction Abilities cannot be used while the Unit is in Reserves unless stated otherwise."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE:</b> If a <span class=\"kw\">Zealot</span> Unit is attacked. It may use <i>Zealous Round</i> OR <i>Ground Armour</i>, not both in the same <b><span class=\"kw\">Enemy</span> Activation</b>.<br/>If a <span class=\"kw\">Marine</span> Unit is attacked, and it uses <i>Infantry Armor</i> for its Armour Roll, the <span class=\"kw\">Medic</span> Unit behind will not be able to use its <i>Life Support</i> in the same <b><span class=\"kw\">Enemy</span> Activation</b>.",
              "plain": "EXAMPLE: If a Zealot Unit is attacked. It may use Zealous Round OR Ground Armour , not both in the same Enemy Activation . If a Marine Unit is attacked, and it uses Infantry Armor for its Armour Roll, the Medic Unit behind will not be able to use its Life Support in the same Enemy Activation ."
            }
          ]
        }
      ]
    }
  ]
};
window.__companionRuleParts['part-3'] = {
  "num": "3",
  "kicker": "Part III",
  "title": "Dice and Rolling",
  "id": "part-3",
  "color": "#b49d79",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "Chance plays a vital role on the battlefield, as a well-aimed volley can harmlessly ricochet off reinforced armour, or a desperate last stand can turn the tide of an entire battle. In this Part, we’ll discuss how <span class=\"kw\">dice</span> are used to resolve uncertain outcomes, from basic rolls and <span class=\"kw\">modifiers</span> to the Roll-Off, which settles disputes and decides initiative.",
      "plain": "Chance plays a vital role on the battlefield, as a well-aimed volley can harmlessly ricochet off reinforced armour, or a desperate last stand can turn the tide of an entire battle. In this Part, we’ll discuss how dice are used to resolve uncertain outcomes, from basic rolls and modifiers to the Roll-Off, which settles disputes and decides initiative."
    }
  ],
  "rules": [
    {
      "id": "3-1-dice",
      "title": "3.1 Dice",
      "rows": [
        {
          "type": "text",
          "html": "The game uses standard six-sided <span class=\"kw\">dice</span> (<b>D6</b>).",
          "plain": "The game uses standard six-sided dice ( D6 )."
        },
        {
          "type": "bullet",
          "html": "<b>D6:</b> Roll one die. The result is the number shown.",
          "plain": "D6: Roll one die. The result is the number shown."
        },
        {
          "type": "bullet",
          "html": "<b>D3:</b> Roll one D6 and halve the result, rounding up: 1–2 = <b>1</b>, 3–4 = <b>2</b>, 5–6 = <b>3</b>.",
          "plain": "D3: Roll one D6 and halve the result, rounding up: 1–2 = 1 , 3–4 = 2 , 5–6 = 3 ."
        },
        {
          "type": "bullet",
          "html": "<b>Multiple <span class=\"kw\">Dice</span> (2D6, 3D6):</b> Roll the stated number of <span class=\"kw\">dice</span> and add the results together.",
          "plain": "Multiple Dice (2D6, 3D6): Roll the stated number of dice and add the results together."
        }
      ],
      "children": []
    },
    {
      "id": "3-2-roll-offs",
      "title": "3.2 Roll-Offs",
      "rows": [
        {
          "type": "text",
          "html": "When a rule calls for a Roll-Off, both players roll 2D6. The higher total wins. Ties are re-rolled until a winner is determined.",
          "plain": "When a rule calls for a Roll-Off, both players roll 2D6. The higher total wins. Ties are re-rolled until a winner is determined."
        }
      ],
      "children": []
    },
    {
      "id": "3-3-re-rolls",
      "title": "3.3 Re-Rolls",
      "rows": [
        {
          "type": "text",
          "html": "Some abilities grant the chance to re-roll, allowing a second attempt when the first result is unfavourable. Pick up the die and roll it again. The new result replaces the original, even if it is worse. Unless stated otherwise, a re-roll applies to a single die. If an ability specifies re-rolling multiple <span class=\"kw\">dice</span>, follow its instructions.",
          "plain": "Some abilities grant the chance to re-roll, allowing a second attempt when the first result is unfavourable. Pick up the die and roll it again. The new result replaces the original, even if it is worse. Unless stated otherwise, a re-roll applies to a single die. If an ability specifies re-rolling multiple dice , follow its instructions."
        }
      ],
      "children": []
    },
    {
      "id": "3-4-modifiers",
      "title": "3.4 Modifiers",
      "rows": [
        {
          "type": "text",
          "html": "<span class=\"kw\">Modifiers</span> adjust the Target Number of a roll. Apply all <span class=\"kw\">modifiers</span> before rolling.",
          "plain": "Modifiers adjust the Target Number of a roll. Apply all modifiers before rolling."
        },
        {
          "type": "bullet",
          "html": "<b>+X <span class=\"kw\">Modifier</span></b>: Makes the roll easier, reducing the Target Number by X.",
          "plain": "+X Modifier : Makes the roll easier, reducing the Target Number by X."
        },
        {
          "type": "bullet",
          "html": "<b>-X <span class=\"kw\">Modifier</span>:</b> Makes the roll harder, increasing the Target Number by X.",
          "plain": "-X Modifier : Makes the roll harder, increasing the Target Number by X."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Modifiers</span> from different named sources are cumulative unless otherwise stated.",
          "plain": "Modifiers from different named sources are cumulative unless otherwise stated."
        },
        {
          "type": "example",
          "html": "<b>EXAMPLE:</b> A <span class=\"kw\">Marine</span> needs <b>5+</b> to hit.",
          "plain": "EXAMPLE: A Marine needs 5+ to hit."
        },
        {
          "type": "bullet",
          "html": "A <b>+1 <span class=\"kw\">Modifier</span></b> reduces the Target Number by 1. He now <span class=\"kw\">hits</span> on <b>4+</b>.",
          "plain": "A +1 Modifier reduces the Target Number by 1. He now hits on 4+ ."
        },
        {
          "type": "bullet",
          "html": "A <b>-1 <span class=\"kw\">Modifier</span></b> increases the Target Number by 1. He now <span class=\"kw\">hits</span> on <b>6+</b>.",
          "plain": "A -1 Modifier increases the Target Number by 1. He now hits on 6+ ."
        },
        {
          "type": "text",
          "html": "Ability text: &quot; +1 to Armour&quot; means the <b>Armour Roll</b> improves (Target Number decreases). &quot; -1 to Hit&quot; means hitting becomes harder (Target Number increases).",
          "plain": "Ability text: \" +1 to Armour\" means the Armour Roll improves (Target Number decreases). \" -1 to Hit\" means hitting becomes harder (Target Number increases)."
        },
        {
          "type": "text",
          "html": "A Target Number can never be modified below 2+ or above 6+.",
          "plain": "A Target Number can never be modified below 2+ or above 6+."
        },
        {
          "type": "note",
          "html": "<b>DESIGNER’S NOTE:</b> <span class=\"kw\">Modifiers</span> adjust the Target Number, not the <span class=\"kw\">dice</span> roll itself. This keeps arithmetic simple, as a player always knows exactly what the Target Number is before rolling the <span class=\"kw\">dice</span>. It also ensures that automatic successes on a roll of 6 and automatic failures on a roll of 1 are clear, no matter how many <span class=\"kw\">modifiers</span> are applied to a single roll.",
          "plain": "DESIGNER’S NOTE: Modifiers adjust the Target Number, not the dice roll itself. This keeps arithmetic simple, as a player always knows exactly what the Target Number is before rolling the dice . It also ensures that automatic successes on a roll of 6 and automatic failures on a roll of 1 are clear, no matter how many modifiers are applied to a single roll."
        }
      ],
      "children": []
    },
    {
      "id": "3-5-fixed-additions",
      "title": "3.5 Fixed Additions",
      "rows": [
        {
          "type": "text",
          "html": "If a rule says &quot; D3+1&quot; , roll the die and add 1 to the result. This is not a <span class=\"kw\">modifier</span> to a Target Number - it generates a value (e. g. 4 <b>Damage</b> instead of 3).",
          "plain": "If a rule says \" D3+1\" , roll the die and add 1 to the result. This is not a modifier to a Target Number - it generates a value (e. g. 4 Damage instead of 3)."
        }
      ],
      "children": []
    },
    {
      "id": "3-6-automatic-results",
      "title": "3.6 Automatic Results",
      "rows": [
        {
          "type": "text",
          "html": "No amount of preparation guarantees a perfect outcome, and no situation is ever truly hopeless. The <span class=\"kw\">dice</span> always leave room for the unexpected.",
          "plain": "No amount of preparation guarantees a perfect outcome, and no situation is ever truly hopeless. The dice always leave room for the unexpected."
        },
        {
          "type": "text",
          "html": "Regardless of the final Target Number, a natural roll of 6 always succeeds, and a natural roll of 1 always fails. No <span class=\"kw\">modifier</span> or ability can override these boundaries.",
          "plain": "Regardless of the final Target Number, a natural roll of 6 always succeeds, and a natural roll of 1 always fails. No modifier or ability can override these boundaries."
        },
        {
          "type": "text",
          "html": "<b>A Null Value (-)</b> indicates that the capability does not exist. No <span class=\"kw\">modifier</span> can grant a roll where a Null Value applies.",
          "plain": "A Null Value (-) indicates that the capability does not exist. No modifier can grant a roll where a Null Value applies."
        }
      ],
      "children": []
    },
    {
      "id": "3-7-tests",
      "title": "3.7 Tests",
      "rows": [
        {
          "type": "text",
          "html": "Whenever the rules ask a player to roll against a number, an <b>Armour Roll</b>, a Hit roll, or an Evade check, that roll is a Test. Every Test follows the same logic: there is a Target Number, the player rolls, and the result either meets the threshold or it does not.",
          "plain": "Whenever the rules ask a player to roll against a number, an Armour Roll , a Hit roll, or an Evade check, that roll is a Test. Every Test follows the same logic: there is a Target Number, the player rolls, and the result either meets the threshold or it does not."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Tests</span> come in two flavours:",
          "plain": "Tests come in two flavours:"
        },
        {
          "type": "bullet",
          "html": "<b>Characteristic <span class=\"kw\">Tests</span></b> use a value from the Unit’s own profile, its Armour, its Evade, and its native resilience. When a squad of Marines takes fire and rolls their <b>Armour Rolls</b>, that is a Characteristic Test.",
          "plain": "Characteristic Tests use a value from the Unit’s own profile, its Armour, its Evade, and its native resilience. When a squad of Marines takes fire and rolls their Armour Rolls , that is a Characteristic Test."
        },
        {
          "type": "bullet",
          "html": "<b>Attribute <span class=\"kw\">Tests</span></b> use a value from a Weapon Profile or Special Rule, such as a weapon’s Hit characteristic. When those same Marines fire their C-14 Rifles and roll to hit, that is an Attribute Test.",
          "plain": "Attribute Tests use a value from a Weapon Profile or Special Rule, such as a weapon’s Hit characteristic. When those same Marines fire their C-14 Rifles and roll to hit, that is an Attribute Test."
        },
        {
          "type": "text",
          "html": "Not everything involving <span class=\"kw\">dice</span> is a Test. <b>Value Generation</b> - a <b><span class=\"kw\">Charge</span> Roll</b>, a D3 <b>Damage</b> result, simply produces a number. The player adds the die result to the base value as instructed. There is no Target Number to beat.",
          "plain": "Not everything involving dice is a Test. Value Generation - a Charge Roll , a D3 Damage result, simply produces a number. The player adds the die result to the base value as instructed. There is no Target Number to beat."
        },
        {
          "type": "text",
          "html": "To resolve any Test: identify the base Target Number, apply all <span class=\"kw\">Modifiers</span> to determine the final Target Number, and roll the die. If the result is equal to or exceeds the Target Number, the Test succeeds. If it falls short, the Test fails.",
          "plain": "To resolve any Test: identify the base Target Number, apply all Modifiers to determine the final Target Number, and roll the die. If the result is equal to or exceeds the Target Number, the Test succeeds. If it falls short, the Test fails."
        }
      ],
      "children": []
    },
    {
      "id": "3-8-cocked-dice",
      "title": "3.8 Cocked Dice",
      "rows": [
        {
          "type": "text",
          "html": "If a die does not land flat on the playing surface, lodged against terrain, tilted on a base, or off the table entirely, the roll is invalid. Pick it up and roll it again. Players should agree before the game on what constitutes a cocked die. The simplest test: if the result isn&#x27; t obvious at a glance, re-roll it.",
          "plain": "If a die does not land flat on the playing surface, lodged against terrain, tilted on a base, or off the table entirely, the roll is invalid. Pick it up and roll it again. Players should agree before the game on what constitutes a cocked die. The simplest test: if the result isn' t obvious at a glance, re-roll it."
        }
      ],
      "children": []
    }
  ]
};
window.__companionRuleParts['part-4'] = {
  "num": "4",
  "kicker": "Part IV",
  "title": "Measuring and Movement",
  "id": "part-4",
  "color": "#93aac7",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "Positioning is everything. A few inches can be the difference between a deadly flanking <span class=\"kw\">charge</span> and an exposed Unit caught out in the open. This Part covers how distances are measured, how <span class=\"kw\">models</span> <span class=\"kw\">move</span> across the battlefield, and the rules of Coherency that bind a Unit together.",
      "plain": "Positioning is everything. A few inches can be the difference between a deadly flanking charge and an exposed Unit caught out in the open. This Part covers how distances are measured, how models move across the battlefield, and the rules of Coherency that bind a Unit together."
    }
  ],
  "rules": [
    {
      "id": "4-1-measuring-distances",
      "title": "4.1 Measuring Distances",
      "rows": [
        {
          "type": "text",
          "html": "All distances are measured in inches (&quot; ) using a tape measure or ruler.",
          "plain": "All distances are measured in inches (\" ) using a tape measure or ruler."
        },
        {
          "type": "text",
          "html": "Players may measure any distance at any time, including before declaring an action, during an opponent&#x27; s activation, and between Phases. There are no restrictions on pre-measuring. Players are encouraged to measure thoroughly and agree on distances before committing to an action.",
          "plain": "Players may measure any distance at any time, including before declaring an action, during an opponent' s activation, and between Phases. There are no restrictions on pre-measuring. Players are encouraged to measure thoroughly and agree on distances before committing to an action."
        },
        {
          "type": "text",
          "html": "<b>Between <span class=\"kw\">Models</span>:</b> Measure from the nearest point of one model&#x27; s base to the nearest point of the other model&#x27; s base. For <span class=\"kw\">models</span> on flight stands, the bottom of the stand is treated as the model&#x27; s base for all measurements (Part <span class=\"ref\">2. 3</span>).",
          "plain": "Between Models : Measure from the nearest point of one model' s base to the nearest point of the other model' s base. For models on flight stands, the bottom of the stand is treated as the model' s base for all measurements (Part 2. 3 )."
        },
        {
          "type": "bullet",
          "html": "<b>Ignore Overhang:</b> Weapons, wings, limbs, and scenic elements extending beyond the base rim are ignored.",
          "plain": "Ignore Overhang: Weapons, wings, limbs, and scenic elements extending beyond the base rim are ignored."
        },
        {
          "type": "bullet",
          "html": "<b>Base-to-Base Contact:</b> If two <span class=\"kw\">bases</span> are physically touching, the distance between them is <b>0\"</b>.",
          "plain": "Base-to-Base Contact: If two bases are physically touching, the distance between them is 0\" ."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Tokens</span> and <span class=\"kw\">Markers</span>:</b> Measure to the nearest physical edge.",
          "plain": "Tokens and Markers : Measure to the nearest physical edge."
        },
        {
          "type": "bullet",
          "html": "<b>Elevation:</b> When calculating distances between <span class=\"kw\">models</span> at different elevations, always measure horizontally from a top-down perspective. The vertical height difference should not be included in your measurements. This applies to Range, <b><span class=\"kw\">Engagement Range</span></b>, and the ranges of abilities. Movement distances are measured as specified by the action being performed (see Part <span class=\"ref\">8. 5. 3</span>).",
          "plain": "Elevation: When calculating distances between models at different elevations, always measure horizontally from a top-down perspective. The vertical height difference should not be included in your measurements. This applies to Range, Engagement Range , and the ranges of abilities. Movement distances are measured as specified by the action being performed (see Part 8. 5. 3 )."
        },
        {
          "type": "text",
          "html": "<b>&lt;</b>",
          "plain": "<"
        },
        {
          "type": "text",
          "html": "<b><i>In this example,</i></b><i> the</i> distance between <span class=\"kw\">models</span> is measured from the closest point of one model’s base to the closest point of the other model’s base.",
          "plain": "In this example, the distance between models is measured from the closest point of one model’s base to the closest point of the other model’s base."
        },
        {
          "type": "text",
          "html": "<b>&lt;</b>",
          "plain": "<"
        },
        {
          "type": "text",
          "html": "<b><i>In this example,</i></b><i> the</i> distance between a model and a terrain piece is measured from the closest point of the model’s base to the closest edge of the terrain piece.",
          "plain": "In this example, the distance between a model and a terrain piece is measured from the closest point of the model’s base to the closest edge of the terrain piece."
        },
        {
          "type": "text",
          "html": "<b>&lt;</b>",
          "plain": "<"
        },
        {
          "type": "text",
          "html": "<b><i>In this example,</i></b> the distance measurement from <span class=\"kw\">Marine</span> on <b>HIGH GROUND</b> to a <span class=\"kw\">Marine</span> at <b>GROUND LEVEL</b> is measured horizontally from a direct overhead view, ignoring the vertical height of the terrain.",
          "plain": "In this example, the distance measurement from Marine on HIGH GROUND to a Marine at GROUND LEVEL is measured horizontally from a direct overhead view, ignoring the vertical height of the terrain."
        }
      ],
      "children": []
    },
    {
      "id": "4-2-within-vs-wholly-within",
      "title": "4.2 Within vs. Wholly Within",
      "rows": [
        {
          "type": "microhead",
          "html": "<b><span class=\"kw\">WITHIN</span></b>",
          "plain": "WITHIN"
        },
        {
          "type": "text",
          "html": "A model is <b><span class=\"kw\">Within</span></b> a distance if any part of its base touches or crosses into that range. A Unit is <b><span class=\"kw\">Within</span></b> a distance if at least one model’s base touches or crosses into that range.",
          "plain": "A model is Within a distance if any part of its base touches or crosses into that range. A Unit is Within a distance if at least one model’s base touches or crosses into that range."
        },
        {
          "type": "microhead",
          "html": "<b><span class=\"kw\">WHOLLY WITHIN</span></b>",
          "plain": "WHOLLY WITHIN"
        },
        {
          "type": "text",
          "html": "A model is <b><span class=\"kw\">Wholly Within</span></b> a distance only if its entire base sits inside that range - no part of the base may extend beyond the edge. A Unit is <b><span class=\"kw\">Wholly Within</span></b> only if every model’s base in the Unit satisfies this condition.",
          "plain": "A model is Wholly Within a distance only if its entire base sits inside that range - no part of the base may extend beyond the edge. A Unit is Wholly Within only if every model’s base in the Unit satisfies this condition."
        },
        {
          "type": "text",
          "html": "<b>&lt;</b>",
          "plain": "<"
        },
        {
          "type": "text",
          "html": "<b><i>In this example,</i></b><i></i> a <span class=\"kw\">Marine</span> measures 3&quot; from its base. <span class=\"kw\">Zergling</span> A is <b><span class=\"kw\">Wholly Within</span></b> this 3&quot; range - its entire base sits inside it. <span class=\"kw\">Zergling</span> B is <b><span class=\"kw\">Within</span></b> 3&quot; of the <span class=\"kw\">Marine</span> - part of its base touches the range, but not all of it. <span class=\"kw\">Zergling</span> C is outside the 3&quot; range entirely. The <span class=\"kw\">Zergling</span> Unit is considered to be <b><span class=\"kw\">Within</span></b> 3&quot; of the <span class=\"kw\">Marine</span> because at least one model (<span class=\"kw\">Zergling</span> A) is in range. However, the <span class=\"kw\">Zergling</span> Unit is not <b><span class=\"kw\">Wholly Within</span></b> 3&quot; since <span class=\"kw\">models</span> B and C are not <b><span class=\"kw\">Wholly Within</span></b> this range.",
          "plain": "In this example, a Marine measures 3\" from its base. Zergling A is Wholly Within this 3\" range - its entire base sits inside it. Zergling B is Within 3\" of the Marine - part of its base touches the range, but not all of it. Zergling C is outside the 3\" range entirely. The Zergling Unit is considered to be Within 3\" of the Marine because at least one model ( Zergling A) is in range. However, the Zergling Unit is not Wholly Within 3\" since models B and C are not Wholly Within this range."
        },
        {
          "type": "text",
          "html": "Maly side EXAMPLE 2.",
          "plain": "Maly side EXAMPLE 2."
        },
        {
          "type": "text",
          "html": "<b>&lt;<a6 example=\"\" side=\"\">&gt;</a6></b>",
          "plain": "< >"
        },
        {
          "type": "text",
          "html": "<b><i>In this example,</i></b><i>a Unit of Raptors with all of its <span class=\"kw\">models</span></i><b><i><span class=\"kw\">Wholly Within</span></i></b><i> 3\" of its</i><b><i><span class=\"kw\">Leading Model</span></i></b><i> that is on</i><b><i>HIGH GROUND</i></b><i>. The distance is measured horizontally as viewed from directly above - the vertical height of the terrain is ignored.</i>",
          "plain": "In this example, a Unit of Raptors with all of its models Wholly Within 3\" of its Leading Model that is on HIGH GROUND . The distance is measured horizontally as viewed from directly above - the vertical height of the terrain is ignored."
        },
        {
          "type": "note",
          "html": "<b>Designer’s Note:</b> Some <span class=\"kw\">Units</span> have special rules that allow their <span class=\"kw\">models</span> to occupy different elevations. When this occurs, all distances between <span class=\"kw\">models</span> <span class=\"kw\">within</span> the Unit are still measured horizontally.",
          "plain": "Designer’s Note: Some Units have special rules that allow their models to occupy different elevations. When this occurs, all distances between models within the Unit are still measured horizontally."
        }
      ],
      "children": []
    },
    {
      "id": "4-3-the-leading-model",
      "title": "4.3 The Leading Model",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Leading Model</span></b> is a temporary reference point used to execute a Unit’s movement. Whenever a Unit resolves a <b><span class=\"kw\">Move</span>, <span class=\"kw\">Deploy</span>, Run, <span class=\"kw\">Charge</span>, <span class=\"kw\">Disengage</span>, or Close Ranks</b> action, or any other action or ability that instructs the Unit to nominate a <b><span class=\"kw\">Leading Model</span></b>.",
          "plain": "The Leading Model is a temporary reference point used to execute a Unit’s movement. Whenever a Unit resolves a Move , Deploy , Run, Charge , Disengage , or Close Ranks action, or any other action or ability that instructs the Unit to nominate a Leading Model ."
        },
        {
          "type": "text",
          "html": "<span class=\"kw\">Move</span> the <b><span class=\"kw\">Leading Model</span></b> first, measuring its exact path. Then set the remaining <span class=\"kw\">models</span> in valid Coherency around the <b><span class=\"kw\">Leading Model</span>'s</b> new position. The <b><span class=\"kw\">Leading Model</span></b> nomination ends once the action resolves.",
          "plain": "Move the Leading Model first, measuring its exact path. Then set the remaining models in valid Coherency around the Leading Model 's new position. The Leading Model nomination ends once the action resolves."
        }
      ],
      "children": []
    },
    {
      "id": "4-4-unit-coherency",
      "title": "4.4 Unit Coherency",
      "rows": [
        {
          "type": "text",
          "html": "<b>Coherency</b> is checked at the end of any action that repositions <span class=\"kw\">models</span>, including <b><span class=\"kw\">Move</span></b>, <b><span class=\"kw\">Deploy</span></b>, <b><span class=\"kw\">Charge</span></b>, <b><span class=\"kw\">Disengage</span></b>, <b>Close Ranks</b>, <b>Run</b>, <b><span class=\"kw\">PLACE</span></b>, and <b><span class=\"kw\">SUMMON</span></b>.",
          "plain": "Coherency is checked at the end of any action that repositions models , including Move , Deploy , Charge , Disengage , Close Ranks , Run , PLACE , and SUMMON ."
        },
        {
          "type": "text",
          "html": "At the end of such an action, all <span class=\"kw\">models</span> in the Unit must be<b> <span class=\"kw\">Wholly Within</span> 3\"</b> of the <b><span class=\"kw\">Leading Model</span></b> and able to trace a valid <b><span class=\"kw\">Coherency Link</span></b> to it. If this condition is met, the Unit is <b>In</b><b>Coherency</b>.",
          "plain": "At the end of such an action, all models in the Unit must be Wholly Within 3\" of the Leading Model and able to trace a valid Coherency Link to it. If this condition is met, the Unit is In Coherency ."
        },
        {
          "type": "text",
          "html": "The battlefield is rarely so accommodating. Terrain and crowded positions may prevent a model from reaching a legal position <b><span class=\"kw\">Wholly Within</span> 3\"</b> of the <b><span class=\"kw\">Leading Model</span></b>. When this occurs, set the affected model as close as possible to the <b><span class=\"kw\">Leading Model</span></b>. The model <b>must</b> still maintain a valid <b><span class=\"kw\">Coherency Link</span></b>. A Unit with one or more <span class=\"kw\">models</span> set beyond 3&quot; is <b><span class=\"kw\">Out of Coherency</span></b>.",
          "plain": "The battlefield is rarely so accommodating. Terrain and crowded positions may prevent a model from reaching a legal position Wholly Within 3\" of the Leading Model . When this occurs, set the affected model as close as possible to the Leading Model . The model must still maintain a valid Coherency Link . A Unit with one or more models set beyond 3\" is Out of Coherency ."
        },
        {
          "type": "text",
          "html": "If a model cannot be set in any legal position while maintaining a valid <b><span class=\"kw\">Coherency Link</span></b>, it is removed as a casualty immediately.",
          "plain": "If a model cannot be set in any legal position while maintaining a valid Coherency Link , it is removed as a casualty immediately."
        },
        {
          "type": "text",
          "html": "A Unit that is <b>In Coherency</b> remains so until its next repositioning action. Casualties from any source never trigger a <b>Coherency</b> check and never cause a Unit to become <b>Out of</b><b>Coherency</b>.",
          "plain": "A Unit that is In Coherency remains so until its next repositioning action. Casualties from any source never trigger a Coherency check and never cause a Unit to become Out of Coherency ."
        },
        {
          "type": "text",
          "html": "A Unit is<b> <span class=\"kw\">Out of Coherency</span></b> only if this condition was not met at the end of its last repositioning action.",
          "plain": "A Unit is Out of Coherency only if this condition was not met at the end of its last repositioning action."
        },
        {
          "type": "text",
          "html": "While<b> In Coherency</b>, the Unit may control and contest <b><span class=\"kw\">Mission Markers</span></b> normally (see <span class=\"ref\">8. 9. 1</span>).",
          "plain": "While In Coherency , the Unit may control and contest Mission Markers normally (see 8. 9. 1 )."
        }
      ],
      "children": [
        {
          "id": "coherency-link",
          "title": "COHERENCY LINK",
          "rows": [
            {
              "type": "text",
              "html": "When placing <span class=\"kw\">models</span> after a <span class=\"kw\">move</span>, set the <b><span class=\"kw\">Leading Model</span></b> first. Then set each remaining model one at a time, <b><span class=\"kw\">Wholly Within</span></b> 3&quot; of <span class=\"kw\">the Leading Model</span>, and able to trace a <b><span class=\"kw\">Coherency Link</span></b> to it.",
              "plain": "When placing models after a move , set the Leading Model first. Then set each remaining model one at a time, Wholly Within 3\" of the Leading Model , and able to trace a Coherency Link to it."
            },
            {
              "type": "text",
              "html": "A <b><span class=\"kw\">Coherency Link</span></b> is a chain of imaginary lines drawn model-to-model through <span class=\"kw\">models</span> of the same Unit. Links <b>cannot</b> pass through <span class=\"kw\">models</span> from other <span class=\"kw\">Units</span>, terrain, or gaps that the <b><span class=\"kw\">Leading Model</span></b> itself could not <span class=\"kw\">move</span> through. A link <b>may</b> pass through <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> that the Unit is currently <b><span class=\"kw\">Engaged</span></b> with.",
              "plain": "A Coherency Link is a chain of imaginary lines drawn model-to-model through models of the same Unit. Links cannot pass through models from other Units , terrain, or gaps that the Leading Model itself could not move through. A link may pass through Enemy models that the Unit is currently Engaged with."
            },
            {
              "type": "text",
              "html": "Any model that <b>cannot</b> find a legal position maintaining the <b><span class=\"kw\">Coherency Link</span></b> is immediately <b>removed as a casualty</b>.",
              "plain": "Any model that cannot find a legal position maintaining the Coherency Link is immediately removed as a casualty ."
            },
            {
              "type": "text",
              "html": "<b>&lt;</b>",
              "plain": "<"
            },
            {
              "type": "text",
              "html": "<b><i>In this example,</i></b><i>a Unit of Marines</i><b><i>In Coherency</i></b><i>. All of its <span class=\"kw\">models</span> are</i><b><i><span class=\"kw\">Wholly Within</span> 3”</i></b><i> of the</i><b><i><span class=\"kw\">Leading Model</span></i></b><i>(marked in blue) with</i><b><i>Coherency Links</i></b><i>(marked in red) drawn from its other <span class=\"kw\">models</span> to the</i><b><i><span class=\"kw\">Leading Model</span></i></b><i>. The <span class=\"kw\">Marine</span> model on the left links to the</i><b><i><span class=\"kw\">Leading Model</span></i></b><i> through another model from its Unit to bypass the <span class=\"kw\">blocking terrain</span>.</i>",
              "plain": "In this example, a Unit of Marines In Coherency . All of its models are Wholly Within 3” of the Leading Model (marked in blue) with Coherency Links (marked in red) drawn from its other models to the Leading Model . The Marine model on the left links to the Leading Model through another model from its Unit to bypass the blocking terrain ."
            },
            {
              "type": "text",
              "html": "<b>&lt;</b>",
              "plain": "<"
            },
            {
              "type": "text",
              "html": "<b>In this example,</b> a Unit of Marines with <b>illegal placement</b>. All <span class=\"kw\">models</span> in the Unit are <b><span class=\"kw\">Wholly Within</span> 3”</b> of its <b><span class=\"kw\">Leading Model</span></b>, but the model behind the wall (marked in red) <b>cannot draw</b> a <b><span class=\"kw\">Coherency Link</span></b> to another model from its Unit without <span class=\"kw\">passing</span> through the terrain shown. Since the model cannot draw a link through another model without <span class=\"kw\">passing</span> through restricted terrain, the player cannot set the model here.",
              "plain": "In this example, a Unit of Marines with illegal placement . All models in the Unit are Wholly Within 3” of its Leading Model , but the model behind the wall (marked in red) cannot draw a Coherency Link to another model from its Unit without passing through the terrain shown. Since the model cannot draw a link through another model without passing through restricted terrain, the player cannot set the model here."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> and <b>Coherency Links</b>:",
              "plain": "Flying Units and Coherency Links :"
            },
            {
              "type": "text",
              "html": "When drawing <b>Coherency Links</b> for a <b><span class=\"kw\">Flying</span></b> Unit, ignore terrain. Links may pass freely through terrain pieces of any Size, and may also pass through <span class=\"kw\">models</span> from other <span class=\"kw\">Units</span>.",
              "plain": "When drawing Coherency Links for a Flying Unit, ignore terrain. Links may pass freely through terrain pieces of any Size, and may also pass through models from other Units ."
            }
          ]
        },
        {
          "id": "out-of-coherency",
          "title": "OUT OF COHERENCY",
          "rows": [
            {
              "type": "text",
              "html": "If at the end of an action that repositions <span class=\"kw\">models</span>, any model is not <b><span class=\"kw\">Wholly Within</span></b> 3&quot; of the <b><span class=\"kw\">Leading Model</span></b>, the Unit is <b><span class=\"kw\">Out of Coherency</span></b>. <b><span class=\"kw\">Out of Coherency</span></b> <span class=\"kw\">Units</span><b>cannot control or contest</b><b><span class=\"kw\">Mission Markers</span></b> (Part <span class=\"ref\">8. 9. 1</span>).",
              "plain": "If at the end of an action that repositions models , any model is not Wholly Within 3\" of the Leading Model , the Unit is Out of Coherency . Out of Coherency Units cannot control or contest Mission Markers (Part 8. 9. 1 )."
            }
          ]
        }
      ]
    },
    {
      "id": "4-5-directly-towards-directly-away",
      "title": "4.5 Directly Towards & Directly Away",
      "rows": [
        {
          "type": "text",
          "html": "Some abilities force a Unit to <span class=\"kw\">move</span> directly towards or directly away from another Unit. Draw an imaginary straight line from the centre of the acting model’s base through the centre of the target model’s base. The affected model follows this line.",
          "plain": "Some abilities force a Unit to move directly towards or directly away from another Unit. Draw an imaginary straight line from the centre of the acting model’s base through the centre of the target model’s base. The affected model follows this line."
        },
        {
          "type": "text",
          "html": "If terrain or another model blocks the path, the affected model bypasses it via the <b>shortest possible route</b>, then continues in the original direction. If two routes are equally short, the <span class=\"kw\">controlling player</span> chooses.",
          "plain": "If terrain or another model blocks the path, the affected model bypasses it via the shortest possible route , then continues in the original direction. If two routes are equally short, the controlling player chooses."
        },
        {
          "type": "text",
          "html": "<b>After completing the <span class=\"kw\">move</span>:</b>",
          "plain": "After completing the move :"
        },
        {
          "type": "bullet",
          "html": "A model moving <b>directly towards</b><b>cannot</b> end further from the target than it started.",
          "plain": "A model moving directly towards cannot end further from the target than it started."
        },
        {
          "type": "bullet",
          "html": "A model moving <b>directly away</b><b>cannot</b> end closer to the target than it started.",
          "plain": "A model moving directly away cannot end closer to the target than it started."
        },
        {
          "type": "text",
          "html": "<b>Multi-model <span class=\"kw\">Units</span> moving directly towards:</b> The <b><span class=\"kw\">Leading Model</span></b><b>must</b> be the one with the shortest route to the target. <span class=\"kw\">Move</span> it first. Set the remaining <span class=\"kw\">models</span> as close to the target as possible while maintaining <b>Coherency</b>.",
          "plain": "Multi-model Units moving directly towards: The Leading Model must be the one with the shortest route to the target. Move it first. Set the remaining models as close to the target as possible while maintaining Coherency ."
        },
        {
          "type": "text",
          "html": "<b>Multi-model <span class=\"kw\">Units</span> moving directly away:</b> The <b><span class=\"kw\">Leading Model</span></b><b>must</b> be the one with the shortest route to the target. <span class=\"kw\">Move</span> it first. Set the remaining <span class=\"kw\">models</span> as far from the target as possible while maintaining <b>Coherency</b>.",
          "plain": "Multi-model Units moving directly away: The Leading Model must be the one with the shortest route to the target. Move it first. Set the remaining models as far from the target as possible while maintaining Coherency ."
        },
        {
          "type": "text",
          "html": "When multiple <span class=\"kw\">models</span> exist in the target Unit, draw an imaginary line to the model that is physically closest (when moving towards) or furthest (when moving away) from the acting model.",
          "plain": "When multiple models exist in the target Unit, draw an imaginary line to the model that is physically closest (when moving towards) or furthest (when moving away) from the acting model."
        },
        {
          "type": "text",
          "html": "If a model is forced to <span class=\"kw\">move</span> off the battlefield edge by any involuntary movement effect, it stops at the edge of the battlefield in contact with the table edge. The model cannot be moved beyond the battlefield boundary.",
          "plain": "If a model is forced to move off the battlefield edge by any involuntary movement effect, it stops at the edge of the battlefield in contact with the table edge. The model cannot be moved beyond the battlefield boundary."
        }
      ],
      "children": []
    },
    {
      "id": "4-6-gap-clearance-and-model-size",
      "title": "4.6 Gap Clearance and Model Size",
      "rows": [
        {
          "type": "text",
          "html": "Not every gap in the terrain is wide enough to squeeze through, and a Siege Tank does not thread the same needle as a <span class=\"kw\">Zergling</span>.",
          "plain": "Not every gap in the terrain is wide enough to squeeze through, and a Siege Tank does not thread the same needle as a Zergling ."
        },
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Leading Model</span></b> can pass through gaps depending on the Unit’s Size:",
          "plain": "The Leading Model can pass through gaps depending on the Unit’s Size:"
        },
        {
          "type": "bullet",
          "html": "<b>Size 2 or lower:</b> May pass through gaps at least <b>1\"</b> wide. Infantry and smaller creatures exploit narrow corridors that larger <span class=\"kw\">Units</span> cannot.",
          "plain": "Size 2 or lower: May pass through gaps at least 1\" wide. Infantry and smaller creatures exploit narrow corridors that larger Units cannot."
        },
        {
          "type": "bullet",
          "html": "<b>Size 3 or larger:</b> Requires a gap at least <b>3\"</b> wide.",
          "plain": "Size 3 or larger: Requires a gap at least 3\" wide."
        },
        {
          "type": "text",
          "html": "Regardless of clearance, a model <b>cannot</b> be set where its base doesn’t physically fit. Clearance governs movement through a space, not stopping inside one.",
          "plain": "Regardless of clearance, a model cannot be set where its base doesn’t physically fit. Clearance governs movement through a space, not stopping inside one."
        },
        {
          "type": "text",
          "html": "Openings in terrain pieces - such as archways, doorways, and breaches - are treated as gaps for the purpose of Gap Clearance, even if the surrounding terrain piece is Size 2 or larger. The gap must be wide enough for the model’s Size category. Players should agree on which terrain openings are passable during <span class=\"kw\">Battlefield Setup</span>.",
          "plain": "Openings in terrain pieces - such as archways, doorways, and breaches - are treated as gaps for the purpose of Gap Clearance, even if the surrounding terrain piece is Size 2 or larger. The gap must be wide enough for the model’s Size category. Players should agree on which terrain openings are passable during Battlefield Setup ."
        },
        {
          "type": "text",
          "html": "This applies to all movement types: <b><span class=\"kw\">Move</span></b>, <b>Run</b>, <b><span class=\"kw\">Charge</span></b>, <b><span class=\"kw\">Disengage</span></b>, and <b>Close Ranks</b>.",
          "plain": "This applies to all movement types: Move , Run , Charge , Disengage , and Close Ranks ."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> ignore Gap Clearance during movement. Their <b><span class=\"kw\">Leading Model</span></b> moves point-to-point, bypassing all terrain in transit. However, the <b><span class=\"kw\">Leading Model</span></b> must still end in a legal position where its base or stand physically fits without overlapping another model’s base or stand, or terrain.",
          "plain": "Flying Units ignore Gap Clearance during movement. Their Leading Model moves point-to-point, bypassing all terrain in transit. However, the Leading Model must still end in a legal position where its base or stand physically fits without overlapping another model’s base or stand, or terrain."
        }
      ],
      "children": []
    }
  ]
};
window.__companionRuleParts['part-5'] = {
  "num": "5",
  "kicker": "Part V",
  "title": "Cards and Characteristics",
  "id": "part-5",
  "color": "#9ca7b1",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "Each Unit, weapon, and ability in the game has a set of characteristics represented on cards. This Part explains the anatomy of <b><span class=\"kw\">Unit Cards</span></b> and <b>Weapon Profiles</b>, what each statistic means, and how to read the data that drives every action on the battlefield.",
      "plain": "Each Unit, weapon, and ability in the game has a set of characteristics represented on cards. This Part explains the anatomy of Unit Cards and Weapon Profiles , what each statistic means, and how to read the data that drives every action on the battlefield."
    }
  ],
  "rules": [
    {
      "id": "5-1-unit-cards",
      "title": "5.1 Unit Cards",
      "rows": [
        {
          "type": "text",
          "html": "Every Unit has a <b>Unit Card</b> that provides all the information needed to use it in a game.",
          "plain": "Every Unit has a Unit Card that provides all the information needed to use it in a game."
        },
        {
          "type": "text",
          "html": "<b>1. Unit Name</b>",
          "plain": "1. Unit Name"
        },
        {
          "type": "block",
          "html": "<div><b><br/>2. Speed:</b> The maximum distance in inches the <b><span class=\"kw\">Leading Model</span></b> may traverse in a standard <b><span class=\"kw\">Move</span></b>.</div>",
          "plain": "2. Speed: The maximum distance in inches the Leading Model may traverse in a standard Move ."
        },
        {
          "type": "block",
          "html": "<div><div><i>Split Values</i> (e. g. <b>4\"/7\"</b>): Use the second value only when the Unit is reduced to a single remaining model, or when the Unit started with a single model.</div><div><i>Null Value (-)</i>: The Unit <b>cannot</b> <span class=\"kw\">move</span> or be repositioned by any means, including <b><span class=\"kw\">PLACE</span></b> and involuntary movement effects.<br/><b><br/></b></div><div><b>3. Evade:</b> A secondary defensive characteristic representing agility. Used only when a rule or condition specifically grants an <b>Evade Roll</b>.</div><div><i>A Null Value (-</i>): The Unit cannot make <b>Evade Rolls</b>. An ability that explicitly grants an <b>Evade Roll</b> does not override this.</div><div><b><br/></b></div><div><b>4. Armour:</b> The Target Number the defender <b>must</b> meet or exceed on a D6 to cancel a hit.<br/><b><br/></b></div><div><b>5. Hit Points (HP):</b> <b>Damage</b> a single model must sustain before it is removed.<br/><b><br/></b></div><div><b>5A. Shields (Optional):</b> If this value is present on a <b>Unit Card</b>, add it to the<b> Hit Points (HP)</b> of the first model. The Unit is <b><span class=\"kw\">Shielded</span></b>. The Unit loses its <b><span class=\"kw\">Shielded</span> <span class=\"kw\">Status</span></b> when the Total <b>Damage</b> assigned to it exceeds its <b>Shield</b> value or when the first model in the Unit is removed. The <b><span class=\"kw\">Shielded</span> <span class=\"kw\">Status</span></b> is referenced by other abilities. Losing <b><span class=\"kw\">Shielded</span> <span class=\"kw\">Status</span></b> does not remove any remaining <b>Hit Points,</b> it only ends effects that require the Unit to be <b><span class=\"kw\">Shielded</span></b>.<br/><b><br/></b></div><div><b>6. Size:</b> The model’s vertical height category, used for <b><span class=\"kw\">Line of Sight</span></b> and terrain interaction.<br/><b><br/></b></div><div><b>7. Supply Profile:</b> Links the number of remaining <span class=\"kw\">models</span> in the Unit to its <b><span class=\"kw\">Current Supply Value</span></b>. Update immediately when casualties reduce the model count to a lower bracket. Supply is used for <span class=\"kw\">Deployment</span>, <b>Mission Marker</b> Control, and <b><span class=\"kw\">Disengage</span></b> checks.<br/><b><br/></b></div><div><b>8. Phase Boxes:</b> <b><span class=\"kw\">Special Abilities</span></b> available during specific Phases.<br/><b><br/></b></div><div><b>9. Weapon Profiles:</b> Each weapon is assigned to either the Assault Phase or the Combat Phase and may be used only during that phase. Each weapon profile lists:<div><b>Phase:</b> The phase in which this weapon may be used - Assault Phase (ranged weapons) or Combat Phase (melee weapons).</div><div><b>[RNG] Range:</b> Maximum effective distance. Melee weapons list <b>E</b> (<b><span class=\"kw\">Engagement Range</span></b>). <span class=\"kw\">Template weapons</span> list <b>FT</b> or <b>BT</b>.</div><div><b>Target:</b> What the weapon can hit. <b>Ground</b> (Ground <span class=\"kw\">Units</span> only), <b><span class=\"kw\">Flying</span></b> (<span class=\"kw\">Flying</span> <span class=\"kw\">Units</span> only), or <b>All</b> (both Ground and <span class=\"kw\">Flying</span> <span class=\"kw\">Units</span>).</div><div><b>[RoA] Rate of Attack:</b> <span class=\"kw\">Dice</span> rolled per firing model.</div><div><b>Hit:</b> Target Number required on a D6 to score a hit.</div><div><b>Surge Type:</b> The <b>Combat Tag</b> that triggers the weapon’s Surge efficiency.</div><div><b>S <span class=\"kw\">Dice</span>:</b> Die type rolled to determine Surge results (D3 or D6).</div><div><b>[DMG] Damage:</b> <b>Damage</b> inflicted per die in the <b>Damage Pool</b>.</div><div><b><span class=\"kw\">Keywords</span>:</b> Special rules on the weapon (e. g. , <b><span class=\"kw\">PIERCE</span></b>, <b><span class=\"kw\">SIDEARM</span></b>).<br/><b><br/></b></div><div><b>10. <span class=\"kw\">Combat Tags</span>:</b> The Unit’s <b>Combat Tag</b> s.<br/><b><br/></b></div><div><b>11. Faction Tag:</b> The Faction the Unit belongs to.<br/></div></div></div>",
          "plain": "Split Values (e. g. 4\"/7\" ): Use the second value only when the Unit is reduced to a single remaining model, or when the Unit started with a single model. Null Value (-) : The Unit cannot move or be repositioned by any means, including PLACE and involuntary movement effects. 3. Evade: A secondary defensive characteristic representing agility. Used only when a rule or condition specifically grants an Evade Roll . A Null Value (- ): The Unit cannot make Evade Rolls . An ability that explicitly grants an Evade Roll does not override this. 4. Armour: The Target Number the defender must meet or exceed on a D6 to cancel a hit. 5. Hit Points (HP): Damage a single model must sustain before it is removed. 5A. Shields (Optional): If this value is present on a Unit Card , add it to the Hit Points (HP) of the first model. The Unit is Shielded . The Unit loses its Shielded Status when the Total Damage assigned to it exceeds its Shield value or when the first model in the Unit is removed. The Shielded Status is referenced by other abilities. Losing Shielded Status does not remove any remaining Hit Points, it only ends effects that require the Unit to be Shielded . 6. Size: The model’s vertical height category, used for Line of Sight and terrain interaction. 7. Supply Profile: Links the number of remaining models in the Unit to its Current Supply Value . Update immediately when casualties reduce the model count to a lower bracket. Supply is used for Deployment , Mission Marker Control, and Disengage checks. 8. Phase Boxes: Special Abilities available during specific Phases. 9. Weapon Profiles: Each weapon is assigned to either the Assault Phase or the Combat Phase and may be used only during that phase. Each weapon profile lists: Phase: The phase in which this weapon may be used - Assault Phase (ranged weapons) or Combat Phase (melee weapons). [RNG] Range: Maximum effective distance. Melee weapons list E ( Engagement Range ). Template weapons list FT or BT . Target: What the weapon can hit. Ground (Ground Units only), Flying ( Flying Units only), or All (both Ground and Flying Units ). [RoA] Rate of Attack: Dice rolled per firing model. Hit: Target Number required on a D6 to score a hit. Surge Type: The Combat Tag that triggers the weapon’s Surge efficiency. S Dice : Die type rolled to determine Surge results (D3 or D6). [DMG] Damage: Damage inflicted per die in the Damage Pool . Keywords : Special rules on the weapon (e. g. , PIERCE , SIDEARM ). 10. Combat Tags : The Unit’s Combat Tag s. 11. Faction Tag: The Faction the Unit belongs to."
        }
      ],
      "children": []
    },
    {
      "id": "5-2-special-rules-and-upgrades",
      "title": "5.2 Special Rules and Upgrades",
      "rows": [
        {
          "type": "text",
          "html": "The reverse of each <b>Unit Card</b> lists optional Upgrades available during <span class=\"kw\">Army Building</span>.",
          "plain": "The reverse of each Unit Card lists optional Upgrades available during Army Building ."
        },
        {
          "type": "bullet",
          "html": "<b>Upgrades:</b> New abilities or weapons added to the profile.",
          "plain": "Upgrades: New abilities or weapons added to the profile."
        },
        {
          "type": "bullet",
          "html": "<b>Replacements (↑ FOR):</b> An entry showing &quot;<b>↑ FOR [Weapon Name]</b>&quot; means the new weapon replaces the original entirely.",
          "plain": "Replacements (↑ FOR): An entry showing \" ↑ FOR [Weapon Name] \" means the new weapon replaces the original entirely."
        },
        {
          "type": "bullet",
          "html": "<b>Null Value (-):</b> The Unit lacks this capability. No roll is possible.",
          "plain": "Null Value (-): The Unit lacks this capability. No roll is possible."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Army Slot</span>:</b> The slot type (Core, Elite, Support, Air, or Hero) required to field this Unit. Each Unit occupies a number of slots of this type equal to its starting <b><span class=\"kw\">Supply Value</span></b> (Part <span class=\"ref\">9. 1. 6</span>).",
          "plain": "Army Slot : The slot type (Core, Elite, Support, Air, or Hero) required to field this Unit. Each Unit occupies a number of slots of this type equal to its starting Supply Value (Part 9. 1. 6 )."
        },
        {
          "type": "bullet",
          "html": "Flavour text describing the Unit’s role.<br/>• <b style=\"--tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0. 5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; \"><span class=\"kw\">Army Slot</span>:</b> The slot type (Core, Elite, Support, Air, or Hero) the Unit occupies. The number of occupied slots equals the unit&#x27; s starting <b style=\"--tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0. 5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; \"><span class=\"kw\">Supply Value</span></b>.<br/>• Base diameter on which the model <b>must</b> be mounted on.",
          "plain": "Flavour text describing the Unit’s role. • Army Slot : The slot type (Core, Elite, Support, Air, or Hero) the Unit occupies. The number of occupied slots equals the unit' s starting Supply Value . • Base diameter on which the model must be mounted on."
        }
      ],
      "children": []
    },
    {
      "id": "5-3-tactical-cards",
      "title": "5.3 Tactical Cards",
      "rows": [
        {
          "type": "text",
          "html": "No commander goes into combat alone with guns. A creep tumor in a good position, a sensor sweep in reserve, or a psionic storm held back can change a lost battle into a rout. The <b>Tactics Cards</b> are the strategic resources, orders, and doctrines a military leader has available to him, bought before the battle and deployed when they are most needed.",
          "plain": "No commander goes into combat alone with guns. A creep tumor in a good position, a sensor sweep in reserve, or a psionic storm held back can change a lost battle into a rout. The Tactics Cards are the strategic resources, orders, and doctrines a military leader has available to him, bought before the battle and deployed when they are most needed."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Tactical Cards</span></b> are purchased with <b><span class=\"kw\">Vespene Gas</span></b> during <b><span class=\"kw\">Army Building</span></b> (Part <span class=\"ref\">9. 1. 4</span>).",
          "plain": "Tactical Cards are purchased with Vespene Gas during Army Building (Part 9. 1. 4 )."
        },
        {
          "type": "bullet",
          "html": "<b>Name:</b> The name of the <b>Tactical Card</b>.",
          "plain": "Name: The name of the Tactical Card ."
        },
        {
          "type": "bullet",
          "html": "<b>Unique Marking:</b> If present, only one copy of this card may be included in an army.",
          "plain": "Unique Marking: If present, only one copy of this card may be included in an army."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Faction Tags</span>:</b> The <b>Race Tag</b> and any <b>Sub-<span class=\"kw\">Faction Tags</span></b> that determine which armies may include this card (Part <span class=\"ref\">9. 1. 2</span>).",
          "plain": "Faction Tags : The Race Tag and any Sub- Faction Tags that determine which armies may include this card (Part 9. 1. 2 )."
        },
        {
          "type": "bullet",
          "html": "<b>Resource Type and Value:</b> The faction’s resource (<b>CP</b> for <b><span class=\"kw\">Terran</span></b>, <b>BM</b> for <b><span class=\"kw\">Zerg</span></b>, <b>PE</b> for <b><span class=\"kw\">Protoss</span></b>) and the amount generated when this card is <b>Exhausted</b> instead of using its <b><span class=\"kw\">Special Ability</span></b>.",
          "plain": "Resource Type and Value: The faction’s resource ( CP for Terran , BM for Zerg , PE for Protoss ) and the amount generated when this card is Exhausted instead of using its Special Ability ."
        },
        {
          "type": "bullet",
          "html": "<b>Army Slots:</b> The organisation slots unlocked when this card is included in the army (e. g. , 2× Core, 1× Support). These slots are in addition to those provided by the <b>Faction Card</b>.",
          "plain": "Army Slots: The organisation slots unlocked when this card is included in the army (e. g. , 2× Core, 1× Support). These slots are in addition to those provided by the Faction Card ."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Special Abilities</span>:</b> One or more <b>Active</b>, <b>Passive</b>, or <b><span class=\"kw\">Reaction Abilities</span></b> resolved using the standard rules (Parts <span class=\"ref\">10. 1</span>–<span class=\"ref\">10. 4</span>).",
          "plain": "Special Abilities : One or more Active , Passive , or Reaction Abilities resolved using the standard rules (Parts 10. 1 – 10. 4 )."
        }
      ],
      "children": []
    },
    {
      "id": "5-4-faction-cards",
      "title": "5.4 Faction Cards",
      "rows": [
        {
          "type": "text",
          "html": "The <b>Faction Card</b> is the foundation of every army. It defines who you are, what doctrine you follow, and what forces you are permitted to bring to the battlefield.",
          "plain": "The Faction Card is the foundation of every army. It defines who you are, what doctrine you follow, and what forces you are permitted to bring to the battlefield."
        },
        {
          "type": "text",
          "html": "Every army must include exactly <b>one Faction Card</b>, selected during <span class=\"kw\">Army Building</span>.",
          "plain": "Every army must include exactly one Faction Card , selected during Army Building ."
        },
        {
          "type": "bullet",
          "html": "<b>Faction Name:</b> The name of the Faction. This may also function as a <b>Keyword</b> referenced by other rules and abilities.<b></b>",
          "plain": "Faction Name: The name of the Faction. This may also function as a Keyword referenced by other rules and abilities."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Faction Tags</span>:</b> The <b>Race Tag</b> and any <b>Sub-<span class=\"kw\">Faction Tags</span></b> that specify which <span class=\"kw\">Units</span> and <b><span class=\"kw\">Tactical Cards</span></b> can be included in the army (Part <span class=\"ref\">9. 1. 2</span>).",
          "plain": "Faction Tags : The Race Tag and any Sub- Faction Tags that specify which Units and Tactical Cards can be included in the army (Part 9. 1. 2 )."
        },
        {
          "type": "bullet",
          "html": "<b>Starting Army Slots:</b> The organisation slots provided by the <b>Faction Card</b> itself (e. g. 3× Core, 1× Hero, 2× Support). Additional slots are unlocked by purchasing <b><span class=\"kw\">Tactical Cards</span></b>.",
          "plain": "Starting Army Slots: The organisation slots provided by the Faction Card itself (e. g. 3× Core, 1× Hero, 2× Support). Additional slots are unlocked by purchasing Tactical Cards ."
        },
        {
          "type": "bullet",
          "html": "<b>Resource Type and Value:</b> The faction’s resource (<b>CP</b> for <b><span class=\"kw\">Terran</span></b>, <b>BM</b> for <b><span class=\"kw\">Zerg</span></b>, <b>PE</b> for <b><span class=\"kw\">Protoss</span></b>) and the amount generated when this card is <b>Exhausted</b>.",
          "plain": "Resource Type and Value: The faction’s resource ( CP for Terran , BM for Zerg , PE for Protoss ) and the amount generated when this card is Exhausted ."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Special Abilities</span>:</b> One or more <b>Active</b>, <b>Passive</b>, or <b><span class=\"kw\">Reaction Abilities</span></b> resolved using the standard rules (Parts <span class=\"ref\">10. 1</span>–<span class=\"ref\">10. 4</span>).",
          "plain": "Special Abilities : One or more Active , Passive , or Reaction Abilities resolved using the standard rules (Parts 10. 1 – 10. 4 )."
        }
      ],
      "children": []
    },
    {
      "id": "5-5-mission-cards",
      "title": "5.5 Mission Cards",
      "rows": [
        {
          "type": "text",
          "html": "Every conflict has a purpose. A contested line of <span class=\"kw\">minerals</span>, a crashed shuttle with vital information, or a Xel’Naga relic glowing with power buried deep beneath the surface. <b><span class=\"kw\">Mission Cards</span></b> decide what the conflict is about, how long the battle will last, and what must be achieved to win. The mission determines the fight, not the other way round.",
          "plain": "Every conflict has a purpose. A contested line of minerals , a crashed shuttle with vital information, or a Xel’Naga relic glowing with power buried deep beneath the surface. Mission Cards decide what the conflict is about, how long the battle will last, and what must be achieved to win. The mission determines the fight, not the other way round."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Mission Cards</span></b> are chosen during the Draft (Part <span class=\"ref\">9. 2</span>).",
          "plain": "Mission Cards are chosen during the Draft (Part 9. 2 )."
        },
        {
          "type": "bullet",
          "html": "<b>Name:</b> The name of the Mission.",
          "plain": "Name: The name of the Mission."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Engagement Scale</span>:</b> The game scale this mission is designed for (Skirmish, Standard, or Grand Offensive).",
          "plain": "Engagement Scale : The game scale this mission is designed for (Skirmish, Standard, or Grand Offensive)."
        },
        {
          "type": "bullet",
          "html": "<b>Starting Supply:</b> The <b>Supply Pool</b> available to each player in Round 1.",
          "plain": "Starting Supply: The Supply Pool available to each player in Round 1."
        },
        {
          "type": "bullet",
          "html": "<b>Supply Escalation:</b> The amount by which the <b>Supply Pool</b> increases at the start of each subsequent Round.",
          "plain": "Supply Escalation: The amount by which the Supply Pool increases at the start of each subsequent Round."
        },
        {
          "type": "bullet",
          "html": "<b>Game Length:</b> The number of Rounds played before the game ends (usually 5).",
          "plain": "Game Length: The number of Rounds played before the game ends (usually 5)."
        },
        {
          "type": "bullet",
          "html": "<b>Mission Parameters:</b> Setup instructions, <b>Mission Marker</b> states, and any special conditions that apply from the start of the game.",
          "plain": "Mission Parameters: Setup instructions, Mission Marker states, and any special conditions that apply from the start of the game."
        },
        {
          "type": "bullet",
          "html": "<b>Scoring Conditions:</b> How players earn <b>Victory Points</b> at the end of each Round.",
          "plain": "Scoring Conditions: How players earn Victory Points at the end of each Round."
        },
        {
          "type": "bullet",
          "html": "<b>Additional Conditions:</b> Special rules or winning conditions unique to this mission, including any <span class=\"kw\">instant</span> victory triggers.",
          "plain": "Additional Conditions: Special rules or winning conditions unique to this mission, including any instant victory triggers."
        }
      ],
      "children": []
    },
    {
      "id": "5-6-deployment-cards",
      "title": "5.6 Deployment Cards",
      "rows": [
        {
          "type": "text",
          "html": "The location from which you engage in the battle is as important as what you bring into it. A narrow canyon channels the entire attack into a kill zone. Parallel zones of <span class=\"kw\">deployment</span> across open ground give the victory to whoever shoots first. The <b><span class=\"kw\">Deployment Cards</span></b> determine the war’s geometry, entry points, restricted zones, and the ground that must be taken.",
          "plain": "The location from which you engage in the battle is as important as what you bring into it. A narrow canyon channels the entire attack into a kill zone. Parallel zones of deployment across open ground give the victory to whoever shoots first. The Deployment Cards determine the war’s geometry, entry points, restricted zones, and the ground that must be taken."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Deployment Cards</span></b> are selected during the Draft",
          "plain": "Deployment Cards are selected during the Draft"
        },
        {
          "type": "bullet",
          "html": "<b>Name:</b> The name of the <span class=\"kw\">Deployment</span> layout.",
          "plain": "Name: The name of the Deployment layout."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Engagement Scale</span>:</b> The game scale this <span class=\"kw\">deployment</span> is designed for (Skirmish, Standard, or Grand Offensive).",
          "plain": "Engagement Scale : The game scale this deployment is designed for (Skirmish, Standard, or Grand Offensive)."
        },
        {
          "type": "bullet",
          "html": "<b>Battlefield Dimensions:</b> The required table size for this <span class=\"kw\">deployment</span>.",
          "plain": "Battlefield Dimensions: The required table size for this deployment ."
        },
        {
          "type": "bullet",
          "html": "<b>Entry Edges:</b> The table edges assigned to each player. <span class=\"kw\">Units</span> enter the battlefield from their assigned <b><span class=\"kw\">Entry Edge</span></b> when deploying from <b><span class=\"kw\">Reserves</span></b>.",
          "plain": "Entry Edges: The table edges assigned to each player. Units enter the battlefield from their assigned Entry Edge when deploying from Reserves ."
        },
        {
          "type": "bullet",
          "html": "<b><span class=\"kw\">Zone of Influence</span>:</b> A restricted area extending <b>6\"</b> inward from each player’s <b><span class=\"kw\">Entry Edge</span></b>. <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> arriving from <b><span class=\"kw\">Reserves</span></b> cannot end their <span class=\"kw\">deployment</span> <span class=\"kw\">within</span> this area. The <b><span class=\"kw\">Zone of Influence</span></b> does not affect <span class=\"kw\">Units</span> already on the battlefield.",
          "plain": "Zone of Influence : A restricted area extending 6\" inward from each player’s Entry Edge . Enemy Units arriving from Reserves cannot end their deployment within this area. The Zone of Influence does not affect Units already on the battlefield."
        },
        {
          "type": "bullet",
          "html": "<b>Marker Coordinates:</b> The precise measurements for positioning each numbered <b>Mission Marker</b> on the battlefield.",
          "plain": "Marker Coordinates: The precise measurements for positioning each numbered Mission Marker on the battlefield."
        },
        {
          "type": "text",
          "html": "<b>Using the <span class=\"kw\">Deployment</span> Card during Setup:</b> Once the <b><span class=\"kw\">Deployment</span> Card</b> is selected, follow its instructions in this order: confirm the table dimensions, assign <b>Entry Edges</b> to each player, set <b><span class=\"kw\">Zone of Influence</span> <span class=\"kw\">Markers</span></b> at the corners of each player’s <b><span class=\"kw\">Entry Edge</span></b>, where applicable, then set <b><span class=\"kw\">Mission Markers</span></b> at the listed coordinates. See Part <span class=\"ref\">9. 3</span> for the full setup sequence.",
          "plain": "Using the Deployment Card during Setup: Once the Deployment Card is selected, follow its instructions in this order: confirm the table dimensions, assign Entry Edges to each player, set Zone of Influence Markers at the corners of each player’s Entry Edge , where applicable, then set Mission Markers at the listed coordinates. See Part 9. 3 for the full setup sequence."
        }
      ],
      "children": []
    }
  ]
};
window.__companionRuleParts['part-6'] = {
  "num": "6",
  "kicker": "Part VI",
  "title": "The Supply System",
  "id": "part-6",
  "color": "#99b19c",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "The armies in StarCraft: The Miniatures Game do not <span class=\"kw\">deploy</span> at full strength. Reinforcements arrive in waves, and as <span class=\"kw\">Units</span> take casualties, their ability to <span class=\"kw\">deploy</span> effectively shrinks. The Supply system governs when and how many <span class=\"kw\">Units</span> a player can field, creating a constant tension between committing forces now and holding them in reserve.",
      "plain": "The armies in StarCraft: The Miniatures Game do not deploy at full strength. Reinforcements arrive in waves, and as Units take casualties, their ability to deploy effectively shrinks. The Supply system governs when and how many Units a player can field, creating a constant tension between committing forces now and holding them in reserve."
    },
    {
      "type": "text",
      "html": "Supply represents a Unit&#x27; s battlefield presence, its manpower, momentum, and command resources necessary to keep it fighting. Unlike fixed characteristics, Supply is dynamic: as a Unit takes casualties, its Supply declines.",
      "plain": "Supply represents a Unit' s battlefield presence, its manpower, momentum, and command resources necessary to keep it fighting. Unlike fixed characteristics, Supply is dynamic: as a Unit takes casualties, its Supply declines."
    }
  ],
  "rules": [
    {
      "id": "6-1-the-supply-profile",
      "title": "6.1 The Supply Profile",
      "rows": [
        {
          "type": "text",
          "html": "Every <b>Unit Card</b> includes a Supply Profile in the top-right corner, linking the number of remaining <span class=\"kw\">models</span> to a <b><span class=\"kw\">Current Supply Value</span></b>. As casualties reduce the model count into a lower bracket, update the <b>Current Supply</b><b>Value</b> immediately.<b></b>",
          "plain": "Every Unit Card includes a Supply Profile in the top-right corner, linking the number of remaining models to a Current Supply Value . As casualties reduce the model count into a lower bracket, update the Current Supply Value immediately."
        },
        {
          "type": "example",
          "html": "<b>EXAMPLE:</b> A squad of 9 Marines has a Supply of 2. A squad of 6 Marines has a Supply of 1. When reduced to 3 <span class=\"kw\">models</span>, their Supply drops to 0.",
          "plain": "EXAMPLE: A squad of 9 Marines has a Supply of 2. A squad of 6 Marines has a Supply of 1. When reduced to 3 models , their Supply drops to 0."
        },
        {
          "type": "note",
          "html": "<b>DESIGNER’S NOTE:</b> Supply is the heart of the game’s Strategic layer. The direct link between a Unit’s combat presence and the number of <span class=\"kw\">models</span> it has left means every model lost carries a consequence beyond mere <b>Damage</b>. A Unit with fewer <span class=\"kw\">models</span> consumes less Supply (enabling the <span class=\"kw\">deployment</span> of a new Unit from <b><span class=\"kw\">Reserves</span></b>), contests objectives less effectively, and possesses less <span class=\"kw\">Tactical Mass</span> to safely <b><span class=\"kw\">Disengage</span></b>. This is a tactical decision: do you keep a Unit for its firepower, or sacrifice it to free Supply for a new Unit from <b><span class=\"kw\">Reserves</span></b>?",
          "plain": "DESIGNER’S NOTE: Supply is the heart of the game’s Strategic layer. The direct link between a Unit’s combat presence and the number of models it has left means every model lost carries a consequence beyond mere Damage . A Unit with fewer models consumes less Supply (enabling the deployment of a new Unit from Reserves ), contests objectives less effectively, and possesses less Tactical Mass to safely Disengage . This is a tactical decision: do you keep a Unit for its firepower, or sacrifice it to free Supply for a new Unit from Reserves ?"
        }
      ],
      "children": []
    },
    {
      "id": "6-2-how-supply-is-used",
      "title": "6.2 How Supply Is Used",
      "rows": [],
      "children": [
        {
          "id": "deployment",
          "title": "DEPLOYMENT",
          "rows": [
            {
              "type": "text",
              "html": "Each mission establishes a <b>Supply Pool</b>, which is the maximum amount of Supply that can be on the battlefield at any one time. <span class=\"kw\">The Supply Pool</span> starts at the value listed on the <b>Mission Card</b> and increases by the <b>Supply Escalation</b> value each <b>Round</b>.",
              "plain": "Each mission establishes a Supply Pool , which is the maximum amount of Supply that can be on the battlefield at any one time. The Supply Pool starts at the value listed on the Mission Card and increases by the Supply Escalation value each Round ."
            },
            {
              "type": "text",
              "html": "A player can only set a Unit in play from <b><span class=\"kw\">Reserves</span></b> if the Unit&#x27; s <b><span class=\"kw\">Current Supply Value</span></b> is less than or equal to the <b><span class=\"kw\">Available Supply</span></b>, which is the current <b>Supply Pool</b> value minus the total Supply of all <b><span class=\"kw\">Friendly</span></b> <span class=\"kw\">Units</span> already in play on the battlefield.",
              "plain": "A player can only set a Unit in play from Reserves if the Unit' s Current Supply Value is less than or equal to the Available Supply , which is the current Supply Pool value minus the total Supply of all Friendly Units already in play on the battlefield."
            },
            {
              "type": "text",
              "html": "At no point can the <b>Total Current Supply</b> of a player’s <span class=\"kw\">Units</span> on the battlefield exceed the <b>Supply Pool</b>.",
              "plain": "At no point can the Total Current Supply of a player’s Units on the battlefield exceed the Supply Pool ."
            },
            {
              "type": "text",
              "html": "In the final Round of play (as determined by the <b>Mission Card</b>), the <b>Supply Pool</b> is unlimited. All <span class=\"kw\">Units</span> remaining in <b><span class=\"kw\">Reserves</span></b> may be set into play without Supply restrictions, following the normal alternating activation sequence.",
              "plain": "In the final Round of play (as determined by the Mission Card ), the Supply Pool is unlimited. All Units remaining in Reserves may be set into play without Supply restrictions, following the normal alternating activation sequence."
            },
            {
              "type": "microhead",
              "html": "<b>MISSION MARKER CONTROL</b>",
              "plain": "MISSION MARKER CONTROL"
            },
            {
              "type": "text",
              "html": "<b>Supply</b> determines who controls the ground. To determine control of a <b>Mission Marker</b>, each player calculates the <b><span class=\"kw\">Current Supply Value</span></b> of all their eligible <span class=\"kw\">Units</span> contesting that Marker (see Part <span class=\"ref\">8. 9. 1</span> for full eligibility requirements), not the number of <span class=\"kw\">models</span>, but their total <b>Supply</b>. The player with the highest total controls the Marker.",
              "plain": "Supply determines who controls the ground. To determine control of a Mission Marker , each player calculates the Current Supply Value of all their eligible Units contesting that Marker (see Part 8. 9. 1 for full eligibility requirements), not the number of models , but their total Supply . The player with the highest total controls the Marker."
            },
            {
              "type": "text",
              "html": "A Unit with Supply 0 can control a Marker if no <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> are contesting it. However, a Unit that is <b><span class=\"kw\">Out of Coherency</span></b> can never control or contest a <b>Mission Marker</b>.",
              "plain": "A Unit with Supply 0 can control a Marker if no Enemy Units are contesting it. However, a Unit that is Out of Coherency can never control or contest a Mission Marker ."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> cannot Contest or Control <b><span class=\"kw\">Mission Markers</span></b>, as they are airborne and do not <span class=\"kw\">hold</span> ground.",
              "plain": "Flying Units cannot Contest or Control Mission Markers , as they are airborne and do not hold ground."
            }
          ]
        },
        {
          "id": "tactical-mass",
          "title": "TACTICAL MASS",
          "rows": [
            {
              "type": "text",
              "html": "Breaking away from a melee is a desperate act. A Unit that <b>Disengages</b> suffers a severe penalty: it cannot perform <b><span class=\"kw\">Ranged Attack</span></b> or <b><span class=\"kw\">Charge</span></b> actions in the following Assault Phase. The squad is too busy pulling back to mount an effective attack.",
              "plain": "Breaking away from a melee is a desperate act. A Unit that Disengages suffers a severe penalty: it cannot perform Ranged Attack or Charge actions in the following Assault Phase. The squad is too busy pulling back to mount an effective attack."
            },
            {
              "type": "text",
              "html": "However, if at the moment the <b><span class=\"kw\">Disengage</span></b> is declared, the Disengaging Unit&#x27; s <b><span class=\"kw\">Current Supply Value</span></b> exceeds the Combined Supply of all <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> it is <b><span class=\"kw\">Engaged</span></b> with, this penalty is <b>ignored.</b>",
              "plain": "However, if at the moment the Disengage is declared, the Disengaging Unit' s Current Supply Value exceeds the Combined Supply of all Enemy Units it is Engaged with, this penalty is ignored."
            },
            {
              "type": "text",
              "html": "A superior force has the mass to pull away cleanly. A lone screening squad should slow the <span class=\"kw\">enemy</span>, not shut them down entirely.",
              "plain": "A superior force has the mass to pull away cleanly. A lone screening squad should slow the enemy , not shut them down entirely."
            }
          ]
        },
        {
          "id": "unit-starting-supply",
          "title": "UNIT STARTING SUPPLY",
          "rows": [
            {
              "type": "text",
              "html": "Some<b> <span class=\"kw\">Mission Cards</span></b> award <b>Victory Points</b> equal to the <b><span class=\"kw\">Enemy</span></b> Supply destroyed in a Round. In such cases, the <span class=\"kw\">Supply Value</span> destroyed in that Round is added to the score during the Scoring Phase.",
              "plain": "Some Mission Cards award Victory Points equal to the Enemy Supply destroyed in a Round. In such cases, the Supply Value destroyed in that Round is added to the score during the Scoring Phase."
            }
          ]
        }
      ]
    }
  ]
};
window.__companionRuleParts['part-7'] = {
  "num": "7",
  "kicker": "Part VII",
  "title": "The Battlefield",
  "id": "part-7",
  "color": "#b59b90",
  "group": "systems",
  "introRows": [
    {
      "type": "text",
      "html": "The terrain where a battle takes action is as crucial as the armies involved. Walls block <b><span class=\"kw\">Line of Sight</span></b>, height offers a commanding fire position, and narrow passages can funnel an entire assault into a killing zone. This part explains how <b><span class=\"kw\">Line of Sight</span></b> functions, how terrain impacts <span class=\"kw\">models</span> of various sizes, and how <span class=\"kw\">cover</span> and elevation influence the flow of combat.",
      "plain": "The terrain where a battle takes action is as crucial as the armies involved. Walls block Line of Sight , height offers a commanding fire position, and narrow passages can funnel an entire assault into a killing zone. This part explains how Line of Sight functions, how terrain impacts models of various sizes, and how cover and elevation influence the flow of combat."
    }
  ],
  "rules": [
    {
      "id": "7-1-line-of-sight",
      "title": "7.1 Line of Sight",
      "rows": [
        {
          "type": "text",
          "html": "Every shot, every ability, and every order that requires a clear view of the target follows the same process. <b><span class=\"kw\">Line of Sight</span></b> determines what a model can see and, by extension, what it can shoot at.",
          "plain": "Every shot, every ability, and every order that requires a clear view of the target follows the same process. Line of Sight determines what a model can see and, by extension, what it can shoot at."
        },
        {
          "type": "text",
          "html": "<i>StarCraft: The Miniatures Game</i> uses a <b>2D <span class=\"kw\">Line of Sight</span> (LoS)</b> system. All <b><span class=\"kw\">Line of Sight</span></b> checks are resolved from a top-down perspective, looking directly down at the battlefield from above.",
          "plain": "StarCraft: The Miniatures Game uses a 2D Line of Sight (LoS) system. All Line of Sight checks are resolved from a top-down perspective, looking directly down at the battlefield from above."
        },
        {
          "type": "text",
          "html": "To determine whether an acting model can see a target, trace an imaginary straight line from <b>any part</b> of the acting model’s base to <b>any part</b> of the target model’s base.",
          "plain": "To determine whether an acting model can see a target, trace an imaginary straight line from any part of the acting model’s base to any part of the target model’s base."
        },
        {
          "type": "text",
          "html": "If the line does not pass through any <b><span class=\"kw\">Blocking Terrain</span></b> (any terrain piece with an <b><span class=\"kw\">Effective Size</span></b> of 1 or greater - see Part 11), the target is <span class=\"kw\">Visible</span>. No further checks are required.",
          "plain": "If the line does not pass through any Blocking Terrain (any terrain piece with an Effective Size of 1 or greater - see Part 11), the target is Visible . No further checks are required."
        },
        {
          "type": "text",
          "html": "If the line passes through <b><span class=\"kw\">Blocking Terrain</span></b>, the target is not automatically <span class=\"kw\">hidden</span>. Check the <b><span class=\"kw\">Cover</span></b> rules (Part <span class=\"ref\">7. 1. 1</span>) to determine whether the terrain actually blocks <b><span class=\"kw\">Line of Sight</span></b>. Terrain that intersects the trace but does not meet the requirements for <b>Full <span class=\"kw\">Cover</span></b> or <b>Direct <span class=\"kw\">Cover</span></b> does not block <b><span class=\"kw\">Line of Sight</span></b>. The target remains <span class=\"kw\">Visible</span>.",
          "plain": "If the line passes through Blocking Terrain , the target is not automatically hidden . Check the Cover rules (Part 7. 1. 1 ) to determine whether the terrain actually blocks Line of Sight . Terrain that intersects the trace but does not meet the requirements for Full Cover or Direct Cover does not block Line of Sight . The target remains Visible ."
        },
        {
          "type": "text",
          "html": "For <b><span class=\"kw\">Line of Sight</span></b> purposes, a terrain piece’s footprint is defined by its physical base or, if it has no base, the outermost edges of its solid structure viewed from above. Unless players agree otherwise during <span class=\"kw\">Battlefield Setup</span>, gaps, windows, doorways, and open interiors <span class=\"kw\">within</span> the footprint <b>do block</b> the <b><span class=\"kw\">Line of Sight</span></b>.",
          "plain": "For Line of Sight purposes, a terrain piece’s footprint is defined by its physical base or, if it has no base, the outermost edges of its solid structure viewed from above. Unless players agree otherwise during Battlefield Setup , gaps, windows, doorways, and open interiors within the footprint do block the Line of Sight ."
        },
        {
          "type": "text",
          "html": "A terrain opening may be passable for movement without counting as open for <b><span class=\"kw\">Line of Sight</span></b> (see Part <span class=\"ref\">4. 6</span> for Gap Clearance rules).",
          "plain": "A terrain opening may be passable for movement without counting as open for Line of Sight (see Part 4. 6 for Gap Clearance rules)."
        },
        {
          "type": "text",
          "html": "Players must agree during <span class=\"kw\">Battlefield Setup</span> on the footprint of each terrain piece and on which openings, if any, count as passable gaps for movement.",
          "plain": "Players must agree during Battlefield Setup on the footprint of each terrain piece and on which openings, if any, count as passable gaps for movement."
        },
        {
          "type": "note",
          "html": "<b>Designer’s note:</b> Our game uses a top-down <b><span class=\"kw\">Line of Sight</span></b> method rather than a precise measurement from the model’s eye. This prevents disputes over exact posture, slouching torsos, and weapon placement. It also ensures terrain interacts correctly regardless of model posture or base design. The downside is a slight loss of cinematic feel, but it is well worth it for speed and balance.",
          "plain": "Designer’s note: Our game uses a top-down Line of Sight method rather than a precise measurement from the model’s eye. This prevents disputes over exact posture, slouching torsos, and weapon placement. It also ensures terrain interacts correctly regardless of model posture or base design. The downside is a slight loss of cinematic feel, but it is well worth it for speed and balance."
        }
      ],
      "children": [
        {
          "id": "7-1-1-cover",
          "title": "7.1.1 Cover",
          "rows": [
            {
              "type": "text",
              "html": "Terrain pieces may block the <b><span class=\"kw\">Line of Sight</span></b> between <span class=\"kw\">models</span>. A terrain piece provides <span class=\"kw\">Cover</span> in one of two ways:",
              "plain": "Terrain pieces may block the Line of Sight between models . A terrain piece provides Cover in one of two ways:"
            },
            {
              "type": "text",
              "html": "<b>Full <span class=\"kw\">Cover</span>:</b> A terrain piece blocks<b> <span class=\"kw\">Line of Sight</span></b> if its<b> <span class=\"kw\">Effective Size</span></b> (Part <span class=\"ref\">7. 1. 2</span>) is <b>equal</b> to or <b>greater</b> than the <b><span class=\"kw\">Effective Size</span></b> of <b>both</b> the <b>Attacker</b> and the Target. Neither model can see over the terrain - <b><span class=\"kw\">Line of Sight</span></b> is blocked.",
              "plain": "Full Cover : A terrain piece blocks Line of Sight if its Effective Size (Part 7. 1. 2 ) is equal to or greater than the Effective Size of both the Attacker and the Target. Neither model can see over the terrain - Line of Sight is blocked."
            },
            {
              "type": "text",
              "html": "<b>Direct <span class=\"kw\">Cover</span>:</b> If the <b>Line of Sigh</b> t trace passes through a terrain piece, and either the Attacker or the target is<b> <span class=\"kw\">Within</span> 1\"</b> of that terrain, the <span class=\"kw\">Line of Sight</span> between them is blocked, provided the terrain piece&#x27; s <span class=\"kw\">Effective Size</span> is equal to or greater than the <span class=\"kw\">Effective Size</span> of the model that is <b><span class=\"kw\">Within</span> 1\"</b>.",
              "plain": "Direct Cover : If the Line of Sigh t trace passes through a terrain piece, and either the Attacker or the target is Within 1\" of that terrain, the Line of Sight between them is blocked, provided the terrain piece' s Effective Size is equal to or greater than the Effective Size of the model that is Within 1\" ."
            },
            {
              "type": "text",
              "html": "<b><i>Exception:</i></b> If both the Attacker and the target are <b><span class=\"kw\">Within</span></b><b>1\"</b> of the same terrain piece and <b><span class=\"kw\">Within</span></b><b>3\"</b> of each other, this rule does not apply. Resolve <b><span class=\"kw\">Line of Sight</span></b> normally using the standard trace (Part <span class=\"ref\">7. 1</span>)<b>.</b>",
              "plain": "Exception: If both the Attacker and the target are Within 1\" of the same terrain piece and Within 3\" of each other, this rule does not apply. Resolve Line of Sight normally using the standard trace (Part 7. 1 ) ."
            },
            {
              "type": "text",
              "html": "Each terrain piece is assessed for <span class=\"kw\">Cover</span> independently. Terrain pieces do not combine their <span class=\"kw\">Effective Size</span> or proximity. If no single terrain piece meets the requirements for Full <span class=\"kw\">Cover</span> or Direct <span class=\"kw\">Cover</span>, <b><span class=\"kw\">Line of Sight</span></b> is not blocked, regardless of how many terrain pieces the trace passes through.",
              "plain": "Each terrain piece is assessed for Cover independently. Terrain pieces do not combine their Effective Size or proximity. If no single terrain piece meets the requirements for Full Cover or Direct Cover , Line of Sight is not blocked, regardless of how many terrain pieces the trace passes through."
            },
            {
              "type": "text",
              "html": "<b>&lt;</b>",
              "plain": "<"
            },
            {
              "type": "text",
              "html": "<b>In this example,</b> a player checks <b><span class=\"kw\">Line of Sight</span></b> from a <span class=\"kw\">Goliath</span> (Size 3) to a Unit of five Marines (Size 2) through a ruined wall (Size 2). The wall is too short to block the <span class=\"kw\">Goliath</span>’s view entirely - Full <span class=\"kw\">Cover</span> fails. However, two Marines are <b><span class=\"kw\">Within</span></b><b>1\"</b> of the wall. Because the wall’s Size equals the Marines’ Size, the <b><span class=\"kw\">Line of Sight</span></b> to and from those two Marines is blocked - they are not <span class=\"kw\">Visible</span> to the <span class=\"kw\">Goliath</span>, and the <span class=\"kw\">Goliath</span> is not <span class=\"kw\">Visible</span> to them. The remaining three Marines are too far from the wall and are <span class=\"kw\">Visible</span> normally.",
              "plain": "In this example, a player checks Line of Sight from a Goliath (Size 3) to a Unit of five Marines (Size 2) through a ruined wall (Size 2). The wall is too short to block the Goliath ’s view entirely - Full Cover fails. However, two Marines are Within 1\" of the wall. Because the wall’s Size equals the Marines’ Size, the Line of Sight to and from those two Marines is blocked - they are not Visible to the Goliath , and the Goliath is not Visible to them. The remaining three Marines are too far from the wall and are Visible normally."
            },
            {
              "type": "text",
              "html": "<b>Elevation Dead Zone</b> If a model on <b>HIGH GROUND</b> (Size 3+) draws<b> <span class=\"kw\">Line of Sight</span></b> to a model at <b>GROUND LEVEL</b> that is <b><span class=\"kw\">Within</span> 1\"</b> of the base of the same terrain piece, <b><span class=\"kw\">Line of Sight</span></b> is blocked. This applies in both directions - neither model can see the other.",
              "plain": "Elevation Dead Zone If a model on HIGH GROUND (Size 3+) draws Line of Sight to a model at GROUND LEVEL that is Within 1\" of the base of the same terrain piece, Line of Sight is blocked. This applies in both directions - neither model can see the other."
            },
            {
              "type": "text",
              "html": "<b>Exception:</b> If both <span class=\"kw\">models</span> are <b><span class=\"kw\">Within</span> 1\"</b> of the same terrain piece and <b><span class=\"kw\">Within</span> 3\"</b> of each other, this rule does not apply. Resolve <b><span class=\"kw\">Line of Sight</span></b> normally using the standard trace (Part <span class=\"ref\">7. 1</span>).",
              "plain": "Exception: If both models are Within 1\" of the same terrain piece and Within 3\" of each other, this rule does not apply. Resolve Line of Sight normally using the standard trace (Part 7. 1 )."
            },
            {
              "type": "text",
              "html": "<b>&lt;</b>",
              "plain": "<"
            },
            {
              "type": "text",
              "html": "<b><i>In this example:</i></b><i> a <span class=\"kw\">Marine</span> on</i><b><i>HIGH GROUND</i></b><i> checks</i><b><i><span class=\"kw\">Line of Sight</span></i></b><i> to a <span class=\"kw\">Zergling</span> at</i><b><i>GROUND LEVEL</i></b><i>. The <span class=\"kw\">Zergling</span> is</i><b><i><span class=\"kw\">Within</span> 1\"</i></b><i>of the base of the same terrain piece the <span class=\"kw\">Marine</span> is standing on, but the two <span class=\"kw\">models</span> are more than 3\" apart. The <span class=\"kw\">Zergling</span> is too close to the foot of the cliff to be seen from above -</i><b><i><span class=\"kw\">Line of Sight</span></i></b><i> is blocked. This works in both directions - the <span class=\"kw\">Zergling</span> cannot see the <span class=\"kw\">Marine</span> above it either. If the two <span class=\"kw\">models</span> were</i><b><i><span class=\"kw\">Within</span> 3\"</i></b><i>of each other, Close Quarters would apply, and standard</i><b><i><span class=\"kw\">Line of Sight</span></i></b><i> rules would be used instead.</i>",
              "plain": "In this example: a Marine on HIGH GROUND checks Line of Sight to a Zergling at GROUND LEVEL . The Zergling is Within 1\" of the base of the same terrain piece the Marine is standing on, but the two models are more than 3\" apart. The Zergling is too close to the foot of the cliff to be seen from above - Line of Sight is blocked. This works in both directions - the Zergling cannot see the Marine above it either. If the two models were Within 3\" of each other, Close Quarters would apply, and standard Line of Sight rules would be used instead."
            }
          ]
        },
        {
          "id": "7-1-2-verticality-and-effective-size",
          "title": "7.1.2 Verticality and Effective Size",
          "rows": [
            {
              "type": "text",
              "html": "When a model stands on top of a terrain piece (such as <b>HIGH GROUND</b>):",
              "plain": "When a model stands on top of a terrain piece (such as HIGH GROUND ):"
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Effective Size</span></b> is equal to the model Size plus the terrain Size.",
              "plain": "Effective Size is equal to the model Size plus the terrain Size."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE:</b> A <span class=\"kw\">Marine</span> (Size 2) on <b>HIGH GROUND</b> (Size 4) has an <span class=\"kw\">Effective Size</span> of 6. He can see over Size 5 walls that would blind him at <b>GROUND LEVEL</b>.",
              "plain": "EXAMPLE: A Marine (Size 2) on HIGH GROUND (Size 4) has an Effective Size of 6. He can see over Size 5 walls that would blind him at GROUND LEVEL ."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP: HIGH GROUND</b> is a powerhouse on the battlefield. When a Unit is on terrain with a Size of 3 or 4, the <span class=\"kw\">Effective Size</span> of that Unit goes through the roof, letting it peer over barriers that would block the <b><span class=\"kw\">Line of Sight</span></b> of <span class=\"kw\">Units</span> on lower ground. The best position for ranged support is to utilise HIGH GROUND, as you can rain down fire from above. The downside, of course, is that <span class=\"kw\">Units</span> on <b>HIGH GROUND</b> are exposed to just about everything, so only put <span class=\"kw\">Units</span> there if they can handle whatever is coming their way. Ranged specialists with good Armour or Evade stats are the ones that really shine from <b>HIGH GROUND</b>, but <span class=\"kw\">Units</span> with lower stats should remain on the ground if they want to stay <span class=\"kw\">hidden</span>.",
              "plain": "Abathur’s TIP: HIGH GROUND is a powerhouse on the battlefield. When a Unit is on terrain with a Size of 3 or 4, the Effective Size of that Unit goes through the roof, letting it peer over barriers that would block the Line of Sight of Units on lower ground. The best position for ranged support is to utilise HIGH GROUND, as you can rain down fire from above. The downside, of course, is that Units on HIGH GROUND are exposed to just about everything, so only put Units there if they can handle whatever is coming their way. Ranged specialists with good Armour or Evade stats are the ones that really shine from HIGH GROUND , but Units with lower stats should remain on the ground if they want to stay hidden ."
            },
            {
              "type": "text",
              "html": "<b>Top-Down Perspective:</b> Only terrain pieces that rise vertically between the two <span class=\"kw\">models</span>&#x27; positions (as viewed from above) can block the shot. The horizontal surface a model stands on does not obstruct the top-down trace.",
              "plain": "Top-Down Perspective: Only terrain pieces that rise vertically between the two models ' positions (as viewed from above) can block the shot. The horizontal surface a model stands on does not obstruct the top-down trace."
            },
            {
              "type": "text",
              "html": "<b>Stacking Terrain:</b> When a terrain piece is set on <b>HIGH GROUND</b> or <b>MID GROUND</b>, its <span class=\"kw\">Effective Size</span> increases in the same way as a model’s - it gains the Size of the terrain it stands on.",
              "plain": "Stacking Terrain: When a terrain piece is set on HIGH GROUND or MID GROUND , its Effective Size increases in the same way as a model’s - it gains the Size of the terrain it stands on."
            },
            {
              "type": "text",
              "html": "<b>&lt;</b>",
              "plain": "<"
            },
            {
              "type": "text",
              "html": "<b><i>In this example,</i></b><i>a <span class=\"kw\">Marauder</span> (Size 2) is on</i><b><i>HIGH GROUND</i></b><i> (Size 3), giving it an <span class=\"kw\">Effective Size</span> of 5. A ruined wall (Size 2) is also on</i><b><i>HIGH GROUND</i></b><i> (Size 3), giving it an <span class=\"kw\">Effective Size</span> of 5. Because they have the same <span class=\"kw\">Effective Size</span>, the <span class=\"kw\">Marauder</span> cannot see over the ruined wall. The <span class=\"kw\">Roach</span> (Size 2) at</i><b><i>GROUND LEVEL</i></b><i> cannot make a</i><b><i><span class=\"kw\">Line of Sight</span></i></b><i> with the <span class=\"kw\">Marauder</span> because the ruined wall (<span class=\"kw\">Effective Size</span> 5) blocks it. However, the <span class=\"kw\">Hydralisk</span> at</i><b><i>GROUND LEVEL</i></b><i> can make a</i><b><i> <span class=\"kw\">Line of Sight</span></i></b><i> with the <span class=\"kw\">Marauder</span> because there is no obstacle in the way.</i>",
              "plain": "In this example, a Marauder (Size 2) is on HIGH GROUND (Size 3), giving it an Effective Size of 5. A ruined wall (Size 2) is also on HIGH GROUND (Size 3), giving it an Effective Size of 5. Because they have the same Effective Size , the Marauder cannot see over the ruined wall. The Roach (Size 2) at GROUND LEVEL cannot make a Line of Sight with the Marauder because the ruined wall ( Effective Size 5) blocks it. However, the Hydralisk at GROUND LEVEL can make a Line of Sight with the Marauder because there is no obstacle in the way."
            },
            {
              "type": "text",
              "html": "<b>&lt;</b>",
              "plain": "<"
            },
            {
              "type": "text",
              "html": "<i>In this example, the <span class=\"kw\">Goliath</span> (Size 3) stands on</i><b><i>HIGH GROUND</i></b><i> (Size 4), increasing the <span class=\"kw\">Goliath</span>’s <span class=\"kw\">Effective Size</span> to 7. The wall (Size 2) set on</i><b><i>HIGH GROUND</i></b><i> has an <span class=\"kw\">Effective Size</span> of 6.</i>",
              "plain": "In this example, the Goliath (Size 3) stands on HIGH GROUND (Size 4), increasing the Goliath ’s Effective Size to 7. The wall (Size 2) set on HIGH GROUND has an Effective Size of 6."
            }
          ]
        },
        {
          "id": "7-1-3-high-ground-cover",
          "title": "7.1.3 High Ground Cover",
          "rows": [
            {
              "type": "text",
              "html": "If all <span class=\"kw\">models</span> of a Unit are standing on <b>HIGH GROUND</b> (Size 3 or larger terrain) with their entire <span class=\"kw\">bases</span>, the Unit becomes eligible to make an <b>Evade Roll</b> against all <b>Ranged Attacks</b> originating from a lower elevation. The attack originates from the lower elevation if at least one model of the attacking Unit isn’t standing on the <b>HIGH GROUND</b> with their entire base.",
              "plain": "If all models of a Unit are standing on HIGH GROUND (Size 3 or larger terrain) with their entire bases , the Unit becomes eligible to make an Evade Roll against all Ranged Attacks originating from a lower elevation. The attack originates from the lower elevation if at least one model of the attacking Unit isn’t standing on the HIGH GROUND with their entire base."
            },
            {
              "type": "text",
              "html": "<b>Exception: <span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> never benefit from <b>HIGH GROUND</b> <span class=\"kw\">Cover</span>, regardless of their physical position on the battlefield. <b>Ranged Attacks</b> made by <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span><b></b> never originate from the lower elevation, regardless of their position on the battlefield.<i></i>",
              "plain": "Exception: Flying Units never benefit from HIGH GROUND Cover , regardless of their physical position on the battlefield. Ranged Attacks made by Flying Units never originate from the lower elevation, regardless of their position on the battlefield."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE: HIGH GROUND</b> is already a strong position on the battlefield, thanks to the bonus from <span class=\"kw\">Effective Size</span> and <b><span class=\"kw\">Line of Sight</span></b>. However, a Unit occupying <b>HIGH GROUND</b> is also more <span class=\"kw\">Visible</span> to almost everything on the table, creating a weakness. The Evade Roll provided to <span class=\"kw\">Units</span> occupying <b>HIGH GROUND</b> reflects the defensive benefit of being in a raised position. It is more difficult to fire uphill. This provides players with a strong reason to occupy a raised position, aside from the <b><span class=\"kw\">Line of Sight</span></b> bonus.",
              "plain": "DESIGNER’S NOTE: HIGH GROUND is already a strong position on the battlefield, thanks to the bonus from Effective Size and Line of Sight . However, a Unit occupying HIGH GROUND is also more Visible to almost everything on the table, creating a weakness. The Evade Roll provided to Units occupying HIGH GROUND reflects the defensive benefit of being in a raised position. It is more difficult to fire uphill. This provides players with a strong reason to occupy a raised position, aside from the Line of Sight bonus."
            }
          ]
        },
        {
          "id": "7-1-4-flying-units-and-cover",
          "title": "7.1.4 Flying Units and Cover",
          "rows": [
            {
              "type": "text",
              "html": "When checking <b>Line of Sigh</b> t to or from a <b><span class=\"kw\">Flying</span></b> model, ignore the Full <span class=\"kw\">Cover</span> rule.",
              "plain": "When checking Line of Sigh t to or from a Flying model, ignore the Full Cover rule."
            },
            {
              "type": "text",
              "html": "Direct <span class=\"kw\">Cover</span> and the Elevation Dead Zone rules still apply.",
              "plain": "Direct Cover and the Elevation Dead Zone rules still apply."
            },
            {
              "type": "text",
              "html": "For <span class=\"kw\">Cover</span> purposes, treat a <b><span class=\"kw\">Flying</span></b> model’s <span class=\"kw\">Effective Size</span> as higher than the <span class=\"kw\">Effective Size</span> of any terrain piece on the table.",
              "plain": "For Cover purposes, treat a Flying model’s Effective Size as higher than the Effective Size of any terrain piece on the table."
            },
            {
              "type": "text",
              "html": "Because of this, terrain can never provide Full <span class=\"kw\">Cover</span> against a <span class=\"kw\">Flying</span> model and can never provide Direct <span class=\"kw\">Cover</span> to a <b><span class=\"kw\">Flying</span></b> model as the model that is <b><span class=\"kw\">Within</span> 1\"</b> of terrain. However, a <b><span class=\"kw\">Flying</span></b> model still obeys any Direct <span class=\"kw\">Cover</span> or Elevation Dead Zone rule that applies to the other model in the attack.",
              "plain": "Because of this, terrain can never provide Full Cover against a Flying model and can never provide Direct Cover to a Flying model as the model that is Within 1\" of terrain. However, a Flying model still obeys any Direct Cover or Elevation Dead Zone rule that applies to the other model in the attack."
            },
            {
              "type": "text",
              "html": "<b>LOS and <span class=\"kw\">COVER</span> <span class=\"kw\">SUMMARY TABLE</span>:</b>",
              "plain": "LOS and COVER SUMMARY TABLE :"
            }
          ]
        },
        {
          "id": "line-of-sight-core-rules",
          "title": "LINE OF SIGHT - CORE RULES",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><tbody><tr><td><p><span>Rule / Case</span></p></td><td><p><span>Result</span></p></td><td><p><span>Detail</span></p></td></tr><tr><td colspan=\"3\"><p><span>BASE SYSTEM (§<span class=\"ref\">7. 1</span>)</span></p></td></tr><tr><td><p><span>LoS method</span></p></td><td><p><span>● 2D TOP-DOWN</span></p></td><td><p><span>Trace a straight line from any part of the attacker’s base to any part of the target’s base, viewed from directly above.</span></p></td></tr><tr><td><p><span>Measurement</span></p></td><td><p><span>● HORIZONTAL ONLY</span></p></td><td><p><span>Vertical height never factors into Range or LoS checks.</span></p></td></tr><tr><td><p><span>Trace does NOT pass through <span class=\"kw\">Blocking Terrain</span></span></p></td><td><p><span>✔ <span class=\"kw\">VISIBLE</span></span></p></td><td><p><span>No further checks required.</span></p></td></tr><tr><td><p><span>Trace passes through <span class=\"kw\">Blocking Terrain</span></span></p></td><td><p><span>◆ CHECK <span class=\"kw\">COVER</span></span></p></td><td><p><span>Apply Full <span class=\"kw\">Cover</span> or Direct <span class=\"kw\">Cover</span> rules (§<span class=\"ref\">7. 1. 1</span>). Target may still be <span class=\"kw\">Visible</span>.</span></p></td></tr><tr><td><p><span>Terrain footprint definition</span></p></td><td><p><span>● OUTER EDGE</span></p></td><td><p><span>Gaps, windows, and doorways inside a terrain piece do block LoS.</span></p></td></tr><tr><td colspan=\"3\"><p><span><span class=\"kw\">EFFECTIVE SIZE</span> &amp; ELEVATION (§<span class=\"ref\">7. 1. 2</span>)</span></p></td></tr><tr><td><p><span>Model on</span><span>HIGH GROUND</span></p></td><td><p><span>● MODEL + TERRAIN SIZE</span></p></td><td><p><span>E. g. <span class=\"kw\">Marine</span> (Size 2) on</span><span>HIGH GROUND</span><span> (Size 4) = <span class=\"kw\">Effective Size</span> 6.</span></p></td></tr><tr><td><p><span>Terrain piece on</span><span>HIGH GROUND</span></p></td><td><p><span>● TERRAIN + TERRAIN SIZE</span></p></td><td><p><span>The same stacking rule applies to terrain set on elevated surfaces.</span></p></td></tr><tr><td><p><span>Model at</span><span>GROUND LEVEL</span></p></td><td><p><span>– NO BONUS</span></p></td><td><p><span><span class=\"kw\">Effective Size</span> = model’s own Size characteristic only.</span></p></td></tr><tr><td colspan=\"3\"><p><span>ELEVATION DEAD ZONE (§<span class=\"ref\">7. 1. 1</span>)</span></p></td></tr><tr><td><p><span>HIGH GROUND</span><span> model traces LoS to the</span><span>GROUND LEVEL</span><span> model</span><span><span class=\"kw\">Within</span> 1\"</span><span> of the terrain base</span></p></td><td><p><span>✖ LoS BLOCKED</span></p></td><td><p><span>Applies in both directions. Neither model can see the other.</span></p></td></tr><tr><td><p><span>Close Quarters override (both</span><span><span class=\"kw\">Within</span> 1\"</span><span> of the same terrain AND</span><span><span class=\"kw\">Within</span> 3\"</span><span> of each other)</span></p></td><td><p><span>✔ LoS RESTORED</span></p></td><td><p><span>Standard LoS rules apply. Dead Zone is ignored. Works in both directions.</span></p></td></tr><tr><td colspan=\"3\"><br/></td></tr><tr><td><br/></td><td><br/></td><td><br/></td></tr></tbody></table>",
              "plain": "Rule / Case Result Detail BASE SYSTEM (§ 7. 1 ) LoS method ● 2D TOP-DOWN Trace a straight line from any part of the attacker’s base to any part of the target’s base, viewed from directly above. Measurement ● HORIZONTAL ONLY Vertical height never factors into Range or LoS checks. Trace does NOT pass through Blocking Terrain ✔ VISIBLE No further checks required. Trace passes through Blocking Terrain ◆ CHECK COVER Apply Full Cover or Direct Cover rules (§ 7. 1. 1 ). Target may still be Visible . Terrain footprint definition ● OUTER EDGE Gaps, windows, and doorways inside a terrain piece do block LoS. EFFECTIVE SIZE & ELEVATION (§ 7. 1. 2 ) Model on HIGH GROUND ● MODEL + TERRAIN SIZE E. g. Marine (Size 2) on HIGH GROUND (Size 4) = Effective Size 6. Terrain piece on HIGH GROUND ● TERRAIN + TERRAIN SIZE The same stacking rule applies to terrain set on elevated surfaces. Model at GROUND LEVEL – NO BONUS Effective Size = model’s own Size characteristic only. ELEVATION DEAD ZONE (§ 7. 1. 1 ) HIGH GROUND model traces LoS to the GROUND LEVEL model Within 1\" of the terrain base ✖ LoS BLOCKED Applies in both directions. Neither model can see the other. Close Quarters override (both Within 1\" of the same terrain AND Within 3\" of each other) ✔ LoS RESTORED Standard LoS rules apply. Dead Zone is ignored. Works in both directions."
            }
          ]
        },
        {
          "id": "cover-full-decision-table",
          "title": "COVER - FULL DECISION TABLE",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/><col/></colgroup><tbody><tr><td><p><span><span class=\"kw\">Cover</span> Type</span></p></td><td><p><span>Condition</span></p></td><td><p><span>LoS Result</span></p></td><td><p><span>Ref</span></p></td></tr><tr><td colspan=\"4\"><p><span>FULL <span class=\"kw\">COVER</span></span></p></td></tr><tr><td><p><span>Full <span class=\"kw\">Cover</span></span></p></td><td><p><span>Terrain <span class=\"kw\">Effective Size</span> ≥ <span class=\"kw\">Effective Size</span> of BOTH Attacker AND target</span></p></td><td><p><span>✖ LoS BLOCKED</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td colspan=\"4\"><p><span>DIRECT <span class=\"kw\">COVER</span></span></p></td></tr><tr><td><p><span>Direct <span class=\"kw\">Cover</span> - (Attacker behind terrain)</span></p></td><td><p><span>LoS trace passes through terrain, AND Attacker is</span><span><span class=\"kw\">Within</span> 1\"</span><span> of that terrain AND terrain Eff. Size ≥ Attacker Eff. Size</span></p><p><span>⚠ Close Quarters exception: if both <span class=\"kw\">models</span> are</span><span><span class=\"kw\">Within</span> 1\"</span><span> of the same terrain piece AND</span><span><span class=\"kw\">Within</span> 3\"</span><span> of each other, this rule is bypassed - use standard LoS instead.</span></p></td><td><p><span>✖ LoS BLOCKED</span><span> (unless Close Quarters)</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td><p><span>Direct <span class=\"kw\">Cover</span> - (Target behind terrain)</span></p></td><td><p><span>LoS trace passes through terrain, AND target is</span><span><span class=\"kw\">Within</span> 1\"</span><span> of that terrain AND terrain Eff. Size ≥ target Eff. Size</span></p><p><span>⚠ Close Quarters exception: if both <span class=\"kw\">models</span> are</span><span><span class=\"kw\">Within</span> 1\"</span><span> of the same terrain piece AND</span><span> <span class=\"kw\">Within</span> 3\"</span><span> of each other, this rule is bypassed - use standard LoS instead.</span></p></td><td><p><span>✖ LoS BLOCKED</span><span> (unless Close Quarters)</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td colspan=\"4\"><p><span>NO <span class=\"kw\">COVER</span> / <span class=\"kw\">VISIBLE</span> DESPITE TERRAIN</span></p></td></tr><tr><td><p><span>Terrain too small</span></p></td><td><p><span>Full <span class=\"kw\">Cover</span> fails, AND neither model is</span><span><span class=\"kw\">Within</span> 1\"</span><span> of terrain (Direct <span class=\"kw\">Cover</span> fails)</span></p></td><td><p><span>✔ <span class=\"kw\">VISIBLE</span></span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td><p><span>Multiple small terrain pieces</span></p></td><td><p><span>Trace passes through several pieces, but no single piece satisfies Full or Direct <span class=\"kw\">Cover</span></span></p></td><td><p><span>✔ <span class=\"kw\">VISIBLE</span></span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td><p><span>Model not</span><span><span class=\"kw\">Within</span> 1\"</span><span> of terrain</span></p></td><td><p><span>Trace passes through terrain; Direct <span class=\"kw\">Cover</span> proximity condition not met for that model</span></p></td><td><p><span>✔ <span class=\"kw\">VISIBLE</span></span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td colspan=\"4\"><p><span><span class=\"kw\">HIGH GROUND COVER</span> -EVADE BONUS</span></p></td></tr><tr><td><p><span>HIGH GROUND</span><span> <span class=\"kw\">Cover</span></span></p></td><td><p><span>ALL <span class=\"kw\">models</span> of defending Unit are</span><span><span class=\"kw\">Wholly Within</span></span><span></span><span>HIGH GROUND</span><span> (Size 3+), AND at least one attacking model is NOT</span><span><span class=\"kw\">Wholly Within</span></span><span></span><span>HIGH GROUND</span></p></td><td><p><span>◆ EVADE ROLL GRANTED</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 3</span></span></p></td></tr><tr><td><p><span>Attacker is also on HIGH GROUND</span></p></td><td><p><span>At least one attacking model is</span><span><span class=\"kw\">Wholly Within</span></span><span> the same</span><span>HIGH GROUND</span><span> elevation as the defender</span></p></td><td><p><span>✖ NO EVADE BONUS</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 3</span></span></p></td></tr><tr><td colspan=\"4\"><p><span><span class=\"kw\">FLYING</span> <span class=\"kw\">UNITS</span></span></p></td></tr><tr><td><p><span>Full <span class=\"kw\">Cover</span></span></p></td><td><p><span>When checking</span><span><span class=\"kw\">Line of Sight</span></span><span> to or from a</span><span><span class=\"kw\">Flying</span></span><span>model, ignore the Full <span class=\"kw\">Cover</span> rule.</span></p></td><td><p><span>✔ <span class=\"kw\">VISIBLE</span> - NO <span class=\"kw\">COVER</span></span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td><p><span>Direct <span class=\"kw\">Cover</span> - target</span></p></td><td><p><span><span class=\"kw\">Flying</span></span><span><span class=\"kw\">Units</span>’ <span class=\"kw\">Effective Size</span> is always higher than the <span class=\"kw\">Effective Size</span> of any terrain piece on the table.</span></p></td><td><p><span>✔ <span class=\"kw\">VISIBLE</span> - NO <span class=\"kw\">COVER</span></span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td><p><span>Direct <span class=\"kw\">Cover</span> -Attacker</span></p></td><td><p><span>LoS trace passes through terrain, AND target is</span><span><span class=\"kw\">Within</span> 1\"</span><span> of that terrain AND terrain Eff. Size ≥ target Eff. Size</span></p></td><td><p><span>✖ LoS BLOCKED</span><span> (unless Close Quarters)</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 1</span></span></p></td></tr><tr><td><p><span>HIGH GROUND</span><span> <span class=\"kw\">Cover</span></span></p></td><td><p><span><span class=\"kw\">Flying</span></span><span><span class=\"kw\">Units</span> never benefit from</span><span>HIGH GROUND</span><span> <span class=\"kw\">Cover</span>, regardless of their physical position on the battlefield.</span></p></td><td><p><span>✖ NO EVADE BONUS</span></p></td><td><p><span>§<span class=\"ref\">7. 1. 3</span></span></p></td></tr></tbody></table>",
              "plain": "Cover Type Condition LoS Result Ref FULL COVER Full Cover Terrain Effective Size ≥ Effective Size of BOTH Attacker AND target ✖ LoS BLOCKED § 7. 1. 1 DIRECT COVER Direct Cover - (Attacker behind terrain) LoS trace passes through terrain, AND Attacker is Within 1\" of that terrain AND terrain Eff. Size ≥ Attacker Eff. Size ⚠ Close Quarters exception: if both models are Within 1\" of the same terrain piece AND Within 3\" of each other, this rule is bypassed - use standard LoS instead. ✖ LoS BLOCKED (unless Close Quarters) § 7. 1. 1 Direct Cover - (Target behind terrain) LoS trace passes through terrain, AND target is Within 1\" of that terrain AND terrain Eff. Size ≥ target Eff. Size ⚠ Close Quarters exception: if both models are Within 1\" of the same terrain piece AND Within 3\" of each other, this rule is bypassed - use standard LoS instead. ✖ LoS BLOCKED (unless Close Quarters) § 7. 1. 1 NO COVER / VISIBLE DESPITE TERRAIN Terrain too small Full Cover fails, AND neither model is Within 1\" of terrain (Direct Cover fails) ✔ VISIBLE § 7. 1. 1 Multiple small terrain pieces Trace passes through several pieces, but no single piece satisfies Full or Direct Cover ✔ VISIBLE § 7. 1. 1 Model not Within 1\" of terrain Trace passes through terrain; Direct Cover proximity condition not met for that model ✔ VISIBLE § 7. 1. 1 HIGH GROUND COVER -EVADE BONUS HIGH GROUND Cover ALL models of defending Unit are Wholly Within HIGH GROUND (Size 3+), AND at least one attacking model is NOT Wholly Within HIGH GROUND ◆ EVADE ROLL GRANTED § 7. 1. 3 Attacker is also on HIGH GROUND At least one attacking model is Wholly Within the same HIGH GROUND elevation as the defender ✖ NO EVADE BONUS § 7. 1. 3 FLYING UNITS Full Cover When checking Line of Sight to or from a Flying model, ignore the Full Cover rule. ✔ VISIBLE - NO COVER § 7. 1. 1 Direct Cover - target Flying Units ’ Effective Size is always higher than the Effective Size of any terrain piece on the table. ✔ VISIBLE - NO COVER § 7. 1. 1 Direct Cover -Attacker LoS trace passes through terrain, AND target is Within 1\" of that terrain AND terrain Eff. Size ≥ target Eff. Size ✖ LoS BLOCKED (unless Close Quarters) § 7. 1. 1 HIGH GROUND Cover Flying Units never benefit from HIGH GROUND Cover , regardless of their physical position on the battlefield. ✖ NO EVADE BONUS § 7. 1. 3"
            },
            {
              "type": "text",
              "html": "<i>IMPORTANT: Each terrain piece is evaluated independently for <span class=\"kw\">Cover</span>. Pieces do not combine <span class=\"kw\">Effective Size</span> or proximity - one piece must satisfy the full condition on its own. | <span class=\"kw\">GRASS</span> iunlike other Size 2 terrain, does not block movement but does block <span class=\"kw\">Line of Sight</span>.</i>",
              "plain": "IMPORTANT: Each terrain piece is evaluated independently for Cover . Pieces do not combine Effective Size or proximity - one piece must satisfy the full condition on its own. | GRASS iunlike other Size 2 terrain, does not block movement but does block Line of Sight ."
            }
          ]
        },
        {
          "id": "blocking-terrain-elevation-quick-reference",
          "title": "BLOCKING TERRAIN & ELEVATION - QUICK REFERENCE",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><tbody><tr><td><br/><div align=\"left\"><table><colgroup><col/><col/><col/></colgroup><tbody><tr><td><p><span>Size</span></p></td><td><p><span>Blocking?</span></p></td><td><p><span>Passable?</span></p></td></tr><tr><td><p><span>Size 0</span></p></td><td><p><span>✖ NOT BLOCKING</span></p></td><td><p><span>✔ PASS FREELY</span></p></td></tr><tr><td><p><span>Size 1</span></p></td><td><p><span>✔ BLOCKING</span></p></td><td><p><span>✔ PASS FREELY</span></p></td></tr><tr><td><p><span>Size 2</span></p></td><td><p><span>✔ BLOCKING</span></p></td><td><p><span>✖ CANNOT PASS</span></p></td></tr><tr><td><p><span>Size 2 – <span class=\"kw\">GRASS</span></span></p></td><td><p><span>✔ BLOCKING</span></p></td><td><p><span>◆ PASS (destroyed)</span></p></td></tr><tr><td><p><span>Size 3+</span></p></td><td><p><span>✔ BLOCKING</span></p></td><td><p><span>✖ CANNOT PASS</span></p></td></tr></tbody></table></div><br/></td><td><br/></td><td><br/><div align=\"left\"><table><colgroup><col/><col/></colgroup><tbody><tr><td><p><span>Elevation</span></p></td><td><p><span>How to reach / rule</span></p></td></tr><tr><td><p><span>GROUND LEVEL</span></p></td><td><p><span>Standing on the battlefield</span></p></td></tr><tr><td><p><span>MID GROUND</span></p></td><td><p><span>Horizontal terrain Size 1–2</span></p></td></tr><tr><td><p><span>HIGH GROUND</span></p></td><td><p><span>Horizontal terrain Size 3+</span></p></td></tr><tr><td><p><span>Change elevation</span></p></td><td><p><span>Must use an <span class=\"kw\">ACCESS POINT</span></span></p></td></tr><tr><td><p><span><span class=\"kw\">Flying</span></span><span><span class=\"kw\">Units</span></span></p></td><td><p><span>Ignore terrain; <span class=\"kw\">move</span> point-to-point</span></p></td></tr></tbody></table></div><br/></td></tr></tbody></table>",
              "plain": "Size Blocking? Passable? Size 0 ✖ NOT BLOCKING ✔ PASS FREELY Size 1 ✔ BLOCKING ✔ PASS FREELY Size 2 ✔ BLOCKING ✖ CANNOT PASS Size 2 – GRASS ✔ BLOCKING ◆ PASS (destroyed) Size 3+ ✔ BLOCKING ✖ CANNOT PASS Elevation How to reach / rule GROUND LEVEL Standing on the battlefield MID GROUND Horizontal terrain Size 1–2 HIGH GROUND Horizontal terrain Size 3+ Change elevation Must use an ACCESS POINT Flying Units Ignore terrain; move point-to-point"
            }
          ]
        }
      ]
    },
    {
      "id": "7-2-engagement-and-engagement-range",
      "title": "7.2 Engagement and Engagement Range",
      "rows": [
        {
          "type": "text",
          "html": "The <b><span class=\"kw\">Engagement Range</span></b> extends 1&quot; horizontally from any model’s base. When two <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> are <b><span class=\"kw\">Within</span> 1\"</b> of each other, they are <b><span class=\"kw\">Engaged</span></b> - <span class=\"kw\">locked in</span> close combat.",
          "plain": "The Engagement Range extends 1\" horizontally from any model’s base. When two Enemy models are Within 1\" of each other, they are Engaged - locked in close combat."
        },
        {
          "type": "text",
          "html": "When any model in a Unit is <b><span class=\"kw\">Within</span> 1\"</b> of any model in an <b><span class=\"kw\">Enemy</span></b> Unit, both <span class=\"kw\">Units</span> are considered <b><span class=\"kw\">Engaged</span></b>.",
          "plain": "When any model in a Unit is Within 1\" of any model in an Enemy Unit, both Units are considered Engaged ."
        }
      ],
      "children": [
        {
          "id": "7-2-1-engagement-restrictions",
          "title": "7.2.1 Engagement Restrictions",
          "rows": [
            {
              "type": "text",
              "html": "<span class=\"kw\">Models</span> are <b><span class=\"kw\">Engaged</span></b> only when all of the following conditions are met:",
              "plain": "Models are Engaged only when all of the following conditions are met:"
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Combat Tags</span> match:</b><b>Ground</b> <span class=\"kw\">models</span> Engage only <b>Ground</b> <span class=\"kw\">models</span>. <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span><b>cannot</b> be <b><span class=\"kw\">Engaged</span></b> by any model.",
              "plain": "Combat Tags match: Ground models Engage only Ground models . Flying models cannot be Engaged by any model."
            },
            {
              "type": "bullet",
              "html": "<b>Terrain does not block:</b>",
              "plain": "Terrain does not block:"
            },
            {
              "type": "bullet",
              "html": "Size 0–1 terrain: Engagement is possible across it.",
              "plain": "Size 0–1 terrain: Engagement is possible across it."
            },
            {
              "type": "bullet",
              "html": "Size 2+ terrain: <span class=\"kw\">Models</span><b>cannot</b> Engage through it. Even <b><span class=\"kw\">Within</span> 1\"</b>, a Size 2+ wall between them means they are not <b><span class=\"kw\">Engaged</span></b>.",
              "plain": "Size 2+ terrain: Models cannot Engage through it. Even Within 1\" , a Size 2+ wall between them means they are not Engaged ."
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Models</span> on <b>HIGH GROUND</b><b>cannot</b> Engage <span class=\"kw\">models</span> on <b>GROUND LEVEL</b>, and vice versa.",
              "plain": "Models on HIGH GROUND cannot Engage models on GROUND LEVEL , and vice versa."
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Models</span> on <b>MID GROUND</b> can Engage <span class=\"kw\">models</span> on <b>HIGH GROUND</b> or <b>GROUND LEVEL</b> only if both <span class=\"kw\">models</span> are adjacent to the same <b><span class=\"kw\">ACCESS POINT</span></b> connecting their respective elevations",
              "plain": "Models on MID GROUND can Engage models on HIGH GROUND or GROUND LEVEL only if both models are adjacent to the same ACCESS POINT connecting their respective elevations"
            }
          ]
        }
      ]
    },
    {
      "id": "7-3-markers-and-tokens",
      "title": "7.3 Markers and Tokens",
      "rows": [],
      "children": [
        {
          "id": "7-3-1-tokens",
          "title": "7.3.1 Tokens",
          "rows": [
            {
              "type": "text",
              "html": "<span class=\"kw\">Tokens</span> represent tangible battlefield assets - Creep Tumors, Forcefields, and Auto-Turrets. Treat them as <b>Terrain (Size 0)</b> with their own base. <span class=\"kw\">Models</span> may <span class=\"kw\">move</span> through <span class=\"kw\">Tokens</span>, but <b>cannot</b> end movement overlapping them unless specified. <span class=\"kw\">Tokens</span> are removed at the end of the Game Round unless stated otherwise. Always measure to the closest base edge of a Token.",
              "plain": "Tokens represent tangible battlefield assets - Creep Tumors, Forcefields, and Auto-Turrets. Treat them as Terrain (Size 0) with their own base. Models may move through Tokens , but cannot end movement overlapping them unless specified. Tokens are removed at the end of the Game Round unless stated otherwise. Always measure to the closest base edge of a Token."
            }
          ]
        },
        {
          "id": "7-3-2-markers",
          "title": "7.3.2 Markers",
          "rows": [
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Markers</span></b> are used to keep track of <span class=\"kw\">status</span> or game states. Unlike <span class=\"kw\">Tokens</span>, they have no physical presence. They do not block <b><span class=\"kw\">Line of Sight</span></b> or Movement.",
              "plain": "Markers are used to keep track of status or game states. Unlike Tokens , they have no physical presence. They do not block Line of Sight or Movement."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Mission Markers</span></b> are numbered <span class=\"kw\">Markers</span> used on the battlefield during Setup at coordinates shown on the <b><span class=\"kw\">Deployment</span> Card</b>. Each Marker is 32mm in diameter and has two sides:<b> Activated</b> or <b>Deactivated</b>. Each one is colour-coded by number: <span class=\"kw\">Markers</span> 1 &amp; 3 are Red, <span class=\"kw\">Markers</span> 2 &amp; 4 are Blue, and Marker 5 is Neutral.",
              "plain": "Mission Markers are numbered Markers used on the battlefield during Setup at coordinates shown on the Deployment Card . Each Marker is 32mm in diameter and has two sides: Activated or Deactivated . Each one is colour-coded by number: Markers 1 & 3 are Red, Markers 2 & 4 are Blue, and Marker 5 is Neutral."
            },
            {
              "type": "bullet",
              "html": "<b>Activation <span class=\"kw\">Markers</span></b> are set beside the Unit that has completed its turn in a Phase. They are double-sided with the arrow facing upwards, showing that the Unit has finished its turn in Phase 1 (Movement). The reverse side indicates that the Unit has completed its turn in Phase 2 (Assault).",
              "plain": "Activation Markers are set beside the Unit that has completed its turn in a Phase. They are double-sided with the arrow facing upwards, showing that the Unit has finished its turn in Phase 1 (Movement). The reverse side indicates that the Unit has completed its turn in Phase 2 (Assault)."
            },
            {
              "type": "bullet",
              "html": "<b>Faction Indicators</b> are used on <b><span class=\"kw\">Mission Markers</span></b> to show which player controls that Mission Marker at any moment. Some <b><span class=\"kw\">Special Abilities</span></b> utilise Faction Indicators to mark an area of the battlefield.",
              "plain": "Faction Indicators are used on Mission Markers to show which player controls that Mission Marker at any moment. Some Special Abilities utilise Faction Indicators to mark an area of the battlefield."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Zone of Influence</span> <span class=\"kw\">Markers</span></b> are used to define the <b><span class=\"kw\">Zone of Influence</span></b> when the <b><span class=\"kw\">Entry Edge</span></b> doesn’t extend along the entire table edge. These are L-shaped corner <span class=\"kw\">markers</span> that must be set exactly as shown on the <b><span class=\"kw\">Deployment</span> Card</b>.",
              "plain": "Zone of Influence Markers are used to define the Zone of Influence when the Entry Edge doesn’t extend along the entire table edge. These are L-shaped corner markers that must be set exactly as shown on the Deployment Card ."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">First Player Marker</span></b> is used to track which player has initiative. The holder chooses which player activates first at the beginning of each Phase. The Marker passes between players throughout the game, usually when a player Passes early in a Phase or when Victory Points are tallied at the end of the Round.",
              "plain": "First Player Marker is used to track which player has initiative. The holder chooses which player activates first at the beginning of each Phase. The Marker passes between players throughout the game, usually when a player Passes early in a Phase or when Victory Points are tallied at the end of the Round."
            }
          ]
        }
      ]
    },
    {
      "id": "7-4-destroyed-units",
      "title": "7.4 Destroyed Units",
      "rows": [
        {
          "type": "text",
          "html": "When the last model falls, the Unit is Destroyed.",
          "plain": "When the last model falls, the Unit is Destroyed."
        },
        {
          "type": "text",
          "html": "Every effect, ability, and condition currently on the Destroyed Unit immediately ends. <span class=\"kw\">Tokens</span> created by the destroyed Unit are removed (unless they are <b><span class=\"kw\">STAY IN PLAY</span></b>). Effects that the Destroyed Unit applied to other <span class=\"kw\">Units</span> remain on those <span class=\"kw\">Units</span> unless the effect explicitly states otherwise.",
          "plain": "Every effect, ability, and condition currently on the Destroyed Unit immediately ends. Tokens created by the destroyed Unit are removed (unless they are STAY IN PLAY ). Effects that the Destroyed Unit applied to other Units remain on those Units unless the effect explicitly states otherwise."
        },
        {
          "type": "text",
          "html": "A Destroyed Unit cannot return to play unless a specific rule states otherwise.",
          "plain": "A Destroyed Unit cannot return to play unless a specific rule states otherwise."
        }
      ],
      "children": []
    }
  ]
};
window.__companionRuleParts['part-8'] = {
  "num": "8",
  "kicker": "Part VIII",
  "title": "The Game Sequence",
  "id": "part-8",
  "color": "#9d96c5",
  "group": "play",
  "introRows": [
    {
      "type": "text",
      "html": "With the basics covered and the troops assembled, the time to fight has arrived. Each Round of the battle follows a straightforward progression: moving <span class=\"kw\">Units</span>, shooting, savage close combat, and scoring objectives. This section will <span class=\"kw\">cover</span> each step of the fight cycle, beginning with the initial <b><span class=\"kw\">Move</span></b> action and concluding with the final Victory Point tally.",
      "plain": "With the basics covered and the troops assembled, the time to fight has arrived. Each Round of the battle follows a straightforward progression: moving Units , shooting, savage close combat, and scoring objectives. This section will cover each step of the fight cycle, beginning with the initial Move action and concluding with the final Victory Point tally."
    }
  ],
  "rules": [
    {
      "id": "8-1-rounds-and-phases",
      "title": "8.1 Rounds and Phases",
      "rows": [
        {
          "type": "text",
          "html": "A game lasts up to <b>5 Rounds</b>. Each Round has four Phases resolved in strict order:",
          "plain": "A game lasts up to 5 Rounds . Each Round has four Phases resolved in strict order:"
        },
        {
          "type": "block",
          "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><tbody><tr><td><p><span>Phase</span></p></td><td><p><span>Name</span></p></td><td><p><span>Key Actions</span></p></td></tr><tr><td><p><span>1</span></p></td><td><p><span>The Movement Phase</span></p></td><td><p><span><span class=\"kw\">Deploy</span>, <span class=\"kw\">Move</span>, <span class=\"kw\">Disengage</span>, <span class=\"kw\">Hold</span></span></p></td></tr><tr><td><p><span>2</span></p></td><td><p><span>The Assault Phase</span></p></td><td><p><span><span class=\"kw\">Ranged Attack</span>, <span class=\"kw\">Charge</span>, Run, <span class=\"kw\">Hold</span></span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>The Combat Phase</span></p></td><td><p><span>Close Ranks, Close Combat Attack</span></p></td></tr><tr><td><p><span>4</span></p></td><td><p><span>The Scoring &amp; Cleanup Phase</span></p></td><td><p><span>Control <span class=\"kw\">Markers</span>, Score VP, Cleanup</span></p></td></tr></tbody></table>",
          "plain": "Phase Name Key Actions 1 The Movement Phase Deploy , Move , Disengage , Hold 2 The Assault Phase Ranged Attack , Charge , Run, Hold 3 The Combat Phase Close Ranks, Close Combat Attack 4 The Scoring & Cleanup Phase Control Markers , Score VP, Cleanup"
        }
      ],
      "children": []
    },
    {
      "id": "8-2-the-activation-system",
      "title": "8.2 The Activation System",
      "rows": [
        {
          "type": "text",
          "html": "During Phases 1, 2 and 3, players use <b>Alternating Activation</b>. The holder of the <b><span class=\"kw\">First Player Marker</span></b> decides which player activates first each Phase. Players then alternate, each activating one Unit per turn. Each <b>Activated</b> Unit performs exactly <b>one</b> action from the list available in that Phase.",
          "plain": "During Phases 1, 2 and 3, players use Alternating Activation . The holder of the First Player Marker decides which player activates first each Phase. Players then alternate, each activating one Unit per turn. Each Activated Unit performs exactly one action from the list available in that Phase."
        }
      ],
      "children": [
        {
          "id": "8-2-1-passing-and-initiative",
          "title": "8.2.1 Passing and Initiative",
          "rows": [
            {
              "type": "text",
              "html": "At any point during a turn, the <b><span class=\"kw\">Active Player</span></b> may <b>Pass</b> instead of activating a Unit. A player must <b>Pass</b> if they have no eligible <span class=\"kw\">Units</span> left.",
              "plain": "At any point during a turn, the Active Player may Pass instead of activating a Unit. A player must Pass if they have no eligible Units left."
            },
            {
              "type": "text",
              "html": "The first player to <b>Pass</b> in a Phase takes the <b><span class=\"kw\">First Player Marker</span></b> for the next Phase. Once a player <b>Passes</b>, they cannot activate any further <span class=\"kw\">Units</span> this Phase. The opponent then completes their remaining <span class=\"kw\">activations</span>.",
              "plain": "The first player to Pass in a Phase takes the First Player Marker for the next Phase. Once a player Passes , they cannot activate any further Units this Phase. The opponent then completes their remaining activations ."
            }
          ]
        },
        {
          "id": "8-2-2-determining-the-first-player",
          "title": "8.2.2 Determining the First Player",
          "rows": [
            {
              "type": "text",
              "html": "Players Roll-Off (Part <span class=\"ref\">3. 2</span>). The winner assigns the <b><span class=\"kw\">First Player Marker</span></b> to either player for Round 1.",
              "plain": "Players Roll-Off (Part 3. 2 ). The winner assigns the First Player Marker to either player for Round 1."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> The Roll-Off winner can give the <b><span class=\"kw\">First Player Marker</span></b> to their opponent - and this can sometimes be the right call. Going second in the Movement Phase means your opponent commits their <span class=\"kw\">Units</span> first, allowing you to react. Going first in the Assault Phase rewards you for <b><span class=\"kw\">Passing</span></b> early in Movement. Deciding who starts Round 1 with that Marker is itself a strategic decision, not just a formality.",
              "plain": "DESIGNER’S NOTE: The Roll-Off winner can give the First Player Marker to their opponent - and this can sometimes be the right call. Going second in the Movement Phase means your opponent commits their Units first, allowing you to react. Going first in the Assault Phase rewards you for Passing early in Movement. Deciding who starts Round 1 with that Marker is itself a strategic decision, not just a formality."
            }
          ]
        }
      ]
    },
    {
      "id": "8-3-deployment-and-reserves",
      "title": "8.3 Deployment and Reserves",
      "rows": [
        {
          "type": "text",
          "html": "No <span class=\"kw\">Units</span> begin on the battlefield. All <span class=\"kw\">Units</span> included in the <b>Army List</b> start in <b><span class=\"kw\">Reserves</span></b>. Bring them onto the battlefield during the Movement Phase as Supply allows.",
          "plain": "No Units begin on the battlefield. All Units included in the Army List start in Reserves . Bring them onto the battlefield during the Movement Phase as Supply allows."
        },
        {
          "type": "note",
          "html": "<b>DESIGNER’S NOTE:</b> Starting each Unit in Reserve is a deliberate departure from traditional miniature wargaming. Instead of deploying the whole army on the table at the start and committing to those positions before rolling a single die, players develop their battlefield presence gradually through each Round. This approach is similar to how a traditional real-time strategy game develops its economic presence – early Rounds require decisions on which <span class=\"kw\">Units</span> to commit with limited Supply, while later Rounds punish those who didn’t manage these early decisions effectively. It also helps to eliminate the common problem of alpha-striking on Turn 1.",
          "plain": "DESIGNER’S NOTE: Starting each Unit in Reserve is a deliberate departure from traditional miniature wargaming. Instead of deploying the whole army on the table at the start and committing to those positions before rolling a single die, players develop their battlefield presence gradually through each Round. This approach is similar to how a traditional real-time strategy game develops its economic presence – early Rounds require decisions on which Units to commit with limited Supply, while later Rounds punish those who didn’t manage these early decisions effectively. It also helps to eliminate the common problem of alpha-striking on Turn 1."
        }
      ],
      "children": [
        {
          "id": "8-3-1-the-supply-pool",
          "title": "8.3.1 The Supply Pool",
          "rows": [
            {
              "type": "text",
              "html": "Reinforcements do not arrive all at once; Warp conduits take time to stabilise, Overlords require flight corridors, and Dropships queue on orbital approach vectors.",
              "plain": "Reinforcements do not arrive all at once; Warp conduits take time to stabilise, Overlords require flight corridors, and Dropships queue on orbital approach vectors."
            },
            {
              "type": "text",
              "html": "The <b>Supply Pool</b> is the total available capacity that any commander may have at any <span class=\"kw\">instant</span>, and this increases as logistics close the gap on the frontline.",
              "plain": "The Supply Pool is the total available capacity that any commander may have at any instant , and this increases as logistics close the gap on the frontline."
            },
            {
              "type": "bullet",
              "html": "<b>Round 1:</b><b>Supply Pool</b> equals the <b>Mission Card</b>’s starting Supply.",
              "plain": "Round 1: Supply Pool equals the Mission Card ’s starting Supply."
            },
            {
              "type": "bullet",
              "html": "<b>Later Rounds:</b><b>Supply Pool</b> increases by the <b>Supply Escalation</b> value each Round.",
              "plain": "Later Rounds: Supply Pool increases by the Supply Escalation value each Round."
            },
            {
              "type": "bullet",
              "html": "<b>Final Round:</b> In the last Round of every game (as defined by the <b>Mission Card</b>), the <b>Supply Pool</b> becomes unlimited. All remaining <span class=\"kw\">Units</span> in <b><span class=\"kw\">Reserves</span></b> may be deployed without Supply restrictions, following the normal alternating activation sequence.",
              "plain": "Final Round: In the last Round of every game (as defined by the Mission Card ), the Supply Pool becomes unlimited. All remaining Units in Reserves may be deployed without Supply restrictions, following the normal alternating activation sequence."
            },
            {
              "type": "bullet",
              "html": "<b>Hard Cap:</b><b>Total Current Supply</b> of on-table <span class=\"kw\">Units</span> may <b>never</b> exceed the <b>Supply Pool</b>.",
              "plain": "Hard Cap: Total Current Supply of on-table Units may never exceed the Supply Pool ."
            }
          ]
        },
        {
          "id": "8-3-2-available-supply",
          "title": "8.3.2 Available Supply",
          "rows": [
            {
              "type": "text",
              "html": "A commander’s resources are only so plentiful. Every squad draws from the same pool of ammunition, bandwidth, and command focus. The resources you’ve committed so far will determine what remains available. Managing the gap between what’s been committed and what’s still accessible is what distinguishes a measured escalation from an army peaking too early.",
              "plain": "A commander’s resources are only so plentiful. Every squad draws from the same pool of ammunition, bandwidth, and command focus. The resources you’ve committed so far will determine what remains available. Managing the gap between what’s been committed and what’s still accessible is what distinguishes a measured escalation from an army peaking too early."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Available Supply</span> equals the Current Supply Pool minus the Total Supply of <span class=\"kw\">Friendly</span> <span class=\"kw\">Units</span> on the Battlefield.</b>",
              "plain": "Available Supply equals the Current Supply Pool minus the Total Supply of Friendly Units on the Battlefield."
            },
            {
              "type": "text",
              "html": "A Unit can only be fielded if its <b>Current Supply</b><b>Value</b> is less than or equal to the <b><span class=\"kw\">Available Supply</span></b>. <span class=\"kw\">Units</span> Destroyed in battle (or reduced by casualties) free up <b><span class=\"kw\">Available Supply</span></b> for new arrivals.",
              "plain": "A Unit can only be fielded if its Current Supply Value is less than or equal to the Available Supply . Units Destroyed in battle (or reduced by casualties) free up Available Supply for new arrivals."
            }
          ]
        },
        {
          "id": "8-3-3-deployment-restrictions",
          "title": "8.3.3 Deployment Restrictions",
          "rows": [
            {
              "type": "text",
              "html": "When a Unit arrives from <b><span class=\"kw\">Reserves</span></b>, that Unit cannot end its arrival during that Activation inside the opponent’s <b><span class=\"kw\">Zone of Influence</span>.</b> This restriction applies to all forms of arrival, whether the Unit enters from an edge, arrives via a Warp Prism, or is summoned.",
              "plain": "When a Unit arrives from Reserves , that Unit cannot end its arrival during that Activation inside the opponent’s Zone of Influence . This restriction applies to all forms of arrival, whether the Unit enters from an edge, arrives via a Warp Prism, or is summoned."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> When you begin, resources will be limited, and the board will still be taking shape. If you <span class=\"kw\">deploy</span> a high-value Unit too early, it will be vulnerable to heavy fire before you have enough board presence to support it. On the other hand, holding <span class=\"kw\">Units</span> in Reserve for too long will waste their potential. A good strategy is to start by deploying cheap <span class=\"kw\">Units</span> to contest <span class=\"kw\">Markers</span> and gather information, then <span class=\"kw\">deploy</span> your high-value <span class=\"kw\">Units</span> in Rounds 2 and 3.",
              "plain": "Abathur’s TIP: When you begin, resources will be limited, and the board will still be taking shape. If you deploy a high-value Unit too early, it will be vulnerable to heavy fire before you have enough board presence to support it. On the other hand, holding Units in Reserve for too long will waste their potential. A good strategy is to start by deploying cheap Units to contest Markers and gather information, then deploy your high-value Units in Rounds 2 and 3."
            }
          ]
        }
      ]
    },
    {
      "id": "8-4-phase-1-the-movement-phase",
      "title": "8.4 PHASE 1: THE MOVEMENT PHASE",
      "rows": [
        {
          "type": "text",
          "html": "The ground is constantly shifting even before the first shot is fired. Teams dig in, reinforcements pour in from above, and exhausted <span class=\"kw\">Units</span> fall back to regroup. During the Movement Phase, the battlefield terrain changes as a command decides where the battles will be fought.",
          "plain": "The ground is constantly shifting even before the first shot is fired. Teams dig in, reinforcements pour in from above, and exhausted Units fall back to regroup. During the Movement Phase, the battlefield terrain changes as a command decides where the battles will be fought."
        },
        {
          "type": "text",
          "html": "<b>At the start of the Movement Phase:</b>",
          "plain": "At the start of the Movement Phase:"
        },
        {
          "type": "bullet",
          "html": "Resolve all &quot; Start of the Round&quot; abilities and <b><span class=\"kw\">Tactical Cards</span></b>. The first player resolves their first if both players have effects.",
          "plain": "Resolve all \" Start of the Round\" abilities and Tactical Cards . The first player resolves their first if both players have effects."
        },
        {
          "type": "text",
          "html": "If a player has multiple ’Start of the Round’ effects to resolve, that player chooses the order in which their effects resolve. Each effect is fully resolved before the next begins.",
          "plain": "If a player has multiple ’Start of the Round’ effects to resolve, that player chooses the order in which their effects resolve. Each effect is fully resolved before the next begins."
        },
        {
          "type": "bullet",
          "html": "Verify <b><span class=\"kw\">Available Supply</span></b> for all players.",
          "plain": "Verify Available Supply for all players."
        }
      ],
      "children": [
        {
          "id": "8-4-1-activations",
          "title": "8.4.1 Activations",
          "rows": [
            {
              "type": "text",
              "html": "Orders are issued one at a time. A squad moves, a position is taken, and the <b><span class=\"kw\">Enemy</span></b> reacts. Every activation is a commitment.",
              "plain": "Orders are issued one at a time. A squad moves, a position is taken, and the Enemy reacts. Every activation is a commitment."
            },
            {
              "type": "text",
              "html": "On the <b><span class=\"kw\">Active Player</span>’s</b> turn, choose one:",
              "plain": "On the Active Player ’s turn, choose one:"
            },
            {
              "type": "bullet",
              "html": "<b>Activate a Unit on the battlefield without an Activation Marker</b>- perform a <b><span class=\"kw\">Move</span></b>, <b><span class=\"kw\">Hold</span></b> or <b><span class=\"kw\">Disengage</span></b> action.",
              "plain": "Activate a Unit on the battlefield without an Activation Marker - perform a Move , Hold or Disengage action."
            },
            {
              "type": "bullet",
              "html": "<b>Activate a Unit in <span class=\"kw\">Reserves</span> without an Activation Marker</b>- perform a <b><span class=\"kw\">Deploy</span></b> action to enter the battlefield.",
              "plain": "Activate a Unit in Reserves without an Activation Marker - perform a Deploy action to enter the battlefield."
            },
            {
              "type": "text",
              "html": "After the action, set an <b>Activation Marker (Movement side)</b> next to the Unit.",
              "plain": "After the action, set an Activation Marker (Movement side) next to the Unit."
            }
          ]
        },
        {
          "id": "8-4-2-passing",
          "title": "8.4.2 Passing",
          "rows": [
            {
              "type": "text",
              "html": "The first player to <b>Pass</b> takes the <b><span class=\"kw\">First Player Marker</span></b> for Phase 2. Set <b>Activation <span class=\"kw\">Markers</span></b> (Movement side) next to any on-table <span class=\"kw\">Units</span> that did not activate.",
              "plain": "The first player to Pass takes the First Player Marker for Phase 2. Set Activation Markers (Movement side) next to any on-table Units that did not activate."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> Making a <b>Pass</b> early in the Movement Phase is a game-changing <span class=\"kw\">move</span>. The first player to make a <b>Pass</b> gains the <b><span class=\"kw\">First Player Marker</span></b> for the Assault Phase and gets to shoot first. If you have already set up your key <span class=\"kw\">Units</span> or have nothing left to <span class=\"kw\">deploy</span>, make a <b>Pass</b> immediately. This allows you to gain perfect information as your opponent uses their <span class=\"kw\">activations</span>, while you observe. However, moving too early means missing opportunities to manoeuvre, so it’s a constant balancing act between the benefits of information and maintaining flexibility.",
              "plain": "Abathur’s TIP: Making a Pass early in the Movement Phase is a game-changing move . The first player to make a Pass gains the First Player Marker for the Assault Phase and gets to shoot first. If you have already set up your key Units or have nothing left to deploy , make a Pass immediately. This allows you to gain perfect information as your opponent uses their activations , while you observe. However, moving too early means missing opportunities to manoeuvre, so it’s a constant balancing act between the benefits of information and maintaining flexibility."
            }
          ]
        }
      ]
    },
    {
      "id": "8-5-movement-phase-actions",
      "title": "8.5 Movement Phase Actions",
      "rows": [],
      "children": [
        {
          "id": "8-5-1-hold",
          "title": "8.5.1 Hold",
          "rows": [
            {
              "type": "text",
              "html": "The Unit performs no action. Set an Activation Marker beside it.",
              "plain": "The Unit performs no action. Set an Activation Marker beside it."
            },
            {
              "type": "text",
              "html": "The Unit counts as Activated for the current Phase.",
              "plain": "The Unit counts as Activated for the current Phase."
            }
          ]
        },
        {
          "id": "8-5-2-move",
          "title": "8.5.2 Move",
          "rows": [
            {
              "type": "text",
              "html": "An <b><span class=\"kw\">Unengaged</span></b> Unit changes its position on the battlefield.",
              "plain": "An Unengaged Unit changes its position on the battlefield."
            }
          ]
        },
        {
          "id": "8-5-3-resolving-a-move",
          "title": "8.5.3 Resolving a Move",
          "rows": [
            {
              "type": "text",
              "html": "When a rule instructs a Unit to <span class=\"kw\">Move</span>, Run, or otherwise reposition using standard movement, resolve it as follows:",
              "plain": "When a rule instructs a Unit to Move , Run, or otherwise reposition using standard movement, resolve it as follows:"
            },
            {
              "type": "microhead",
              "html": "<b>STEP 1 - <span class=\"kw\">THE LEADING MODEL</span></b>",
              "plain": "STEP 1 - THE LEADING MODEL"
            },
            {
              "type": "bullet",
              "html": "Choose a <b><span class=\"kw\">Leading Model</span></b> and <span class=\"kw\">move</span> it up to the Unit’s <b>Speed</b> (see Part <span class=\"ref\">5. 1</span> for split <b>Speed</b> values). Measure the actual path travelled.",
              "plain": "Choose a Leading Model and move it up to the Unit’s Speed (see Part 5. 1 for split Speed values). Measure the actual path travelled."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b> may pass through <b><span class=\"kw\">Friendly</span></b> <span class=\"kw\">models</span> in its own Unit.",
              "plain": "The Leading Model may pass through Friendly models in its own Unit."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b> may <b>not</b> pass through <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> or <b><span class=\"kw\">Friendly</span></b> <span class=\"kw\">models</span> from other <span class=\"kw\">Units</span>. <b>Ground</b> <span class=\"kw\">models</span> may pass through a <b><span class=\"kw\">Flying</span></b> model’s base as if it were not there, and vice versa.",
              "plain": "The Leading Model may not pass through Enemy models or Friendly models from other Units . Ground models may pass through a Flying model’s base as if it were not there, and vice versa."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b><b>cannot</b> <span class=\"kw\">move</span> through terrain of Size 2 or larger.",
              "plain": "The Leading Model cannot move through terrain of Size 2 or larger."
            },
            {
              "type": "bullet",
              "html": "Follow <b>Gap Clearance</b> rules (Part <span class=\"ref\">4. 6</span>).",
              "plain": "Follow Gap Clearance rules (Part 4. 6 )."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span> cannot</b> change elevation unless it passes through an <b><span class=\"kw\">ACCESS POINT</span></b>.",
              "plain": "The Leading Model cannot change elevation unless it passes through an ACCESS POINT ."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b> may <b>not</b> end overlapping <span class=\"kw\">impassable terrain</span> or another model’s base.",
              "plain": "The Leading Model may not end overlapping impassable terrain or another model’s base."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span>’s</b> entire base must end on the battlefield.",
              "plain": "The Leading Model ’s entire base must end on the battlefield."
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b><b>cannot</b> end <b><span class=\"kw\">Within</span></b><b>1\"</b> (<b><span class=\"kw\">Engagement Range</span></b>) of an <b><span class=\"kw\">Enemy</span> Ground</b> Unit.",
              "plain": "The Leading Model cannot end Within 1\" ( Engagement Range ) of an Enemy Ground Unit."
            },
            {
              "type": "microhead",
              "html": "<b>STEP 2 - OTHER <span class=\"kw\">MODELS</span></b>",
              "plain": "STEP 2 - OTHER MODELS"
            },
            {
              "type": "bullet",
              "html": "Pick up all remaining <span class=\"kw\">models</span> and set them <b>In</b><b>Coherency</b> (Part <span class=\"ref\">4. 4</span>) around the <b><span class=\"kw\">Leading Model</span></b>.",
              "plain": "Pick up all remaining models and set them In Coherency (Part 4. 4 ) around the Leading Model ."
            },
            {
              "type": "bullet",
              "html": "These <span class=\"kw\">models</span> are set, not moved - they may ignore intervening obstacles. However, they <b>must</b> end in a legal position: no overlapping <span class=\"kw\">bases</span>, entire <span class=\"kw\">bases</span> on the battlefield, and not<b> <span class=\"kw\">Within</span> 1\"</b> of an <b><span class=\"kw\">Enemy</span></b> Unit.",
              "plain": "These models are set, not moved - they may ignore intervening obstacles. However, they must end in a legal position: no overlapping bases , entire bases on the battlefield, and not Within 1\" of an Enemy Unit."
            },
            {
              "type": "microhead",
              "html": "<b>TERRAIN INTERACTIONS</b>",
              "plain": "TERRAIN INTERACTIONS"
            },
            {
              "type": "bullet",
              "html": "<b>Size 0 &amp; Size 1:</b> Pass through freely. <b>Cannot</b> end movement overlapping the terrain’s footprint.",
              "plain": "Size 0 & Size 1: Pass through freely. Cannot end movement overlapping the terrain’s footprint."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Grass</span> (Size 2 - special case):</b> Refer to the <b><span class=\"kw\">GRASS</span></b> Keyword (Part 11) for the full rules. <span class=\"kw\">Grass</span> does not block movement but does block <b><span class=\"kw\">Line of Sight</span>,</b> following the standard <span class=\"kw\">Cover</span> rules (Part <span class=\"ref\">7. 1. 1</span>). If the <b><span class=\"kw\">Leading Model</span></b>’s path of travel passes through or any model of a Unit ends on a <span class=\"kw\">Grass</span> terrain piece, that <span class=\"kw\">Grass</span> piece is immediately removed from the game for the remainder of the battle.",
              "plain": "Grass (Size 2 - special case): Refer to the GRASS Keyword (Part 11) for the full rules. Grass does not block movement but does block Line of Sight , following the standard Cover rules (Part 7. 1. 1 ). If the Leading Model ’s path of travel passes through or any model of a Unit ends on a Grass terrain piece, that Grass piece is immediately removed from the game for the remainder of the battle."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Flying</span> <span class=\"kw\">Units</span>:</b> A <b><span class=\"kw\">Flying</span></b> Unit moving over <span class=\"kw\">Grass</span> does not destroy the <span class=\"kw\">Grass</span> terrain piece. <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> pass above the terrain, not through it. If any model of a <span class=\"kw\">Flying</span> Unit ends on a <span class=\"kw\">Grass</span> terrain piece, it is removed as normal.",
              "plain": "Flying Units : A Flying Unit moving over Grass does not destroy the Grass terrain piece. Flying models pass above the terrain, not through it. If any model of a Flying Unit ends on a Grass terrain piece, it is removed as normal."
            },
            {
              "type": "bullet",
              "html": "<b>Size 2 and larger:</b><b>Cannot</b> <span class=\"kw\">move</span> through.",
              "plain": "Size 2 and larger: Cannot move through."
            },
            {
              "type": "microhead",
              "html": "<b>ELEVATION</b>",
              "plain": "ELEVATION"
            },
            {
              "type": "text",
              "html": "<span class=\"kw\">Models</span> can stand one of three elevations:",
              "plain": "Models can stand one of three elevations:"
            },
            {
              "type": "bullet",
              "html": "<b>GROUND LEVEL:</b> Standing directly on the playmat.",
              "plain": "GROUND LEVEL: Standing directly on the playmat."
            },
            {
              "type": "bullet",
              "html": "<b>MID GROUND:</b> Standing on horizontal terrain of Size 1 or 2.",
              "plain": "MID GROUND: Standing on horizontal terrain of Size 1 or 2."
            },
            {
              "type": "bullet",
              "html": "<b>HIGH GROUND:</b> Standing on horizontal terrain of Size 3 or larger.",
              "plain": "HIGH GROUND: Standing on horizontal terrain of Size 3 or larger."
            },
            {
              "type": "text",
              "html": "The model stands on Elevation if its entire base is at that elevation. If the model’s base is on multiple elevation levels, assume it is standing on the lowest of those elevations.",
              "plain": "The model stands on Elevation if its entire base is at that elevation. If the model’s base is on multiple elevation levels, assume it is standing on the lowest of those elevations."
            },
            {
              "type": "text",
              "html": "<b>ACCESS POINTS</b> connect different elevation levels. <span class=\"kw\">Models</span> change elevation only by moving through an <b><span class=\"kw\">ACCESS POINT</span></b> (examples: ladders, portals, doors).",
              "plain": "ACCESS POINTS connect different elevation levels. Models change elevation only by moving through an ACCESS POINT (examples: ladders, portals, doors)."
            },
            {
              "type": "text",
              "html": "<b>RAMPS</b> are Size 1 <b>MID GROUND</b> terrain. A model on a ramp at any point along its surface is at <b>MID GROUND</b> elevation. <span class=\"kw\">Models</span> cannot pass through a ramp freely - they may only enter and exit through the ramp’s two <b>ACCESS POINTS</b> (one at the base, one at the top) and may end their movement on the ramp.",
              "plain": "RAMPS are Size 1 MID GROUND terrain. A model on a ramp at any point along its surface is at MID GROUND elevation. Models cannot pass through a ramp freely - they may only enter and exit through the ramp’s two ACCESS POINTS (one at the base, one at the top) and may end their movement on the ramp."
            },
            {
              "type": "microhead",
              "html": "<b><span class=\"kw\">FLYING</span> <span class=\"kw\">MOVE</span></b>",
              "plain": "FLYING MOVE"
            },
            {
              "type": "text",
              "html": "<span class=\"kw\">Units</span> with the <b><span class=\"kw\">Flying</span> Combat Tag</b> ignore all normal movement restrictions. The <b><span class=\"kw\">Leading Model</span></b> moves point-to-point, ignoring all terrain and <span class=\"kw\">models</span> between the start and end. Other <span class=\"kw\">models</span> may pass through a <b><span class=\"kw\">Flying</span></b> model’s base as if it were not there.",
              "plain": "Units with the Flying Combat Tag ignore all normal movement restrictions. The Leading Model moves point-to-point, ignoring all terrain and models between the start and end. Other models may pass through a Flying model’s base as if it were not there."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Flying</span> <span class=\"kw\">Units</span> and <span class=\"kw\">Engagement Range</span>:</b>",
              "plain": "Flying Units and Engagement Range :"
            },
            {
              "type": "bullet",
              "html": "A <b><span class=\"kw\">Flying</span></b> Unit may end its movement in <b>Base-to-Base</b> contact with <b>Ground</b> <span class=\"kw\">Units</span> and vice versa - <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> are <b>never</b><b><span class=\"kw\">Engaged</span></b>, and this proximity has no effect on either Unit’s ability to act.",
              "plain": "A Flying Unit may end its movement in Base-to-Base contact with Ground Units and vice versa - Flying models are never Engaged , and this proximity has no effect on either Unit’s ability to act."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> are never <b><span class=\"kw\">Engaged</span></b> (Part <span class=\"ref\">7. 2. 1</span>). A <b><span class=\"kw\">Flying</span></b> Unit <b>must</b> end its movement at least <b>1\"</b> away from all <b><span class=\"kw\">Enemy</span> <span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span>.",
              "plain": "Flying models are never Engaged (Part 7. 2. 1 ). A Flying Unit must end its movement at least 1\" away from all Enemy Flying Units ."
            }
          ]
        },
        {
          "id": "8-5-4-disengage",
          "title": "8.5.4 Disengage",
          "rows": [
            {
              "type": "text",
              "html": "The most challenging manoeuvre a squad will ever make is to pull back under heavy fire. Losing the initiative on a pinned position demands calm discipline, swift action, and enough firepower to keep the pursuers at bay.",
              "plain": "The most challenging manoeuvre a squad will ever make is to pull back under heavy fire. Losing the initiative on a pinned position demands calm discipline, swift action, and enough firepower to keep the pursuers at bay."
            },
            {
              "type": "text",
              "html": "An <b><span class=\"kw\">Engaged</span></b> Unit withdraws from melee.",
              "plain": "An Engaged Unit withdraws from melee."
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Move</span> it following the standard <span class=\"kw\">Move</span> rules (Part <span class=\"ref\">8. 5. 3</span>).",
              "plain": "Move it following the standard Move rules (Part 8. 5. 3 )."
            },
            {
              "type": "bullet",
              "html": "Any individual model that cannot end its movement strictly outside the <b><span class=\"kw\">Engagement Range</span></b> of all <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> is immediately removed and considered Destroyed. Other <span class=\"kw\">models</span> in the Unit that successfully clear the <b><span class=\"kw\">Engagement Range</span></b> remain unaffected - the Unit continues with its remaining <span class=\"kw\">models</span>.",
              "plain": "Any individual model that cannot end its movement strictly outside the Engagement Range of all Enemy Units is immediately removed and considered Destroyed. Other models in the Unit that successfully clear the Engagement Range remain unaffected - the Unit continues with its remaining models ."
            },
            {
              "type": "bullet",
              "html": "If the <b><span class=\"kw\">Leading Model</span></b> itself cannot end its movement outside the <b><span class=\"kw\">Engagement Range</span></b> of all <b><span class=\"kw\">Enemy</span> <span class=\"kw\">Units</span></b>, the <b><span class=\"kw\">Disengage</span></b> fails. The Unit does not <span class=\"kw\">move</span>,<b> <span class=\"kw\">the leading model</span></b> is removed, and the <b>Unit’s</b> activation ends.",
              "plain": "If the Leading Model itself cannot end its movement outside the Engagement Range of all Enemy Units , the Disengage fails. The Unit does not move , the leading model is removed, and the Unit’s activation ends."
            },
            {
              "type": "bullet",
              "html": "A Unit that <b>Disengages cannot</b> perform <b><span class=\"kw\">Ranged Attack</span></b> or <b><span class=\"kw\">Charge</span></b> in the following Assault Phase - unless its <b><span class=\"kw\">Current Supply Value</span></b> is greater than the Combined Supply of all enemies it was <b><span class=\"kw\">Engaged</span></b> with.",
              "plain": "A Unit that Disengages cannot perform Ranged Attack or Charge in the following Assault Phase - unless its Current Supply Value is greater than the Combined Supply of all enemies it was Engaged with."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> The <span class=\"kw\">Tactical Mass</span> exception to the <b><span class=\"kw\">Disengage</span></b> penalty prevents small screening <span class=\"kw\">Units</span> from holding up a much larger and more valuable force indefinitely. It should not be possible for a small group of Zerglings to <span class=\"kw\">hold</span> up a Siege Tank <span class=\"kw\">locked in</span> melee indefinitely. When the disengaging Unit has significantly more mass than its opponent, it has the mass to <b><span class=\"kw\">Disengage</span></b> and still operate at full effectiveness. This creates a paradox: <span class=\"kw\">Units</span> that slow down the <b><span class=\"kw\">Enemy</span></b> have limited ability to stop them completely.",
              "plain": "DESIGNER’S NOTE: The Tactical Mass exception to the Disengage penalty prevents small screening Units from holding up a much larger and more valuable force indefinitely. It should not be possible for a small group of Zerglings to hold up a Siege Tank locked in melee indefinitely. When the disengaging Unit has significantly more mass than its opponent, it has the mass to Disengage and still operate at full effectiveness. This creates a paradox: Units that slow down the Enemy have limited ability to stop them completely."
            }
          ]
        },
        {
          "id": "8-5-5-deploy",
          "title": "8.5.5 Deploy",
          "rows": [
            {
              "type": "text",
              "html": "The moment boots hit the ground, there is no going back. Timing a <span class=\"kw\">deployment</span> correctly can swing an entire flank. Timing it wrong feeds reinforcements into a meat grinder.",
              "plain": "The moment boots hit the ground, there is no going back. Timing a deployment correctly can swing an entire flank. Timing it wrong feeds reinforcements into a meat grinder."
            },
            {
              "type": "text",
              "html": "A Unit from<b> <span class=\"kw\">Reserves</span></b> enters the battlefield.",
              "plain": "A Unit from Reserves enters the battlefield."
            },
            {
              "type": "bullet",
              "html": "Confirm the Unit’s <b><span class=\"kw\">Current Supply Value</span></b> fits <span class=\"kw\">within</span> the <b><span class=\"kw\">Available Supply</span></b>.",
              "plain": "Confirm the Unit’s Current Supply Value fits within the Available Supply ."
            },
            {
              "type": "bullet",
              "html": "Set the <b><span class=\"kw\">Leading Model</span></b> in contact with the player&#x27; s <b><span class=\"kw\">Entry Edge</span></b> outside of the battlefield, then <span class=\"kw\">move</span> it up to the Unit&#x27; s <b>Speed</b> following standard <span class=\"kw\">move</span> rules (Part <span class=\"ref\">8. 5. 3</span>).",
              "plain": "Set the Leading Model in contact with the player' s Entry Edge outside of the battlefield, then move it up to the Unit' s Speed following standard move rules (Part 8. 5. 3 )."
            },
            {
              "type": "text",
              "html": "<b>&lt;<visual example=\"\">&gt;</visual></b>",
              "plain": "< >"
            },
            {
              "type": "bullet",
              "html": "Threat the <b><span class=\"kw\">Entry Edge</span></b> as a base of a <b><span class=\"kw\">Leading Model</span></b>, then <span class=\"kw\">move</span> it up to the unit&#x27; s speed following standard <span class=\"kw\">move</span> rules. (Part <span class=\"ref\">8. 5. 3</span>)",
              "plain": "Threat the Entry Edge as a base of a Leading Model , then move it up to the unit' s speed following standard move rules. (Part 8. 5. 3 )"
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b> enters first. Set the rest of the Unit <b>In</b><b>Coherency</b>.",
              "plain": "The Leading Model enters first. Set the rest of the Unit In Coherency ."
            },
            {
              "type": "bullet",
              "html": "The Unit <b>cannot</b> finish its activation <span class=\"kw\">within</span> the <span class=\"kw\">enemy</span>’s <b><span class=\"kw\">Zone of Influence</span></b>.",
              "plain": "The Unit cannot finish its activation within the enemy ’s Zone of Influence ."
            },
            {
              "type": "microhead",
              "html": "<b><span class=\"kw\">UNITS</span> RETURNED TO <span class=\"kw\">RESERVES</span></b>",
              "plain": "UNITS RETURNED TO RESERVES"
            },
            {
              "type": "text",
              "html": "Some rules will remove the Unit from the battlefield and return it to the <b><span class=\"kw\">Reserves</span></b>. The Unit is not Destroyed; it has left the battlefield. When the Unit is returned to the <b><span class=\"kw\">Reserves</span></b>, the <b>Current Supply</b> used by the Unit is released, and the <b><span class=\"kw\">Available Supply</span></b> is recalculated from that moment onwards.",
              "plain": "Some rules will remove the Unit from the battlefield and return it to the Reserves . The Unit is not Destroyed; it has left the battlefield. When the Unit is returned to the Reserves , the Current Supply used by the Unit is released, and the Available Supply is recalculated from that moment onwards."
            },
            {
              "type": "text",
              "html": "The Unit keeps all the equipment it had when it left the battlefield. The <b>Damage</b> recorded by the <b>Damage Marker</b> that the Unit suffered before it was removed remains with the Unit. When the Unit is redeployed, it will carry the same <b>Damage</b>.",
              "plain": "The Unit keeps all the equipment it had when it left the battlefield. The Damage recorded by the Damage Marker that the Unit suffered before it was removed remains with the Unit. When the Unit is redeployed, it will carry the same Damage ."
            },
            {
              "type": "text",
              "html": "Any buffs, debuffs, or mission effects with a set duration &quot; until the End of the Round&quot; and similar effects stay on the Unit. However, the clock does not pause just because the Unit has left. If an effect were to expire during <span class=\"kw\">Cleanup &amp; Refresh</span> (Part <span class=\"ref\">8. 9. 5</span>), it still would, whether the Unit is on the table or not.",
              "plain": "Any buffs, debuffs, or mission effects with a set duration \" until the End of the Round\" and similar effects stay on the Unit. However, the clock does not pause just because the Unit has left. If an effect were to expire during Cleanup & Refresh (Part 8. 9. 5 ), it still would, whether the Unit is on the table or not."
            },
            {
              "type": "text",
              "html": "While in <b><span class=\"kw\">Reserves</span></b>, the Unit keeps all its <b>Active</b>, <b>Passive</b>, and <b><span class=\"kw\">Reaction Abilities</span></b>, but none of them function. They cannot be triggered, they produce no effects, and they cannot be used to pay costs or respond to events. They are on the card, not on the battlefield. When the Unit redeploys, all its abilities resume immediately unless an ability explicitly states otherwise.",
              "plain": "While in Reserves , the Unit keeps all its Active , Passive , and Reaction Abilities , but none of them function. They cannot be triggered, they produce no effects, and they cannot be used to pay costs or respond to events. They are on the card, not on the battlefield. When the Unit redeploys, all its abilities resume immediately unless an ability explicitly states otherwise."
            },
            {
              "type": "text",
              "html": "However, the <span class=\"kw\">Tokens</span> and <span class=\"kw\">Markers</span> that the Unit left behind on the battlefield will be removed, unless they have the <b><span class=\"kw\">STAY IN PLAY</span></b> keyword.",
              "plain": "However, the Tokens and Markers that the Unit left behind on the battlefield will be removed, unless they have the STAY IN PLAY keyword."
            },
            {
              "type": "text",
              "html": "If the Unit was <b>Activated</b> during the current Phase, once it is returned to the <b><span class=\"kw\">Reserves</span></b>, it will remain <b>Activated</b> and will not be able to take further action <span class=\"kw\">within</span> the current Phase.",
              "plain": "If the Unit was Activated during the current Phase, once it is returned to the Reserves , it will remain Activated and will not be able to take further action within the current Phase."
            }
          ]
        }
      ]
    },
    {
      "id": "8-6-phase-2-the-assault-phase",
      "title": "8.6 PHASE 2: THE ASSAULT PHASE",
      "rows": [
        {
          "type": "text",
          "html": "It is here that the line finally breaks. Gauss Rifle fire cracks along the fire lanes, siege shells soar over the barricades, and Zealots <span class=\"kw\">charge</span> the last metres in a last-ditch push. The Assault Phase is when the <b>Damage</b> is done, <b>Ranged Attacks</b> tear through exposed <span class=\"kw\">Units</span>, and <b>Charges</b> strike defenders who chose a poor position.",
          "plain": "It is here that the line finally breaks. Gauss Rifle fire cracks along the fire lanes, siege shells soar over the barricades, and Zealots charge the last metres in a last-ditch push. The Assault Phase is when the Damage is done, Ranged Attacks tear through exposed Units , and Charges strike defenders who chose a poor position."
        }
      ],
      "children": [
        {
          "id": "8-6-1-activations",
          "title": "8.6.1 Activations",
          "rows": [
            {
              "type": "text",
              "html": "On the <b><span class=\"kw\">Active Player</span>’s</b> turn, activate a Unit with an <b>Activation Marker</b> (Movement side) and select one action: <b>Run</b>, <b><span class=\"kw\">Hold</span></b>, <b><span class=\"kw\">Charge</span></b>, or <b><span class=\"kw\">Ranged Attack</span>.</b> After completing the action, set an <b>Activation Marker</b> (Assault side) next to it. <span class=\"kw\">Units</span> still in <b><span class=\"kw\">Reserves</span></b> cannot act during this Phase.",
              "plain": "On the Active Player ’s turn, activate a Unit with an Activation Marker (Movement side) and select one action: Run , Hold , Charge , or Ranged Attack . After completing the action, set an Activation Marker (Assault side) next to it. Units still in Reserves cannot act during this Phase."
            }
          ]
        },
        {
          "id": "8-6-2-passing",
          "title": "8.6.2 Passing",
          "rows": [
            {
              "type": "text",
              "html": "The first player to <b>Pass</b> takes the <b><span class=\"kw\">First Player Marker</span></b> for Phase 3. Set <b>Activation <span class=\"kw\">Markers</span></b> (Assault side) next to any <span class=\"kw\">Units</span> that did not activate.",
              "plain": "The first player to Pass takes the First Player Marker for Phase 3. Set Activation Markers (Assault side) next to any Units that did not activate."
            }
          ]
        }
      ]
    },
    {
      "id": "8-7-assault-phase-actions",
      "title": "8.7 Assault Phase Actions",
      "rows": [],
      "children": [
        {
          "id": "8-7-1-run",
          "title": "8.7.1 Run",
          "rows": [
            {
              "type": "text",
              "html": "Sometimes the best use of a Unit&#x27; s activation is not to fight at all. A squad repositioning to claim a Marker next Round, a flanking force closing the gap before a decisive <span class=\"kw\">Charge</span>, or a screening Unit pulling back from an exposed position are all valid reasons to give up an entire Assault Phase activation without firing a shot.",
              "plain": "Sometimes the best use of a Unit' s activation is not to fight at all. A squad repositioning to claim a Marker next Round, a flanking force closing the gap before a decisive Charge , or a screening Unit pulling back from an exposed position are all valid reasons to give up an entire Assault Phase activation without firing a shot."
            },
            {
              "type": "text",
              "html": "An <b><span class=\"kw\">Unengaged</span></b> Unit moves across the battlefield following the standard <span class=\"kw\">Move</span> rules (Part <span class=\"ref\">8. 5. 3</span>). The procedure is identical to a Movement Phase <span class=\"kw\">Move</span>:",
              "plain": "An Unengaged Unit moves across the battlefield following the standard Move rules (Part 8. 5. 3 ). The procedure is identical to a Movement Phase Move :"
            },
            {
              "type": "text",
              "html": "Nominate a <b><span class=\"kw\">Leading Model</span></b>, <span class=\"kw\">move</span> it up to the Unit&#x27; s <b>Speed</b>, and set remaining <span class=\"kw\">models</span><b>In Coherency</b>. All standard restrictions apply, including Gap Clearance (Part <span class=\"ref\">4. 6</span>) and the prohibition on ending <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>.",
              "plain": "Nominate a Leading Model , move it up to the Unit' s Speed , and set remaining models In Coherency . All standard restrictions apply, including Gap Clearance (Part 4. 6 ) and the prohibition on ending Within the Engagement Range of Enemy Units ."
            },
            {
              "type": "text",
              "html": "<b>Abathur's TIP:</b> Running in the Assault Phase is one of the most underused tools available to a new player. If your Unit cannot reach a worthwhile target with a <b><span class=\"kw\">Ranged Attack</span></b> or <b><span class=\"kw\">Charge</span></b>, do not waste the activation on a <span class=\"kw\">Hold</span>. Use the Run to close the distance for the next Round, reposition onto a <b>Mission Marker</b>, or pull back behind <span class=\"kw\">Cover</span> before the <b><span class=\"kw\">Enemy</span></b> can respond. Two Moves across two Phases (a <span class=\"kw\">Move</span> in Phase 1 followed by a Run in Phase 2) will <span class=\"kw\">cover</span> twice the ground of a single <span class=\"kw\">Move</span>, and that extra distance can be the difference between contesting an objective and watching your opponent score it unopposed.",
              "plain": "Abathur's TIP: Running in the Assault Phase is one of the most underused tools available to a new player. If your Unit cannot reach a worthwhile target with a Ranged Attack or Charge , do not waste the activation on a Hold . Use the Run to close the distance for the next Round, reposition onto a Mission Marker , or pull back behind Cover before the Enemy can respond. Two Moves across two Phases (a Move in Phase 1 followed by a Run in Phase 2) will cover twice the ground of a single Move , and that extra distance can be the difference between contesting an objective and watching your opponent score it unopposed."
            }
          ]
        },
        {
          "id": "8-7-2-hold",
          "title": "8.7.2 Hold",
          "rows": [
            {
              "type": "text",
              "html": "The Unit does not take any action. Set an <b>Activation Marker</b> (Assault side).",
              "plain": "The Unit does not take any action. Set an Activation Marker (Assault side)."
            }
          ]
        },
        {
          "id": "8-7-3-ranged-attack",
          "title": "8.7.3 Ranged Attack",
          "rows": [
            {
              "type": "text",
              "html": "Fire is the language of the Assault Phase. A volley of Gauss Rifle rounds tears through a Unit caught crossing open ground. A <span class=\"kw\">Hydralisk</span> spine salvo pins down an advancing squad behind a wall. A single Siege Tank shell lands among a cluster of infantry and scatters them. Every ranged weapon on the battlefield has the potential to reshape the fight before the <span class=\"kw\">enemy</span> can close the distance, but only if the shot is aimed at the right target, at the right time, with the right weapon.",
              "plain": "Fire is the language of the Assault Phase. A volley of Gauss Rifle rounds tears through a Unit caught crossing open ground. A Hydralisk spine salvo pins down an advancing squad behind a wall. A single Siege Tank shell lands among a cluster of infantry and scatters them. Every ranged weapon on the battlefield has the potential to reshape the fight before the enemy can close the distance, but only if the shot is aimed at the right target, at the right time, with the right weapon."
            },
            {
              "type": "text",
              "html": "A <span class=\"kw\">Ranged Attack</span> is resolved in two stages. First, the attacking player selects a valid target and assigns weapons to it. Second, the attack is resolved through the three-pool system: <span class=\"kw\">dice</span> <span class=\"kw\">move</span> from the Attack Pool through the Armour Pool to the Damage Pool, with each stage giving both sides a chance to influence the outcome. <span class=\"kw\">Units</span> with multiple weapon profiles may split their fire across different targets, resolving each weapon as a separate Batch.",
              "plain": "A Ranged Attack is resolved in two stages. First, the attacking player selects a valid target and assigns weapons to it. Second, the attack is resolved through the three-pool system: dice move from the Attack Pool through the Armour Pool to the Damage Pool, with each stage giving both sides a chance to influence the outcome. Units with multiple weapon profiles may split their fire across different targets, resolving each weapon as a separate Batch."
            },
            {
              "type": "microhead",
              "html": "<b>1. TARGET ELIGIBILITY</b>",
              "plain": "1. TARGET ELIGIBILITY"
            },
            {
              "type": "text",
              "html": "A valid target <b>must</b> meet all of the following criteria:",
              "plain": "A valid target must meet all of the following criteria:"
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Visible</span></b> <span class=\"kw\">models</span> from the target Unit are <b><span class=\"kw\">Within</span></b> the weapon’s maximum <b>Range</b>. Measure from the attacking model’s base to the target model’s base.",
              "plain": "Visible models from the target Unit are Within the weapon’s maximum Range . Measure from the attacking model’s base to the target model’s base."
            },
            {
              "type": "bullet",
              "html": "Only <span class=\"kw\">models</span><b><span class=\"kw\">Within</span></b> Range and <span class=\"kw\">Visible</span> contribute <span class=\"kw\">dice</span> to the Attack Roll.",
              "plain": "Only models Within Range and Visible contribute dice to the Attack Roll."
            },
            {
              "type": "bullet",
              "html": "The target’s <b>Combat Tag</b> matches the weapon’s target characteristic (<b>Ground</b>, <b><span class=\"kw\">Flying</span></b> or <b>All</b>).",
              "plain": "The target’s Combat Tag matches the weapon’s target characteristic ( Ground , Flying or All )."
            },
            {
              "type": "bullet",
              "html": "<b>Engagement <span class=\"kw\">Status</span>:</b> An <b><span class=\"kw\">Unengaged</span></b> attacking Unit cannot select an <b><span class=\"kw\">Engaged</span></b> Unit as a target (except <span class=\"kw\">Spillover</span> from <span class=\"kw\">Template Weapons</span> - see Part <span class=\"ref\">8. 7. 6</span>). An <b><span class=\"kw\">Engaged</span></b> attacking Unit may only target the Unit(s) it is currently <b><span class=\"kw\">Engaged</span></b> with.",
              "plain": "Engagement Status : An Unengaged attacking Unit cannot select an Engaged Unit as a target (except Spillover from Template Weapons - see Part 8. 7. 6 ). An Engaged attacking Unit may only target the Unit(s) it is currently Engaged with."
            },
            {
              "type": "microhead",
              "html": "<b>2. WEAPON SELECTION AND BATCHING</b>",
              "plain": "2. WEAPON SELECTION AND BATCHING"
            },
            {
              "type": "text",
              "html": "Each model fires one of its available Assault Phase weapons. All <span class=\"kw\">models</span> using the same <b>Weapon Profile</b> must fire at the same target - the player cannot split a single profile’s fire. A Batch consists of all <span class=\"kw\">models</span> firing the same weapon at the same target. This same-profile, same-target rule applies to <b><span class=\"kw\">SIDEARM</span></b> weapons as well - all <span class=\"kw\">models</span> firing the same <b><span class=\"kw\">SIDEARM</span></b> profile must target the same Unit, although that Unit may differ from the target of the Unit’s other weapons.",
              "plain": "Each model fires one of its available Assault Phase weapons. All models using the same Weapon Profile must fire at the same target - the player cannot split a single profile’s fire. A Batch consists of all models firing the same weapon at the same target. This same-profile, same-target rule applies to SIDEARM weapons as well - all models firing the same SIDEARM profile must target the same Unit, although that Unit may differ from the target of the Unit’s other weapons."
            },
            {
              "type": "text",
              "html": "<b>REMOVING <span class=\"kw\">DICE</span>:</b> When a <b><span class=\"kw\">Special Ability</span></b> reduces the number of <span class=\"kw\">dice</span> <span class=\"kw\">within</span> a Batch, the player controlling the Unit resolving that ability chooses which <span class=\"kw\">dice</span> are removed.",
              "plain": "REMOVING DICE : When a Special Ability reduces the number of dice within a Batch, the player controlling the Unit resolving that ability chooses which dice are removed."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> Batch sequencing provides a slight advantage. By declaring and resolving each Batch individually, you can use the first Batch to weaken or eliminate your target, then modify the second Batch depending on the result. If your Unit has two weapon profiles, use the one more likely to eliminate your <b>Damaged <span class=\"kw\">Enemy</span></b> first. If that works out, your second profile can be used to engage a new <span class=\"kw\">enemy</span>. Remember that if your <span class=\"kw\">models</span> have the same weapon, they must fire at the same target. When building your army, <span class=\"kw\">Units</span> with single powerful weapon profiles are more <b>Damage</b>-focused but less flexible, while <span class=\"kw\">Units</span> with multiple profile <b>Damage</b> are more flexible with multiple targets.",
              "plain": "Abathur’s TIP: Batch sequencing provides a slight advantage. By declaring and resolving each Batch individually, you can use the first Batch to weaken or eliminate your target, then modify the second Batch depending on the result. If your Unit has two weapon profiles, use the one more likely to eliminate your Damaged Enemy first. If that works out, your second profile can be used to engage a new enemy . Remember that if your models have the same weapon, they must fire at the same target. When building your army, Units with single powerful weapon profiles are more Damage -focused but less flexible, while Units with multiple profile Damage are more flexible with multiple targets."
            },
            {
              "type": "text",
              "html": "If a Unit has multiple Weapon Profiles, it may fire at different targets - resolved in separate Batches.",
              "plain": "If a Unit has multiple Weapon Profiles, it may fire at different targets - resolved in separate Batches."
            },
            {
              "type": "text",
              "html": "<b>BATCH SEQUENCE:</b> Declare the target of one Batch, resolve it fully, and then declare the next Batch. The player does not declare all targets simultaneously.",
              "plain": "BATCH SEQUENCE: Declare the target of one Batch, resolve it fully, and then declare the next Batch. The player does not declare all targets simultaneously."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> If a Batch Destroys the <b><span class=\"kw\">Enemy</span></b> Unit your <b><span class=\"kw\">Friendly</span></b> Unit was <b><span class=\"kw\">Engaged</span></b> with, that <b><span class=\"kw\">Friendly</span></b> Unit immediately becomes <b><span class=\"kw\">Unengaged</span></b> (unless still <b><span class=\"kw\">Engaged</span></b> with another <span class=\"kw\">enemy</span>). Remaining Batches may target freely.",
              "plain": "DESIGNER’S NOTE: If a Batch Destroys the Enemy Unit your Friendly Unit was Engaged with, that Friendly Unit immediately becomes Unengaged (unless still Engaged with another enemy ). Remaining Batches may target freely."
            }
          ]
        },
        {
          "id": "8-7-4-ranged-attack-resolution",
          "title": "8.7.4 Ranged Attack Resolution",
          "rows": [
            {
              "type": "text",
              "html": "Every attack is resolved by moving <span class=\"kw\">dice</span> through three pools. <span class=\"kw\">Dice</span> begin in the Attack Pool, pass through the <b>Armour Pool</b>, and end in the <b>Damage Pool</b>. <span class=\"kw\">Dice</span> that survive the entire sequence inflict casualties.",
              "plain": "Every attack is resolved by moving dice through three pools. Dice begin in the Attack Pool, pass through the Armour Pool , and end in the Damage Pool . Dice that survive the entire sequence inflict casualties."
            },
            {
              "type": "text",
              "html": "<b>Attack Pool.</b> Generate a number of <span class=\"kw\">dice</span> equal to each attacking model’s <b>Rate of Attack (RoA)</b>. Roll all <span class=\"kw\">dice</span> in this pool against the weapon’s <b>Hit</b> characteristic. Each die that meets or exceeds the <b>Hit</b> value is a success. <span class=\"kw\">Move</span> it to the <b>Armour Pool</b>. Discard all failures.",
              "plain": "Attack Pool. Generate a number of dice equal to each attacking model’s Rate of Attack (RoA) . Roll all dice in this pool against the weapon’s Hit characteristic. Each die that meets or exceeds the Hit value is a success. Move it to the Armour Pool . Discard all failures."
            },
            {
              "type": "text",
              "html": "<b>Armour Pool.</b> The defender rolls all <span class=\"kw\">dice</span> in this pool against the target Unit’s <b>Armour</b> characteristic. Each die that meets or exceeds the <b>Armour</b> value is a success. Discard it. <span class=\"kw\">Move</span> all failures to the <b>Damage Pool</b>. Some effects bypass this roll entirely: <span class=\"kw\">dice</span> moved out of the <b>Armour Pool</b> by Surge or <b><span class=\"kw\">CRITICAL HIT</span></b> are set directly into the <b>Damage Pool</b> without an<b> Armour Roll</b>.",
              "plain": "Armour Pool. The defender rolls all dice in this pool against the target Unit’s Armour characteristic. Each die that meets or exceeds the Armour value is a success. Discard it. Move all failures to the Damage Pool . Some effects bypass this roll entirely: dice moved out of the Armour Pool by Surge or CRITICAL HIT are set directly into the Damage Pool without an Armour Roll ."
            },
            {
              "type": "text",
              "html": "<b>Damage Pool.</b> Each die remaining in this pool inflicts <b>Damage</b> equal to the weapon’s <b>Damage</b> characteristic. If the target Unit is eligible for an <b>Evade Roll</b>, the defender rolls all <span class=\"kw\">dice</span> in this pool against the Unit’s <b>Evade</b> characteristic before <b>Damage</b> is applied. Each die that meets or exceeds the <b>Evade</b> value is a success and is discarded. Remaining <span class=\"kw\">dice</span> inflict <b>Damage</b> as normal.",
              "plain": "Damage Pool. Each die remaining in this pool inflicts Damage equal to the weapon’s Damage characteristic. If the target Unit is eligible for an Evade Roll , the defender rolls all dice in this pool against the Unit’s Evade characteristic before Damage is applied. Each die that meets or exceeds the Evade value is a success and is discarded. Remaining dice inflict Damage as normal."
            },
            {
              "type": "text",
              "html": "Resolve each Batch in sequence:",
              "plain": "Resolve each Batch in sequence:"
            },
            {
              "type": "microhead",
              "html": "<b>1. ROLL TO HIT</b>",
              "plain": "1. ROLL TO HIT"
            },
            {
              "type": "bullet",
              "html": "For each attacking model with an eligible target, add <span class=\"kw\">dice</span> equal to the weapon’s <b>RoA</b> to the Attack Pool.",
              "plain": "For each attacking model with an eligible target, add dice equal to the weapon’s RoA to the Attack Pool."
            },
            {
              "type": "bullet",
              "html": "If the weapon has an <b>S <span class=\"kw\">Dice</span></b> characteristic, add one <b>Surge Die</b> (use a different colour). If there is no S <span class=\"kw\">Dice</span>, the Surge Result is 0.",
              "plain": "If the weapon has an S Dice characteristic, add one Surge Die (use a different colour). If there is no S Dice , the Surge Result is 0."
            },
            {
              "type": "bullet",
              "html": "Roll all Attack <span class=\"kw\">Dice</span>. Results equal to or higher than the weapon’s <b>Hit</b> value are successes. <span class=\"kw\">Move</span> successful <span class=\"kw\">dice</span> to the <b>Armour Pool</b>.",
              "plain": "Roll all Attack Dice . Results equal to or higher than the weapon’s Hit value are successes. Move successful dice to the Armour Pool ."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> If <span class=\"kw\">dice</span> in the same Batch have different <span class=\"kw\">modifiers</span>, roll them separately. It still counts as the same Batch.",
              "plain": "DESIGNER’S NOTE: If dice in the same Batch have different modifiers , roll them separately. It still counts as the same Batch."
            },
            {
              "type": "microhead",
              "html": "<b>2. RESOLVE SURGE</b>",
              "plain": "2. RESOLVE SURGE"
            },
            {
              "type": "bullet",
              "html": "Check if the target Unit’s <b>Combat Tag</b> matches the weapon’s <b>Surge Type</b>. If not, the <b>Surge Die</b> result is ignored entirely - discard it. No <span class=\"kw\">dice</span> <span class=\"kw\">move</span> from the <b>Armour Pool</b> at this step.",
              "plain": "Check if the target Unit’s Combat Tag matches the weapon’s Surge Type . If not, the Surge Die result is ignored entirely - discard it. No dice move from the Armour Pool at this step."
            },
            {
              "type": "bullet",
              "html": "If it matches, <span class=\"kw\">move</span> a number of <span class=\"kw\">dice</span> equal to the <b>Surge Die result</b> from the <b>Armour Pool</b> directly to the <b>Damage Pool</b>. These bypass <b>Armour</b> entirely. Surge can <b>never</b> <span class=\"kw\">move</span> more <span class=\"kw\">dice</span> than are currently in the <b>Armour Pool</b>.",
              "plain": "If it matches, move a number of dice equal to the Surge Die result from the Armour Pool directly to the Damage Pool . These bypass Armour entirely. Surge can never move more dice than are currently in the Armour Pool ."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> Surge stands out as one of the most efficient sources of <b>Damage</b> because <b>Surge <span class=\"kw\">Dice</span></b> bypasses the entire Armour rolling process. Before firing off any Rounds, always check that the <b>Surge Type</b> of your chosen weapon aligns with the target’s Combat Tag. Using Anti-<b>Ground</b> Surge on a <b>Ground</b> target can double or triple your <b>Damage</b> output compared to firing at a <b><span class=\"kw\">Flying</span></b> target with the same weapon. When building your army, be sure to select weapons with <b>Surge Types</b> that match the <span class=\"kw\">Combat Tags</span> you are most likely to encounter.",
              "plain": "Abathur’s TIP: Surge stands out as one of the most efficient sources of Damage because Surge Dice bypasses the entire Armour rolling process. Before firing off any Rounds, always check that the Surge Type of your chosen weapon aligns with the target’s Combat Tag. Using Anti- Ground Surge on a Ground target can double or triple your Damage output compared to firing at a Flying target with the same weapon. When building your army, be sure to select weapons with Surge Types that match the Combat Tags you are most likely to encounter."
            },
            {
              "type": "microhead",
              "html": "<b>3. ARMOUR ROLLS</b>",
              "plain": "3. ARMOUR ROLLS"
            },
            {
              "type": "bullet",
              "html": "The defender rolls all <span class=\"kw\">dice</span> in the <b>Armour Pool</b>.",
              "plain": "The defender rolls all dice in the Armour Pool ."
            },
            {
              "type": "bullet",
              "html": "Results equal to or higher than the Unit’s <b>Armour</b> characteristic: <b>success</b> - discard the die.",
              "plain": "Results equal to or higher than the Unit’s Armour characteristic: success - discard the die."
            },
            {
              "type": "bullet",
              "html": "Results lower than Armour: <b>failure</b> - <span class=\"kw\">move</span> the die to the <b>Damage Pool</b>.",
              "plain": "Results lower than Armour: failure - move the die to the Damage Pool ."
            },
            {
              "type": "microhead",
              "html": "<b>4. EVADE ROLLS</b>",
              "plain": "4. EVADE ROLLS"
            },
            {
              "type": "text",
              "html": "Perform this step only if the target Unit qualifies:",
              "plain": "Perform this step only if the target Unit qualifies:"
            },
            {
              "type": "bullet",
              "html": "A <b><span class=\"kw\">Special Ability</span></b> or keyword grants an <b>Evade Roll</b>.",
              "plain": "A Special Ability or keyword grants an Evade Roll ."
            },
            {
              "type": "bullet",
              "html": "The target is <b><span class=\"kw\">Engaged</span></b> and is suffering <b>Damage</b> from a <b><span class=\"kw\">Ranged Attack</span></b>.",
              "plain": "The target is Engaged and is suffering Damage from a Ranged Attack ."
            },
            {
              "type": "text",
              "html": "If eligible, the defender rolls all <span class=\"kw\">dice</span> in the <b>Damage Pool</b>. Results equal to or higher than the Unit’s <b>Evade</b> characteristic: <b>success</b> - remove those <span class=\"kw\">dice</span>. Remaining <span class=\"kw\">dice</span> are confirmed <b>Damage</b>.",
              "plain": "If eligible, the defender rolls all dice in the Damage Pool . Results equal to or higher than the Unit’s Evade characteristic: success - remove those dice . Remaining dice are confirmed Damage ."
            },
            {
              "type": "microhead",
              "html": "<b>5. RESOLVE DAMAGE AND CASUALTIES</b>",
              "plain": "5. RESOLVE DAMAGE AND CASUALTIES"
            },
            {
              "type": "bullet",
              "html": "Multiply the remaining <span class=\"kw\">dice</span> in the <b>Damage Pool</b> by the weapon’s <b>Damage</b> characteristic.",
              "plain": "Multiply the remaining dice in the Damage Pool by the weapon’s Damage characteristic."
            },
            {
              "type": "bullet",
              "html": "Add any previously accumulated <b>Damage</b> (from earlier attacks in this or previous Rounds), indicated by a <b>Damage Marker</b>. This total is the <b>Total Damage</b>.",
              "plain": "Add any previously accumulated Damage (from earlier attacks in this or previous Rounds), indicated by a Damage Marker . This total is the Total Damage ."
            },
            {
              "type": "bullet",
              "html": "Apply any Special Skills that reduce the Total <b>Damage</b>.",
              "plain": "Apply any Special Skills that reduce the Total Damage ."
            },
            {
              "type": "bullet",
              "html": "Remove casualties model by model. The defending player removes <span class=\"kw\">models</span> from the target Unit, following these rules:",
              "plain": "Remove casualties model by model. The defending player removes models from the target Unit, following these rules:"
            },
            {
              "type": "bullet",
              "html": "The attack <b>cannot</b> remove more <span class=\"kw\">models</span> than the number of <b><span class=\"kw\">Visible</span></b> <span class=\"kw\">models</span> in the target Unit.",
              "plain": "The attack cannot remove more models than the number of Visible models in the target Unit."
            },
            {
              "type": "bullet",
              "html": "While Total <b>Damage</b> equals or exceeds a model’s HP, remove one <span class=\"kw\">Visible</span> model and reduce Total <b>Damage</b> by that model’s HP. Repeat.",
              "plain": "While Total Damage equals or exceeds a model’s HP, remove one Visible model and reduce Total Damage by that model’s HP. Repeat."
            },
            {
              "type": "bullet",
              "html": "If all <span class=\"kw\">Visible</span> <span class=\"kw\">models</span> are Destroyed, discard remaining Total <b>Damage</b>- it does not carry over to non-<span class=\"kw\">Visible</span> <span class=\"kw\">models</span>.",
              "plain": "If all Visible models are Destroyed, discard remaining Total Damage - it does not carry over to non- Visible models ."
            },
            {
              "type": "bullet",
              "html": "If Total <b>Damage</b> remains but <b>cannot</b> Destroy the next <span class=\"kw\">Visible</span> model, record it with a <b>Damage Marker</b> (e. g. a D6 set next to the Unit).",
              "plain": "If Total Damage remains but cannot Destroy the next Visible model, record it with a Damage Marker (e. g. a D6 set next to the Unit)."
            }
          ]
        },
        {
          "id": "8-7-5-removing-models-from-engaged-units",
          "title": "8.7.5 Removing Models from Engaged Units",
          "rows": [
            {
              "type": "text",
              "html": "When the target Unit is <b><span class=\"kw\">Engaged</span></b>, ignore standard Visibility rules.",
              "plain": "When the target Unit is Engaged , ignore standard Visibility rules."
            },
            {
              "type": "text",
              "html": "Whenever an<b> <span class=\"kw\">Engaged</span></b> Unit suffers casualties from any source, ignore standard Visibility rules and apply the following priority order instead.",
              "plain": "Whenever an Engaged Unit suffers casualties from any source, ignore standard Visibility rules and apply the following priority order instead."
            },
            {
              "type": "text",
              "html": "The defending player <b>must</b> remove casualties in this strict priority order:",
              "plain": "The defending player must remove casualties in this strict priority order:"
            },
            {
              "type": "text",
              "html": "<b>Priority 1:</b> <span class=\"kw\">Models</span> not <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of any <b><span class=\"kw\">Enemy</span></b> Unit.",
              "plain": "Priority 1: Models not Within the Engagement Range of any Enemy Unit."
            },
            {
              "type": "text",
              "html": "<b>Priority 2:</b> <span class=\"kw\">Models</span><b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> but not in <b>Base-to-Base</b> contact.",
              "plain": "Priority 2: Models Within the Engagement Range but not in Base-to-Base contact."
            },
            {
              "type": "text",
              "html": "<b>Priority 3:</b> <span class=\"kw\">Models</span> in <b>Base-to-Base</b> contact with an <b><span class=\"kw\">Enemy</span></b> model.",
              "plain": "Priority 3: Models in Base-to-Base contact with an Enemy model."
            },
            {
              "type": "text",
              "html": "When selecting a model to remove at Priority 2 or 3, the defending player <b>cannot</b> choose a model if removing it would cause the Unit to stop being <b><span class=\"kw\">Engaged</span></b> with a specific <b><span class=\"kw\">Enemy</span></b> Unit - provided there is another valid casualty in any priority tier.",
              "plain": "When selecting a model to remove at Priority 2 or 3, the defending player cannot choose a model if removing it would cause the Unit to stop being Engaged with a specific Enemy Unit - provided there is another valid casualty in any priority tier."
            },
            {
              "type": "text",
              "html": "<i>In this example, Miniature B</i><b><i>cannot</i></b><i> be removed first (Priority 2) because doing so would break the <span class=\"kw\">Zealot</span> Unit’s Engagement with the <span class=\"kw\">Hydralisk</span>. Once only one valid casualty remains, the <span class=\"kw\">controlling player</span> may choose either the last A or B.</i>",
              "plain": "In this example, Miniature B cannot be removed first (Priority 2) because doing so would break the Zealot Unit’s Engagement with the Hydralisk . Once only one valid casualty remains, the controlling player may choose either the last A or B."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> The <b><span class=\"kw\">Engaged</span></b> casualty priority system prevents the defending player from picking off <span class=\"kw\">models</span> to escape Engagements they would rather not be in. Otherwise, an opponent could absorb <b>Damage</b> from shooting by taking the single model that is holding them in a difficult melee combat, effectively giving their <b><span class=\"kw\">Enemy</span></b> a free <b><span class=\"kw\">Disengage</span></b> action. <span class=\"kw\">The priority</span> makes shooting at a melee force eat away at the outer <span class=\"kw\">models</span> first, protecting the core of the melee until the <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">models</span> are removed.",
              "plain": "DESIGNER’S NOTE: The Engaged casualty priority system prevents the defending player from picking off models to escape Engagements they would rather not be in. Otherwise, an opponent could absorb Damage from shooting by taking the single model that is holding them in a difficult melee combat, effectively giving their Enemy a free Disengage action. The priority makes shooting at a melee force eat away at the outer models first, protecting the core of the melee until the Engaged models are removed."
            }
          ]
        },
        {
          "id": "8-7-6-template-weapons",
          "title": "8.7.6 Template Weapons",
          "rows": [
            {
              "type": "microhead",
              "html": "<b>BLAST TEMPLATE (BT) / FLAMER TEMPLATE (FT)</b>",
              "plain": "BLAST TEMPLATE (BT) / FLAMER TEMPLATE (FT)"
            },
            {
              "type": "microhead",
              "html": "<b>1. ALIGNMENT</b>",
              "plain": "1. ALIGNMENT"
            },
            {
              "type": "bullet",
              "html": "<b>BT:</b> The centre hole <b>must</b> sit over the target model’s base (<b><span class=\"kw\">Wholly Within</span></b> if possible). The position of the centre hole is the <b>Target Point</b>.",
              "plain": "BT: The centre hole must sit over the target model’s base ( Wholly Within if possible). The position of the centre hole is the Target Point ."
            },
            {
              "type": "bullet",
              "html": "<b>FT:</b> The narrow end must be flush with the attacking model’s base edge and aimed at the target. The centre of the target model’s base is the <b>Target Point</b>.",
              "plain": "FT: The narrow end must be flush with the attacking model’s base edge and aimed at the target. The centre of the target model’s base is the Target Point ."
            },
            {
              "type": "bullet",
              "html": "Templates affect only <span class=\"kw\">models</span> at the <b>same elevation level</b> as the <b>Target Point</b>.",
              "plain": "Templates affect only models at the same elevation level as the Target Point ."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span> are not on any elevation level for template purposes. A template set at <b>GROUND LEVEL</b> does not affect <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span>, and a template cannot be set on a <b><span class=\"kw\">Flying</span></b> model’s elevation level, unless the template weapon has Target: ALL or Target: <b><span class=\"kw\">Flying</span></b>.",
              "plain": "Flying models are not on any elevation level for template purposes. A template set at GROUND LEVEL does not affect Flying models , and a template cannot be set on a Flying model’s elevation level, unless the template weapon has Target: ALL or Target: Flying ."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> <span class=\"kw\">Template weapons</span> need careful placement. A well-timed Blast Template can hit two or three <span class=\"kw\">Units</span> at once, causing <span class=\"kw\">spillover</span> Batches in addition to the main <b>Damage</b>. Pay attention to turns when the <b><span class=\"kw\">Enemy</span></b> has a &quot; bunch&quot; of <span class=\"kw\">Units</span> around the same terrain piece or <b>Mission Marker</b>. Flamer Templates have a shorter range but almost always hit everything <b><span class=\"kw\">Within</span></b> the cone, making them very effective against tightly packed melee <span class=\"kw\">Units</span>. When facing armies that heavily rely on Templates, keep your <span class=\"kw\">Units</span> at maximum <b>Coherency</b> and avoid having too many <span class=\"kw\">Units</span> on a single objective.",
              "plain": "Abathur’s TIP: Template weapons need careful placement. A well-timed Blast Template can hit two or three Units at once, causing spillover Batches in addition to the main Damage . Pay attention to turns when the Enemy has a \" bunch\" of Units around the same terrain piece or Mission Marker . Flamer Templates have a shorter range but almost always hit everything Within the cone, making them very effective against tightly packed melee Units . When facing armies that heavily rely on Templates, keep your Units at maximum Coherency and avoid having too many Units on a single objective."
            },
            {
              "type": "microhead",
              "html": "<b>2. DECLARING TARGETS</b>",
              "plain": "2. DECLARING TARGETS"
            },
            {
              "type": "text",
              "html": "Follow standard Target Eligibility (Part <span class=\"ref\">8. 7. 3</span>) with this exception: select one <b><span class=\"kw\">Enemy</span></b> Unit as the Primary target - all <span class=\"kw\">models</span> in that Unit covered by the template are the Main target. Every other model (<b><span class=\"kw\">Friendly</span></b> or <b><span class=\"kw\">Enemy</span></b>) covered by the template is resolved under <b><span class=\"kw\">Spillover</span></b>, provided they share the same elevation and Combat Tag as the Primary target.",
              "plain": "Follow standard Target Eligibility (Part 8. 7. 3 ) with this exception: select one Enemy Unit as the Primary target - all models in that Unit covered by the template are the Main target. Every other model ( Friendly or Enemy ) covered by the template is resolved under Spillover , provided they share the same elevation and Combat Tag as the Primary target."
            },
            {
              "type": "microhead",
              "html": "<b>3. DETERMINING <span class=\"kw\">HITS</span></b>",
              "plain": "3. DETERMINING HITS"
            },
            {
              "type": "text",
              "html": "A model is affected if all of the following are true:",
              "plain": "A model is affected if all of the following are true:"
            },
            {
              "type": "bullet",
              "html": "Its base is partially or fully covered by the template.",
              "plain": "Its base is partially or fully covered by the template."
            },
            {
              "type": "bullet",
              "html": "It is on the same elevation as the declared <b>Target Point</b>.",
              "plain": "It is on the same elevation as the declared Target Point ."
            },
            {
              "type": "bullet",
              "html": "A line traced from the <b>Centre Hole</b> (BT) or <b>Attacking Model’s base</b> (FT) to the model’s base is not blocked by terrain piece (Size 2+).",
              "plain": "A line traced from the Centre Hole (BT) or Attacking Model’s base (FT) to the model’s base is not blocked by terrain piece (Size 2+)."
            },
            {
              "type": "bullet",
              "html": "It is an eligible target type (e. g. , a <b>Ground</b>-only template does not affect <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">models</span>, even if it is covered).",
              "plain": "It is an eligible target type (e. g. , a Ground -only template does not affect Flying models , even if it is covered)."
            },
            {
              "type": "microhead",
              "html": "<b>4. ATTACK POOL GENERATION</b>",
              "plain": "4. ATTACK POOL GENERATION"
            },
            {
              "type": "bullet",
              "html": "<b>Main Target:</b> Generate a number of Attack <span class=\"kw\">Dice</span> equal to the number of Affected <span class=\"kw\">models</span> in the target Unit, plus any weapon Rate of Attack <span class=\"kw\">modifiers</span>.",
              "plain": "Main Target: Generate a number of Attack Dice equal to the number of Affected models in the target Unit, plus any weapon Rate of Attack modifiers ."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Spillover</span> (separate Batches per Unit):</b> Generate a number of Attack <span class=\"kw\">Dice</span> equal to the number of Affected <span class=\"kw\">models</span> in that Unit only. Do not apply Rate of Attack <span class=\"kw\">modifiers</span>. Do not apply Surge.",
              "plain": "Spillover (separate Batches per Unit): Generate a number of Attack Dice equal to the number of Affected models in that Unit only. Do not apply Rate of Attack modifiers . Do not apply Surge."
            },
            {
              "type": "microhead",
              "html": "<b>5. RESOLUTION</b>",
              "plain": "5. RESOLUTION"
            },
            {
              "type": "bullet",
              "html": "Roll to Hit as normal. Roll the generated Attack <span class=\"kw\">Dice</span> for the Batch. Any result equal to or higher than the weapon’s Hit characteristic is a success and is moved to the <b>Armour Pool</b>.",
              "plain": "Roll to Hit as normal. Roll the generated Attack Dice for the Batch. Any result equal to or higher than the weapon’s Hit characteristic is a success and is moved to the Armour Pool ."
            },
            {
              "type": "bullet",
              "html": "Do not roll a <b>Surge Die</b>. For the Main target, the Surge Result equals the number of Affected <span class=\"kw\">models</span> in that Unit. <span class=\"kw\">Spillover</span> attacks do not generate Surge.",
              "plain": "Do not roll a Surge Die . For the Main target, the Surge Result equals the number of Affected models in that Unit. Spillover attacks do not generate Surge."
            },
            {
              "type": "bullet",
              "html": "Apply Surge efficiency normally for the Main target if the <b>Combat Tag</b> matches. Do not apply Surge to <b><span class=\"kw\">Spillover</span></b>.",
              "plain": "Apply Surge efficiency normally for the Main target if the Combat Tag matches. Do not apply Surge to Spillover ."
            }
          ]
        },
        {
          "id": "8-7-7-charge",
          "title": "8.7.7 Charge",
          "rows": [
            {
              "type": "text",
              "html": "The last few metres are the longest. A charging squad crosses open ground with nothing between them and the <b><span class=\"kw\">Enemy</span></b> but speed, aggression, and the hope that the <span class=\"kw\">dice</span> fall right.",
              "plain": "The last few metres are the longest. A charging squad crosses open ground with nothing between them and the Enemy but speed, aggression, and the hope that the dice fall right."
            },
            {
              "type": "text",
              "html": "An <b><span class=\"kw\">Unengaged</span></b><b>Ground</b> Unit moves into the <span class=\"kw\">Engagement Range</span> of <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>.",
              "plain": "An Unengaged Ground Unit moves into the Engagement Range of Enemy Units ."
            },
            {
              "type": "microhead",
              "html": "<b>1. DECLARE TARGETS</b>",
              "plain": "1. DECLARE TARGETS"
            },
            {
              "type": "bullet",
              "html": "All targets <b>must</b> possess the <b>Ground Combat Tag</b>. <b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span><b>cannot</b><b><span class=\"kw\">Charge</span></b> or be <b>Charged</b>.",
              "plain": "All targets must possess the Ground Combat Tag . Flying Units cannot Charge or be Charged ."
            },
            {
              "type": "bullet",
              "html": "A <b><span class=\"kw\">Charge</span></b> does <b>not</b> require <b><span class=\"kw\">Line of Sight</span></b>.",
              "plain": "A Charge does not require Line of Sight ."
            },
            {
              "type": "bullet",
              "html": "Declare <b>all</b> intended targets before rolling.",
              "plain": "Declare all intended targets before rolling."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b><b>Charges</b> do not require a <b><span class=\"kw\">Line of Sight</span></b>. This is because melee combatants are assumed to be able to detect threats through sound, vibration, and general battlefield awareness. <b>Charges</b> would require a <b><span class=\"kw\">Line of Sight</span></b> if they didn’t, and attacking an opponent behind a wall or barricade would be impossible. This would make melee <span class=\"kw\">Units</span> impossible to play in a map-heavy game.",
              "plain": "DESIGNER’S NOTE: Charges do not require a Line of Sight . This is because melee combatants are assumed to be able to detect threats through sound, vibration, and general battlefield awareness. Charges would require a Line of Sight if they didn’t, and attacking an opponent behind a wall or barricade would be impossible. This would make melee Units impossible to play in a map-heavy game."
            },
            {
              "type": "microhead",
              "html": "<b>2. DETERMINE <span class=\"kw\">CHARGE</span> DISTANCE</b>",
              "plain": "2. DETERMINE CHARGE DISTANCE"
            },
            {
              "type": "bullet",
              "html": "Choose the <b><span class=\"kw\">Leading Model</span></b> and nominate one model per target Unit as the <b><span class=\"kw\">Charge</span></b> target.",
              "plain": "Choose the Leading Model and nominate one model per target Unit as the Charge target."
            },
            {
              "type": "bullet",
              "html": "Roll <b>1D6</b> and add it to the Unit’s <b>Speed</b>. This is the <b><span class=\"kw\">Charge</span> Roll Distance</b>.",
              "plain": "Roll 1D6 and add it to the Unit’s Speed . This is the Charge Roll Distance ."
            },
            {
              "type": "bullet",
              "html": "Measure along the actual path of travel - bypass impassable obstacles. Follow <b>Gap Clearance</b> rules (Part <span class=\"ref\">4. 6</span>).",
              "plain": "Measure along the actual path of travel - bypass impassable obstacles. Follow Gap Clearance rules (Part 4. 6 )."
            },
            {
              "type": "microhead",
              "html": "<b>3. SUCCESSFUL AND FAILED CHARGES</b>",
              "plain": "3. SUCCESSFUL AND FAILED CHARGES"
            },
            {
              "type": "text",
              "html": "The <b><span class=\"kw\">Charge</span> succeeds</b> only if the <b><span class=\"kw\">Leading Model</span></b> can be legally set in a position that is:",
              "plain": "The Charge succeeds only if the Leading Model can be legally set in a position that is:"
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Wholly Within</span></b> the <b><span class=\"kw\">Charge</span> Roll Distance</b> of its starting point.",
              "plain": "Wholly Within the Charge Roll Distance of its starting point."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Within</span></b> the<b> <span class=\"kw\">Engagement Range</span></b> (1&quot; ) of every declared <b><span class=\"kw\">Charge</span></b> target.",
              "plain": "Within the Engagement Range (1\" ) of every declared Charge target."
            },
            {
              "type": "bullet",
              "html": "Not overlapping other <span class=\"kw\">bases</span> or <span class=\"kw\">impassable terrain</span>.",
              "plain": "Not overlapping other bases or impassable terrain ."
            },
            {
              "type": "bullet",
              "html": "Not <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of any <b><span class=\"kw\">Enemy</span></b> Unit that was <b>not</b> declared as a target.",
              "plain": "Not Within the Engagement Range of any Enemy Unit that was not declared as a target."
            },
            {
              "type": "text",
              "html": "If the <b><span class=\"kw\">Charge</span></b> fails, the Unit does not <span class=\"kw\">move</span>. Its activation ends immediately.",
              "plain": "If the Charge fails, the Unit does not move . Its activation ends immediately."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> A failed <b><span class=\"kw\">Charge</span></b> means you’ve wasted your whole activation, so be sure to measure carefully before committing to a <b><span class=\"kw\">Charge</span></b>. The <b><span class=\"kw\">Charge</span> Roll</b> is your <b>Speed</b> plus <b>1D6</b>, so be aware of your minimum, average, and maximum ranges. If the target is right at the edge of your maximum range, you may want to consider whether a <b><span class=\"kw\">Move</span></b> or <b>Run</b> this Round to close the distance will put you into position for a guaranteed <b><span class=\"kw\">Charge</span></b> into them next Round. When you declare multiple <b><span class=\"kw\">Charge</span></b> targets, remember that the <b><span class=\"kw\">Leading Model</span></b> has to be <b><span class=\"kw\">Within</span> 1\"</b> of all the targets you’ve declared to <b><span class=\"kw\">Charge</span></b> at. Multi-<b>charges</b> are powerful but can be very risky - if the targets don’t line up just right, you’ll have wasted your whole <b><span class=\"kw\">Charge</span></b> and won’t hit any of the targets.",
              "plain": "Abathur’s TIP: A failed Charge means you’ve wasted your whole activation, so be sure to measure carefully before committing to a Charge . The Charge Roll is your Speed plus 1D6 , so be aware of your minimum, average, and maximum ranges. If the target is right at the edge of your maximum range, you may want to consider whether a Move or Run this Round to close the distance will put you into position for a guaranteed Charge into them next Round. When you declare multiple Charge targets, remember that the Leading Model has to be Within 1\" of all the targets you’ve declared to Charge at. Multi- charges are powerful but can be very risky - if the targets don’t line up just right, you’ll have wasted your whole Charge and won’t hit any of the targets."
            },
            {
              "type": "microhead",
              "html": "<b>4. EXECUTE THE <span class=\"kw\">MOVE</span></b>",
              "plain": "4. EXECUTE THE MOVE"
            },
            {
              "type": "text",
              "html": "<span class=\"kw\">Move</span> the <b><span class=\"kw\">Leading Model</span></b> into the valid position. Set it in <b>Base-to-Base</b> contact with the <b><span class=\"kw\">Charge</span></b> target(s) if possible - otherwise as close as possible <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b>.",
              "plain": "Move the Leading Model into the valid position. Set it in Base-to-Base contact with the Charge target(s) if possible - otherwise as close as possible Within the Engagement Range ."
            },
            {
              "type": "text",
              "html": "Set remaining <span class=\"kw\">models</span><b>In</b><b>Coherency</b> - <b>Coherency Links</b> may pass through <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> the Unit is <b><span class=\"kw\">Engaged</span></b> with (Part <span class=\"ref\">4. 4</span>). None may end <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of a Unit not declared as a target. Placement priority:",
              "plain": "Set remaining models In Coherency - Coherency Links may pass through Enemy models the Unit is Engaged with (Part 4. 4 ). None may end Within the Engagement Range of a Unit not declared as a target. Placement priority:"
            },
            {
              "type": "bullet",
              "html": "<b>Priority A:</b><b>Base-to-Base</b> contact with declared target <span class=\"kw\">models</span> (whenever physically possible).",
              "plain": "Priority A: Base-to-Base contact with declared target models (whenever physically possible)."
            },
            {
              "type": "bullet",
              "html": "<b>Priority B: <span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b> of targets (if <b>Base-to-Base</b> is impossible).",
              "plain": "Priority B: Within the Engagement Range of targets (if Base-to-Base is impossible)."
            },
            {
              "type": "bullet",
              "html": "<b>Priority C:</b> As close as possible to the <b><span class=\"kw\">Leading Model</span></b> to maintain <b>Coherency</b>.",
              "plain": "Priority C: As close as possible to the Leading Model to maintain Coherency ."
            }
          ]
        }
      ]
    },
    {
      "id": "8-8-phase-3-the-combat-phase",
      "title": "8.8 PHASE 3: THE COMBAT PHASE",
      "rows": [
        {
          "type": "text",
          "html": "There is no room for tactics at arm’s length. Psi blades clash with claws, bayonets scrape against carapace, and the only thing that matters is who is still standing when the dust settles. During the Combat Phase, <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span> close the distance to their foes and trade blows in brutal melee combat. Unlike the previous Phases, where activation is voluntary, every Unit currently in the <b><span class=\"kw\">Engagement Range</span></b> of an <b><span class=\"kw\">Enemy</span></b> must act in this Phase. A player cannot choose to skip a fight.",
          "plain": "There is no room for tactics at arm’s length. Psi blades clash with claws, bayonets scrape against carapace, and the only thing that matters is who is still standing when the dust settles. During the Combat Phase, Engaged Units close the distance to their foes and trade blows in brutal melee combat. Unlike the previous Phases, where activation is voluntary, every Unit currently in the Engagement Range of an Enemy must act in this Phase. A player cannot choose to skip a fight."
        },
        {
          "type": "text",
          "html": "<b><span class=\"kw\">Flying</span></b> <span class=\"kw\">Units</span> are never <b><span class=\"kw\">Engaged</span></b> and therefore never participate in the Combat Phase. They cannot be <b>Activated</b>, cannot <b>Close Ranks</b>, and cannot be the target of <b>Close Combat Attacks</b>.",
          "plain": "Flying Units are never Engaged and therefore never participate in the Combat Phase. They cannot be Activated , cannot Close Ranks , and cannot be the target of Close Combat Attacks ."
        },
        {
          "type": "note",
          "html": "<b>DESIGNER’S NOTE:</b> By making the activation of the <b>Close Combat Attack</b> obligatory for all <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span>, there is no longer an opportunity to exploit the game by avoiding an unfavourable melee combat. After the <span class=\"kw\">Units</span> are in close combat with each other, the combat ensues. This promotes cautious decision-making during the Movement and Assault Phases and prevents any tendency to delay combat in the Combat Phase.",
          "plain": "DESIGNER’S NOTE: By making the activation of the Close Combat Attack obligatory for all Engaged Units , there is no longer an opportunity to exploit the game by avoiding an unfavourable melee combat. After the Units are in close combat with each other, the combat ensues. This promotes cautious decision-making during the Movement and Assault Phases and prevents any tendency to delay combat in the Combat Phase."
        },
        {
          "type": "microhead",
          "html": "<b><span class=\"kw\">ACTIVATIONS</span></b>",
          "plain": "ACTIVATIONS"
        },
        {
          "type": "text",
          "html": "Players take turns activating one <b><span class=\"kw\">Engaged</span></b> Unit at a time. The holder of the <b><span class=\"kw\">First Player Marker</span></b> chooses who activates first. Players then alternate, each activating one <b><span class=\"kw\">Engaged</span></b> Unit per turn. When an eligible Unit is <b>Activated</b>, it follows the <b>Close Combat Attack</b> (Part <span class=\"ref\">8. 8. 1</span>).",
          "plain": "Players take turns activating one Engaged Unit at a time. The holder of the First Player Marker chooses who activates first. Players then alternate, each activating one Engaged Unit per turn. When an eligible Unit is Activated , it follows the Close Combat Attack (Part 8. 8. 1 )."
        },
        {
          "type": "microhead",
          "html": "<b>UNIT ELIGIBILITY</b>",
          "plain": "UNIT ELIGIBILITY"
        },
        {
          "type": "text",
          "html": "Only <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span> may be <b>Activated</b> during this Phase. <b><span class=\"kw\">Unengaged</span></b> <span class=\"kw\">Units</span> cannot act. Once a Unit’s <b>Close Combat Attack</b> is fully resolved, remove its <b>Activation Marker</b>.",
          "plain": "Only Engaged Units may be Activated during this Phase. Unengaged Units cannot act. Once a Unit’s Close Combat Attack is fully resolved, remove its Activation Marker ."
        },
        {
          "type": "microhead",
          "html": "<b><span class=\"kw\">PASSING</span></b>",
          "plain": "PASSING"
        },
        {
          "type": "text",
          "html": "A player Passes only when they have no remaining <b><span class=\"kw\">Engaged</span></b> <span class=\"kw\">Units</span> to activate. When both players Pass, the Phase ends.",
          "plain": "A player Passes only when they have no remaining Engaged Units to activate. When both players Pass, the Phase ends."
        }
      ],
      "children": [
        {
          "id": "8-8-1-the-close-combat-attack",
          "title": "8.8.1 The Close Combat Attack",
          "rows": [
            {
              "type": "text",
              "html": "An <b><span class=\"kw\">Engaged</span></b><b>Ground</b> Unit<b></b> attacks<b> <span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> it is <b><span class=\"kw\">Engaged</span></b> with.",
              "plain": "An Engaged Ground Unit attacks Enemy Units it is Engaged with."
            },
            {
              "type": "text",
              "html": "<b>1. CLOSE RANKS (Optional)</b>",
              "plain": "1. CLOSE RANKS (Optional)"
            },
            {
              "type": "text",
              "html": "Before rolling the <span class=\"kw\">dice</span>, the Unit may press into the fight:",
              "plain": "Before rolling the dice , the Unit may press into the fight:"
            },
            {
              "type": "bullet",
              "html": "Choose a <b><span class=\"kw\">Leading Model</span></b> and <span class=\"kw\">move</span> it up to <b>3\"</b> - following standard <span class=\"kw\">Move</span> rules (Part <span class=\"ref\">8. 5. 3</span>) with two restrictions:",
              "plain": "Choose a Leading Model and move it up to 3\" - following standard Move rules (Part 8. 5. 3 ) with two restrictions:"
            },
            {
              "type": "bullet",
              "html": "The <b><span class=\"kw\">Leading Model</span></b><b>must</b> end <b>closer</b> to the Unit(s) it is<b> <span class=\"kw\">Engaged</span></b> with than it started.",
              "plain": "The Leading Model must end closer to the Unit(s) it is Engaged with than it started."
            },
            {
              "type": "bullet",
              "html": "This <span class=\"kw\">move</span><b>cannot</b> bring the Unit into Engagement with <b>new</b><b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> not already <b><span class=\"kw\">Engaged</span></b> at the start of this Phase.",
              "plain": "This move cannot bring the Unit into Engagement with new Enemy Units not already Engaged at the start of this Phase."
            },
            {
              "type": "bullet",
              "html": "Reposition the rest of the Unit into <b>Coherency</b> - <b>Coherency Links</b> may pass through <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> the Unit is <b><span class=\"kw\">Engaged</span></b> with (Part <span class=\"ref\">4. 4</span>).",
              "plain": "Reposition the rest of the Unit into Coherency - Coherency Links may pass through Enemy models the Unit is Engaged with (Part 4. 4 )."
            },
            {
              "type": "bullet",
              "html": "Set <span class=\"kw\">models</span> in <b>Base-to-Base</b> contact with <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">models</span> wherever possible.",
              "plain": "Set models in Base-to-Base contact with Enemy models wherever possible."
            },
            {
              "type": "bullet",
              "html": "If <b>Base-to-Base</b> contact is not possible, set <span class=\"kw\">models</span> in Base-to-Base contact with <b><span class=\"kw\">Friendly</span></b> <span class=\"kw\">models</span> from the same Unit that are <b><span class=\"kw\">Within</span></b> the <b><span class=\"kw\">Engagement Range</span></b>.",
              "plain": "If Base-to-Base contact is not possible, set models in Base-to-Base contact with Friendly models from the same Unit that are Within the Engagement Range ."
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Models</span> already in <b>Base-to-Base</b> contact at the start of this step are not moved - they are physically pinned.",
              "plain": "Models already in Base-to-Base contact at the start of this step are not moved - they are physically pinned."
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Models</span><b>cannot</b> use this <span class=\"kw\">move</span> to <b><span class=\"kw\">Disengage</span></b> from other <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>.",
              "plain": "Models cannot use this move to Disengage from other Enemy Units ."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP: Close Ranks</b> is a useful 3&quot; <span class=\"kw\">move</span> that many new players overlook. Use it freely: advance your <b><span class=\"kw\">Leading Model</span></b>, pulling more of your team into <span class=\"kw\">Fighting Rank</span> and <span class=\"kw\">Supporting Rank</span>. The more <span class=\"kw\">models</span> you have touching the <span class=\"kw\">enemy</span>, the more <span class=\"kw\">dice</span> you get to roll. Just remember that <b>Close Ranks</b> won’t get you into <span class=\"kw\">Engagement range</span> from <b><span class=\"kw\">Unengaged</span></b><b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>, so plan ahead when beginning your <b>Charges</b>. And if you’re the target of a <b><span class=\"kw\">Charge</span></b>, don’t forget that your <b>Close Ranks</b> turn can reposition your <span class=\"kw\">models</span> to get as many as possible into the fight.",
              "plain": "Abathur’s TIP: Close Ranks is a useful 3\" move that many new players overlook. Use it freely: advance your Leading Model , pulling more of your team into Fighting Rank and Supporting Rank . The more models you have touching the enemy , the more dice you get to roll. Just remember that Close Ranks won’t get you into Engagement range from Unengaged Enemy Units , so plan ahead when beginning your Charges . And if you’re the target of a Charge , don’t forget that your Close Ranks turn can reposition your models to get as many as possible into the fight."
            },
            {
              "type": "microhead",
              "html": "<b>2. DECLARE ATTACKERS</b>",
              "plain": "2. DECLARE ATTACKERS"
            },
            {
              "type": "text",
              "html": "Determine which <span class=\"kw\">models</span> may strike:",
              "plain": "Determine which models may strike:"
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Fighting Rank</span>: <span class=\"kw\">Within</span></b> the<b> <span class=\"kw\">Engagement Range</span></b> (1&quot; ) of an <b><span class=\"kw\">Enemy</span></b> model.",
              "plain": "Fighting Rank : Within the Engagement Range (1\" ) of an Enemy model."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Supporting Rank</span>:</b> In <b>Base-to-Base</b> contact with a <b><span class=\"kw\">Friendly</span></b> model from the same Unit that is in the <span class=\"kw\">Fighting Rank</span>.",
              "plain": "Supporting Rank : In Base-to-Base contact with a Friendly model from the same Unit that is in the Fighting Rank ."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Line of Sight</span></b> is not required. Eligible <span class=\"kw\">models</span> strike the <b><span class=\"kw\">Enemy</span></b> Unit as a whole.",
              "plain": "Line of Sight is not required. Eligible models strike the Enemy Unit as a whole."
            },
            {
              "type": "microhead",
              "html": "<b>3. ROLL ATTACKS</b>",
              "plain": "3. ROLL ATTACKS"
            },
            {
              "type": "text",
              "html": "Resolve attacks using the same sequence as <b>Ranged Attacks</b> (Part <span class=\"ref\">8. 7. 4</span>) with this restriction:",
              "plain": "Resolve attacks using the same sequence as Ranged Attacks (Part 8. 7. 4 ) with this restriction:"
            },
            {
              "type": "bullet",
              "html": "Use only Combat Phase<b> weapons</b> listed on the <b>Unit Card</b>.",
              "plain": "Use only Combat Phase weapons listed on the Unit Card ."
            },
            {
              "type": "bullet",
              "html": "If a model has more than one eligible Combat Phase weapon, the <span class=\"kw\">controlling player</span> chooses one.",
              "plain": "If a model has more than one eligible Combat Phase weapon, the controlling player chooses one."
            },
            {
              "type": "text",
              "html": "<i>(Note:</i><b><i>Evade Roll</i></b><i>s are only available in the Combat Phase if the Unit has a</i><b><i><span class=\"kw\">Special Ability</span></i></b><i> or Keyword that explicitly grants an Evade Roll against Close Combat attacks. )</i>",
              "plain": "(Note: Evade Roll s are only available in the Combat Phase if the Unit has a Special Ability or Keyword that explicitly grants an Evade Roll against Close Combat attacks. )"
            },
            {
              "type": "microhead",
              "html": "<b>FIGHTING MULTIPLE <span class=\"kw\">UNITS</span></b>",
              "plain": "FIGHTING MULTIPLE UNITS"
            },
            {
              "type": "text",
              "html": "If <b><span class=\"kw\">Engaged</span></b> with more than one <b><span class=\"kw\">Enemy</span></b> Unit simultaneously:",
              "plain": "If Engaged with more than one Enemy Unit simultaneously:"
            },
            {
              "type": "bullet",
              "html": "Declare how Attack <span class=\"kw\">Dice</span> are split between eligible targets <b>before rolling</b>. This declaration is binding - <span class=\"kw\">dice</span><b>cannot</b> be redistributed after the Hit roll.",
              "plain": "Declare how Attack Dice are split between eligible targets before rolling . This declaration is binding - dice cannot be redistributed after the Hit roll."
            },
            {
              "type": "bullet",
              "html": "Declare which target receives the <b>Surge Die before rolling</b>. The <b>Surge Die cannot</b> be split.",
              "plain": "Declare which target receives the Surge Die before rolling . The Surge Die cannot be split."
            },
            {
              "type": "microhead",
              "html": "<b>4. <span class=\"kw\">CASUALTY REMOVAL</span></b>",
              "plain": "4. CASUALTY REMOVAL"
            },
            {
              "type": "text",
              "html": "Follow the <b><span class=\"kw\">Engaged</span></b> Unit rules (Part <span class=\"ref\">8. 7. 5</span>).",
              "plain": "Follow the Engaged Unit rules (Part 8. 7. 5 )."
            },
            {
              "type": "microhead",
              "html": "<b>5. POST-COMBAT <span class=\"kw\">STATUS</span></b>",
              "plain": "5. POST-COMBAT STATUS"
            },
            {
              "type": "text",
              "html": "After casualties are removed:",
              "plain": "After casualties are removed:"
            },
            {
              "type": "bullet",
              "html": "If none of the Unit’s remaining <span class=\"kw\">models</span> is <b><span class=\"kw\">Within</span> 1\"</b> of an <span class=\"kw\">enemy</span>, the Unit is immediately <b><span class=\"kw\">Unengaged</span></b>.",
              "plain": "If none of the Unit’s remaining models is Within 1\" of an enemy , the Unit is immediately Unengaged ."
            },
            {
              "type": "bullet",
              "html": "A Unit freed from combat that has not yet <b>Activated</b> this Phase is no longer bound by mandatory Combat activation. It effectively Passes, but acts normally from the next Round.",
              "plain": "A Unit freed from combat that has not yet Activated this Phase is no longer bound by mandatory Combat activation. It effectively Passes, but acts normally from the next Round."
            },
            {
              "type": "bullet",
              "html": "In rare cases, a <b>Reaction Ability</b> or specific trigger may allow a freed Unit to act in the current Phase.",
              "plain": "In rare cases, a Reaction Ability or specific trigger may allow a freed Unit to act in the current Phase."
            }
          ]
        }
      ]
    },
    {
      "id": "8-9-phase-4-the-scoring-cleanup-phase",
      "title": "8.9 PHASE 4: THE SCORING & CLEANUP PHASE",
      "rows": [
        {
          "type": "text",
          "html": "<i>Score, cleanup, set initiative.</i>",
          "plain": "Score, cleanup, set initiative."
        },
        {
          "type": "text",
          "html": "The first player initiates each step in order:",
          "plain": "The first player initiates each step in order:"
        },
        {
          "type": "bullet",
          "html": "Determine <b>Mission Marker</b> Control",
          "plain": "Determine Mission Marker Control"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Score Victory Points</span>",
          "plain": "Score Victory Points"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">End of Game Check</span>",
          "plain": "End of Game Check"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Resolve End of the Round Effects</span>",
          "plain": "Resolve End of the Round Effects"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Cleanup &amp; Refresh</span>",
          "plain": "Cleanup & Refresh"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Determine Initiative</span>",
          "plain": "Determine Initiative"
        }
      ],
      "children": [
        {
          "id": "8-9-1-determine-mission-marker-control",
          "title": "8.9.1 Determine Mission Marker Control",
          "rows": [
            {
              "type": "microhead",
              "html": "<b>IDENTIFY CONTESTING <span class=\"kw\">UNITS</span></b>",
              "plain": "IDENTIFY CONTESTING UNITS"
            },
            {
              "type": "text",
              "html": "A Unit may Contest a <b>Mission Marker</b> only if all three conditions are met:",
              "plain": "A Unit may Contest a Mission Marker only if all three conditions are met:"
            },
            {
              "type": "bullet",
              "html": "It is on the battlefield (not in <b><span class=\"kw\">Reserves</span></b>).",
              "plain": "It is on the battlefield (not in Reserves )."
            },
            {
              "type": "bullet",
              "html": "At least one model is <b><span class=\"kw\">Within</span></b> 3&quot; , has <b>LoS</b> to the Marker, and is on the same elevation as the marker. For the purpose of tracing <b>LoS</b>, assume that the Marker has Size 0.",
              "plain": "At least one model is Within 3\" , has LoS to the Marker, and is on the same elevation as the marker. For the purpose of tracing LoS , assume that the Marker has Size 0."
            },
            {
              "type": "bullet",
              "html": "The Unit is <b>In Coherency</b>.",
              "plain": "The Unit is In Coherency ."
            },
            {
              "type": "text",
              "html": "A <b><span class=\"kw\">Flying</span></b> Unit cannot Contest or Control <b><span class=\"kw\">Mission Markers</span></b>, regardless of its position or <b>Coherency</b> state.",
              "plain": "A Flying Unit cannot Contest or Control Mission Markers , regardless of its position or Coherency state."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b><b>Mission Marker</b> is controlled by the total Supply, not by the number of <span class=\"kw\">models</span> vying for the Marker. A lone Elite Unit with high Supply will outvote an entire horde of cheap infantry. Hence, placing a high-Supply Unit on the objective can sometimes be a better strategy than scattering weakened <span class=\"kw\">Units</span> across it. On the other hand, if your foe is holding a Marker with a single strong Unit, you must have the combined Supply to win the battle, not simply the numbers. It is also worth noting that a Unit at Supply 0 will still <span class=\"kw\">hold</span> the Marker if no one contests it, so a weakened Unit is not necessarily useless.",
              "plain": "Abathur’s TIP: Mission Marker is controlled by the total Supply, not by the number of models vying for the Marker. A lone Elite Unit with high Supply will outvote an entire horde of cheap infantry. Hence, placing a high-Supply Unit on the objective can sometimes be a better strategy than scattering weakened Units across it. On the other hand, if your foe is holding a Marker with a single strong Unit, you must have the combined Supply to win the battle, not simply the numbers. It is also worth noting that a Unit at Supply 0 will still hold the Marker if no one contests it, so a weakened Unit is not necessarily useless."
            },
            {
              "type": "microhead",
              "html": "<b>CALCULATE CONTROL</b>",
              "plain": "CALCULATE CONTROL"
            },
            {
              "type": "text",
              "html": "For each Marker:",
              "plain": "For each Marker:"
            },
            {
              "type": "bullet",
              "html": "Each player sums the <b><span class=\"kw\">Current Supply Value</span></b> of all their contesting <span class=\"kw\">Units</span>.",
              "plain": "Each player sums the Current Supply Value of all their contesting Units ."
            },
            {
              "type": "bullet",
              "html": "The player with the <b>higher</b> total <b>Controls</b> the Marker.",
              "plain": "The player with the higher total Controls the Marker."
            },
            {
              "type": "bullet",
              "html": "A <b>tie</b> means the Marker is <b>Contested</b> - control does not change.",
              "plain": "A tie means the Marker is Contested - control does not change."
            },
            {
              "type": "bullet",
              "html": "A Unit at Supply 0 may still Control a Marker if no <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span> contest it.",
              "plain": "A Unit at Supply 0 may still Control a Marker if no Enemy Units contest it."
            },
            {
              "type": "microhead",
              "html": "<b>STICKY CONTROL</b>",
              "plain": "STICKY CONTROL"
            },
            {
              "type": "text",
              "html": "Set a <b>Faction Indicator</b> on each controlled Marker. Once a Marker is controlled, it remains under that player’s control - even if they <span class=\"kw\">move</span> <span class=\"kw\">Units</span> away - until the opponent actively reclaims it by ending a Scoring Phase with a higher contesting Supply total. A <b>Contested</b> result (tied Supply) <b>never</b> transfers control: the Marker stays with whoever currently holds it, or remains neutral if it has never been controlled. A Marker <b>cannot</b> become neutral again once a player has taken control of it.",
              "plain": "Set a Faction Indicator on each controlled Marker. Once a Marker is controlled, it remains under that player’s control - even if they move Units away - until the opponent actively reclaims it by ending a Scoring Phase with a higher contesting Supply total. A Contested result (tied Supply) never transfers control: the Marker stays with whoever currently holds it, or remains neutral if it has never been controlled. A Marker cannot become neutral again once a player has taken control of it."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> Sticky Control means that a location becomes yours until the opponent re-takes it from you. This prevents the irritating problem in some wargames where you grab a location, push forward to grab another, and the first location reverts to no one in particular. It encourages bold play, taking what you want and holding it, and moving forward to take more. It creates a real strategic challenge, too, because taking a Marker forces the opponent to use real resources to take the objective rather than just waiting for you to leave.",
              "plain": "DESIGNER’S NOTE: Sticky Control means that a location becomes yours until the opponent re-takes it from you. This prevents the irritating problem in some wargames where you grab a location, push forward to grab another, and the first location reverts to no one in particular. It encourages bold play, taking what you want and holding it, and moving forward to take more. It creates a real strategic challenge, too, because taking a Marker forces the opponent to use real resources to take the objective rather than just waiting for you to leave."
            }
          ]
        },
        {
          "id": "mission-marker-calculating-control",
          "title": "MISSION MARKER - CALCULATING CONTROL",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><tbody><tr><td><p><span>Scenario</span></p></td><td><p><span>Outcome</span></p></td><td><p><span>Notes</span></p></td></tr><tr><td colspan=\"3\"><p><span>HOW CONTROL IS DECIDED (§<span class=\"ref\">8. 9. 1</span>)</span></p></td></tr><tr><td><p><span>Player A Supply &gt; Player B Supply</span></p></td><td><p><span>✔ PLAYER A CONTROLS</span></p></td><td><p><span>Sum Current</span><span><span class=\"kw\">Supply Value</span></span><span> of all eligible contesting <span class=\"kw\">Units</span> - not model count.</span></p></td></tr><tr><td><p><span>Player A Supply = Player B Supply</span></p></td><td><p><span>◆ CONTESTED</span></p></td><td><p><span>No change of control. Stays with current owner (or neutral if never held).</span></p></td></tr><tr><td><p><span>Only one player contests</span></p></td><td><p><span>✔ THAT PLAYER CONTROLS</span></p></td><td><p><span>Includes the case where the only contesting Unit is at Supply 0.</span></p></td></tr><tr><td><p><span>No player contests</span></p></td><td><p><span>● NO CHANGE</span></p></td><td><p><span>Sticky Control - Marker stays with the current owner until actively reclaimed.</span></p></td></tr><tr><td colspan=\"3\"><p><span>STICKY CONTROL (§<span class=\"ref\">8. 9. 1</span>)</span></p></td></tr><tr><td><p><span>Controlled Marker - owner moves away</span></p></td><td><p><span>✔ STAYS CONTROLLED</span></p></td><td><p><span>Control is only lost if the opponent ends a Scoring Phase with a higher Supply total.</span></p></td></tr><tr><td><p><span>Contested result (tied Supply)</span></p></td><td><p><span>◆ NO TRANSFER</span></p></td><td><p><span>Tied Supply never transfers control. Current owner keeps it.</span></p></td></tr><tr><td><p><span>Once controlled - can it revert to neutral?</span></p></td><td><p><span>✖ NEVER NEUTRAL AGAIN</span></p></td><td><p><span>Once a player has taken control, the Marker cannot become neutral again.</span></p></td></tr><tr><td colspan=\"3\"><p><span>MARKER AFFINITY (§<span class=\"ref\">9. 2. 1</span>)</span></p></td></tr><tr><td><p><span><span class=\"kw\">Markers</span> 1 &amp; 3</span></p></td><td><p><span>● RED PLAYER</span></p></td><td><p><span>Affinity is set after the draft is complete.</span></p></td></tr><tr><td><p><span><span class=\"kw\">Markers</span> 2 &amp; 4</span></p></td><td><p><span>● BLUE PLAYER</span></p></td><td><p><span>Affinity is set after the draft is complete.</span></p></td></tr><tr><td><p><span>Marker 5</span></p></td><td><p><span>– NEUTRAL</span></p></td><td><p><span>No player affinity.</span></p></td></tr></tbody></table>",
              "plain": "Scenario Outcome Notes HOW CONTROL IS DECIDED (§ 8. 9. 1 ) Player A Supply > Player B Supply ✔ PLAYER A CONTROLS Sum Current Supply Value of all eligible contesting Units - not model count. Player A Supply = Player B Supply ◆ CONTESTED No change of control. Stays with current owner (or neutral if never held). Only one player contests ✔ THAT PLAYER CONTROLS Includes the case where the only contesting Unit is at Supply 0. No player contests ● NO CHANGE Sticky Control - Marker stays with the current owner until actively reclaimed. STICKY CONTROL (§ 8. 9. 1 ) Controlled Marker - owner moves away ✔ STAYS CONTROLLED Control is only lost if the opponent ends a Scoring Phase with a higher Supply total. Contested result (tied Supply) ◆ NO TRANSFER Tied Supply never transfers control. Current owner keeps it. Once controlled - can it revert to neutral? ✖ NEVER NEUTRAL AGAIN Once a player has taken control, the Marker cannot become neutral again. MARKER AFFINITY (§ 9. 2. 1 ) Markers 1 & 3 ● RED PLAYER Affinity is set after the draft is complete. Markers 2 & 4 ● BLUE PLAYER Affinity is set after the draft is complete. Marker 5 – NEUTRAL No player affinity."
            },
            {
              "type": "text",
              "html": "<i>KEY RULE: Control is determined by Current</i><b><i><span class=\"kw\">Supply Value</span></i></b><i>, not the number of <span class=\"kw\">models</span>. A single high-Supply Elite Unit outvotes many low-Supply <span class=\"kw\">models</span> on the same Marker.</i>",
              "plain": "KEY RULE: Control is determined by Current Supply Value , not the number of models . A single high-Supply Elite Unit outvotes many low-Supply models on the same Marker."
            }
          ]
        },
        {
          "id": "mission-marker-contesting-eligibility",
          "title": "MISSION MARKER - CONTESTING ELIGIBILITY",
          "rows": [
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/></colgroup><tbody><tr><td><p><span>Condition</span></p></td><td><p><span>Required?</span></p></td><td><p><span>Detail</span></p></td></tr><tr><td colspan=\"3\"><p><span>ELIGIBILITY TO CONTEST - ALL THREE MUST BE MET (§<span class=\"ref\">8. 9. 1</span>)</span></p></td></tr><tr><td><p><span>Unit on the battlefield</span></p></td><td><p><span>✔ REQUIRED</span></p></td><td><p><span><span class=\"kw\">Units</span> in</span><span><span class=\"kw\">Reserves</span></span><span> cannot contest.</span></p></td></tr><tr><td><p><span>At least one model</span><span> <span class=\"kw\">Within</span> 3\"</span><span> of the Marker has LoS, on the same elevation</span></p></td><td><p><span>✔ REQUIRED</span></p></td><td><p><span>Measured from base edge. LoS and elevation checks are both required.</span></p></td></tr><tr><td><p><span>Unit is In Coherency</span></p></td><td><p><span>✔ REQUIRED</span></p></td><td><p><span><span class=\"kw\">Out of Coherency</span></span><span> <span class=\"kw\">Units</span> cannot contest or control any Marker.</span></p></td></tr><tr><td colspan=\"3\"><p><span>SPECIAL STATES</span></p></td></tr><tr><td><p><span>Supply 0 Unit</span></p></td><td><p><span>◆ CONDITIONAL</span></p></td><td><p><span>Can control a Marker if no</span><span><span class=\"kw\">Enemy</span></span><span><span class=\"kw\">Units</span> contest it. Cannot win a contest.</span></p></td></tr><tr><td><p><span><span class=\"kw\">BURROWED</span> Unit</span></p></td><td><p><span>✖ CANNOT CONTEST</span></p></td><td><p><span>Overrides standard contesting rules regardless of position. (<span class=\"kw\">BURROWED</span>)</span></p></td></tr><tr><td><p><span><span class=\"kw\">Out of Coherency</span></span><span>Unit</span></p></td><td><p><span>✖ CANNOT CONTEST</span></p></td><td><p><span>Ineligible even if <span class=\"kw\">models</span> are</span><span><span class=\"kw\">Within</span> 3\"</span><span>.</span></p></td></tr><tr><td><p><span><span class=\"kw\">Flying</span></span><span>Unit</span></p></td><td><p><span>✖ CANNOT CONTEST</span></p></td><td><p><span>Airborne <span class=\"kw\">Units</span> do not <span class=\"kw\">hold</span> ground. Overrides standard contesting rules regardless of position. (</span><span><span class=\"kw\">Flying</span></span><span>)</span></p></td></tr></tbody></table>",
              "plain": "Condition Required? Detail ELIGIBILITY TO CONTEST - ALL THREE MUST BE MET (§ 8. 9. 1 ) Unit on the battlefield ✔ REQUIRED Units in Reserves cannot contest. At least one model Within 3\" of the Marker has LoS, on the same elevation ✔ REQUIRED Measured from base edge. LoS and elevation checks are both required. Unit is In Coherency ✔ REQUIRED Out of Coherency Units cannot contest or control any Marker. SPECIAL STATES Supply 0 Unit ◆ CONDITIONAL Can control a Marker if no Enemy Units contest it. Cannot win a contest. BURROWED Unit ✖ CANNOT CONTEST Overrides standard contesting rules regardless of position. ( BURROWED ) Out of Coherency Unit ✖ CANNOT CONTEST Ineligible even if models are Within 3\" . Flying Unit ✖ CANNOT CONTEST Airborne Units do not hold ground. Overrides standard contesting rules regardless of position. ( Flying )"
            }
          ]
        },
        {
          "id": "8-9-2-score-victory-points",
          "title": "8.9.2 Score Victory Points",
          "rows": [
            {
              "type": "text",
              "html": "Both players simultaneously tally <b>VPs</b> based on the <b>Mission Card’s</b> scoring conditions.",
              "plain": "Both players simultaneously tally VPs based on the Mission Card’s scoring conditions."
            }
          ]
        },
        {
          "id": "8-9-3-end-of-game-check",
          "title": "8.9.3 End of Game Check",
          "rows": [
            {
              "type": "text",
              "html": "The game ends immediately if:",
              "plain": "The game ends immediately if:"
            },
            {
              "type": "bullet",
              "html": "A <b>Special Winning Condition</b> is fulfilled. The player who meets it wins outright.",
              "plain": "A Special Winning Condition is fulfilled. The player who meets it wins outright."
            },
            {
              "type": "bullet",
              "html": "A player has no <span class=\"kw\">models</span> on the battlefield and no <span class=\"kw\">Units</span> in <b><span class=\"kw\">Reserves</span></b>. The surviving player gains <b>+10 VP</b>.",
              "plain": "A player has no models on the battlefield and no Units in Reserves . The surviving player gains +10 VP ."
            },
            {
              "type": "bullet",
              "html": "The final Phase of the final Round (usually Round 5) is complete - proceed to Part <span class=\"ref\">8. 10</span>.",
              "plain": "The final Phase of the final Round (usually Round 5) is complete - proceed to Part 8. 10 ."
            }
          ]
        },
        {
          "id": "8-9-4-resolve-end-of-the-round-effects",
          "title": "8.9.4 Resolve End of the Round Effects",
          "rows": [
            {
              "type": "text",
              "html": "Resolve all &quot; End of the Round&quot; abilities and <b><span class=\"kw\">Tactical Cards</span></b>. The holder of the <b><span class=\"kw\">First Player Marker</span></b> resolves their first.",
              "plain": "Resolve all \" End of the Round\" abilities and Tactical Cards . The holder of the First Player Marker resolves their first."
            },
            {
              "type": "text",
              "html": "If a player has multiple ’End of the Round’ effects to resolve, that player chooses the order in which their effects resolve. Each effect is fully resolved before the next begins.",
              "plain": "If a player has multiple ’End of the Round’ effects to resolve, that player chooses the order in which their effects resolve. Each effect is fully resolved before the next begins."
            }
          ]
        },
        {
          "id": "8-9-5-cleanup-refresh",
          "title": "8.9.5 Cleanup & Refresh",
          "rows": [
            {
              "type": "bullet",
              "html": "Remove all <span class=\"kw\">Tokens</span> and <span class=\"kw\">Markers</span><b>except:</b>",
              "plain": "Remove all Tokens and Markers except:"
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Tokens</span> and <span class=\"kw\">Markers</span> with <b><span class=\"kw\">STAY IN PLAY</span></b>.",
              "plain": "Tokens and Markers with STAY IN PLAY ."
            },
            {
              "type": "bullet",
              "html": "<b>Damage <span class=\"kw\">Markers</span>.</b>",
              "plain": "Damage Markers ."
            },
            {
              "type": "bullet",
              "html": "<b><span class=\"kw\">Mission Markers</span>.</b>",
              "plain": "Mission Markers ."
            },
            {
              "type": "bullet",
              "html": "<b>Faction Indicator</b> s on <b><span class=\"kw\">Mission Markers</span></b>.",
              "plain": "Faction Indicator s on Mission Markers ."
            },
            {
              "type": "bullet",
              "html": "Flip all <b>Exhausted</b> Tactical and <b><span class=\"kw\">Faction Cards</span></b> back to their active (face-up) side.",
              "plain": "Flip all Exhausted Tactical and Faction Cards back to their active (face-up) side."
            }
          ]
        },
        {
          "id": "8-9-6-determine-initiative",
          "title": "8.9.6 Determine Initiative",
          "rows": [
            {
              "type": "bullet",
              "html": "Award the <b><span class=\"kw\">First Player Marker</span></b> to the player with <b>fewer</b> Victory Points.",
              "plain": "Award the First Player Marker to the player with fewer Victory Points."
            },
            {
              "type": "bullet",
              "html": "If tied, conduct a Roll-Off. The winner takes the <b><span class=\"kw\">First Player Marker</span></b>.",
              "plain": "If tied, conduct a Roll-Off. The winner takes the First Player Marker ."
            },
            {
              "type": "bullet",
              "html": "Begin Phase 1 of the next Round.",
              "plain": "Begin Phase 1 of the next Round."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> The choice of initiative going to the player with fewer Victory Points is a &quot; catch-up&quot; mechanic. The player behind goes first in the next Round, giving them a chance to reposition and compete for objectives before the leading player can secure their position. This prevents a runaway lead where the player who starts ahead always remains ahead by an ever-widening gap. When the <span class=\"kw\">Passing</span> mechanic is included (where the first player to <b>Pass</b> gets the <b><span class=\"kw\">First Player Marker</span></b> for the next Phase), initiative is no longer a static advantage but a fluid resource.",
              "plain": "DESIGNER’S NOTE: The choice of initiative going to the player with fewer Victory Points is a \" catch-up\" mechanic. The player behind goes first in the next Round, giving them a chance to reposition and compete for objectives before the leading player can secure their position. This prevents a runaway lead where the player who starts ahead always remains ahead by an ever-widening gap. When the Passing mechanic is included (where the first player to Pass gets the First Player Marker for the next Phase), initiative is no longer a static advantage but a fluid resource."
            }
          ]
        }
      ]
    },
    {
      "id": "8-10-the-final-score",
      "title": "8.10 The Final Score",
      "rows": [
        {
          "type": "text",
          "html": "When the last round is fired, and silence falls, the final victory hinges on territory gained and lives lost. Every objective taken, every <b><span class=\"kw\">Enemy</span></b> line crossed, every soldier kept in reserve – all details contribute to deciding the day’s victor. The battlefield tells a story, but the scoreboard tells who wrote it.",
          "plain": "When the last round is fired, and silence falls, the final victory hinges on territory gained and lives lost. Every objective taken, every Enemy line crossed, every soldier kept in reserve – all details contribute to deciding the day’s victor. The battlefield tells a story, but the scoreboard tells who wrote it."
        },
        {
          "type": "text",
          "html": "If the game ends by the Round Limit:",
          "plain": "If the game ends by the Round Limit:"
        },
        {
          "type": "bullet",
          "html": "<b>Mission Score:</b> Total all <b>VP</b> earned from objectives.",
          "plain": "Mission Score: Total all VP earned from objectives."
        },
        {
          "type": "bullet",
          "html": "<b>Final Round - All <span class=\"kw\">Units</span> Destroyed:</b> At the start of the final Scoring Phase, all <span class=\"kw\">Units</span> remaining in <b><span class=\"kw\">Reserves</span></b> are considered Destroyed. Each player is awarded Victory Points for these <span class=\"kw\">Units</span> as normal, following the <b>Mission Card's</b> scoring conditions for Destroyed <b><span class=\"kw\">Enemy</span></b> <span class=\"kw\">Units</span>.",
          "plain": "Final Round - All Units Destroyed: At the start of the final Scoring Phase, all Units remaining in Reserves are considered Destroyed. Each player is awarded Victory Points for these Units as normal, following the Mission Card's scoring conditions for Destroyed Enemy Units ."
        },
        {
          "type": "text",
          "html": "<b>Determine Winner:</b> The player with the highest final <b>VP</b> total wins.",
          "plain": "Determine Winner: The player with the highest final VP total wins."
        },
        {
          "type": "text",
          "html": "<b>Tiebreaker:</b> If both forces have scored the same number of total <b>VPs</b>, apply the <b>Mission Card’s</b> tiebreaker. If none is defined, the game is a <b>Draw.</b>",
          "plain": "Tiebreaker: If both forces have scored the same number of total VPs , apply the Mission Card’s tiebreaker. If none is defined, the game is a Draw."
        }
      ],
      "children": []
    }
  ]
};
window.__companionRuleParts['part-9'] = {
  "num": "9",
  "kicker": "Part IX",
  "title": "Preparing for Battle",
  "id": "part-9",
  "color": "#b38fa5",
  "group": "prepare",
  "introRows": [
    {
      "type": "text",
      "html": "Before any game begins, each player must prepare their forces, choose the mission and <span class=\"kw\">deployment</span> type, and set up the board. This section covers the entire pre-game procedure: building your army with <span class=\"kw\">Minerals</span> and <span class=\"kw\">Vespene Gas</span>, drafting the Mission and <span class=\"kw\">Deployment</span>, and setting up the battlefield.",
      "plain": "Before any game begins, each player must prepare their forces, choose the mission and deployment type, and set up the board. This section covers the entire pre-game procedure: building your army with Minerals and Vespene Gas , drafting the Mission and Deployment , and setting up the battlefield."
    }
  ],
  "rules": [
    {
      "id": "9-1-army-building",
      "title": "9.1 Army Building",
      "rows": [
        {
          "type": "text",
          "html": "Every battle begins long before the first shot is fired. Players will build an army using two resources: <span class=\"kw\">Minerals</span>, which are used for <span class=\"kw\">Units</span> and Upgrades, and <span class=\"kw\">Vespene Gas</span>, which is used for<b> <span class=\"kw\">Tactical Cards</span></b>.",
          "plain": "Every battle begins long before the first shot is fired. Players will build an army using two resources: Minerals , which are used for Units and Upgrades, and Vespene Gas , which is used for Tactical Cards ."
        }
      ],
      "children": [
        {
          "id": "9-1-1-engagement-scale",
          "title": "9.1.1 Engagement Scale",
          "rows": [
            {
              "type": "text",
              "html": "To ensure that forces are equal, players agree on the <span class=\"kw\">Engagement Scale</span> before building an army:",
              "plain": "To ensure that forces are equal, players agree on the Engagement Scale before building an army:"
            },
            {
              "type": "block",
              "html": "<table style=\"width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; \"><colgroup><col/><col/><col/><col/></colgroup><tbody><tr><td><p><span>Scale</span></p></td><td><p><span>Mineral Limit</span></p></td><td><p><span>Vespene Limit</span></p></td><td><p><span>Battlefield</span></p></td></tr><tr><td><p><span>Skirmish</span></p></td><td><p><span>Up to 1, 000</span></p></td><td><p><span>10% of <span class=\"kw\">Minerals</span></span></p></td><td><p><span>36\" × 36\"</span></p></td></tr><tr><td><p><span>Standard</span></p></td><td><p><span>Up to 2, 000</span></p></td><td><p><span>10% of <span class=\"kw\">Minerals</span></span></p></td><td><p><span>36\" × 54\"</span></p></td></tr><tr><td><p><span>Grand Offensive</span></p></td><td><p><span>2, 001+</span></p></td><td><p><span>10% of <span class=\"kw\">Minerals</span></span></p></td><td><p><span>36\" × 72\"</span></p></td></tr></tbody></table>",
              "plain": "Scale Mineral Limit Vespene Limit Battlefield Skirmish Up to 1, 000 10% of Minerals 36\" × 36\" Standard Up to 2, 000 10% of Minerals 36\" × 54\" Grand Offensive 2, 001+ 10% of Minerals 36\" × 72\""
            }
          ]
        },
        {
          "id": "9-1-2-selecting-race-and-faction",
          "title": "9.1.2 Selecting Race and Faction",
          "rows": [
            {
              "type": "text",
              "html": "The player chooses one of the three races - <b><span class=\"kw\">Terran</span></b>, <b><span class=\"kw\">Zerg</span></b>, or <b><span class=\"kw\">Protoss</span></b>, and then selects a single <b>Faction Card</b>. This card forms the basis of the army, providing the initial organisation slots (e. g. , <b><span class=\"kw\">Kerrigan</span>’s Swarm</b> 3× Core, 1× Hero, 2× Support) and determining which <span class=\"kw\">Units</span> and <b><span class=\"kw\">Tactical Cards</span></b> may be included.",
              "plain": "The player chooses one of the three races - Terran , Zerg , or Protoss , and then selects a single Faction Card . This card forms the basis of the army, providing the initial organisation slots (e. g. , Kerrigan ’s Swarm 3× Core, 1× Hero, 2× Support) and determining which Units and Tactical Cards may be included."
            },
            {
              "type": "text",
              "html": "<b>Faction Tag Eligibility</b>",
              "plain": "Faction Tag Eligibility"
            },
            {
              "type": "text",
              "html": "Every card in the game features <b><span class=\"kw\">Faction Tags</span></b>, which indicate the faction it belongs to. A <b>Faction Card</b> always displays a Race Tag (e. g. , <b><span class=\"kw\">Zerg</span></b>) and usually includes a <b>Sub-Faction Tag</b> as well (e. g. , <b><span class=\"kw\">KERRIGAN</span>’S BROOD</b>). <b><span class=\"kw\">Unit Cards</span></b> and <b><span class=\"kw\">Tactical Cards</span></b> also carry their own <b><span class=\"kw\">Faction Tags</span></b> in the same manner.",
              "plain": "Every card in the game features Faction Tags , which indicate the faction it belongs to. A Faction Card always displays a Race Tag (e. g. , Zerg ) and usually includes a Sub-Faction Tag as well (e. g. , KERRIGAN ’S BROOD ). Unit Cards and Tactical Cards also carry their own Faction Tags in the same manner."
            },
            {
              "type": "text",
              "html": "When building an army, the player checks whether a Unit or <b>Tactical Card</b> is allowed by comparing its <span class=\"kw\">tags</span> to the <b>Faction Card</b>. The rule is simple: every tag on the Unit or <b>Tactical Card</b> must also appear on the <b>Faction Card</b>. If even one tag does not match, that card cannot be included in the army. It does not matter how many other <span class=\"kw\">tags</span> match; a single incorrect tag is enough to disqualify it.",
              "plain": "When building an army, the player checks whether a Unit or Tactical Card is allowed by comparing its tags to the Faction Card . The rule is simple: every tag on the Unit or Tactical Card must also appear on the Faction Card . If even one tag does not match, that card cannot be included in the army. It does not matter how many other tags match; a single incorrect tag is enough to disqualify it."
            },
            {
              "type": "text",
              "html": "Cards with fewer <span class=\"kw\">tags</span> than the <b>Faction Card</b> are perfectly fine. A Unit only requires its own <span class=\"kw\">tags</span> to be present; it does not need to match every tag the <b>Faction Card</b> has.",
              "plain": "Cards with fewer tags than the Faction Card are perfectly fine. A Unit only requires its own tags to be present; it does not need to match every tag the Faction Card has."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE:</b>",
              "plain": "EXAMPLE:"
            },
            {
              "type": "text",
              "html": "A player selects the <b><span class=\"kw\">Zerg</span> Swarm</b><b>Faction Card</b>, which has one <b>Faction Tag</b>: <b><span class=\"kw\">Zerg</span></b>.",
              "plain": "A player selects the Zerg Swarm Faction Card , which has one Faction Tag : Zerg ."
            },
            {
              "type": "text",
              "html": "<b>Zerglings</b> (<b><span class=\"kw\">Faction Tags</span></b>: <b><span class=\"kw\">Zerg</span></b>) - <b>Eligible</b>. The only tag on the card is <b><span class=\"kw\">Zerg</span></b>, and <b><span class=\"kw\">Zerg</span></b> appears on the <b>Faction Card</b>.",
              "plain": "Zerglings ( Faction Tags : Zerg ) - Eligible . The only tag on the card is Zerg , and Zerg appears on the Faction Card ."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Kerrigan Swarm Raptor</span></b> (<b><span class=\"kw\">Faction Tags</span></b>: <b><span class=\"kw\">Zerg</span></b>, <b><span class=\"kw\">Kerrigan</span>’s Swarm)</b> - <b>Not eligible.</b><b><span class=\"kw\">Kerrigan</span>’s Swarm</b> does not appear on the <b>Faction Card</b>. Even in <b><span class=\"kw\">Zerg</span></b> matches, a single missing or incorrect tag disqualifies the card.",
              "plain": "Kerrigan Swarm Raptor ( Faction Tags : Zerg , Kerrigan ’s Swarm) - Not eligible. Kerrigan ’s Swarm does not appear on the Faction Card . Even in Zerg matches, a single missing or incorrect tag disqualifies the card."
            }
          ]
        },
        {
          "id": "9-1-3-minerals",
          "title": "9.1.3 Minerals",
          "rows": [
            {
              "type": "text",
              "html": "Spend <span class=\"kw\">Minerals</span> to recruit <span class=\"kw\">Units</span> and purchase Upgrades. The total Mineral cost must not exceed the <span class=\"kw\">Engagement Scale</span> limit. Unspent <span class=\"kw\">Minerals</span> are lost.",
              "plain": "Spend Minerals to recruit Units and purchase Upgrades. The total Mineral cost must not exceed the Engagement Scale limit. Unspent Minerals are lost."
            }
          ]
        },
        {
          "id": "9-1-4-vespene-gas",
          "title": "9.1.4 Vespene Gas",
          "rows": [
            {
              "type": "text",
              "html": "Spend <span class=\"kw\">Vespene Gas</span> exclusively on <b><span class=\"kw\">Tactical Cards</span></b>. It <b>cannot</b> be converted into <span class=\"kw\">Minerals</span>. Unspent <span class=\"kw\">Vespene Gas</span> is lost.",
              "plain": "Spend Vespene Gas exclusively on Tactical Cards . It cannot be converted into Minerals . Unspent Vespene Gas is lost."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE:</b> At Standard scale (2, 000 <span class=\"kw\">Minerals</span>), players have 200 <span class=\"kw\">Vespene Gas</span> (10%) to spend on <b><span class=\"kw\">Tactical Cards</span></b>.",
              "plain": "EXAMPLE: At Standard scale (2, 000 Minerals ), players have 200 Vespene Gas (10%) to spend on Tactical Cards ."
            }
          ]
        },
        {
          "id": "9-1-5-tactical-cards-and-army-slots",
          "title": "9.1.5 Tactical Cards and Army Slots",
          "rows": [
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Tactical Cards</span></b> unlock additional <b>Army Slots</b> (Core, Elite, Support, Air, Hero) beyond those provided by the<b> Faction Card</b>. <b><span class=\"kw\">Tactical Cards</span></b> may be purchased with <span class=\"kw\">Vespene Gas</span> to increase the number of available slots. All <b><span class=\"kw\">Tactical Cards</span></b> and the <b>Faction Card</b> are set face-up on the table before the game begins.",
              "plain": "Tactical Cards unlock additional Army Slots (Core, Elite, Support, Air, Hero) beyond those provided by the Faction Card . Tactical Cards may be purchased with Vespene Gas to increase the number of available slots. All Tactical Cards and the Faction Card are set face-up on the table before the game begins."
            },
            {
              "type": "text",
              "html": "Consult the Army Reference section (Part <span class=\"ref\">12. 11</span>) for each<b> Tactical Card’s</b> <span class=\"kw\">Vespene Gas</span> Costs.",
              "plain": "Consult the Army Reference section (Part 12. 11 ) for each Tactical Card’s Vespene Gas Costs."
            },
            {
              "type": "text",
              "html": "If a Tactical Card is marked as <b>Unique</b>, only one copy may be included in the army.",
              "plain": "If a Tactical Card is marked as Unique , only one copy may be included in the army."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE:</b> A <b>Barracks</b> card opens additional Core slots for <span class=\"kw\">Marine</span> <span class=\"kw\">Units</span>. An <b>Academy</b> card opens Support slots for Medics.",
              "plain": "EXAMPLE: A Barracks card opens additional Core slots for Marine Units . An Academy card opens Support slots for Medics."
            },
            {
              "type": "note",
              "html": "<b>DESIGNER’S NOTE:</b> Spending <span class=\"kw\">Vespene Gas</span> on cheap <b><span class=\"kw\">Tactical Cards</span></b> to open multiple Core slots - ignoring expensive upgrades - lets you flood the table with low-cost <span class=\"kw\">Units</span> early. The tabletop equivalent of a <i><span class=\"kw\">Zergling</span> Rush</i>.",
              "plain": "DESIGNER’S NOTE: Spending Vespene Gas on cheap Tactical Cards to open multiple Core slots - ignoring expensive upgrades - lets you flood the table with low-cost Units early. The tabletop equivalent of a Zergling Rush ."
            }
          ]
        },
        {
          "id": "9-1-6-mustering-units",
          "title": "9.1.6 Mustering Units",
          "rows": [
            {
              "type": "text",
              "html": "Fill available <b>Army Slots</b> with eligible <span class=\"kw\">Units</span>. Consult the Army Reference section (Part 12. 12) for each Unit’s available <b>Composition Options</b>. Each Composition Option lists a model count and its corresponding <b>Mineral Cost</b>. The player must select one Composition Option per Unit, which determines the number of <span class=\"kw\">models</span> in the Unit and its starting <b><span class=\"kw\">Supply Value</span></b>, as shown on the <b>Unit Card’s</b><b>Supply Profile</b>. A player cannot field a Unit at a model count that does not appear as a Composition Option. Each Unit occupies a number of <b>Army Slots</b> equal to its starting <b><span class=\"kw\">Supply Value</span></b>. Pay the Mineral Cost for every Unit recruited. Unused <b>Army Slots</b> are lost.",
              "plain": "Fill available Army Slots with eligible Units . Consult the Army Reference section (Part 12. 12) for each Unit’s available Composition Options . Each Composition Option lists a model count and its corresponding Mineral Cost . The player must select one Composition Option per Unit, which determines the number of models in the Unit and its starting Supply Value , as shown on the Unit Card’s Supply Profile . A player cannot field a Unit at a model count that does not appear as a Composition Option. Each Unit occupies a number of Army Slots equal to its starting Supply Value . Pay the Mineral Cost for every Unit recruited. Unused Army Slots are lost."
            },
            {
              "type": "text",
              "html": "Consult the Army Reference section (Part <span class=\"ref\">12. 10</span>) for each Unit&#x27; s available Composition Options and Mineral Costs.",
              "plain": "Consult the Army Reference section (Part 12. 10 ) for each Unit' s available Composition Options and Mineral Costs."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE</b>: A <b><span class=\"kw\">Zerg</span></b> player chooses <b><span class=\"kw\">Kerrigan</span>’s Swarm</b> as their <b>Faction Card</b>, which provides them with 2 Elite <b>Army Slots</b>. The player can recruit one small <span class=\"kw\">Hydralisk</span> Unit, as its <b><span class=\"kw\">Supply Value</span></b> indicates that it occupies exactly 2 Elite <b>Army Slots</b>. If the player wishes to include a full-strength <span class=\"kw\">Hydralisk</span> Unit instead, it will occupy 3 Elite <b>Army Slots</b>. Therefore, the player must add any <b>Tactical Card</b> to their army that provides an additional Elite <b><span class=\"kw\">Army Slot</span></b> as needed.",
              "plain": "EXAMPLE : A Zerg player chooses Kerrigan ’s Swarm as their Faction Card , which provides them with 2 Elite Army Slots . The player can recruit one small Hydralisk Unit, as its Supply Value indicates that it occupies exactly 2 Elite Army Slots . If the player wishes to include a full-strength Hydralisk Unit instead, it will occupy 3 Elite Army Slots . Therefore, the player must add any Tactical Card to their army that provides an additional Elite Army Slot as needed."
            }
          ]
        },
        {
          "id": "9-1-7-purchasing-upgrades",
          "title": "9.1.7 Purchasing Upgrades",
          "rows": [
            {
              "type": "text",
              "html": "Each <b>Unit Card</b> displays available upgrades on its reverse side. During <span class=\"kw\">Army Building</span>, a player may purchase any number of upgrades listed for that Unit, paying the listed cost for each. There is no limit to how many upgrades a Unit may have, provided each is a different entry on the card.",
              "plain": "Each Unit Card displays available upgrades on its reverse side. During Army Building , a player may purchase any number of upgrades listed for that Unit, paying the listed cost for each. There is no limit to how many upgrades a Unit may have, provided each is a different entry on the card."
            },
            {
              "type": "text",
              "html": "A purchased upgrade applies to <b>every</b> model in the Unit unless it has the <b><span class=\"kw\">SPECIALIST</span></b> keyword. If the upgrade adds a new weapon or ability, all <span class=\"kw\">models</span> gain it. If the entry shows <b>↑ FOR [Weapon Name]</b>, it is a replacement; every model carrying the named weapon loses it entirely and gains the upgrade weapon instead.",
              "plain": "A purchased upgrade applies to every model in the Unit unless it has the SPECIALIST keyword. If the upgrade adds a new weapon or ability, all models gain it. If the entry shows ↑ FOR [Weapon Name] , it is a replacement; every model carrying the named weapon loses it entirely and gains the upgrade weapon instead."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">SPECIALIST</span></b> upgrades work differently. Only <b>one</b> model in the Unit may carry each <span class=\"kw\">SPECIALIST</span> upgrade. The player nominates which model receives it during <span class=\"kw\">Army Building</span>; all other <span class=\"kw\">models</span> keep their original equipment. A Unit may not purchase the same <span class=\"kw\">SPECIALIST</span> upgrade more than once, but it can buy two or more <b>different</b> <span class=\"kw\">SPECIALIST</span> upgrades, each assigned to a <b>different</b> nominated model.",
              "plain": "SPECIALIST upgrades work differently. Only one model in the Unit may carry each SPECIALIST upgrade. The player nominates which model receives it during Army Building ; all other models keep their original equipment. A Unit may not purchase the same SPECIALIST upgrade more than once, but it can buy two or more different SPECIALIST upgrades, each assigned to a different nominated model."
            },
            {
              "type": "text",
              "html": "Since a nominated model now carries a different weapon from the rest of the Unit, it resolves its attacks as a separate Batch during the Attack Sequence (Part <span class=\"ref\">8. 7. 3</span>).",
              "plain": "Since a nominated model now carries a different weapon from the rest of the Unit, it resolves its attacks as a separate Batch during the Attack Sequence (Part 8. 7. 3 )."
            },
            {
              "type": "example",
              "html": "<b>EXAMPLE:</b> A player purchases a Rocket Launcher (<span class=\"kw\">SPECIALIST</span>) and an AGG-12 (<span class=\"kw\">SPECIALIST</span>, ↑ FOR C-14 Rifle) for a Unit of 6 Marines. One <span class=\"kw\">Marine</span> is nominated to carry the Rocket Launcher alongside the C-14 Rifle. A second <span class=\"kw\">Marine</span> is nominated to carry the AGG-12, losing their C-14 Rifle. The remaining 4 Marines keep their C-14 Rifles.",
              "plain": "EXAMPLE: A player purchases a Rocket Launcher ( SPECIALIST ) and an AGG-12 ( SPECIALIST , ↑ FOR C-14 Rifle) for a Unit of 6 Marines. One Marine is nominated to carry the Rocket Launcher alongside the C-14 Rifle. A second Marine is nominated to carry the AGG-12, losing their C-14 Rifle. The remaining 4 Marines keep their C-14 Rifles."
            }
          ]
        },
        {
          "id": "9-1-8-team-games",
          "title": "9.1.8 Team Games",
          "rows": [
            {
              "type": "text",
              "html": "In multiplayer games (2v2, 3v3, Free-For-All), agree on a Total Mineral Value per team. Teams divide the budget among players as they wish, provided the team&#x27; s total remains <span class=\"kw\">within</span> the allowed limits. Each player builds their own army independently, selecting their own Faction Card and <span class=\"kw\">Tactical Cards</span>. Teammates may choose the same or different Races.",
              "plain": "In multiplayer games (2v2, 3v3, Free-For-All), agree on a Total Mineral Value per team. Teams divide the budget among players as they wish, provided the team' s total remains within the allowed limits. Each player builds their own army independently, selecting their own Faction Card and Tactical Cards . Teammates may choose the same or different Races."
            }
          ]
        },
        {
          "id": "9-1-9-summoned-units",
          "title": "9.1.9 Summoned Units",
          "rows": [
            {
              "type": "text",
              "html": "Some <span class=\"kw\">Units</span>, such as the Roachling, Point Defence Drone, and Pylon, have no Mineral Cost. These are <b>Summoned</b> <span class=\"kw\">Units</span>:",
              "plain": "Some Units , such as the Roachling, Point Defence Drone, and Pylon, have no Mineral Cost. These are Summoned Units :"
            },
            {
              "type": "bullet",
              "html": "They are not included in the <b>Army List</b> during <span class=\"kw\">army building</span> and do not occupy any <b>Army Slots</b>.",
              "plain": "They are not included in the Army List during army building and do not occupy any Army Slots ."
            },
            {
              "type": "bullet",
              "html": "They are not in <b><span class=\"kw\">Reserves</span></b> at the start of the game.",
              "plain": "They are not in Reserves at the start of the game."
            },
            {
              "type": "bullet",
              "html": "<b>Summoned</b> <span class=\"kw\">Units</span> cannot be deployed using the regular <span class=\"kw\">deployment</span> rules. They are deployed only when a <b><span class=\"kw\">Special Ability</span></b>, such as <span class=\"kw\">SUMMON</span>, specifically puts them on the battlefield.",
              "plain": "Summoned Units cannot be deployed using the regular deployment rules. They are deployed only when a Special Ability , such as SUMMON , specifically puts them on the battlefield."
            },
            {
              "type": "bullet",
              "html": "Once on the battlefield, treat them as <b><span class=\"kw\">Friendly</span></b> <span class=\"kw\">Units</span> for all rule purposes unless stated otherwise.",
              "plain": "Once on the battlefield, treat them as Friendly Units for all rule purposes unless stated otherwise."
            },
            {
              "type": "bullet",
              "html": "<span class=\"kw\">Summoned Units</span> are not used for <span class=\"kw\">The Final Score</span>.",
              "plain": "Summoned Units are not used for The Final Score ."
            },
            {
              "type": "bullet",
              "html": "Once on the battlefield, a Summoned Unit&#x27; s <b><span class=\"kw\">Current Supply Value</span></b> counts towards the player&#x27; s <b>Total Current Supply</b> on the battlefield.",
              "plain": "Once on the battlefield, a Summoned Unit' s Current Supply Value counts towards the player' s Total Current Supply on the battlefield."
            }
          ]
        },
        {
          "id": "9-1-10-army-roster-visibility",
          "title": "9.1.10 Army Roster Visibility",
          "rows": [
            {
              "type": "text",
              "html": "<b>Tournament Override:</b> Organised tournaments may use their own roster visibility rules, which override the default rules below. Always check the Tournament Organiser’s rules pack before attending.",
              "plain": "Tournament Override: Organised tournaments may use their own roster visibility rules, which override the default rules below. Always check the Tournament Organiser’s rules pack before attending."
            },
            {
              "type": "text",
              "html": "<b>Default: Open Lists</b>",
              "plain": "Default: Open Lists"
            },
            {
              "type": "text",
              "html": "By default, both players share their entire army rosters - including all Unit selections, upgrades, and weapon swaps with each other before the game starts. Since <b><span class=\"kw\">Tactical Cards</span></b> and the <b>Faction Card</b> are already set face-up on the table, Open Lists go one step further by revealing exactly which <span class=\"kw\">Units</span> and upgrades the opponent has selected. This enables both players to plan their strategy with full information and is the recommended way to play.",
              "plain": "By default, both players share their entire army rosters - including all Unit selections, upgrades, and weapon swaps with each other before the game starts. Since Tactical Cards and the Faction Card are already set face-up on the table, Open Lists go one step further by revealing exactly which Units and upgrades the opponent has selected. This enables both players to plan their strategy with full information and is the recommended way to play."
            },
            {
              "type": "text",
              "html": "<b>Optional: Closed Lists</b> Before the game begins, both players may agree to play with Closed Lists instead. If either player does not agree, default to Open Lists.",
              "plain": "Optional: Closed Lists Before the game begins, both players may agree to play with Closed Lists instead. If either player does not agree, default to Open Lists."
            },
            {
              "type": "text",
              "html": "Under Closed Lists, army rosters are <span class=\"kw\">hidden</span>. Neither player is required to reveal their <b>Army List</b> or Unit upgrades before the game starts. The specific <span class=\"kw\">Units</span> in a player’s roster are discovered during play as they are deployed. However, all <b><span class=\"kw\">Tactical Cards</span></b> and the <b>Faction Card</b> must still be set face-up on the table before the game begins. Both players may inspect each other’s <b><span class=\"kw\">Tactical Cards</span></b> and <b><span class=\"kw\">Faction Cards</span></b> at any time.",
              "plain": "Under Closed Lists, army rosters are hidden . Neither player is required to reveal their Army List or Unit upgrades before the game starts. The specific Units in a player’s roster are discovered during play as they are deployed. However, all Tactical Cards and the Faction Card must still be set face-up on the table before the game begins. Both players may inspect each other’s Tactical Cards and Faction Cards at any time."
            },
            {
              "type": "text",
              "html": "Once a Unit is set on the battlefield, the <span class=\"kw\">controlling player</span> must immediately inform the opponent of any upgrades or weapon swaps that the Unit carries. This includes replacement weapons purchased through the Upgrade system (Part <span class=\"ref\">9. 1. 7</span>) or any other modifications that affect how the Unit behaves. The opponent is entitled to inspect the <b>Unit Card</b> and any associated <b><span class=\"kw\">Tactical Cards</span></b> at any time while that Unit is on the table.",
              "plain": "Once a Unit is set on the battlefield, the controlling player must immediately inform the opponent of any upgrades or weapon swaps that the Unit carries. This includes replacement weapons purchased through the Upgrade system (Part 9. 1. 7 ) or any other modifications that affect how the Unit behaves. The opponent is entitled to inspect the Unit Card and any associated Tactical Cards at any time while that Unit is on the table."
            },
            {
              "type": "text",
              "html": "<b>Abathur’s TIP:</b> While Open Lists are the default, we strongly recommend trying Closed Lists for the best StarCraft experience. The way <span class=\"kw\">Units</span> are introduced to the battlefield one at a time mirrors the fog of war that defines StarCraft: you scout, you react, you adapt. Not knowing exactly what your opponent is fielding until it <span class=\"kw\">hits</span> the table creates genuine tension and rewards sharp play. Before the first Unit ever <span class=\"kw\">hits</span> the table, take a look at your opponent’s <b><span class=\"kw\">Tactical Cards</span></b> and <b>Faction Card</b>. Each <b>Tactical Card</b> has its own set of <b>Army Slots</b>: Core, Elite, Support, Air, and Hero. These slots determine which <span class=\"kw\">Units</span> can occupy them. By studying what’s on the table, an experienced player can make an educated guess about which <span class=\"kw\">Units</span> are still viable in their opponent’s roster. The Barracks <b>Tactical Card</b> suggests Marines and Marauders. The Spawning Pool <b>Tactical Card</b> suggests Zerglings. The Robotics Facility <b>Tactical Card</b> suggests Colossi and Immortals. Reading your opponent’s <b><span class=\"kw\">Tactical Cards</span></b> is your first act of scouting - just like in the video game.",
              "plain": "Abathur’s TIP: While Open Lists are the default, we strongly recommend trying Closed Lists for the best StarCraft experience. The way Units are introduced to the battlefield one at a time mirrors the fog of war that defines StarCraft: you scout, you react, you adapt. Not knowing exactly what your opponent is fielding until it hits the table creates genuine tension and rewards sharp play. Before the first Unit ever hits the table, take a look at your opponent’s Tactical Cards and Faction Card . Each Tactical Card has its own set of Army Slots : Core, Elite, Support, Air, and Hero. These slots determine which Units can occupy them. By studying what’s on the table, an experienced player can make an educated guess about which Units are still viable in their opponent’s roster. The Barracks Tactical Card suggests Marines and Marauders. The Spawning Pool Tactical Card suggests Zerglings. The Robotics Facility Tactical Card suggests Colossi and Immortals. Reading your opponent’s Tactical Cards is your first act of scouting - just like in the video game."
            }
          ]
        },
        {
          "id": "9-1-11-representation-and-disclosure",
          "title": "9.1.11 Representation and Disclosure",
          "rows": [
            {
              "type": "text",
              "html": "All <span class=\"kw\">models</span> should, where possible, accurately depict the weapons and equipment listed on their <b>Unit Card</b>. A <span class=\"kw\">Marine</span> equipped with an AGG-12 should carry that weapon on the model, not a standard C-14 Rifle. Accurate modelling allows both players to identify each model’s loadout at a glance.",
              "plain": "All models should, where possible, accurately depict the weapons and equipment listed on their Unit Card . A Marine equipped with an AGG-12 should carry that weapon on the model, not a standard C-14 Rifle. Accurate modelling allows both players to identify each model’s loadout at a glance."
            },
            {
              "type": "text",
              "html": "Where a model does not accurately represent its equipment - such as a model awaiting conversion, or a Unit carrying weapon swaps that are not visually distinct - the <span class=\"kw\">controlling player</span> is obliged to declare all non-represented upgrades and equipment the moment that Unit is deployed to the battlefield. Furthermore, the <span class=\"kw\">controlling player</span> must remind their opponent of any such differences before any action where this information could be relevant - including, but not limited to, declaring <b><span class=\"kw\">Charge</span></b> targets, selecting Shooting targets, or committing to a critical activation.",
              "plain": "Where a model does not accurately represent its equipment - such as a model awaiting conversion, or a Unit carrying weapon swaps that are not visually distinct - the controlling player is obliged to declare all non-represented upgrades and equipment the moment that Unit is deployed to the battlefield. Furthermore, the controlling player must remind their opponent of any such differences before any action where this information could be relevant - including, but not limited to, declaring Charge targets, selecting Shooting targets, or committing to a critical activation."
            },
            {
              "type": "text",
              "html": "Both players have the right to full and accurate knowledge of all equipment on the battlefield at all times. Failing to disclose non-represented upgrades or equipment is considered unsportsmanlike conduct.",
              "plain": "Both players have the right to full and accurate knowledge of all equipment on the battlefield at all times. Failing to disclose non-represented upgrades or equipment is considered unsportsmanlike conduct."
            }
          ]
        }
      ]
    },
    {
      "id": "9-2-mission-selection-and-the-draft",
      "title": "9.2 Mission Selection and the Draft",
      "rows": [
        {
          "type": "text",
          "html": "Before the game starts, players use a short draft to determine the Mission and <span class=\"kw\">Deployment</span> for the battle. The draft ensures neither player enters with a pre-arranged advantage - both sides have equal say in what is played and where.",
          "plain": "Before the game starts, players use a short draft to determine the Mission and Deployment for the battle. The draft ensures neither player enters with a pre-arranged advantage - both sides have equal say in what is played and where."
        },
        {
          "type": "microhead",
          "html": "<b>WHAT YOU NEED</b>",
          "plain": "WHAT YOU NEED"
        },
        {
          "type": "text",
          "html": "Each player brings 2 <b><span class=\"kw\">Mission Cards</span></b> and 2 <b><span class=\"kw\">Deployment Cards</span></b> to the table. A player may not bring duplicate cards in their own set, although both players may independently bring the same cards as each other.",
          "plain": "Each player brings 2 Mission Cards and 2 Deployment Cards to the table. A player may not bring duplicate cards in their own set, although both players may independently bring the same cards as each other."
        },
        {
          "type": "text",
          "html": "Arrange all cards face-up in two rows:",
          "plain": "Arrange all cards face-up in two rows:"
        },
        {
          "type": "bullet",
          "html": "<b>Row 1:</b><b><span class=\"kw\">Mission Cards</span></b>",
          "plain": "Row 1: Mission Cards"
        },
        {
          "type": "bullet",
          "html": "<b>Row 2: <span class=\"kw\">Deployment Cards</span></b>",
          "plain": "Row 2: Deployment Cards"
        },
        {
          "type": "microhead",
          "html": "<b>STEP 1 - ROLL-OFF</b>",
          "plain": "STEP 1 - ROLL-OFF"
        },
        {
          "type": "text",
          "html": "Both players Roll-Off (Part <span class=\"ref\">3. 2</span>). The winner makes two choices, in order:",
          "plain": "Both players Roll-Off (Part 3. 2 ). The winner makes two choices, in order:"
        },
        {
          "type": "bullet",
          "html": "<b>Choice 1 - Colour:</b> Declare yourself the Red Player or the Blue Player. This determines your <b><span class=\"kw\">Entry Edge</span></b>, <b><span class=\"kw\">Zone of Influence</span></b>, and <b>Mission Marker</b> affinity for the entire game.",
          "plain": "Choice 1 - Colour: Declare yourself the Red Player or the Blue Player. This determines your Entry Edge , Zone of Influence , and Mission Marker affinity for the entire game."
        },
        {
          "type": "bullet",
          "html": "<b>Choice 2 - Draft Control:</b> Choose to control either the <b>Mission Draft</b> or the <b><span class=\"kw\">Deployment</span> Draft</b>. Your opponent automatically controls the other.",
          "plain": "Choice 2 - Draft Control: Choose to control either the Mission Draft or the Deployment Draft . Your opponent automatically controls the other."
        },
        {
          "type": "text",
          "html": "<b>Abathur’s TIP:</b> Controlling the <b>Mission Draft</b> secures the victory conditions that suit your army. Controlling the <b><span class=\"kw\">Deployment</span> Draft</b> shapes the geometry of the battlefield - tight <span class=\"kw\">deployment</span> zones favour melee armies; spread-out zones favour ranged ones.",
          "plain": "Abathur’s TIP: Controlling the Mission Draft secures the victory conditions that suit your army. Controlling the Deployment Draft shapes the geometry of the battlefield - tight deployment zones favour melee armies; spread-out zones favour ranged ones."
        },
        {
          "type": "microhead",
          "html": "<b>STEP 2 - RESOLVE THE MISSION DRAFT</b>",
          "plain": "STEP 2 - RESOLVE THE MISSION DRAFT"
        },
        {
          "type": "bullet",
          "html": "The player without <b>Mission Draft</b> control removes any 2 <b><span class=\"kw\">Mission Cards</span></b> from the table.",
          "plain": "The player without Mission Draft control removes any 2 Mission Cards from the table."
        },
        {
          "type": "bullet",
          "html": "The player with <b>Mission Draft</b> control selects 1 of the 2 remaining cards. This becomes the Mission for the game. Discard the last card.",
          "plain": "The player with Mission Draft control selects 1 of the 2 remaining cards. This becomes the Mission for the game. Discard the last card."
        },
        {
          "type": "microhead",
          "html": "<b>STEP 3 - RESOLVE THE <span class=\"kw\">DEPLOYMENT</span> DRAFT</b>",
          "plain": "STEP 3 - RESOLVE THE DEPLOYMENT DRAFT"
        },
        {
          "type": "text",
          "html": "Repeat the same process for the <b><span class=\"kw\">Deployment Cards</span></b>:",
          "plain": "Repeat the same process for the Deployment Cards :"
        },
        {
          "type": "bullet",
          "html": "The player without <b><span class=\"kw\">Deployment</span> Draft</b> control removes any 2 <b><span class=\"kw\">Deployment Cards</span></b> from the table.",
          "plain": "The player without Deployment Draft control removes any 2 Deployment Cards from the table."
        },
        {
          "type": "bullet",
          "html": "The player with <b><span class=\"kw\">Deployment</span> Draft</b> control selects 1 of the 2 remaining cards. This becomes the <span class=\"kw\">Deployment</span> for the game. Discard the last card.",
          "plain": "The player with Deployment Draft control selects 1 of the 2 remaining cards. This becomes the Deployment for the game. Discard the last card."
        },
        {
          "type": "microhead",
          "html": "<b>STEP 4 - MARKER AFFINITY</b>",
          "plain": "STEP 4 - MARKER AFFINITY"
        },
        {
          "type": "text",
          "html": "Once both cards are chosen, assign <b><span class=\"kw\">Mission Markers</span>’</b> affinity according to the Marker number:",
          "plain": "Once both cards are chosen, assign Mission Markers ’ affinity according to the Marker number:"
        },
        {
          "type": "text",
          "html": "Marker Affinity:",
          "plain": "Marker Affinity:"
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Markers</span> 1 and 3 begin under the Red Player&#x27; s control.",
          "plain": "Markers 1 and 3 begin under the Red Player' s control."
        },
        {
          "type": "bullet",
          "html": "<span class=\"kw\">Markers</span> 2 and 4 begin under the Blue Player&#x27; s control.",
          "plain": "Markers 2 and 4 begin under the Blue Player' s control."
        },
        {
          "type": "bullet",
          "html": "Marker 5 begins Neutral.",
          "plain": "Marker 5 begins Neutral."
        },
        {
          "type": "text",
          "html": "Marker affinity indicates which player&#x27; s colour is printed on each Marker. It does not grant starting control.",
          "plain": "Marker affinity indicates which player' s colour is printed on each Marker. It does not grant starting control."
        },
        {
          "type": "text",
          "html": "Proceed to <span class=\"kw\">Battlefield Setup</span> (Part <span class=\"ref\">9. 3</span>).",
          "plain": "Proceed to Battlefield Setup (Part 9. 3 )."
        }
      ],
      "children": [
        {
          "id": "9-2-1-mission-and-deployment-card-details",
          "title": "9.2.1 Mission and Deployment Card Details",
          "rows": [
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Mission Cards</span></b> define the game’s victory conditions and pacing. Each <b>Mission Card</b> details Timing Windows for triggered rules, the <b>Starting Supply</b> and <b>Escalation</b> values that control the rate at which armies grow, the Game Length (usually 5 rounds), and any Additional Conditions such as <span class=\"kw\">instant</span> win scenarios.",
              "plain": "Mission Cards define the game’s victory conditions and pacing. Each Mission Card details Timing Windows for triggered rules, the Starting Supply and Escalation values that control the rate at which armies grow, the Game Length (usually 5 rounds), and any Additional Conditions such as instant win scenarios."
            },
            {
              "type": "text",
              "html": "<b><span class=\"kw\">Deployment Cards</span></b> define the battlefield’s physical layout. Each <b><span class=\"kw\">Deployment</span> Card</b> details the battlefield dimensions, the coordinates for <b><span class=\"kw\">Mission Markers</span></b> 1 through 5, the <b>Entry</b><b>Edge</b> definitions for each player, and the <b><span class=\"kw\">Zone of Influence</span>,</b> which extends 6&quot; inward from each player’s <b><span class=\"kw\">Entry Edge</span></b>.",
              "plain": "Deployment Cards define the battlefield’s physical layout. Each Deployment Card details the battlefield dimensions, the coordinates for Mission Markers 1 through 5, the Entry Edge definitions for each player, and the Zone of Influence , which extends 6\" inward from each player’s Entry Edge ."
            },
            {
              "type": "text",
              "html": "<b>Marker Affinity:</b> Once the draft is complete, each <b>Mission Marker</b> gains an affinity based on its number. Odd-numbered <span class=\"kw\">Markers</span> (1 and 3) belong to the Red Player, even-numbered <span class=\"kw\">Markers</span> (2 and 4) belong to the Blue Player, and Marker 5 is always Neutral.",
              "plain": "Marker Affinity: Once the draft is complete, each Mission Marker gains an affinity based on its number. Odd-numbered Markers (1 and 3) belong to the Red Player, even-numbered Markers (2 and 4) belong to the Blue Player, and Marker 5 is always Neutral."
            }
          ]
        }
      ]
    },
    {
      "id": "9-3-battlefield-setup",
      "title": "9.3 Battlefield Setup",
      "rows": [
        {
          "type": "text",
          "html": "Once the draft is complete and both cards have been chosen, the battlefield is set up in the following order.",
          "plain": "Once the draft is complete and both cards have been chosen, the battlefield is set up in the following order."
        },
        {
          "type": "bullet",
          "html": "First, confirm the table dimensions as specified on the selected <b><span class=\"kw\">Deployment</span> Card</b>.",
          "plain": "First, confirm the table dimensions as specified on the selected Deployment Card ."
        },
        {
          "type": "bullet",
          "html": "Second, assign <b>Entry Edges</b> to each player as indicated on the <b><span class=\"kw\">Deployment</span> Card</b>.",
          "plain": "Second, assign Entry Edges to each player as indicated on the Deployment Card ."
        },
        {
          "type": "bullet",
          "html": "Third, set <b><span class=\"kw\">Zone of Influence</span> <span class=\"kw\">Markers</span></b> at the corners of each player’s <b><span class=\"kw\">Entry Edge</span></b> where the <b><span class=\"kw\">Entry Edge</span></b> does not run the full length of a table edge, exactly as instructed by the <b><span class=\"kw\">Deployment</span> Card</b>.",
          "plain": "Third, set Zone of Influence Markers at the corners of each player’s Entry Edge where the Entry Edge does not run the full length of a table edge, exactly as instructed by the Deployment Card ."
        },
        {
          "type": "bullet",
          "html": "Fourth, set <b><span class=\"kw\">Mission Markers</span></b> at the coordinates listed on the selected <b><span class=\"kw\">Deployment</span> Card</b>.",
          "plain": "Fourth, set Mission Markers at the coordinates listed on the selected Deployment Card ."
        },
        {
          "type": "bullet",
          "html": "Finally, set terrain by either selecting or rolling for one of the pre-made maps on the last pages of the rulebook, or starting with the Red Player, players alternate placing one terrain piece at a time based on the terrain density guide below.",
          "plain": "Finally, set terrain by either selecting or rolling for one of the pre-made maps on the last pages of the rulebook, or starting with the Red Player, players alternate placing one terrain piece at a time based on the terrain density guide below."
        },
        {
          "type": "text",
          "html": "<b>Terrain Density Guidelines</b>",
          "plain": "Terrain Density Guidelines"
        },
        {
          "type": "text",
          "html": "A balanced battlefield requires enough terrain for tactical choices without restricting movement or blocking sight lines. The following guidelines apply to a <b>Standard (36\" x</b><b>54\")</b> table and should be scaled proportionally for other sizes.",
          "plain": "A balanced battlefield requires enough terrain for tactical choices without restricting movement or blocking sight lines. The following guidelines apply to a Standard (36\" x 54\") table and should be scaled proportionally for other sizes."
        },
        {
          "type": "text",
          "html": "<b>Recommended Terrain Count:</b> 8 to 12 pieces total, distributed as follows:",
          "plain": "Recommended Terrain Count: 8 to 12 pieces total, distributed as follows:"
        },
        {
          "type": "bullet",
          "html": "<b>0 to 2 pieces of Size 0</b> (scatter terrain).",
          "plain": "0 to 2 pieces of Size 0 (scatter terrain)."
        },
        {
          "type": "bullet",
          "html": "<b>2 to 4 pieces of Size 1</b> (barricades, low walls, scatter crates). These provide <span class=\"kw\">Cover</span> for infantry but do not block <b><span class=\"kw\">Line of Sight</span></b> for anything larger than Size 1 <span class=\"kw\">models</span>.",
          "plain": "2 to 4 pieces of Size 1 (barricades, low walls, scatter crates). These provide Cover for infantry but do not block Line of Sight for anything larger than Size 1 models ."
        },
        {
          "type": "bullet",
          "html": "<b>4 to 6 pieces of Size 2</b> (ruins, bunkers, wrecked vehicles). These form the backbone of the table, blocking LoS for most standard <span class=\"kw\">Units</span> and creating the fire lanes and chokepoints that define the game.",
          "plain": "4 to 6 pieces of Size 2 (ruins, bunkers, wrecked vehicles). These form the backbone of the table, blocking LoS for most standard Units and creating the fire lanes and chokepoints that define the game."
        },
        {
          "type": "bullet",
          "html": "<b>(If available) 1 to 2 pieces of Size 3+.</b> These create <b>HIGH GROUND</b> positions and block LoS for almost everything. Too many of these make ranged combat nearly impossible; too few leave the table feeling flat.",
          "plain": "(If available) 1 to 2 pieces of Size 3+. These create HIGH GROUND positions and block LoS for almost everything. Too many of these make ranged combat nearly impossible; too few leave the table feeling flat."
        },
        {
          "type": "bullet",
          "html": "<b>4 to 6 pieces of <span class=\"kw\">Grass</span> (Size 2 special)</b>. These do not block movement but provide a natural LoS <span class=\"kw\">cover</span> for <span class=\"kw\">Units</span> advancing across open ground.",
          "plain": "4 to 6 pieces of Grass (Size 2 special) . These do not block movement but provide a natural LoS cover for Units advancing across open ground."
        },
        {
          "type": "text",
          "html": "<b>Distribution:</b> Divide the table visually into four quarters. Each quarter should contain at least 2 significant pieces (Size 2 or larger). No quarter should be completely empty, and none should be so dense that <span class=\"kw\">Units</span> cannot manoeuvre through it.",
          "plain": "Distribution: Divide the table visually into four quarters. Each quarter should contain at least 2 significant pieces (Size 2 or larger). No quarter should be completely empty, and none should be so dense that Units cannot manoeuvre through it."
        },
        {
          "type": "text",
          "html": "<b>The Centre:</b> The area <b><span class=\"kw\">Within</span> 6\"</b> of the table centre should contain at least one significant terrain piece. An empty centre creates a kill zone that punishes whoever moves first and can stall the game. Conversely, a completely blocked centre forces all engagements to the flanks.",
          "plain": "The Centre: The area Within 6\" of the table centre should contain at least one significant terrain piece. An empty centre creates a kill zone that punishes whoever moves first and can stall the game. Conversely, a completely blocked centre forces all engagements to the flanks."
        },
        {
          "type": "text",
          "html": "<b>Fire Lanes:</b> Ensure that at least 2 clear fire lanes of 6&quot; or wider exist, running roughly from one <b><span class=\"kw\">Entry Edge</span></b> towards the other. Without fire lanes, ranged <span class=\"kw\">Units</span> have no role, and melee armies dominate unchecked.",
          "plain": "Fire Lanes: Ensure that at least 2 clear fire lanes of 6\" or wider exist, running roughly from one Entry Edge towards the other. Without fire lanes, ranged Units have no role, and melee armies dominate unchecked."
        },
        {
          "type": "text",
          "html": "<b>Access Points:</b> Every piece of Size 3+ terrain that <span class=\"kw\">models</span> can stand on should have at least one <span class=\"kw\">ACCESS POINT</span> reachable from <b>GROUND LEVEL</b> without <span class=\"kw\">passing</span> through another Size 2+ terrain piece. Elevated positions that are unreachable waste table space.",
          "plain": "Access Points: Every piece of Size 3+ terrain that models can stand on should have at least one ACCESS POINT reachable from GROUND LEVEL without passing through another Size 2+ terrain piece. Elevated positions that are unreachable waste table space."
        },
        {
          "type": "text",
          "html": "<b>Abathur’s TIP:</b> The placement of terrain is the very first strategic <span class=\"kw\">move</span> of the game, made before any miniature is set on the board. If you have a force that excels at ranged combat, position your tall <span class=\"kw\">blocking terrain</span> pieces towards the centre to block fire lanes along the edges and direct melee armies into confined spaces. If your force is better at close-range combat, manipulate the terrain to create opportunities for sneaky movements unseen by ranged fire. Always consider the <b><span class=\"kw\">Mission Markers</span></b>; placing terrain near a Marker makes it easier to <span class=\"kw\">hold</span> with <span class=\"kw\">Cover</span>, while leaving a Marker exposed likely benefits those with the most aggressive ranged fire.",
          "plain": "Abathur’s TIP: The placement of terrain is the very first strategic move of the game, made before any miniature is set on the board. If you have a force that excels at ranged combat, position your tall blocking terrain pieces towards the centre to block fire lanes along the edges and direct melee armies into confined spaces. If your force is better at close-range combat, manipulate the terrain to create opportunities for sneaky movements unseen by ranged fire. Always consider the Mission Markers ; placing terrain near a Marker makes it easier to hold with Cover , while leaving a Marker exposed likely benefits those with the most aggressive ranged fire."
        }
      ],
      "children": []
    }
  ]
};


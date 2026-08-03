# Design Brief: AISmallBiz

## Direction
Premium light minimalism with warm orange primary and reserved Electric Indigo accent. Editorial serif headlines, calm approachable body text, card-based discovery. The /learn route adds a guided learning ladder: a numbered vertical path with checkmarks and a Next button, not a menu.

## Tone
Refined, calm, professional, and warm. Purposeful minimalism with clear information hierarchy for busy small business owners who may hardly know how to use a computer.

## Differentiation
The learning ladder on /learn: a literal vertical climb through three tiers, each step a numbered node on a rail with a checkmark state and a Next button. Orange marks the active step, reserved indigo marks completed checkmarks, green marks tier completion. The "Expired" amber badge on past NYC courses signals "you missed this, but it repeats weekly."

## Color Palette

| Token | RGB Light | RGB Dark | Role |
|-------|-----------|----------|------|
| background | 249 249 251 | 9 9 11 | soft off-white / deep zinc |
| foreground | 9 9 11 | 249 249 251 | deep charcoal / warm white |
| card | 255 255 255 | 24 24 27 | bright white / dark card |
| primary | 245 158 11 | 251 191 36 | orange CTAs, active ladder node, Next button |
| primary-text | 180 83 9 | 253 186 116 | accessible orange text on cream |
| accent-indigo | 99 102 241 | 129 140 248 | reserved: CTAs, links, checklist accents, completed checkmarks |
| success | 34 197 94 | 74 222 128 | tier completion indicators |
| warning | 234 179 8 | 250 204 21 | expired course badges |
| muted | 244 244 245 | 39 39 42 | subtle gray backgrounds |
| border | 228 228 231 | 39 39 42 | soft dividers |

## Typography
Display: Playfair Display serif for hero and tier titles. Body: Inter for UI text and paragraphs. Mono: JetBrains Mono for timestamps and code. Scale: hero clamp 1.25rem to 3.2rem; section clamp 1.5rem to 2rem; tier title clamp 1.375rem to 1.875rem; body 1rem; pill 0.75rem.

## Elevation & Depth
Subtle shadow hierarchy: card 0 1px 3px L0.06; elevated 0 4px 12px L0.08; premium 0 8px 24px L0.10. Ladder step cards lift with an orange glow on hover. Active ladder node has a 4px orange ring at 18% opacity.

## Structural Zones

| Zone | Background | Border | Notes |
|------|------------|--------|-------|
| Header | bg-card | border-b | sticky, glassmorphism on scroll |
| Hero | bg-gradient-hero | none | page title + progress bar on /learn |
| Ladder Tier | bg-background | none | tier header badge + vertical rail of steps |
| Ladder Step | bg-card | 1px border-border | numbered node on rail, Next button, checkmark states |
| Course Cards | bg-card | 1px border-border | 1rem radius, soft hover, expired opacity 0.75 |
| Footer | bg-muted/20 | border-t | minimal |

## Component Patterns
- Ladder Tier Header: numbered orange badge (indigo for Tier 3 advanced) + heading-section title + subtitle
- Ladder Rail: 2px vertical line in accent-neutral-border through all step nodes
- Ladder Node: circle on rail. Upcoming = gray outline + number. Active = orange fill + glow ring. Completed = indigo fill + checkmark
- Ladder Step Card: reuses card-guide base. Title + desc + meta pills + Next button (button-cta). Completed steps dim to muted, hide Next
- Ladder Pill: small rounded pill. Orange for duration, indigo for "Business output" tag
- Next Button: reuses button-cta, full width on mobile
- Tier 3 Advanced Rows: link-style rows with indigo hover and arrow, not full step cards
- Tier Completion: green pill with checkmark when all steps in a tier are done
- Progress Bar: gradient orange fill at top of /learn
- Expired Badge: amber pill 12% opacity. New Badge: green pill 12% opacity

## Motion
- Step card hover: translateY lift + orange glow 0.25s ease
- Active node ring: static 4px orange glow
- Progress fill: width transition 0.4s cubic-bezier on completion
- Tier 3 link arrow: translateX 4px on hover
- Page entrance: fade-in 0.4s ease-out
- Card hover (courses): translateY(-2px) + shadow 0.25s ease

## Constraints
- Reuse existing tokens: primary orange #f59e0b, accent-indigo #6366F1, success, warning
- Reuse existing classes: button-cta, card-guide, heading-section, badge-primary-vibrant
- No contractions, no em dashes, no en dashes in any user-facing text
- Title pattern: AISmallBiz: followed by a description
- Numbered path with checkmarks and Next button, not a menu
- Keep AI Training and Tools as the advanced track (Tier 3)
- Do NOT build in-lesson quizzes or printable completion certificates
- Fonts: Playfair Display, Inter, JetBrains Mono only
- AA+ contrast in both light and dark modes

## Signature Detail
The learning ladder rail: a single vertical line that turns each numbered node from gray outline to orange glow to indigo checkmark as the learner climbs, making progress feel like a literal ascent rather than a checklist.

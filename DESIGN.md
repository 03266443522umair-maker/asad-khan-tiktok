# Design Brief

## Purpose & Context
TikTok-style premium creator profile showcase. Visually stunning dark experience for talent display and engagement metrics.

## Tone
Bold maximalist neon-driven aesthetic. Premium, energetic, creator-centric with glowing neon accents.

## Color Palette

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| Background | 0.08 0 0 | #0D0D14 | Deep near-black page bg |
| Card | 0.12 0 0 | #1A1A22 | Card surfaces, profile container |
| Primary (Pink) | 0.65 0.25 330 | #FF0050 | Profile glows, stat highlights, CTAs |
| Accent (Cyan) | 0.68 0.28 186 | #00F7EF | Secondary highlights, borders, accents |
| Foreground | 0.95 0 0 | #F2F2F2 | Primary text |
| Muted | 0.15 0 0 | #282830 | Secondary surfaces |
| Border | 0.2 0.05 330 | #2A1A28 | Subtle neon pink borders |

## Typography
- **Display**: General Sans (bold, 700) — profile name, large stats
- **Body**: DM Sans (regular, 400–500) — descriptions, metadata
- **Mono**: Geist Mono (400) — technical info, usernames

## Shape Language
- Profile circle: `rounded-full` (100%)
- Cards: `rounded-xl` (12px)
- UI elements: `rounded-lg` (12px)
- No sharp edges; maintain flow

## Structural Zones

| Zone | Treatment | Token |
|------|-----------|-------|
| Header | Minimal dark bar, sticky | bg-card, border-b border-border |
| Hero | Profile circle (glowing pink-cyan border), centered | bg-background |
| Stats | 3-col grid, glowing cyan text on dark cards | bg-card, text-accent, glow-cyan |
| Content Grid | 6-tile video placeholder grid, hover scale | bg-card, border-neon-pink |
| Footer | Subtle divider | bg-muted/40, border-t border-border |

## Spacing & Rhythm
- Base unit: 4px (Tailwind default)
- Hero section: 40px margin-top, 60px gap between zones
- Card padding: 20px (5 units)
- Grid gap: 16px (4 units)

## Component Patterns
- **Profile Card**: glowing dual pink-cyan border, centered image with shadow-neon-pink
- **Stat Tile**: dark bg-card, bright text-accent with glow-cyan, minimal borders
- **Video Tile**: bg-card, hover:scale-105 with transition-smooth, border-l-4 border-neon-pink
- **Button**: bg-primary (pink), rounded-lg, hover:shadow-neon-pink

## Motion & Animation
- Page load: staggered fade-in + slide-up on hero, stats, grid (0.6s ease-out)
- Stat cards: pulse-glow effect (2s cycle, 0.8–1.0 opacity)
- Hover: scale-105 on tiles, shadow-neon-cyan transition
- Transitions: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) (transition-smooth)

## Signature Detail
Glowing neon text shadows on profile name and stat numbers using dual-layer 20px/40px oklch shadows (pink + cyan layers for premium premium effect). Profile image ringed with animated glowing pink-cyan dual border.

## Constraints
- No gradients on full page (avoid generic AI look)
- Neon effects applied sparingly: profile border, stat glows, text shadows
- Dark theme only (0.08 L background)
- All colors token-driven, no arbitrary hex values
- Smooth animations, no bouncy spring effects

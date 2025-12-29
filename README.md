# ExecuPlay Teens (14–18)

Clickable Phase 1 prototype for a dual-mode executive functioning practice platform built with Next.js (App Router), TypeScript, Tailwind, Zustand, and Prisma. The product serves **Home Mode** (self-guided) and **Classroom Mode** (teacher-led) with the same codebase.

## Phase 1 Scope
- All required pages wired with navigation
- Mock EF taxonomy, LevelConfig JSON for three games (levels 1–3)
- Game shell + standards panel + scoring engine (with unit tests)
- Teacher workflows (classes, assignments, exports) in mock form
- Privacy messaging and guardrails (no clinical claims)

## Getting Started
Packages are declared but not installed in this environment. To run locally:
```bash
npm install
npm run dev
```

## Key Paths
- `app/` – App Router pages (home, onboarding, dashboard, teacher, games, play, settings)
- `components/` – Reusable UI and engines (GameShell, LevelEngine, ScoringEngine, StandardsPanel, ReportExporter)
- `data/` – EF taxonomy, LevelConfig JSON, mock classes/assignments
- `prisma/schema.prisma` – Postgres-ready schema for Users, Classes, Assignments, Attempts, Reflections, SkillSnapshots
- `__tests__/` – Vitest coverage for ScoringEngine
- `docs/FILE_TREE.md` – repository file listing for reference

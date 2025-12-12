# Neural Breach MVP - Project Summary

**Project:** Neural Breach (Dual N-Back Cognitive Training Game)  
**Phase:** MVP (Months 1-2)  
**Status:** Planning Complete, Ready for Sprint 0  
**Last Updated:** 2025-01-27

---

## Executive Summary

Neural Breach wraps the scientifically-proven **Dual N-Back** working memory training task inside a cyberpunk hacking narrative. Players "hack" corporate firewalls by maintaining focus on a dual-stream memory task while managing "Connection Stability" and earning "Data Shards."

**MVP Scope:** 18 user stories across 4 sprints, delivering a fully functional training game with progression systems, analytics, and customization.

---

## Project Structure

```
cyber-nback/
├── docs/                          # Project management documents
│   ├── PROJECT_PLAN.md           # High-level roadmap & task breakdown
│   ├── SPRINT_PLANNING.md        # Detailed sprint plans
│   ├── TASK_TRACKING_TEMPLATE.md # Ticket templates
│   ├── PM_QUICK_REFERENCE.md     # PM quick reference
│   └── PROJECT_SUMMARY.md        # This document
│
├── frontend/                      # React Native (Expo Router)
│   ├── app/                      # Expo Router routes
│   └── src/                      # Components, services, stores, types
│
├── backend/                      # Node.js/Express API
│   └── src/                      # Routes, middleware, types
│
├── tests/                        # E2E tests (Playwright/Detox)
│
├── Neural_Breach_Game_Design_Document.txt  # Complete game design
└── styleguide.txt               # UI tokens & component recipes
```

---

## Sprint Overview

| Sprint | Duration | Stories | Focus |
|--------|----------|---------|-------|
| **Sprint 0** | 1 week | 3 | Foundation (tokens, persistence, sync) |
| **Sprint 1** | 2 weeks | 7 | Core session loop (dual n-back engine) |
| **Sprint 2** | 2 weeks | 3 | Progression (store, upgrades, themes) |
| **Sprint 3** | 2 weeks | 4 | Analytics (history, stats, ranking) |
| **Sprint 4** | 1 week | 1 | Polish (settings, configuration) |

**Total Duration:** ~8 weeks (2 months)

---

## User Stories Breakdown

### Foundation (Sprint 0)
- ✅ **US-01**: Token system + core UI components
- ✅ **US-02**: Local persistence layer
- ✅ **US-03**: Sync queue mechanism

### Core Session Loop (Sprint 1)
- ✅ **US-04**: Main Menu → Start Breach flow
- ✅ **US-05**: Stimulus generator (grid + audio)
- ✅ **US-06**: Input handler with reaction time
- ✅ **US-07**: Stability bar + feedback flashes
- ✅ **US-08**: Data Shards awarding
- ✅ **US-09**: Block/Session summaries
- ✅ **US-10**: Adaptive difficulty

### Progression & Cosmetics (Sprint 2)
- ✅ **US-11**: Hardware Store screen
- ✅ **US-12**: Upgrade effects implementation
- ✅ **US-13**: Theme system + purchases

### Analytics & Social (Sprint 3)
- ✅ **US-14**: Session History screen
- ✅ **US-15**: Stats screen with metrics
- ✅ **US-16**: Progress graph
- ✅ **US-17**: Ranking screen (mocked)

### Polish & Configuration (Sprint 4)
- ✅ **US-18**: Config screen with AV/visual settings

---

## Key Features

### Core Training
- ✅ Dual N-Back task (3×3 grid + audio letters)
- ✅ Adaptive difficulty (n-level adjusts based on accuracy)
- ✅ Connection Stability resource (health-like meter)
- ✅ Immediate feedback (visual flashes, stability penalties)

### Progression
- ✅ Data Shards economy (earn on correct trials)
- ✅ Hardware Store (upgrades with gameplay effects)
- ✅ Cosmetic themes (visual customization)

### Analytics
- ✅ Session history (past runs with summaries)
- ✅ Stats screen (personal bests, totals)
- ✅ Progress graph (working memory growth over time)
- ✅ Ranking screen (mocked leaderboard)

### Customization
- ✅ Config screen (AV settings, visual FX)
- ✅ Stimulus interval control
- ✅ Theme selection

---

## Technical Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React Native (Expo Router) | Mobile app |
| **Styling** | StyleSheet API + Token system | Consistent UI |
| **State** | Zustand (or similar) | Lightweight state management |
| **Persistence** | AsyncStorage/IndexedDB | Offline-first storage |
| **Backend** | Node.js + Express | API server |
| **Database** | TBD (PostgreSQL/Firestore) | Session data storage |
| **Testing** | Playwright/Detox | E2E tests |

---

## Success Metrics

### Development Metrics
- ✅ **Stimulus timing precision:** ±50ms tolerance
- ✅ **Session UI performance:** 60 FPS target
- ✅ **Code quality:** 100% token usage (no ad-hoc values)
- ✅ **Test coverage:** E2E tests for all user stories

### Product Metrics (Post-MVP)
- **Daily Active Users (DAU):** Target 40%+ of installed base
- **Session Duration:** Average 12-15 minutes per session
- **30-day Retention:** >50%
- **Social Sharing:** >20% of users share weekly

---

## Risk Management

| Risk | Mitigation | Status |
|------|------------|--------|
| Stimulus timing precision | Use `requestAnimationFrame` + precise timers | Mitigated |
| State persistence corruption | Data validation + migration strategy | Planned |
| Sync queue failures | Exponential backoff + max retry limits | Planned |
| Performance during sessions | Profile early, minimize re-renders | Planned |
| Upgrade effects not applying | Integration tests per upgrade | Planned |

---

## Next Steps

1. **Kickoff Sprint 0** - Assign US-01 to Frontend agent
2. **Set up project tracking** - Create tickets in Notion/GitHub Issues
3. **Establish daily standups** - Review progress, blockers, dependencies
4. **Schedule sprint reviews** - Demo completed stories at end of each sprint

---

## Team Structure

| Role | Responsibility | Agent |
|------|---------------|-------|
| **Project Manager** | Planning, tracking, coordination | N/A |
| **System Architect** | Contracts, specs, design decisions | `@system-architect` |
| **Frontend Developer** | UI, state, navigation | `@frontend` |
| **Backend Developer** | APIs, database, business logic | `@backend` |
| **QA Engineer** | E2E tests, integration tests | `@e2e` |
| **Orchestrator** | Workflow enforcement, delegation | `@orchestrator` |

---

## Communication

- **Design decisions:** System Architect (Memory Bank)
- **Implementation questions:** Respective agent (Frontend/Backend/E2E)
- **Workflow questions:** Orchestrator
- **Project management:** Project Manager

---

## Resources

- **Game Design Document:** `Neural_Breach_Game_Design_Document.txt`
- **Styleguide:** `styleguide.txt`
- **Project Plan:** `docs/PROJECT_PLAN.md`
- **Sprint Planning:** `docs/SPRINT_PLANNING.md`
- **PM Quick Reference:** `docs/PM_QUICK_REFERENCE.md`

---

**Document Owner:** Project Manager  
**Review Frequency:** Weekly  
**Last Review:** 2025-01-27


# Project Manager Quick Reference - Neural Breach MVP

**Last Updated:** 2025-01-27

---

## Project Overview

**Project:** Neural Breach - Dual N-Back Cognitive Training Game  
**Platform:** React Native (Expo Router) + Node.js/Express  
**Phase:** MVP (Months 1-2)  
**Total User Stories:** 18  
**Sprints:** 4 (Sprint 0: 1 week, Sprints 1-3: 2 weeks each, Sprint 4: 1 week)

---

## Key Documents

| Document | Purpose | Location |
|----------|---------|----------|
| **Game Design Document** | Complete game design, mechanics, economy | `Neural_Breach_Game_Design_Document.txt` |
| **Styleguide** | UI tokens, components, screen blueprints | `styleguide.txt` |
| **Project Plan** | High-level roadmap, dependencies, task breakdown | `docs/PROJECT_PLAN.md` |
| **Sprint Planning** | Detailed sprint goals, checklists, retrospectives | `docs/SPRINT_PLANNING.md` |
| **Task Tracking** | Ticket templates, labels, progress tracking | `docs/TASK_TRACKING_TEMPLATE.md` |

---

## User Stories Summary

### Foundation (Sprint 0)
- **US-01**: Token system + core UI components
- **US-02**: Local persistence layer
- **US-03**: Sync queue mechanism

### Core Session Loop (Sprint 1)
- **US-04**: Main Menu → Start Breach flow
- **US-05**: Stimulus generator (grid + audio)
- **US-06**: Input handler with reaction time
- **US-07**: Stability bar + feedback flashes
- **US-08**: Data Shards awarding
- **US-09**: Block/Session summaries
- **US-10**: Adaptive difficulty

### Progression & Cosmetics (Sprint 2)
- **US-11**: Hardware Store screen
- **US-12**: Upgrade effects implementation
- **US-13**: Theme system + purchases

### Analytics & Social (Sprint 3)
- **US-14**: Session History screen
- **US-15**: Stats screen with metrics
- **US-16**: Progress graph
- **US-17**: Ranking screen (mocked)

### Polish & Configuration (Sprint 4)
- **US-18**: Config screen with AV/visual settings

---

## Critical Dependencies

```
US-01 (Foundation)
  ├─> US-02 → US-03
  ├─> US-04 → US-05 → US-06 → US-07 → US-08
  │                     │
  │                     ├─> US-09 → US-14 → US-15 → US-16, US-17
  │                     │
  │                     └─> US-11 → US-12, US-13
  │
  └─> US-18
```

**Critical Path:** US-01 → US-04 → US-05 → US-06 → US-07 → US-08 → US-09

---

## Key Metrics & Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Stimulus timing precision** | ±50ms tolerance | E2E test measures intervals |
| **Session UI performance** | 60 FPS | Profiling during sessions |
| **Theme switching** | <100ms | Performance test |
| **Sync retry** | Max 5 retries, exponential backoff | Backend logs |
| **Code quality** | 100% token usage (no ad-hoc values) | ESLint/TypeScript checks |

---

## Agent Responsibilities

| Agent | Scope | Key Files/Directories |
|-------|-------|----------------------|
| **Frontend** | UI, state, navigation | `frontend/app/`, `frontend/src/` |
| **Backend** | APIs, database, business logic | `backend/src/` |
| **E2E** | Integration and end-to-end tests | `tests/` |
| **System Architect** | Contracts, specs | Memory Bank MCP (`systemPatterns.md`) |
| **Orchestrator** | Delegation, workflow | `.cursor/rules/orchestrator.mdc` |

---

## GitHub Protocol

### Branch Naming
```
<agent>/<ticket-id>/<description>
```
Example: `frontend/US-01/token-system`

### Commit Message Format
```
[<AGENT>] <TICKET-ID> - <description>

<optional body>

Depends-On: <ticket-id(s)> or "none"
Memory-Bank-Update: true | false
```

### Locked Files
- Memory Bank is MCP-only (no local `memory-bank/` mirror)
- `contracts.md` - Architect only
- `systemPatterns.md` - Architect only
- `package.json` (root) - Orchestrator only
- `backend/package.json` - Backend only
- `frontend/package.json` - Frontend only

---

## Daily Standup Template

1. **What did you complete yesterday?**
2. **What are you working on today?**
3. **Any blockers or dependencies?**

### Sprint-Specific Questions

**Sprint 0:**
- Are tokens being used consistently?
- Is persistence working across restarts?
- Is sync queue handling offline/online transitions?

**Sprint 1:**
- Is stimulus timing precise (±50ms)?
- Are stability penalties applying correctly?
- Are shards being awarded and persisted?
- Is difficulty adapting per block?

**Sprint 2:**
- Are upgrade purchases working?
- Are upgrade effects applying during sessions?
- Are themes switching without performance issues?

**Sprint 3:**
- Is session history displaying correctly?
- Are stats computing accurately?
- Is progress graph rendering without errors?
- Is ranking screen showing mocked data?

**Sprint 4:**
- Are settings applying immediately?
- Are settings persisting across sessions?
- Are FX overlays blocking touches? (Should NOT)

---

## Risk Register

| Risk | Impact | Probability | Mitigation | Owner |
|------|--------|-------------|------------|-------|
| Stimulus timing precision | High | Medium | Use `requestAnimationFrame` + precise timers, test on multiple devices | Frontend |
| State persistence corruption | High | Low | Implement data validation + migration strategy | Frontend |
| Sync queue failures | Medium | Medium | Implement exponential backoff + max retry limits | Frontend/Backend |
| Performance during sessions | High | Medium | Profile early, minimize re-renders, use React.memo | Frontend |
| Upgrade effects not applying | Medium | Low | Add integration tests for each upgrade effect | Frontend/E2E |

---

## Definition of Done Checklist

Each user story must have:

- [ ] **Frontend work** completed per story scope
- [ ] **Backend work** completed per story scope (if applicable)
- [ ] **E2E tests** written and passing
- [ ] **Code review** completed (per GitHub protocol)
- [ ] **Documentation** updated (if needed)
- [ ] **No regressions** introduced (existing E2E tests still pass)

---

## Communication Channels

- **Design decisions:** System Architect (Memory Bank)
- **Implementation questions:** Respective agent (Frontend/Backend/E2E)
- **Workflow questions:** Orchestrator
- **Project management:** Project Manager (this document)

---

## Quick Commands

### Start Development
```bash
# Install dependencies
npm run install:all

# Start frontend (Expo)
npm run frontend:start

# Start backend (Express)
npm run backend:dev
```

### Run Tests
```bash
# E2E tests (when implemented)
cd tests && npm test
```

### Create Ticket
1. Copy template from `docs/TASK_TRACKING_TEMPLATE.md`
2. Fill in user story details
3. Add to Notion/GitHub Issues
4. Assign to appropriate agent

---

## Escalation Path

1. **Technical blocker:** Discuss with System Architect
2. **Workflow issue:** Discuss with Orchestrator
3. **Priority conflict:** Discuss with Project Manager
4. **Design ambiguity:** Refer to GDD + Styleguide, escalate to System Architect if needed

---

**Document Owner:** Project Manager  
**Review Frequency:** Weekly  
**Last Review:** 2025-01-27


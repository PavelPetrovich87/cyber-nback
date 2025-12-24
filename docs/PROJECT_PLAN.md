# Neural Breach - Phase 1 MVP Project Plan

**Project:** Neural Breach (Dual N-Back Cognitive Training Game)  
**Platform:** React Native (Expo Router) + Node.js/Express  
**Phase:** MVP (Months 1-2)  
**Last Updated:** 2025-01-27

---

## Executive Summary

This document organizes 18 Phase-1 MVP user stories into a structured development plan with dependencies, priorities, and implementation order. Stories are grouped into **Sprints** (2-week cycles) with clear Frontend/Backend/E2E scope.

**Success Criteria:**
- Core dual n-back training loop functional
- Stability bar + Data Shards economy working
- Basic Hardware Store with 3-5 upgrades
- Session history view
- 3 cosmetic themes
- Offline-first persistence with sync

---

## Sprint Breakdown

### Sprint 0: Foundation & Setup (Week 1)
**Goal:** Establish design system, persistence layer, and core infrastructure

| Story | Priority | Dependencies | Estimated Effort |
|-------|----------|--------------|------------------|
| **US-01** | P0 | None | 3-4 days |
| **US-02** | P0 | US-01 | 2-3 days |
| **US-03** | P1 | US-02 | 2-3 days |

**Deliverables:**
- Token system (colors/typography/spacing/radius) fully implemented
- Core UI components (TerminalLayout, Card, Button) ready
- Local persistence layer (AsyncStorage/IndexedDB) functional
- Backend user bootstrap endpoint
- Basic sync queue mechanism

**Acceptance:**
- App renders consistently across screens
- State persists across restarts
- Sync queue handles offline/online transitions

---

### Sprint 1: Core Session Loop (Weeks 2-3)
**Goal:** Implement the core training mechanic (dual n-back engine)

| Story | Priority | Dependencies | Estimated Effort |
|-------|----------|--------------|------------------|
| **US-04** | P0 | US-01 | 1-2 days |
| **US-05** | P0 | US-04 | 3-4 days |
| **US-06** | P0 | US-05 | 2-3 days |
| **US-07** | P0 | US-06 | 2-3 days |
| **US-08** | P0 | US-07 | 1-2 days |
| **US-09** | P0 | US-08 | 2-3 days |
| **US-10** | P0 | US-09 | 2-3 days |

**Deliverables:**
- Main Menu screen with "Start Breach" CTA
- Dual n-back stimulus generator (3×3 grid + audio)
- Input handler with reaction time capture
- Connection Stability bar with penalties
- Feedback flashes (red/yellow) and Safe Mode
- Data Shards awarding system
- Block Summary and Session Summary screens
- Adaptive difficulty (n-level adjustment)

**Acceptance:**
- User can complete a full session (multiple blocks)
- Stimuli present on consistent intervals (±50ms tolerance)
- Stability decreases on errors, shards increase on correct trials
- Difficulty adapts based on block accuracy
- Session data persists locally

---

### Sprint 2: Progression & Cosmetics (Weeks 4-5)
**Goal:** Add progression systems (Hardware Store, upgrades, themes)

| Story | Priority | Dependencies | Estimated Effort |
|-------|----------|--------------|------------------|
| **US-11** | P0 | US-08 | 2-3 days |
| **US-12** | P0 | US-11 | 2-3 days |
| **US-13** | P1 | US-01, US-11 | 2-3 days |

**Deliverables:**
- Hardware Store screen with upgrade catalog
- Purchase flow (balance validation, ownership tracking)
- Upgrade effects implementation (shard multiplier, stability reduction)
- Theme system (token swapping)
- Theme purchase flow

**Acceptance:**
- User can purchase upgrades and see effects in sessions
- Purchased themes apply visual changes only (no gameplay impact)
- Balance updates correctly after purchases

---

### Sprint 3: Analytics & Social (Weeks 6-7)
**Goal:** Add stats, history, and ranking features

| Story | Priority | Dependencies | Estimated Effort |
|-------|----------|--------------|------------------|
| **US-14** | P0 | US-09 | 1-2 days |
| **US-15** | P0 | US-14 | 2-3 days |
| **US-16** | P1 | US-15 | 2-3 days |
| **US-17** | P1 | US-15 | 2-3 days |

**Deliverables:**
- Session History screen (list view)
- Stats screen with MetricTile grid
- Progress graph (simple chart implementation)
- Ranking screen with mocked leaderboard
- Backend endpoints for history/stats/ranking

**Acceptance:**
- User can view past sessions with summaries
- Stats screen shows personal bests and totals
- Progress graph renders without errors
- Ranking screen displays mocked leaderboard

---

### Sprint 4: Polish & Configuration (Week 8)
**Goal:** Settings, configuration, and final polish

| Story | Priority | Dependencies | Estimated Effort |
|-------|----------|--------------|------------------|
| **US-18** | P0 | US-01, US-05 | 2-3 days |

**Deliverables:**
- Config screen with AV/visual settings
- Stimulus interval control
- Scanlines/flicker toggles
- Volume/SFX sliders
- Settings persistence

**Acceptance:**
- User can adjust all settings and see changes immediately
- Settings persist across sessions
- FX overlays never block touches

---

## Dependency Graph

```
US-01 (Foundation)
  ├─> US-02 (Persistence)
  │     └─> US-03 (Sync)
  │
  ├─> US-04 (Main Menu)
  │     └─> US-05 (Stimulus Engine)
  │           └─> US-06 (Input Handler)
  │                 └─> US-07 (Stability/Feedback)
  │                       └─> US-08 (Shards)
  │                             ├─> US-09 (Summaries)
  │                             │     └─> US-14 (History)
  │                             │           ├─> US-15 (Stats)
  │                             │           │     ├─> US-16 (Graph)
  │                             │           │     └─> US-17 (Ranking)
  │                             │
  │                             └─> US-11 (Hardware Store)
  │                                   ├─> US-12 (Upgrade Effects)
  │                                   └─> US-13 (Themes)
  │
  └─> US-18 (Config)
```

---

## Task Breakdown by Agent

### Frontend Agent Tasks

#### Sprint 0
- [ ] **US-01-FE**: Implement token system (colors, typography, spacing, radius)
- [ ] **US-01-FE**: Build TerminalLayout component with CRT overlays
- [ ] **US-01-FE**: Build Card component (default, emphasis, listRow variants)
- [ ] **US-01-FE**: Build Button component (primary, secondary, danger, ghost variants + sizes)
- [ ] **US-02-FE**: Implement AsyncStorage/IndexedDB persistence layer
- [ ] **US-02-FE**: Create user state store (shards, upgrades, theme, history)
- [ ] **US-03-FE**: Implement sync queue with retry logic
- [ ] **US-03-FE**: Add background/foreground sync triggers

#### Sprint 1
- [ ] **US-04-FE**: Build Main Menu screen (per styleguide blueprint)
- [ ] **US-04-FE**: Add balance and streak display placeholders
- [ ] **US-05-FE**: Implement stimulus generator (3×3 grid positions + A-Z audio)
- [ ] **US-05-FE**: Create trial scheduler with configurable interval
- [ ] **US-06-FE**: Build input handler for "Match Audio" and "Match Position"
- [ ] **US-06-FE**: Capture reaction time (ms) per trial
- [ ] **US-06-FE**: Add double-input guard within trial window
- [ ] **US-07-FE**: Implement Connection Stability bar (0-100)
- [ ] **US-07-FE**: Apply stability penalties (false alarm -15%, miss -10%)
- [ ] **US-07-FE**: Implement red/yellow border flash animations (~0.3s)
- [ ] **US-07-FE**: Implement Safe Mode visuals (desaturate, stop shard earning)
- [ ] **US-08-FE**: Implement shard awarding (+1 per correct trial)
- [ ] **US-08-FE**: Stop shard earning in Safe Mode
- [ ] **US-09-FE**: Build Block Summary screen
- [ ] **US-09-FE**: Build Session Summary screen
- [ ] **US-09-FE**: Implement block flow (20 trials per block, multiple blocks per session)
- [ ] **US-10-FE**: Implement difficulty adapter (>70% increase, <60% decrease)
- [ ] **US-10-FE**: Display n-level during session

#### Sprint 2
- [ ] **US-11-FE**: Build Hardware Store screen (per styleguide blueprint)
- [ ] **US-11-FE**: Create upgrade card component (owned/affordable/locked states)
- [ ] **US-11-FE**: Display current balance prominently
- [ ] **US-12-FE**: Implement upgrade effects (shard multiplier, stability reduction)
- [ ] **US-12-FE**: Apply effects during sessions
- [ ] **US-13-FE**: Implement theme token sets (System, Amber Retro, Vaporwave, etc.)
- [ ] **US-13-FE**: Build runtime theme switching
- [ ] **US-13-FE**: Implement theme purchase flow

#### Sprint 3
- [ ] **US-14-FE**: Build History screen (list view per styleguide)
- [ ] **US-14-FE**: Compute and display per-session summaries
- [ ] **US-15-FE**: Build Stats screen with MetricTile grid
- [ ] **US-15-FE**: Compute personal bests (peak n, best accuracy)
- [ ] **US-16-FE**: Implement progress graph (x-axis: days, y-axis: peak n-level)
- [ ] **US-17-FE**: Build Ranking screen (per styleguide blueprint)
- [ ] **US-17-FE**: Implement LeaderboardRow component (top-3 styling, YOU highlight)

#### Sprint 4
- [ ] **US-18-FE**: Build Config screen (per styleguide blueprint)
- [ ] **US-18-FE**: Add toggles for scanlines/flicker
- [ ] **US-18-FE**: Add sliders for volume/SFX
- [ ] **US-18-FE**: Add stimulus interval control
- [ ] **US-18-FE**: Ensure FX overlays never block touches

### Backend Agent Tasks

#### Sprint 0
- [ ] **US-02-BE**: Create user bootstrap endpoint (accept anonymous client ID, return userId)
- [ ] **US-03-BE**: Create session upload endpoint (accept trial logs, return ack + timestamps)
- [ ] **US-03-BE**: Implement retry-safe session ingestion

#### Sprint 1
- [ ] **US-04-BE**: Create endpoint to fetch user state (balance, theme, upgrades)
- [ ] **US-06-BE**: Ensure trial logs include reaction time in upload payload
- [ ] **US-07-BE**: Persist trial outcomes (correct/incorrect/false alarm/miss) and stability snapshots
- [ ] **US-08-BE**: Accept session totals (or re-compute server-side)
- [ ] **US-09-BE**: Store session summary (duration, avg accuracy, peak n, shards)
- [ ] **US-10-BE**: Persist per-block accuracy and resulting n-level

#### Sprint 2
- [ ] **US-11-BE**: Create mocked upgrade catalog endpoint
- [ ] **US-11-BE**: Create purchase endpoint (validate balance, return updated user state)
- [ ] **US-12-BE**: Return owned upgrades in user state
- [ ] **US-12-BE**: Store purchase history
- [ ] **US-13-BE**: Create theme catalog endpoint
- [ ] **US-13-BE**: Create theme purchase endpoint (update owned themes + current theme)

#### Sprint 3
- [ ] **US-14-BE**: Create endpoint to fetch session summaries
- [ ] **US-15-BE**: (Optional) Create stats endpoint (or derive client-side)
- [ ] **US-17-BE**: Create mocked leaderboard endpoint (return list + "YOU" row)
- [ ] **US-17-BE**: Return displayName (username or ANON-XXXX)

#### Sprint 4
- [ ] **US-18-BE**: Persist settings in user state (sync optional)

### E2E Agent Tasks

#### Sprint 0
- [ ] **US-01-E2E**: Smoke test - app launches, main shell renders, navigation works
- [ ] **US-02-E2E**: Test persistence - earn shards, force-close, relaunch, verify persistence
- [ ] **US-03-E2E**: Test sync - run session offline, reconnect, verify sync status

#### Sprint 1
- [ ] **US-04-E2E**: Test main menu → Start Breach → Game Session flow
- [ ] **US-05-E2E**: Test stimulus timing - verify multiple trials advance, UI updates
- [ ] **US-06-E2E**: Test input - tap buttons, verify session completes, logs persist
- [ ] **US-07-E2E**: Test feedback - force miss/false alarm, verify flash + stability decrease + Safe Mode
- [ ] **US-08-E2E**: Test shards - complete session, verify shards increase and persist
- [ ] **US-09-E2E**: Test summaries - run session, reach Block Summary, Continue, reach Session Summary
- [ ] **US-10-E2E**: Test difficulty - scripted high accuracy → n increases, low accuracy → n decreases

#### Sprint 2
- [ ] **US-11-E2E**: Test store - open store, purchase upgrade, verify balance decreases, upgrade owned
- [ ] **US-12-E2E**: Test upgrades - purchase Buffer Expansion, trigger false alarm, verify reduced damage
- [ ] **US-12-E2E**: Test upgrades - purchase Overclock CPU, verify shard gain increases
- [ ] **US-13-E2E**: Test themes - buy theme, apply, verify colors change, persist after relaunch

#### Sprint 3
- [ ] **US-14-E2E**: Test history - complete session, open History, verify session listed
- [ ] **US-15-E2E**: Test stats - after multiple sessions, open Stats, verify tiles update
- [ ] **US-16-E2E**: Test graph - seed multiple sessions, open Stats, verify chart renders
- [ ] **US-17-E2E**: Test ranking - navigate to Ranking, verify list renders, "YOU" row present

#### Sprint 4
- [ ] **US-18-E2E**: Test config - change toggles/interval, Apply, start session, verify settings reflect

---

## Risk Mitigation

| Risk | Mitigation | Owner |
|------|------------|-------|
| Stimulus timing precision (±50ms) | Use `requestAnimationFrame` + precise timers, test on multiple devices | Frontend |
| State persistence corruption | Implement data validation + migration strategy | Frontend |
| Sync queue failures | Implement exponential backoff + max retry limits | Frontend/Backend |
| Performance during sessions (60 FPS) | Profile early, minimize re-renders, use React.memo | Frontend |
| Upgrade effects not applying | Add integration tests for each upgrade effect | Frontend/E2E |
| Theme switching performance | Pre-load theme tokens, avoid runtime computation | Frontend |

---

## Definition of Done

Each user story is considered "Done" when:

1. ✅ **Frontend work** completed per story scope
2. ✅ **Backend work** completed per story scope (if applicable)
3. ✅ **E2E tests** written and passing
4. ✅ **Code review** completed (per GitHub protocol)
5. ✅ **Documentation** updated (if needed)
6. ✅ **No regressions** introduced (existing E2E tests still pass)

---

## Next Steps

1. **Kickoff Sprint 0** - Assign US-01 to Frontend agent
2. **Set up project tracking** - Create tickets in Notion/GitHub Issues per user story
3. **Establish daily standups** - Review progress, blockers, dependencies
4. **Schedule sprint reviews** - Demo completed stories at end of each sprint

---

**Document Owner:** Project Manager  
**Review Frequency:** Weekly  
**Last Review:** 2025-01-27






# Sprint Planning Guide - Neural Breach MVP

This document provides detailed sprint planning templates and execution guidelines for Phase 1 MVP.

---

## Sprint 0: Foundation & Setup

**Duration:** 1 week  
**Start Date:** [TBD]  
**End Date:** [TBD]

### Sprint Goal
Establish design system, persistence layer, and core infrastructure to enable all future development.

### User Stories
- **US-01**: Token system + core UI components
- **US-02**: Local persistence layer
- **US-03**: Sync queue mechanism

### Daily Standup Questions
1. Are tokens being used consistently? (No ad-hoc hex values)
2. Is persistence working across restarts?
3. Is sync queue handling offline/online transitions?

### Sprint Review Checklist
- [ ] Token system documented and enforced
- [ ] TerminalLayout renders with CRT overlays
- [ ] Card and Button components have all variants
- [ ] User state persists locally (shards, upgrades, theme)
- [ ] Sync queue queues sessions when offline
- [ ] Backend bootstrap endpoint accepts client IDs
- [ ] E2E smoke tests pass

### Blockers & Dependencies
- None (foundation sprint)

---

## Sprint 1: Core Session Loop

**Duration:** 2 weeks  
**Start Date:** [TBD]  
**End Date:** [TBD]

### Sprint Goal
Implement the core dual n-back training mechanic with full session flow.

### User Stories
- **US-04**: Main Menu → Start Breach flow
- **US-05**: Stimulus generator (grid + audio)
- **US-06**: Input handler with reaction time
- **US-07**: Stability bar + feedback flashes
- **US-08**: Data Shards awarding
- **US-09**: Block/Session summaries
- **US-10**: Adaptive difficulty

### Daily Standup Questions
1. Is stimulus timing precise (±50ms)?
2. Are stability penalties applying correctly?
3. Are shards being awarded and persisted?
4. Is difficulty adapting per block?

### Sprint Review Checklist
- [ ] User can complete a full session (multiple blocks)
- [ ] Stimuli present on consistent intervals
- [ ] Stability decreases on errors, increases on correct (or holds)
- [ ] Shards increase on correct trials
- [ ] Difficulty adapts based on block accuracy (>70% up, <60% down)
- [ ] Block Summary shows correct metrics
- [ ] Session Summary shows totals
- [ ] All session data persists locally

### Blockers & Dependencies
- **Depends on:** Sprint 0 (US-01, US-02)
- **Potential blockers:** Audio timing precision, stimulus interval consistency

---

## Sprint 2: Progression & Cosmetics

**Duration:** 2 weeks  
**Start Date:** [TBD]  
**End Date:** [TBD]

### Sprint Goal
Add progression systems (Hardware Store, upgrades, themes) to create engagement loops.

### User Stories
- **US-11**: Hardware Store screen
- **US-12**: Upgrade effects implementation
- **US-13**: Theme system + purchases

### Daily Standup Questions
1. Are upgrade purchases working?
2. Are upgrade effects applying during sessions?
3. Are themes switching without performance issues?

### Sprint Review Checklist
- [ ] Hardware Store displays upgrade catalog
- [ ] User can purchase upgrades (balance validation)
- [ ] Purchased upgrades show as "owned"
- [ ] Upgrade effects apply (shard multiplier, stability reduction)
- [ ] Theme system swaps token sets
- [ ] User can purchase themes with shards
- [ ] Themes persist after relaunch
- [ ] Visual changes only (no gameplay impact)

### Blockers & Dependencies
- **Depends on:** Sprint 1 (US-08 for shard economy)
- **Potential blockers:** Upgrade effect application timing, theme performance

---

## Sprint 3: Analytics & Social

**Duration:** 2 weeks  
**Start Date:** [TBD]  
**End Date:** [TBD]

### Sprint Goal
Add stats, history, and ranking features to enable progress tracking and social engagement.

### User Stories
- **US-14**: Session History screen
- **US-15**: Stats screen with metrics
- **US-16**: Progress graph
- **US-17**: Ranking screen (mocked)

### Daily Standup Questions
1. Is session history displaying correctly?
2. Are stats computing accurately?
3. Is progress graph rendering without errors?
4. Is ranking screen showing mocked data?

### Sprint Review Checklist
- [ ] History screen lists past sessions
- [ ] Session summaries show correct data (date, duration, peak n, accuracy)
- [ ] Stats screen shows personal bests
- [ ] Stats screen shows totals (sessions, time, shards)
- [ ] Progress graph renders with multiple data points
- [ ] Ranking screen displays mocked leaderboard
- [ ] "YOU" row is highlighted in ranking
- [ ] Top-3 styling applied correctly

### Blockers & Dependencies
- **Depends on:** Sprint 1 (US-09 for session summaries)
- **Potential blockers:** Chart library integration, mocked data generation

---

## Sprint 4: Polish & Configuration

**Duration:** 1 week  
**Start Date:** [TBD]  
**End Date:** [TBD]

### Sprint Goal
Add settings and configuration to allow user customization and final polish.

### User Stories
- **US-18**: Config screen with AV/visual settings

### Daily Standup Questions
1. Are settings applying immediately?
2. Are settings persisting across sessions?
3. Are FX overlays blocking touches? (Should NOT)

### Sprint Review Checklist
- [ ] Config screen has all sections (Audio, Visual, Protocol)
- [ ] Toggles work (scanlines, flicker)
- [ ] Sliders work (volume, SFX)
- [ ] Stimulus interval control works
- [ ] Settings persist after relaunch
- [ ] FX overlays never block touches
- [ ] Settings apply immediately in session

### Blockers & Dependencies
- **Depends on:** Sprint 0 (US-01 for UI), Sprint 1 (US-05 for stimulus interval)
- **Potential blockers:** None expected (polish sprint)

---

## Cross-Sprint Considerations

### Performance Targets
- **Stimulus timing:** ±50ms tolerance
- **Session UI:** 60 FPS target
- **Theme switching:** <100ms
- **Sync queue:** Exponential backoff (max 5 retries)

### Testing Strategy
- **Unit tests:** Core logic (stimulus generator, difficulty adapter, upgrade effects)
- **Integration tests:** Session flow, persistence, sync
- **E2E tests:** Full user journeys per user story
- **Performance tests:** Timing precision, FPS during sessions

### Code Quality Gates
- All code follows `.cursorrules` (no semicolons, strict typing, etc.)
- All commits follow GitHub protocol (`[AGENT] TICKET-ID - description`)
- All branches follow naming convention (`agent/ticket-id/description`)
- No locked files modified without explicit approval

---

## Sprint Retrospective Template

After each sprint, answer:

1. **What went well?**
2. **What could be improved?**
3. **Action items for next sprint**

### Example Retrospective (Sprint 1)
- ✅ Stimulus timing precision achieved
- ⚠️ Stability bar animations need optimization
- 📝 Action: Profile stability bar component, optimize re-renders

---

**Document Owner:** Project Manager  
**Review Frequency:** Per sprint  
**Last Review:** 2025-01-27






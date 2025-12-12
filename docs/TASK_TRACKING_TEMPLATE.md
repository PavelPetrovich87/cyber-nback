# Task Tracking Template - Neural Breach MVP

This template can be copied into Notion, GitHub Issues, or any project management tool.

---

## Ticket Format

Each user story becomes a ticket with the following structure:

### Ticket Title
```
[US-XX] <User Story Title>
```

### Ticket Description Template

```markdown
## User Story
As a [role], I want [goal] so that [benefit].

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## Technical Scope

### Frontend
- [ ] [Task 1]
- [ ] [Task 2]

### Backend
- [ ] [Task 1]
- [ ] [Task 2]

### E2E
- [ ] [Test 1]
- [ ] [Test 2]

## Dependencies
- Depends on: [US-XX]
- Blocks: [US-XX]

## References
- GDD Section: [Section X]
- Styleguide Section: [Section Y]
- Related: [US-XX]

## Definition of Done
- [ ] Frontend work completed
- [ ] Backend work completed (if applicable)
- [ ] E2E tests written and passing
- [ ] Code review completed
- [ ] No regressions introduced
```

---

## Example Tickets

### US-01: Token System + Core UI Components

```markdown
## User Story
As a player, I want the app to render in the "terminal/cyberpunk" system consistently so the UI feels coherent across screens.

## Acceptance Criteria
- [ ] Token system implemented (colors, typography, spacing, radius)
- [ ] No ad-hoc styling values (all via tokens)
- [ ] TerminalLayout component renders with CRT overlays
- [ ] Card component has all variants (default, emphasis, listRow)
- [ ] Button component has all variants (primary, secondary, danger, ghost) and sizes
- [ ] E2E smoke test passes (app launches, navigation works)

## Technical Scope

### Frontend
- [ ] Create `src/tokens/colors.ts` with all color tokens
- [ ] Create `src/tokens/typography.ts` with type scale
- [ ] Create `src/tokens/spacing.ts` with spacing scale
- [ ] Create `src/tokens/radius.ts` with radius scale
- [ ] Build `TerminalLayout` component (SafeAreaView → content → overlays)
- [ ] Build `Card` component with variants
- [ ] Build `Button` component with variants and sizes
- [ ] Enforce token usage (add ESLint rule or TypeScript check)

### Backend
- N/A

### E2E
- [ ] Test: App launches without errors
- [ ] Test: Navigate to 2-3 screens, verify no runtime errors
- [ ] Test: Verify consistent styling across screens

## Dependencies
- None (foundation story)

## References
- GDD Section: 6 (User Interface Layout)
- Styleguide Section: Style tokens, Component recipes
- Related: All future stories depend on this

## Definition of Done
- [ ] All tokens defined and documented
- [ ] All core components built and tested
- [ ] E2E smoke tests pass
- [ ] Code review completed
- [ ] No regressions introduced
```

---

### US-05: Stimulus Generator

```markdown
## User Story
As a player, I want the Dual N-Back session engine to present visual + audio stimuli on a consistent interval so the training is valid.

## Acceptance Criteria
- [ ] 3×3 grid positions generated randomly
- [ ] A-Z audio letters generated randomly
- [ ] Stimuli present every 2-3 seconds (configurable)
- [ ] Timing is precise (±50ms tolerance)
- [ ] E2E test verifies multiple trials advance

## Technical Scope

### Frontend
- [ ] Create `StimulusGenerator` service
  - [ ] Generate grid positions (1-9, no immediate repeats)
  - [ ] Generate audio letters (A-Z)
  - [ ] Respect n-back rules (ensure matches occur at correct intervals)
- [ ] Create `TrialScheduler` service
  - [ ] Use `requestAnimationFrame` for timing
  - [ ] Configurable interval (default 2-3s)
  - [ ] Precise timing (±50ms tolerance)
- [ ] Integrate with Game Session screen
- [ ] Display current stimulus (grid cell + audio letter)

### Backend
- N/A (session engine runs client-side)

### E2E
- [ ] Test: Start session, verify multiple trials advance
- [ ] Test: Assert UI updates on each interval
- [ ] Test: Verify timing tolerance (measure intervals)

## Dependencies
- Depends on: US-04 (Main Menu → Start Breach flow)
- Blocks: US-06 (Input Handler)

## References
- GDD Section: 2.1 (The Training Session)
- Styleguide Section: Game Session blueprint
- Related: US-06, US-10

## Definition of Done
- [ ] Stimulus generator creates valid sequences
- [ ] Trial scheduler maintains precise timing
- [ ] E2E tests pass
- [ ] Code review completed
- [ ] No regressions introduced
```

---

## GitHub Issue Labels

Suggested labels for organization:

- `priority:p0` - Critical (blocks other work)
- `priority:p1` - High (important but not blocking)
- `priority:p2` - Medium (nice to have)
- `sprint:0` - Foundation sprint
- `sprint:1` - Core session loop
- `sprint:2` - Progression & cosmetics
- `sprint:3` - Analytics & social
- `sprint:4` - Polish & config
- `agent:frontend` - Frontend work
- `agent:backend` - Backend work
- `agent:e2e` - E2E testing
- `type:feature` - New feature
- `type:bug` - Bug fix
- `type:refactor` - Code refactoring
- `status:blocked` - Blocked by dependency
- `status:in-progress` - Currently being worked on
- `status:review` - Awaiting code review
- `status:done` - Completed

---

## Notion Database Schema

If using Notion, create a database with these properties:

| Property | Type | Options |
|----------|------|---------|
| **Title** | Title | - |
| **Story ID** | Text | US-01, US-02, etc. |
| **Sprint** | Select | Sprint 0, Sprint 1, Sprint 2, Sprint 3, Sprint 4 |
| **Priority** | Select | P0, P1, P2 |
| **Status** | Select | Backlog, In Progress, Review, Done |
| **Agent** | Multi-select | Frontend, Backend, E2E |
| **Dependencies** | Relation | Links to other stories |
| **Blocks** | Relation | Links to stories this blocks |
| **Assignee** | Person | - |
| **Due Date** | Date | - |
| **Description** | Text | Full user story + acceptance criteria |
| **Technical Scope** | Text | Frontend/Backend/E2E breakdown |
| **References** | Text | GDD/Styleguide sections |

---

## Progress Tracking

### Sprint Burndown
Track remaining work per sprint:

| Sprint | Total Story Points | Completed | Remaining | % Complete |
|--------|-------------------|-----------|-----------|------------|
| Sprint 0 | 3 | 0 | 3 | 0% |
| Sprint 1 | 7 | 0 | 7 | 0% |
| Sprint 2 | 3 | 0 | 3 | 0% |
| Sprint 3 | 4 | 0 | 4 | 0% |
| Sprint 4 | 1 | 0 | 1 | 0% |

### Velocity Tracking
Track story points completed per sprint to estimate future sprints.

---

**Document Owner:** Project Manager  
**Review Frequency:** Weekly  
**Last Review:** 2025-01-27


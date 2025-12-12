# 🤖 Agent Directory (Template)

| Agent | Invoke | Responsibility |
|------:|--------|----------------|
| Orchestrator | `@orchestrator` | Delegation + workflow enforcement (no implementation) |
| System Architect | `@system-architect` | Contracts/specs in Memory Bank (`systemPatterns.md`) |
| Backend | `@backend` | APIs + database + business logic |
| Frontend | `@frontend` | UI + state + navigation |
| E2E | `@e2e` | Integration and end-to-end tests |

## Typical flow

1. **Design**
   - `@system-architect Add <feature>`
   - Architect writes contract to Memory Bank and includes `### Implementation Context Pack`
2. **Implement**
   - `@orchestrator Implement <feature> per systemPatterns.md#<section>`
   - Orchestrator delegates prompts verbatim via `./scripts/call_agent.sh`
3. **Verify**
   - Backend → Frontend → E2E (in that order if dependent)



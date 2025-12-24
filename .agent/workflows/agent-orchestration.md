---
description: Agent Orchestration Skill
---
# Agent Orchestration Skill

## Core Principle
Break work into **atomic tasks** that can be delegated to exactly one agent with a clear definition of done.

## Sequencing (Default)
1. **Architect** defines contract + Implementation Context Pack
2. **Backend** implements API (if needed)
3. **Frontend** implements UI/integration (Depends-On backend where required)
4. **E2E** validates end-to-end flow

## Delegation Template
Each delegated prompt should include:
- `[OBJECTIVE]`
- `[CONTEXT]`
- `[CONSTRAINTS]`
- `[DEPENDENCIES]`
- `[CRITERIA]`
- `[VERIFY]`

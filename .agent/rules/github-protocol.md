---
description: GITHUB PROTOCOL - Shared Git Workflow & Human-Gated Approval
globs:
alwaysApply: true
---
# GitHub Protocol: Multi-Agent Workflow

This project uses a strict GitHub workflow for an agentic multi-agent system.

## 1. Branch Naming Convention

All branches MUST follow this format:

```
<agent>/<ticket-id>/<description>
```

**Examples:**
- `backend/AUTH-001/login-endpoint`
- `frontend/AUTH-002/login-screen`
- `orchestrator/INFRA-003/ci-pipeline`

**Rules:**
- `<agent>` must be one of: `backend`, `frontend`, `e2e`, `orchestrator`, `architect`
- `<ticket-id>` must match the ticket/issue ID (e.g., `AUTH-001`, `FEAT-042`)
- `<description>` must be lowercase, kebab-case, max 50 chars

## 2. Commit Message Format

All commits MUST follow this format:

```
[<AGENT>] <TICKET-ID> - <description>

<optional body>

Depends-On: <ticket-id(s)> or "none"
Memory-Bank-Update: true | false
```

## 3. Two-Stage Approval Process

- **Stage 1 (Orchestrator)**: technical compliance only (format, locked files, dependencies)
- **Stage 2 (Human)**: code quality, correctness, architecture

## 4. Locked Files (Protected Resources)

| Protected File/Path | Allowed Agent |
| :--- | :--- |
| `memory-bank/systemPatterns.md` | Architect only |
| `memory-bank/activeContext.md` | Orchestrator only |
| `memory-bank/progress.md` | Orchestrator only |
| `contracts.md` | Architect only |
| `package.json` (root) | Orchestrator only |
| `backend/package.json` | Backend only |
| `frontend/package.json` | Frontend only |

If an agent needs a locked file edit, it must surface an explicit `[ACTION_REQUIRED]` message.


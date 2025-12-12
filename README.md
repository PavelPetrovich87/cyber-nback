# 🤖 Agentic Cursor Template (React Native + Node.js)

A reusable, **copy-pasteable** template for a **React Native (Expo Router) + Node.js (Express)** agentic workflow in Cursor:

- **Cursor agents** (`.cursor/rules/*.mdc`)
- **Skill injection** (`.cursor/skills/*.md`)
- **Contract-first workflow** (Architect writes contracts, Orchestrator delegates)
- **GitHub enforcement** (branch + commit format, locked files, PR template)

This folder is meant to be published as its **own repo** (or used as a GitHub “template repository”).

---

## Quick start (as a new repo)

```bash
cd agentic-template
./scripts/init_repo.sh "<your-repo-name>" "<your-github-remote-url-or-empty>"
```

Then open the new repo folder in Cursor and start with:

```text
@orchestrator Add <feature>
```

---

## Prerequisites

- **Cursor Agent CLI**: `cursor-agent` must be installed and authenticated
- **API Key**: set `CURSOR_API_KEY` in your shell or `.env` (copy `env.example` → `.env`)
- **Memory Bank MCP**: recommended (contracts + active context live in Memory Bank)

---

## Expected repo layout (default)

```
<repo>/
├── frontend/              # React Native + Expo Router app
│   ├── app/               # Expo Router routes
│   └── src/               # components, services, stores, types
├── backend/               # Node.js + Express API
├── tests/                 # optional E2E/integration tests (Playwright/Detox)
├── .cursor/               # agents + skills
└── .github/               # PR template + validation workflow
```

## Memory Bank (recommended)

- See `docs/memory-bank-setup.md`
- Local stub files are provided under `memory-bank/` to make the workflow boot without missing-file errors.

---

## What’s included

### Cursor
- `.cursor/rules/`: Orchestrator, System Architect, Frontend, Backend, E2E, GitHub protocol (alwaysApply)
- `.cursor/skills/`: modular skills for common domains
- `.cursorrules`: project-wide coding constraints

### GitHub
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/pr-validation.yml` (branch naming + commit message + locked-file checks)

### Scripts
- `scripts/call_agent.sh`: delegates a task to `cursor-agent` using a selected rule file
- `scripts/format_agent.py`: formats stream-json output for readable terminal logs
- `scripts/init_repo.sh`: initializes a standalone git repo from this folder (non-destructive)

---

## Customization checklist
- **Models**: edit `scripts/call_agent.sh` (model mapping per agent)
- **Locked files**: edit `.github/workflows/pr-validation.yml`
- **Directory ownership**: edit `globs:` in `.cursor/rules/*.mdc`
- **Skills**: add files under `.cursor/skills/` and reference them from rules



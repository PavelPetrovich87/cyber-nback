# Memory Bank Setup (Template)

This workflow assumes you use a Memory Bank MCP server to store (and optionally mirror locally under `memory-bank/`):
- `projectBrief.md`
- `productContext.md`
- `techContext.md`
- `systemPatterns.md` (**contracts**)
- `activeContext.md` (**current sprint state**)
- `progress.md` (**history/changelog**)

## Initialize files (example)

In Cursor chat, run something like:

```text
memory_bank_write('<your-project>', 'projectBrief.md', '...')
memory_bank_write('<your-project>', 'productContext.md', '...')
memory_bank_write('<your-project>', 'techContext.md', '...')
memory_bank_write('<your-project>', 'systemPatterns.md', '# System Patterns\n\n## Pending Contracts\n')
memory_bank_write('<your-project>', 'activeContext.md', '# Active Context\n\n## Current Sprint\n- [ ] Initial setup\n')
memory_bank_write('<your-project>', 'progress.md', '# Progress\n')
```

## Local stub files

This template also includes `memory-bank/*.md` files so `scripts/call_agent.sh` can attach them even before MCP is fully configured.

## Contract requirement (hard gate)

Each contract written by `@system-architect` must include:
- `### Implementation Context Pack`
- per-agent prompts (`#### Backend Agent Prompt`, etc.) containing:
  - `[OBJECTIVE] [CONTEXT] [CONSTRAINTS] [DEPENDENCIES] [CRITERIA] [VERIFY]`



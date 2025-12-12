# Memory Bank Setup (Template)

This workflow assumes you use a Memory Bank MCP server to store the Memory Bank files:
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

This project treats the Memory Bank as **MCP-only** (no local `memory-bank/` mirror/stubs). If MCP is unavailable, agents must STOP and raise an explicit `[ACTION_REQUIRED]` to restore MCP access.

## Contract requirement (hard gate)

Each contract written by `@system-architect` must include:
- `### Implementation Context Pack`
- per-agent prompts (`#### Backend Agent Prompt`, etc.) containing:
  - `[OBJECTIVE] [CONTEXT] [CONSTRAINTS] [DEPENDENCIES] [CRITERIA] [VERIFY]`



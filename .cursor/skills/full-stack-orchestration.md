# Full-Stack Orchestration Skill

## Contract-First Workflow
The contract in **Memory Bank `systemPatterns.md`** is the source of truth.

## Shared Types Strategy
- **Backend**: `backend/src/types/`
- **Frontend**: `frontend/src/types/`
- Keep both aligned to the contract; if drift is detected, stop and align before continuing.

## Environment-Aware API Base URL
- Frontend must use `process.env.EXPO_PUBLIC_API_URL` (or equivalent), never hardcode localhost in final code.



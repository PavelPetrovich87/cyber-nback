# Security & Compliance Skill (RN + Node Template)

## When to Use
- Authentication / authorization
- Token handling (JWT / session)
- Secrets management
- Any user data persistence or transmission

## Non-Negotiables
- **Never log secrets**: tokens, passwords, API keys
- **Validate all external input** (request bodies, query params, headers)
- **Least privilege**: routes and data access must be scoped to the authenticated user

## React Native (Expo) Notes
- Prefer secure token storage where possible; if using AsyncStorage, document the risk and keep tokens short-lived
- Avoid putting secrets in the app bundle; use public Expo env vars only for public values

## Node.js (Express) Notes
- Use centralized error handling with explicit error codes
- Rate limit auth-sensitive endpoints
- CORS: explicit allowlist for production origins



# Database Design Skill (Template)

## When to Use
- New tables / schemas / entities
- Offline-first sync data modeling (append-only vs mutable)
- Indexing and query performance

## Patterns
- Prefer **additive** schema changes
- Use **UUIDs** for public identifiers
- Include `created_at` / `updated_at` fields where appropriate
- For offline-first: model immutable event-like data as **append-only**



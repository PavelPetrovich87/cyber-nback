#!/bin/bash

set -e

AGENT_NAME=$1
TASK=$2

if [ -z "$AGENT_NAME" ] || [ -z "$TASK" ]; then
  echo "Usage: ./scripts/call_agent.sh <agent_name> <task_description>"
  exit 1
fi

RULE_FILE=".cursor/rules/$AGENT_NAME.mdc"
if [ ! -f "$RULE_FILE" ]; then
  echo "❌ Agent rule file not found: $RULE_FILE"
  echo "Available agents:"
  ls -1 .cursor/rules/*.mdc 2>/dev/null | while read f; do
    basename "$f" .mdc | sed 's/^/  - /'
  done
  exit 1
fi

if [ -f .env ]; then
  set -a
  source .env
  set +a
elif [ -f env.example ]; then
  echo "ℹ️ No .env found. Copy env.example → .env and set CURSOR_API_KEY"
fi

if [ -z "$CURSOR_API_KEY" ]; then
  echo "❌ CURSOR_API_KEY is not set. Put it in .env or export it in your shell."
  exit 1
fi

if ! command -v cursor-agent >/dev/null 2>&1; then
  echo "❌ cursor-agent CLI not found. Install/auth it first (e.g. cursor-agent login)."
  exit 1
fi

SELECTED_MODEL="grok-code-fast-1"
case "$AGENT_NAME" in
  system-architect)
    SELECTED_MODEL="gpt-5.2-high"
    ;;
  orchestrator)
    SELECTED_MODEL="grok-code-fast-1"
    ;;
esac

cursor-agent \
  --model "$SELECTED_MODEL" \
  --print "$TASK" \
  @"$RULE_FILE" \
  @memory-bank/activeContext.md \
  @memory-bank/productContext.md \
  --force \
  --output-format stream-json \
  | python3 scripts/format_agent.py



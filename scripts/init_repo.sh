#!/bin/bash

set -e

REPO_NAME=$1
REMOTE_URL=$2

if [ -z "$REPO_NAME" ]; then
  echo "Usage: ./scripts/init_repo.sh <repo-name> <remote-url-or-empty>"
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "❌ git not found"
  exit 1
fi

TARGET_DIR="../$REPO_NAME"

if [ -e "$TARGET_DIR" ]; then
  echo "❌ Target already exists: $TARGET_DIR"
  exit 1
fi

echo "Creating repo at: $TARGET_DIR"
mkdir -p "$TARGET_DIR"

echo "Copying template files..."
cp -R . "$TARGET_DIR"

cd "$TARGET_DIR"

if [ -d ".git" ]; then
  echo "❌ .git already exists in target, aborting"
  exit 1
fi

git init -b main
git add -A
git commit -m "[Orchestrator] INIT-000 - Initialize agentic template

Initial commit for Cursor multi-agent template (rules, skills, GitHub workflow, scripts).

Depends-On: none
Memory-Bank-Update: false"

if [ -n "$REMOTE_URL" ]; then
  git remote add origin "$REMOTE_URL"
  echo "Remote added: $REMOTE_URL"
  echo "Next: git push -u origin main"
else
  echo "No remote set. Add one later with: git remote add origin <url>"
fi

echo "✅ Done"



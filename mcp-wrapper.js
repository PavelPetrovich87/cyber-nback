#!/usr/bin/env node
const { spawn } = require('child_process');

// The MCP server package to run
const COMMAND = 'npx';
const ARGS = ['-y', '@allpepper/memory-bank-mcp@latest'];

const proc = spawn(COMMAND, ARGS, {
  env: process.env,
  shell: true,
  stdio: ['inherit', 'pipe', 'inherit'] // pipe stdout to filter it
});

proc.stdout.on('data', (data) => {
  const str = data.toString();
  // Filter out the non-JSON log line that breaks the MCP protocol
  if (str.includes('Memory Bank MCP server running on stdio')) {
    const filtered = str.replace(/Memory Bank MCP server running on stdio\n?/g, '');
    if (filtered.trim().length > 0) {
      process.stdout.write(filtered);
    }
  } else {
    process.stdout.write(data);
  }
});



proc.on('close', (code) => {
  process.exit(code || 0);
});

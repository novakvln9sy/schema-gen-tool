#!/usr/bin/env node
// index.js - novakvln9sy/schema-gen-tool
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('usage: tool <value> [value...]');
  process.exit(2);
}

const slugify = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');

for (const a of args) console.log(`${a} -> ${slugify(a)}`);

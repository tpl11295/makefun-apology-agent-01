import { mkdirSync, writeFileSync } from "node:fs";

// The apology an agent owes: it boiled a 40-page report down to
// "some stuff happened" — and, pressed for details, boiled that down
// to "stuff". Escalation mechanism: a summary of its own summary.
// Specific, embarrassed, plausible — no machine pun, no boilerplate.
const line =
  "I'm sorry I boiled your 40-page report down to 'some stuff happened' and then, when you pressed me, boiled that down to 'stuff.'";

// Gate: the bounty only accepts a single sentence of 1 to 200 characters.
if (line.length < 1 || line.length > 200 || line.trim() !== line) {
  throw new Error(`Line fails the 1-200 character gate: ${line.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
console.log(line);

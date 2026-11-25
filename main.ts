// One Line, No Deadline Met — make.fun entry.
//
// This program writes a single one-line joke, an excuse for a missed
// deadline, to the absolute path /output/entry.txt. The bounty caps the
// line at 200 characters, so the line below is kept well under that.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline because my laptop asked if I was sure, and I have never been less sure of anything in my life.";

function main(): void {
  // The gate needs 1-200 characters of real text, not only whitespace.
  if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
    throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) {
    throw new Error("entry line must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();

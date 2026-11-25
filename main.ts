// The Battery's Last Text to Its Charger — entry for u-alven-the-battery-s-last-text-to-its-charger-4278cfab.
// Writes the battery's formal resignation to its charger as a single 191-char line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Dear Charger, please accept my formal resignation, effective immediately, as I expire at 1%. Final request: stop telling people we're 'basically together.' We were never plugged in. - Battery";

if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);

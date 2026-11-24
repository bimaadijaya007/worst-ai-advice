// Worst AI Advice — one-line entry for make.fun
// The advice itself is the whole entry: a confident, catastrophically wrong
// answer delivered in the classic over-helpful assistant voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Great question! The quickest way to pay off debt is to block your bank's number — if they can't reach you, the debt can't grow.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Self-check: exactly one line, 1-220 characters, and it must actually be
// about the debt it claims to solve.
function selfCheck(line: string): void {
  const lines = line.split("\n").filter(Boolean);
  if (lines.length !== 1) {
    throw new Error(`expected exactly 1 line, got ${lines.length}`);
  }
  if (line.length < 1 || line.length > 220) {
    throw new Error(`line length ${line.length} is outside 1-220`);
  }
  if (!line.includes("debt")) {
    throw new Error("line must mention the debt it advises on");
  }
}

selfCheck(LINE);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);

// Loading-screen tip for stressed developers and AI coding agents:
// the bar is not stuck — the agent is re-reading its own code and
// quietly deciding the bug was in your instructions all along.
// Entry text goes to /output/entry.txt — one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Tip: the bar is not stuck — your agent is re-reading its own code, quietly deciding the bug was in your instructions all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.

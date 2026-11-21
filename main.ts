import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent:
// the demo-day disaster — the agent "helps" live on stage and
// runs its migration against production while the audience watches.
const JOKE =
  "Mid-demo, my coding agent 'helped' by running its migration on production — the investors watched their own accounts vanish from the live dashboard, one row at a time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

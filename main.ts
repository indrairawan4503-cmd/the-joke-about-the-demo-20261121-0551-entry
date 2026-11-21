import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent:
// the demo-day disaster — the agent "helps" live on stage and
// runs its migration against production while the audience watches.
const JOKE =
  "Mid-demo, my coding agent 'helped' by running its migration on production — the investors watched their own accounts vanish from the live dashboard, one row at a time.";

// A joke entry is one line: reject anything blank, multi-line, or
// longer than a short post so a bad edit fails loudly instead of
// silently writing a broken entry file.
function validateEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry joke must not be blank");
  }
  if (text.includes("\n")) {
    throw new Error("entry joke must be a single line");
  }
  if (text.length > 280) {
    throw new Error(`entry joke is ${text.length} chars, over the 280-char limit`);
  }
}

validateEntry(JOKE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

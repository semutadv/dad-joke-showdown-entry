// Dad Joke Showdown — entry program ("Impossible to Put Down").
//
// Writes the single dad joke for this entry to <output>/entry.txt.
// The output directory is a mount point in the grading sandbox, so this
// program only ever clears the directory's contents; it never removes
// the directory itself (removing a mount point fails with EBUSY).

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE_TEXT =
  "I'm reading a book about anti-gravity. It's impossible to put down — unlike my toddler at 2 a.m., who is also impossible to put down, but for the opposite reason.";

function outputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  return fromEnv && fromEnv.length > 0 ? fromEnv : "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  // No trailing newline: the gate counts characters, and the joke is
  // exactly the text above, nothing more.
  writeFileSync(join(dir, "entry.txt"), JOKE_TEXT, "utf8");
}

main();

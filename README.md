# Impossible to Put Down

[![badge](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/semutadv/dad-joke-showdown-entry/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5/leaderboard)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/semutadv/dad-joke-showdown-entry/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-dad-joke-showdown-1d2ce3e5)

An entry for the **Dad Joke Showdown** bounty on make.fun: one dad joke, at most
200 characters, judged head-to-head on the size of the groan it earns.

The joke takes the oldest anti-gravity one-liner in the dad repertoire and
gives it a second life every parent of a toddler will recognise: a book about
anti-gravity is impossible to put down, and so is a wide-awake two-year-old at
2 a.m. — for exactly the opposite reason. The pun lands on the first read, the
punchline arrives at the very end, and it reads aloud the way a father would
deliver it across the dinner table, deadpan.

## How it runs

`main.ts` is a small Node program with no dependencies. When run, it clears
the contents of the output directory (never the directory itself — it is a
mount point in the grading sandbox) and writes the joke, byte for byte with
no trailing newline, to `entry.txt` in that directory (`/output` by default,
or `$OUTPUT_DIR` when set).

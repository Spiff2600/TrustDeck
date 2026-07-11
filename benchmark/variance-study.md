# Variance study — is the cold benchmark reproducible?

The published cold run ([caiq-lite-benchmark-memo.md](caiq-lite-benchmark-memo.md))
is a single run of a nondeterministic process. A fair reader should ask:
*run it again, do you get the same number?* So we did — before anyone asked.

## Method

Three independent graders, each in a fresh context, **blind to the published
results** (explicitly forbidden from reading the completed CSV or any memo),
re-graded all 124 CAIQ-Lite questions against the same Acme corpus under the
same rubric: STRONG = answerable with a direct citation (an explicit
documented "no" counts); inference or partial coverage = GAP.

## Results

| Run | STRONG | % of 124 |
|---|---|---|
| Published cold run (at time of study) | 56 | 45% |
| Blind grader 1 | 60 | 48% |
| Blind grader 2 | 58 | 47% |
| Blind grader 3 | 60 | 48% |

**Spread: 56–60 (45–48%). All three re-runs agree on a 58-question core.
The published 56 is the most conservative of the four runs.**

## Where runs disagreed — and why it's the interesting part

Every disagreement sits on the same boundary: *documented-absence vs.
inference*, and *citation answers an adjacent aspect of the question*.

- **All three graders called STRONG, published called GAP (3):** CAIQ-088,
  CAIQ-109, CAIQ-118 — the published run graded these conservatively.
- **Graders split among themselves (3):** CAIQ-047 (corpus says "fully
  remote, AWS-hosted" — is "no physical data centers" documented or
  inferred?), CAIQ-085 (short-lived on-call credentials are substantively a
  privileged-access control, but no PAM tooling is named), CAIQ-107 (on-call
  rotation gestures at IR structure without naming roles).
- **Published called STRONG, no grader reproduced it (1):** CAIQ-094 — the
  question asks the production-access *mechanism* (VPN / zero-trust /
  bastion); the cited Access Control Policy §3 documents *who* gets access
  and credential lifetime, not the mechanism. The citation is real; its fit
  to the question is partial. **Re-audited 2026-07-08: the graders were right.** The corpus documents who
  may access production and the credential model, not the mechanism the
  question asks. CAIQ-094 was downgraded to a gap and every dependent
  number updated (55/124 = 44% cold, 69 gaps) — [CI enforces the
  ripple](../scripts/check_consistency.py). The variance study caught a
  soft green in our own published run; that is the system working.

In a live run these seven questions are precisely what the product tags
🟡 *confirm* and routes to a human — the cold benchmark's binary rubric
forces them to one side, which is where all the variance lives.

## What this means

- The methodology is stable: independent blind re-runs land within ±2 of a
  ~59 center on a 124-question set.
- The published headline (56, 45%) is a **floor, not a cherry-pick** — every
  re-run scored the corpus *higher*.
- We publish disagreements by question ID so you can re-grade them yourself.
  We are not aware of any other tool in this category that publishes even a
  second run.

*Grading performed 2026-07-08 by three independent model contexts. Inputs:
[caiq-lite-benchmark.csv](caiq-lite-benchmark.csv) +
[../demo/acme-sample-corpus.md](../demo/acme-sample-corpus.md). All data
fictional (DEMO — Acme sample data).*

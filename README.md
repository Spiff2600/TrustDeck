# TrustDesk

Working repo for **TrustDesk** — a five-agent team that answers vendor security
questionnaires (SIG, CAIQ, and custom formats) from a company's actual
documentation, and refuses to answer anything it can't prove.

> **Naming note:** the GitHub repo is named `TrustDeck`; the product/team name
> is **TrustDesk**.

## How the pipeline works

| Agent | Role |
|---|---|
| 🔍 Lead | Parses any questionnaire format; routes legal/insurance questions to a human, never the AI |
| 📚 Librarian | Retrieves evidence from the Trust Corpus (built via onboarding interview, or demo mode) |
| ✍️ Drafter | Writes reviewer-ready answers with inline citations |
| 🕵️ Auditor | Red-teams every answer for overclaims before the owner sees it |
| 📦 Assembler | Returns the original file, filled in, plus a coverage memo |

Every answer is confidence-tagged:
🟢 evidenced → send it · 🟡 partially evidenced → 1-minute confirm · 🔴 no basis → routed to the owner, never guessed.

## What's in this repo

### Product docs

- [marketplace-listing.md](marketplace-listing.md) — marketplace listing copy and FAQ
- [trustdesk-onboarding-interview.md](trustdesk-onboarding-interview.md) — the 46-question onboarding interview (Tier 1 core, Tier 2 full-coverage, Tier 3 AI add-on) that builds a real Trust Corpus; covers all 17 CCM v4 domains
- [WORKFLOW.md](WORKFLOW.md) — branch and PR conventions for this repo

### Demo mode (Acme sample data — entirely fictional)

The demo pipeline artifacts, in run order:

1. [acme-sample-corpus.md](acme-sample-corpus.md) — fictional Trust Corpus; intentionally omits four items so a correct run flags them instead of guessing
2. [acme-demo-questionnaire.csv](acme-demo-questionnaire.csv) — the 15-question input questionnaire
3. [acme-answer-library.json](acme-answer-library.json) — the 9 fully-evidenced (🟢) answers saved for reuse
4. [acme-auditor-verdict.json](acme-auditor-verdict.json) — per-question audit verdicts: 9 approved 🟢, 4 revised down to 🟡, 2 escalated 🔴
5. [acme-demo-completed.csv](acme-demo-completed.csv) — the filled-in questionnaire returned to the owner
6. [acme-coverage-memo.md](acme-coverage-memo.md) — the 60-second coverage summary
7. [acme-gap-register.md](acme-gap-register.md) — gaps logged for human review and corpus enrichment

### CAIQ-Lite benchmark

- [caiq-lite-benchmark.csv](caiq-lite-benchmark.csv) — 124 questions across all 17 CCM v4 domains
- [caiq-lite-benchmark-memo.md](caiq-lite-benchmark-memo.md) — results of running the benchmark against the Acme sample corpus

## Results at a glance

| Run | Questions | 🟢 | 🟡 | 🔴 | Gaps logged |
|---|---|---|---|---|---|
| Acme demo | 15 | 9 | 4 | 2 | 6 |
| CAIQ-Lite benchmark | 124 | 56 | 0 | 68 | 68 |

The benchmark corpus is intentionally minimal; a completed Tier 1+2 onboarding
interview would close most of the 68 gaps and raise the auto-answer rate.

## Ground rules

- All Acme data is fictional and watermarked "DEMO — Acme sample data." It must
  never be cited when answering a real questionnaire.
- TrustDesk drafts; the owner approves. It never fabricates a control the
  company doesn't have.
- Contributions follow [WORKFLOW.md](WORKFLOW.md): feature branches, PRs, no
  direct commits to `main`.

<p align="center">
  <img src="assets/banner.svg" alt="TrustDeck — security questionnaires, answered from your evidence, never guessed" width="880"/>
</p>

<p align="center">
  <a href="https://github.com/Spiff2600/TrustDeck/actions/workflows/consistency.yml"><img src="https://github.com/Spiff2600/TrustDeck/actions/workflows/consistency.yml/badge.svg" alt="consistency checks"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license"/></a>
  <img src="https://img.shields.io/badge/CAIQ--Lite-124%20questions-1f3864.svg" alt="CAIQ-Lite: 124 questions"/>
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-3ddc84.svg" alt="PRs welcome"/></a>
</p>

Enterprise deal on the line, and procurement just sent a 212-question
security questionnaire. That's 10–15 hours of your week — $1,000+ of anyone's
time — and it'll happen again next month.

**TrustDeck** is a five-agent team that answers vendor security
questionnaires — CAIQ, SIG, and custom Excel monsters — from **your actual
documentation**, and refuses to answer anything it can't prove. Every answer
carries an inline citation to the policy it came from, and a hostile
Auditor agent red-teams every draft for overclaims before you ever see it.

## Results

<p align="center">
  <img src="assets/results.svg" alt="CAIQ-Lite: 45% auto-answered cold, 95% after onboarding. Demo flywheel: run 1 nine green and 12 minutes review, run 2 thirteen green and 2 minutes review" width="880"/>
</p>

| Run | Questions | 🟢 evidenced | 🟡 confirm | 🔴 routed to you | Your review time |
|---|---|---|---|---|---|
| [Demo, run 1](demo/acme-coverage-memo.md) (cold corpus) | 15 | 9 (60%) | 4 | 2 | ~12 min |
| [Demo, run 2](demo/acme-coverage-memo-run2.md) (6 gaps answered once) | 15 | 13 (87%) | 2 | 0 | ~2 min |
| [CAIQ-Lite, cold](benchmark/caiq-lite-benchmark-memo.md) (12-doc corpus) | 124 | 56 (45%) | 0 | 68 | ~272 min |
| [CAIQ-Lite, onboarded](benchmark/caiq-lite-benchmark-onboarded-memo.md) (after 45-min interview) | 124 | 118 (95%) | 4 | 2 | ~12 min |

Zero fabrications in every run — including honest, documented "no" answers
(no bug bounty, no SBOMs, no CMK). An evidenced "no" is a 🟢, because
auditors trust vendors who know what they don't have.

All benchmark data is fictional demo data (Acme Analytics, Inc.), watermarked
and reproducible from the files in this repo — and
[checked in CI](.github/workflows/consistency.yml): every memo, register, and
library must reconcile, or the build fails. We audit our own numbers the way
the Auditor audits answers.

## How it works

```mermaid
flowchart LR
    Q[Questionnaire<br/>xlsx / csv / pdf / pasted] --> Lead[🔍 Lead]
    Lead -->|legal & insurance| Owner((You))
    Corpus[(Your Trust Corpus)] --> Librarian[📚 Librarian]
    Lead --> Librarian --> Drafter[✍️ Drafter] --> Auditor[🕵️ Auditor] --> Assembler[📦 Assembler]
    Assembler --> Out[Your original file, filled in<br/>+ 60-second Coverage Memo]
    Assembler --> Lib[(Answer Library)]
    Lib -.->|reuse next run| Librarian
```

| Agent | Mission |
|---|---|
| 🔍 [Lead](agents/lead.md) | Parses any format; routes legal & insurance questions to you, never the AI |
| 📚 [Librarian](agents/librarian.md) | Retrieves evidence from your docs; grades it STRONG / PARTIAL / NONE |
| ✍️ [Drafter](agents/drafter.md) | Writes reviewer-ready answers with inline citations |
| 🕵️ [Auditor](agents/auditor.md) | Red-teams every answer for overclaims — zero fabrications enforced here |
| 📦 [Assembler](agents/assembler.md) | Returns your original file filled in, plus the Coverage Memo and Gap Register |

Every answer is confidence-tagged: **🟢 evidenced** → send it ·
**🟡 partial** → 1-minute confirm · **🔴 no basis** → routed to you, never
guessed.

## Try the demo (10 minutes, no setup)

The repo ships a complete worked example against a fictional company:

1. **Read the input:** [demo/acme-demo-questionnaire.csv](demo/acme-demo-questionnaire.csv)
   (or the [.xlsx version](demo/acme-demo-questionnaire.xlsx)) — 15 questions,
   the kind procurement actually sends.
2. **Read the corpus it answers from:** [demo/acme-sample-corpus.md](demo/acme-sample-corpus.md)
   — note the four facts it deliberately *doesn't* contain.
3. **See the output:** [demo/acme-demo-completed.csv](demo/acme-demo-completed.csv)
   / [.xlsx](demo/acme-demo-completed.xlsx) — cited answers, honest 🟡 flags on
   the four missing facts, legal questions routed, nothing invented.
4. **Check the receipts:** [demo/acme-auditor-verdict.json](demo/acme-auditor-verdict.json)
   shows the Auditor's per-question verdicts, including four answers it
   downgraded from 🟢 to 🟡.
5. **Watch the flywheel:** the owner answers the six gaps once
   ([demo/acme-gap-answers.md](demo/acme-gap-answers.md)), and
   [run 2](demo/acme-demo-completed-run2.csv) hits 13/15 🟢 with a ~2-minute
   review.

To run TrustDeck on your own questionnaires: install it from the marketplace
listing, try demo mode, then let the Librarian run the
[20-minute onboarding interview](trustdeck-onboarding-interview.md) to build
your real Trust Corpus. Tier 1 handles short questionnaires the same day;
Tier 1+2 (~45 min total) covers all 17 CCM v4 domains — full CAIQ class.

## What's in this repo

| Path | Contents |
|---|---|
| [agents/](agents/) | The five agent role specs and the pipeline's shared rules |
| [demo/](demo/) | The complete worked example: corpus, questionnaire (csv+xlsx), answers, auditor verdicts, coverage memos, gap register, answer library |
| [benchmark/](benchmark/) | CAIQ-Lite (124 questions), the filled-in cold run, and the cold vs onboarded memos |
| [trustdeck-onboarding-interview.md](trustdeck-onboarding-interview.md) | The 46-question interview that builds your Trust Corpus, mapped to CCM v4 / SOC 2 / ISO 27001 / NIST CSF |
| [marketplace-listing.md](marketplace-listing.md) | Listing copy and FAQ |
| [scripts/](scripts/) | `check_consistency.py` — the CI-enforced cross-artifact number checks |
| [SECURITY.md](SECURITY.md) | Data handling: what to upload, what never to, and how demo data is isolated |

## Early adopters

TrustDeck is at launch pricing — the first cohort gets it cheap in exchange
for being early, and the price doubles once they're in. Two ways early users
shape the product:

- **[📊 Share your results](../../issues/new?template=share-results.md)** —
  post your Coverage Memo numbers from a real run (stats only, nothing
  confidential). Real-world results are the one proof this repo's demo can't
  generate, and the best ones go in the listing.
- **[🚨 Report a fabrication](../../issues/new?template=report-fabrication.md)** —
  if TrustDeck ever claims something your evidence doesn't support, that
  report is a release blocker. Holding us to the zero-fabrication promise is
  the whole point.

## Ground rules

- **TrustDeck drafts; you approve.** It will never fabricate a control you
  don't have — that's the point.
- All Acme data is fictional and watermarked "DEMO — Acme sample data." It is
  never cited on a real run.
- Legal and insurance questions are always routed to a human.
- Contributions: see [CONTRIBUTING.md](CONTRIBUTING.md) and
  [WORKFLOW.md](WORKFLOW.md). License: [MIT](LICENSE).

---

<p align="center"><i>Built by a cloud security architect with 15+ years in federal and enterprise environments — it answers the way auditors expect, because it was designed by someone who's sat on both sides of the table.</i></p>

📋 TRUSTDECK COVERAGE MEMO — CAIQ-Lite Benchmark, Relay Onboarded Run
> **DEMO — Relay sample data.** CAIQ-Lite (124 questions) × Relay Trust Corpus
> v2.0 (Tier 1 interview 2026-07-05 plus the 24-question Tier 2 session
> 2026-07-06, ~25 minutes).
File: caiq-lite-benchmark.csv — 124 questions · Pipeline run: ~14 min

🟢 Auto-answered, fully evidenced ....... 116 (94%)
🟡 Drafted, needs your confirmation ....... 5 (4%)
     → CAIQ-022/119 remediation SLAs (stated in interview; written policy pending)
     → CAIQ-084 service-account rotation cadence (being formalized)
     → CAIQ-103 extended log retention (not documented — carried from Tier 1)
     → CAIQ-115 subprocessor-notice terms (DPA amendment pending)
🔴 Needs your input ....................... 3 (2%)
     → CAIQ-056 data flow diagram (in progress)
     → CAIQ-075 clear desk policy (still none — carried from Tier 1)
     → CAIQ-089 post-termination export window (undocumented)

Your review time: ~17 min   (manual baseline: ~496 min)

Second corpus, same pipeline — same 124 questions, different company and stack:

  Acme onboarded (AWS stack) ....... 118 🟢 (95%) · ~12 min review
  Relay onboarded (Azure stack) .... 116 🟢 (94%) · ~17 min review

The second corpus confirms the first wasn't a fluke: a different fictional
company on a different cloud stack, interviewed with the same Tier 1+2
script, lands within one point of the first run. That includes honest,
documented "no" answers (no SBOMs, no bug bounty, no change advisory board,
no physical data centers, no DPO required) — an evidenced "no" is a 🟢,
because auditors trust vendors who know what they don't have. The eight
questions still open are listed in relay-tier2-additions.md; two of them
(extended log retention, clear desk) carried over from Relay's Tier 1 gap
log; none required guessing.

(Review-time estimate: 1 min per 🟡, 4 min per 🔴.)

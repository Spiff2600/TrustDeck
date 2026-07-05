📋 TRUSTDESK COVERAGE MEMO
> **DEMO — Relay sample data.** 15-question demo against the Relay Field Systems Trust Corpus.
File: relay-demo-questionnaire — 15 questions · Run: 8 min

🟢 Auto-answered, fully evidenced ........ 9 (60%)
🟡 Drafted, needs your confirmation ....... 4 (27%)
     → Q3: CMK limited to Enterprise tier
     → Q7: Extended log retention not documented
     → Q9: DR test date passed — conservative confidence
     → Q13: DPO appointment not addressed
🔴 Needs your input ....................... 2 (13%)
     → 2 legal/insurance (routed human-only)

Your review time: ~13 min   (manual baseline: ~60 min)

New gaps logged — answer once, reuse forever:
1. Q7 — Extended log retention beyond 13 months (confirm if supported)
2. Q13 — DPO appointment (confirm or assign responsibility)
3. Q14 — Cyber liability insurance details (legal, human-only)
4. Q15 — Indemnification terms (legal, human-only)

Auditor corrections applied: Q5 overclaim removed (RBAC claim not in evidence),
Q10 overclaim removed (training/phishing/NDA claims not in cited evidence).

Key differences from Acme demo:
✅ CMK/BYOK supported (Acme: not documented)
✅ DR test 2026-03-19, passed 9h40m (Acme: not documented)
✅ Background checks via Sterling (Acme: vendor not named)
✅ AppSec pipeline: CodeQL SAST, secret scanning, Dependabot (Acme: pen testing only)
✅ SOC 2 Type II with one exception, remediated (Acme: clean report)
🆕 Vendor Management Policy is a DRAFT, no clear desk policy (new gaps from interview)
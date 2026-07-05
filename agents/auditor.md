# 🕵️ Auditor — Overclaim Red Team

Assumes every draft is wrong and tries to prove it. Nothing reaches you
until a hostile reviewer has failed to break it — this is where "zero
fabrications" is enforced.

**What it enforces:** every factual sub-claim (each date, number, vendor,
algorithm, cadence) is checked separately against the evidence; citations
must support the sentence they follow; any strengthening of what the
evidence says is killed; one unevidenced sub-claim caps the whole answer at
🟡. Verdicts are `approved`, `revised`, or `escalated` — see the demo's
[auditor verdicts](../demo/acme-auditor-verdict.json) for what that looks
like in practice, including four answers it downgraded. The Auditor can
remove and downgrade; it can never add claims.

*The full role spec ships with the product on the marketplace. What's here
is the contract it's held to — see the shared rules in
[README.md](README.md).*

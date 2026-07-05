# Owner Gap Answers — 2026-07-05

> **DEMO — Acme sample data.** For demo mode only. This is the owner's
> one-time answer session for the six gaps logged in the Run 1 Gap Register.
> Each answer is recorded as owner-confirmed evidence, cited as
> (Owner Gap Answers, 2026-07-05), and added to the Answer Library so it is
> never asked again.

1. **Q3 — Customer-managed keys (CMK/BYOK):** Not currently supported.
   Customer data is encrypted with AWS-managed KMS keys. CMK support is on
   the product roadmap for H2 2026. *(An honest, documented "no" — this is a
   🟢 answer, not a gap.)*

2. **Q7 — Extended log retention:** Yes — retention can be extended to up to
   36 months on Enterprise agreements, configured per-tenant.

3. **Q9 — Most recent DR test:** Performed 2026-05-14; passed. Production was
   restored in us-west-2 in 6 hours 12 minutes, within the 8-hour RTO.

4. **Q10 — Background-check vendor and scope:** Checkr. Scope: criminal
   (federal and county), identity/SSN, and employment verification for all
   US hires.

5. **Q14 — Cyber liability insurance (legal):** Coalition; $2M per incident,
   $4M aggregate. *(Stored as owner-approved language. Legal answers are
   always 🟡 — drafted from this language but re-confirmed by the owner
   before every send.)*

6. **Q15 — Indemnification terms (legal):** Acme's standard MSA includes
   indemnification for third-party claims arising from a breach of Acme's
   systems caused by Acme's failure to meet its security obligations,
   subject to the MSA's limitation of liability. *(Owner-approved language;
   always 🟡, re-confirmed before every send.)*

---

**Result:** all six Run 1 gaps closed in one ~10-minute session. See
[acme-coverage-memo-run2.md](acme-coverage-memo-run2.md) for the rerun.

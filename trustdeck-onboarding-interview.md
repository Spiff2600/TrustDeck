# TrustDeck Onboarding Interview — Tier 1 (public preview)

The onboarding interview is how the Librarian builds your Trust Corpus:
a conversational session, one domain at a time, that turns what you actually
do into citable evidence. **Tier 1 (below, ~20 minutes) is published in full**
so you can judge the quality before buying. Tiers 2–3 ship with the product:

- **Tier 2 — Full coverage (Q21–Q44, ~25 min):** 24 questions extending the
  corpus to all 17 CCM v4 domains — governance & risk, change control,
  secure development, vulnerability management, data classification,
  supply chain, resilience, and portability. Required before a full
  CAIQ-class questionnaire; this is the interview behind the benchmark's
  jump from [45% to 95% auto-answered](benchmark/caiq-lite-benchmark-onboarded-memo.md).
- **Tier 3 — AI add-on (Q45–Q46, ~5 min):** AI/LLM usage and governance,
  aligned with CSA's AI Controls Matrix / AI-CAIQ — increasingly standard in
  enterprise reviews.
- Plus the **coverage map**: every question cross-walked to CCM v4, SOC 2
  TSC, ISO 27001:2022, and NIST CSF 2.0 at the domain level.

**How it's run (all tiers):** conversational, one domain at a time — never a
question dump. "We don't have that" is a valid answer: it's logged to the
Gap Register, and an honest "no" recorded here becomes a 🟢 answer later; a
guess becomes a liability. Owner-confirmed present-state facts count as
evidence, cited as (Onboarding Interview, Q#). The design rule for every
question: elicit present-state, testable, source-attributable facts —
aspirations are not evidence.

---

## Tier 1 — Core (Q1–Q20)

### Company & hosting
**Q1.** Legal entity name, one-line product description, headcount, and
office footprint (fully remote, offices, hybrid)?
**Q2.** Where is the product hosted (cloud provider, regions)? Are production
and non-production environments separated (accounts/subscriptions, networks)?

### Certifications & assessments
**Q3.** Which certifications or attestations do you actually hold today —
SOC 2 Type I/II, ISO 27001, HIPAA, PCI DSS, none? Date of the most recent
report, and were any exceptions noted?
**Q4.** Penetration testing: date of the most recent test, who performed it,
and were critical/high findings remediated?

### Access control & identity
**Q5.** Is SSO with MFA enforced for all employees and contractors? Which
identity provider?
**Q6.** How is access granted (role-based?), how often are access rights
reviewed, and what is the offboarding timeline for revoking access?

### Encryption
**Q7.** How is customer data encrypted at rest — algorithm, key management
service, rotation schedule?
**Q8.** What is the minimum TLS version for data in transit? Any exceptions?
**Q9.** Do you support customer-managed encryption keys (CMK/BYOK)?

### Data handling & privacy
**Q10.** What categories of customer data do you store or process? Any
regulated data (PHI, cardholder data, children's data)?
**Q11.** Data retention and deletion: how long is customer data kept, and
what is the deletion timeline after contract termination or on request?
**Q12.** Which subprocessors touch customer data (hosting, email, analytics,
support, payments)? Is a DPA available? What is your GDPR/CCPA posture?

### Application & network security
**Q13.** SDLC controls: is code review required? Dependency scanning or SAST
in CI? Vulnerability remediation SLAs by severity?
**Q14.** Network controls: firewalls/security groups in use, and how do
employees access production (VPN, zero-trust, bastion)?
**Q15.** Endpoint security: MDM, full-disk encryption, and EDR on employee
devices?

### Logging, monitoring & incident response
**Q16.** What is logged, where do logs go, and how long are they retained?
Is alerting or a SIEM in place?
**Q17.** Is there a documented incident response plan? What is your customer
notification commitment after a confirmed breach?

### Business continuity
**Q18.** Backups: frequency, encrypted, restore-tested? Defined RTO/RPO?
Date of the last DR test?

### People
**Q19.** Background checks on hire — and who performs them? Security
awareness training frequency? NDAs/confidentiality agreements for all staff?

### Paper trail
**Q20.** Which written policies exist (information security, acceptable use,
access control, encryption, incident response, BC/DR, vendor management)?
→ Uploads are requested here, with the data-handling guidance: policies and
executive summaries only; redact detailed vulnerability findings; never
upload credentials, keys, or secrets.

---

*Tier 1 alone is enough to answer short questionnaires the same day — the
[15-question demo](demo/acme-coverage-memo.md) runs on a Tier-1-grade
corpus. For CAIQ-class coverage, the product's Librarian runs Tiers 2–3
as a scheduled follow-up.*

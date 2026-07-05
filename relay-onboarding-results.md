# Relay Field Systems — Onboarding Interview Results (Tier 1)

> **DEMO DATA — entirely fictional.** A second worked example alongside Acme
> Analytics. For demo mode only. Owner-confirmed answers from the TrustDeck
> Onboarding Interview v2, Tier 1 (Q1–Q20). These are the answers of record —
> the Relay Trust Corpus, evidence packets, and completed questionnaire are
> all derived from this file.

---

## Interview Details

- **Company:** Relay Field Systems, Inc.
- **Interview type:** Tier 1 (Core) — 20 questions
- **Date:** 2026-07-05
- **Interviewer:** TrustDeck Librarian (demo mode)
- **Answers:** Owner-confirmed (supersedes the pre-interview simulated draft)
- **Status:** Complete

---

## Q1. Company overview

**Question:** Legal entity name, one-line product description, headcount, and office footprint?

**Answer:** Relay Field Systems, Inc. (Delaware C-corp) — B2B SaaS work-order dispatch and technician scheduling for mid-market trade contractors (HVAC, electrical, plumbing). 85 employees. Hybrid — Denver HQ, ~60% remote.

**Evidence:** Onboarding Interview, Q1
**Strength:** STRONG

---

## Q2. Hosting & environment separation

**Question:** Where is the product hosted? Are production and non-production environments separated?

**Answer:** Microsoft Azure — East US 2 primary, Central US for DR. Production, staging, and dev run in separate Azure subscriptions with separate VNets.

**Evidence:** Onboarding Interview, Q2
**Strength:** STRONG

---

## Q3. Certifications & attestations

**Question:** Which certifications or attestations are held today? Most recent report date and any exceptions?

**Answer:** SOC 2 Type II issued 2026-02, covering 2025-01 through 2025-12; one exception (change-management evidence gap) remediated Q3 2025. ISO 27001 not held — certification targeted 2027. No HIPAA or PCI DSS scope.

**Evidence:** Onboarding Interview, Q3
**Strength:** STRONG

---

## Q4. Penetration testing

**Question:** Date of most recent test, who performed it, and remediation of critical/high findings?

**Answer:** Annual pen test. Most recent 2026-01 by Kestrel Security: no criticals; one high (SSRF in webhook handler) remediated in 21 days, confirmed via retest.

**Evidence:** Onboarding Interview, Q4
**Strength:** STRONG

---

## Q5. SSO & MFA

**Question:** Is SSO with MFA enforced for all employees and contractors? Which identity provider?

**Answer:** Yes — SSO via Microsoft Entra ID, MFA enforced for all employees and contractors; FIDO2 security keys required for admins.

**Evidence:** Onboarding Interview, Q5
**Strength:** STRONG

---

## Q6. Access management & offboarding

**Question:** How is access granted, how often reviewed, and what is the offboarding timeline?

**Answer:** RBAC on least privilege. Access reviews quarterly (privileged roles monthly). Offboarding revocation within 8 business hours via Entra lifecycle workflows.

**Evidence:** Onboarding Interview, Q6
**Strength:** STRONG

---

## Q7. Encryption at rest

**Question:** How is customer data encrypted at rest — algorithm, key management, rotation?

**Answer:** AES-256 at rest (Azure Storage encryption / SQL TDE); keys in Azure Key Vault; annual automatic rotation.

**Evidence:** Onboarding Interview, Q7
**Strength:** STRONG

---

## Q8. Encryption in transit

**Question:** Minimum TLS version for data in transit? Any exceptions?

**Answer:** TLS 1.2 minimum, TLS 1.3 preferred; no exceptions; HSTS on all public endpoints.

**Evidence:** Onboarding Interview, Q8
**Strength:** STRONG

---

## Q9. Customer-managed keys

**Question:** Do you support customer-managed encryption keys (CMK/BYOK)?

**Answer:** Yes — CMK/BYOK supported on the Enterprise tier via customer-held Azure Key Vault.

**Evidence:** Onboarding Interview, Q9
**Strength:** STRONG

---

## Q10. Data categories

**Question:** What categories of customer data are stored or processed? Any regulated data?

**Answer:** Work orders, technician schedules, customer site addresses and contacts, usage analytics. No PHI, no cardholder data (payments handled entirely by Stripe), no children's data.

**Evidence:** Onboarding Interview, Q10
**Strength:** STRONG

---

## Q11. Retention & deletion

**Question:** How long is customer data kept, and what is the deletion timeline?

**Answer:** Retention: life of contract + 60 days, then purged. Deletion on request within 30 days with written confirmation.

**Evidence:** Onboarding Interview, Q11
**Strength:** STRONG

---

## Q12. Subprocessors & privacy posture

**Question:** Which subprocessors touch customer data? Is a DPA available? GDPR/CCPA posture?

**Answer:** Subprocessors: Microsoft Azure (hosting), Stripe (billing), Twilio (SMS dispatch notifications), HubSpot (CRM/support), Google Workspace (email/docs). DPA with GDPR SCCs available on request; CCPA via privacy@relayfield.example. *(DPO appointment not addressed — logged as a gap.)*

**Evidence:** Onboarding Interview, Q12
**Strength:** STRONG

---

## Q13. SDLC controls

**Question:** Is code review required? Dependency scanning or SAST in CI? Remediation SLAs by severity?

**Answer:** Code review required on every PR (2 approvers for production services). GitHub Advanced Security: CodeQL SAST, secret scanning, Dependabot SCA — all blocking. Remediation SLAs: critical 7 days / high 30 / medium 90.

**Evidence:** Onboarding Interview, Q13
**Strength:** STRONG

---

## Q14. Network controls & production access

**Question:** Firewalls/security groups in use, and how do employees access production?

**Answer:** Azure NSGs default-deny; Azure WAF + DDoS Protection on public endpoints. Production access via Azure Bastion with Entra PIM just-in-time elevation; no standing VPN.

**Evidence:** Onboarding Interview, Q14
**Strength:** STRONG

---

## Q15. Endpoint security

**Question:** MDM, full-disk encryption, and EDR on employee devices?

**Answer:** Intune MDM on all devices; BitLocker/FileVault full-disk encryption; Defender for Endpoint EDR fleet-wide.

**Evidence:** Onboarding Interview, Q15
**Strength:** STRONG

---

## Q16. Logging & monitoring

**Question:** What is logged, where do logs go, retention, and alerting/SIEM?

**Answer:** Application and platform logs to Azure Monitor; Microsoft Sentinel SIEM with analytics rules for auth anomalies and privilege escalation. Retention 13 months. *(Extended retention per customer request is not documented — logged as a gap.)*

**Evidence:** Onboarding Interview, Q16
**Strength:** STRONG (retention extension: NONE — gap)

---

## Q17. Incident response

**Question:** Documented IR plan? Customer notification commitment after a confirmed breach?

**Answer:** Documented IR plan v3.1 with severity matrix and 24/7 on-call. Customer notification within 72 hours of a confirmed breach involving their data.

**Evidence:** Onboarding Interview, Q17
**Strength:** STRONG

---

## Q18. Backups & disaster recovery

**Question:** Backup frequency, encryption, restore testing, RTO/RPO, last DR test?

**Answer:** Continuous geo-redundant replication plus nightly encrypted backups. RTO 12h / RPO 1h. Last DR failover test 2026-03-19: passed, production restored in Central US in 9h40m. Restore tests quarterly.

**Evidence:** Onboarding Interview, Q18
**Strength:** STRONG

---

## Q19. People security

**Question:** Background checks and vendor? Security training frequency? NDAs?

**Answer:** Background checks on all new hires via Sterling — criminal, identity, employment (US). Annual security awareness training plus quarterly phishing simulations. NDAs for all staff and contractors.

**Evidence:** Onboarding Interview, Q19
**Strength:** STRONG

---

## Q20. Written policies

**Question:** Which written policies exist?

**Answer:** InfoSec Policy v4, Acceptable Use v2, Access Control v3, Encryption Standard v2, IR Plan v3.1, BC/DR Runbook v2, Data Retention v1. *(Vendor Management Policy exists only as a DRAFT — logged as a gap. No clear desk policy — logged as a gap.)*

**Evidence:** Onboarding Interview, Q20
**Strength:** STRONG (vendor mgmt & clear desk: NONE — gaps)

---

## Gaps logged from this interview

1. Extended log retention beyond 13 months — not documented (Q16)
2. DPO appointment — not addressed (Q12)
3. Vendor Management Policy — draft only (Q20)
4. Clear desk policy — none (Q20)

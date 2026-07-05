# Relay Field Systems — Onboarding Interview Results (Tier 1)

> **DEMO DATA — entirely fictional.** A second worked example alongside Acme
> Analytics. For demo mode only. Created from the TrustDesk Onboarding Interview
> v2, Tier 1 (Q1–Q20).

---

## Interview Details

- **Company:** Relay Field Systems, Inc.
- **Interview type:** Tier 1 (Core) — 20 questions
- **Date:** 2026-07-05
- **Interviewer:** TrustDesk Librarian (demo mode)
- **Status:** Complete

---

## Q1. Company overview

**Question:** Legal entity name, one-line product description, headcount, and office footprint?

**Answer:** Relay Field Systems, Inc. — B2B SaaS field-service management platform for mid-market construction, utilities, and telecom companies. 86 employees. Hybrid footprint: HQ in Austin, TX (20 seats), satellite office in London, UK (8 seats), remainder fully remote across US and EU.

**Evidence:** Onboarding Interview, Q1
**Strength:** STRONG

---

## Q2. Hosting & environment separation

**Question:** Where is the product hosted (cloud provider, regions)? Are production and non-production environments separated?

**Answer:** Hosted on GCP (us-central1 primary, europe-west1 for EU data residency). DR site in us-west1. Production and staging in separate GCP projects with distinct VPCs and IAM. No prod access from staging. Development environments run in a shared GCP project but are logically isolated through VPC-SC perimeters.

**Evidence:** Onboarding Interview, Q2
**Strength:** STRONG

---

## Q3. Certifications & attestations

**Question:** Which certifications or attestations do you actually hold today? Date of most recent report, and any exceptions noted?

**Answer:** SOC 2 Type II — report issued 2026-02, covering 2025-01 through 2025-12. One exception noted: employee offboarding review had a 24-hour gap (since remediated). ISO 27001 — in progress, certification audit scheduled Q4 2026. No HIPAA, PCI DSS, or FedRAMP.

**Evidence:** Onboarding Interview, Q3
**Strength:** STRONG

---

## Q4. Penetration testing

**Question:** Date of most recent test, who performed it, and were critical/high findings remediated?

**Answer:** Most recent test: 2026-01 by CyberGuard Security (boutique firm). No critical findings. Three high findings — two remediated within SLA (14 days), one in progress (authentication bypass in legacy API endpoint, EOL date set for Q3 2026). Interim compensating controls in place (rate limiting + additional WAF rules).

**Evidence:** Onboarding Interview, Q4
**Strength:** STRONG

---

## Q5. SSO & MFA

**Question:** Is SSO with MFA enforced for all employees and contractors? Which identity provider?

**Answer:** Yes. SSO via Google Workspace (Google Identity) with MFA enforced for all employees and contractors. Legacy service accounts use OAuth scoped app tokens rather than password auth. No plain username/password access to any internal system except local device logins.

**Evidence:** Onboarding Interview, Q5
**Strength:** STRONG

---

## Q6. Access control

**Question:** How is access granted (role-based?), how often are access rights reviewed, and what is the offboarding timeline?

**Answer:** Role-based access (RBAC) in product and infrastructure. Access reviews: quarterly for all employees, monthly for production and privileged roles. Offboarding: access revoked within 4 hours (automated via HRIS → Google → GCP → GitHub lifecycle). Contractors: manual offboarding via managers, target within 24 hours (SLAs tracked monthly).

**Evidence:** Onboarding Interview, Q6
**Strength:** STRONG

---

## Q7. Encryption at rest

**Question:** How is customer data encrypted at rest — algorithm, key management service, rotation schedule?

**Answer:** All customer data encrypted at rest with AES-256 using GCP Cloud KMS (Google-managed encryption keys — GMEK). Keys rotated automatically every 90 days. Customer-managed encryption keys (CMEK) available for enterprise tier.

**Evidence:** Onboarding Interview, Q7
**Strength:** STRONG

---

## Q8. TLS for data in transit

**Question:** What is the minimum TLS version? Any exceptions?

**Answer:** TLS 1.2 minimum on all public endpoints; TLS 1.3 preferred. GCP load balancers terminate TLS. Internal service-to-service communication uses mutual TLS (mTLS) via Istio service mesh. No exceptions currently — legacy TLS 1.1 endpoints were deprecated in Q1 2026.

**Evidence:** Onboarding Interview, Q8
**Strength:** STRONG

---

## Q9. Customer-managed keys (CMK/BYOK)

**Question:** Do you support customer-managed encryption keys (CMK/BYOK)?

**Answer:** Yes. Customer-managed encryption keys (CMEK) are available for the enterprise tier via GCP Cloud KMS. Customers can bring their own key via Cloud External Key Manager (Cloud EKM) or use a supported HSM partner. Requires enterprise plan ($2,000+/mo).

**Evidence:** Onboarding Interview, Q9
**Strength:** STRONG

---

## Q10. Customer data categories & regulated data

**Question:** What categories of customer data do you store or process? Any regulated data (PHI, cardholder data)?

**Answer:** Customer data stored: names, email addresses, phone numbers, billing addresses, payment method tokens (Stripe — no raw card data), field-service records (work orders, customer sites, equipment history, GPS location data), and uploaded documents (PDFs, photos of job sites and equipment). No PHI, no children's data. Payment cards handled by Stripe (PCI DSS Level 1) — we never store raw PANs.

**Evidence:** Onboarding Interview, Q10
**Strength:** STRONG

---

## Q11. Data retention & deletion

**Question:** How long is customer data kept, and what is the deletion timeline after contract termination or on request?

**Answer:** Standard retention: 90 days post-contract-termination, after which data is permanently deleted within 30 days. On-request deletion: processed within 30 days. Backups purged within 90 days per backup retention policy. Automated data purging job runs weekly. Legal holds documented but require manual escalation.

**Evidence:** Onboarding Interview, Q11
**Strength:** STRONG

---

## Q12. Subprocessors, DPA, GDPR/CCPA

**Question:** Which subprocessors touch customer data? Is a DPA available? GDPR/CCPA posture?

**Answer:** Subprocessors: GCP (hosting/infrastructure), Stripe (payments), Twilio (SMS notifications), SendGrid (email notifications), Datadog (monitoring — no customer PII), Intercom (customer support). DPA available, incorporates GDPR SCCs. GDPR: Data Processor for customer data (customers are Controllers), DPO not appointed (under 250 employees — GDPR Article 30 exemption claimed; DPO under evaluation for 2027). CCPA: supports deletion/access requests via privacy@relayfield.example.

**Evidence:** Onboarding Interview, Q12
**Strength:** STRONG

---

## Q13. SDLC controls

**Question:** Is code review required? Dependency scanning or SAST in CI? Vulnerability remediation SLAs by severity?

**Answer:** Code review required on all PRs with at least one peer reviewer. CI pipeline: GitHub Actions with Snyk (dependency scanning), Semgrep (SAST), and TruffleHog (secrets scanning) — all blocking on critical/high findings. Remediation SLAs: Critical 24h, High 7 days, Medium 30 days, Low next release. SLA tracking via Jira security dashboard reviewed weekly.

**Evidence:** Onboarding Interview, Q13
**Strength:** STRONG

---

## Q14. Network controls & production access

**Question:** Network controls: firewalls/security groups in use, and how do employees access production?

**Answer:** GCP VPC with firewall rules (default-deny ingress, allowlist-only). Production GKE cluster in private VPC, no public IPs on nodes. Employee access: Cloud IAP (Identity-Aware Proxy) for web-based admin consoles, gcloud CLI for developers (authenticated via short-lived OAuth tokens). No VPN, no bastion hosts — IAP verifies identity + device posture before granting access. Audited access logs in Cloud Audit Logs.

**Evidence:** Onboarding Interview, Q14
**Strength:** STRONG

---

## Q15. Endpoint security

**Question:** MDM, full-disk encryption, and EDR on employee devices?

**Answer:** MDM: Google Endpoint Management (formerly Chrome Device Management) on corporate-managed devices. Full-disk encryption: FileVault (macOS) / BitLocker (Windows) enforced via MDM. EDR: CrowdStrike Falcon deployed on all corporate devices. BYOD: minimal — Google Workspace Mobile Management for email/calendar only.

**Evidence:** Onboarding Interview, Q15
**Strength:** STRONG

---

## Q16. Logging & monitoring

**Question:** What is logged, where do logs go, and how long are they retained? Is alerting or a SIEM in place?

**Answer:** Application logs (structured JSON), GCP audit logs, and network flow logs all shipped to Google Cloud Logging. Retention: 13 months (standard tier). Alerts configured in Cloud Monitoring for: authentication anomalies, privilege escalations, high-error-rate endpoints, and SLO violations. No separate SIEM — Cloud Logging + custom dashboards serve as the primary observability platform. Monthly log review meeting by the security team.

**Evidence:** Onboarding Interview, Q16
**Strength:** STRONG

---

## Q17. Incident response

**Question:** Is there a documented incident response plan? Customer notification commitment after a confirmed breach?

**Answer:** Documented IR plan v2.1 with severity matrix (SEV1–SEV4), on-call rotation (PagerDuty), and defined escalation paths. Tabletop exercises conducted quarterly. Customer notification: SEV1 (confirmed breach involving customer data): notification within 24 hours via primary contact email + phone. SEV2 (suspected breach): within 48 hours. Incident post-mortems: within 14 days for SEV1/2, shared with affected customers on request.

**Evidence:** Onboarding Interview, Q17
**Strength:** STRONG

---

## Q18. Backups & DR

**Question:** Backups: frequency, encrypted, restore-tested? Defined RTO/RPO? Date of last DR test?

**Answer:** Backups: daily automated snapshots of databases (Cloud SQL) with cross-region replication to europe-west1. Weekly backups to us-west1 (DR region). Backups encrypted at rest with AES-256. Restore testing: quarterly (database restore + smoke tests in isolated GCP project). RTO: 4 hours. RPO: 1 hour. Last DR test: 2026-04-15 — all systems restored within 3h47m, two minor issues (DNS propagation delay, stale IAM role reference) documented and addressed.

**Evidence:** Onboarding Interview, Q18
**Strength:** STRONG

---

## Q19. People security

**Question:** Background checks on hire — and who performs them? Security awareness training frequency? NDAs?

**Answer:** Background checks via Checkr (USA) and Sterling (UK/EU) — criminal history, employment verification, credit check (finance-adjacent roles), and SSN/right-to-work verification. All hires and contractors. Security awareness training: mandatory on onboarding, then annual (KnowBe4 platform). Phishing simulations: monthly (KnowBe4 automated campaigns). NDAs: signed by all employees and contractors as part of the standard offer/onboarding. Annual re-acknowledgement of AUP required.

**Evidence:** Onboarding Interview, Q19
**Strength:** STRONG

---

## Q20. Written policies

**Question:** Which written policies exist? (Request uploads now)

**Answer:** Written policies maintained in Google Drive (internal wiki):
1. Information Security Policy (v4.1, last reviewed 2026-03)
2. Acceptable Use Policy (v2.3, last reviewed 2026-01)
3. Access Control Policy (v3.0, last reviewed 2025-12)
4. Encryption Policy (v2.1, last reviewed 2026-02)
5. Incident Response Plan (v2.1, last reviewed 2026-04)
6. Business Continuity & Disaster Recovery Plan (v1.3, last reviewed 2026-03)
7. Vendor Security Assessment Procedure (v1.1, last reviewed 2025-11)
8. Data Protection & Privacy Policy (v2.0, last reviewed 2026-02)
9. Change Management Policy (v1.0, last reviewed 2025-10)
10. Code of Conduct (v1.5, last reviewed 2025-12)

Policy review cadence: annual, or within 30 days of a material change. All policies dated and versioned. Gap noted: no formal Data Classification Policy yet — scheduled for Q3 2026.

**Upload request sent:** Owner asked to upload policies (with redaction guidance: remove detailed vulnerability findings; never upload credentials, keys, or secrets).

**Evidence:** Onboarding Interview, Q20
**Strength:** STRONG

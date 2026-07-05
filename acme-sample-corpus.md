# Acme Sample Trust Corpus

> **DEMO DATA — entirely fictional.** For demo mode only. The Librarian must
> never cite this corpus when answering a real questionnaire, and all outputs
> generated from it are watermarked "DEMO — Acme sample data."

## Company profile

Acme Analytics, Inc. — B2B SaaS analytics dashboards for mid-market finance
teams. 42 employees, fully remote (no offices). Product hosted on AWS
(us-east-1 primary, us-west-2 for disaster recovery). Production and staging
run in separate AWS accounts.

## Certifications & assessments

- **SOC 2 Type II:** report issued 2026-03, covering 2025-01 through 2025-12.
  No exceptions noted. Encryption controls tested under CC6.7 without
  exception (SOC 2 Type II Report, p.38).
- **ISO 27001:** not held.
- **Penetration testing:** annual. Most recent test 2025-11 by Redwood
  Security. No critical findings; two high findings remediated within 30 days
  (Pen Test Executive Summary, 2025-11).

## Encryption Policy v2.3

- **§4 Data at rest:** all customer data encrypted with AES-256; keys managed
  in AWS KMS.
- **§4.2 Key rotation:** KMS keys rotated annually via automatic rotation.
- **§5 Data in transit:** TLS 1.2 minimum on all public endpoints; TLS 1.3
  preferred where supported.

## Access Control Policy v1.8

- **§2:** SSO via Okta with MFA enforced for all employees and contractors.
- **§3:** Role-based access on least-privilege basis. Production access
  limited to on-call engineers via short-lived credentials.
- **§5:** Access reviews conducted quarterly. Offboarding access revocation
  within 24 hours of separation.

## Logging & Monitoring Standard v1.2

- AWS CloudTrail and application logs shipped to Datadog.
- Log retention: 12 months.
- Alerting configured for authentication anomalies and privilege changes.

## Incident Response Plan v2.0

- Documented IR plan with severity matrix and on-call rotation.
- **§6 Notification:** affected customers notified within 72 hours of a
  confirmed breach involving their data.

## Business Continuity & DR Summary v1.1

- Daily encrypted backups with cross-region replication to us-west-2.
- Targets: RTO 8 hours, RPO 24 hours.

## HR Security (Employee Handbook §7)

- Background checks performed on all new hires.
- Annual security awareness training; quarterly phishing simulations.
- NDAs signed by all staff and contractors.

## Endpoint Standard v1.0

- Microsoft Intune MDM on all devices.
- Full-disk encryption (BitLocker / FileVault) enforced.
- Microsoft Defender for Endpoint (EDR) deployed fleet-wide.

## Subprocessor List (2026-01)

AWS (hosting) · Datadog (logging/monitoring) · Stripe (billing) ·
Google Workspace (email/docs) · Zendesk (support)

## Privacy

- DPA available on request; GDPR Standard Contractual Clauses incorporated.
- CCPA requests honored via privacy@acme.example.
- Privacy policy: acme.example/privacy.
- No dedicated Data Protection Officer appointed.

---

*Builder's note (not corpus content): this corpus intentionally omits four
items — customer-managed key (CMK) support, log retention beyond 12 months,
the background-check vendor name, and the date/results of the last DR test.
A correct demo run flags these 🔴/🟡 instead of guessing.*
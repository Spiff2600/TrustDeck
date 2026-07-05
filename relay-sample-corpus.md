# Relay Field Systems Trust Corpus

> **DEMO DATA — entirely fictional.** For demo mode only. This is a second worked example alongside Acme Analytics.
> All outputs generated from this corpus are watermarked "DEMO — Relay sample data."
> Source: Owner-confirmed Onboarding Interview Tier 1 (Q1-Q20), cited as (Onboarding Interview, Q#).

## Company profile

Relay Field Systems, Inc. (Delaware C-corp) — B2B SaaS work-order dispatch & technician scheduling for mid-market trade contractors (HVAC, electrical, plumbing). 85 employees. Hybrid — Denver HQ, ~60% remote. (Onboarding Interview, Q1)

## Hosting & environments

- **Cloud provider:** Microsoft Azure — East US 2 primary, Central US for DR.
- **Environment separation:** Production, staging, and dev in separate Azure subscriptions with separate VNets. (Onboarding Interview, Q2)

## Certifications & assessments

- **SOC 2 Type II:** report issued 2026-02, covering 2025-01 through 2025-12. One exception noted (change-management evidence gap), remediated Q3 2025. (Onboarding Interview, Q3)
- **ISO 27001:** not held — certification targeted for 2027. (Onboarding Interview, Q3)
- **HIPAA/PCI DSS:** not applicable. (Onboarding Interview, Q3)
- **Penetration testing:** annual. Most recent test 2026-01 by Kestrel Security. No critical findings; one high (SSRF in webhook handler) remediated in 21 days, retest confirmed. (Onboarding Interview, Q4)

## Access control & identity

- **SSO:** Microsoft Entra ID, MFA enforced for all employees and contractors. FIDO2 keys required for admins. (Onboarding Interview, Q5)
- **Access model:** RBAC, least privilege. (Onboarding Interview, Q6)
- **Access reviews:** quarterly; privileged roles reviewed monthly. (Onboarding Interview, Q6)
- **Offboarding:** access revocation within 8 business hours via Entra lifecycle workflows. (Onboarding Interview, Q6)

## Encryption

- **At rest:** AES-256 (Azure Storage encryption / SQL TDE). Keys in Azure Key Vault; annual automatic rotation. (Onboarding Interview, Q7)
- **In transit:** TLS 1.2 minimum; TLS 1.3 preferred. HSTS on all public endpoints. No exceptions. (Onboarding Interview, Q8)
- **Customer-managed keys:** Supported on Enterprise tier via customer-held Azure Key Vault. (Onboarding Interview, Q9)

## Data handling

- **Data stored:** Work orders, technician schedules, customer site addresses/contacts, usage analytics. No PHI, no cardholder data (payments handled by Stripe), no children's data. (Onboarding Interview, Q10)
- **Retention:** Life of contract + 60 days, then purged. (Onboarding Interview, Q11)
- **Deletion:** On request within 30 days with written confirmation. (Onboarding Interview, Q11)

## Subprocessors

Microsoft Azure (hosting), Stripe (billing), Twilio (SMS dispatch), HubSpot (CRM/support), Google Workspace (email/docs). (Onboarding Interview, Q12)
DPA with GDPR SCCs available on request. CCPA via privacy@relayfield.example. (Onboarding Interview, Q12)

## Application security

- **Code review:** Required on every PR; 2 approvers for production services. (Onboarding Interview, Q13)
- **CI/CD scanning:** GitHub Advanced Security — CodeQL SAST, secret scanning, Dependabot SCA. All blocking. (Onboarding Interview, Q13)
- **Remediation SLAs:** Critical 7 days / High 30 days / Medium 90 days. (Onboarding Interview, Q13)

## Network security

- Azure NSGs default-deny. Azure WAF + DDoS Protection on public endpoints. (Onboarding Interview, Q14)
- Production access via Azure Bastion with Entra PIM just-in-time elevation. No standing VPN. (Onboarding Interview, Q14)

## Endpoint security

- Microsoft Intune MDM on all devices. (Onboarding Interview, Q15)
- BitLocker/FileVault full-disk encryption. (Onboarding Interview, Q15)
- Microsoft Defender for Endpoint EDR fleet-wide. (Onboarding Interview, Q15)

## Logging & monitoring

- Application and platform logs to Azure Monitor. Microsoft Sentinel SIEM with analytics rules for auth anomalies and privilege escalation. (Onboarding Interview, Q16)
- Retention: 13 months. Extended retention per customer request is NOT documented — gap. (Onboarding Interview, Q16)

## Incident response

- Documented IR plan v3.1 with severity matrix and 24/7 on-call. (Onboarding Interview, Q17)
- Customer notification within 72 hours of a confirmed breach involving their data. (Onboarding Interview, Q17)

## Business continuity & disaster recovery

- Continuous geo-redundant replication plus nightly encrypted backups. (Onboarding Interview, Q18)
- Targets: RTO 12 hours / RPO 1 hour. (Onboarding Interview, Q18)
- Last DR failover test 2026-03-19: passed, production restored in Central US in 9h40m. Restore tests run quarterly. (Onboarding Interview, Q18)

## People security

- Background checks on all new hires via Sterling — criminal, identity, employment (US). (Onboarding Interview, Q19)
- Annual security awareness training + quarterly phishing simulations. (Onboarding Interview, Q19)
- NDAs for all staff and contractors. (Onboarding Interview, Q19)

## Policies

Written policies in place: InfoSec Policy v4, Acceptable Use v2, Access Control v3, Encryption Standard v2, IR Plan v3.1, BC/DR Runbook v2, Data Retention v1. (Onboarding Interview, Q20)

**Gaps:**
- Vendor Management Policy exists only as a DRAFT — gap. (Onboarding Interview, Q20)
- No clear desk policy — gap. (Onboarding Interview, Q20)
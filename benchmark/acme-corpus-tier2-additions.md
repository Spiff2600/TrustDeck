# Acme Trust Corpus v2.0 — Tier 1+2 Onboarding Additions

> **DEMO DATA — entirely fictional.** For demo mode only. This document
> represents what the Librarian's 44-question Tier 1+2 onboarding interview
> adds to the Acme Sample Trust Corpus (v1.1). Facts below are
> owner-confirmed present-state answers, citable as (Onboarding Interview,
> Q#), plus the documents the owner uploaded when prompted. This is the
> corpus used for the **onboarded** CAIQ-Lite benchmark run.

## Governance, risk & internal audit

- Internal control self-assessments are performed semi-annually between
  external audits; findings are tracked to closure in Jira.
- A risk assessment is performed annually; the risk register is reviewed
  quarterly with named owners per risk.
- Policy exceptions are requested in writing, approved by the CTO, and
  time-limited to 90 days maximum.

## Change control & configuration

- All production changes flow through pull requests with required review and
  a GitHub Actions CI/CD pipeline.
- Emergency changes are approved by the on-call engineering lead and
  retro-reviewed within 24 hours.
- Infrastructure is defined as code (Terraform); configuration baselines are
  enforced through shared Terraform modules.
- Drift is detected via nightly `terraform plan` checks in CI.
- No change advisory board — Acme uses a lightweight two-approver model.
  *(Honest, documented "no.")*

## Secure development & application security

- Code review is required on every PR; merges are blocked without approval.
- CodeQL SAST runs in CI and is blocking; Dependabot provides dependency /
  software-composition analysis; GitHub push protection scans for secrets.
- A vulnerability disclosure policy is published; reports go to
  security@acme.example.
- Third-party libraries are managed via lockfiles with Dependabot updates.
- SBOMs are not produced or consumed today. *(Honest, documented "no.")*
- APIs are authenticated with OAuth 2.0 client credentials; per-tenant rate
  limiting is applied to all public APIs.
- Production data is never used in non-production environments; lower
  environments use synthetic data.

## Threat & vulnerability management

- Vulnerabilities are detected via weekly AWS Inspector scans, continuous
  Dependabot alerts, and the annual penetration test.
- SLA aging is tracked in Jira and reviewed weekly.

## Data lifecycle & classification

- Data categories processed: dashboard configurations, aggregated financial
  metrics, and user account data. No regulated data (no PHI, cardholder
  data, or children's data).
- Three-tier classification scheme: Public / Internal / Customer-Confidential;
  customer data is Customer-Confidential.
- DLP: Google Workspace DLP rules plus egress restrictions on production
  accounts.
- Customers can self-serve export their data as CSV or JSON at any time, and
  for 90 days after termination (per Data Lifecycle Summary v1.0).

## Infrastructure & network depth

- Security groups are default-deny; only explicitly allowed flows are
  permitted.
- Public endpoints are protected by AWS WAF and Shield Standard; GuardDuty
  threat detection is enabled on all accounts.
- AWS Inspector scans run weekly; managed OS patching is applied monthly;
  dependency patches are continuous via Dependabot.

## Logging & monitoring depth

- Log retention can be extended to 36 months on Enterprise agreements.
- CloudTrail log file integrity validation is enabled.

## Incident response depth

- IR team structure: incident commander (on-call engineering lead),
  communications lead, and the CTO as executive owner.
- Detection and response via Datadog alerting and GuardDuty findings routed
  to the on-call rotation.
- No bug bounty program; external reports are accepted at
  security@acme.example. *(Honest, documented "no.")*
- Post-mortems are conducted within 5 business days for Sev-1/Sev-2
  incidents.

## Supply chain & vendor management

- New vendors and subprocessors undergo a security review (questionnaire plus
  SOC 2 report review) before onboarding; critical vendors are reassessed
  annually.
- Vendor contracts require breach notification to Acme.
- Third-party component integrity is verified via lockfile pinning and
  Dependabot.

## Resilience, availability & datacenter

- Most recent DR failover test: 2026-05-14, passed; production restored in
  us-west-2 in 6h12m (within the 8-hour RTO).
- Availability commitment: 99.9% uptime SLA; public status page at
  status.acme.example; capacity monitored via Datadog dashboards and alerts.
- No physical data centers are operated; AWS attestations (SOC 2, ISO 27001)
  are reviewed annually via AWS Artifact.

## Encryption depth

- Customer-managed keys (CMK/BYOK) are not supported; on the product roadmap
  for H2 2026. *(Honest, documented "no.")*

## People & endpoint depth

- Background-check scope: Checkr — criminal (federal and county),
  identity/SSN, and employment verification for all US hires.
- Contractors are subject to the same security requirements as employees.

---

## Still open after onboarding (by design — the honest remainder)

The interview surfaces what exists; it never invents what doesn't. Six items
remain open because the owner deferred or the practice is still being
formalized:

| Status | Question | Why it's still open |
|---|---|---|
| 🟡 | CAIQ-022 / CAIQ-119 — remediation SLAs by severity | Targets stated in the interview; the written policy update is pending |
| 🟡 | CAIQ-084 — service-account credential rotation | Rotation happens ad hoc; a formal cadence is being adopted |
| 🟡 | CAIQ-115 — subprocessor-change notification | Practice exists; the DPA amendment codifying notice periods is pending |
| 🔴 | CAIQ-056 — data flow diagram | In progress; owner deferred until complete |
| 🔴 | CAIQ-075 — clear desk / clear screen policy | Not yet written; deferred to the next policy refresh |

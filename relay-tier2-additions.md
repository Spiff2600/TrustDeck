# Relay Trust Corpus v2.0 — Tier 2 Onboarding Additions

> **DEMO DATA — entirely fictional.** For demo mode only. This document
> represents what the Librarian's Tier 2 onboarding interview (Q21–Q44,
> 2026-07-06, ~25 minutes) adds to the Relay Field Systems Trust Corpus.
> Facts below are owner-confirmed present-state answers, citable as
> (Relay Tier 2 Additions); Tier 1 answers remain citable as
> (Onboarding Interview, Q#). This is the corpus used for the **onboarded**
> CAIQ-Lite benchmark run for Relay.

## Governance, risk & internal audit

- The security program is owned by Relay's Director of Security & IT, who
  reports to the CTO; the program and all policies are reviewed annually
  with CTO sign-off.
- Policy exceptions are requested in writing, approved by the CTO, and
  time-limited to 60 days maximum.
- A risk assessment is performed annually; the risk register is reviewed
  quarterly with named owners per risk.
- Internal control self-assessments are performed semi-annually between
  SOC 2 audit periods; findings are tracked to closure in Azure DevOps
  Boards with named owners.

## Change control & configuration

- All production changes flow through pull requests with required review
  (two approvers for production services — Tier 1, Q13) and a GitHub
  Actions CI/CD pipeline with environment protection rules.
- Emergency changes are approved by the on-call engineering lead and
  retro-reviewed within one business day.
- Infrastructure is defined as code (Bicep); configuration baselines are
  enforced through Azure Policy initiatives assigned to all subscriptions.
- Drift is detected via Azure Policy compliance evaluation plus Bicep
  what-if checks in CI.
- No change advisory board — Relay uses a lightweight two-approver model.
  *(Honest, documented "no.")*

## Secure development & application security

- CI security checks (CodeQL SAST, secret scanning, Dependabot SCA — Tier 1,
  Q13) are blocking; branch protection prevents merging on failure.
- A vulnerability disclosure policy is published; reports go to
  security@relayfield.example.
- Third-party libraries are managed via lockfiles with Dependabot updates.
- SBOMs are not produced or consumed today. *(Honest, documented "no.")*
- APIs are authenticated with OAuth 2.0 client credentials issued via
  Microsoft Entra ID; authorization is enforced per tenant server-side;
  per-tenant rate limiting is applied to all public APIs via Azure API
  Management; input validation runs in a shared middleware layer with
  schema validation.
- Production data is never used in non-production environments; lower
  environments use synthetic data.

## Threat & vulnerability management

- Microsoft Defender for Cloud runs continuous posture assessment across
  all subscriptions; VMs and container images are scanned weekly, and
  images are also scanned on push to Azure Container Registry.
- SLA aging is tracked in Azure DevOps Boards and reviewed weekly.
- Remediation SLA targets were stated in Tier 1 (Q13: critical 7 days /
  high 30 / medium 90); the written vulnerability-management policy
  codifying them is still pending (see the open items below).

## Data lifecycle & classification

- Three-tier classification scheme: Public / Internal / Customer-Confidential;
  customer data is Customer-Confidential.
- A data inventory is maintained in Microsoft Purview and reviewed
  semi-annually; the data flow diagram is in progress (see the open items
  below).
- DLP: Microsoft Purview DLP policies plus egress restrictions on
  production subscriptions.
- Customers can self-serve export their data as CSV or JSON from the admin
  console at any time during the contract. The post-termination export
  window is not yet documented (data is retained for 60 days after contract
  end per Tier 1, Q11 — see the open items below).

## Infrastructure & network depth

- NSGs are default-deny (Tier 1, Q14); VNets are segmented per environment;
  storage accounts have public network access disabled, and Azure Policy
  denies public blob containers.
- Public endpoints are protected by Azure WAF and DDoS Protection (Tier 1,
  Q14); Defender for Cloud threat detection is enabled on all subscriptions.
- OS patching is applied monthly via Azure Update Manager; dependency
  patches are continuous via Dependabot.

## Logging & monitoring depth

- Logs are held in an append-only Log Analytics workspace with
  RBAC-restricted access; delete operations require an elevated PIM role
  and alert via Sentinel.
- Extended retention beyond 13 months per customer request: still not
  documented — carried from Tier 1 (Q16; see the open items below).

## Incident response depth

- IR team structure: incident commander (on-call engineering lead),
  communications lead (Head of Customer Success), and the CTO as executive
  owner.
- Detection and response via Microsoft Sentinel analytics rules routed to
  the 24/7 on-call rotation.
- No bug bounty program; external reports are accepted at
  security@relayfield.example. *(Honest, documented "no.")*
- Post-mortems are conducted within 5 business days for Sev-1/Sev-2
  incidents.

## Supply chain & vendor management

- New vendors and subprocessors undergo a security review (questionnaire
  plus SOC 2 report review) before onboarding; critical vendors are
  reassessed annually. The process operates per the Vendor Management
  Policy, still in DRAFT (Tier 1, Q20) — ratification targeted Q3 2026.
- Vendor contracts require breach notification to Relay.
- Subprocessor changes: customers are notified by email to account admins
  30 days in advance; the DPA amendment codifying the notice period is
  pending (see the open items below).
- Third-party component integrity is verified via lockfile pinning and
  Dependabot review.

## Resilience, availability & datacenter

- Availability commitment: 99.9% uptime SLA; public status page at
  status.relayfield.example; capacity monitored via Azure Monitor
  dashboards with autoscale alerts.
- No physical data centers are operated; Microsoft Azure attestations
  (SOC 2, ISO 27001) are reviewed annually via the Microsoft Service Trust
  Portal.

## Encryption depth

- Encryption controls (at rest, in transit, and key management) are tested
  within the SOC 2 Type II audit scope.

## People & endpoint depth

- Acceptable Use Policy v2 covers employee devices; local administrator
  rights are disabled for standard users via Intune; screen lock is
  enforced at 10 minutes; OS auto-updates are enforced through Intune
  update rings.
- Contractors are subject to the same security requirements as employees.
- Service accounts are inventoried in Entra ID with named owners;
  credential rotation is currently ad hoc — a formal cadence is being
  adopted (see the open items below).

## Privacy & data protection depth (Tier 1 gap review)

- DPO: Relay is not required to appoint a Data Protection Officer under
  GDPR Art. 37 (no large-scale systematic monitoring, no special-category
  data); the privacy program is owned by Relay's General Counsel. Resolves
  the Tier 1 gap (Q12). *(Honest, documented "no.")*
- Of the four gaps logged in Tier 1: the DPO question is resolved above;
  the vendor-review practice is now documented (policy itself still DRAFT);
  extended log retention and the clear desk policy remain open below.

---

## Still open after Tier 2 (by design — the honest remainder)

The interview surfaces what exists; it never invents what doesn't. Seven
items — covering eight of the 124 questions — remain open because the owner
deferred or the practice is still being formalized:

| Status | Question | Why it's still open |
|---|---|---|
| 🟡 | CAIQ-022 / CAIQ-119 — remediation SLAs by severity | Targets stated in the Tier 1 interview (Q13); the written vulnerability-management policy is pending |
| 🟡 | CAIQ-084 — service-account credential rotation | Rotation happens ad hoc; a formal cadence is being adopted |
| 🟡 | CAIQ-103 — extended log retention on customer request | Still not documented — carried from Tier 1 (Q16) |
| 🟡 | CAIQ-115 — subprocessor-change notification | Practice exists (30-day email notice); the DPA amendment codifying notice periods is pending |
| 🔴 | CAIQ-056 — data flow diagram | In progress; owner deferred until complete |
| 🔴 | CAIQ-075 — clear desk / clear screen policy | Still none — carried from Tier 1 (Q20); deferred to the next policy refresh |
| 🔴 | CAIQ-089 — post-termination export window | Data is retained for 60 days after contract end (Q11), but the customer-facing export commitment during that window is not documented; owner deferred |

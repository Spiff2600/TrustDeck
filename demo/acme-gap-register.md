# TrustDesk Gap Register

> **DEMO — Acme sample data.** For demo mode only. This register logs questions
> where the Trust Corpus has PARTIAL or NONE evidence, flagging them for human
> review and future corpus enrichment.

## Format
Each entry: `[Date] | Q<id> | <Domain> | <Strength> | <Detail>`

---

### 2026-07-04 — Demo Run (Acme Sample Corpus)

1. **Q3** | Encryption | NONE — No evidence about customer-managed key (CMK) support. Corpus has AES-256 at rest via KMS, annual auto rotation, and TLS 1.2+ in transit — but no mention of whether customers can bring their own keys. *Builder's note: intentional omission.*

2. **Q7** | Logging | NONE — No evidence about extending log retention beyond the standard 12 months. Corpus states 12-month retention with no extension policy documented. *Builder's note: intentional omission.*

3. **Q9** | BC/DR | NONE — No evidence about the date or results of the most recent disaster recovery test. Corpus has RTO 8h / RPO 24h and daily encrypted cross-region backups, but no test execution record. *Builder's note: intentional omission.*

4. **Q10** | HR Security | NONE — No evidence about the background-check screening vendor name or the specific scope of checks performed. Corpus confirms checks are done on all new hires, but vendor identity not documented. *Builder's note: intentional omission.*

5. **Q14** | Legal | NONE — No evidence about cyber liability insurance carrier or per-incident coverage amount. Legal/financial terms are a human-only domain — not stored in Trust Corpus.

6. **Q15** | Legal | NONE — No evidence about indemnification terms or standard contractual obligations for breach liability. Legal/contractual terms are a human-only domain — not stored in Trust Corpus.

---

**Summary:** 6 gaps logged (4 intentional corpus omissions + 2 human-only Legal domain entries).

---

### 2026-07-05 — CAIQ Lite Benchmark Run (124 questions)

**Run stats:** 56 questions with STRONG evidence, 68 questions with no evidence (NONE).

**Gap categories by CAIQ domain (all NONE):**

| CAIQ Domain | Questions | Reason |
|---|---|---|
| Change Control (CCC) | CAIQ-033 to CAIQ-039 (7) | No evidence in corpus — Acme has no change control policy |
| Application Security (AIS) | CAIQ-011 to CAIQ-019, CAIQ-021 to CAIQ-022 (11) | No SAST/SCA/SBOM/secrets scanning/vuln disclosure — Acme only has pen testing |
| Data Privacy (DSP) | CAIQ-050-051, 054-057 (6) | No data classification, flow diagrams, DLP, export process, or regulated data specifics |
| Governance (GRC) | CAIQ-066-067 (2) | No policy exception process documented |
| HR Security (HRS) | CAIQ-070, 074-075 (3) | No background check scope, contractor details, or clear desk policy |
| Identity (IAM) | CAIQ-083-085 (3) | No service account inventory, rotation, or PAM |
| Portability (IPY) | CAIQ-086-089 (4) | No data export process or portability details |
| Infrastructure (IVS) | CAIQ-092-093, 096-098 (5) | No default-deny rules, WAF/DDoS, vuln scan cadence, or patching details |
| Logging (LOG) | CAIQ-103, 105 (2) | No extended retention policy or log integrity monitoring |
| Incident Response (SEF) | CAIQ-107, 109-111 (4) | No IR team structure, detection details, bug bounty, or post-mortems |
| Supply Chain (STA) | CAIQ-112-115, 117 (5) | No vendor assessment process or breach notification terms |
| Threat Mgmt (TVM) | CAIQ-118-120 (3) | No vulnerability detection details or remediation SLAs |
| Data Center (DCS) | CAIQ-047-049 (3) | No physical DC info or provider attestation review process |
| BC/DR (BCR) | CAIQ-028, 030-032 (4) | No DR test date, SLA, status page, or capacity monitoring |
| Encryption (CEK) | CAIQ-044 (1) | No CMK support |
| Compliance (A&A) | CAIQ-006-010 (5) | No internal audit, risk assessment, or risk register details |

**Total gaps:** 68 NONE results logged across 16 domains.
See [caiq-lite-benchmark-completed.csv](../benchmark/caiq-lite-benchmark-completed.csv)
for the full filled-in run, and
[caiq-lite-benchmark-onboarded-memo.md](../benchmark/caiq-lite-benchmark-onboarded-memo.md)
for the rerun after the Tier 1+2 onboarding interview (118/124 🟢).

---

### 2026-07-05 — Gap closure (Owner Gap Answers)

All six gaps from the 2026-07-04 demo run were answered by the owner in one
~10-minute session ([acme-gap-answers.md](acme-gap-answers.md)) and added to
the Answer Library. Rerun of the same questionnaire: 13 🟢 / 2 🟡 / 0 🔴 —
see [acme-coverage-memo-run2.md](acme-coverage-memo-run2.md). **Demo-run gaps
open: 0.**

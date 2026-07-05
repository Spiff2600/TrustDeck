# TrustDesk Onboarding Interview v2

**Supersedes v1.** Upload this file to the team as a knowledge document; the
Librarian runs it. v1's 20 questions are unchanged (Tier 1); Tier 2 adds 24
questions so the resulting Trust Corpus covers all 17 CCM v4 domains — the
same domains behind the CAIQ v4 (261 questions), CAIQ-Lite (124), and most
enterprise custom questionnaires. Tier 3 is an optional AI add-on aligned
with CSA's AI Controls Matrix / AI-CAIQ.

**How to run (Librarian):**
- Tier 1 first (~20 min) — enough to answer short questionnaires today.
  Offer Tier 2 (~25 min) immediately or as a scheduled follow-up; required
  before attempting a full CAIQ-class questionnaire. Tier 3 (~5 min) if the
  owner's buyers ask about AI, which is increasingly standard.
- Conversational, one domain at a time. Never dump all questions at once.
- "We don't have that" / "not documented" is a valid answer — log it to the
  Gap Register and move on. Never pressure the owner to guess. An honest
  "no" recorded here becomes a 🟢 answer later; a guess becomes a liability.
- Owner-confirmed present-state facts count as evidence, cited as
  (Onboarding Interview, Q#). Encourage document uploads to strengthen
  anything important.
- Close with the document request (Q20) and the data-handling guidance:
  policies and executive summaries only; redact detailed vulnerability
  findings; never upload credentials, keys, or secrets.

---

## Tier 1 — Core (Q1–Q20, unchanged from v1)

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
→ Request uploads now, with the data-handling guidance above.

---

## Tier 2 — Full-coverage (Q21–Q44)

### Governance, risk & internal audit
**Q21.** Who owns information security (named role)? Is there a written
security program/policy set, and on what schedule is it reviewed? How are
exceptions to policy requested, approved, and time-limited?
**Q22.** Do you perform a risk assessment? How often, and is there a risk
register with a defined review cadence?
**Q23.** Between external audits, do you run internal audits or control
self-assessments? How are findings tracked to closure?

### Change control & configuration
**Q24.** How do production changes happen — PR/review requirements, CI/CD
pipeline, who approves, and what's the emergency-change path?
**Q25.** Is infrastructure defined as code? How are configuration baselines
and hardening standards enforced, and how is drift detected?

### Secure development & application security
**Q26.** Which security checks run in CI (SAST, dependency scanning, secrets
scanning), and are failures blocking?
**Q27.** How are APIs authenticated and authorized? Any rate limiting or
input-validation standards?
**Q28.** Are dev/staging/prod data separated? Is production data ever used
in lower environments — and if so, how is it masked?

### Threat & vulnerability management
**Q29.** What vulnerability scans run against infrastructure and images,
and how often?
**Q30.** What are your remediation SLAs by severity, and how is SLA aging
tracked and reviewed?
**Q31.** How are OS and dependency patches applied — cadence and degree of
automation?

### Data lifecycle & classification
**Q32.** Do you have a data classification scheme? What are the classes,
and where does customer data sit?
**Q33.** Is there a current data inventory or flow diagram showing where
customer data lives and moves, including subprocessors? Review cadence?
**Q34.** Are any DLP or egress controls applied to customer data?

### Infrastructure & network depth
**Q35.** How are environments and tiers isolated — VPC/network segmentation,
default-deny security groups, public-storage controls?
**Q36.** What protects public endpoints — WAF, DDoS mitigation, threat
detection (e.g., GuardDuty-class tooling)?

### Supply chain & vendor management
**Q37.** How are new vendors/subprocessors security-reviewed before
onboarding, and how often are critical vendors reassessed?
**Q38.** Do vendor contracts require breach notification to you? How are
your customers notified of subprocessor changes, and with how much notice?
**Q39.** Do you produce or consume SBOMs, or otherwise verify the integrity
of third-party components?

### Resilience, availability & datacenter
**Q40.** What availability commitment do you make (SLA/uptime target)? Is
there a public status page? How is capacity monitored?
**Q41.** Do you operate any physical facilities or datacenters, or are
physical controls inherited from your cloud provider? How do you review the
provider's attestations, and how often?

### Portability
**Q42.** Can customers self-serve export their data? In what formats, and
what happens to their data at termination?

### People & endpoint depth
**Q43.** Is there an acceptable use policy? Do users have local admin on
endpoints? Are screen lock and OS auto-updates enforced?
**Q44.** Service accounts: are they inventoried with named owners, and how
often are their credentials rotated?

---

## Tier 3 — AI add-on (Q45–Q46, optional but increasingly asked)

**Q45.** Do you use AI/LLM services in the product or internally in ways
that touch customer data? Which providers, under what agreements, and is
customer data used for model training?
**Q46.** Is there a written AI usage policy — approved tools, data-handling
rules, human review requirements, and vendor DPA coverage for AI services?

---

## Coverage map — interview → frameworks

Mapping is at the domain/category level (per-control crosswalks live in the
official CCM v4.1 bundle). Every one of the 17 CCM v4 domains is covered by
at least one question.

| Interview area | Qs | CCM v4 domain | SOC 2 TSC | ISO 27001:2022 | NIST CSF 2.0 |
|---|---|---|---|---|---|
| Company, hosting, env separation | 1–2 | GRC, IVS, DCS | CC (Security) | A.5, A.8 | GV, ID |
| Certifications, pen test, internal audit | 3–4, 23 | A&A | CC4 | A.5 (assurance) | ID, GV |
| Identity & access | 5–6, 44 | IAM | CC6 | A.5, A.8 | PR |
| Encryption & keys | 7–9 | CEK | CC6 | A.8 | PR |
| Data lifecycle, privacy, classification | 10–12, 32–34 | DSP | C, P | A.5, A.8 | ID, PR |
| SDLC & AppSec | 13, 26–28 | AIS | CC8 | A.8 | PR |
| Network & infrastructure | 14, 35–36 | IVS | CC6 | A.8 | PR, DE |
| Endpoints | 15, 43 | UEM | CC6 | A.8 | PR |
| Logging & monitoring | 16 | LOG | CC7 | A.8 | DE |
| Incident response | 17 | SEF | CC7 | A.5 | RS, RC |
| Backups, DR, availability | 18, 40 | BCR | A (Availability) | A.5, A.8 | RC |
| People security | 19, 43 | HRS | CC1 | A.6 | GV, PR |
| Policy inventory, governance, risk | 20–22 | GRC | CC1–CC3 | A.5 | GV, ID |
| Change & configuration | 24–25 | CCC | CC8 | A.8 | PR |
| Vulnerability management | 29–31 | TVM | CC7 | A.8 | ID, PR |
| Supply chain & vendors | 37–39 | STA | CC9 | A.5 | GV, ID |
| Datacenter (inherited) | 41 | DCS | CC6 | A.7 | PR |
| Portability & export | 42 | IPY | C | A.5, A.8 | PR |
| AI usage & governance | 45–46 | AICM (AI-CAIQ) | CC (Security) | ISO 42001-adjacent | GV |

## Validation notes

- **Coverage:** all 17 CCM v4 domains (A&A, AIS, BCR, CCC, CEK, DCS, DSP,
  GRC, HRS, IAM, IPY, IVS, LOG, SEF, STA, TVM, UEM) map to ≥1 question, so a
  completed Tier 1+2 interview yields corpus material for every CAIQ v4
  section. CAIQ v4 = 261 questions over these 17 domains; CAIQ-Lite = 124.
- **Cross-walk basis:** CSA publishes official CCM mappings to ISO 27001,
  SOC 2 TSC, NIST 800-53, and PCI DSS; the table above follows those
  relationships at domain level. NIST CSF 2.0 functions: Govern, Identify,
  Protect, Detect, Respond, Recover.
- **AI questions:** aligned with CSA's AI Controls Matrix (18 domains,
  243 control objectives in v1.0; 247 in v1.1) and its AI-CAIQ companion
  questionnaire.
- **Design rule carried from v1:** every question elicits present-state,
  testable, source-attributable facts. Interview answers are evidence;
  aspirations are not.
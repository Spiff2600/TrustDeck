# Data Handling & Security

TrustDeck exists because security questionnaires are about trust — so here is
exactly how it treats yours.

## Where your data lives

- **Your Trust Corpus stays in your environment.** TrustDeck reads the
  documents you give it inside your own workspace; nothing in this repo, and
  nothing in the product, ships your corpus anywhere else.
- **The Answer Library is yours.** It's a file in your workspace, built from
  your approved answers. Export it, inspect it, delete it at will.

## What to upload — and what never to

**Upload:** policies, standards, executive summaries, attestation summaries
(e.g., "SOC 2 Type II, issued 2026-03, no exceptions"), subprocessor lists,
your completed onboarding interview.

**Never upload:**

- Credentials, API keys, tokens, or secrets of any kind
- Detailed/unredacted vulnerability findings or pen-test technical reports
  (upload the executive summary instead)
- Customer data or anything covered by your own confidentiality obligations

TrustDeck answers questionnaires from *descriptions of your controls*, not
from the sensitive material itself. If a document would hurt you leaked, it
doesn't belong in the corpus — and it isn't needed there.

## Demo data isolation

Everything under [demo/](demo/) and [benchmark/](benchmark/) is **entirely
fictional** (Acme Analytics, Inc. does not exist). Demo outputs are
watermarked "DEMO — Acme sample data," and the agents are instructed to never
cite the demo corpus on a real run. See rule 4 in
[agents/README.md](agents/README.md).

## Reporting an issue

Found a problem — a fabricated answer, a demo-data leak, a broken rule?
Open a GitHub issue on this repo. Fabrication reports are treated as
release blockers.

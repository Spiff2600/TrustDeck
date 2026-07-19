# 📚 Librarian — Evidence Retrieval & Onboarding

For every question, finds what your Trust Corpus actually says — and says
plainly when it says nothing. Also runs the onboarding interview that builds
the corpus in the first place.

**What it enforces:** every evidence packet is quoted with its source
(document, version, section), never summarized from memory; evidence is
graded STRONG / PARTIAL / NONE and the grade caps the answer's confidence
tag; prior owner-approved answers are reused from the Answer Library (the
flywheel); the demo corpus is never cited on a `live` run; a documented "no"
counts as evidence — aspirations and roadmaps don't.

### `corpus_mode` enforcement

The Librarian receives the `corpus_mode` flag (`live` | `demo`) from the Lead
at run start and enforces it on every evidence retrieval:

- **`live` mode:** The Librarian MUST reject any evidence whose source matches
  a demo/fictional/sample/simulated corpus. Sources carrying watermarks
  "DEMO — Acme sample data" or "DEMO — Relay sample data" are forbidden.
  If the only evidence found for a question is demo-sourced, return NONE
  (no evidence found) — do not fall back to demo evidence.
- **`demo` mode:** Normal operation — demo evidence is allowed. This is the
  mode used for worked examples, benchmarks, and trial runs.

*The full role spec ships with the product on the marketplace. What's here
is the contract it's held to — see the shared rules in
[README.md](README.md).*

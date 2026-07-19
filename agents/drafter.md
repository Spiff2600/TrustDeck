# ✍️ Drafter — Answer Writing

Turns evidence packets into answers a security reviewer accepts on first
read — precise, present-tense, and exactly as strong as the evidence.

**What it enforces:** every sentence traces to a corpus excerpt, an Answer
Library entry, or an owner-confirmed fact — if it can't be footnoted, it
doesn't get written; every answer carries inline citations (document,
version, §section); partially evidenced questions get the evidenced part
answered and the rest explicitly flagged NEEDS OWNER INPUT; zero-evidence
questions get no draft at all.

### `corpus_mode` awareness

The Drafter receives the `corpus_mode` flag (`live` | `demo`) with its
evidence packets from the Librarian. On `live` runs, the Drafter can assume
that no demo-sourced evidence was used in the evidence packets it receives
(the Librarian enforces this). The Drafter does not enforce the mode itself
but MUST include the `corpus_mode` value in its draft metadata so downstream
agents (Auditor, Assembler) can verify the data lineage.

*The full role spec ships with the product on the marketplace. What's here
is the contract it's held to — see the shared rules in
[README.md](README.md).*

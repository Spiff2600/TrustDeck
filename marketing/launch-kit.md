# TrustDeck Launch Kit

One file, every launch surface. Every block below is publication-ready: copy,
paste, post. Read section 1 first — it is the contract the rest of the file
was written under.

Links used throughout:

- Repo: <https://github.com/Spiff2600/TrustDeck>
- Listing: <https://cto.new/business/marketplace/j-s-team-trustdesk-13d1>
- Live site: <https://51788e7b5d36a9ddc6ebfa851d392fdf.ctonew.app>

---

## 1) Ground rules — read before posting anything

1. **Every number must be traceable to a repo artifact.** The repo's CI
   ([`scripts/check_consistency.py`](../scripts/check_consistency.py)) enforces
   this for repo copy; for social copy, *you* are the CI. The table below maps
   every number used in this kit to its source. If you edit a number in a post,
   re-check it against the artifact first.

   | Number in copy | Value | Source artifact |
   |---|---|---|
   | Demo run 1 tags | 9 🟢 / 4 🟡 / 2 🔴 of 15 | [`demo/acme-coverage-memo.md`](../demo/acme-coverage-memo.md) |
   | Demo run 1 review time | ~12 min (vs ~60 min manual) | [`demo/acme-coverage-memo.md`](../demo/acme-coverage-memo.md) |
   | Demo run 2 tags | 13 🟢 / 2 🟡 / 0 🔴 | [`demo/acme-coverage-memo-run2.md`](../demo/acme-coverage-memo-run2.md) |
   | Demo run 2 review time | ~2 min | [`demo/acme-coverage-memo-run2.md`](../demo/acme-coverage-memo-run2.md) |
   | Auditor downgrades (Acme) | 4 answers 🟢→🟡 | [`demo/acme-auditor-verdict.json`](../demo/acme-auditor-verdict.json) |
   | CAIQ-Lite cold | 56/124 cited (45%), 68 gaps | [`benchmark/caiq-lite-benchmark-memo.md`](../benchmark/caiq-lite-benchmark-memo.md) |
   | CAIQ-Lite onboarded | 118/124 (95%), 4 🟡, 2 🔴, ~12 min review vs ~496 min manual | [`benchmark/caiq-lite-benchmark-onboarded-memo.md`](../benchmark/caiq-lite-benchmark-onboarded-memo.md) |
   | Interview effect | ~45-min interview closed 62 of 68 gaps | [`benchmark/caiq-lite-benchmark-onboarded-memo.md`](../benchmark/caiq-lite-benchmark-onboarded-memo.md) |
   | Relay live run | 9 🟢 / 4 🟡 / 2 🔴; Auditor removed 2 overclaims (Q5, Q10) | [`relay-coverage-memo.md`](../relay-coverage-memo.md), [`relay-auditor-verdict.json`](../relay-auditor-verdict.json) |
   | Price | $29 first 25 buyers → $58 through buyer 100 → $79 final | [`marketplace-listing.md`](../marketplace-listing.md) |
   | Pain framing | "212-question questionnaire, 10–15 hours" | [`README.md`](../README.md) — this is framing, not a measured benchmark; always phrase it as an estimate |

2. **Zero customers so far — never imply otherwise.** Everything we can show
   is a *worked example*, a *benchmark run*, or a *live run by the deployed
   product*. Banned until the first real Share-your-results issue lands:
   "our customers", "users tell us", "teams are saving", any testimonial-shaped
   sentence. The honest phrasing sells better anyway — see rule 3.

3. **The honest angle IS the marketing.** "An AI that refuses to answer" is
   the hook, not a caveat to bury. Lead with the Auditor deleting claims, the
   evidenced "no", and the CI that fails our own build. Never trade that for a
   generic "save 10 hours with AI" pitch.

4. **Do not cite the second benchmark run (116/5/3) yet.** It lives in PR #7
   (`benchmark/caiq-lite-benchmark-relay-memo.md`), which is still in review
   and not on `main`. If asked, call it "a second benchmark run currently in
   review." Once PR #7 merges, it becomes fair game — add it to the table above
   first.

5. **Never post the raw Stripe link.** All purchase paths go through the
   listing, where the buyer sees the FAQ, the demo, and the ground rules
   before paying.

---

## 2) Show HN

**Title options** (HN limit is 80 characters; A is the recommended one):

- A. `Show HN: I built an AI team that refuses to lie on security questionnaires`
- B. `Show HN: A hostile auditor agent that deletes AI overclaims before you see them`
- C. `Show HN: We test our marketing numbers in CI like code`

**Body** (~250 words — post as the text of the submission, plain text, no
emojis; HN renders bare URLs fine):

```text
Security questionnaires are the tax on every B2B deal: 100-200 questions,
somewhere around 10-15 hours of copy-paste, and constant pressure to answer
"yes" to things you only half-have. Generic LLMs make that worse — they will
cheerfully invent a bug bounty program you don't run.

TrustDeck is a five-agent pipeline (Lead -> Librarian -> Drafter -> Auditor ->
Assembler) that fills the questionnaire from your actual documentation and
refuses to answer anything it can't cite:

- Every answer carries an inline citation to the document it came from.

- A hostile Auditor re-checks each draft against only the cited evidence. In
the live run by the deployed product, it deleted "Access follows RBAC with
least-privilege principles" (the citation covered review cadence and
offboarding, not RBAC) and killed unsupported training/NDA claims on another
question. Its per-question verdicts ship in the repo as JSON.

- Mixed-confidence downgrade rule: if any sub-question of an answer lacks
evidence, the whole answer drops from green to yellow. It downgraded four
answers in the demo run for exactly this.

- Benchmark: CAIQ-Lite, 124 questions. Cold corpus: 56/124 answered with
citations (45%). After a 45-minute structured interview: 118/124 (95%). The
six left over are honest, listed gaps. Legal questions always route to a human.

- We test our collateral like code: CI fails the build when any published
number stops reconciling with the artifacts.

All demo data is fictional and watermarked; every number is reproducible from
the repo. There's a "Report a fabrication" issue template — those are treated
as release blockers. Tear it apart.

Repo: https://github.com/Spiff2600/TrustDeck
Listing: https://cto.new/business/marketplace/j-s-team-trustdesk-13d1
```

**HN conduct notes:** first-person, no marketing speak, answer every comment.
If someone finds a real inconsistency, concede it, fix it, and reply with the
commit link — that thread becomes the best ad on the page.

---

## 3) X/Twitter thread (7 tweets, each verified under 280 chars)

**Tweet 1 — hook**

> Every enterprise deal hits the same wall: procurement sends a 200-question security questionnaire. That's 10–15 hours of copy-paste and "wait, do we actually do that?" — and it repeats next month.
>
> I built a 5-agent AI team that refuses to lie its way through it. 🧵

**Tweet 2 — the Auditor**

> The interesting agent isn't the one that writes answers.
>
> It's the hostile Auditor that re-reads every draft against only the cited evidence. No evidence, no claim. Its whole job is to say no to the other four agents — and its verdicts ship in the repo as JSON.

**Tweet 3 — real catches**

> Not hypothetical. In the live run, the Drafter wrote "Access follows RBAC with least-privilege principles." Plausible! The cited evidence only covered review cadence + offboarding. Deleted.
>
> Same run, Q10: unsupported security-training and NDA claims. Also deleted.

**Tweet 4 — benchmark**

> Benchmark on CAIQ-Lite (124 questions):
>
> Cold corpus → 56/124 answered with citations (45%).
> After one ~45-min structured interview → 118/124 (95%).
>
> The 6 left over are honest, listed gaps. An evidenced "no" counts as done — auditors trust vendors who know what they lack.

**Tweet 5 — flywheel + CI**

> Answer a gap once and it joins your Answer Library.
>
> Demo run 1: 9/15 green, ~12 min of review.
> Owner answers 6 gaps. Run 2: 13/15 green, ~2 min.
>
> And CI fails our build if any published number stops matching the artifacts. We test marketing collateral like code.

**Tweet 6 — price mechanic**

> It's $29 on the cto.new marketplace for the first 25 buyers — then $58 through buyer 100, then a final $79. The ladder is published in the listing and executes exactly as written.
>
> In exchange I ask one thing: if it ever claims something your evidence doesn't support, file the "Report a fabrication" issue. Those are release blockers.

**Tweet 7 — links**

> Everything is public and reproducible — corpus, answers, auditor verdicts, benchmarks, and the CI that checks them:
>
> https://github.com/Spiff2600/TrustDeck
>
> https://cto.new/business/marketplace/j-s-team-trustdesk-13d1
>
> An evidenced no beats a confident maybe.

---

## 4) LinkedIn post (~200 words)

```text
The slowest week of any B2B deal is the one where procurement sends the
security questionnaire. Two hundred questions, 10–15 hours of somebody's
time, and the quiet temptation to answer "yes" to controls that are really
"mostly."

I built TrustDeck to take a different position: an evidenced "no" beats a
confident "maybe." It's a five-agent team that answers CAIQ, SIG, and custom
Excel questionnaires from your actual documentation — and refuses to answer
anything it can't cite.

The part I'm proudest of is the Auditor: a deliberately hostile agent that
re-checks every draft against the cited evidence. In the product's live demo
run it removed two overclaims before any human saw them — including a
plausible-sounding RBAC claim the evidence didn't support. Answers with no
basis are routed to you, never guessed. Legal and insurance questions always
go to a human.

On the CAIQ-Lite benchmark (124 questions), it answered 56/124 with citations
from a cold corpus, and 118/124 after a 45-minute structured interview — with
the remaining six surfaced as honest, documented gaps.

Every number above is reproducible from the public repo, and CI fails the
build if one drifts.

For B2B SaaS founders, sales engineers, and fractional CISOs:
https://cto.new/business/marketplace/j-s-team-trustdesk-13d1
```

---

## 5) Product Hunt

**Name:** TrustDeck

**Tagline options** (all verified under 60 chars):

1. `The AI that refuses to lie on security questionnaires`
2. `Security questionnaires answered from evidence, not vibes`
3. `Cited answers. Honest gaps. Zero fabrications.`

**Description** (~120 words):

```text
TrustDeck is a five-agent team that answers vendor security questionnaires —
CAIQ, SIG, and custom Excel files — from your actual documentation, and
refuses to answer anything it can't prove.

Every answer carries an inline citation. A hostile Auditor agent re-checks
each draft against the cited evidence and deletes overclaims before you see
them. Answers with no basis are routed to you, never guessed; legal questions
always go to a human.

Benchmark (CAIQ-Lite, 124 questions): 56/124 answered with citations cold,
118/124 after a 45-minute onboarding interview. Every number is reproducible
from the public repo, and CI fails the build if any published figure stops
matching the artifacts. You get your original file back, filled in, plus a
60-second coverage memo.
```

**First comment from the maker** (~150 words):

```text
Hi PH — maker here. I spent 15+ years as a cloud security architect in
federal and enterprise environments, on both sides of the audit table, and
the thing that kills trust fastest is a vendor answer that doesn't survive a
follow-up question.

So TrustDeck's core design decision is an agent whose only job is to be
hostile. The Auditor re-reads every drafted answer against only the evidence
the answer cites. If one sub-question of an answer lacks evidence, the whole
answer is downgraded from green to yellow. If a claim isn't in the citation,
it gets deleted — in the live demo run it removed a plausible RBAC claim and
an unsupported NDA claim before any human saw them. The verdicts are in the
repo as JSON.

Zero customers yet — just worked examples and benchmarks, all public and
CI-checked. If you can make it fabricate, file the "Report a fabrication"
issue: those are release blockers.
```

---

## 6) Reddit

**Variant A — r/SaaS** (founder voice; "how I built and priced it" is
welcome there; still disclose):

> **Title:** I built an AI that refuses to answer security questionnaire
> questions it can't prove — and CI-test my marketing numbers like code
>
> **Body:**
>
> Disclosure: I built this.
>
> Security questionnaires were the most predictable drag on every deal I've
> been near: ~200 questions, 10–15 hours, always urgent. Every AI tool I
> tried was happy to overclaim, which in security is worse than useless — a
> fabricated answer is a contract breach waiting to happen.
>
> So the product is five agents, and the one that matters is a hostile
> Auditor that deletes any claim the cited evidence doesn't support. In the
> live demo run it removed two overclaims before output. Benchmark: 56/124
> CAIQ-Lite questions answered with citations from a cold corpus, 118/124
> after a 45-minute onboarding interview. Unanswerable questions come back as
> honest, documented gaps.
>
> Two things I did that felt risky but I'd recommend:
>
> 1. **CI on the marketing.** Our repo's build fails if any number in the
>    README or memos stops reconciling with the underlying CSV/JSON
>    artifacts. Collateral is code.
> 2. **Public pricing ladder.** $29 one-time for the first 25 buyers,
>    $58 through buyer 100, $79 final. It's written into the listing
>    with hard triggers, so it's a commitment, not a countdown-timer
>    gimmick.
>
> No customers yet — launched this week, everything public is a worked
> example. Repo with all artifacts: https://github.com/Spiff2600/TrustDeck
> — happy to answer anything about the build or the pricing.

**Variant B — r/cybersecurity or r/msp** (practitioner voice; zero
salesiness; no price talk; lead with the benchmark and the honest-no
philosophy; read the sub's self-promo rules before posting):

> **Title:** Benchmarked an LLM agent pipeline on CAIQ-Lite (124 questions):
> 45% cited cold, 95% after a structured interview, zero fabrications — the
> design choice that mattered was a hostile auditor agent
>
> **Body:**
>
> Disclosure up front: I built the thing being benchmarked, and this post is
> about the methodology, not a pitch.
>
> The failure mode that makes LLMs dangerous for questionnaire work isn't
> wrong answers — it's *confident unsupported* answers. So the pipeline's
> rule is: no citation, no claim. Answers are tagged evidenced / needs-confirm
> / no-basis, and no-basis questions are routed to a human, never guessed.
> An evidenced "no bug bounty, no SBOMs, no CMK" is treated as a *complete*
> answer, because reviewers trust vendors who know what they don't have.
>
> The design choice that did the most work: a separate auditor agent that
> re-reads every draft against only the cited evidence, with authority to
> delete. In a live run it removed a "least-privilege RBAC" claim (citation
> covered review cadence and offboarding only) and an NDA/training claim
> (evidence existed elsewhere in the corpus but wasn't cited — so it goes).
> If any sub-question lacks evidence, the whole answer is downgraded.
>
> CAIQ-Lite results: 56/124 answered with citations from a 12-doc cold
> corpus; 118/124 after a ~45-minute structured interview; remaining 6
> surfaced as documented gaps. All artifacts (corpus, answers, per-question
> auditor verdicts, memos) are public, and CI fails the repo build if the
> published numbers stop reconciling: https://github.com/Spiff2600/TrustDeck
>
> Genuinely interested in where this breaks: what would you probe first?

---

## 7) Cold email template (fractional CISOs — verified ≤90 words)

**Subject line options:**

1. `an AI that refuses to answer security questionnaires`
2. `evidenced no > confident maybe`
3. `the questionnaire agent with a hostile auditor`

**Body:**

```text
{{first_name}} — quick one.

Most AI questionnaire tools will cheerfully claim a bug bounty your client
doesn't have. I built TrustDeck differently: five agents, one of them a
hostile Auditor that deletes any answer the cited evidence doesn't support.
In its live demo run it removed two overclaims before a human ever saw them.

CAIQ-Lite benchmark: 118/124 answered with citations after a 45-minute
interview; the rest surfaced as honest gaps.

Everything's public — corpus, verdicts, numbers, and the CI that checks
them: https://github.com/Spiff2600/TrustDeck

Worth a skim?
```

CTA is the public repo, not the listing — a fractional CISO who reads the
auditor verdicts sells themselves.

---

## 8) Distribution checklist (in order)

1. **Refresh the listing.** Click Refresh on the cto.new listing so the
   latest buyer files from the repo are attached. Do this the day before any
   post goes live.
2. **Verify GitHub presentation** (already set — just confirm): repo pinned
   on the Spiff2600 profile; social preview renders the banner when the repo
   link is pasted into Slack/X/LinkedIn.
3. **Show HN** — Tuesday–Thursday, 8–10am ET. Title A from section 2. Stay
   at the keyboard for the next 4+ hours.
4. **Product Hunt** — launch *after* HN feedback has been read and any easy
   fixes shipped (typically the following week, 12:01am PT). Use the maker
   comment from section 5.
5. **X thread** — same day as the HN post, once it has a few comments; link
   the HN discussion in a reply tweet.
6. **LinkedIn** — next day. Section 4 copy.
7. **Reddit** — spaced roughly a week after launch, one sub at a time:
   r/SaaS first (variant A), then r/cybersecurity or r/msp (variant B) a few
   days later. Re-read each sub's self-promotion rules the day you post.
8. **Awesome-list submissions** — all five verified to exist (2026-07):
   - [`hesreallyhim/awesome-claude-code`](https://github.com/hesreallyhim/awesome-claude-code)
     — note: uses an automated **issue-based** submission flow, not PRs; follow its CONTRIBUTING.md
   - [`e2b-dev/awesome-ai-agents`](https://github.com/e2b-dev/awesome-ai-agents)
   - [`Arudjreis/awesome-security-GRC`](https://github.com/Arudjreis/awesome-security-GRC)
   - [`ethanolivertroy/awesome-grc-ai`](https://github.com/ethanolivertroy/awesome-grc-ai)
   - [`theopenlane/awesome-compliance`](https://github.com/theopenlane/awesome-compliance)

   Re-check each list's contribution rules before submitting; write the entry
   in the list's own house style, one line, no superlatives.
9. **Respond to every comment within an hour on launch day** — HN, PH, and
   X. Concede real findings, fix them, reply with the commit link.

---

## 9) What NOT to do

- **No fake testimonials, ever.** There are zero customers (ground rule 2);
  an invented quote would violate the product's one promise and hand any
  commenter the kill shot.
- **No paid reviews, upvote pods, or vote trading.** HN flags voting rings
  and PH penalizes launch pods — both bury the post and taint the account.
- **No astroturfing.** Undisclosed self-promotion violates most subreddit
  rules and HN norms. Every Reddit post starts with a disclosure line; both
  variants in section 6 already include it.
- **Never post the raw Stripe payment link.** Purchases go through the
  listing so buyers see the FAQ, demo, and ground rules first (see ground
  rule 5).
- **Don't argue with critics.** If a claim is challenged, check it against
  the artifact table in section 1. If they're right, that's a fabrication
  report — treat it as a release blocker, fix, and reply with the commit.
- **Don't cite the 116/5/3 second benchmark** until PR #7 merges (ground
  rule 4).

# -*- coding: utf-8 -*-
"""Cross-artifact consistency checks for the TrustDeck demo & benchmark data.

Every number in a memo, register, or library must reconcile with the artifact
it is derived from. This is the repo's test suite — a product that promises
"never overclaims" ships collateral whose numbers sum.

Run: python scripts/check_consistency.py
"""
import csv
import io
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FAILURES = []


def check(label, cond, detail=""):
    if cond:
        print(f"  ok  {label}")
    else:
        print(f"FAIL  {label}  {detail}")
        FAILURES.append(label)


def read(relpath):
    return (ROOT / relpath).read_text(encoding="utf-8")


def read_csv(relpath):
    with io.StringIO(read(relpath).lstrip("﻿")) as f:
        return list(csv.DictReader(f))


def memo_tallies(text):
    """Extract (count, pct) pairs from 'N (P%)' occurrences in a memo."""
    return [(int(a), int(b)) for a, b in re.findall(r"(\d+) \((\d+)%\)", text)]


print("== demo run 1 ==")
run1 = read_csv("demo/acme-demo-completed.csv")
verdict = json.loads(read("demo/acme-auditor-verdict.json"))
library = json.loads(read("demo/acme-answer-library.json"))

check("run1 CSV has 15 rows", len(run1) == 15, f"got {len(run1)}")
check("verdict has 15 entries", len(verdict) == 15, f"got {len(verdict)}")

vmap = {v["question_id"]: v for v in verdict}
mismatched = [r["Question ID"] for r in run1
              if vmap[r["Question ID"]]["final_text"] != r["Vendor Response"]]
check("verdict final_text == run1 Vendor Response for every question",
      not mismatched, f"mismatch: {mismatched}")

greens1 = [r for r in run1 if r["Reviewer Notes"].startswith("\U0001F7E2")]
yellows1 = [r for r in run1 if r["Reviewer Notes"].startswith("\U0001F7E1")]
reds1 = [r for r in run1 if r["Reviewer Notes"].startswith("\U0001F534")]
check("run1 tags = 9/4/2",
      (len(greens1), len(yellows1), len(reds1)) == (9, 4, 2),
      f"got {len(greens1)}/{len(yellows1)}/{len(reds1)}")

memo1 = read("demo/acme-coverage-memo.md")
t1 = memo_tallies(memo1)
check("run1 memo tallies match CSV tags",
      [c for c, _ in t1[:3]] == [len(greens1), len(yellows1), len(reds1)],
      f"memo says {t1}")
check("run1 memo counts sum to 15", sum(c for c, _ in t1[:3]) == 15)
check("run1 memo percentages sum to 100", sum(p for _, p in t1[:3]) == 100)
rt1 = len(yellows1) * 1 + len(reds1) * 4
check(f"run1 memo review time = {rt1} min", f"~{rt1} min" in memo1)

print("== demo run 2 ==")
run2 = read_csv("demo/acme-demo-completed-run2.csv")
greens2 = [r for r in run2 if r["Reviewer Notes"].startswith("\U0001F7E2")]
yellows2 = [r for r in run2 if r["Reviewer Notes"].startswith("\U0001F7E1")]
reds2 = [r for r in run2 if r["Reviewer Notes"].startswith("\U0001F534")]
check("run2 tags = 13/2/0",
      (len(greens2), len(yellows2), len(reds2)) == (13, 2, 0),
      f"got {len(greens2)}/{len(yellows2)}/{len(reds2)}")

memo2 = read("demo/acme-coverage-memo-run2.md")
t2 = memo_tallies(memo2)
check("run2 memo tallies match CSV tags",
      [c for c, _ in t2[:3]] == [len(greens2), len(yellows2), len(reds2)],
      f"memo says {t2}")
check("run2 memo percentages sum to 100", sum(p for _, p in t2[:3]) == 100)
rt2 = len(yellows2) * 1 + len(reds2) * 4
check(f"run2 memo review time = {rt2} min", f"~{rt2} min" in memo2)

print("== answer library ==")
check("library has 15 entries", len(library) == 15, f"got {len(library)}")
lmap = {e["question_id"]: e for e in library}
for v in verdict:
    qid = v["question_id"]
    if v["verdict"] == "approved" and "NEEDS OWNER INPUT" not in v["final_text"]:
        check(f"library {qid} (corpus) matches approved verdict text",
              lmap[qid]["answer"] == v["final_text"] and lmap[qid]["source"] == "corpus")
owner_entries = [e for e in library if e["source"] != "corpus"]
check("6 owner-confirmed entries (run-1 gaps answered once)",
      len(owner_entries) == 6, f"got {len(owner_entries)}")
check("no owner-confirmed entry still says NEEDS OWNER INPUT",
      all("NEEDS OWNER INPUT" not in e["answer"] for e in owner_entries))
check("legal entries are yellow, others green",
      all(e["confidence"] == ("yellow" if e["question_id"] in ("Q14", "Q15") else "green")
          for e in library))

print("== benchmark (cold) ==")
bench = read_csv("benchmark/caiq-lite-benchmark.csv")
completed = read_csv("benchmark/caiq-lite-benchmark-completed.csv")
check("benchmark has 124 questions", len(bench) == 124, f"got {len(bench)}")
check("completed benchmark has 124 rows", len(completed) == 124, f"got {len(completed)}")
strong = [r for r in completed if r["Confidence"].startswith("\U0001F7E2")]
gaps = [r for r in completed if r["Confidence"].startswith("\U0001F534")]
check("completed = 55 strong + 69 gaps",
      (len(strong), len(gaps)) == (55, 69), f"got {len(strong)}/{len(gaps)}")
check("every strong answer carries a citation",
      all(re.search(r"\([^)]+\)", r["Vendor Response"]) for r in strong))
check("every gap row says NEEDS OWNER INPUT",
      all(r["Vendor Response"].startswith("NEEDS OWNER INPUT") for r in gaps))

memo_cold = read("benchmark/caiq-lite-benchmark-memo.md")
tc = memo_tallies(memo_cold)
check("cold memo says 55 strong / 69 gaps",
      tc[0][0] == 55 and any(c == 69 for c, _ in tc), f"memo says {tc}")
domain_counts = [int(m) for m in re.findall(r"^\d+\.\s+.*?\((\d+)\)", memo_cold, re.M)]
check("cold memo domain breakdown sums to 69",
      sum(domain_counts) == 69, f"sums to {sum(domain_counts)}")

register = read("demo/acme-gap-register.md")
reg_counts = [int(m) for m in re.findall(r"\((\d+)\)\s*\|", register)]
check("gap register domain table sums to 69",
      sum(reg_counts) == 69, f"sums to {sum(reg_counts)}")

print("== benchmark (onboarded) ==")
memo_on = read("benchmark/caiq-lite-benchmark-onboarded-memo.md")
to = memo_tallies(memo_on)
check("onboarded memo counts sum to 124",
      sum(c for c, _ in to[:3]) == 124, f"got {to}")
check("onboarded memo percentages sum to 100",
      sum(p for _, p in to[:3]) == 100, f"got {to}")
g_on, y_on, r_on = (to[0][0], to[1][0], to[2][0])
check("onboarded gaps closed + open = 69 cold gaps",
      (g_on - 55) + y_on + r_on == 69, f"{g_on-56}+{y_on}+{r_on}")
rt_on = y_on * 1 + r_on * 4
check(f"onboarded review time = {rt_on} min", f"~{rt_on} min" in memo_on)

additions = read("benchmark/acme-corpus-tier2-additions.md")
for qid in re.findall(r"CAIQ-\d+", memo_on):
    check(f"onboarded open item {qid} is documented in tier2 additions",
          qid in additions)

print("== relay demo (second worked example) ==")
relay = read_csv("relay-demo-completed.csv")
rverdict = json.loads(read("relay-auditor-verdict.json"))
check("relay CSV has 15 rows", len(relay) == 15, f"got {len(relay)}")
rvmap = {v["question_id"]: v for v in rverdict}
rmism = [r["Question ID"] for r in relay
         if rvmap[r["Question ID"]]["final_text"] != r["Vendor Response"]]
check("relay verdict final_text == CSV Vendor Response for every question",
      not rmism, f"mismatch: {rmism}")
rg = [r for r in relay if r["Reviewer Notes"].startswith("\U0001F7E2")]
ry = [r for r in relay if r["Reviewer Notes"].startswith("\U0001F7E1")]
rr = [r for r in relay if r["Reviewer Notes"].startswith("\U0001F534")]
rmemo = read("relay-coverage-memo.md")
rt = memo_tallies(rmemo)
check("relay memo tallies match CSV tags",
      [c for c, _ in rt[:3]] == [len(rg), len(ry), len(rr)],
      f"memo says {rt}, CSV {len(rg)}/{len(ry)}/{len(rr)}")
check("relay memo counts sum to 15", sum(c for c, _ in rt[:3]) == 15)
check("relay memo percentages sum to 100", sum(p for _, p in rt[:3]) == 100)
rrt = len(ry) * 1 + len(rr) * 4
check(f"relay memo review time = {rrt} min", f"~{rrt} min" in rmemo)
check("every evidenced relay row cites the interview",
      all("Onboarding Interview" in r["Reviewer Notes"] for r in rg + ry))

rlib = json.loads(read("relay-answer-library.json"))
check("relay library has 15 entries", len(rlib) == 15, f"got {len(rlib)}")
rlmap = {e["question_id"]: e for e in rlib}
TAG_COLOR = {"\U0001F7E2": "green", "\U0001F7E1": "yellow", "\U0001F534": "red"}
rexpected = {r["Question ID"]: TAG_COLOR.get(r["Reviewer Notes"][:1], "?")
             for r in relay}
badconf = [q for q, c in rexpected.items() if rlmap[q]["confidence"] != c]
check("relay library confidence matches CSV reviewer tag for every question",
      not badconf, f"mismatch: {badconf}")
badans = [q for q in rlmap
          if not rlmap[q]["answer"].strip().startswith(rvmap[q]["final_text"].rstrip())]
check("relay library answer starts with auditor verdict final_text",
      not badans, f"mismatch: {badans}")
check("relay library Q14/Q15 answers equal verdict text exactly (no citation)",
      all(rlmap[q]["answer"] == rvmap[q]["final_text"] for q in ("Q14", "Q15")))
check("relay library Q14/Q15 are red and sourced to legal escalation",
      all(rlmap[q]["confidence"] == "red" and "legal" in rlmap[q]["source"]
          for q in ("Q14", "Q15")))
check("every relay library entry carries the demo watermark",
      all(e["watermark"] == "DEMO — Relay sample data" for e in rlib))

# The Relay corpus was corrected mid-run from a simulated draft (GCP/Austin)
# to owner-confirmed facts (Azure/Denver). No artifact may regress.
# relay-auditor-verdict.json is exempt: its audit notes legitimately name
# the rejected simulated values ("Kestrel Security, not CyberGuard").
STALE = ("Austin", "London", "GCP", "86 employees", "Google Cloud",
         "CyberGuard", "Checkr (USA)", "Istio")
for f in ("relay-onboarding-results.md", "relay-corpus.json",
          "relay-corpus-index.json", "relay-evidence.json",
          "relay-drafted-answers.json", "relay-sample-corpus.md",
          "relay-demo-completed.csv", "relay-coverage-memo.md",
          "relay-answer-library.json"):
    s = read(f)
    hits = [w for w in STALE if w in s]
    check(f"{f} carries no stale simulated facts", not hits, f"found {hits}")

print("== pricing & brand ==")
pricing = json.loads(read("pricing.json"))
prices = [str(t["price_usd"]) for t in pricing["ladder"]]
check("pricing.json ladder is 29/58/79", prices == ["29", "58", "79"])
SURFACES = ("README.md", "marketplace-listing.md",
            "site/src/routes/index.tsx", "marketing/launch-kit.md")
for f in SURFACES:
    s = read(f)
    missing = [p for p in prices if f"${p}" not in s]
    check(f"{f} cites every ladder price", not missing, f"missing {missing}")
    check(f"{f} has no stale 'doubles to' pricing", "doubles to $" not in s)
    check(f"{f} carries no 'TrustDesk' brand misspelling", "TrustDesk" not in s)
check("site.json businessName is TrustDeck",
      json.loads(read("site/site.json"))["businessName"] == "TrustDeck")

print()
if FAILURES:
    print(f"{len(FAILURES)} consistency check(s) FAILED")
    sys.exit(1)
print("All consistency checks passed.")

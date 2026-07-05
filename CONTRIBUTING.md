# Contributing

Thanks for helping make TrustDeck better. The short version:

1. **Branch and PR.** All work happens on `feat/<short-description>` branches
   with a PR into `main` — never commit to `main` directly. Full conventions
   are in [WORKFLOW.md](WORKFLOW.md).
2. **The numbers must sum.** Every memo, register, and library in this repo
   is cross-checked by [scripts/check_consistency.py](scripts/check_consistency.py),
   which runs in CI on every PR. If you touch any file under `demo/` or
   `benchmark/`, run it locally first:

   ```bash
   python scripts/check_consistency.py
   ```

3. **One logical change per PR.** Knowledge-doc changes need a quick sanity
   check; anything touching demo/benchmark data needs the consistency check
   to pass.
4. **Never weaken the ethos.** PRs that make any agent fabricate, round up
   confidence, or answer legal questions automatically will be declined —
   that's the product.

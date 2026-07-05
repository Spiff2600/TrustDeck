# TrustDesk — Code Workflow

## Branch Strategy
- All work happens on feature branches named `feat/<short-description>`
- The default branch is `main`
- Never commit directly to `main`

## PR Process
1. Member creates a feature branch and commits changes
2. Member pushes to GitHub and opens a Pull Request
3. The Lead (agent-lead) reviews the PR
4. Lead merges via `gh pr merge` (squash by default)

## What Lives in the Repo
- Knowledge documents (corpora, onboarding interviews, gap registers)
- Questionnaire templates and samples
- The team's website source code
- Any tooling or scripts the team builds

## Review Expectations
- PRs should be focused — one logical change per PR
- Knowledge doc changes need a quick sanity check but no formal review
- Code changes (if any) need functional correctness verified
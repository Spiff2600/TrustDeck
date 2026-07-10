import { createFileRoute } from "@tanstack/react-router";

const PAYMENT_LINK = "https://buy.stripe.com/5kQ6oHdYVd0PgVCddDeME00";
const EMAIL = "trustdesk-7f0d0efa@ctomail.io";
const GITHUB_REPO = "https://github.com/Spiff2600/TrustDeck";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center px-6 py-16 text-center">
      {/* Hero */}
      <div className="mb-6">
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-300">
          Now available
        </span>
      </div>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Security questionnaires, answered from&nbsp;your&nbsp;actual docs
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-400">
        TrustDeck is a five-agent AI team that answers vendor security
        questionnaires (SIG, CAIQ, custom Excel) from <strong>your real
        policies</strong> — and refuses to fabricate. Every response
        confidence-tagged 🟢 evidenced / 🟡 inferred / 🔴 human-only.
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={PAYMENT_LINK}
          className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-indigo-500"
        >
          Buy now — $29 for the first 25 buyers · then $58 · $79 final
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          Questions? Email us
        </a>
      </div>

      {/* How it works */}
      <section className="mt-20 max-w-4xl text-left">
        <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              emoji: "📥",
              title: "1. Upload a questionnaire",
              desc: "Excel, CSV, PDF, or portal questions. TrustDeck parses every question, classifies it by domain, and routes legal questions to you — never the AI.",
            },
            {
              emoji: "🔍",
              title: "2. We check your docs",
              desc: "The Librarian finds evidence in your Trust Corpus. If it's not there, we say so — no invented answers.",
            },
            {
              emoji: "✍️",
              title: "3. Draft & audit",
              desc: "The Drafter writes answers with citations. The Auditor red-teams every one for overclaims. Nothing ships without approval.",
            },
            {
              emoji: "📦",
              title: "4. Get your filled file",
              desc: "The Assembler writes answers back into the original format plus a 60-second Coverage Memo you can forward to your CEO.",
            },
            {
              emoji: "🔄",
              title: "5. Every run gets better",
              desc: "🟢 answers join your Answer Library. Each 🔴 you answer fills a gap. Questionnaire #5 is a coffee break.",
            },
            {
              emoji: "🛡️",
              title: "Never overclaim",
              desc: "A false 'yes' in a security questionnaire is a contract breach. TrustDeck is designed to be honest — that's the product.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border p-5 dark:border-gray-700">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof / Results */}
      <section className="mt-20 max-w-4xl text-left">
        <h2 className="text-2xl font-bold text-center mb-8">Proof — from the public repo, checked in CI</h2>
        <p className="text-sm text-gray-500 text-center mb-8 max-w-xl mx-auto">
          Every number below is reproducible from the files in the TrustDeck repo.
          The CI build fails if any published number stops reconciling with the artifacts.
          <br />
          <a href={GITHUB_REPO} className="underline hover:text-gray-600">
            github.com/Spiff2600/TrustDeck
          </a>
        </p>

        {/* 15-question demo runs */}
        <div className="grid gap-6 sm:grid-cols-2 mb-8">
          <div className="rounded-lg border p-5 dark:border-gray-700">
            <h3 className="font-semibold mb-3">Demo — Acme Analytics (15 questions)</h3>
            <div className="grid grid-cols-3 gap-3 text-center mb-3">
              <div>
                <div className="text-2xl font-bold text-green-600">9</div>
                <div className="text-xs text-gray-500">🟢 Evidenced</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">4</div>
                <div className="text-xs text-gray-500">🟡 Confirm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">2</div>
                <div className="text-xs text-gray-500">🔴 Routed</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">~12 min review (baseline: ~60 min)</p>
          </div>
          <div className="rounded-lg border p-5 dark:border-gray-700">
            <h3 className="font-semibold mb-3">Demo — Run 2 (gaps answered once)</h3>
            <div className="grid grid-cols-3 gap-3 text-center mb-3">
              <div>
                <div className="text-2xl font-bold text-green-600">13</div>
                <div className="text-xs text-gray-500">🟢 Evidenced</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-500">2</div>
                <div className="text-xs text-gray-500">🟡 Confirm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-400">0</div>
                <div className="text-xs text-gray-500">🔴 Routed</div>
              </div>
            </div>
            <p className="text-sm text-gray-500">~2 min review — 0 new gaps. The flywheel works.</p>
          </div>
        </div>

        {/* CAIQ-Lite benchmark results */}
        <div className="rounded-lg border p-6 dark:border-gray-700">
          <h3 className="font-semibold mb-3 text-center">CAIQ-Lite benchmark (124 questions)</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">45%</div>
              <div className="text-sm text-gray-500">🟢 Cold start</div>
              <p className="text-xs text-gray-400 mt-1">Acme, 12-doc corpus</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-500">🟢 Onboarded (Acme)</div>
              <p className="text-xs text-gray-400 mt-1">~12 min review</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">94%</div>
              <div className="text-sm text-gray-500">🟢 Onboarded (Relay)</div>
              <p className="text-xs text-gray-400 mt-1">~17 min review</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            45-min interview closes 62 of 68 gaps — even documented "no" answers are 🟢,
            because auditors trust vendors who know what they don't have.
          </p>
        </div>
      </section>

      {/* Agents */}
      <section className="mt-20 max-w-4xl text-left">
        <h2 className="text-2xl font-bold text-center mb-8">The team</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { role: "🔍 Lead", desc: "Parses questionnaires, classifies questions, routes legal to you" },
            { role: "📚 Librarian", desc: "Retrieves evidence from your Trust Corpus. Never guesses." },
            { role: "✍️ Drafter", desc: "Writes reviewer-ready answers with inline citations" },
            { role: "🕵️ Auditor", desc: "Hostile reviewer — blocks overclaims before you see them" },
            { role: "📦 Assembler", desc: "Returns your filled file plus a forwardable Coverage Memo" },
          ].map((agent) => (
            <div key={agent.role} className="rounded-lg border p-4 dark:border-gray-700">
              <h3 className="font-semibold">{agent.role}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{agent.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20 max-w-2xl text-left">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is TrustDeck?",
              a: "A five-agent AI team that answers vendor security questionnaires — SIG, CAIQ, and custom Excel — from your actual documentation. Every answer is cited, confidence-tagged, and audited for overclaims before you see it.",
            },
            {
              q: "Can it fabricate answers I don't have?",
              a: "No — that's the entire design. The Auditor is a hostile reviewer who checks every answer against your actual evidence. Answers with no evidence get tagged 🔴 and routed to you. A fabricated answer is a contract breach waiting to happen, and TrustDeck won't do it.",
            },
            {
              q: "What do I need to provide?",
              a: "Nothing beyond the marketplace — demo mode works out of the box with the included Acme sample files. Your first real run just needs the 20-minute onboarding interview plus your existing policies and docs.",
            },
            {
              q: "Does it support SIG, CAIQ, and custom Excel?",
              a: "Yes — TrustDeck fills in SIG, CAIQ, and custom Excel files. Excel (xlsx/xls), CSV, PDF text, and pasted portal questions are all supported. You get your original file back with the answers filled in. Legal & Insurance questions are always routed to you.",
            },
            {
              q: "Where's the proof?",
              a: "The public repo (github.com/Spiff2600/TrustDeck) contains the complete worked examples: input questionnaires, the corpus they answered from, every answer with its citation, the Auditor's per-question verdicts, and both benchmark runs. The repo's CI fails if any published number stops reconciling with the artifacts.",
            },
            {
              q: "Why is it only $29?",
              a: "Launch pricing, published as a ladder that executes exactly as written: the first 25 buyers pay $29, buyers 26–100 pay $58, and the final price is $79. A single 200-question review costs 10–15 hours of your time — even at the final price it pays for itself ~15× on the first run. Backed by the fabrication warranty: if it ever claims something your evidence doesn't support, report it within 60 days for a full refund.",
            },
            {
              q: "How does demo mode work?",
              a: "TrustDeck comes with a sample Acme corpus. Upload the demo questionnaire and see a fully worked Coverage Memo in under 10 minutes — no setup.",
            },
            {
              q: "What happens to my data?",
              a: "Upload policies and executive summaries only. Never upload credentials, keys, or secrets. Your Trust Corpus stays in your environment.",
            },
          ].map((faq) => (
            <div key={faq.q} className="rounded-lg border p-4 dark:border-gray-700">
              <h3 className="font-semibold mb-1">{faq.q}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="mt-20 mb-12">
        <a
          href={PAYMENT_LINK}
          className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow hover:bg-indigo-500"
        >
          Get TrustDeck — $29 for the first 25 buyers · then $58 · $79 final
        </a>
        <p className="mt-3 text-sm text-gray-500">
          One questionnaire saves $500+ of internal labor. Keeps getting better.
        </p>
      </div>

      <footer className="text-sm text-gray-400 dark:text-gray-600">
        Built with <a href="https://cto.new" className="underline hover:text-gray-600">cto.new</a>
        {" · "}
        <a href={`mailto:${EMAIL}`} className="underline hover:text-gray-600">Contact</a>
        {" · "}
        <a
          href="https://github.com/Spiff2600/TrustDeck/issues/new"
          className="underline hover:text-gray-600"
          title="Report a fabricated answer — TrustDeck takes accountability seriously"
        >
          Report a fabrication
        </a>
      </footer>
    </main>
  );
}
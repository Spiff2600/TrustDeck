import { createFileRoute } from "@tanstack/react-router";

const PAYMENT_LINK = "https://buy.stripe.com/5kQ6oHdYVd0PgVCddDeME00";
const EMAIL = "trustdesk-7f0d0efa@ctomail.io";

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
          Buy now — $29 launch price — doubles to $58 after the first cohort
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

      {/* Benchmark */}
      <section className="mt-20 max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Benchmark results</h2>
        <div className="rounded-lg border p-6 dark:border-gray-700">
          <p className="text-sm text-gray-500 mb-4">
            CAIQ-Lite (124 questions) × Acme sample corpus — reproducible in demo mode
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">45%</div>
              <div className="text-sm text-gray-500">🟢 Auto-answered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-500">0%</div>
              <div className="text-sm text-gray-500">🟡 Inferred</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">55%</div>
              <div className="text-sm text-gray-500">🔴 Needs input</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            68 gaps surfaced. Each one you answer makes every future run faster.
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
              q: "How does demo mode work?",
              a: "TrustDeck comes with a sample Acme corpus. Upload the demo questionnaire and see a fully worked Coverage Memo in under 10 minutes — no setup.",
            },
            {
              q: "Can it fabricate answers I don't have?",
              a: "No — that's the entire point. The Auditor checks every answer against your actual evidence. Answers with no evidence get tagged 🔴 and routed to you.",
            },
            {
              q: "What formats are supported?",
              a: "Excel, CSV, PDF text, and pasted portal questions. Legal & Insurance questions are always routed to you.",
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
          Get TrustDeck — $29 launch price — doubles to $58 after the first cohort
        </a>
        <p className="mt-3 text-sm text-gray-500">
          One questionnaire saves $500+ of internal labor. Keeps getting better.
        </p>
      </div>

      <footer className="text-sm text-gray-400 dark:text-gray-600">
        Built with <a href="https://cto.new" className="underline hover:text-gray-600">cto.new</a>
        {" · "}
        <a href={`mailto:${EMAIL}`} className="underline hover:text-gray-600">Contact</a>
      </footer>
    </main>
  );
}
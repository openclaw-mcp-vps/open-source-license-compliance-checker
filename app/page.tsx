export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-xs text-[#58a6ff] mb-6 uppercase tracking-widest">
          Legal Compliance Tool
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Scan Codebases for{" "}
          <span className="text-[#58a6ff]">License Violations</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your <code className="text-[#58a6ff] bg-[#161b22] px-1 rounded">package.json</code> or{" "}
          <code className="text-[#58a6ff] bg-[#161b22] px-1 rounded">requirements.txt</code> and instantly detect license conflicts, copyleft restrictions, and commercial use violations — with severity levels and fix suggestions.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Deep License Detection", desc: "Fetches live data from npm and PyPI registries for accurate results." },
          { icon: "⚠️", title: "Severity Ratings", desc: "Critical, high, and low severity flags so you know what to fix first." },
          { icon: "✅", title: "Remediation Advice", desc: "Actionable suggestions to swap or relicense problematic dependencies." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
            <p className="text-[#8b949e] text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited scans",
              "npm & PyPI registry lookups",
              "Severity-ranked violation reports",
              "Remediation suggestions",
              "CSV/PDF export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which file formats are supported?",
              a: "We support package.json (Node.js/npm) and requirements.txt (Python/PyPI). More formats like Gemfile and go.mod are on the roadmap."
            },
            {
              q: "How do you determine license conflicts?",
              a: "We fetch license metadata directly from npm and PyPI registries, then cross-reference against a curated conflict matrix covering GPL, AGPL, LGPL, MIT, Apache, and proprietary licenses."
            },
            {
              q: "Is my code or dependency data stored?",
              a: "No. Uploaded files are processed in-memory and discarded immediately after analysis. We never store your dependency data."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 text-sm">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} LicenseGuard. Built for developers and legal teams.
      </footer>
    </main>
  );
}

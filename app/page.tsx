import Link from 'next/link';
import { efSkills } from '../data/efSkills';

export default function HomePage() {
  return (
    <div className="grid gap-6">
      <section className="card space-y-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white">ExecuPlay Teens (14–18)</h1>
          <p className="text-slate-300">
            Interactive, browser-based simulations that build executive functioning habits. Designed for home self-study and
            classroom facilitation with the same codebase.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/onboarding" className="btn">
            Start onboarding
          </Link>
          <Link href="/teacher" className="rounded-lg border border-tealAccent px-4 py-2 text-tealAccent hover:bg-tealAccent/10">
            Explore classroom mode
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3">
            <p className="font-semibold text-white">Sessions</p>
            <p className="text-sm text-slate-300">10–20 min with 5–7 min micro-sessions. Core loop: simulate → decide → outcome → reflect → retry.</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3">
            <p className="font-semibold text-white">Accessibility & Safety</p>
            <p className="text-sm text-slate-300">Keyboard-first, captions, reduced motion, no ads or external links, privacy-first analytics.</p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3">
            <p className="font-semibold text-white">Guardrails</p>
            <p className="text-sm text-slate-300">Practice tool only—no clinical claims. Metrics show habit signals, not diagnoses.</p>
          </div>
        </div>
      </section>
      <section className="card space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-white">EF Skill Taxonomy</p>
          <span className="text-xs text-slate-400">Mapped to CASEL/ISTE/CCSS where applicable</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {efSkills.map((skill) => (
            <div key={skill.id} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm">
              <p className="font-semibold text-white">{skill.name}</p>
              <p className="text-slate-300">{skill.definition}</p>
              <p className="mt-2 text-xs text-slate-400">Measurable behaviors</p>
              <ul className="list-disc pl-4 text-slate-200">
                {skill.measurableBehaviors.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-slate-400">Improvement looks like</p>
              <ul className="list-disc pl-4 text-slate-200">
                {skill.improvementSignals.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-rose-300">Do not infer: {skill.guardrails.join('; ')}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

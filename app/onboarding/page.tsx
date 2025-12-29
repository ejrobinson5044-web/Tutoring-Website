'use client';

import { efSkills } from '../../data/efSkills';
import { useAppStore } from '../../store/useAppStore';

export default function OnboardingPage() {
  const { selectedSkills, toggleSkill, mode } = useAppStore();

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Onboarding (14–18)</h1>
          <p className="text-slate-300">Choose 2–3 skills and a weekly plan. Mode: {mode}</p>
        </div>
        <p className="text-xs text-slate-400">No ads • No chat • Privacy-first</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {efSkills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => toggleSkill(skill.id)}
            className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
              selectedSkills.includes(skill.id)
                ? 'border-tealAccent bg-tealAccent/10 text-white'
                : 'border-slate-700 bg-slate-900/70 text-slate-200'
            }`}
          >
            <p className="font-semibold">{skill.name}</p>
            <p className="text-xs text-slate-300">{skill.definition}</p>
          </button>
        ))}
      </div>
      <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm text-slate-200">
        <p className="font-semibold text-white">Weekly plan</p>
        <p>Pick 3 sessions of 15 minutes or 5 micro-sessions (7 minutes) to fit your schedule.</p>
        <ul className="mt-2 list-disc pl-4 text-xs text-slate-300">
          <li>Streaks and reminders are optional and respectful.</li>
          <li>Parents can view high-level progress only.</li>
          <li>Progress and reflections stay private unless you opt to share in class mode.</li>
        </ul>
      </div>
    </div>
  );
}

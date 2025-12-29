'use client';

import { LevelConfig } from '../data/levelConfigs';
import { StandardsPanel } from './StandardsPanel';
import { GameShell } from './GameShell';
import { ScoringEngine } from './ScoringEngine';

interface LevelEngineProps {
  level: LevelConfig;
}

export const LevelEngine = ({ level }: LevelEngineProps) => {
  const scoring = ScoringEngine.calculate(level, { choicesMade: 3, streak: 2, recoveryQuality: 0.7 });

  return (
    <GameShell title={`${level.title}`} description={level.scenario}>
      <div className="space-y-3">
        <p className="text-slate-200">{level.scenario}</p>
        <div className="flex flex-wrap gap-2">
          {level.options.map((option) => (
            <button key={option} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-left text-sm text-white hover:border-tealAccent">
              {option}
            </button>
          ))}
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm text-slate-200">
          <p className="font-semibold text-white">Scoring preview</p>
          <p>Rule: {level.scoringRules}</p>
          <p>Estimated score: {Math.round(scoring.total * 100)} / 100</p>
          <p className="text-xs text-slate-400">Metrics are practice signals, not diagnoses.</p>
        </div>
        <StandardsPanel mapping={level.standardsMapping} />
        <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm text-slate-200">
          <p className="font-semibold text-white">Reflection</p>
          <p>{level.reflectionPrompt}</p>
          <label className="mt-2 block text-xs text-slate-400">Optional journal (kept private by default)</label>
          <textarea className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/80 p-2 text-softGray" rows={3} placeholder="Type your takeaway and where you'll apply it." />
          <p className="mt-2 text-xs text-slate-400">Transfer prompt: Where will you use this this week?</p>
        </div>
        <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-xs text-slate-300">
          <p className="font-semibold text-white">Teacher facilitation</p>
          <p>{level.teacherNotes}</p>
        </div>
      </div>
    </GameShell>
  );
};

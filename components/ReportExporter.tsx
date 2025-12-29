'use client';

import { mockAttempts } from '../data/mockData';

export const ReportExporter = () => {
  const exportCsv = () => {
    const header = 'userId,gameId,levelId,score,duration';
    const rows = mockAttempts.map((a) => `${a.userId},${a.gameId},${a.levelId},${a.score},${a.duration}`).join('\n');
    const csv = `${header}\n${rows}`;
    return csv;
  };

  const exportJson = () => JSON.stringify(mockAttempts, null, 2);

  return (
    <div className="card space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <p className="font-semibold text-white">Report Exporter</p>
        <span className="text-xs text-slate-400">CSV/JSON (no PII; practice metrics only)</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="btn" onClick={() => navigator.clipboard.writeText(exportCsv())}>
          Copy CSV
        </button>
        <button className="btn" onClick={() => navigator.clipboard.writeText(exportJson())}>
          Copy JSON
        </button>
      </div>
      <pre className="overflow-auto rounded bg-slate-950 p-3 text-xs text-slate-300" aria-label="Sample export preview">
{exportCsv()}
      </pre>
    </div>
  );
};

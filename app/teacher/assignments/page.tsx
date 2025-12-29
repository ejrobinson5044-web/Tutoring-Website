import { mockAssignments, games } from '../../../data/mockData';

export default function AssignmentsPage() {
  return (
    <div className="grid gap-4">
      <div className="card">
        <h1 className="text-2xl font-bold text-white">Assignments</h1>
        <p className="text-slate-300">Assign levels with due dates and target skills. Export practice data without PII.</p>
      </div>
      <div className="card space-y-3">
        <div className="grid gap-3 md:grid-cols-2">
          {mockAssignments.map((assign) => (
            <div key={assign.id} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm">
              <p className="font-semibold text-white">{assign.gameId}</p>
              <p>Levels: {assign.levelRange}</p>
              <p>Due: {assign.dueDate}</p>
              <p className="text-xs text-slate-400">Skill: {assign.targetSkill}</p>
              <p className="text-xs text-tealAccent">Flagged: may benefit from support</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <p className="font-semibold text-white">Games overview</p>
        <ul className="list-disc pl-4 text-sm text-slate-200">
          {games.map((game) => (
            <li key={game.id}> {game.name}: {game.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

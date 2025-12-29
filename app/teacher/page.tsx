import Link from 'next/link';
import { mockAssignments, mockClasses } from '../../data/mockData';

export default function TeacherPage() {
  return (
    <div className="grid gap-4">
      <div className="card">
        <h1 className="text-2xl font-bold text-white">Teacher Dashboard</h1>
        <p className="text-slate-300">Create classes, assign activities, and review aggregated progress.</p>
        <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
          <span className="rounded bg-slate-800 px-3 py-1">Flags say “may benefit from support” only</span>
          <span className="rounded bg-slate-800 px-3 py-1">Export CSV/JSON</span>
        </div>
      </div>
      <div className="card space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-white">Classes</p>
          <Link href="/teacher/assignments" className="text-tealAccent">
            Go to assignments
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {mockClasses.map((cls) => (
            <Link key={cls.id} href={`/teacher/classes/${cls.id}`} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3">
              <p className="font-semibold text-white">{cls.name}</p>
              <p className="text-sm text-slate-300">Join code: {cls.joinCode}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="card space-y-3">
        <p className="font-semibold text-white">Recent assignments</p>
        <div className="grid gap-3 md:grid-cols-3">
          {mockAssignments.map((assign) => (
            <div key={assign.id} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm">
              <p className="font-semibold text-white">{assign.gameId}</p>
              <p>Levels: {assign.levelRange}</p>
              <p>Due: {assign.dueDate}</p>
              <p className="text-xs text-slate-400">Skill: {assign.targetSkill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

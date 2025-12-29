import Link from 'next/link';
import { appData, useAppStore } from '../../store/useAppStore';
import { ReportExporter } from '../../components/ReportExporter';

export default function DashboardPage() {
  const { selectedSkills, mode } = useAppStore();

  return (
    <div className="grid gap-4">
      <div className="card space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Student Dashboard</h1>
            <p className="text-slate-300">Mode: {mode} • Goals: {selectedSkills.join(', ')}</p>
          </div>
          <Link href="/settings/privacy" className="text-sm text-tealAccent">
            Privacy & data controls
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {appData.mockSkillSnapshots.map((snap) => (
            <div key={snap.skillId} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm">
              <p className="font-semibold text-white">{snap.skillId}</p>
              <p className="text-slate-300">Rolling score: {(snap.rollingScore * 100).toFixed(0)}%</p>
              <p className="text-xs text-slate-400">Updated {snap.updatedAt} • Practice signal only</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-white">Assignments & Home Plan</p>
          <Link href="/teacher/assignments" className="text-sm text-tealAccent">
            View classroom assignments
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {appData.mockAssignments.map((assignment) => (
            <div key={assignment.id} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm">
              <p className="font-semibold text-white">{assignment.gameId}</p>
              <p>Levels: {assignment.levelRange}</p>
              <p>Due: {assignment.dueDate}</p>
              <p className="text-xs text-slate-400">Target skill: {assignment.targetSkill}</p>
            </div>
          ))}
        </div>
      </div>
      <ReportExporter />
    </div>
  );
}

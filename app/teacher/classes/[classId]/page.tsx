import { notFound } from 'next/navigation';
import { mockAssignments, mockClasses } from '../../../../data/mockData';

interface Props {
  params: { classId: string };
}

export default function ClassDetailPage({ params }: Props) {
  const classroom = mockClasses.find((c) => c.id === params.classId);
  const assignments = mockAssignments.filter((a) => a.classId === params.classId);

  if (!classroom) return notFound();

  return (
    <div className="grid gap-4">
      <div className="card">
        <h1 className="text-2xl font-bold text-white">{classroom.name}</h1>
        <p className="text-slate-300">Join code: {classroom.joinCode}</p>
        <p className="text-xs text-slate-400">Students see private progress; no public leaderboard.</p>
      </div>
      <div className="card space-y-3">
        <p className="font-semibold text-white">Assignments</p>
        {assignments.map((assign) => (
          <div key={assign.id} className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm">
            <p className="font-semibold text-white">{assign.gameId}</p>
            <p>Levels: {assign.levelRange}</p>
            <p>Due: {assign.dueDate}</p>
            <p className="text-xs text-slate-400">Target skill: {assign.targetSkill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { levelConfigs } from '../../../data/levelConfigs';
import { games } from '../../../data/mockData';
import Link from 'next/link';

interface Props {
  params: { gameId: string };
}

export default function GameDetailPage({ params }: Props) {
  const game = games.find((g) => g.id === params.gameId);
  const levels = levelConfigs.filter((l) => l.gameId === params.gameId);

  if (!game) {
    return <p className="text-slate-200">Game not found.</p>;
  }

  return (
    <div className="grid gap-4">
      <div className="card">
        <h1 className="text-2xl font-bold text-white">{game.name}</h1>
        <p className="text-slate-300">{game.description}</p>
        <p className="mt-2 text-sm text-slate-400">Intro lesson: 90 seconds (skippable). Coaching tips optional.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {levels.map((level) => (
          <div key={level.levelId} className="card text-sm">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-white">{level.title}</p>
              <Link className="text-tealAccent" href={`/play/${level.gameId}/${level.levelId}`}>
                Play mock
              </Link>
            </div>
            <p className="text-slate-300">Primary: {level.primarySkill}</p>
            <p className="text-slate-400">Difficulty: {level.difficulty.pacing}</p>
            <p className="text-xs text-slate-500">Reflection: {level.reflectionPrompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

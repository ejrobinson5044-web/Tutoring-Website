import { notFound } from 'next/navigation';
import { levelConfigs } from '../../../../data/levelConfigs';
import { LevelEngine } from '../../../../components/LevelEngine';

interface Props {
  params: { gameId: string; levelId: string };
}

export default function PlayLevelPage({ params }: Props) {
  const level = levelConfigs.find((l) => l.levelId === params.levelId && l.gameId === params.gameId);

  if (!level) return notFound();

  return <LevelEngine level={level} />;
}

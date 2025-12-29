import { LevelConfig } from '../data/levelConfigs';

interface ScoreInput {
  choicesMade: number;
  streak: number;
  recoveryQuality: number; // 0-1
}

export const ScoringEngine = {
  calculate(level: LevelConfig, input: ScoreInput) {
    const base = input.choicesMade * 5;
    const streakBonus = input.streak * 4;
    const recovery = input.recoveryQuality * 20;
    const pacingFactor = level.difficulty.timePressure * 2;
    const total = (base + streakBonus + recovery + pacingFactor) / 100;
    return {
      detail: { base, streakBonus, recovery, pacingFactor },
      total: Math.min(1, Number(total.toFixed(2)))
    };
  }
};

export default ScoringEngine;

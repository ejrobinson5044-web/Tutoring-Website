import { describe, expect, it } from 'vitest';
import { levelConfigs } from '../data/levelConfigs';
import { ScoringEngine } from '../components/ScoringEngine';

describe('ScoringEngine', () => {
  const level = levelConfigs[0];
  it('calculates score within bounds', () => {
    const result = ScoringEngine.calculate(level, { choicesMade: 4, streak: 3, recoveryQuality: 0.8 });
    expect(result.total).toBeGreaterThan(0);
    expect(result.total).toBeLessThanOrEqual(1);
  });

  it('increases with better recovery', () => {
    const low = ScoringEngine.calculate(level, { choicesMade: 2, streak: 1, recoveryQuality: 0.2 });
    const high = ScoringEngine.calculate(level, { choicesMade: 2, streak: 1, recoveryQuality: 0.9 });
    expect(high.total).toBeGreaterThan(low.total);
  });
});

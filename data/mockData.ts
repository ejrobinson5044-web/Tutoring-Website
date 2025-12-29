import { LevelConfig, levelConfigs } from './levelConfigs';
import { EfSkillKey } from './efSkills';

type Metrics = Record<string, number>;

export const games = [
  { id: 'deadline-lab', name: 'Deadline Lab', description: 'Plan around deadlines with calendars and tradeoffs.' },
  { id: 'distraction-budget', name: 'Distraction Budget', description: 'Manage focus budget when interruptions appear.' },
  { id: 'heat-check', name: 'Heat Check', description: 'Choose steady responses when emotions spike.' }
];

export const mockClasses = [
  { id: 'class-1', name: 'Period 3 EF Skills', teacherId: 'teacher-1', joinCode: 'JOIN-8842' },
  { id: 'class-2', name: 'After-School Study Lab', teacherId: 'teacher-1', joinCode: 'JOIN-6130' }
];

export const mockAssignments = [
  {
    id: 'assign-1',
    classId: 'class-1',
    gameId: 'deadline-lab',
    levelRange: '1-2',
    dueDate: '2025-01-12',
    targetSkill: 'planning-prioritization' as EfSkillKey
  },
  {
    id: 'assign-2',
    classId: 'class-1',
    gameId: 'distraction-budget',
    levelRange: '1-3',
    dueDate: '2025-01-15',
    targetSkill: 'inhibitory-control' as EfSkillKey
  }
];

export const mockAttempts: { userId: string; gameId: string; levelId: string; score: number; metrics: Metrics; duration: number }[] = [
  {
    userId: 'student-1',
    gameId: 'deadline-lab',
    levelId: 'deadline-lab-1',
    score: 78,
    metrics: { planQuality: 0.78, procrastinationDelay: 0.2, completionRate: 1 },
    duration: 540
  },
  {
    userId: 'student-1',
    gameId: 'distraction-budget',
    levelId: 'distraction-budget-1',
    score: 82,
    metrics: { focusStreak: 0.8, interruptionHandling: 0.75 },
    duration: 480
  }
];

export const mockSkillSnapshots = [
  { userId: 'student-1', skillId: 'planning-prioritization', rollingScore: 0.71, updatedAt: '2025-01-10' },
  { userId: 'student-1', skillId: 'inhibitory-control', rollingScore: 0.76, updatedAt: '2025-01-10' }
];

export const findLevel = (id: string): LevelConfig | undefined => levelConfigs.find((l) => l.levelId === id);

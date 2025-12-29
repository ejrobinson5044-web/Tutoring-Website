import { create } from 'zustand';
import { levelConfigs } from '../data/levelConfigs';
import { efSkills } from '../data/efSkills';
import { mockAssignments, mockClasses, mockAttempts, mockSkillSnapshots } from '../data/mockData';

export type UserMode = 'home' | 'classroom';
export type UserRole = 'student' | 'teacher' | 'parent';

interface AppState {
  mode: UserMode;
  role: UserRole;
  selectedSkills: string[];
  setMode: (mode: UserMode) => void;
  setRole: (role: UserRole) => void;
  toggleSkill: (skill: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  mode: 'home',
  role: 'student',
  selectedSkills: ['planning-prioritization', 'time-management'],
  setMode: (mode) => set({ mode }),
  setRole: (role) => set({ role }),
  toggleSkill: (skill) => {
    const { selectedSkills } = get();
    if (selectedSkills.includes(skill)) {
      set({ selectedSkills: selectedSkills.filter((s) => s !== skill) });
    } else {
      set({ selectedSkills: [...selectedSkills, skill] });
    }
  }
}));

export const appData = {
  levelConfigs,
  efSkills,
  mockAssignments,
  mockClasses,
  mockAttempts,
  mockSkillSnapshots
};

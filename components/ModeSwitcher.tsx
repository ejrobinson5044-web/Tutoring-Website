'use client';

import { useAppStore } from '../store/useAppStore';

export const ModeSwitcher = () => {
  const { mode, setMode, role, setRole } = useAppStore();

  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-800 px-3 py-2 text-sm">
      <label className="text-xs text-slate-300">Mode</label>
      <select
        className="rounded bg-slate-900 px-2 py-1 text-softGray"
        value={mode}
        onChange={(e) => setMode(e.target.value as 'home' | 'classroom')}
      >
        <option value="home">Home</option>
        <option value="classroom">Classroom</option>
      </select>
      <label className="text-xs text-slate-300">Role</label>
      <select
        className="rounded bg-slate-900 px-2 py-1 text-softGray"
        value={role}
        onChange={(e) => setRole(e.target.value as any)}
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="parent">Parent</option>
      </select>
    </div>
  );
};

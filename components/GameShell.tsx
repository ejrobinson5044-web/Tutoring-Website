'use client';

import { ReactNode } from 'react';

interface GameShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const GameShell = ({ title, description, children }: GameShellProps) => {
  return (
    <section className="card space-y-3">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-sm text-slate-300">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <span className="rounded bg-slate-800 px-3 py-1">Keyboard-first</span>
          <span className="rounded bg-slate-800 px-3 py-1">Captions</span>
          <span className="rounded bg-slate-800 px-3 py-1">Reduced motion</span>
        </div>
      </header>
      <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4">{children}</div>
      <footer className="flex flex-wrap gap-3 text-xs text-slate-400">
        <span>Session length: 5–20 min</span>
        <span>Core loop: simulate → decide → outcome → reflect → retry</span>
        <span>Transfer prompt included</span>
      </footer>
    </section>
  );
};

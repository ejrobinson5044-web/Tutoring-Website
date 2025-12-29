import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ModeSwitcher } from '../components/ModeSwitcher';

export const metadata = {
  title: 'ExecuPlay Teens',
  description: 'Interactive EF practice for teens in home or classroom modes.'
};

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/games/deadline-lab', label: 'Games' },
  { href: '/teacher', label: 'Teacher' },
  { href: '/settings/privacy', label: 'Privacy' }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-midnight text-softGray">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link href="/" className="text-2xl font-bold text-tealAccent">
                ExecuPlay Teens
              </Link>
              <p className="text-sm text-slate-300">Practice EF skills in 10–20 minute sessions.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full bg-slate-800 px-3 py-2 text-sm font-semibold text-softGray hover:bg-slate-700">
                  {link.label}
                </Link>
              ))}
              <ModeSwitcher />
            </div>
          </header>
          <main className="grid gap-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

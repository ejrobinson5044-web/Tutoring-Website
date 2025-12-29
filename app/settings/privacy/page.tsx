export default function PrivacyPage() {
  return (
    <div className="card space-y-3">
      <h1 className="text-2xl font-bold text-white">Privacy & Data Controls</h1>
      <p className="text-slate-300">Privacy-first analytics: store only what is needed for practice progress. Offer deletion and export.</p>
      <ul className="list-disc pl-4 text-sm text-slate-200">
        <li>No ads, no external links, no chat for minors.</li>
        <li>Reflections are private by default; classroom mode lets students opt to share with teacher.</li>
        <li>Parents see high-level progress only, not journal text.</li>
        <li>Metrics show habit practice, not diagnoses or clinical interpretations.</li>
        <li>Request deletion anytime; data minimization by design.</li>
      </ul>
    </div>
  );
}

import { LevelConfig } from '../data/levelConfigs';

interface Props {
  mapping: LevelConfig['standardsMapping'];
}

export const StandardsPanel = ({ mapping }: Props) => (
  <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-sm text-slate-200">
    <p className="font-semibold text-white">Standards Mapping</p>
    <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3">
      <div>
        <p className="text-xs text-slate-400">CASEL</p>
        <ul className="list-disc pl-4">
          {mapping.CASEL.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs text-slate-400">ISTE</p>
        <ul className="list-disc pl-4">
          {mapping.ISTE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs text-slate-400">CCSS (if applicable)</p>
        <ul className="list-disc pl-4">
          {(mapping.CCSS ?? []).length === 0 && <li>Not targeted in this level</li>}
          {(mapping.CCSS ?? []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

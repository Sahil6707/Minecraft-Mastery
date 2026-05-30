import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, ArrowRight, Zap, Leaf, Shield, Users, Skull, Compass, Cpu, Map } from 'lucide-react';
import { farms } from '../data/farms';
import { enchantments } from '../data/enchantments';
import { biomes } from '../data/biomes';
import { mobs } from '../data/mobs';
import { structures } from '../data/structures';
import { villagers } from '../data/villagers';
import { dimensions } from '../data/dimensions';
import { redstoneTutorials } from '../data/redstone';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tab: string;
  icon: React.ReactNode;
}

interface GlobalSearchProps {
  onNavigate: (tab: string) => void;
  onClose?: () => void;
  autoFocus?: boolean;
}

const categoryColor: Record<string, string> = {
  Farm: 'bg-green-500/10 text-green-300 border-green-500/20',
  Enchantment: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  Biome: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  Mob: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
  Structure: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  Villager: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  Dimension: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
  Redstone: 'bg-red-500/10 text-red-300 border-red-500/20',
};

const categoryIcons: Record<string, React.ReactNode> = {
  Farm: <Leaf className="w-3 h-3" />,
  Enchantment: <Zap className="w-3 h-3" />,
  Biome: <Map className="w-3 h-3" />,
  Mob: <Skull className="w-3 h-3" />,
  Structure: <Shield className="w-3 h-3" />,
  Villager: <Users className="w-3 h-3" />,
  Dimension: <Compass className="w-3 h-3" />,
  Redstone: <Cpu className="w-3 h-3" />,
};

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  farms.forEach((f) =>
    results.push({
      id: `farm-${f.id}`,
      title: f.name,
      subtitle: f.description?.slice(0, 65) || f.scale || '',
      category: 'Farm',
      tab: 'farms',
      icon: categoryIcons['Farm'],
    })
  );

  enchantments.forEach((e) =>
    results.push({
      id: `enc-${e.name}`,
      title: e.name,
      subtitle: e.description?.slice(0, 65) || String(e.maxLevel) || '',
      category: 'Enchantment',
      tab: 'enchantments',
      icon: categoryIcons['Enchantment'],
    })
  );

  biomes.forEach((b) =>
    results.push({
      id: `bio-${b.name}`,
      title: b.name,
      subtitle: b.description?.slice(0, 65) || b.climate || '',
      category: 'Biome',
      tab: 'biomes',
      icon: categoryIcons['Biome'],
    })
  );

  mobs.forEach((m) =>
    results.push({
      id: `mob-${m.name}`,
      title: m.name,
      subtitle: `${m.category} · ${m.spawnConditions?.slice(0, 45) || ''}`,
      category: 'Mob',
      tab: 'mobs',
      icon: categoryIcons['Mob'],
    })
  );

  structures.forEach((s) =>
    results.push({
      id: `str-${s.name}`,
      title: s.name,
      subtitle: s.spawnConditions?.slice(0, 65) || s.difficulty || '',
      category: 'Structure',
      tab: 'structures',
      icon: categoryIcons['Structure'],
    })
  );

  villagers.forEach((v) =>
    results.push({
      id: `vil-${v.profession}`,
      title: v.profession,
      subtitle: `Workstation: ${v.workstation}`,
      category: 'Villager',
      tab: 'villagers',
      icon: categoryIcons['Villager'],
    })
  );

  dimensions.forEach((d) =>
    results.push({
      id: `dim-${d.name}`,
      title: d.name,
      subtitle: d.tagline || d.description?.slice(0, 65) || '',
      category: 'Dimension',
      tab: 'dimensions',
      icon: categoryIcons['Dimension'],
    })
  );

  redstoneTutorials.forEach((r) =>
    results.push({
      id: `red-${r.title}`,
      title: r.title,
      subtitle: r.description?.slice(0, 65) || r.category || '',
      category: 'Redstone',
      tab: 'redstone',
      icon: categoryIcons['Redstone'],
    })
  );

  return results;
}

const ALL_RESULTS = buildIndex();

export default function GlobalSearch({ onNavigate, onClose, autoFocus }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (autoFocus) setTimeout(() => inputRef.current?.focus(), 50);
  }, [autoFocus]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); setHighlighted(0); return; }
    const q = query.toLowerCase();
    const filtered = ALL_RESULTS.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subtitle.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(filtered);
    setHighlighted(0);
  }, [query]);

  const handleSelect = useCallback(
    (result: SearchResult) => {
      onNavigate(result.tab);
      setQuery('');
      setResults([]);
      onClose?.();
    },
    [onNavigate, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted((h) => Math.min(h + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlighted((h) => Math.max(h - 1, 0)); }
    else if (e.key === 'Enter') { if (results[highlighted]) handleSelect(results[highlighted]); }
    else if (e.key === 'Escape') { setQuery(''); setResults([]); onClose?.(); }
  };

  useEffect(() => {
    const el = listRef.current?.children[highlighted] as HTMLElement;
    el?.scrollIntoView({ block: 'nearest' });
  }, [highlighted]);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search farms, mobs, enchantments, biomes…"
          className="w-full pl-9 pr-9 py-2 rounded-lg text-sm bg-slate-800/80 border border-emerald-900/40 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/60 transition-all font-sans"
          aria-label="Global search"
          aria-autocomplete="list"
          aria-expanded={results.length > 0}
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); inputRef.current?.focus(); }}
            className="absolute right-2.5 p-0.5 text-gray-500 hover:text-emerald-400 transition-colors rounded"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/98 backdrop-blur-xl border border-emerald-900/40 rounded-xl shadow-2xl shadow-black/60 z-[300] overflow-hidden">
          <ul ref={listRef} role="listbox" className="max-h-[22rem] overflow-y-auto divide-y divide-slate-800/50">
            {results.map((r, idx) => (
              <li
                key={r.id}
                role="option"
                aria-selected={idx === highlighted}
                onClick={() => handleSelect(r)}
                onMouseEnter={() => setHighlighted(idx)}
                className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors group ${
                  idx === highlighted ? 'bg-emerald-950/50' : 'hover:bg-slate-800/50'
                }`}
              >
                <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold border shrink-0 ${categoryColor[r.category]}`}>
                  {r.icon}
                  {r.category}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate leading-tight">{r.title}</p>
                  <p className="text-[11px] text-gray-500 truncate leading-tight mt-0.5">{r.subtitle}</p>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-colors ${idx === highlighted ? 'text-emerald-400' : 'text-gray-700 group-hover:text-gray-500'}`} />
              </li>
            ))}
          </ul>
          <div className="px-4 py-1.5 border-t border-slate-800/60 flex items-center gap-3 text-[9px] font-mono text-gray-700 bg-slate-950/50">
            <span><kbd className="bg-slate-800 px-1 py-0.5 rounded border border-slate-700 text-gray-500">↑↓</kbd> navigate</span>
            <span><kbd className="bg-slate-800 px-1 py-0.5 rounded border border-slate-700 text-gray-500">↵</kbd> open</span>
            <span><kbd className="bg-slate-800 px-1 py-0.5 rounded border border-slate-700 text-gray-500">Esc</kbd> close</span>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { biomes } from '../data/biomes';
import { Search, Info, Trees } from 'lucide-react';

export default function BiomePanel() {
  const [search, setSearch] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string>('All');

  const filteredBiomes = biomes.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase()) ||
      b.resources.some((r) => r.toLowerCase().includes(search.toLowerCase())) ||
      b.mobs.some((m) => m.toLowerCase().includes(search.toLowerCase()));

    const matchesRarity = selectedRarity === 'All' || b.rarity === selectedRarity;

    return matchesSearch && matchesRarity;
  });

  return (
    <div className="space-y-6">
      {/* Filtering Header card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955/60 rounded-xl p-5 shadow-md space-y-4 transition-colors">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="w-4 h-4 text-gray-400" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search biomes (e.g., cherry blossom, desert, deep dark, moss)..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-emerald-955/80 rounded-lg text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-1 font-mono text-xs">
            {['All', 'Common', 'Uncommon', 'Rare', 'Very Rare'].map((rar) => (
              <button
                key={rar}
                onClick={() => setSelectedRarity(rar)}
                className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                  selectedRarity === rar
                    ? 'bg-emerald-955/40 text-emerald-305 border border-emerald-555/30'
                    : 'bg-neutral-955 border border-emerald-950/40 text-gray-400 hover:text-white'
                }`}
              >
                {rar.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Biomes */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredBiomes.map((b) => (
          <div
            key={b.name}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955 rounded-2xl overflow-hidden flex flex-col justify-between minecraft-card backdrop-blur-xs"
          >
            {/* Headline Block */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase border ${
                        b.rarity === 'Common'
                          ? 'bg-neutral-900 text-gray-400 border border-neutral-800'
                          : b.rarity === 'Uncommon'
                          ? 'bg-blue-950/40 text-blue-405 border border-blue-900/30'
                          : b.rarity === 'Rare'
                          ? 'bg-amber-955/40 text-amber-400 border border-amber-900/40'
                          : 'bg-fuchsia-955/40 text-fuchsia-400 border border-fuchsia-900/40 animate-pulse'
                      }`}
                    >
                      {b.rarity} Rarity
                    </span>
                    <span className="text-[10px] font-mono text-gray-450">
                      Climate: {b.climate}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-xl text-white mt-2">{b.name}</h4>
                </div>
                <Trees className="w-5 h-5 text-emerald-450 shrink-0" />
              </div>

              <p className="text-xs text-gray-205 font-sans leading-relaxed font-medium">
                {b.description}
              </p>

              {/* Resource & Mobs checklists tags */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase block">
                    Rich Resources
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {b.resources.map((res, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-900 border border-emerald-950/40 text-gray-300 px-2 py-0.5 rounded font-mono shadow-xs"
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase block">
                    Spawning Monsters
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {b.mobs.map((m, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-900 border border-emerald-950/40 text-gray-300 px-2 py-0.5 rounded font-mono shadow-xs"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase block">
                    Key structures
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {b.structures.length > 0 ? (
                      b.structures.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono shadow-xs"
                        >
                          {s}
                        </span>
                      ))
                    ) : (
                      <span className="text-[10px] font-mono text-gray-500">None spawned</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Survival Guide Bottom block */}
            <div className="bg-neutral-955 p-5 border-t border-emerald-950/45 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-400 font-bold" /> SURVIVAL TIPS & STRATEGY
              </span>
              <ul className="list-disc pl-4 text-xs font-sans text-gray-300 space-y-1.5 leading-relaxed font-medium">
                {b.survivalTips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

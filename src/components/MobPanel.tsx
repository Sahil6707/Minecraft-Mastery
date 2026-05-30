import React, { useState } from 'react';
import { mobs } from '../data/mobs';
import { Search, Heart, Skull, Zap, Droplet, Crosshair } from 'lucide-react';

export default function MobPanel() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredMobs = mobs.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.spawnConditions.toLowerCase().includes(search.toLowerCase()) ||
      m.drops.some((d) => d.toLowerCase().includes(search.toLowerCase())) ||
      m.weaknesses.some((w) => w.toLowerCase().includes(search.toLowerCase())) ||
      m.farmingTips.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = activeCategory === 'All' || m.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Renders visual representations of half-hearts
  const renderHeartRating = (halfHearts: number) => {
    const hearts = Math.round(halfHearts / 2);
    return (
      <div className="flex items-center gap-1 flex-wrap">
        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        <span className="font-mono text-xs font-bold text-gray-200">
          {halfHearts} HP ({hearts} Hearts)
        </span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Category Selection Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-xl p-5 shadow-md space-y-4 transition-colors">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="w-4 h-4 text-gray-400" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mob encyclopedia (drops, weaknesses, behavior)..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-955 border border-emerald-955/80 rounded-lg text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-1 font-mono text-xs">
            {['All', 'Passive', 'Neutral', 'Hostile'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-955/40 text-emerald-305 border border-emerald-555/30'
                    : 'bg-neutral-955 border border-emerald-950/40 text-gray-400 hover:text-white'
                }`}
              >
                {cat.toUpperCase()} MOBS
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mob cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMobs.map((mob) => (
          <div
            key={mob.name}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955/65 rounded-2xl overflow-hidden flex flex-col justify-between minecraft-card backdrop-blur-xs"
          >
            {/* Visual Red/Green Header accent based on hostility */}
            <div
              className={`h-1 w-full ${
                mob.category === 'Passive'
                  ? 'bg-teal-500 shadow-xs'
                  : mob.category === 'Neutral'
                  ? 'bg-amber-500 shadow-xs'
                  : 'bg-rose-550 shadow-xs'
              }`}
            />

            <div className="p-5 flex-1 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${
                        mob.category === 'Passive'
                          ? 'bg-teal-950/40 text-teal-400 border-teal-900/30'
                          : mob.category === 'Neutral'
                          ? 'bg-amber-955/40 text-amber-400 border border-amber-900/30'
                          : 'bg-rose-955/40 text-red-400 border border-rose-900/30'
                      }`}
                    >
                      {mob.category}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-lg text-white mt-2">{mob.name}</h4>
                </div>
                {mob.category === 'Hostile' ? (
                  <Skull className="w-5 h-5 text-red-400 shrink-0" />
                ) : (
                  <Heart className="w-5 h-5 text-teal-405 shrink-0" />
                )}
              </div>

              {/* Stats Box */}
              <div className="bg-neutral-950 p-3.5 rounded-lg border border-emerald-950/50 space-y-2 text-xs shadow-inner">
                <div className="flex justify-between items-center border-b border-emerald-950/30 pb-1.5">
                  <span className="text-gray-400 font-mono">Health capacity:</span>
                  {renderHeartRating(mob.health)}
                </div>
                <div className="flex justify-between items-center border-b border-emerald-950/30 pb-1.5 font-mono">
                  <span className="text-gray-400">Attack damage:</span>
                  <span className="font-bold text-white text-right">{mob.damage}</span>
                </div>
                <div className="font-mono pt-1 text-[11px] leading-relaxed">
                  <span className="text-gray-400 block font-bold">Spawn conditions:</span>
                  <p className="text-gray-300 mt-0.5 font-sans text-xs font-semibold">{mob.spawnConditions}</p>
                </div>
              </div>

              {/* Loot and Weaknesses tabs layout */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-emerald-300 flex items-center gap-1">
                    <Droplet className="w-3 h-3 text-emerald-400" /> Signature drops
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {mob.drops.map((drop, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-900 border border-emerald-950/40 text-gray-300 px-2 py-0.5 rounded font-mono shadow-xs"
                      >
                        {drop}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold text-red-400 flex items-center gap-1">
                    <Crosshair className="w-3 h-3 text-red-400" /> Weakness key
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {mob.weaknesses.map((weak, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-900 border border-emerald-950/40 text-gray-300 px-2 py-0.5 rounded font-mono shadow-xs"
                      >
                        {weak}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Farming instructions */}
            <div className="bg-neutral-950 p-5 border-t border-emerald-950/45 space-y-2.5">
              <span className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5 uppercase">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> Farm Mechanics & Tips
              </span>
              <p className="text-xs text-gray-300 font-sans leading-relaxed font-medium">
                {mob.farmingTips[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

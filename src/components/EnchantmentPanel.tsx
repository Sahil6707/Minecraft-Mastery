import React, { useState } from 'react';
import { enchantments } from '../data/enchantments';
import { Search, BookOpen, ArrowRightLeft, Sparkles, Award } from 'lucide-react';

const getGameStage = (name: string): 'Early Game' | 'Mid Game' | 'Late Game' | 'End Game' => {
  const early = ['Sharpness', 'Smite', 'Bane of Arthropods', 'Unbreaking', 'Efficiency', 'Protection', 'Fire Aspect', 'Power', 'Punch', 'Flame', 'Aqua Affinity'];
  const mid = ['Looting', 'Fortune', 'Silk Touch', 'Respiration', 'Depth Strider', 'Feather Falling', 'Sweeping Edge', 'Loyalty', 'Quick Charge', 'Piercing', 'Multishot'];
  const late = ['Riptide', 'Channeling'];
  if (early.includes(name)) return 'Early Game';
  if (mid.includes(name)) return 'Mid Game';
  if (late.includes(name)) return 'Late Game';
  return 'End Game';
};

const renderProgressionBadge = (stage: 'Early Game' | 'Mid Game' | 'Late Game' | 'End Game') => {
  const styles = {
    'Early Game': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Mid Game': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Late Game': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    'End Game': 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };
  const emoji = {
    'Early Game': '🟢 Early Game',
    'Mid Game': '🟡 Mid Game',
    'Late Game': '🟠 Late Game',
    'End Game': '🔴 End Game'
  };
  return (
    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 w-fit ${styles[stage]}`}>
      {emoji[stage]}
    </span>
  );
};

export default function EnchantmentPanel() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Side-by-Side compare states
  const [compareA, setCompareA] = useState<string>('Sharpness');
  const [compareB, setCompareB] = useState<string>('Smite');

  const filteredEnchants = enchantments.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      e.compatibleItems.some((item) => item.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || e.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getEnchantByName = (name: string) => enchantments.find((e) => e.name === name);

  const encA = getEnchantByName(compareA);
  const encB = getEnchantByName(compareB);

  return (
    <div className="space-y-8">
      {/* Interactive Compare Matrix Widget */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-xl overflow-hidden shadow-md transition-colors">
        <div className="bg-neutral-955 p-4 border-b border-emerald-950/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-emerald-400" />
            <h3 className="font-semibold font-display text-sm text-white uppercase tracking-wider">
              Enchantment side-by-side comparison system
            </h3>
          </div>
          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-500/20 font-bold">
            STRATEGY COMPLEMENTS
          </span>
        </div>

        <div className="p-5 bg-neutral-950/40 grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-emerald-950/50">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-gray-400">Weapon Modifier A</label>
            <select
              value={compareA}
              onChange={(e) => setCompareA(e.target.value)}
              className="bg-neutral-950 border border-emerald-950 text-gray-200 rounded p-1.5 text-xs focus:outline-none cursor-pointer shadow-sm outline-none"
            >
              {enchantments.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name} ({e.category})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-gray-400">Weapon Modifier B</label>
            <select
              value={compareB}
              onChange={(e) => setCompareB(e.target.value)}
              className="bg-neutral-950 border border-emerald-950 text-gray-200 rounded p-1.5 text-xs focus:outline-none cursor-pointer shadow-sm outline-none"
            >
              {enchantments.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name} ({e.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {encA && encB && (
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-emerald-950/40 p-6">
            {/* Compare A Column */}
            <div className="pb-6 md:pb-0 md:pr-6 space-y-4 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono text-emerald-300 font-bold">{encA.category}</span>
                <h4 className="font-display font-semibold text-lg text-white mt-0.5">{encA.name}</h4>
                <div className="mt-1.5">
                  {renderProgressionBadge(getGameStage(encA.name))}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-sans font-medium">{encA.description}</p>

              <div className="space-y-2 font-mono">
                <div className="flex justify-between bg-neutral-950 border border-emerald-950/45 p-2 rounded shadow-inner">
                  <span className="text-gray-450 text-xs">Max Level:</span>
                  <span className="font-bold text-white">{encA.maxLevel}</span>
                </div>
                <div className="flex justify-between bg-neutral-950 border border-emerald-950/45 p-2 rounded shadow-inner">
                  <span className="text-gray-455 text-xs">Compatible:</span>
                  <span className="font-bold text-emerald-300 text-right">{encA.compatibleItems.join(', ')}</span>
                </div>
                <div className="flex justify-between bg-neutral-950 border border-emerald-950/45 p-2 rounded shadow-inner">
                  <span className="text-gray-450 text-xs">Conflicts:</span>
                  <span className="text-red-400 text-right font-bold">
                    {encA.conflictingEnchantments.length > 0 ? encA.conflictingEnchantments.join(', ') : 'None'}
                  </span>
                </div>
                <div className="bg-neutral-950 border border-emerald-950/45 p-2 rounded space-y-1 shadow-inner">
                  <span className="text-gray-450 text-xs text-left block font-bold">Optimal Usage:</span>
                  <p className="text-gray-300 pr-1 text-left font-sans">{encA.bestUsage}</p>
                </div>
                <div className="bg-neutral-950 border border-emerald-950/45 p-2 rounded space-y-1 shadow-inner">
                  <span className="text-gray-450 text-xs block font-bold">Obtainment:</span>
                  <p className="text-gray-300 pr-1 font-sans">{encA.howToObtain}</p>
                </div>
              </div>
            </div>

            {/* Compare B Column */}
            <div className="pt-6 md:pt-0 md:pl-6 space-y-4 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono text-emerald-300 font-bold">{encB.category}</span>
                <h4 className="font-display font-semibold text-lg text-white mt-0.5">{encB.name}</h4>
                <div className="mt-1.5">
                  {renderProgressionBadge(getGameStage(encB.name))}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-sans font-medium">{encB.description}</p>

              <div className="space-y-2 font-mono">
                <div className="flex justify-between bg-neutral-950 border border-emerald-950/45 p-2 rounded shadow-inner">
                  <span className="text-gray-450 text-xs">Max Level:</span>
                  <span className="font-bold text-white">{encB.maxLevel}</span>
                </div>
                <div className="flex justify-between bg-neutral-950 border border-emerald-950/45 p-2 rounded shadow-inner">
                  <span className="text-gray-450 text-xs">Compatible:</span>
                  <span className="font-bold text-emerald-300 text-right">{encB.compatibleItems.join(', ')}</span>
                </div>
                <div className="flex justify-between bg-neutral-950 border border-emerald-950/45 p-2 rounded shadow-inner">
                  <span className="text-gray-455 text-xs">Conflicts:</span>
                  <span className="text-red-400 text-right font-bold">
                    {encB.conflictingEnchantments.length > 0 ? encB.conflictingEnchantments.join(', ') : 'None'}
                  </span>
                </div>
                <div className="bg-neutral-950 border border-emerald-950/45 p-2 rounded space-y-1 shadow-inner">
                  <span className="text-gray-450 text-xs text-left block font-bold">Optimal Usage:</span>
                  <p className="text-gray-300 pr-1 text-left font-sans">{encB.bestUsage}</p>
                </div>
                <div className="bg-neutral-950 border border-emerald-950/45 p-2 rounded space-y-1 shadow-inner">
                  <span className="text-gray-450 text-xs block font-bold">Obtainment:</span>
                  <p className="text-gray-300 pr-1 font-sans">{encB.howToObtain}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Catalog View */}
      <div className="space-y-6">
        {/* Enchanting setup screenshot */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 rounded-2xl p-5 shadow-sm space-y-3 backdrop-blur-xs">
          <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl border border-emerald-955/60 shadow-md">
            <img
              src="/enchanting_room.png"
              alt="Enchanting Setup Layout"
              loading="lazy"
              className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <p className="text-[10px] font-sans text-gray-400 text-center font-medium leading-relaxed">
            🟢 Enchanting Setup: Advanced level-30 enchanting setup surrounded by exactly 15 bookshelves to unlock high-tier spells.
          </p>
        </div>

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
                placeholder="Search enchantments list (e.g., silk, mending, swords)..."
                className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-emerald-955/80 rounded-lg text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 placeholder-gray-500"
              />
            </div>

            <div className="flex flex-wrap gap-1">
              {['All', 'Combat', 'Tool', 'Armor', 'Utility', 'Ranged'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-955/40 text-emerald-305 border border-emerald-555/30'
                      : 'bg-neutral-955 border border-emerald-950/40 text-gray-400 hover:text-white'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Enchantments list */}
        <div className="space-y-4">
          {filteredEnchants.length > 0 ? (
            filteredEnchants.map((ench) => (
              <div
                key={ench.name}
                className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955/60 rounded-2xl p-6 overflow-hidden minecraft-card backdrop-blur-xs group"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-display font-semibold text-lg text-white group-hover:text-emerald-400 transition-colors">
                          {ench.name}
                        </h4>
                        <span className="text-[9px] font-mono font-bold uppercase bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                          {ench.category}
                        </span>
                      </div>
                      <div className="mt-1.5">
                        {renderProgressionBadge(getGameStage(ench.name))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans font-medium">
                      {ench.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-gray-400 block uppercase font-bold tracking-wider flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Professional Pro-Tips
                      </span>
                      <ul className="list-disc pl-4 text-xs font-sans text-gray-300 mt-1 space-y-1 font-medium">
                        {ench.proTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Spec Box */}
                  <div className="bg-neutral-950 p-4 rounded-lg md:w-80 font-mono text-xs space-y-2 border border-emerald-950/50 shadow-inner">
                    <div className="flex justify-between border-b border-emerald-950/30 pb-1.5">
                      <span className="text-gray-400">Max Level:</span>
                      <span className="font-bold text-white">Level {ench.maxLevel}</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-950/30 pb-1.5">
                      <span className="text-gray-400">Compatible Components:</span>
                      <span className="font-semibold text-emerald-300 text-right">
                        {ench.compatibleItems.join(', ')}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-950/30 pb-1.5">
                      <span className="text-gray-400">Conflicts:</span>
                      <span className="text-red-400 font-bold">
                        {ench.conflictingEnchantments.length > 0
                          ? ench.conflictingEnchantments.join(', ')
                          : 'None'}
                      </span>
                    </div>
                    <div className="text-[11px] leading-relaxed text-gray-300 pt-1">
                      <b className="text-emerald-305 font-sans block text-[10px] uppercase font-bold mt-1 tracking-wide">
                        How to obtain:
                      </b>
                      {ench.howToObtain}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center bg-neutral-955 rounded-xl border border-emerald-950/50 font-mono text-gray-400 shadow-inner">
              No enchantments match your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

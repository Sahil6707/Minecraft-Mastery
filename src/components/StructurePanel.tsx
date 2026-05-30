import React, { useState } from 'react';
import { structures } from '../data/structures';
import { Search, Compass, Shield, Award, HelpCircle } from 'lucide-react';

const getStructureStage = (name: string): 'Early Game' | 'Mid Game' | 'Late Game' | 'End Game' => {
  const early = ['Village', 'Plains Village', 'Ruined Portal', 'Desert Temple', 'Igloo'];
  const mid = ['Jungle Temple', 'Pillager Outpost', 'Nether Fortress', 'Ocean Monument'];
  const late = ['Stronghold', 'Bastion Remnant', 'Woodland Mansion'];
  if (early.includes(name)) return 'Early Game';
  if (mid.includes(name)) return 'Mid Game';
  if (late.includes(name)) return 'Late Game';
  return 'End Game';
};

const getStructureDifficultyLabel = (difficulty: 'Easy' | 'Medium' | 'Hard' | 'Dangerous' | 'Extreme'): 'Beginner' | 'Intermediate' | 'Advanced' => {
  if (difficulty === 'Easy') return 'Beginner';
  if (difficulty === 'Medium') return 'Intermediate';
  return 'Advanced';
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

const renderDifficultyBadge = (difficulty: 'Beginner' | 'Intermediate' | 'Advanced') => {
  const styles = {
    'Beginner': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Intermediate': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Advanced': 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };
  const emoji = {
    'Beginner': '🟢 Beginner',
    'Intermediate': '🟡 Intermediate',
    'Advanced': '🔴 Advanced'
  };
  return (
    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 w-fit ${styles[difficulty]}`}>
      {emoji[difficulty]}
    </span>
  );
};

export default function StructurePanel() {
  const [search, setSearch] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const filteredStructures = structures.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.spawnConditions.toLowerCase().includes(search.toLowerCase()) ||
      s.loot.some((l) => l.toLowerCase().includes(search.toLowerCase())) ||
      s.strategy.some((str) => str.toLowerCase().includes(search.toLowerCase()));

    const matchesDiff = selectedDifficulty === 'All' || s.difficulty === selectedDifficulty;

    return matchesSearch && matchesDiff;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters panel */}
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
              placeholder="Search ruins and fortresses (e.g., mace, smithing template, ancient, gold)..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-emerald-955/80 rounded-lg text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-1 font-mono text-xs">
            {['All', 'Easy', 'Medium', 'Hard', 'Dangerous', 'Extreme'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg font-medium transition cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-emerald-955/40 text-emerald-305 border border-emerald-555/30 font-bold'
                    : 'bg-neutral-950 border border-emerald-950/40 text-gray-400 hover:text-white'
                }`}
              >
                {diff.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid displaying structures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStructures.map((struct) => (
          <div
            key={struct.name}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955/65 rounded-2xl overflow-hidden flex flex-col justify-between minecraft-card backdrop-blur-xs"
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded border ${
                        struct.difficulty === 'Easy'
                          ? 'bg-teal-950/40 text-teal-400 border-teal-900/30'
                          : struct.difficulty === 'Medium'
                          ? 'bg-blue-950/40 text-blue-400 border border-blue-900/30'
                          : struct.difficulty === 'Hard'
                          ? 'bg-amber-955/40 text-amber-400 border border-amber-900/30'
                          : 'bg-rose-955/45 text-red-400 border border-red-900/40'
                      }`}
                    >
                      {struct.difficulty} Difficulty
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-xl text-white mt-2">{struct.name}</h4>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {renderProgressionBadge(getStructureStage(struct.name))}
                    {renderDifficultyBadge(getStructureDifficultyLabel(struct.difficulty))}
                  </div>
                  {/* Contextual screenshot if Stronghold or Ancient City */}
                  {(struct.name === 'Stronghold' || struct.name === 'Ancient City') && (
                    <div className="space-y-1.5 mt-3">
                      <div className="w-full h-36 overflow-hidden rounded-xl border border-emerald-950/60 shadow-xs">
                        <img
                          src={struct.name === 'Stronghold' ? '/stronghold_room.png' : '/ancient_city.png'}
                          alt={struct.name}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                      <p className="text-[9.5px] font-sans text-gray-400 text-center font-medium leading-relaxed">
                        {struct.name === 'Stronghold'
                          ? '🟢 Stronghold: Activated End Portal chamber constructed of mossy stone bricks and suspended over a glowing lava lake.'
                          : '🟢 Ancient City: Sculk-covered deep dark ancient city ruins showcasing giant stone arches and delicate sound-sensing blocks.'}
                      </p>
                    </div>
                  )}
                </div>
                <Shield className="w-5 h-5 text-emerald-450 shrink-0" />
              </div>

              {/* Conditions & Coordinate Tricks */}
              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 space-y-2.5 font-mono text-xs shadow-inner">
                <div>
                  <span className="text-gray-400 text-[10px] uppercase block font-bold">Spawn Environment:</span>
                  <p className="text-gray-250 mt-0.5 font-sans text-xs font-medium">{struct.spawnConditions}</p>
                </div>
                <div>
                  <span className="text-emerald-300 text-[10px] uppercase block font-bold">Locating / Coordinates Tips:</span>
                  <p className="text-gray-200 mt-0.5 font-sans text-xs font-medium">{struct.coordinatesTips}</p>
                </div>
              </div>

              {/* Key loot list */}
              <div>
                <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase block mb-1.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" /> Signature Loot Chest Items:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {struct.loot.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-neutral-900 border border-emerald-950/40 text-gray-300 px-2.5 py-1 rounded font-mono shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Battle / Raid strategy */}
            <div className="bg-neutral-950 p-5 border-t border-emerald-950/45 space-y-3">
              <span className="text-xs font-mono font-bold text-red-400 flex items-center gap-1.5 uppercase">
                <HelpCircle className="w-4 h-4 text-red-400" /> Tactics & Exploration Strategy:
              </span>
              <ol className="list-decimal pl-4 text-xs font-sans text-gray-300 space-y-1.5 leading-relaxed font-medium">
                {struct.strategy.map((strat, idx) => (
                  <li key={idx}>{strat}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

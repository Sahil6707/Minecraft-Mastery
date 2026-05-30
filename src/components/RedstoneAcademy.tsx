import React, { useState } from 'react';
import { redstoneTutorials } from '../data/redstone';
import { Search, FileCode2, Cpu, Activity } from 'lucide-react';

const getRedstoneStage = (title: string): 'Early Game' | 'Mid Game' | 'Late Game' | 'End Game' => {
  const early = ['Redstone Basics', 'Repeaters & Delays'];
  const mid = ['Observers & Block Updates', 'Pistons & Monostable Circuits', 'Redstone Logic Gates (AND / OR / NOT)', 'Rapid Redstone Clocks'];
  const late = ['Comparators & Container Math', 'Automatic Item Sorters'];
  if (early.includes(title)) return 'Early Game';
  if (mid.includes(title)) return 'Mid Game';
  if (late.includes(title)) return 'Late Game';
  return 'End Game';
};

const getRedstoneDifficulty = (title: string): 'Beginner' | 'Intermediate' | 'Advanced' => {
  const beg = ['Redstone Basics', 'Repeaters & Delays'];
  const inter = ['Observers & Block Updates', 'Pistons & Monostable Circuits', 'Redstone Logic Gates (AND / OR / NOT)', 'Rapid Redstone Clocks'];
  if (beg.includes(title)) return 'Beginner';
  if (inter.includes(title)) return 'Intermediate';
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

export default function RedstoneAcademy() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTitle, setActiveTitle] = useState<string>('Redstone Basics');

  const filteredTutorials = redstoneTutorials.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const activeTutorial = redstoneTutorials.find((t) => t.title === activeTitle) || redstoneTutorials[0];

  return (
    <div className="space-y-6">
      {/* Category selector */}
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
              placeholder="Search Redstone Academy (e.g., sorters, pistons, flying, logic)..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-emerald-955/80 rounded-lg text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-1 font-mono text-xs">
            {['All', 'Basics', 'Mechanics', 'Contraptions', 'Wiring'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-955/40 text-emerald-305 border border-emerald-555/30 font-bold'
                    : 'bg-neutral-955 border border-emerald-950/40 text-gray-400 hover:text-white'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Topic List */}
        <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-xl p-4 space-y-2 h-fit shadow-md transition-colors">
          <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-1.5 p-1 border-b border-neutral-800">
            Academy Course Curriculum
          </span>
          <div className="grid grid-cols-1 gap-1">
            {filteredTutorials.map((t) => (
              <button
                key={t.title}
                onClick={() => setActiveTitle(t.title)}
                className={`px-3 py-2.5 text-left text-xs font-mono rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  activeTitle === t.title
                    ? 'bg-emerald-950/40 border-l-4 border-emerald-500 text-emerald-300 font-extrabold shadow-sm'
                    : 'bg-neutral-950 border border-emerald-950/30 text-gray-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                <span>{t.title}</span>
                <span className="text-[9px] bg-neutral-900 border border-emerald-950/40 px-1.5 py-0.5 rounded text-gray-400">
                  {t.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Big Blueprint Panel */}
        <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-xl overflow-hidden shadow-md space-y-6 transition-colors">
          <div className="p-6 space-y-5">
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-neutral-800">
              <div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-bold">
                  Class Room: {activeTutorial.category}
                </span>
                <h4 className="font-sans font-bold text-xl text-white mt-2">{activeTutorial.title}</h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {renderProgressionBadge(getRedstoneStage(activeTutorial.title))}
                  {renderDifficultyBadge(getRedstoneDifficulty(activeTutorial.title))}
                </div>
              </div>
              <Cpu className="w-8 h-8 text-emerald-450 block shrink-0" />
            </div>

            <p className="text-xs text-gray-200 leading-relaxed font-sans font-medium">
              {activeTutorial.description}
            </p>

            {/* Inputs Checklist */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                Required components list:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeTutorial.inputs.map((inp, idx) => (
                  <span
                    key={idx}
                    className="text-[10.5px] bg-neutral-950 border border-emerald-950/40 text-gray-300 px-2.5 py-1 rounded font-mono shadow-xs animate-fade"
                  >
                    • {inp}
                  </span>
                ))}
              </div>
            </div>

            {/* Redstone Screenshot */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-emerald-400" /> Dynamic Block Layout
              </span>
              <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl border border-emerald-955/65 shadow-md">
                <img
                  src="/redstone_system.png"
                  alt="Redstone Circuit Block Layout"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <p className="text-[10px] font-sans text-gray-400 text-center font-medium leading-relaxed">
                🟢 Redstone System: Monostable pulse circuit using sticky pistons, observers, and repeaters to trigger rapid block state updates.
              </p>
            </div>

            {/* Schematic ASCII Drawing block */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-emerald-400" /> Circuit Wiring Blueprint
              </span>
              <pre className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 font-mono text-xxs text-emerald-300 overflow-x-auto select-all leading-normal whitespace-pre shadow-inner">
                {activeTutorial.diagram.trim()}
              </pre>
            </div>
          </div>

          {/* Action Tutorial Steps */}
          <div className="bg-neutral-950 p-6 border-t border-emerald-950/45 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5 uppercase">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" /> ASSEMBLY STEPS & TUTORIAL:
            </span>
            <ul className="space-y-2 text-xs font-sans text-gray-300 font-medium">
              {activeTutorial.steps.map((st, idx) => (
                <li key={idx} className="flex gap-2 leading-relaxed">
                  <span className="font-mono text-emerald-300 bg-emerald-950/40 px-2 rounded h-fit border border-emerald-500/20">
                    {idx + 1}
                  </span>
                  <span className="font-medium">{st}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

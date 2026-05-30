import React, { useState } from 'react';
import { villagers } from '../data/villagers';
import { workstations } from '../data/workstations';
import { Search, Sparkles, BookOpen, Hammer, LayoutGrid, DollarSign, ArrowRight, UserCheck, HelpCircle } from 'lucide-react';

const getVillagerStage = (profession: string): 'Early Game' | 'Mid Game' | 'Late Game' | 'End Game' => {
  const early = ['Fletcher', 'Shepherd', 'Butcher', 'Fisherman'];
  const mid = ['Librarian', 'Farmer', 'Leatherworker', 'Cartographer'];
  const late = ['Weaponsmith', 'Toolsmith', 'Armorer'];
  if (early.includes(profession)) return 'Early Game';
  if (mid.includes(profession)) return 'Mid Game';
  if (late.includes(profession)) return 'Late Game';
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

export default function VillagerPanel() {
  const [activeTab, setActiveTab] = useState<'professions' | 'recipes'>('professions');
  const [selectedProfName, setSelectedProfName] = useState<string>('Librarian');

  const selectedProf = villagers.find((v) => v.profession === selectedProfName) || villagers[0];

  // Map profession to corresponding workstation details
  const matchingWorkstation = workstations.find(
    (w) => w.associatedVillager.toLowerCase() === selectedProf.profession.toLowerCase()
  );

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex bg-neutral-950 p-1.5 rounded-lg border border-emerald-950/60 transition-colors">
        <button
          onClick={() => setActiveTab('professions')}
          className={`flex-1 py-2 rounded-md font-mono text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'professions'
              ? 'bg-emerald-950/30 border-b-2 border-emerald-500 text-emerald-300 shadow-sm'
              : 'text-gray-400 hover:text-white hover:bg-neutral-900/40'
          }`}
        >
          Dynamic Villager Professions Index
        </button>
        <button
          onClick={() => setActiveTab('recipes')}
          className={`flex-1 py-2 rounded-md font-mono text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'recipes'
              ? 'bg-emerald-950/30 border-b-2 border-emerald-500 text-emerald-300 shadow-sm'
              : 'text-gray-400 hover:text-white hover:bg-neutral-900/40'
          }`}
        >
          Workstation Crafting Table Recipes (3x3 grid)
        </button>
      </div>

      {activeTab === 'professions' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar selector */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border border-emerald-955/60 p-4 space-y-2 h-fit shadow-md transition-colors">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold mb-2 p-1 border-b border-neutral-800">
              Select Profession
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
              {villagers.map((v) => (
                <button
                  key={v.profession}
                  onClick={() => setSelectedProfName(v.profession)}
                  className={`px-3 py-2 text-left text-xs font-mono rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                    selectedProfName === v.profession
                      ? 'bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-extrabold shadow-sm'
                      : 'bg-neutral-900/60 border border-emerald-950/30 text-gray-300 hover:bg-neutral-900 hover:text-white hover:border-emerald-500/10'
                  }`}
                >
                  <span>{v.profession}</span>
                  <span className="text-[10px] text-right text-gray-400">{v.workstation}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md transition-colors backdrop-blur-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-neutral-800 pb-5">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20 uppercase">
                  Associated Site: {selectedProf.workstation}
                </span>
                <h4 className="font-display font-semibold text-2xl text-white mt-2">
                  Profession: {selectedProf.profession}
                </h4>
                <div className="mt-1.5">
                  {renderProgressionBadge(getVillagerStage(selectedProf.profession))}
                </div>
              </div>
              <UserCheck className="w-8 h-8 text-emerald-450 block shrink-0" />
            </div>

            {/* Trading Hall Screenshot */}
            <div className="space-y-2">
              <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl border border-emerald-950/60 shadow-md">
                <img
                  src="/villager_hall.png"
                  alt="Villager Trading Hall"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <p className="text-[10px] font-sans text-gray-450 text-center font-medium leading-relaxed">
                🟢 Villager Trading Hall: A trading hall with librarians, fletchers, and armorers for efficient emerald farming.
              </p>
            </div>

            {/* Workstation recipe and uses mapping */}
            {matchingWorkstation && (
              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 grid grid-cols-1 sm:grid-cols-12 gap-4 shadow-inner">
                <div className="sm:col-span-8 space-y-2">
                  <h5 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Hammer className="w-3.5 h-3.5 text-emerald-400" /> Workbench Crafting Matrix: {matchingWorkstation.name}
                  </h5>
                  <p className="text-xs text-gray-200 leading-relaxed font-medium">
                    {matchingWorkstation.uses[0]}
                  </p>
                </div>

                {/* 3x3 visual representation */}
                <div className="sm:col-span-4 flex justify-center items-center">
                  <div className="grid grid-cols-3 gap-1 bg-neutral-900 p-2 rounded-lg border border-emerald-950/45 shadow-inner">
                    {matchingWorkstation.recipeLayout.map((row, rIdx) =>
                      row.map((col, cIdx) => (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className={`w-9 h-9 flex items-center justify-center rounded text-[9px] font-mono text-center leading-none p-1 border font-semibold ${
                            col
                              ? 'bg-emerald-950/55 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-900/30 shadow-xs'
                              : 'bg-neutral-950 text-gray-500 border border-neutral-800/80 shadow-inner'
                          }`}
                          title={col || 'Empty Craft Slot'}
                        >
                          {col ? col.split(' ')[0] : ''}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Trade Levels progression list */}
            <div>
              <h5 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <LayoutGrid className="w-4 h-4 text-emerald-400" /> Career trade tier unlocks
              </h5>
              <div className="mt-3 space-y-2.5">
                {selectedProf.tradeLevels.map((t) => (
                  <div
                    key={t.level}
                    className="p-3 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-emerald-500/20 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                  >
                    <span className="font-mono font-extrabold text-emerald-300 min-w-28 uppercase tracking-wider">
                      ★ {t.level}
                    </span>
                    <div className="flex-1 space-y-1">
                      {t.trades.map((tr, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-250 font-mono font-medium">
                          <ArrowRight className="w-3 h-3 text-emerald-450" />
                          <span>{tr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Items & Emerald farming tactics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-xl shadow-sm">
                <h6 className="text-xs font-mono font-bold text-emerald-300 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> TOP-TIER OFFERINGS
                </h6>
                <ul className="list-disc pl-4 text-xs font-medium text-gray-200 space-y-1 mt-2.5">
                  {selectedProf.bestTrades.map((item, idx) => (
                    <li key={idx} className="font-mono">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-950 border border-emerald-950/40 p-4 rounded-xl shadow-sm">
                <h6 className="text-xs font-mono font-bold text-emerald-300 uppercase flex items-center gap-1.5 font-semibold">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> EMERALD HARVESTING TIPS
                </h6>
                <ul className="list-disc pl-4 text-xs font-sans text-gray-300 space-y-1.5 mt-2.5 font-medium">
                  {selectedProf.emeraldFarmingTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'recipes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {workstations.map((work) => (
            <div
              key={work.name}
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-2xl overflow-hidden p-6 flex flex-col justify-between transition-all minecraft-card backdrop-blur-xs"
            >
              <div>
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-display font-semibold text-base text-white">{work.name}</h4>
                  <span className="text-[9px] font-mono font-bold uppercase bg-neutral-950 border border-emerald-950/40 text-gray-400 px-2 py-0.5 rounded">
                    Job: {work.associatedVillager}
                  </span>
                </div>

                <p className="text-xs text-gray-200 font-sans mt-3 leading-relaxed font-medium">
                  {work.uses[0]}
                </p>

                {/* 3x3 visual display container */}
                <div className="flex justify-center py-4">
                  <div className="grid grid-cols-3 gap-1.5 bg-neutral-950 p-2.5 rounded-lg border border-emerald-950/40 shadow-inner">
                    {work.recipeLayout.map((row, rIdx) =>
                      row.map((col, cIdx) => (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className={`w-10 h-10 flex items-center justify-center rounded text-[9px] font-mono text-center leading-none p-1 border font-semibold ${
                            col
                              ? 'bg-emerald-955/50 border border-emerald-500/20 text-emerald-300'
                              : 'bg-neutral-900 border border-neutral-800 text-gray-500 shadow-inner'
                          }`}
                          title={col || 'Empty Slot'}
                        >
                          {col ? col.split(' ')[0] : ''}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Survival advice bullet */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-5 border-t border-emerald-500/20 space-y-2.5 text-xs shadow-inner mb-4">
                <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                  Survival Advice:
                </span>
                <p className="text-gray-400 pr-1 font-semibold">{work.tips[0]}</p>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/30 border border-emerald-500/15 px-2 py-1 rounded w-fit self-end shadow-sm">
                <span>UNLOCK TIER: {work.associatedVillager === 'Librarian' ? '★ APPRENTICE' : '★ NOVICE'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

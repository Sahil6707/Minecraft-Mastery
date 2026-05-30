import React, { useState } from 'react';
import { farms, Farm } from '../data/farms';
import { Search, SlidersHorizontal, FileText, Bookmark, BookmarkCheck, Zap, Info } from 'lucide-react';

interface FarmHubProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

export default function FarmHub({ bookmarks, onToggleBookmark }: FarmHubProps) {
  // Input search parameters
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedScale, setSelectedScale] = useState<string>('All');
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  // Drawer / modal states to view specific materials list
  const [viewingFarm, setViewingFarm] = useState<Farm | null>(null);

  // Filter farms
  const filteredFarms = farms.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.resourceProduced.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesScale = selectedScale === 'All' || f.scale === selectedScale;
    const matchesStage = selectedStage === 'All' || f.gameStage === selectedStage;
    const matchesDifficulty = selectedDifficulty === 'All' || f.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesScale && matchesStage && matchesDifficulty;
  });

  return (
    <div className="space-y-6">
      {/* Search and filter controls bar */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-xl p-5 shadow-md space-y-4 transition-colors">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-450">
              <Search className="w-4 h-4 text-gray-400" />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search farm directory (e.g., creepers, gold, wood)..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-emerald-950/80 rounded-lg text-sm text-gray-105 focus:outline-none focus:ring-2 focus:ring-emerald-500/25 font-sans placeholder-gray-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-neutral-955 border border-emerald-950/80 text-gray-200 rounded-lg px-3 py-2 text-xs cursor-pointer shadow-sm outline-none"
            >
              <option value="All">All Categories</option>
              <option value="XP">XP Farms</option>
              <option value="Resource">Resource Farms</option>
              <option value="Food">Food Farms</option>
              <option value="Mob">Mob Loot Farms</option>
            </select>

            <select
              value={selectedScale}
              onChange={(e) => setSelectedScale(e.target.value)}
              className="bg-neutral-955 border border-emerald-950/80 text-gray-200 rounded-lg px-3 py-2 text-xs cursor-pointer shadow-sm outline-none"
            >
              <option value="All">All Sizes</option>
              <option value="Small">Small scale</option>
              <option value="Medium">Medium scale</option>
              <option value="Mega">Mega mechanical</option>
            </select>

            <select
              value={selectedStage}
              onChange={(e) => setSelectedStage(e.target.value)}
              className="bg-neutral-955 border border-emerald-950/80 text-gray-200 rounded-lg px-3 py-2 text-xs md:block hidden cursor-pointer shadow-sm outline-none"
            >
              <option value="All">All Stages</option>
              <option value="Early Game">Early Survival</option>
              <option value="Mid Game">Mid Game setup</option>
              <option value="End Game">Endgame Technical</option>
            </select>
          </div>
        </div>

        {/* Small tags for filtering */}
        <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-neutral-800/80 text-[10px] font-mono">
          <span className="text-gray-400 flex items-center gap-1 py-1 mr-1">
            <SlidersHorizontal className="w-3 h-3 text-emerald-555" /> Quick Filter Stage:
          </span>
          {['All', 'Early Game', 'Mid Game', 'End Game'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStage(st)}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                selectedStage === st
                  ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                  : 'bg-neutral-950 text-gray-400 border border-emerald-950/40 hover:text-white hover:bg-neutral-900/40'
              }`}
            >
              {st === 'All' ? 'ANY STAGE' : st.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Farms */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFarms.length > 0 ? (
          filteredFarms.map((farm) => {
            const isFav = bookmarks.includes(farm.id);
            return (
              <div
                key={farm.id}
                className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955/60 rounded-2xl overflow-hidden flex flex-col justify-between group relative minecraft-card backdrop-blur-xs"
              >
                {/* Visual Glow Header Accent */}
                <div
                  className={`h-1 w-full ${
                    farm.scale === 'Mega'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 shadow-md shadow-emerald-500'
                      : farm.scale === 'Medium'
                      ? 'bg-emerald-500'
                      : 'bg-emerald-700'
                  }`}
                />

                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[9px] font-mono font-semibold tracking-wider text-emerald-300 uppercase bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                        {farm.scale} • {farm.gameStage}
                      </span>
                      <h4 className="font-display font-semibold text-base text-white mt-2 tracking-tight group-hover:text-emerald-400 transition-colors">
                        {farm.name}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 ${
                          farm.gameStage === 'Early Game'
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : farm.gameStage === 'Mid Game'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                          {farm.gameStage === 'Early Game' ? '🟢 Early Game' : farm.gameStage === 'Mid Game' ? '🟡 Mid Game' : '🔴 End Game'}
                        </span>
                        <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 ${
                          farm.difficulty === 'Easy'
                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                            : farm.difficulty === 'Medium'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        }`}>
                          {farm.difficulty === 'Easy' ? '🟢 Beginner' : farm.difficulty === 'Medium' ? '🟡 Intermediate' : '🔴 Advanced'}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleBookmark(farm.id)}
                      className="p-1.5 rounded-md hover:bg-neutral-900 text-gray-400 hover:text-emerald-400 transition cursor-pointer"
                      title={isFav ? 'Remove Bookmark' : 'Bookmark Farm'}
                    >
                      {isFav ? (
                        <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-200 font-sans mt-3 line-clamp-2 leading-relaxed font-medium">
                    {farm.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-emerald-950/40 space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Output:</span>
                      <span className="text-emerald-300 font-bold">{farm.outputPerHour}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Resource:</span>
                      <span className="text-gray-200 font-semibold">{farm.resourceProduced}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-gray-400">Difficulty:</span>
                      <span
                        className={`font-semibold text-xs ${
                          farm.difficulty === 'Easy'
                            ? 'text-green-400'
                            : farm.difficulty === 'Medium'
                            ? 'text-amber-400'
                            : 'text-red-400'
                        }`}
                      >
                        {farm.difficulty}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer specs details buttons */}
                <div className="bg-neutral-950 p-4 border-t border-emerald-950/40 flex gap-2">
                  <button
                    onClick={() => setViewingFarm(farm)}
                    className="flex-grow py-1.5 bg-neutral-900 hover:bg-neutral-850 font-mono text-[11px] font-bold text-gray-200 hover:text-emerald-300 rounded-md flex items-center justify-center gap-1.5 border border-emerald-950/80 transition cursor-pointer shadow-sm"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Materials & Spec Sheet</span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 text-center bg-neutral-950 rounded-xl border border-emerald-950/50 font-mono text-gray-400 shadow-inner">
            No farms matches the selected filters. Try broadening your keywords.
          </div>
        )}
      </div>

      {/* Materials & Spec Modal Detail */}
      {viewingFarm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs">
          <div className="max-w-xl w-full bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/80 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-colors">
            <div className="p-5 border-b border-emerald-950/50 bg-neutral-950 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/55 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold">
                  {viewingFarm.scale} • {viewingFarm.gameStage}
                </span>
                <h3 className="font-semibold font-display text-lg text-white mt-1">{viewingFarm.name}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 ${
                    viewingFarm.gameStage === 'Early Game'
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : viewingFarm.gameStage === 'Mid Game'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {viewingFarm.gameStage === 'Early Game' ? '🟢 Early Game' : viewingFarm.gameStage === 'Mid Game' ? '🟡 Mid Game' : '🔴 End Game'}
                  </span>
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 ${
                    viewingFarm.difficulty === 'Easy'
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : viewingFarm.difficulty === 'Medium'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                  }`}>
                    {viewingFarm.difficulty === 'Easy' ? '🟢 Beginner' : viewingFarm.difficulty === 'Medium' ? '🟡 Intermediate' : '🔴 Advanced'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setViewingFarm(null)}
                className="p-1.5 px-3 text-xs text-gray-300 hover:text-red-400 font-mono border border-emerald-950 rounded bg-neutral-900 hover:bg-neutral-850 transition cursor-pointer shadow-sm"
              >
                Close (ESC)
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 bg-gradient-to-br from-slate-900/40 to-slate-950/40">
              {/* Contextual screenshot */}
              <div className="space-y-2">
                <div className="w-full h-44 sm:h-52 overflow-hidden rounded-xl border border-emerald-950/60 shadow-md">
                  <img
                    src={
                      viewingFarm.category === 'Food'
                        ? '/food_farm.png'
                        : viewingFarm.category === 'Resource'
                        ? '/resource_farm.png'
                        : viewingFarm.category === 'XP'
                        ? '/xp_farm.png'
                        : '/mob_farm.png'
                    }
                    alt={viewingFarm.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <p className="text-[10px] font-sans text-gray-400 text-center font-medium leading-relaxed">
                  {viewingFarm.category === 'Food'
                    ? '🟢 Food Farm: Automated crop farm using a farmer villager to gather and store infinite carrots and potatoes.'
                    : viewingFarm.category === 'Resource'
                    ? '🟢 Resource Farm: Piston-harvest sugarcane grid utilizing observers to detect growth and hoppers to collect crops.'
                    : viewingFarm.category === 'XP'
                    ? '🟢 XP Farm: Enderman experience farm built in the End void, using endermites to draw mobs into a 43-block drop chute.'
                    : '🟢 Mob Loot Farm: Classic spawning tower using water streams and dark platforms to auto-gather bones, gunpowder, and string.'}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                  Description
                </h4>
                <p className="text-xs text-gray-205 font-sans mt-1 leading-relaxed font-medium whitespace-pre-line">
                  {viewingFarm.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-950 p-3 rounded border border-emerald-950/50 font-mono text-xs shadow-inner">
                  <span className="text-[10px] text-gray-400 block">ESTIMATED OUTPUT PER HOUR</span>
                  <span className="font-bold text-emerald-300 text-sm mt-1 block">
                    {viewingFarm.outputPerHour}
                  </span>
                </div>
                <div className="bg-neutral-950 p-3 rounded border border-emerald-950/50 font-mono text-xs shadow-inner">
                  <span className="text-[10px] text-gray-450 block font-sans">REDSTONE DIFFICULTY</span>
                  <span
                    className={`font-bold text-sm mt-1 block ${
                      viewingFarm.difficulty === 'Easy'
                        ? 'text-green-400'
                        : viewingFarm.difficulty === 'Medium'
                        ? 'text-amber-400'
                        : 'text-red-400'
                    }`}
                  >
                    {viewingFarm.difficulty}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                  Required Materials List
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {viewingFarm.requiredMaterials.map((mat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 bg-neutral-950 rounded border border-emerald-950/50 text-xs font-mono text-gray-305 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-emerald-950/30 border border-emerald-500/20 rounded-lg shadow-sm">
                <h5 className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-emerald-450" /> Advanced Efficiency Tip
                </h5>
                <p className="text-xs text-gray-200 font-sans mt-1.5 leading-relaxed font-medium">
                  {viewingFarm.efficiencyTip}
                </p>
              </div>
            </div>

            <div className="p-4 bg-neutral-950 border-t border-emerald-950/60 text-right flex justify-between items-center">
              <button
                onClick={() => onToggleBookmark(viewingFarm.id)}
                className="text-xs font-mono font-bold text-gray-400 hover:text-emerald-300 flex items-center gap-1.5 transition cursor-pointer"
              >
                <Bookmark className="w-4 h-4" />
                <span>
                  {bookmarks.includes(viewingFarm.id) ? 'Bookmarked' : 'Add Bookmark'}
                </span>
              </button>
              <button
                onClick={() => setViewingFarm(null)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 font-mono text-xs font-bold text-neutral-950 rounded-lg transition shadow-md cursor-pointer"
              >
                Got It, Back to Hub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

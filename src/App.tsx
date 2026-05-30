import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FarmHub from './components/FarmHub';
import CalculatorPanel from './components/CalculatorPanel';
import EnchantmentPanel from './components/EnchantmentPanel';
import BiomePanel from './components/BiomePanel';
import VillagerPanel from './components/VillagerPanel';
import MobPanel from './components/MobPanel';
import StructurePanel from './components/StructurePanel';
import RedstoneAcademy from './components/RedstoneAcademy';
import DimensionPanel from './components/DimensionPanel';
import ProgressionTimeline from './components/ProgressionTimeline';
import UpdatesPanel from './components/UpdatesPanel';
import AboutCreator from './components/AboutCreator';
import AnimatedBackground from './components/AnimatedBackground';
import { farms } from './data/farms';
import { Bookmark, X, Info, Zap, ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);

  // Load and Save Bookmarks
  useEffect(() => {
    const saved = localStorage.getItem('minecraft_mastery_bookmarks');
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Theme Sync effect — restore from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('minecraft_mastery_theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const handleToggleBookmark = (id: string) => {
    let next: string[] = [];
    if (bookmarks.includes(id)) {
      next = bookmarks.filter((x) => x !== id);
    } else {
      next = [...bookmarks, id];
    }
    setBookmarks(next);
    localStorage.setItem('minecraft_mastery_bookmarks', JSON.stringify(next));
  };

  const bookmarkedFarms = farms.filter((f) => bookmarks.includes(f.id));

  return (
    <div className="min-h-screen relative transition-colors duration-300 text-neutral-800 dark:text-neutral-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-450 z-0">
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        globalSearchQuery={globalSearchQuery}
        setGlobalSearchQuery={setGlobalSearchQuery}
        bookmarksCount={bookmarks.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        {/* Render Tab Screens */}
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'farms' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-2 py-0.5 rounded uppercase">
                DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Automated Farm Hub
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Farms grow blocks and resources automatically while you focus on exploring and building. Here you will find step-by-step builds ranging from simple starter crop patches to advanced mob drops factories.
              </p>
            </div>
            <FarmHub bookmarks={bookmarks} onToggleBookmark={handleToggleBookmark} />
          </div>
        )}
        {activeTab === 'calculators' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-950 px-2 py-0.5 rounded uppercase">
                TOOLS & CALCULATORS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Survival Tools & Coordinators
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Keep your survival world synced and safe. Quickly convert coordinates between the Nether and the Overworld, calculate how long your fuels will burn in a furnace, find safe spawning zones, or check coordinate chunk bounds.
              </p>
            </div>
            <CalculatorPanel />
          </div>
        )}
        {activeTab === 'enchantments' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-950 px-2 py-0.5 rounded uppercase">
                ENCHANTMENTS LIBRARY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Spell Book Comparison Guides
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Decide exactly what spells to put on your weapons, tools, and armor. Compare enchantments side-by-side to find the ultimate protection combos and avoid spelling conflicts.
              </p>
            </div>
            <EnchantmentPanel />
          </div>
        )}
        {activeTab === 'biomes' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-950 px-2 py-0.5 rounded uppercase">
                GEOGRAPHY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Territories Explorer Guide
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Decide where to build your next starter base or mega castle! Explore biomes like Cherry Groves, Badlands, and the Deep Dark, featuring handy checklists of resources, local dangers, and base design ideas.
              </p>
            </div>
            <BiomePanel />
          </div>
        )}
        {activeTab === 'villagers' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-2 py-0.5 rounded uppercase">
                ECONOMICS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Villager Trading Halls
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Villagers let you trade simple resources for powerful diamond gear and rare spell books. Learn which jobs give easy emeralds, how to set up professional trading halls, and see exact block workstation blueprints.
              </p>
            </div>
            <VillagerPanel />
          </div>
        )}
        {activeTab === 'mobs' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-2 py-0.5 rounded uppercase">
                ENCYCLOPEDIA
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Passive & Hostile Creatures Index
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Learn everything about the animals and monsters in your world. Find out where they spawn, how much health they have, what items they drop when defeated, and the best ways to farm or tame them.
              </p>
            </div>
            <MobPanel />
          </div>
        )}
        {activeTab === 'structures' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-2 py-0.5 rounded uppercase">
                DUNGEONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Ruins, Dungeons & Monuments Checklists
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Adventure safely into bastions, ancient cities, ocean monuments, and strongholds. Discover what loot chests are waiting inside, what monsters guard them, and survival tips to make it out alive.
              </p>
            </div>
            <StructurePanel />
          </div>
        )}
        {activeTab === 'redstone' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-2 py-0.5 rounded uppercase">
                REDSTONE ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Redstone Engineering Blueprint Course
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Learn how to automate your world with redstone! Explore simple wiring guides and step-by-step layouts for making high-speed repeaters, item sorter networks, and automatic piston doorways.
              </p>
            </div>
            <RedstoneAcademy />
          </div>
        )}
        {activeTab === 'dimensions' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-2 py-0.5 rounded uppercase">
                DIMENSIONS CROSSINGS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Nether & End Survival Portals
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Cross the threshold into the magma plains of the Nether or the floating spires of The End. Prepare with resource checks, survival checklists, and safe portal coordinate grids.
              </p>
            </div>
            <DimensionPanel />
          </div>
        )}
        {activeTab === 'progression' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-950 px-2 py-0.5 rounded uppercase">
                SURVIVAL PROGRESSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Survival Milestones Questbook
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                A step-by-step survival checklist covering the natural path of a Minecraft world. Track your progress from punching your first tree to mining diamonds, defeating the Ender Dragon, and automating your main base.
              </p>
            </div>
            <ProgressionTimeline />
          </div>
        )}
        {activeTab === 'updates' && (
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-950 px-2 py-0.5 rounded uppercase">
                VERSION CHRONICLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Patch Updates Logbook
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm max-w-2xl">
                Stay up to date with new features added to the game! Browse patch notes covering trial chambers, wind charges, and custom mace strike updates.
              </p>
            </div>
            <UpdatesPanel />
          </div>
        )}
        {activeTab === 'about' && (
          <AboutCreator />
        )}
      </main>

      {/* Bookmarked Farms Side Drawer */}
      {isBookmarksOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs">
          <div className="w-full max-w-md bg-slate-900 dark:bg-neutral-900 border-l border-neutral-200 dark:border-emerald-900/40 h-full shadow-2xl flex flex-col justify-between">
            <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 bg-slate-900 dark:bg-neutral-950 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="font-bold font-sans text-base text-neutral-800 dark:text-neutral-100 uppercase tracking-widest">
                  Bookmarked Farms ({bookmarkedFarms.length})
                </h3>
              </div>
              <button
                onClick={() => setIsBookmarksOpen(false)}
                className="p-1 px-2 font-mono text-xs hover:bg-slate-900 dark:hover:bg-neutral-850 hover:text-red-500 dark:hover:text-red-400 text-neutral-500 dark:text-neutral-400 rounded border border-neutral-200 dark:border-neutral-800 transition"
              >
                Close (ESC)
              </button>
            </div>

            {/* Bookmarked List */}
            <div className="p-5 flex-1 overflow-y-auto space-y-3.5">
              {bookmarkedFarms.length > 0 ? (
                bookmarkedFarms.map((farm) => (
                  <div
                    key={farm.id}
                    className="p-4 bg-slate-900 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-850 space-y-2 relative group hover:border-emerald-500/25 transition-all text-neutral-850 dark:text-neutral-100"
                  >
                    <button
                      onClick={() => handleToggleBookmark(farm.id)}
                      className="absolute top-3 right-3 text-neutral-400 hover:text-red-500 transition"
                      title="Remove Bookmark"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <span className="text-[8.5px] font-mono text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/30 px-1.5 py-0.5 rounded">
                      {farm.scale} • {farm.gameStage}
                    </span>
                    <h5 className="font-sans font-bold text-sm text-neutral-850 dark:text-neutral-200 mt-1.5">{farm.name}</h5>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-sans line-clamp-2">
                      {farm.description}
                    </p>

                    <div className="pt-2 flex justify-between font-mono text-[10.5px]">
                      <span className="text-neutral-500 dark:text-neutral-400">Output:</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{farm.outputPerHour}</span>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('farms');
                        setIsBookmarksOpen(false);
                      }}
                      className="w-full text-center py-1 mt-2 bg-slate-900 dark:bg-neutral-900 rounded font-mono text-[10px] text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-neutral-200 dark:border-neutral-800 transition shadow-xs"
                    >
                      Read detailed spec sheet
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-neutral-500 dark:text-neutral-450 font-mono text-xs leading-relaxed">
                  No bookmarked design sheets yet. Browse the Farm Hub and select the bookmark ribbon icon!
                </div>
              )}
            </div>

            <div className="p-5 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
              <button
                onClick={() => {
                  setActiveTab('farms');
                  setIsBookmarksOpen(false);
                }}
                className="w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-900 font-mono text-xs font-bold rounded-lg transition"
              >
                Browse directory & add farms
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Elegant Professional Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-slate-900 dark:bg-neutral-950/80 py-8 font-mono text-xs text-neutral-500 dark:text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-base">⊞</span>
            <span className="font-sans font-extrabold text-neutral-800 dark:text-neutral-300">MINECRAFT MASTERY</span>
            <span className="text-[10px] px-2 py-0.5 bg-slate-900 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded">v1.21 Spec</span>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p>© {new Date().getFullYear()} Minecraft Mastery Knowledge Platform. Unofficial Fan Wiki.</p>
            <p className="text-[10px] text-neutral-405 dark:text-neutral-600">Minecraft is a registered trademark of Mojang Synergies AB.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Search, Bookmark, Menu, X, Sparkles, AlertCircle, BookmarkCheck, Sun, Moon, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  globalSearchQuery,
  setGlobalSearchQuery,
  bookmarksCount,
  onOpenBookmarks,
  isDark,
  setIsDark,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'progression', label: 'Progression' },
    { id: 'farms', label: 'Farm Hub' },
    { id: 'enchantments', label: 'Enchantments' },
    { id: 'biomes', label: 'Biomes' },
    { id: 'villagers', label: 'Villagers & Jobs' },
    { id: 'mobs', label: 'Mob Index' },
    { id: 'structures', label: 'Structures' },
    { id: 'redstone', label: 'Redstone' },
    { id: 'dimensions', label: 'Dimensions' },
    { id: 'calculators', label: 'Calculators' },
    { id: 'updates', label: 'Updates' },
    { id: 'about', label: 'About Creator' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b bg-slate-900/90 dark:bg-neutral-900/90 border-neutral-200 dark:border-emerald-900/30 text-neutral-800 dark:text-neutral-100 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-9 h-9 rounded-md bg-emerald-600 flex items-center justify-center border-2 border-emerald-400 font-mono text-xl font-bold text-neutral-900 shadow-lg shadow-emerald-500/20">
              M
            </div>
            <div>
              <span className="font-sans font-bold tracking-tight text-lg text-neutral-800 dark:text-neutral-100 flex items-center gap-1.5">
                MINECRAFT <span className="text-emerald-600 dark:text-emerald-500 font-mono font-medium">MASTERY</span>
              </span>
              <p className="text-[10px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400/80 uppercase -mt-1 hidden sm:block">
                KNOWLEDGE MATRIX
              </p>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-sm mx-6">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-neutral-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                placeholder="Search anything (items, biomes, mobs)..."
                className="w-full pl-9 pr-4 py-1.5 rounded-full text-xs bg-slate-900 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-sans"
              />
              {globalSearchQuery && (
                <button
                  onClick={() => setGlobalSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Actions & Buttons */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-b-2 border-emerald-500 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-150 dark:hover:bg-neutral-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Thematic Trust Spec Indicator */}
            <div
              className="p-1.5 rounded-md bg-neutral-900 border border-emerald-950/80 text-emerald-400 font-mono text-[9px] font-bold flex items-center gap-1.5 shadow-md select-none"
              title="100% Ad-Free Verified Minecraft Knowledge Spec Engine"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">100% VERIFIED</span>
            </div>

            {/* Bookmarks Drawer Indicator */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-1.5 rounded-md bg-slate-900 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all flex items-center gap-1 shadow-xs"
            >
              {bookmarksCount > 0 ? (
                <BookmarkCheck className="w-4 h-4 text-emerald-605 font-bold" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
              {bookmarksCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-550 dark:bg-emerald-500 rounded-full text-[10px] font-bold text-neutral-900 dark:text-neutral-950 flex items-center justify-center animate-pulse">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-1.5 rounded-md bg-slate-900 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-200 shadow-xs"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Search Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-slate-900 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-2 pt-2 pb-4 space-y-1 shadow-lg">
          {/* Mobile search bar */}
          <div className="px-2 py-2">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-450 dark:text-neutral-450">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={globalSearchQuery}
                onChange={(e) => setGlobalSearchQuery(e.target.value)}
                placeholder="Search guide & indices..."
                className="w-full pl-9 pr-4 py-2 rounded-md text-xs bg-slate-900 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1 px-2 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-left text-xs font-medium block transition-all ${
                  activeTab === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-bold'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-white hover:bg-slate-900 dark:hover:bg-neutral-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

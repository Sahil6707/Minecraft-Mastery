import React, { useState, useEffect } from 'react';
import {
  Bookmark,
  Menu,
  X,
  BookmarkCheck,
  Sun,
  Moon,
  ShieldCheck,
  Mail,
  Info,
  ChevronDown,
} from 'lucide-react';
import GlobalSearch from './GlobalSearch';

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

const NAV_GROUPS = [
  {
    label: 'Survival',
    items: [
      { id: 'home', label: 'Home' },
      { id: 'progression', label: 'Progression' },
      { id: 'farms', label: 'Farm Hub' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { id: 'enchantments', label: 'Enchantments' },
      { id: 'biomes', label: 'Biomes' },
      { id: 'villagers', label: 'Villagers' },
      { id: 'mobs', label: 'Mob Index' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { id: 'structures', label: 'Structures' },
      { id: 'redstone', label: 'Redstone' },
      { id: 'dimensions', label: 'Dimensions' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { id: 'calculators', label: 'Calculators' },
      { id: 'updates', label: 'Updates' },
    ],
  },
];

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for enhanced glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Theme toggle syncs with document
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('minecraft_mastery_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('minecraft_mastery_theme', 'light');
    }
  };

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-emerald-900/30'
            : 'bg-slate-950/80 backdrop-blur-md border-b border-emerald-900/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">

            {/* ── LEFT: Logo ── */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 shrink-0 group"
              aria-label="Go to home"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center border border-emerald-400/30 font-mono text-xl font-black text-slate-950 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                M
              </div>
              <div className="hidden sm:block leading-none">
                <span className="font-sans font-black tracking-tight text-base text-white flex items-center gap-1">
                  MINECRAFT{' '}
                  <span className="text-emerald-400 font-mono font-medium">MASTERY</span>
                </span>
                <p className="text-[9px] font-mono tracking-widest text-emerald-600 uppercase mt-0.5">
                  KNOWLEDGE MATRIX
                </p>
              </div>
            </button>

            {/* ── CENTER: Global Search (desktop) ── */}
            <div className="hidden md:flex flex-1 max-w-xl mx-auto">
              <GlobalSearch
                onNavigate={(tab) => handleNavClick(tab)}
                autoFocus={false}
              />
            </div>

            {/* ── RIGHT: Actions ── */}
            <div className="flex items-center gap-1.5 shrink-0 ml-auto md:ml-0">

              {/* Verified badge */}
              <div
                className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-950/40 border border-emerald-900/40 text-emerald-400 font-mono text-[9px] font-bold select-none"
                title="100% Ad-Free Verified Minecraft Knowledge"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFIED</span>
              </div>

              {/* Theme toggle — visible on ALL breakpoints */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-200 bg-slate-800/60 border-slate-700/60 text-gray-300 hover:border-emerald-500/40 hover:text-white"
                aria-label="Toggle theme"
                title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="hidden sm:inline">Dark</span>
                  </>
                )}
              </button>

              {/* About button */}
              <button
                onClick={() => handleNavClick('about')}
                className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-200 ${
                  activeTab === 'about'
                    ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                    : 'bg-slate-800/60 border-slate-700/60 text-gray-300 hover:border-emerald-500/40 hover:text-white'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                About
              </button>

              {/* Contact button */}
              <a
                href="mailto:contact@minecraftmastery.com"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-mono font-bold transition-all duration-200 hover:bg-emerald-900/40 hover:border-emerald-400/50 hover:text-emerald-200"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </a>

              {/* Bookmarks */}
              <button
                onClick={onOpenBookmarks}
                className="relative p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                aria-label="Open bookmarks"
              >
                {bookmarksCount > 0 ? (
                  <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
                {bookmarksCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-500 rounded-full text-[9px] font-bold text-slate-950 flex items-center justify-center animate-pulse">
                    {bookmarksCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-gray-300 hover:text-white hover:border-emerald-500/40 transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* ── DESKTOP SUB-NAV: grouped nav items ── */}
          <div className="hidden xl:flex items-center gap-1 py-1 border-t border-slate-800/60 overflow-x-auto">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="relative flex items-center">
                {/* Group label */}
                <button
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                  className="flex items-center gap-1 px-3 py-1 rounded-md text-[11px] font-mono font-bold text-gray-500 hover:text-gray-300 uppercase tracking-wider transition-colors"
                >
                  {group.label}
                  <ChevronDown className="w-2.5 h-2.5 opacity-50" />
                </button>

                {/* Items in row */}
                <div className="flex items-center">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                        activeTab === item.id
                          ? 'text-emerald-300 bg-emerald-950/40 border-b-2 border-emerald-500 font-semibold'
                          : 'text-gray-400 hover:text-white hover:bg-slate-800/60'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Separator */}
                <div className="w-px h-4 bg-slate-700/50 mx-1" />
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        {mobileOpen && (
          <div className="xl:hidden bg-slate-950/98 backdrop-blur-xl border-t border-slate-800/60 shadow-xl">
            {/* Mobile search */}
            <div className="px-4 pt-3 pb-2">
              <GlobalSearch
                onNavigate={(tab) => { handleNavClick(tab); setMobileOpen(false); }}
                autoFocus
              />
            </div>

            {/* Mobile nav grid */}
            <div className="px-4 pb-4 space-y-3">
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-[9px] font-mono font-bold text-gray-600 uppercase tracking-widest px-1 mb-1">
                    {group.label}
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`px-2 py-2 rounded-lg text-center text-xs font-medium transition-all ${
                          activeTab === item.id
                            ? 'text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 font-bold'
                            : 'text-gray-400 bg-slate-800/40 border border-slate-700/40 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile-only About + Contact */}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => handleNavClick('about')}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-slate-700/60 bg-slate-800/40 text-gray-300 text-xs font-mono font-bold hover:border-emerald-500/30 hover:text-white transition-all"
                >
                  <Info className="w-3.5 h-3.5" /> About
                </button>
                <a
                  href="mailto:contact@minecraftmastery.com"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-mono font-bold hover:bg-emerald-900/40 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" /> Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

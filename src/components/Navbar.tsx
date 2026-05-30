import React, { useState, useEffect, useRef } from 'react';
import {
  Bookmark,
  Menu,
  X,
  BookmarkCheck,
  ShieldCheck,
  Mail,
  Info,
  ChevronDown,
  Home,
  TrendingUp,
  Tractor,
  Zap,
  Trees,
  Users,
  Skull,
  Building2,
  Cpu,
  Globe,
  Calculator,
  Newspaper,
} from 'lucide-react';
import GlobalSearch from './GlobalSearch';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
}

const NAV_GROUPS = [
  {
    label: 'Survival',
    items: [
      { id: 'home',        label: 'Home',        icon: <Home className="w-3.5 h-3.5" />,      desc: 'Start here' },
      { id: 'progression', label: 'Progression',  icon: <TrendingUp className="w-3.5 h-3.5" />, desc: 'Milestone quest book' },
      { id: 'farms',       label: 'Farm Hub',     icon: <Tractor className="w-3.5 h-3.5" />,    desc: 'Automated farm builds' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { id: 'enchantments', label: 'Enchantments',    icon: <Zap className="w-3.5 h-3.5" />,      desc: 'Spell book guide' },
      { id: 'biomes',       label: 'Biomes',          icon: <Trees className="w-3.5 h-3.5" />,     desc: 'Territory explorer' },
      { id: 'villagers',    label: 'Villagers & Jobs', icon: <Users className="w-3.5 h-3.5" />,    desc: 'Trading hall guide' },
      { id: 'mobs',         label: 'Mob Index',        icon: <Skull className="w-3.5 h-3.5" />,    desc: 'Creature encyclopedia' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { id: 'structures',  label: 'Structures',  icon: <Building2 className="w-3.5 h-3.5" />, desc: 'Dungeons & ruins' },
      { id: 'redstone',    label: 'Redstone',    icon: <Cpu className="w-3.5 h-3.5" />,       desc: 'Engineering blueprints' },
      { id: 'dimensions',  label: 'Dimensions',  icon: <Globe className="w-3.5 h-3.5" />,     desc: 'Nether & End portals' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { id: 'calculators', label: 'Calculators', icon: <Calculator className="w-3.5 h-3.5" />, desc: 'Survival calculators' },
      { id: 'updates',     label: 'Updates',     icon: <Newspaper className="w-3.5 h-3.5" />,  desc: 'Patch notes logbook' },
    ],
  },
];

function DropdownMenu({
  group,
  activeTab,
  onNavigate,
}: {
  group: typeof NAV_GROUPS[0];
  activeTab: string;
  onNavigate: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isGroupActive = group.items.some((i) => i.id === activeTab);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-150 whitespace-nowrap ${
          isGroupActive
            ? 'text-emerald-300 bg-emerald-950/40 border border-emerald-500/25'
            : open
            ? 'text-white bg-slate-800/70 border border-slate-700/60'
            : 'text-gray-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180 text-emerald-400' : 'opacity-60'}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-slate-900/98 backdrop-blur-xl border border-emerald-900/30 rounded-xl shadow-2xl shadow-black/50 z-[200] overflow-hidden">
          <div className="p-1.5">
            {group.items.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setOpen(false); }}
                className={`w-full flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-left transition-all group ${
                  activeTab === item.id
                    ? 'bg-emerald-950/60 border border-emerald-500/20'
                    : 'hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <span className={`mt-0.5 shrink-0 ${activeTab === item.id ? 'text-emerald-400' : 'text-gray-500 group-hover:text-emerald-400 transition-colors'}`}>
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className={`text-xs font-semibold leading-tight ${activeTab === item.id ? 'text-emerald-300' : 'text-gray-200'}`}>
                    {item.label}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar({
  activeTab,
  setActiveTab,
  globalSearchQuery,
  setGlobalSearchQuery,
  bookmarksCount,
  onOpenBookmarks,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-emerald-900/30'
          : 'bg-slate-950/85 backdrop-blur-md border-b border-emerald-900/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-3 min-w-0">

          {/* LEFT: Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 shrink-0 group"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center border border-emerald-400/30 font-mono text-lg font-black text-slate-950 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              M
            </div>
            <div className="hidden lg:block leading-none">
              <span className="font-sans font-black tracking-tight text-sm text-white flex items-center gap-1">
                MINECRAFT <span className="text-emerald-400 font-mono font-medium">MASTERY</span>
              </span>
              <p className="text-[8px] font-mono tracking-widest text-emerald-600 uppercase mt-0.5">
                KNOWLEDGE MATRIX
              </p>
            </div>
          </button>

          {/* DESKTOP DROPDOWNS */}
          <div className="hidden md:flex items-center gap-0.5 shrink-0">
            {NAV_GROUPS.map((group) => (
              <DropdownMenu
                key={group.label}
                group={group}
                activeTab={activeTab}
                onNavigate={handleNavClick}
              />
            ))}
          </div>

          {/* CENTER: Search */}
          <div className="flex-1 min-w-0 hidden sm:block max-w-md lg:max-w-lg mx-2">
            <GlobalSearch onNavigate={handleNavClick} autoFocus={false} />
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-1.5 shrink-0 ml-auto sm:ml-0">

            {/* Verified badge */}
            <div
              className="hidden xl:flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-950/40 border border-emerald-900/40 text-emerald-400 font-mono text-[9px] font-bold select-none"
              title="100% Ad-Free Verified Minecraft Knowledge"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>VERIFIED</span>
            </div>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all duration-200 ${
                activeTab === 'about'
                  ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                  : 'bg-slate-800/60 border-slate-700/60 text-gray-300 hover:border-emerald-500/40 hover:text-white'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">About</span>
            </button>

            {/* Contact */}
            <a
              href="mailto:contact@minecraftmastery.com"
              className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-mono font-bold transition-all duration-200 hover:bg-emerald-900/40 hover:border-emerald-400/50"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Contact</span>
            </a>

            {/* Bookmarks */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
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
              className="md:hidden p-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-gray-300 hover:text-white hover:border-emerald-500/40 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/99 backdrop-blur-xl border-t border-slate-800/60 shadow-2xl">
          <div className="px-4 pt-3 pb-2">
            <GlobalSearch
              onNavigate={(tab) => { handleNavClick(tab); setMobileOpen(false); }}
              autoFocus
            />
          </div>

          <div className="px-4 pb-4 space-y-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-[9px] font-mono font-bold text-gray-600 uppercase tracking-widest px-1 mb-1.5">
                  {group.label}
                </p>
                <div className="grid grid-cols-3 gap-1">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex flex-col items-center gap-1 px-2 py-2.5 rounded-xl text-center text-[11px] font-medium transition-all border ${
                        activeTab === item.id
                          ? 'text-emerald-300 bg-emerald-950/50 border-emerald-500/30 font-bold'
                          : 'text-gray-400 bg-slate-800/40 border-slate-700/30 hover:text-white hover:bg-slate-800/70'
                      }`}
                    >
                      <span className={activeTab === item.id ? 'text-emerald-400' : 'text-gray-600'}>
                        {item.icon}
                      </span>
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-2 pt-1 border-t border-slate-800/60">
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
  );
}

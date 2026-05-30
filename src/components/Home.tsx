import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Zap, Compass, Calculator, SwatchBook, ShieldAlert, Sparkles, Server, Cpu, Box, Swords, HelpCircle, ArrowRight, User, RotateCw, ChevronLeft, ChevronRight, Play, Pause, Layers, ShieldCheck } from 'lucide-react';

interface FeaturedGuide {
  title: string;
  category: string;
  tabTarget: string;
  description: string;
  stats: string;
  gradient: string;
  icon: React.ReactNode;
  svgOverlay: React.ReactNode;
}

const featuredGuides: FeaturedGuide[] = [
  {
    title: 'Iron Farm Guide',
    category: 'Farms',
    tabTarget: 'farms',
    description: 'Tired of mining for iron? Build an automated iron golem farm to secure infinite iron ingots for hoppers, rails, and armor while you sleep.',
    stats: 'Yield: 350+ Iron/hr • Difficulty: Intermediate',
    gradient: 'from-slate-700 to-zinc-900',
    icon: <Layers className="w-5 h-5 text-slate-300" />,
    svgOverlay: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-white/20 drop-shadow-md">
        <rect x="25" y="35" width="50" height="30" rx="3" fill="currentColor" transform="rotate(-15 50 50)" />
        <rect x="35" y="25" width="50" height="30" rx="3" fill="currentColor" opacity="0.6" transform="rotate(-15 50 50)" />
      </svg>
    )
  },
  {
    title: 'Villager Trading Guide',
    category: 'Villager Guides',
    tabTarget: 'villagers',
    description: 'Unlock the ultimate trading economy. Learn how to breed villagers, assign job sites, and cure zombies to buy full enchanted diamond gear for a single emerald.',
    stats: 'Profit: Max Emeralds • Difficulty: Beginner',
    gradient: 'from-emerald-700 to-teal-950',
    icon: <SwatchBook className="w-5 h-5 text-emerald-400" />,
    svgOverlay: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-emerald-400/20 drop-shadow-md">
        <polygon points="50,15 80,35 80,65 50,85 20,65 20,35" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Enderman XP Farm',
    category: 'Farms',
    tabTarget: 'farms',
    description: 'Unlock level 30 in under a minute! Transport yourself to the End and construct a hyper-efficient experience farm using endermites and falling chutes.',
    stats: 'Yield: 50,000 XP/hr • Difficulty: Advanced',
    gradient: 'from-purple-900 to-indigo-955',
    icon: <Zap className="w-5 h-5 text-purple-400 animate-pulse" />,
    svgOverlay: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-fuchsia-400/20 drop-shadow-md">
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M25,50 Q50,20 75,50 Q50,80 25,50 Z" fill="currentColor" opacity="0.4" />
        <circle cx="50" cy="50" r="10" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Nether Hub Guide',
    category: 'Dimensions',
    tabTarget: 'dimensions',
    description: 'Construct safe high-speed travel tunnels on the Nether roof. Harness coordinates math to connect far-away overworld bases in seconds.',
    stats: 'Speed: 8x Overworld • Difficulty: Intermediate',
    gradient: 'from-red-800 to-rose-950',
    icon: <Compass className="w-5 h-5 text-rose-400" />,
    svgOverlay: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-red-500/20 drop-shadow-md">
        <rect x="25" y="20" width="50" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="8" />
        <rect x="33" y="28" width="34" height="44" fill="currentColor" opacity="0.3" />
      </svg>
    )
  },
  {
    title: 'Elytra Guide',
    category: 'Dimensions',
    tabTarget: 'dimensions',
    description: 'Take to the skies! Learn how to navigate treacherous outer End islands, locate floating end ships, retrieve glider wings, and craft aviation rockets.',
    stats: 'Gear: Elytra Wings • Difficulty: Advanced',
    gradient: 'from-sky-700 to-indigo-900',
    icon: <Box className="w-5 h-5 text-sky-400" />,
    svgOverlay: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-sky-400/20 drop-shadow-md">
        <path d="M50,20 C30,20 15,45 15,70 C15,80 25,80 35,70 L50,55 L65,70 C75,80 85,80 85,70 C85,45 70,20 50,20 Z" fill="currentColor" opacity="0.7" />
      </svg>
    )
  },
  {
    title: 'Raid Farm Guide',
    category: 'Farms',
    tabTarget: 'farms',
    description: 'Tackle waves of pillagers automatically. Harvest stacks of emeralds, gunpowder, redstone, and rare Totems of Undying to achieve complete survival immortality.',
    stats: 'Yield: Infinite Totems • Difficulty: Advanced',
    gradient: 'from-rose-800 to-purple-950',
    icon: <Swords className="w-5 h-5 text-rose-450" />,
    svgOverlay: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 text-rose-500/20 drop-shadow-md">
        <path d="M20,20 L80,80 M80,20 L20,80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <rect x="40" y="25" width="20" height="50" fill="currentColor" opacity="0.6" rx="2" />
      </svg>
    )
  }
];

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  // Initialize at a random guide index on mount
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * featuredGuides.length));
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused || isShuffling) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % featuredGuides.length);
          return 0;
        }
        return prev + 1.25; // Smooth incremental speed
      });
    }, 80);

    return () => clearInterval(timer);
  }, [isPaused, isShuffling]);

  const handleNext = () => {
    if (isShuffling) return;
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % featuredGuides.length);
  };

  const handlePrev = () => {
    if (isShuffling) return;
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + featuredGuides.length) % featuredGuides.length);
  };

  const handleShuffle = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    let count = 0;
    const interval = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * featuredGuides.length));
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsShuffling(false);
        setProgress(0);
      }
    }, 100);
  };

  // Stagger Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 14,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16"
    >
      {/* Homepage Hero Section */}
      <motion.div
        variants={itemVariants}
        className="relative text-center py-20 md:py-28 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-955 border border-emerald-950/60 shadow-xl shadow-black/40 flex flex-col items-center px-6 md:px-12 transition-all duration-300 backdrop-blur-xl group"
      >
        {/* Floating Decor Items - Isometric Blocks */}
        {/* Grass Block Floating Left */}
        <motion.div
          className="absolute left-6 md:left-14 top-10 md:top-16 opacity-85 pointer-events-none hidden sm:block"
          animate={{
            y: [0, -15, 0],
            rotate: [12, -4, 12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" width="55" height="55" className="filter drop-shadow-xl">
            <path d="M50,15 L85,32.5 L50,50 L15,32.5 Z" fill="#10B981" />
            <path d="M15,32.5 L50,50 L50,85 L15,67.5 Z" fill="#78350F" />
            <path d="M50,50 L85,32.5 L85,67.5 L50,85 Z" fill="#92400E" />
            <path d="M15,32.5 L50,50 L50,60 L38,53 L32,58 L15,45 Z" fill="#047857" />
            <path d="M50,50 L85,32.5 L85,45 L72,55 L64,50 L50,60 Z" fill="#047857" />
          </svg>
        </motion.div>

        {/* Redstone Block Floating Right */}
        <motion.div
          className="absolute right-6 md:right-16 bottom-10 md:bottom-20 opacity-85 pointer-events-none hidden sm:block"
          animate={{
            y: [0, 18, 0],
            rotate: [-8, 12, -8],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" width="60" height="60" className="filter drop-shadow-xl">
            <path d="M50,15 L85,32.5 L50,50 L15,32.5 Z" fill="#EF4444" />
            <path d="M15,32.5 L50,50 L50,85 L15,67.5 Z" fill="#B91C1C" />
            <path d="M50,50 L85,32.5 L85,67.5 L50,85 Z" fill="#DC2626" />
          </svg>
        </motion.div>

        {/* Emerald Block Floating Top Right */}
        <motion.div
          className="absolute right-10 md:right-28 top-8 md:top-12 opacity-85 pointer-events-none hidden sm:block"
          animate={{
            y: [0, -12, 0],
            rotate: [5, -10, 5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 100 100" width="45" height="45" className="filter drop-shadow-xl">
            <path d="M50,15 L85,32.5 L50,50 L15,32.5 Z" fill="#34D399" />
            <path d="M15,32.5 L50,50 L50,85 L15,67.5 Z" fill="#047857" />
            <path d="M50,50 L85,32.5 L85,67.5 L50,85 Z" fill="#059669" />
          </svg>
        </motion.div>

        {/* Dynamic portal graphics/Aurora lighting effect inside hero */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.14),transparent_65%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.12),transparent_65%)] pointer-events-none" />

        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-900/40 rounded-full shadow-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>MINECRAFT v1.21 EXPLORER SPEC</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6.5xl tracking-tight text-white leading-tight">
            Master Survival <br />
            with <span className="relative inline-block text-emerald-450 font-extrabold">Elite Precision</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-250 max-w-2xl mx-auto leading-relaxed">
            Supercharge your biome coordinates, village trading loops, weapon modifier comparisons, dimensional raids, and automated farm layouts inside a clean, high-performance companion portal.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.035, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('progression')}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-display text-sm font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-450"
            >
              <BookOpen className="w-4 h-4 text-neutral-950" />
              <span>Explore Progression Path</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.035, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('farms')}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 font-display text-sm font-bold text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer border border-emerald-950/60"
            >
              <Zap className="w-4 h-4 text-emerald-405" />
              <span>Browse Farm Database</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Today's Featured Guide */}
      <motion.div variants={itemVariants} className="space-y-5">
        <div className="flex justify-between items-center border-b border-emerald-950/60 pb-2">
          <h3 className="font-display text-sm font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-450" /> Today's Featured Guide
          </h3>
          <div className="flex items-center gap-2">
            {/* Auto-rotate play/pause indicator button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-lg border border-emerald-950/60 bg-neutral-950/50 hover:bg-slate-900 text-gray-300 hover:text-white transition cursor-pointer shadow-md"
              title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
            {/* Shuffle Roll Button */}
            <button
              onClick={handleShuffle}
              disabled={isShuffling}
              className={`p-1.5 rounded-lg border border-emerald-950/60 bg-neutral-950/50 hover:bg-slate-900 text-gray-300 hover:text-emerald-455 transition cursor-pointer shadow-md ${isShuffling ? 'animate-spin' : ''}`}
              title="Roll Random Guide"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
            <div className="flex gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg border border-emerald-950/60 bg-neutral-955/50 hover:bg-slate-900 text-gray-300 hover:text-white transition cursor-pointer shadow-md"
                title="Previous Guide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg border border-emerald-950/60 bg-neutral-955/50 hover:bg-slate-900 text-gray-300 hover:text-white transition cursor-pointer shadow-md"
                title="Next Guide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Guide Card */}
        <div
          className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-2xl transition-all duration-300 backdrop-blur-xs group/card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Content */}
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-900/40 w-fit">
                {featuredGuides[currentIndex].icon}
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest">
                {featuredGuides[currentIndex].category}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight group-hover/card:text-emerald-450 transition-colors">
              {featuredGuides[currentIndex].title}
            </h4>

            <p className="text-xs sm:text-sm text-gray-250 font-sans leading-relaxed">
              {featuredGuides[currentIndex].description}
            </p>

            <div className="p-3 bg-neutral-950 border border-emerald-950/40 rounded-xl font-mono text-xs text-emerald-300 w-fit shadow-md font-semibold">
              {featuredGuides[currentIndex].stats}
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(featuredGuides[currentIndex].tabTarget)}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-neutral-955 font-display text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer border border-emerald-450"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-955" />
              </motion.button>
            </div>
          </div>

          {/* Thumbnail / SVG Visual Column */}
          <div className="w-full md:w-56 h-40 md:h-48 rounded-2xl overflow-hidden relative shrink-0 shadow-inner flex items-center justify-center bg-neutral-955 border border-emerald-955/20 transition-transform duration-500 group-hover/card:scale-[1.01]">
            {/* Base rich gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${featuredGuides[currentIndex].gradient} opacity-90`} />
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            {/* Hover overlay glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_75%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Glowing active block */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.85, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 10 }}
              className="z-10 relative drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-[1.08] transition-transform duration-300"
            >
              {featuredGuides[currentIndex].svgOverlay}
            </motion.div>
          </div>

          {/* Rotating Progress Line at the very bottom */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-neutral-950/30 overflow-hidden">
            <div
              className="h-full bg-emerald-500 dark:bg-emerald-400 transition-all duration-75 shadow-[0_-2px_8px_rgba(16,185,129,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Featured Quick Jump Portal Links / Bento-like modules */}
      <motion.div variants={itemVariants} className="space-y-5">
        <h3 className="font-display text-sm font-bold text-gray-300 uppercase tracking-widest border-b border-emerald-950/60 pb-2 flex items-center gap-2">
          <Calculator className="w-4 h-4 text-emerald-450" /> Quick Access Calculators
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Nether Portal Syncer', desc: 'Sync Overworld and Nether gates.', tab: 'calculators' },
            { title: 'XP Spawner Optimizer', desc: 'Map perfect survival standing blocks.', tab: 'calculators' },
            { title: 'Beacon Block Planner', desc: 'Resource lists for pyramids.', tab: 'calculators' },
            { title: 'Stacked Raid Farm Calc', desc: 'Forecast emerald, totem, and witch drops.', tab: 'calculators' },
          ].map((tool, idx) => (
            <motion.button
              whileHover={{ y: -4 }}
              key={idx}
              onClick={() => setActiveTab(tool.tab)}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-5 rounded-2xl border border-emerald-950/60 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-md hover:border-emerald-555 group backdrop-blur-xs"
            >
              <div>
                <span className="text-emerald-300 font-display font-bold text-sm block group-hover:text-emerald-400 transition-colors">✓ {tool.title}</span>
                <p className="text-xs text-gray-300 mt-2 font-sans font-medium leading-relaxed">{tool.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 self-end mt-4 text-[11px] font-mono font-bold text-gray-400 group-hover:text-emerald-450 group-hover:translate-x-1 transition-all">
                <span>OPEN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Why Minecraft Mastery? Trust Section */}
      <motion.div variants={itemVariants} className="space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-900/40 rounded-full shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% AD-FREE & VERIFIED CORE MECHANICS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
            Why Minecraft Mastery?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
            Built by a survival player for the community. We focus on accuracy, high performance, and visual clarity to help you play smarter, build bigger, and save time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Beginner-Friendly Guides',
              desc: 'Step-by-step survival documentation crafted with absolute clarity for players taking their very first steps in survival.',
              icon: <BookOpen className="w-5 h-5" />,
              color: 'emerald',
              glow: 'rgba(16,185,129,0.15)',
            },
            {
              title: 'Practical Survival Tips',
              desc: 'Tested mechanics, coordinate synchronization, and progression checklists to keep your hardcore survival worlds safe.',
              icon: <Compass className="w-5 h-5" />,
              color: 'amber',
              glow: 'rgba(245,158,11,0.15)',
            },
            {
              title: 'Updated Information',
              desc: 'Fully optimized for the modern Minecraft v1.21 Tricky Trials expansion, Trial Spawners, and armored wolves.',
              icon: <Sparkles className="w-5 h-5 animate-pulse" />,
              color: 'cyan',
              glow: 'rgba(6,182,212,0.15)',
            },
            {
              title: 'Easy-To-Understand Tutorials',
              desc: 'Say goodbye to bloated videos and clickbait. Enjoy clean layouts, materials checklists, and precise block blueprints.',
              icon: <HelpCircle className="w-5 h-5" />,
              color: 'purple',
              glow: 'rgba(139,92,246,0.15)',
            },
            {
              title: 'Free Tools & Calculators',
              desc: 'High-performance interactive web tools to instantly sync portal grids, calculate spawner bounds, and plan raids.',
              icon: <Calculator className="w-5 h-5" />,
              color: 'rose',
              glow: 'rgba(244,63,94,0.15)',
            },
            {
              title: 'Technical Minecraft Resources',
              desc: 'Deep-dive breakdowns covering villager job workstations, exact mob spawning conditions, and crop growth mechanics.',
              icon: <Cpu className="w-5 h-5" />,
              color: 'indigo',
              glow: 'rgba(99,102,241,0.15)',
            }
          ].map((feature, idx) => (
            <motion.div
              whileHover={{ y: -6, scale: 1.015 }}
              key={idx}
              className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-2xl flex flex-col justify-between cursor-default group transition-all duration-300 shadow-md hover:shadow-2xl backdrop-blur-xs relative overflow-hidden minecraft-card"
            >
              {/* Decorative radial overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${feature.glow}, transparent 70%)`
                }}
              />
              
              <div className="space-y-4 relative z-10">
                <div className={`p-2.5 w-fit rounded-xl border transition-all duration-300 ${
                  feature.color === 'emerald' ? 'text-emerald-450 bg-emerald-950/40 border-emerald-900/40 group-hover:scale-110' :
                  feature.color === 'amber' ? 'text-amber-400 bg-amber-950/40 border-amber-900/40 group-hover:scale-110' :
                  feature.color === 'cyan' ? 'text-cyan-400 bg-cyan-950/40 border-cyan-900/40 group-hover:scale-110' :
                  feature.color === 'purple' ? 'text-purple-400 bg-purple-950/40 border-purple-900/40 group-hover:scale-110' :
                  feature.color === 'rose' ? 'text-rose-400 bg-rose-955/40 border-rose-900/40 group-hover:scale-110' :
                  'text-indigo-400 bg-indigo-950/40 border-indigo-900/40 group-hover:scale-110'
                }`}>
                  {feature.icon}
                </div>
                
                <h4 className={`font-display font-extrabold text-lg text-white transition-colors duration-300 ${
                  feature.color === 'emerald' ? 'group-hover:text-emerald-400' :
                  feature.color === 'amber' ? 'group-hover:text-amber-400' :
                  feature.color === 'cyan' ? 'group-hover:text-cyan-400' :
                  feature.color === 'purple' ? 'group-hover:text-purple-400' :
                  feature.color === 'rose' ? 'group-hover:text-rose-400' :
                  'group-hover:text-indigo-400'
                }`}>
                  {feature.title}
                </h4>
                
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Small accent footer checkmark inside card */}
              <div className="flex items-center gap-1.5 self-end mt-4 text-[10px] font-mono font-bold text-gray-400 group-hover:text-emerald-450 transition-colors duration-300">
                <span>VERIFIED</span>
                <span className="text-[12px]">✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Main Categories Bento Matrix layout */}
      <motion.div variants={itemVariants} className="space-y-5">
        <h3 className="font-display text-sm font-bold text-gray-300 uppercase tracking-widest border-b border-emerald-950/60 pb-2 flex items-center gap-2">
          <SwatchBook className="w-4 h-4 text-emerald-455" /> Technical Categories Database
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mobs, Redstone, Enchantments, Villagers, Biomes, Dimensions */}
          {[
            {
              id: 'mobs',
              title: 'Interactive Mob Index',
              desc: 'Review hostile behavior, health scales, core weaknesses, block conditions, and ultimate guide farming recommendations.',
              icon: <Swords className="w-5 h-5 text-rose-500" />,
              actionText: 'Browse Mob Index',
            },
            {
              id: 'redstone',
              title: 'Redstone Academy',
              desc: 'Examine item sorters, continuous tick clocks, piston flying machines, and structural logic gate diagrams.',
              icon: <Cpu className="w-5 h-5 text-emerald-500" />,
              actionText: 'Learn Redstone Engineering',
            },
            {
              id: 'enchantments',
              title: 'Enchantment Matrix',
              desc: 'Select optimal weapon multipliers, review protection level curves, and evaluate incompatible upgrades side-by-side.',
              icon: <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />,
              actionText: 'Discover Enchantments',
            },
            {
              id: 'villagers',
              title: 'Villagers & Job Sites',
              desc: 'Explore apprentice-to-master trades, librarian fletcher layouts, and 3x3 crafting workbench recipes.',
              icon: <SwatchBook className="w-5 h-5 text-amber-500" />,
              actionText: 'Configure Workstations',
            },
            {
              id: 'biomes',
              title: 'Biomes & Climates',
              desc: 'A complete inventory of environmental dangers, flora, climate multipliers, and cherries to badlands advice.',
              icon: <Compass className="w-5 h-5 text-teal-450" />,
              actionText: 'Explore Biomes',
            },
            {
              id: 'dimensions',
              title: 'Dimensions Checkpoints',
              desc: 'Comprehensive checklists for local guides, boss battle requirements, and nether fortress exploration loops.',
              icon: <Box className="w-5 h-5 text-fuchsia-455" />,
              actionText: 'Navigate Dimensions',
            },
          ].map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-2xl flex flex-col justify-between h-56 cursor-pointer hover:border-emerald-500/40 group transition-all duration-300 shadow-md hover:shadow-xl minecraft-card backdrop-blur-xs"
            >
              <div className="space-y-3.5">
                <div className="p-2 w-fit rounded-lg bg-neutral-950 border border-emerald-950/45">
                  {cat.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-white group-hover:text-emerald-450 transition-colors">{cat.title}</h4>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <span className="text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5 mt-2 group-hover:translate-x-1.5 transition-transform">
                {cat.actionText} →
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* MEET THE CREATOR SECTION */}
      <motion.div
        variants={itemVariants}
        className="relative rounded-3xl overflow-hidden border border-emerald-950/60 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-10 shadow-xl shadow-black/40 transition-all duration-300 backdrop-blur-xs"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.05),transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <h3 className="font-display text-xs font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" /> Sahil • Gaming Portal Architect
            </h3>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Meet the Creator
            </h2>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-gray-250 leading-relaxed">
              <p>
                Hi, I'm Sahil. I've spent hundreds of hours playing Minecraft, building farms, experimenting with villagers, exploring structures, and learning game mechanics.
              </p>
              <p className="font-medium text-gray-350">
                I created Minecraft Mastery because I wanted one place where players could find useful Minecraft information without searching through dozens of websites and videos. Whether you're a beginner building your first house or an advanced player creating mega farms, my goal is to help you learn faster and enjoy the game more.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('about')}
              className="w-full lg:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-neutral-950 font-display text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer border border-emerald-400"
            >
              <span>Explore My Builder Profile</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

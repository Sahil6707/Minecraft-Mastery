import React, { useState } from 'react';
import { Compass, Zap, Flame, Layers, ShieldAlert, Sparkles, Scale, Info, Crop } from 'lucide-react';

export default function CalculatorPanel() {
  const [activeCalc, setActiveCalc] = useState<
    | 'coordinate'
    | 'xp'
    | 'beacon'
    | 'fuel'
    | 'crop'
    | 'spawn'
    | 'chunk'
    | 'raid'
    | 'trade'
  >('coordinate');

  // 1. Coordinate / Portal Converter States
  const [overworldX, setOverworldX] = useState<number>(800);
  const [overworldY, setOverworldY] = useState<number>(64);
  const [overworldZ, setOverworldZ] = useState<number>(-1200);

  const [netherX, setNetherX] = useState<number>(100);
  const [netherY, setNetherY] = useState<number>(64);
  const [netherZ, setNetherZ] = useState<number>(-150);

  // 2. XP States
  const [currentLvl, setCurrentLvl] = useState<number>(0);
  const [targetLvl, setTargetLvl] = useState<number>(30);

  // 3. Beacon States
  const [beaconTier, setBeaconTier] = useState<number>(4); // 1, 2, 3, 4 layers

  // 4. Fuel states
  const [fuelType, setFuelType] = useState<string>('lava_bucket');
  const [fuelQuantity, setFuelQuantity] = useState<number>(1);

  // 5. Crop States
  const [isHydrated, setIsHydrated] = useState<boolean>(true);
  const [isAlternating, setIsAlternating] = useState<boolean>(true);
  const [lightLevel, setLightLevel] = useState<number>(15);

  // 6. Spawn States
  const [spawnDistance, setSpawnDistance] = useState<number>(24);

  // 7. Chunk states
  const [blockX, setBlockX] = useState<number>(145);
  const [blockZ, setBlockZ] = useState<number>(-289);

  // 8. Raid States
  const [raidTier, setRaidTier] = useState<'normal' | 'hard' | 'ominous'>('hard');
  const [slayTimeSeconds, setSlayTimeSeconds] = useState<number>(45);

  // 9. Trade States
  const [defaultCost, setDefaultCost] = useState<number>(32);
  const [cureCycles, setCureCycles] = useState<number>(1);
  const [hasHeroOfTheVillage, setHasHeroOfTheVillage] = useState<boolean>(false);

  // --- XP Math Helper ---
  const getXpForLevel = (lvl: number): number => {
    if (lvl <= 16) return lvl * lvl + 6 * lvl;
    if (lvl <= 31) return 2.5 * lvl * lvl - 40.5 * lvl + 360;
    return 4.5 * lvl * lvl - 162.5 * lvl + 2220;
  };

  const currentXP = getXpForLevel(currentLvl);
  const targetXP = getXpForLevel(targetLvl);
  const xpNeeded = Math.max(0, targetXP - currentXP);

  // Beacon block calculation helper
  const getBeaconBlocks = (tier: number) => {
    let blocks = 0;
    const layers = [];
    for (let i = 1; i <= tier; i++) {
      const w = 2 * i + 1; // 3, 5, 7, 9
      const layerBlocks = w * w;
      blocks += layerBlocks;
      layers.push({ layer: i, size: `${w}x${w}`, blocksCount: layerBlocks });
    }
    return { total: blocks, layers };
  };

  const beaconData = getBeaconBlocks(beaconTier);

  // Fuel options
  const fuelList: Record<
    string,
    { name: string; capacity: number; description: string; rating: string }
  > = {
    lava_bucket: {
      name: 'Lava Bucket',
      capacity: 100,
      description: 'Extremely long lifespan. Returns an empty bucket.',
      rating: 'S-Tier (Best all-rounder)',
    },
    kelp_block: {
      name: 'Dried Kelp Block',
      capacity: 20,
      description: 'Fully automated, organic and highly sustainable fuel source.',
      rating: 'S-Tier (Sustainable)',
    },
    coal_block: {
      name: 'Coal Block',
      capacity: 80,
      description: 'Highly concentrated fossil fuel block.',
      rating: 'A-Tier',
    },
    coal: {
      name: 'Coal / Charcoal',
      capacity: 8,
      description: 'Standard early and mid-game smelting catalyst.',
      rating: 'B-Tier',
    },
    wood_log: {
      name: 'Raw Wood Log / Planks',
      capacity: 1.5,
      description: 'Very cheap but inefficient. Better converted to charcoal.',
      rating: 'D-Tier',
    },
    bamboo: {
      name: 'Bamboo',
      capacity: 0.25,
      description: 'Extremely weak. Smelts only 1/4 of an item.',
      rating: 'F-Tier',
    },
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-emerald-955/60 overflow-hidden shadow-md transition-all duration-300 backdrop-blur-md">
      {/* Tab bar header */}
      <div className="flex flex-wrap border-b border-emerald-950/60 bg-neutral-955 p-2 gap-1">
        {[
          { id: 'coordinate', label: 'Coordinates (Portal)', icon: Compass },
          { id: 'xp', label: 'XP Calculator', icon: Zap },
          { id: 'beacon', label: 'Beacon Planner', icon: Layers },
          { id: 'fuel', label: 'Furnace Fuels', icon: Flame },
          { id: 'crop', label: 'Crops Growth', icon: Crop },
          { id: 'spawn', label: 'Mob Spawner Safety', icon: ShieldAlert },
          { id: 'chunk', label: 'Chunk Borders', icon: Compass },
          { id: 'raid', label: 'Raid Farm Output', icon: Scale },
          { id: 'trade', label: 'Trade Discounts', icon: Sparkles },
        ].map((btn) => {
          const Icon = btn.icon;
          return (
            <button
              key={btn.id}
              onClick={() => setActiveCalc(btn.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeCalc === btn.id
                  ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 shadow-sm'
                  : 'text-gray-400 hover:text-white hover:bg-neutral-900/50'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{btn.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-6">
        {/* 1. COORDINATE CONVERTER */}
        {activeCalc === 'coordinate' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-400" /> Overworld ↔ Nether Portal Syncer
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                Portal linking anomalies are caused when coordinates align poorly. Minecraft converts
                horizontal coordinates in an exact <b>1:8 scale</b> (Nether = Overworld ÷ 8). Match
                these exact coordinates to link portals perfectly without cross-interference!
              </p>

              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 font-mono tracking-wide uppercase">
                    INPUT OVERWORLD COORDINATES (X, Y, Z)
                  </h4>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 block">X Coordinate</label>
                      <input
                        type="number"
                        value={overworldX}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setOverworldX(val);
                          setNetherX(Math.round(val / 8));
                        }}
                        className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 font-mono shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 block">Y (Height)</label>
                      <input
                        type="number"
                        value={overworldY}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setOverworldY(val);
                          setNetherY(val);
                        }}
                        className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 font-mono shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 block">Z Coordinate</label>
                      <input
                        type="number"
                        value={overworldZ}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setOverworldZ(val);
                          setNetherZ(Math.round(val / 8));
                        }}
                        className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 font-mono shadow-inner"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center flex-col items-center py-2">
                  <div className="text-[10px] text-emerald-300 font-mono select-none px-3 py-1 rounded bg-emerald-950/40 border border-emerald-500/20">
                    Nether = Overworld ÷ 8
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-400 font-mono tracking-wide uppercase">
                    INPUT NETHER COORDINATES (X, Y, Z)
                  </h4>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 block">X Coordinate</label>
                      <input
                        type="number"
                        value={netherX}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setNetherX(val);
                          setOverworldX(val * 8);
                        }}
                        className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 font-mono shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 block">Y (Height)</label>
                      <input
                        type="number"
                        value={netherY}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setNetherY(val);
                          setOverworldY(val);
                        }}
                        className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 font-mono shadow-inner"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-gray-500 block">Z Coordinate</label>
                      <input
                        type="number"
                        value={netherZ}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setNetherZ(val);
                          setOverworldZ(val * 8);
                        }}
                        className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 text-sm text-gray-200 focus:outline-none focus:border-emerald-500 font-mono shadow-inner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 flex flex-col justify-between shadow-inner">
              <div>
                <h4 className="text-xs font-semibold text-emerald-300 font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-emerald-400" /> Portal Linking Results
                </h4>
                <div className="mt-4 space-y-3 font-sans">
                  <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 shadow-inner">
                    <span className="text-[11px] text-gray-400 font-mono uppercase block">
                      Build Portal inside Overworld at:
                    </span>
                    <span className="text-xl font-bold font-mono text-white">
                      X: {overworldX}, Y: {overworldY}, Z: {overworldZ}
                    </span>
                  </div>
                  <div className="bg-neutral-900 p-3 rounded border border-emerald-500/20 shadow-inner">
                    <span className="text-[11px] text-emerald-300 font-mono uppercase block">
                      Connect to matching Nether portals placed precisely at:
                    </span>
                    <span className="text-xl font-bold font-mono text-emerald-300">
                      X: {netherX}, Y: {netherY}, Z: {netherZ}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-3 rounded text-[11px] text-gray-300 font-mono mt-4">
                💡 <b>Pro tip:</b> Always ensure both portals are aligned to the same height (Y-coordinate)
                to minimize portal routing glitches that drop you in random lava lakes!
              </div>
            </div>
          </div>
        )}

        {/* 2. XP CALCULATOR */}
        {activeCalc === 'xp' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400 animate-pulse" /> Character Experience Planner
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                As levels increase, the XP required to reach the next tier increases exponentially! 
                Input your starting level and target levels to understand the total XP required, and
                view custom quotas of mobs to grind to complete the target.
              </p>

              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4">
                <div>
                  <label className="text-xs font-mono text-gray-350 block">Current Character Level ({currentLvl})</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentLvl}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCurrentLvl(val);
                      if (val > targetLvl) setTargetLvl(val + 1);
                    }}
                    className="w-full accent-emerald-500 mt-2 cursor-pointer bg-neutral-900 rounded-lg h-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-gray-350 block">Target Character Level ({targetLvl})</label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={targetLvl}
                    onChange={(e) => setTargetLvl(Math.max(currentLvl + 1, Number(e.target.value)))}
                    className="w-full accent-emerald-500 mt-2 cursor-pointer bg-neutral-900 rounded-lg h-2"
                  />
                </div>

                <div className="p-3 bg-neutral-900 rounded border border-emerald-500/25 flex justify-between items-center text-xs shadow-inner">
                  <span className="font-mono text-gray-400">Total XP Points Required:</span>
                  <span className="font-bold text-emerald-300 font-mono text-lg">
                    {xpNeeded.toLocaleString()} XP
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 font-mono text-xs shadow-inner">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest">
                HOW TO REACH TIER {targetLvl} (FARMING RUN QUOTAS)
              </h4>
              <p className="text-[11px] text-gray-400 mt-1 font-sans">
                To collect {xpNeeded.toLocaleString()} XP points, you must defeat or complete:
              </p>

              <div className="mt-4 space-y-2.5 font-mono text-xs">
                {[
                  { name: 'Endermen (in End XP farm)', xp: 5, color: 'text-fuchsia-400 font-bold' },
                  { name: 'Blazes / Guardians', xp: 10, color: 'text-amber-450 font-bold' },
                  { name: 'Zombies / Skeletons (Standard spawner)', xp: 5, color: 'text-teal-400 font-bold' },
                  { name: 'Mining Diamond / Emerald Ores', xp: 5, color: 'text-cyan-400 font-bold' },
                  { name: 'Breed Sheep / Cows', xp: 2, color: 'text-pink-400 font-bold' },
                  { name: 'Smelt Cobblestone (per block output)', xp: 0.1, color: 'text-gray-500' },
                ].map((mob) => {
                  const runs = Math.ceil(xpNeeded / mob.xp);
                  return (
                    <div
                      key={mob.name}
                      className="flex justify-between items-center bg-neutral-900 p-2 rounded border border-emerald-950/30 shadow-inner"
                    >
                      <span className="text-gray-300 text-xs">{mob.name}</span>
                      <span className={`font-bold ${mob.color}`}>
                        {xpNeeded > 0 ? runs.toLocaleString() : 0} <span className="text-[10px] text-gray-500 font-normal">units</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 3. BEACON PLANNING */}
        {activeCalc === 'beacon' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" /> Beacon pyramid & materials planner
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                Beacons deliver continuous buffs (Speed, Haste, Strength, Resistance) within a radius coordinates. 
                Pyramids can be constructed from Iron, Gold, Diamond, Netherite, or Emerald blocks.
              </p>

              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4">
                <div>
                  <label className="text-xs font-mono text-gray-350 block">Structure Size of Pyramid: Level {beaconTier}</label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {[1, 2, 3, 4].map((t) => (
                      <button
                        key={t}
                        onClick={() => setBeaconTier(t)}
                        className={`py-2 rounded font-mono text-xs border cursor-pointer ${
                          beaconTier === t
                            ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold'
                            : 'bg-neutral-900 border-emerald-950/80 text-gray-400 hover:text-white'
                        }`}
                      >
                        Tier {t}
                        <span className="block text-[9px] text-gray-500">
                          {t === 1 ? '9 Blks' : t === 2 ? '34 Blks' : t === 3 ? '83 Blks' : '164 Blks'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 space-y-1 text-xs shadow-inner">
                  <div className="flex justify-between font-mono">
                    <span className="text-gray-405">Total Blocks needed:</span>
                    <span className="text-emerald-300 font-bold">{beaconData.total} blocks</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-gray-405">Total Raw Ingot count:</span>
                    <span className="text-emerald-400 font-bold">{(beaconData.total * 9).toLocaleString()} items!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 flex flex-col justify-between shadow-inner">
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
                  BEACON TIER {beaconTier} PYRAMID CHECKLIST
                </h4>
                <div className="mt-3 space-y-2 font-mono text-xs">
                  {beaconData.layers.map((l) => (
                    <div
                      key={l.layer}
                      className="p-2.5 bg-neutral-900 rounded border border-emerald-950/30 flex justify-between shadow-inner"
                    >
                      <span className="text-gray-300">Layer {l.layer} ({l.size} matrix)</span>
                      <span className="text-emerald-300 font-bold">{l.blocksCount} Blocks</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-3 rounded text-[11px] text-gray-300 font-sans mt-4 font-medium">
                🚀 <b>Unlocked powers:</b>{' '}
                {beaconTier === 1 && 'Speed I, Haste I.'}
                {beaconTier === 2 && 'Speed I, Haste I, Resistance I, Jump Boost I.'}
                {beaconTier === 3 && 'Speed I, Haste I, Resistance I, Jump Boost I, Strength I.'}
                {beaconTier === 4 && 'Speed II, Haste II (Insta-mine standard stone!), Resistance II, Jump II, Strength II, + Regeneration!'}
              </div>
            </div>
          </div>
        )}

        {/* 4. FUEL EFFICIENCY CALCULATOR */}
        {activeCalc === 'fuel' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-450" /> Furnace Fuel Efficiency Analyzer
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                Maximize your smelting pipelines by comparing item capabilities of heat sources! 
                Input the amount of fuel items below, choose your source type, and view raw statistics.
              </p>

              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-350 block">Fuel Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={fuelQuantity}
                      onChange={(e) => setFuelQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 mt-1.5 text-sm font-mono text-gray-200 focus:outline-none focus:border-emerald-500 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-350 block">Select Fuel Item</label>
                    <select
                      value={fuelType}
                      onChange={(e) => setFuelType(e.target.value)}
                      className="w-full bg-neutral-900 border border-emerald-950/80 text-gray-200 rounded p-1.5 mt-1.5 text-sm focus:outline-none cursor-pointer shadow-inner outline-none"
                    >
                      {Object.keys(fuelList).map((k) => (
                        <option key={k} value={k}>
                          {fuelList[k].name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 space-y-1 text-xs font-mono shadow-inner">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Smelt Capacity:</span>
                    <span className="text-emerald-305 font-bold">
                      {fuelQuantity * (fuelList[fuelType]?.capacity || 0)} items total
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Smelting Duration:</span>
                    <span className="text-emerald-400 font-bold">
                      {Math.round((fuelQuantity * (fuelList[fuelType]?.capacity || 0) * 10) / 60)} minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 shadow-inner">
              <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-widest">
                FUEL SPEC SHEET: {fuelList[fuelType]?.name}
              </h4>
              <div className="mt-4 space-y-3 font-sans text-xs">
                <div className="bg-neutral-900 p-3 rounded border border-emerald-950/30 shadow-inner">
                  <span className="text-[10px] text-gray-405 font-mono block">EFFICIENCY RATING:</span>
                  <span className="text-sm font-bold text-emerald-300 font-mono">
                    {fuelList[fuelType]?.rating}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed text-xs font-medium">
                  {fuelList[fuelType]?.description} Smelting 1 block inside a standard furnace takes precisely
                  <b> 10 seconds</b> (200 ticks) of heat.
                </p>

                <div className="pt-2 border-t border-emerald-950/30 space-y-1 font-mono text-[11px] text-gray-500">
                  <div>• Lava Bucket capacity: 100 items (1,000s duration)</div>
                  <div>• Charcoal Block capacity: 80 items (800s duration)</div>
                  <div>• Dried Kelp Block capacity: 20 items (200s duration)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. CROP GROWTH CALCULATOR */}
        {activeCalc === 'crop' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Crop className="w-4 h-4 text-emerald-450" /> Crop Growth Ticker
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                Crop growth hinges on soil irrigation, light factors, and layouts. Minecraft plants grow
                twice as fast if planted in <b>alternating rows</b> rather than single-crop fields blocks.
              </p>

              <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Is Farmland Fully Hydrated?</span>
                  <button
                    onClick={() => setIsHydrated(!isHydrated)}
                    className={`px-3 py-1 rounded text-xs leading-none font-bold cursor-pointer transition ${
                      isHydrated ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 shadow-sm' : 'bg-neutral-900 border border-emerald-950/40 text-gray-400'
                    }`}
                  >
                    {isHydrated ? 'HYDRATED' : 'DRY DIRT'}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Are rows alternating?</span>
                  <button
                    onClick={() => setIsAlternating(!isAlternating)}
                    className={`px-3 py-1 rounded text-xs leading-none font-bold cursor-pointer transition ${
                      isAlternating ? 'bg-emerald-950/40 text-emerald-305 border border-emerald-500/30 shadow-sm' : 'bg-neutral-900 border border-emerald-950/40 text-gray-400'
                    }`}
                  >
                    {isAlternating ? 'ALTERNATING' : 'MONO-CULTURE'}
                  </button>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Light Level on Crop block ({lightLevel})</span>
                    <span className="text-gray-500 font-mono">Min 9 needed to grow</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={lightLevel}
                    onChange={(e) => setLightLevel(Number(e.target.value))}
                    className="w-full accent-emerald-500 mt-2 cursor-pointer bg-neutral-900 rounded-lg h-2"
                  />
                </div>
              </div>
            </div>

            <div className="bg-neutral-955 p-4 rounded-lg border border-emerald-950/50 flex flex-col justify-between shadow-inner">
              <div>
                <h4 className="text-xs font-semibold text-white font-mono uppercase tracking-widest">
                  GROWTH ESTIMATOR & FACTORS
                </h4>
                <div className="mt-4 space-y-3">
                  <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 font-mono text-center shadow-inner">
                    <span className="text-[10px] text-gray-400 block uppercase">Estimated full growth time:</span>
                    <span className="text-xl font-bold text-emerald-300">
                      {lightLevel < 9
                        ? 'Infinite (Too dark!)'
                        : !isHydrated && !isAlternating
                        ? '~48-55 minutes'
                        : isHydrated && !isAlternating
                        ? '~24-30 minutes'
                        : isHydrated && isAlternating
                        ? '~12-15 minutes! (Max speed)'
                        : '~35-40 minutes'}
                    </span>
                  </div>

                  <div className="space-y-1 font-mono text-[11px] text-gray-400 leading-relaxed font-medium">
                    <div>• Hydrated soils increase growth ticks by 400%.</div>
                    <div>• Alternating rows block decay penalties, doubling speed.</div>
                    <div>• Light level must be 9+; Torches can substitute sunlight at night!</div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-2.5 rounded text-[10px] text-gray-300 font-mono mt-4 font-medium">
                💡 <b>Builder secret:</b> Plant your pumpkin seeds in hydrated alternating rows next to your melons for a massive output leap!
              </div>
            </div>
          </div>
        )}

        {/* 6. SPAWN RADIUS CALCULATOR */}
        {activeCalc === 'spawn' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-400 animate-pulse" /> Spawner Safety Radius Tracker
              </h3>
              <p className="text-xs text-gray-305 mt-1.5 leading-relaxed font-medium">
                Mob spawning is governed strictly by spatial boundary spheres center points around players. 
                Enter distance details from a target spawner cage to view threat index zones.
              </p>

              <div className="bg-neutral-955 p-4 rounded-lg border border-emerald-955/50 mt-4 space-y-4">
                <div>
                  <label className="text-xs font-mono text-gray-350 block">Distance from Player: {spawnDistance} blocks</label>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={spawnDistance}
                    onChange={(e) => setSpawnDistance(Number(e.target.value))}
                    className="w-full accent-emerald-500 mt-2 cursor-pointer bg-neutral-900 rounded-lg h-2"
                  />
                </div>

                <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 space-y-1 text-xs font-mono shadow-inner">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Spawner cage status:</span>
                    <span className={spawnDistance <= 16 ? 'text-emerald-300 font-bold' : 'text-red-400 font-bold'}>
                      {spawnDistance <= 16 ? 'ACTIVE (Player within 16 blocks)' : 'DORMANT (Too far!)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 font-mono text-xs shadow-inner">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest">
                MOB SPAWNING SPHERES:
              </h4>

              <div className="mt-4 space-y-2">
                <div
                  className={`p-2 rounded border ${
                    spawnDistance <= 24 ? 'bg-indigo-950/40 border-indigo-500' : 'bg-neutral-900 border-emerald-950/30 opacity-60'
                  }`}
                >
                  <span className="font-bold text-indigo-400">0 - 24 Blocks: The Safe Zone</span>
                  <p className="text-[11px] text-gray-350 mt-0.5 font-sans font-medium leading-relaxed">
                    No natural hostile mobs can ever spawn in this inner ring around players. Spawner cages remains fully active though.
                  </p>
                </div>

                <div
                  className={`p-2 rounded border ${
                    spawnDistance > 24 && spawnDistance <= 32 ? 'bg-emerald-950/40 border-emerald-500' : 'bg-neutral-900 border-emerald-950/30 opacity-60'
                  }`}
                >
                  <span className="font-bold text-emerald-300">24 - 32 Blocks: Active threat zone</span>
                  <p className="text-[11px] text-gray-350 mt-0.5 font-sans font-medium leading-relaxed">
                    Hostile mobs spawn naturally and start pathfinding directly at you. Most efficient distance for farms afk.
                  </p>
                </div>

                <div
                  className={`p-2 rounded border ${
                    spawnDistance > 32 && spawnDistance <= 128 ? 'bg-amber-950/40 border-amber-500' : 'bg-neutral-900 border-emerald-950/30 opacity-60'
                  }`}
                >
                  <span className="font-bold text-amber-400">32 - 128 Blocks: Random despawn sphere</span>
                  <p className="text-[11px] text-gray-350 mt-0.5 font-sans font-medium leading-relaxed">
                    Mobs can spawn, but if they wander past 32 blocks, they have a 1 in 800 chance to instantly despawn on every tick.
                  </p>
                </div>

                <div
                  className={`p-2 rounded border ${
                    spawnDistance > 128 ? 'bg-red-950/40 border-red-500' : 'bg-neutral-900 border-emerald-950/30 opacity-60'
                  }`}
                >
                  <span className="font-bold text-red-400">128+ Blocks: Instant clean wipe</span>
                  <p className="text-[11px] text-gray-350 mt-0.5 font-sans font-medium leading-relaxed">
                    Any hostile mob outside this outer boundary despawns IMMEDIATELY on the very next game tick.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 7. CHUNK BORDER CALCULATOR */}
        {activeCalc === 'chunk' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-450" /> Chunk Borders Locator
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                Slime spawning or redstone loaders are restricted tightly inside <b>16x16 block chunks</b>. 
                Farms should sit inside single chunk boundaries to avoid lag or block boundaries bugs. 
                Enter block position below:
              </p>

              <div className="bg-neutral-955 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-350 block">World X coordinate</label>
                    <input
                      type="number"
                      value={blockX}
                      onChange={(e) => setBlockX(Number(e.target.value))}
                      className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 mt-1.5 text-gray-200 focus:outline-none focus:border-emerald-500 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="text-gray-350 block">World Z coordinate</label>
                    <input
                      type="number"
                      value={blockZ}
                      onChange={(e) => setBlockZ(Number(e.target.value))}
                      className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 mt-1.5 text-gray-200 focus:outline-none focus:border-emerald-500 shadow-inner"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 font-mono text-xs shadow-inner">
              <h4 className="text-xs font-semibold text-white uppercase tracking-widest">
                CHUNK POSITION RESULTS
              </h4>

              <div className="mt-4 space-y-3">
                <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 shadow-inner">
                  <span className="text-[10px] text-gray-400 block font-bold">CHUNK GRID POSITION:</span>
                  <span className="text-sm font-bold text-white">
                    Chunk X: {Math.floor(blockX / 16)}, Chunk Z: {Math.floor(blockZ / 16)}
                  </span>
                </div>

                <div className="bg-neutral-900 p-3 rounded border border-emerald-950/40 shadow-inner">
                  <span className="text-[10px] text-gray-400 block font-bold font-mono">BLOCK OFFSET INSIDE CHUNK (0-15 grid):</span>
                  <div className="text-sm font-bold text-white flex justify-between mt-1">
                    <span>Block X Offset: <b className="text-emerald-300 font-extrabold">{((blockX % 16) + 16) % 16}</b></span>
                    <span>Block Z Offset: <b className="text-emerald-300 font-extrabold">{((blockZ % 16) + 16) % 16}</b></span>
                  </div>
                </div>

                <div className="p-2.5 bg-emerald-950/20 border border-emerald-555/20 rounded text-[10px] text-gray-350 leading-relaxed font-sans font-medium">
                  💡 <b>Lag tip:</b> Boundary borders can trigger when a piston splits a block extending into another chunk. Keep redstone clocks fully enclosed in single chunk grids.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 8. RAID FARM EFFICIENCY */}
        {activeCalc === 'raid' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Scale className="w-4 h-4 text-emerald-450" /> Stacked Raid Farm Output
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                Raid farms stack the Bad Omen effect to automatically trigger successive village raids 
                inside automated grinding chambers. Calculations are based on slaying frequency and raid tier.
              </p>

              <div className="bg-neutral-955 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4 font-mono text-xs">
                <div>
                  <label className="text-gray-350 block">Select Raid Challenge Level</label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {['normal', 'hard', 'ominous'].map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setRaidTier(tier as any)}
                        className={`py-1.5 rounded text-xs capitalize cursor-pointer transition ${
                          raidTier === tier
                            ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300 font-bold shadow-sm'
                            : 'bg-neutral-900 border border-emerald-950/80 text-gray-400 hover:text-white'
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-gray-350 block">Average Time to Clear Wave: {slayTimeSeconds}s</label>
                  <input
                    type="range"
                    min="15"
                    max="120"
                    value={slayTimeSeconds}
                    onChange={(e) => setSlayTimeSeconds(Number(e.target.value))}
                    className="w-full accent-emerald-500 mt-2 cursor-pointer bg-neutral-900 rounded-lg h-2"
                  />
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 font-mono text-xs flex flex-col justify-between shadow-inner">
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-widest">
                  ESTIMATED HOURLY LOOT
                </h4>
                <div className="mt-4 space-y-2.5">
                  {[
                    { name: 'Emeralds', qty: raidTier === 'ominous' ? 4500 : raidTier === 'hard' ? 2500 : 1000, color: 'text-emerald-300 font-bold' },
                    { name: 'Totems of Undying', qty: raidTier === 'ominous' ? 180 : raidTier === 'hard' ? 60 : 10, color: 'text-amber-400 font-bold' },
                    { name: 'Redstone Dust', qty: raidTier === 'ominous' ? 1200 : raidTier === 'hard' ? 600 : 200, color: 'text-red-400 font-bold' },
                    { name: 'Glowstone Dust & Sugar', qty: raidTier === 'ominous' ? 3200 : raidTier === 'hard' ? 1800 : 500, color: 'text-yellow-405 font-bold' },
                  ].map((loot) => {
                    const speedMultiplier = 45 / slayTimeSeconds;
                    const finalQty = Math.ceil(loot.qty * speedMultiplier);
                    return (
                      <div
                        key={loot.name}
                        className="flex justify-between items-center bg-neutral-900 p-2 rounded border border-emerald-950/30 shadow-inner"
                      >
                        <span className="text-gray-300">{loot.name}</span>
                        <span className={`font-bold ${loot.color}`}>{finalQty.toLocaleString()} /hr</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-red-950/10 border border-red-900/20 p-2.5 rounded text-[10px] text-gray-400 leading-relaxed mt-4 font-sans font-medium">
                ⚠️ <b>Caution:</b> Ominous Raids summon Vexes that fly through walls. Ensure your killing chambers stand 32 blocks above ground boundaries!
              </div>
            </div>
          </div>
        )}

        {/* 9. VILLAGER TRADE DISCOUNT CALCULATOR */}
        {activeCalc === 'trade' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-emerald-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-450 animate-pulse" /> Villager Trade Price Discounter
              </h3>
              <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-medium">
                By allowing a zombie to bite and infect your villager, then curing them using a Golden Apple
                and Potion of Weakness, you permanently slash trade prices, down to a flat 1 Emerald!
              </p>

              <div className="bg-neutral-955 p-4 rounded-lg border border-emerald-950/50 mt-4 space-y-4 font-mono text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-gray-350 block">Default Trade Cost (Quantity)</label>
                    <input
                      type="number"
                      min="1"
                      max="64"
                      value={defaultCost}
                      onChange={(e) => setDefaultCost(Math.min(64, Math.max(1, Number(e.target.value))))}
                      className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 mt-1.5 font-bold text-white shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="text-gray-350 block">Times Cured</label>
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={cureCycles}
                      onChange={(e) => setCureCycles(Math.min(5, Math.max(0, Number(e.target.value))))}
                      className="w-full bg-neutral-900 border border-emerald-950/80 rounded p-1.5 mt-1.5 font-bold text-white shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-emerald-950/30 pt-3">
                  <span className="text-gray-300 flex items-center gap-1 font-mono">Is Hero of the Village active?</span>
                  <button
                    onClick={() => setHasHeroOfTheVillage(!hasHeroOfTheVillage)}
                    className={`px-3 py-1 rounded text-xs leading-none font-bold cursor-pointer transition ${
                      hasHeroOfTheVillage ? 'bg-emerald-950/40 text-emerald-305 border border-emerald-500/30 shadow-sm' : 'bg-neutral-900 border border-emerald-950/40 text-gray-400'
                    }`}
                  >
                    {hasHeroOfTheVillage ? 'ACTIVE (Defeated Raid)' : 'INACTIVE'}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-emerald-950/50 font-mono text-xs flex flex-col justify-between shadow-inner">
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
                  DISCOUNT PRICE RESULTS
                </h4>

                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-neutral-900 rounded border border-emerald-950/40 text-center shadow-inner animate-fade">
                    <span className="text-[10px] text-gray-400 block font-bold">NEW ADJUSTED TRADE PRICE:</span>
                    <span className="text-2xl font-bold text-emerald-300 flex items-center justify-center gap-1.5 mt-1">
                      {Math.max(1, defaultCost - cureCycles * 5 - (hasHeroOfTheVillage ? 3 : 0))} 
                      <span className="text-xs text-gray-500 font-normal font-sans">items (or 1 Emerald)</span>
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] text-gray-400 leading-relaxed font-sans font-medium">
                    <div>• Each curing cycle yields a permanent <b>-5 item</b> discount price reduction.</div>
                    <div>• Hero of the Village adds a transient <b>-3 item</b> discount.</div>
                    <div>• Minimum trade price for any item in survival Minecraft is capped at 1.</div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 p-2 rounded text-[10px] text-gray-300 leading-relaxed mt-4 font-sans font-medium">
                💡 <b>Pro tip:</b> Lock a master Librarian behind trapdoors to make zombie curing fast, safe, and fully repeatable!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

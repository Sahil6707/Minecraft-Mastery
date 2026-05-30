import React, { useState } from 'react';
import { dimensions } from '../data/dimensions';
import { Compass, Sparkles, HelpCircle } from 'lucide-react';

export default function DimensionPanel() {
  const [activeDim, setActiveDim] = useState<string>('The Overworld');

  const selectedDim = dimensions.find((d) => d.name === activeDim) || dimensions[0];

  return (
    <div className="space-y-6">
      {/* Tab Switcher Grid */}
      <div className="grid grid-cols-3 gap-2.5 bg-neutral-950 p-1.5 rounded-lg border border-emerald-950/60 shadow-inner">
        {dimensions.map((d) => (
          <button
            key={d.name}
            onClick={() => setActiveDim(d.name)}
            className={`py-2.5 rounded-md font-mono text-xs font-bold transition-all uppercase tracking-wide border cursor-pointer ${
              activeDim === d.name
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-transparent border-transparent text-gray-400 hover:text-white'
            }`}
          >
            {d.name.split(' ').pop()}
          </button>
        ))}
      </div>

      {/* Main Dimension Details block */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-955 rounded-2xl overflow-hidden shadow-md space-y-6 p-6 md:p-8 transition-all duration-300 backdrop-blur-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-800 pb-5 gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-300 font-bold block animate-pulse">
              {selectedDim.tagline}
            </span>
            <h4 className="font-display font-semibold text-2xl text-white mt-1 uppercase">
              {selectedDim.name}
            </h4>
          </div>
          <Compass className="w-8 h-8 text-emerald-450 block shrink-0" />
        </div>

        <p className="text-sm text-gray-200 leading-relaxed font-sans max-w-4xl font-medium">
          {selectedDim.description}
        </p>

        {/* Dimension Screenshot Card */}
        <div className="space-y-2">
          <div className="w-full h-44 sm:h-56 overflow-hidden rounded-xl border border-emerald-950/60 shadow-md">
            <img
              src={
                selectedDim.name === 'The Overworld'
                  ? '/mega_base.png'
                  : selectedDim.name === 'The Nether'
                  ? '/nether_hub.png'
                  : '/end_city.png'
              }
              alt={selectedDim.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <p className="text-[10px] font-sans text-gray-400 text-center font-medium leading-relaxed">
            {selectedDim.name === 'The Overworld'
              ? '🟢 Overworld: Breathtaking survival mega base built into custom high mountain peaks with glowing waterfalls.'
              : selectedDim.name === 'The Nether'
              ? '🟢 The Nether: A blue ice transportation network used for fast travel across long distances on the nether roof.'
              : '🟢 The End: Purple end city towers and floating End Ship housing the Elytra glider wings.'}
          </p>
        </div>

        {/* Bento Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Structures */}
          <div className="bg-neutral-950 p-4 border border-emerald-950/45 rounded-xl space-y-2 shadow-inner">
            <span className="text-[10px] font-mono font-bold text-gray-450 uppercase tracking-wide block border-b border-emerald-950/40 pb-1">
              Local Ruins & Structures
            </span>
            <div className="flex flex-col gap-1 text-xs font-mono text-gray-300">
              {selectedDim.structures.map((s) => (
                <div key={s} className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobs */}
          <div className="bg-neutral-950 p-4 border border-emerald-950/45 rounded-xl space-y-2 shadow-inner">
            <span className="text-[10px] font-mono font-bold text-gray-450 uppercase tracking-wide block border-b border-emerald-950/40 pb-1">
              Endemic Mobs
            </span>
            <div className="flex flex-col gap-1 text-xs font-mono text-gray-300">
              {selectedDim.mobs.map((m) => (
                <div key={m} className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-neutral-950 p-4 border border-emerald-950/45 rounded-xl space-y-2 shadow-inner">
            <span className="text-[10px] font-mono font-bold text-gray-450 uppercase tracking-wide block border-b border-emerald-950/40 pb-1">
              Key Resources
            </span>
            <div className="flex flex-col gap-1 text-xs font-mono text-gray-300">
              {selectedDim.resources.map((r) => (
                <div key={r} className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progression timelines */}
        <div className="bg-neutral-950 p-5 rounded-xl border border-emerald-950/45 space-y-3 shadow-inner">
          <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-450" /> Key progression strategy coordinates
          </span>
          <div className="space-y-2 text-xs font-sans text-gray-300">
            {selectedDim.progressionStrategy.map((step, idx) => (
              <div key={idx} className="flex gap-2 font-medium">
                <span className="font-mono text-emerald-300 font-bold shrink-0">
                  [{idx + 1}]
                </span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Survival Warnings */}
        <div className="bg-red-950/10 border border-red-900/20 p-5 rounded-xl space-y-3 shadow-sm">
          <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-red-450" /> Warning: Critical Survival Hazards & Tips
          </span>
          <div className="space-y-2.5 text-xs font-sans text-gray-300 font-medium">
            {selectedDim.survivalTips.map((tip, idx) => (
              <div key={idx} className="flex gap-2.5 leading-relaxed">
                <span className="text-red-500 shrink-0">⚠️</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

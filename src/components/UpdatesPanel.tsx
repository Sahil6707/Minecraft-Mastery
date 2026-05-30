import React from 'react';
import { versionUpdates } from '../data/updates';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function UpdatesPanel() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 border-b border-emerald-950/60 pb-3">
        <Calendar className="w-5 h-5 text-emerald-450" />
        <h3 className="font-bold font-sans text-lg text-white uppercase tracking-wider">
          Minecraft version logs & patch notes
        </h3>
      </div>

      <div className="space-y-8">
        {versionUpdates.map((update) => (
          <div
            key={update.version}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-xl overflow-hidden shadow-xl shadow-black/40"
          >
            {/* Header Title with Dates */}
            <div className="p-5 sm:p-6 bg-neutral-950/40 border-b border-emerald-950/45 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded mr-1">
                  RELEASE NOTES
                </span>
                <span className="text-sm font-mono text-gray-400">{update.date}</span>
                <h4 className="font-sans font-bold text-lg text-white mt-1.5 uppercase tracking-wide">
                  {update.version}: {update.title}
                </h4>
              </div>
            </div>

            {/* Core updates content */}
            <div className="p-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block font-bold mb-3.5">
                  Highlight Checklist Features
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {update.primaryFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-neutral-950 border border-emerald-950/30 rounded-lg flex gap-3 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 block shrink-0 mt-0.5" />
                      <span className="text-gray-200 font-sans leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expansion Detail text */}
              <div className="border-t border-emerald-950/40 pt-5 space-y-2.5 text-xs text-gray-300 font-sans leading-relaxed">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
                  Detailed Integration Specs
                </span>
                {update.details.map((det, idx) => (
                  <p key={idx} className="flex gap-2">
                    <span className="text-emerald-400 font-mono shrink-0">►</span>
                    <span>{det}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


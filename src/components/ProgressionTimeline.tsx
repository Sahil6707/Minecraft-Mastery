import React, { useState } from 'react';
import { progressionSteps } from '../data/progression';
import { Award, ChevronRight, HelpCircle } from 'lucide-react';

const getQuestDifficulty = (step: number): 'Beginner' | 'Intermediate' | 'Advanced' => {
  if (step <= 4) return 'Beginner';
  if (step <= 9) return 'Intermediate';
  return 'Advanced';
};

const renderDifficultyBadge = (difficulty: 'Beginner' | 'Intermediate' | 'Advanced') => {
  const styles = {
    'Beginner': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Intermediate': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Advanced': 'bg-rose-500/10 text-rose-405 border-rose-500/20'
  };
  const emoji = {
    'Beginner': '🟢 Beginner',
    'Intermediate': '🟡 Intermediate',
    'Advanced': '🔴 Advanced'
  };
  return (
    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border flex items-center gap-1.5 w-fit ${styles[difficulty]}`}>
      {emoji[difficulty]}
    </span>
  );
};

export default function ProgressionTimeline() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const activeStep = progressionSteps[activeStepIdx];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Timeline flow indicator lists on left side */}
      <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 p-5 rounded-2xl space-y-4 shadow-md transition-all duration-300 backdrop-blur-xs">
        <h3 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-neutral-805 pb-2">
          Survival Quest Tracker Timeline
        </h3>

        <div className="space-y-1.5 max-h-[70vh] overflow-y-auto pr-1">
          {progressionSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIdx(idx)}
              className={`w-full text-left p-3 rounded-xl border font-mono text-xs transition-all flex items-center justify-between group cursor-pointer ${
                activeStepIdx === idx
                  ? 'bg-emerald-950/40 border-emerald-500 text-emerald-305 font-bold shadow-sm'
                  : 'bg-neutral-950 border border-emerald-950/30 text-gray-450 hover:border-emerald-500/20 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    activeStepIdx === idx
                      ? 'bg-emerald-500 text-neutral-950'
                      : 'bg-neutral-900 text-gray-500 border border-neutral-800'
                  }`}
                >
                  {step.step}
                </span>
                <div>
                  <h4 className="font-sans font-bold text-gray-205 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                    {step.title}
                  </h4>
                  <span className="text-[9px] text-gray-500 font-mono">
                    Category: {step.category}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-500 shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Big Detailed Screen on right side */}
      <div className="lg:col-span-7 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 rounded-2xl shadow-md overflow-hidden flex flex-col justify-between transition-all duration-300 backdrop-blur-md">
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex justify-between items-start border-b border-neutral-800 pb-5 gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/45 border border-emerald-500/20 px-3 py-1 rounded">
                STAGE QUEST: {activeStep.step} / {progressionSteps.length}
              </span>
              <h4 className="font-display font-semibold text-2xl text-white mt-2.5">
                {activeStep.title}
              </h4>
              <div className="mt-2">
                {renderDifficultyBadge(getQuestDifficulty(activeStep.step))}
              </div>
            </div>
            <Award className="w-8 h-8 text-emerald-450 block shrink-0" />
          </div>

          <div>
            <h5 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-1">
              Quest Description
            </h5>
            <p className="text-xs text-gray-200 leading-relaxed font-sans mt-1 font-medium">
              {activeStep.description}
            </p>
          </div>

          {/* Key items checklist */}
          <div>
            <h5 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-2">
              Critical Inventory Check points:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {activeStep.criticalItems.map((item) => (
                <span
                  key={item}
                  className="text-[10.5px] bg-neutral-950 border border-emerald-950/40 text-gray-300 px-3 py-1.5 rounded-lg font-mono shadow-sm"
                >
                  ☑ {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tips Footer */}
        <div className="bg-neutral-950 p-6 md:p-8 border-t border-emerald-950/45 space-y-3">
          <h5 className="text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5 uppercase">
            <HelpCircle className="w-4 h-4 text-emerald-400 animate-pulse" /> Pro Tips & Speedrun Advice
          </h5>
          <ul className="list-disc pl-4 text-xs font-sans text-gray-300 space-y-1.5 leading-relaxed font-medium">
            {activeStep.proTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

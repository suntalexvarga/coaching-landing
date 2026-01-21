"use client";

import { useState } from "react";

interface MethodStep {
  number: number;
  title: string;
  content: React.ReactNode;
}

interface MethodStepsProps {
  steps: MethodStep[];
}

const MethodSteps = ({ steps }: MethodStepsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Primul deschis by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {steps.map((step, index) => (
        <div
          key={index}
          className="border border-white/[0.05] bg-white/[0.02] rounded-md transition-all duration-500 hover:border-primary/30 group overflow-hidden"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left p-6 md:p-10 flex items-center justify-between gap-6 group"
            aria-expanded={openIndex === index}
            aria-controls={`method-step-${index}`}
          >
            <div className="flex items-center gap-6 md:gap-10 flex-1">
              <div className="w-12 h-12 rounded-md flex items-center justify-center bg-cta text-white font-sans text-2xl font-bold flex-shrink-0 transition-all duration-500 group-hover:scale-110 shadow-glow relative">
                <div className="absolute inset-0 bg-cta blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <span className="relative z-10">{step.number}</span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-semibold text-white tracking-tight">
                {step.title}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/5">
              <span className="text-white/30 text-xl transition-transform duration-500" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ↓
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div
              id={`method-step-${index}`}
              className="px-6 md:px-10 pb-6 md:pb-10 md:ml-24 space-y-4 text-base md:text-lg text-white/50 font-light leading-relaxed border-t border-white/5 pt-6"
            >
              {step.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MethodSteps;

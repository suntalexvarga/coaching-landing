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
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="border border-gray-200 bg-white transition-all duration-200 hover:border-[#c9a961]"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 group"
            aria-expanded={openIndex === index}
            aria-controls={`method-step-${index}`}
          >
            <div className="flex items-center gap-4 md:gap-6 flex-1">
              <div className="w-12 h-12 flex items-center justify-center bg-[#c9a961] text-white font-serif text-2xl font-bold flex-shrink-0 transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                {step.title}
              </h3>
            </div>
            <span className="text-gray-400 text-2xl md:text-3xl flex-shrink-0 transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              ↓
            </span>
          </button>
          {openIndex === index && (
            <div
              id={`method-step-${index}`}
              className="px-6 md:px-8 pb-6 md:pb-8 md:ml-20 space-y-4 text-base md:text-lg text-gray-700 leading-relaxed border-t border-gray-100 pt-6"
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

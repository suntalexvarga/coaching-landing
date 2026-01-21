"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ = ({ items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-white/[0.05] bg-white/[0.01] rounded-md overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02]"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left flex justify-between items-center gap-6 p-6 md:p-8 group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-sans font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors">
              {item.question}
            </span>
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/5 flex-shrink-0">
              <span className="text-white/30 text-lg transition-transform duration-500" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                +
              </span>
            </div>
          </button>
          {openIndex === index && (
            <div
              id={`faq-answer-${index}`}
              className="px-6 md:px-8 pb-6 md:pb-8 text-base md:text-lg text-white/40 leading-relaxed font-light font-sans border-t border-white/5 pt-6"
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

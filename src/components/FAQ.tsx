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
          className="border-b border-gray-200 pb-4 last:border-b-0"
        >
          <button
            onClick={() => handleToggle(index)}
            className="w-full text-left flex justify-between items-start gap-4 py-2"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="font-sans font-semibold text-lg text-gray-900 pr-8">
              {item.question}
            </span>
            <span className="text-gray-600 text-xl flex-shrink-0 mt-1">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div
              id={`faq-answer-${index}`}
              className="mt-2 text-gray-700 leading-relaxed pl-0 pr-12 font-sans"
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

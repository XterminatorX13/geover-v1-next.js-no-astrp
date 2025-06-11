import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is Astro's Islands Architecture?",
    answer: "Islands Architecture allows you to build sites with isolated interactive components (islands) surrounded by static HTML. This means you only ship JavaScript for the parts that need it, resulting in faster load times and better performance."
  },
  {
    id: 2,
    question: "How does Astro improve Core Web Vitals?",
    answer: "Astro generates static HTML by default, eliminates unnecessary JavaScript, optimizes images automatically, and provides built-in performance optimizations that help achieve excellent FCP, LCP, and CLS scores."
  },
  {
    id: 3,
    question: "Can I use React components in Astro?",
    answer: "Yes! Astro supports React, Vue, Svelte, and other frameworks. You can use them as islands with client-side hydration when needed, or render them as static HTML for better performance."
  },
  {
    id: 4,
    question: "What are the performance benefits?",
    answer: "Astro sites typically load 40% faster than traditional SPAs, achieve perfect Lighthouse scores, and deliver excellent user experiences with minimal JavaScript overhead."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about Astro's performance benefits and architecture
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full py-6 text-left flex items-center justify-between hover:text-blue-600 transition-colors duration-200"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.has(item.id)}
              >
                <span className="text-lg font-semibold pr-4">{item.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openItems.has(item.id) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.has(item.id) ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
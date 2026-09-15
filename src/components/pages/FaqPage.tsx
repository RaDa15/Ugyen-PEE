import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../../data/faqs';

interface FaqPageProps {
  onOpenConsultation: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'gen-1': true,
    'gen-2': true,
    'adm-1': true
  });
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'General', 'Admission', 'Visa', 'Documents', 'Scholarships'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              STUDENT ASSISTANCE
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Clear, honest answers about our consultancy services, international university admissions, financial guidelines, and student visa processes.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-up-text-muted" />
            <input
              type="text"
              placeholder="Search questions (e.g., visa, admission, fee, documents)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-sm bg-white text-up-text focus:outline-none focus:ring-2 focus:ring-up-gold shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-up-purple text-white shadow-xs'
                  : 'bg-up-background text-up-text hover:bg-up-purple-light/50 border border-up-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-up-border shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-up-background/50 transition-colors"
                >
                  <span className="font-serif text-lg font-bold text-up-purple-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-up-purple flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-up-border/50 text-xs sm:text-sm text-up-text-muted leading-relaxed bg-up-background/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-up-text-muted">
            <p className="text-sm">No questions matched your search criteria.</p>
          </div>
        )}

        {/* Still have questions card */}
        <div className="mt-16 bg-up-purple-light/50 border border-up-border rounded-2xl p-8 text-center">
          <HelpCircle className="w-10 h-10 text-up-purple mx-auto mb-3" />
          <h3 className="font-serif text-2xl font-bold text-up-purple-dark mb-2">
            Have a Specific Question?
          </h3>
          <p className="text-xs sm:text-sm text-up-text-muted max-w-md mx-auto mb-6 leading-relaxed">
            Every student's academic background and pathway is unique. Schedule a one-on-one session with our educational advisors in Thimphu.
          </p>
          <button
            onClick={onOpenConsultation}
            className="bg-up-purple hover:bg-up-purple-dark text-white text-xs font-semibold px-6 py-3 rounded shadow transition-all inline-flex items-center gap-2"
          >
            <span>Ask Our Counsellors Directly</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

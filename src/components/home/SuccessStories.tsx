import React from 'react';
import { ArrowRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

interface SuccessStoriesProps {
  onViewAll?: () => void;
}

export const SuccessStories: React.FC<SuccessStoriesProps> = ({ onViewAll }) => {
  // Duplicate testimonials array for continuous infinite loop
  const tickerTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 sm:py-24 bg-up-purple-light/40 border-b border-up-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-up-purple/10 text-up-purple-dark text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-up-gold" />
            Verified Student Outcomes
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-up-purple-dark mb-3">
            Success Stories
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-up-text-muted uppercase">
            HEAR WHAT OUR STUDENTS HAVE TO SAY ABOUT THEIR JOURNEY (HOVER TO PAUSE)
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Ticker of Testimonials */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & right edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-up-purple-light/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-up-purple-light/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-ticker flex py-2 cursor-pointer">
          {tickerTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] flex-shrink-0 mx-3.5 bg-white rounded-2xl p-6 border border-up-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-up-gold/80" />
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-up-teal bg-up-teal-light px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {item.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-up-text italic leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-up-border/60">
                <div className="font-serif text-base font-bold text-up-purple-dark">
                  {item.studentName}
                </div>
                <div className="text-xs text-up-text-muted font-medium">
                  {item.course}
                </div>
                <div className="text-[11px] text-up-purple font-semibold mt-1 flex items-center justify-between">
                  <span>{item.university}</span>
                  <span className="text-up-teal font-medium">{item.destination}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Stories Link */}
      <div className="mt-12 text-center">
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-up-purple hover:text-up-purple-dark transition-colors group"
        >
          <span>Explore All Stories & Testimonials</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

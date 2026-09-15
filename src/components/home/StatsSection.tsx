import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-up-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-up-border">
          {/* Stat 1 */}
          <div className="py-4 md:py-0 md:px-8 first:pl-0 flex flex-col justify-center">
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-up-purple-dark leading-none mb-2">
              10
            </div>
            <div className="text-sm font-semibold text-up-text uppercase tracking-wider mb-1">
              Study Destinations
            </div>
            <div className="text-xs text-up-text-muted">
              AUSTRALIA, UK, CANADA, USA, NZ & MORE
            </div>
          </div>

          {/* Stat 2 */}
          <div className="py-4 md:py-0 md:px-8 flex flex-col justify-center">
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-up-purple-dark leading-none mb-2">
              8
            </div>
            <div className="text-sm font-semibold text-up-text uppercase tracking-wider mb-1">
              Key Services
            </div>
            <div className="text-xs text-up-text-muted">
              COMPREHENSIVE ADMISSION & VISA GUIDANCE
            </div>
          </div>

          {/* Stat 3 */}
          <div className="py-4 md:py-0 md:px-8 last:pr-0 flex flex-col justify-center">
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-up-purple-dark leading-none mb-2">
              20+
            </div>
            <div className="text-sm font-semibold text-up-text uppercase tracking-wider mb-1">
              Years of Experience
            </div>
            <div className="text-xs text-up-text-muted">
              ESTABLISHED IN THIMPHU, BHUTAN (TBC)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

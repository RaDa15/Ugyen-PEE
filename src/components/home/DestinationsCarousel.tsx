import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';

interface DestinationsCarouselProps {
  onSelectDestination: (destId: string) => void;
  onViewAll: () => void;
}

export const DestinationsCarousel: React.FC<DestinationsCarouselProps> = ({
  onSelectDestination,
  onViewAll
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cards visible per view on desktop is 4, on mobile 1, on tablet 2
  const maxIndex = DESTINATIONS.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white border-b border-up-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-up-purple-dark mb-3">
            Explore Your Options
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-up-text-muted uppercase">
            DISCOVER POPULAR DESTINATIONS AND UNIVERSITIES AROUND THE GLOBE
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.slice(currentIndex, currentIndex + 4).concat(
            currentIndex + 4 > DESTINATIONS.length
              ? DESTINATIONS.slice(0, (currentIndex + 4) % DESTINATIONS.length)
              : []
          ).map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl border border-up-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header with Clean Destination Photo */}
              <div className="h-40 relative overflow-hidden bg-up-purple-dark border-b border-up-border/60">
                {destination.image && (
                  <img
                    src={destination.image}
                    alt={destination.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to high reliability CDN image if needed
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                )}
                {/* Subtle soft gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-0 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-up-purple-dark mb-2 group-hover:text-up-purple transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-xs text-up-text-muted line-clamp-2 leading-relaxed mb-2.5">
                    {destination.tagline}
                  </p>
                  
                  {/* Intakes: dash under the paragraph */}
                  <div className="text-xs font-medium text-up-text-muted mb-4 bg-up-background px-2.5 py-1.5 rounded border border-up-border/60">
                    <span className="font-semibold text-up-purple-dark">Intakes:</span> — {destination.intakes.join(', ')}
                  </div>
                </div>

                <div className="pt-3 border-t border-up-border/50 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDestination(destination.id)}
                    className="text-xs font-semibold text-up-teal hover:text-up-teal-dark flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-up-purple font-medium bg-up-purple-light/70 px-2 py-0.5 rounded border border-up-purple/20">
                    {destination.whyStudy.length} Key Benefits
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-up-border bg-white text-up-text-muted hover:text-up-purple-dark hover:border-up-purple hover:bg-up-purple-light/20 flex items-center justify-center transition-all shadow-xs"
              aria-label="Previous destinations"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-up-border bg-white text-up-text-muted hover:text-up-purple-dark hover:border-up-purple hover:bg-up-purple-light/20 flex items-center justify-center transition-all shadow-xs"
              aria-label="Next destinations"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={onViewAll}
            className="text-xs font-semibold text-up-purple hover:text-up-purple-dark underline underline-offset-4"
          >
            View All 10 Destinations &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

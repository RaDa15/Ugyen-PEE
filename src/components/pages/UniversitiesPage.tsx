import React, { useState } from 'react';
import { Search, MapPin, Award, ArrowRight, X, GraduationCap } from 'lucide-react';
import { UNIVERSITIES } from '../../data/universities';
import { University } from '../../types';

interface UniversitiesPageProps {
  onOpenConsultation: (subject?: string) => void;
}

export const UniversitiesPage: React.FC<UniversitiesPageProps> = ({ onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);

  const countries = ['All', ...Array.from(new Set(UNIVERSITIES.map((u) => u.country)))];

  const filteredUniversities = UNIVERSITIES.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      uni.popularPrograms.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;

    return matchesSearch && matchesCountry;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              INSTITUTIONAL DIRECTORY
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Explore Partner & Global Universities
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Find the right academic environment for your future career. Browse world-ranked institutions across Australia, UK, Canada, USA, and Europe.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-up-text-muted" />
            <input
              type="text"
              placeholder="Search by university name, city, or degree..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-sm bg-white text-up-text focus:outline-none focus:ring-2 focus:ring-up-gold shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Filter Bar & Directory */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Country Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-up-text-muted mr-2">
            Filter:
          </span>
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCountry === c
                  ? 'bg-up-purple text-white shadow-xs'
                  : 'bg-up-background text-up-text hover:bg-up-purple-light/50 border border-up-border'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((uni) => (
            <div
              key={uni.id}
              className="bg-white rounded-xl border border-up-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-up-purple-light text-up-purple-dark text-[11px] font-semibold">
                    <MapPin className="w-3 h-3 text-up-purple" />
                    <span>{uni.city}, {uni.country}</span>
                  </div>
                  {uni.partnerStatus && (
                    <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                      Partner
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-up-purple-dark mb-2 group-hover:text-up-purple transition-colors">
                  {uni.name}
                </h3>

                {uni.ranking && (
                  <div className="flex items-center gap-1.5 text-xs text-up-gold font-semibold mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>{uni.ranking}</span>
                  </div>
                )}

                <p className="text-xs text-up-text-muted leading-relaxed line-clamp-2 mb-4">
                  {uni.overview}
                </p>

                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-up-text-muted mb-1.5">
                    Popular Fields:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {uni.popularPrograms.slice(0, 3).map((prog, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-up-background px-2 py-0.5 rounded border border-up-border text-up-text truncate max-w-[200px]"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-up-border/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedUniversity(uni)}
                  className="text-xs font-semibold text-up-teal hover:text-up-teal-dark flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenConsultation(`Application to ${uni.name}`)}
                  className="text-xs font-semibold bg-up-purple text-white px-3 py-1.5 rounded hover:bg-up-purple-dark transition-colors"
                >
                  Apply Support
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-16 text-up-text-muted">
            <p className="text-sm">No universities matched your search filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCountry('All');
              }}
              className="mt-3 text-xs text-up-purple font-semibold underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* University Detail Modal */}
      {selectedUniversity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-up-border overflow-hidden">
            <div className="bg-up-purple-dark text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl font-bold leading-tight">
                  {selectedUniversity.name}
                </h3>
                <p className="text-xs text-up-gold">
                  {selectedUniversity.city}, {selectedUniversity.country}
                </p>
              </div>
              <button
                onClick={() => setSelectedUniversity(null)}
                className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-sm text-up-text">
              <p className="text-xs sm:text-sm text-up-text-muted leading-relaxed">
                {selectedUniversity.overview}
              </p>

              <div className="grid grid-cols-2 gap-3 bg-up-background p-4 rounded-lg border border-up-border text-xs">
                <div>
                  <span className="text-up-text-muted block">Tuition Indicator:</span>
                  <span className="font-semibold text-up-purple-dark">
                    {selectedUniversity.tuitionRange}
                  </span>
                </div>
                <div>
                  <span className="text-up-text-muted block">Major Intakes:</span>
                  <span className="font-semibold text-up-purple-dark">
                    {selectedUniversity.intakes.join(', ')}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-up-purple-dark mb-2">
                  Featured Academic Programs
                </h4>
                <div className="space-y-1.5">
                  {selectedUniversity.popularPrograms.map((prog, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <GraduationCap className="w-3.5 h-3.5 text-up-purple flex-shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-up-purple-light/40 rounded-lg text-xs text-up-text-muted">
                <strong>Ugyen Pee Direct Service:</strong> Our team coordinates application documents, SOP review, and fast-track submission to {selectedUniversity.name}.
              </div>
            </div>

            <div className="p-4 bg-up-background border-t border-up-border flex justify-end gap-3">
              <button
                onClick={() => setSelectedUniversity(null)}
                className="px-4 py-2 text-xs font-semibold text-up-text-muted hover:text-up-text"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const uName = selectedUniversity.name;
                  setSelectedUniversity(null);
                  onOpenConsultation(`Guidance for ${uName}`);
                }}
                className="bg-up-purple hover:bg-up-purple-dark text-white text-xs font-semibold px-5 py-2.5 rounded shadow"
              >
                Apply with Ugyen Pee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

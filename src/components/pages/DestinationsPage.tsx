import React, { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  X,
  CheckCircle2,
  Calendar,
  Briefcase,
  DollarSign,
  GraduationCap,
  ShieldCheck,
  Building
} from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';
import { Destination } from '../../types';

interface DestinationsPageProps {
  initialDestinationId?: string;
  onOpenConsultation: (countryName?: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  initialDestinationId,
  onOpenConsultation
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  useEffect(() => {
    if (initialDestinationId) {
      const found = DESTINATIONS.find((d) => d.id === initialDestinationId);
      if (found) {
        setSelectedDestination(found);
      }
    }
  }, [initialDestinationId]);

  const filteredDestinations = DESTINATIONS.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              STUDY ABROAD DESTINATIONS
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Where Do You Want to Study?
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Discover top-tier educational hubs across 10 global destinations. Compare admission intakes, work opportunities, and living environments.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-up-text-muted" />
            <input
              type="text"
              placeholder="Search destination (e.g., Australia, UK, Canada)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-sm bg-white text-up-text focus:outline-none focus:ring-2 focus:ring-up-gold shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-2xl border border-up-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Image Banner */}
              <div className="relative h-52 w-full overflow-hidden bg-up-purple-light">
                <img
                  src={d.image}
                  alt={`Study in ${d.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallbackApplied) {
                      target.dataset.fallbackApplied = 'true';
                      target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-up-purple-dark mb-1.5 group-hover:text-up-purple transition-colors">
                    {d.name}
                  </h3>
                  <p className="text-xs text-up-text-muted leading-relaxed mb-3">
                    {d.tagline}
                  </p>

                  {/* Intakes dash under the paragraph */}
                  <div className="text-xs text-up-teal font-medium mb-4 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-up-gold flex-shrink-0" />
                    <span><strong>Intakes:</strong> — {d.intakes.join(', ')}</span>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-up-border/50 text-xs text-up-text">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-up-teal flex-shrink-0" />
                      <span className="truncate"><strong>Work:</strong> {d.postStudyWork}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3.5 h-3.5 text-up-gold flex-shrink-0" />
                      <span className="truncate"><strong>Tuition:</strong> {d.averageTuition}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-up-border/50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDestination(d)}
                    className="text-xs font-semibold text-up-teal hover:text-up-teal-dark flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>View Destination Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(d.name)}
                    className="text-[11px] font-medium bg-up-purple-light text-up-purple px-3 py-1.5 rounded-lg hover:bg-up-purple hover:text-white transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-up-border overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header with Destination Photo */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden flex-shrink-0 bg-up-purple-dark">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover select-none"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallbackApplied) {
                    target.dataset.fallbackApplied = 'true';
                    target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-16 text-white">
                <div className="mb-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-md">
                    Study in {selectedDestination.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-up-gold font-medium drop-shadow">{selectedDestination.tagline}</p>
              </div>

              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors border border-white/20 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-up-text">
              {/* Overview */}
              <div>
                <h4 className="font-serif text-lg font-bold text-up-purple-dark mb-2">
                  Country Overview
                </h4>
                <p className="text-xs sm:text-sm text-up-text-muted leading-relaxed">
                  {selectedDestination.overview}
                </p>
              </div>

              {/* Why Study Highlights */}
              <div className="bg-up-background p-5 rounded-xl border border-up-border">
                <h4 className="font-serif text-base font-bold text-up-purple-dark mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-up-purple" />
                  Key Advantages for Students
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {selectedDestination.whyStudy.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-up-teal flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intakes, Work & Costs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-up-border shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-up-purple-dark mb-1">
                    <Calendar className="w-3.5 h-3.5 text-up-gold" />
                    Key Intakes
                  </div>
                  <div className="text-xs text-up-text-muted">
                    {selectedDestination.intakes.join(', ')}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-up-border shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-up-purple-dark mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-up-teal" />
                    Post-Study Work
                  </div>
                  <div className="text-xs text-up-text-muted">
                    {selectedDestination.postStudyWork}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-up-border shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-up-purple-dark mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-up-gold" />
                    Average Tuition
                  </div>
                  <div className="text-xs text-up-text-muted">
                    {selectedDestination.averageTuition}
                  </div>
                </div>
              </div>

              {/* Popular Study Areas */}
              <div>
                <h4 className="font-serif text-base font-bold text-up-purple-dark mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-up-purple" />
                  Popular Courses & Fields
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.popularCourses.map((c, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-up-purple-light/70 text-up-purple-dark font-medium px-3 py-1 rounded-full border border-up-border"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Admission Criteria */}
              <div>
                <h4 className="font-serif text-base font-bold text-up-purple-dark mb-2">
                  General Admission Guidelines
                </h4>
                <ul className="space-y-1.5 text-xs text-up-text-muted">
                  {selectedDestination.admissionRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-up-gold font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visa Compliance Note */}
              <div className="bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl text-xs text-amber-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1 text-amber-950 font-semibold">
                    Visa & Institutional Advisory:
                  </strong>
                  {selectedDestination.visaGuidanceNote}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-up-background border-t border-up-border flex items-center justify-between flex-shrink-0">
              <span className="text-xs text-up-text-muted hidden sm:inline">
                Initial counselling is 100% free with our Thimphu team.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="px-4 py-2 text-xs font-semibold text-up-text-muted hover:text-up-text"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const countryName = selectedDestination.name;
                    setSelectedDestination(null);
                    onOpenConsultation(countryName);
                  }}
                  className="bg-up-purple hover:bg-up-purple-dark text-white text-xs font-semibold px-5 py-2.5 rounded shadow transition-colors"
                >
                  Book Consultation for {selectedDestination.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

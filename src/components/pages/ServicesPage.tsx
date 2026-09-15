import React, { useState } from 'react';
import {
  Compass,
  GraduationCap,
  BookOpen,
  FileCheck,
  ShieldCheck,
  PlaneTakeoff,
  Languages,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { SERVICES } from '../../data/services';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'GraduationCap': return GraduationCap;
      case 'BookOpen': return BookOpen;
      case 'FileCheck': return FileCheck;
      case 'ShieldCheck': return ShieldCheck;
      case 'PlaneTakeoff': return PlaneTakeoff;
      case 'Languages': return Languages;
      case 'Award': return Award;
      default: return Compass;
    }
  };

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const ActiveIcon = getIcon(selectedService.iconName);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              COMPREHENSIVE ADVISORY
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            End-to-End Educational Consultancy Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            From initial career exploration to stepping foot on your overseas campus, we guide every milestone with thorough professionalism.
          </p>
        </div>
      </div>

      {/* Services Grid & Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Selector Tabs / Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-12">
          {SERVICES.map((s) => {
            const Icon = getIcon(s.iconName);
            const isSelected = s.id === selectedServiceId;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-up-purple text-white border-up-purple shadow-md'
                    : 'bg-white hover:bg-up-purple-light/40 border-up-border text-up-text'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-up-gold' : 'text-up-purple'}`} />
                <span className="text-[11px] font-semibold leading-tight line-clamp-2">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed View */}
        <div className="bg-up-background rounded-2xl border border-up-border p-8 sm:p-12 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-up-purple/10 text-up-purple text-xs font-semibold uppercase tracking-wider mb-4">
              <ActiveIcon className="w-4 h-4" />
              <span>Service Spotlight</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-up-purple-dark mb-4">
              {selectedService.title}
            </h2>
            <p className="text-sm sm:text-base text-up-text-muted leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <h3 className="text-xs font-bold uppercase tracking-wider text-up-purple-dark mb-4">
              What This Service Includes:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {selectedService.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-up-text">
                  <CheckCircle className="w-4 h-4 text-up-teal flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenConsultation}
              className="bg-up-purple hover:bg-up-purple-dark text-white text-xs font-semibold px-6 py-3 rounded shadow transition-all inline-flex items-center gap-2"
            >
              <span>Enquire About {selectedService.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-up-border shadow-xs">
            <h4 className="font-serif text-lg font-bold text-up-purple-dark mb-3">
              Why Ugyen Pee Advising?
            </h4>
            <p className="text-xs text-up-text-muted leading-relaxed mb-4">
              We operate under transparent codes of practice in Thimphu. No hidden agency costs, no deceptive university promotions.
            </p>
            <div className="space-y-3 pt-3 border-t border-up-border/60 text-xs">
              <div className="flex justify-between">
                <span className="text-up-text-muted">Consultation Fee:</span>
                <span className="font-bold text-green-700">Free Initial Session</span>
              </div>
              <div className="flex justify-between">
                <span className="text-up-text-muted">Format:</span>
                <span className="font-semibold text-up-text">In-Person & Virtual</span>
              </div>
              <div className="flex justify-between">
                <span className="text-up-text-muted">Office Location:</span>
                <span className="font-semibold text-up-text">Thimphu, Bhutan</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Services Cards Overview */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-up-purple-dark mb-2">
              Full Services Catalog
            </h3>
            <p className="text-xs uppercase tracking-wider text-up-text-muted">
              OUR COMPLETE ADVISORY SPECTRUM FOR BHUTANESE APPLICANTS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => {
              const Icon = getIcon(s.iconName);
              return (
                <div
                  key={s.id}
                  className="bg-white rounded-xl p-6 border border-up-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-up-purple-light/70 text-up-purple flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-up-purple-dark mb-2">
                      {s.title}
                    </h4>
                    <p className="text-xs text-up-text-muted leading-relaxed mb-4">
                      {s.shortSummary}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedServiceId(s.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-up-teal hover:text-up-teal-dark flex items-center gap-1 self-start"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

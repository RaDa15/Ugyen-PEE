import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 sm:py-24 bg-up-purple-dark text-white text-center relative overflow-hidden border-t border-white/10">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-hero-texture bg-diagonal-stripes opacity-70 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
          Start Your Journey
        </h2>
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-white/80 uppercase max-w-2xl mx-auto leading-relaxed mb-8">
          TALK TO OUR EXPERT COUNSELLORS AND TAKE THE FIRST STEP TOWARDS YOUR INTERNATIONAL EDUCATION DREAMS. FREE INITIAL CONSULTATION.
        </p>
        <button
          onClick={onOpenConsultation}
          className="bg-up-gold hover:bg-up-gold-hover text-up-purple-deep font-semibold text-sm sm:text-base px-8 py-3.5 rounded shadow-hero-btn transition-all duration-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
        >
          <span>Book a Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

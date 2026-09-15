import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, ChevronLeft, ChevronRight, CheckCircle2, Shield } from 'lucide-react';

interface HeroSectionProps {
  onExploreDestinations: () => void;
  onTalkToCounsellor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDestinations,
  onTalkToCounsellor
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      badge: 'GUIDANCE YOU CAN TRUST',
      title1: 'Your Journey to Global',
      title2: 'Education Starts Here',
      subtitle: 'Explore world-class academic opportunities with ethical, registered guidance from Ugyen Pee Education Consultancy & Placement Firm.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=85',
      statLabel: '500+ Bhutanese Scholars Placed',
      accentCaption: 'Australia • UK • Canada • USA • New Zealand'
    },
    {
      badge: 'ACCREDITED GLOBAL INSTITUTIONS',
      title1: 'Study in Australia, UK,',
      title2: 'Canada & Across the World',
      subtitle: 'Personalized course matching, application documentation, and comprehensive visa counselling tailored for Bhutanese students.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=85',
      statLabel: '120+ Partner Institutions',
      accentCaption: 'Top Ranked World University Campuses'
    },
    {
      badge: 'CELEBRATING STUDENT MILESTONES',
      title1: 'Empowering Your Future',
      title2: 'With Verified Visa Success',
      subtitle: 'Celebrating every student milestone with transparent admission processing and dependable visa lodgement strategies.',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1920&q=85',
      statLabel: '98% Visa Grant Success Rate',
      accentCaption: 'Subclass 500 • Student Route • Study Permit'
    },
    {
      badge: 'PROVEN EXPERTISE & ETHICS',
      title1: 'Face-to-Face Advisory',
      title2: 'Right Here in Thimphu',
      subtitle: 'Step-by-step guidance from university shortlisting to mock visa interviews and pre-departure briefings.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1920&q=85',
      statLabel: '1-on-1 Certified Counsellors',
      accentCaption: 'Ministry of Education (MoESD) Approved'
    },
    {
      badge: 'SCHOLARSHIPS & CAREER PATHWAYS',
      title1: 'Unlock Global Horizons',
      title2: '& Post-Study Work Rights',
      subtitle: 'Maximize scholarship opportunities, post-study work visas, and high-demand career pathways across the world.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=85',
      statLabel: 'Up to 4 Years Post-Study Work',
      accentCaption: 'STEM, Health, IT & Business Programs'
    }
  ];

  // Auto-slide every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden text-white border-b border-white/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 5-Slide Full Background Image Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1s ease-in-out, transform 8s ease-out' }}
          >
            <img
              src={slide.image}
              alt={slide.title1}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Luminous overlay that keeps the background photo vibrant and clearly visible while maintaining text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 z-10 pointer-events-none" />
      </div>

      {/* Main Content Area: Centered Vertically */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          
          {/* Badge & Step indicator */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase font-sans">
              {currentSlide.badge}
            </span>
            <span className="text-xs text-white/50 font-mono">
              [ 0{activeSlide + 1} / 0{heroSlides.length} ]
            </span>
          </div>

          {/* Grand Headline (Cormorant Garamond) */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
            <span className="block">{currentSlide.title1}</span>
            <span className="block text-white/95">{currentSlide.title2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-white/85 font-normal leading-relaxed max-w-2xl mb-10 drop-shadow">
            {currentSlide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreDestinations}
              className="bg-up-gold hover:bg-up-gold-hover text-up-purple-deep font-semibold text-sm sm:text-base px-8 py-4 rounded-md shadow-hero-btn transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2.5 active:scale-95"
            >
              <span>Explore Study Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onTalkToCounsellor}
              className="bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base px-7 py-4 rounded-md border border-white/30 transition-all duration-200 flex items-center gap-2.5 backdrop-blur-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-up-gold" />
              <span>Talk to a Counsellor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Edge Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-md transition-all shadow-lg hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Bar: Slide Indicators & Floating Trust Badges */}
      <div className="relative z-20 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-8 border-t border-white/10 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* 5-Slide Indicator Dots / Bars */}
          <div className="flex items-center space-x-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? 'w-10 bg-up-gold shadow-sm'
                    : 'w-3 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Floating Trust Badge matching user preference */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-up-gold flex-shrink-0" />
              <span className="font-semibold text-up-gold">{currentSlide.statLabel}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">{currentSlide.accentCaption}</span>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-[#2D1F37]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-up-gold/40 text-white font-medium">
              <Shield className="w-3.5 h-3.5 text-up-gold" />
              <span>100% Ethical Placement</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Compass, UserCheck, School, FileCheck, PlaneTakeoff, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      num: 1,
      title: 'Discover',
      subtitle: 'Profile Assessment',
      icon: Compass,
      description: 'Explore academic options, entry criteria, and pinpoint globally recognized institutions aligned with your aspirations.'
    },
    {
      num: 2,
      title: 'Counselling',
      subtitle: '1-on-1 Guidance',
      icon: UserCheck,
      description: 'Personalized advisory sessions with registered counsellors in Thimphu to evaluate finances, courses, and career paths.'
    },
    {
      num: 3,
      title: 'Choose',
      subtitle: 'Institution Matching',
      icon: School,
      description: 'Select the optimal country, university, and degree program tailored for genuine student visa outcomes.'
    },
    {
      num: 4,
      title: 'Apply',
      subtitle: 'SOP & Documents',
      icon: FileCheck,
      description: 'Meticulous statement of purpose review, academic transcript verification, and timely university offer processing.'
    },
    {
      num: 5,
      title: 'Begin',
      subtitle: 'Visa & Departure',
      icon: PlaneTakeoff,
      description: 'Lodge your student visa, complete health assessments, attend pre-departure briefing, and fly out with confidence.'
    }
  ];

  // Auto-cycle active step ticker every 3.5 seconds unless paused by user hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= steps.length ? 1 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, steps.length]);

  const tickerItems = [
    'STEP 01: Free Profile Assessment & Course Exploration',
    'STEP 02: 1-on-1 Certified Counsellor Meeting in Thimphu',
    'STEP 03: Direct Partner University & Scholarship Matching',
    'STEP 04: Rigorous SOP Review & Application Lodgement',
    'STEP 05: Student Visa Filing, Biometrics & Medical Clearance',
    'STEP 06: Pre-Departure Briefing & Student Accommodation Guidance',
    '100% ETHICAL: Zero Fraudulent Documentation Policy',
    'REGISTERED: Ministry of Education & Skills Development (MoESD) Approved'
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-up-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-up-purple-light/70 text-up-purple-dark text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-up-gold" />
            Clear Roadmap to Success
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-up-purple-dark mb-3">
            How It Works
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-up-text-muted uppercase">
            A PROVEN, 5-STEP PATHWAY FROM THIMPHU TO YOUR DREAM UNIVERSITY
          </p>
        </div>

        {/* Continuous Animated Ticker Tape Ribbon */}
        <div className="mb-14 overflow-hidden rounded-xl bg-gradient-to-r from-up-purple-deep via-up-purple-dark to-up-purple-deep text-white shadow-md border border-white/10">
          <div className="flex items-center py-2.5 px-4">
            {/* Live Ticker Label */}
            <div className="flex items-center gap-2 pr-4 border-r border-white/20 flex-shrink-0 z-10 bg-inherit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-up-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-up-gold" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-up-gold whitespace-nowrap">
                Pathway Ticker
              </span>
            </div>

            {/* Scrolling Ticker Stream */}
            <div className="overflow-hidden relative w-full pl-4">
              <div className="animate-ticker whitespace-nowrap text-xs font-medium text-white/90 py-0.5">
                {tickerItems.concat(tickerItems).map((item, idx) => (
                  <span key={idx} className="inline-flex items-center mx-6">
                    <span className="text-up-gold mr-3">✦</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 5-Step Timeline with Active Step Ticker */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Connecting Background Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-16 right-16 h-1 bg-up-border/80 z-0" />

          {/* Dynamic Progress Fill Line based on activeStep */}
          <div
            className="hidden lg:block absolute top-10 left-16 h-1 bg-gradient-to-r from-up-purple via-up-gold to-up-teal transition-all duration-700 z-0"
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 82}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.num;
              const isPast = activeStep > step.num;

              return (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-up-purple-light/40 border-up-purple shadow-lg ring-2 ring-up-purple/20 -translate-y-1'
                      : isPast
                      ? 'bg-white border-up-border/70 hover:border-up-purple/40 hover:bg-slate-50'
                      : 'bg-white border-up-border/50 hover:border-up-border opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Top Circle with Step Number & Status */}
                  <div className="flex items-center justify-between mb-4 w-full">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg font-bold shadow-md transition-all ${
                        isActive
                          ? 'bg-up-purple text-white scale-110 ring-4 ring-up-gold/40'
                          : isPast
                          ? 'bg-up-teal text-white'
                          : 'bg-slate-100 text-up-text-muted'
                      }`}
                    >
                      {isPast ? <CheckCircle2 className="w-6 h-6" /> : step.num}
                    </div>

                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-up-purple/15 text-up-purple'
                          : 'bg-slate-50 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Step Titles */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10.5px] uppercase font-bold tracking-wider text-up-gold">
                        Step 0{step.num}
                      </span>
                      {isActive && (
                        <span className="text-[9px] bg-up-purple text-white px-1.5 py-0.2 rounded font-semibold uppercase">
                          Active
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-up-purple-dark mb-1">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-up-purple mb-2">
                      {step.subtitle}
                    </div>

                    {/* Step Description */}
                    <p className="text-xs text-up-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

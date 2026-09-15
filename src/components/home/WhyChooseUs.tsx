import React from 'react';
import { UserCheck, Shield, FileCheck2, Award, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      id: 1,
      num: '01',
      title: 'Personalized Counselling',
      description: 'Tailored advice matching your academic background, career goals, and financial preferences.',
      icon: UserCheck
    },
    {
      id: 2,
      num: '02',
      title: 'Transparent Processes',
      description: 'Clear, honest guidance at every milestone with zero false promises or hidden agendas.',
      icon: Shield
    },
    {
      id: 3,
      num: '03',
      title: 'End-to-End Applications',
      description: 'Comprehensive documentation assistance, SOP review, and swift university application processing.',
      icon: FileCheck2
    },
    {
      id: 4,
      num: '04',
      title: 'Visa & Financial Guidance',
      description: 'Expert guidance through visa documentation, financial matrices, and consular interview coaching.',
      icon: Award
    },
    {
      id: 5,
      num: '05',
      title: 'Support Beyond Arrival',
      description: 'Pre-departure briefings, transit advice, student accommodation, and ongoing assistance.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-up-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-up-purple-light/70 text-up-purple-dark text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-up-gold" />
            Our Ethical Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-up-purple-dark mb-3">
            Why Choose Ugyen Pee
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-up-text-muted uppercase">
            A COMMITTED, REGISTERED PARTNER FOR YOUR HIGHER EDUCATION JOURNEY
          </p>
        </div>

        {/* 5 Perfectly Aligned Columns (1 row of 5 on desktop, responsive on tablet/mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.id}
                className="bg-white rounded-xl p-5 sm:p-6 border border-up-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Icon & Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-up-purple-light/70 text-up-purple flex items-center justify-center ring-4 ring-up-purple-light/30 group-hover:bg-up-purple group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-up-gold/80">
                      {pt.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-up-purple-dark mb-2 group-hover:text-up-purple transition-colors">
                    {pt.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-up-text-muted leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-up-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-up-teal">
                  <span>Guaranteed Ethics</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

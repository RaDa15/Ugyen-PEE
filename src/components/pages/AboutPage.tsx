import React from 'react';
import { Target, Compass, CheckCircle2, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/testimonials';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              ABOUT UGYEN PEE
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Guiding Bhutanese Scholars to Global Horizons
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Rooted in Bhutanese values of integrity and service, Ugyen Pee Education Consultancy & Placement Firm empowers students to achieve world-class higher education credentials.
          </p>
        </div>
      </div>

      {/* Our Story & Background */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-up-purple">
              OUR JOURNEY & HERITAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-up-purple-dark mt-2 mb-6">
              A Trusted Bridge Between Thimphu and the World
            </h2>
            <div className="space-y-4 text-sm text-up-text-muted leading-relaxed">
              <p>
                Founded in Thimphu, Bhutan, Ugyen Pee Education Consultancy & Placement Firm has been steadfastly committed to opening educational frontiers for ambitious Bhutanese students seeking to study across Australia, the United Kingdom, Canada, the United States, Europe, and New Zealand.
              </p>
              <p>
                We recognize that studying abroad is more than an academic step—it is a life-changing investment for the student, their family, and the future development of Bhutan. Hence, we maintain an unwavering commitment to transparent counselling, verified institutional partnerships, and strict ethical documentation standards.
              </p>
              <p>
                Whether you are aiming for prestigious Group of Eight research institutions in Australia, historic Russell Group universities in the UK, or cutting-edge co-operative programs in Canada, our team provides personalized navigation at every turn.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-up-border flex items-center gap-6">
              <div>
                <div className="font-serif text-3xl font-bold text-up-purple-dark">10+</div>
                <div className="text-xs text-up-text-muted uppercase font-semibold">Global Destinations</div>
              </div>
              <div className="w-px h-10 bg-up-border" />
              <div>
                <div className="font-serif text-3xl font-bold text-up-purple-dark">100%</div>
                <div className="text-xs text-up-text-muted uppercase font-semibold">Genuine Guidance</div>
              </div>
              <div className="w-px h-10 bg-up-border" />
              <div>
                <div className="font-serif text-3xl font-bold text-up-purple-dark">Free</div>
                <div className="text-xs text-up-text-muted uppercase font-semibold">Initial Counselling</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="bg-up-purple-light/40 rounded-2xl p-8 border border-up-border relative overflow-hidden shadow-card">
            <div className="absolute top-0 right-0 w-48 h-48 bg-card-stripes opacity-40 pointer-events-none" />
            <div className="w-16 h-16 rounded-full bg-white shadow-md p-1 mb-6 flex items-center justify-center overflow-hidden ring-2 ring-up-purple/10">
              <img src="/ugyenpee-logo.jpg" alt="Ugyen Pee Official Seal" className="w-full h-full object-cover rounded-full" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-up-purple-dark mb-4">
              Ethical Principles & Regulatory Commitment
            </h3>
            <ul className="space-y-3.5 text-xs text-up-text">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-up-teal flex-shrink-0 mt-0.5" />
                <span><strong>Zero Document Misrepresentation:</strong> Strict compliance with international embassy verification standards and zero tolerance for fraudulent documents.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-up-teal flex-shrink-0 mt-0.5" />
                <span><strong>No False Guarantees:</strong> Transparent communication regarding university admission criteria and official visa outcomes (BR-009, BR-010).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-up-teal flex-shrink-0 mt-0.5" />
                <span><strong>Student-Centric Matching:</strong> Recommending courses and institutions based on genuine academic aptitude and budget—not agent commissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-up-teal flex-shrink-0 mt-0.5" />
                <span><strong>Complete Post-Arrival Support:</strong> Pre-departure orientations and student community networks in destination cities.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-up-background border-y border-up-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 border border-up-border shadow-card flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-up-purple/10 text-up-purple flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-up-purple-dark mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-up-text-muted leading-relaxed">
                To empower Bhutanese youth with truthful, professional, and accessible educational counselling; facilitating admission into world-class universities while fostering international readiness and cultural pride.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 border border-up-border shadow-card flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-up-teal/10 text-up-teal flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-up-purple-dark mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-up-text-muted leading-relaxed">
                To be recognized as the most ethical, reliable, and student-focused education consultancy in the Kingdom of Bhutan, renowned for nurturing future scholars and leaders who contribute back to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Review with Continuous Ticker Effect */}
      <section className="py-20 bg-up-purple-light/40 border-t border-b border-up-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-up-purple/10 text-up-purple-dark text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-up-gold" />
              Verified Scholar Voices
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-up-purple-dark mb-3">
              Endorsements from Our Scholars
            </h2>
            <p className="text-xs uppercase tracking-widest text-up-text-muted">
              REAL VOICES FROM BHUTANESE STUDENTS STUDYING WORLDWIDE (HOVER TO PAUSE)
            </p>
          </div>
        </div>

        {/* Continuous Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-up-purple-light/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-up-purple-light/90 to-transparent z-10 pointer-events-none" />

          <div className="animate-ticker flex py-2 cursor-pointer">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-[320px] sm:w-[380px] flex-shrink-0 mx-3.5 p-6 rounded-2xl border border-up-border bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-up-gold/80" />
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-up-teal bg-up-teal-light px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      {t.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm italic text-up-text leading-relaxed mb-6 font-normal">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-up-border/60">
                  <div className="font-serif font-bold text-up-purple-dark">{t.studentName}</div>
                  <div className="text-xs text-up-text-muted">{t.course}</div>
                  <div className="text-xs text-up-teal font-medium mt-1">{t.university}, {t.destination}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="bg-up-purple hover:bg-up-purple-dark text-white text-sm font-semibold px-8 py-3.5 rounded shadow transition-all inline-flex items-center gap-2"
          >
            <span>Talk to Our Thimphu Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="bg-white border border-up-border hover:bg-up-purple-light text-up-purple-dark text-sm font-semibold px-8 py-3.5 rounded transition-all inline-flex items-center gap-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

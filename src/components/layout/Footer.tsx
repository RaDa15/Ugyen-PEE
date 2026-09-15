import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';

interface FooterProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-up-purple-dark text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full p-0.5 shadow-md flex-shrink-0 overflow-hidden ring-1 ring-white/20">
                <img src="/ugyenpee-logo.jpg" alt="Ugyen Pee Official Seal" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-semibold text-white">Ugyen Pee</span>
                <span className="block text-[11px] tracking-wider uppercase text-up-gold font-medium">
                  Education Consultancy
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Education consultancy & placement firm based in Thimphu, Bhutan. Supporting students exploring local and international study opportunities.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs bg-white/10 text-up-gold px-3 py-1 rounded-full border border-up-gold/30">
                Thimphu, Kingdom of Bhutan
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-4 pb-1 border-b border-white/10 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Study Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('universities')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Universities Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Courses Finder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('news')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  News & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-up-gold transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Study Destinations */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-4 pb-1 border-b border-white/10 inline-block">
              Study Destinations
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
              {DESTINATIONS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => onNavigate('destinations', d.id)}
                  className="hover:text-up-gold transition-colors text-left truncate flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                  <span>{d.name}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/50">
              Personalized institutional matching across accredited world universities.
            </div>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide mb-4 pb-1 border-b border-white/10 inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-up-gold flex-shrink-0 mt-0.5" />
                <span>Thimphu, Kingdom of Bhutan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-up-gold flex-shrink-0" />
                <span>+975 2 321 000 / +975 17 000 000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-up-gold flex-shrink-0" />
                <span>info@ugyenpee.bt</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-up-gold flex-shrink-0 mt-0.5" />
                <span>Mon – Fri: 9:00 AM – 5:00 PM<br />Sat: 9:00 AM – 1:00 PM</span>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-up-purple hover:bg-up-purple-deep text-white text-xs font-semibold py-2.5 px-4 rounded border border-white/20 shadow hover:border-up-gold transition-all"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer per PRD BR-009 & BR-010 */}
        <div className="py-6 text-xs text-white/50 leading-relaxed border-b border-white/10">
          <strong className="text-white/70">Regulatory & Institutional Notice:</strong> Ugyen Pee Education Consultancy & Placement Firm provides counselling, documentation support, and institutional guidance. University admission decisions and student visa grants remain at the exclusive discretion of the respective educational institutions and government immigration authorities. No consultancy can guarantee admission or visa issuance.
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © 2026 Ugyen Pee Education Consultancy & Placement Firm. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('legal', 'privacy')}
              className="hover:text-up-gold transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('legal', 'terms')}
              className="hover:text-up-gold transition-colors"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onNavigate('legal', 'security')}
              className="hover:text-up-gold transition-colors"
            >
              Security Advisory
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

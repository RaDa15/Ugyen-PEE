import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, BookOpen, GraduationCap, Newspaper, HelpCircle, ShieldCheck } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string, param?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  // Mobile sub-accordions
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const studyDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const studyTimeoutRef = useRef<any>(null);
  const resourcesTimeoutRef = useRef<any>(null);

  const handleStudyEnter = () => {
    if (studyTimeoutRef.current) clearTimeout(studyTimeoutRef.current);
    setStudyDropdownOpen(true);
  };

  const handleStudyLeave = () => {
    studyTimeoutRef.current = setTimeout(() => {
      setStudyDropdownOpen(false);
    }, 280);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 280);
  };

  const handleLinkClick = (route: string, param?: string) => {
    if (studyTimeoutRef.current) clearTimeout(studyTimeoutRef.current);
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    onNavigate(route, param);
    setMobileMenuOpen(false);
    setStudyDropdownOpen(false);
    setResourcesDropdownOpen(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        studyDropdownRef.current &&
        !studyDropdownRef.current.contains(event.target as Node)
      ) {
        setStudyDropdownOpen(false);
      }
      if (
        resourcesDropdownRef.current &&
        !resourcesDropdownRef.current.contains(event.target as Node)
      ) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isStudyActive = ['destinations', 'universities', 'courses'].includes(currentRoute);
  const isResourcesActive = ['news', 'faq', 'legal'].includes(currentRoute);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-up-border/70 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] transition-all duration-200">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand matching uploaded header image */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
            aria-label="Ugyen Pee Education Consultancy"
          >
            <div className="relative w-12 h-12 flex-shrink-0">
              <img
                src="/ugyenpee-logo.jpg"
                alt="Ugyen Pee Logo"
                className="w-full h-full object-cover rounded-full shadow-sm ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="block font-serif text-[26px] font-medium tracking-tight text-[#2B2134] leading-none">
                Ugyen Pee
              </span>
              <span className="block text-[10.5px] tracking-[0.18em] uppercase font-semibold text-up-text-muted mt-1 leading-none">
                EDUCATION CONSULTANCY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links: Home, About Us, Services, Study ▾, Resources ▾, Contact */}
          <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-up-text">
            {/* Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`transition-colors hover:text-up-purple ${
                currentRoute === 'home' ? 'text-up-purple font-semibold' : 'text-up-text'
              }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              onClick={() => handleLinkClick('about')}
              className={`transition-colors hover:text-up-purple ${
                currentRoute === 'about' ? 'text-up-purple font-semibold' : 'text-up-text'
              }`}
            >
              About Us
            </button>

            {/* Services */}
            <button
              onClick={() => handleLinkClick('services')}
              className={`transition-colors hover:text-up-purple ${
                currentRoute === 'services' ? 'text-up-purple font-semibold' : 'text-up-text'
              }`}
            >
              Services
            </button>

            {/* Study ▾ Dropdown */}
            <div
              className="relative py-2"
              ref={studyDropdownRef}
              onMouseEnter={handleStudyEnter}
              onMouseLeave={handleStudyLeave}
            >
              <button
                onClick={() => setStudyDropdownOpen(!studyDropdownOpen)}
                className={`flex items-center gap-1 transition-colors hover:text-up-purple ${
                  isStudyActive ? 'text-up-purple font-semibold' : 'text-up-text'
                }`}
                aria-expanded={studyDropdownOpen}
              >
                <span>Study</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    studyDropdownOpen ? 'rotate-180 text-up-purple' : 'text-gray-500'
                  }`}
                />
              </button>

              {/* Study Dropdown Menu */}
              {studyDropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-1.5 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleStudyEnter}
                  onMouseLeave={handleStudyLeave}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-up-border py-2 ring-1 ring-black/5">
                    <div className="px-3 pt-1 pb-2 border-b border-up-border/60">
                      <span className="text-[11px] font-semibold text-up-text-muted uppercase tracking-wider">
                        Academic Programs & Hubs
                      </span>
                    </div>

                    <div className="p-1.5 space-y-1">
                      <button
                        onClick={() => handleLinkClick('destinations')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-up-purple-light/50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-up-purple-light flex items-center justify-center text-up-purple group-hover:bg-up-purple group-hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-up-text">Study Destinations</div>
                          <div className="text-xs text-up-text-muted">Australia, UK, Canada, USA & more</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('universities')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-up-purple-light/50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-up-teal-light flex items-center justify-center text-up-teal group-hover:bg-up-teal group-hover:text-white transition-colors">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-up-text">Universities Directory</div>
                          <div className="text-xs text-up-text-muted">Partner institutions & rankings</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('courses')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-up-purple-light/50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-amber-50 flex items-center justify-center text-up-gold-hover group-hover:bg-up-gold group-hover:text-white transition-colors">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-up-text">Courses & Degrees</div>
                          <div className="text-xs text-up-text-muted">Bachelor, Master & VET diplomas</div>
                        </div>
                      </button>
                    </div>

                    {/* Quick destination tags */}
                    <div className="border-t border-up-border/60 px-3 pt-2 pb-1">
                      <span className="text-[10.5px] font-semibold text-up-text-muted uppercase tracking-wider block mb-1.5">
                        Top Destinations
                      </span>
                      <div className="grid grid-cols-2 gap-1">
                        {DESTINATIONS.slice(0, 4).map((d) => (
                          <button
                            key={d.id}
                            onClick={() => handleLinkClick('destinations', d.id)}
                            className="text-left px-2 py-1 text-xs text-up-text hover:text-up-purple hover:bg-up-purple-light/40 rounded flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-up-gold/70 flex-shrink-0" />
                            <span className="font-medium truncate">{d.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources ▾ Dropdown */}
            <div
              className="relative py-2"
              ref={resourcesDropdownRef}
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                className={`flex items-center gap-1 transition-colors hover:text-up-purple ${
                  isResourcesActive ? 'text-up-purple font-semibold' : 'text-up-text'
                }`}
                aria-expanded={resourcesDropdownOpen}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    resourcesDropdownOpen ? 'rotate-180 text-up-purple' : 'text-gray-500'
                  }`}
                />
              </button>

              {/* Resources Dropdown Menu */}
              {resourcesDropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-1.5 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={handleResourcesEnter}
                  onMouseLeave={handleResourcesLeave}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-up-border py-2 ring-1 ring-black/5">
                    <div className="px-3 pt-1 pb-2 border-b border-up-border/60">
                      <span className="text-[11px] font-semibold text-up-text-muted uppercase tracking-wider">
                        Student Guides & News
                      </span>
                    </div>

                    <div className="p-1.5 space-y-1">
                      <button
                        onClick={() => handleLinkClick('news')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-up-purple-light/50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-up-purple-light flex items-center justify-center text-up-purple group-hover:bg-up-purple group-hover:text-white transition-colors">
                          <Newspaper className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-up-text">News & Events</div>
                          <div className="text-xs text-up-text-muted">Intakes, webinars & fairs</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('faq')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-up-purple-light/50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-up-teal-light flex items-center justify-center text-up-teal group-hover:bg-up-teal group-hover:text-white transition-colors">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-up-text">Frequently Asked Questions</div>
                          <div className="text-xs text-up-text-muted">Visa, admissions & finance FAQ</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('legal')}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-up-purple-light/50 flex items-center gap-3 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-up-text">Accreditation & Policies</div>
                          <div className="text-xs text-up-text-muted">Ethics, compliance & terms</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`transition-colors hover:text-up-purple ${
                currentRoute === 'contact' ? 'text-up-purple font-semibold' : 'text-up-text'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Book a Consultation Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="bg-up-purple hover:bg-up-purple-dark text-white font-medium text-sm px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:shadow transform active:scale-95"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="bg-up-purple text-white text-xs font-medium px-3 py-2 rounded-md shadow-sm"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-up-text hover:text-up-purple hover:bg-up-purple-light/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-up-border bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-lg animate-in fade-in duration-150">
          <button
            onClick={() => handleLinkClick('home')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentRoute === 'home' ? 'bg-up-purple-light text-up-purple-dark font-semibold' : 'text-up-text hover:bg-slate-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentRoute === 'about' ? 'bg-up-purple-light text-up-purple-dark font-semibold' : 'text-up-text hover:bg-slate-50'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleLinkClick('services')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentRoute === 'services' ? 'bg-up-purple-light text-up-purple-dark font-semibold' : 'text-up-text hover:bg-slate-50'
            }`}
          >
            Services
          </button>

          {/* Mobile Study Accordion */}
          <div>
            <button
              onClick={() => setMobileStudyOpen(!mobileStudyOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-up-text hover:bg-slate-50"
            >
              <span>Study</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileStudyOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileStudyOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-up-purple/30 ml-3">
                <button
                  onClick={() => handleLinkClick('destinations')}
                  className="block w-full text-left px-3 py-1.5 text-sm text-up-text hover:text-up-purple"
                >
                  Study Destinations
                </button>
                <button
                  onClick={() => handleLinkClick('universities')}
                  className="block w-full text-left px-3 py-1.5 text-sm text-up-text hover:text-up-purple"
                >
                  Universities Directory
                </button>
                <button
                  onClick={() => handleLinkClick('courses')}
                  className="block w-full text-left px-3 py-1.5 text-sm text-up-text hover:text-up-purple"
                >
                  Courses & Degrees
                </button>
              </div>
            )}
          </div>

          {/* Mobile Resources Accordion */}
          <div>
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-up-text hover:bg-slate-50"
            >
              <span>Resources</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-up-purple/30 ml-3">
                <button
                  onClick={() => handleLinkClick('news')}
                  className="block w-full text-left px-3 py-1.5 text-sm text-up-text hover:text-up-purple"
                >
                  News & Events
                </button>
                <button
                  onClick={() => handleLinkClick('faq')}
                  className="block w-full text-left px-3 py-1.5 text-sm text-up-text hover:text-up-purple"
                >
                  FAQ
                </button>
                <button
                  onClick={() => handleLinkClick('legal')}
                  className="block w-full text-left px-3 py-1.5 text-sm text-up-text hover:text-up-purple"
                >
                  Accreditation & Policies
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
              currentRoute === 'contact' ? 'bg-up-purple-light text-up-purple-dark font-semibold' : 'text-up-text hover:bg-slate-50'
            }`}
          >
            Contact
          </button>

          <div className="pt-4 border-t border-up-border/60">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-up-purple hover:bg-up-purple-dark text-white font-medium py-3 rounded-md shadow text-center"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

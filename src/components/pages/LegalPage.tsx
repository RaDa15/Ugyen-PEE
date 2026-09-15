import React, { useState } from 'react';
import { ShieldCheck, Lock, FileText, AlertTriangle } from 'lucide-react';

interface LegalPageProps {
  initialTab?: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'security'>(
    initialTab === 'terms' ? 'terms' : initialTab === 'security' ? 'security' : 'privacy'
  );

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              GOVERNANCE & TRUST
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-3">
            Legal, Privacy & Security Disclosures
          </h1>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
            Our statutory obligations, student data protection policies, and public advisory guidelines.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-up-border mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-5 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'border-up-purple text-up-purple-dark'
                : 'border-transparent text-up-text-muted hover:text-up-text'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-3 px-5 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'terms'
                ? 'border-up-purple text-up-purple-dark'
                : 'border-transparent text-up-text-muted hover:text-up-text'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Use</span>
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`pb-3 px-5 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'security'
                ? 'border-up-purple text-up-purple-dark'
                : 'border-transparent text-up-text-muted hover:text-up-text'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Security & Anti-Phishing Advisory</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="prose max-w-none text-xs sm:text-sm text-up-text space-y-6 leading-relaxed">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-up-purple-dark">
                Privacy Policy (Public Website Phase)
              </h2>
              <p>
                Ugyen Pee Education Consultancy & Placement Firm respects the personal privacy of all students, parents, and visitors. This policy outlines how information submitted through our public website is handled.
              </p>
              <h3 className="font-serif text-lg font-bold text-up-purple-dark mt-4">
                1. Information Collected
              </h3>
              <p>
                In this public phase, we collect only voluntary information submitted through our contact and consultation booking forms (Name, Email, Phone Number, Target Study Destination, and Optional Inquiries). We do not collect passwords, passport numbers, bank credentials, or credit card information on this website.
              </p>
              <h3 className="font-serif text-lg font-bold text-up-purple-dark mt-4">
                2. Use of Information
              </h3>
              <p>
                Information provided is strictly utilized to respond to your educational queries, schedule in-person or virtual counselling appointments, and provide relevant university application information. We never sell, rent, or distribute personal information to third-party marketing entities.
              </p>
              <h3 className="font-serif text-lg font-bold text-up-purple-dark mt-4">
                3. Consent & Right to Erasure
              </h3>
              <p>
                You may request the deletion or update of your submitted contact records at any time by contacting our office directly at info@ugyenpee.bt.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-up-purple-dark">
                Terms of Use & Regulatory Disclaimers
              </h2>
              <p>
                Welcome to the official public portal of Ugyen Pee Education Consultancy & Placement Firm. By browsing this website, you agree to these terms.
              </p>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block mb-1 font-semibold text-amber-950">
                    Important Statutory Disclaimer (BR-009 & BR-010):
                  </strong>
                  Ugyen Pee provides expert counselling, profile evaluation, and administrative application assistance. We do NOT guarantee admission to any academic institution, nor do we guarantee the issuance of any visa. Admission and visa decisions remain strictly at the sole discretion of the respective educational institutions and sovereign immigration authorities.
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-up-purple-dark mt-4">
                1. Informational Content
              </h3>
              <p>
                Tuition estimates, living costs, and intake dates provided on this website are indicative and subject to change by respective partner universities and national immigration policies. Formal fee schedules must be verified through official offer letters.
              </p>
              <h3 className="font-serif text-lg font-bold text-up-purple-dark mt-4">
                2. Intellectual Property
              </h3>
              <p>
                All trademarks, emblems, and visual assets belonging to Ugyen Pee Education Consultancy & Placement Firm are legally protected. University logos are the property of their respective institutions.
              </p>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-up-purple-dark">
                Security & Anti-Phishing Guidelines
              </h2>
              <p>
                As an accredited education consultancy, we take student safety and cyber resilience seriously. Please observe the following official verification protocols:
              </p>
              <div className="bg-up-background p-5 rounded-xl border border-up-border space-y-3">
                <h4 className="font-serif text-base font-bold text-up-purple-dark">
                  How to Identify Legitimate Communications from Ugyen Pee
                </h4>
                <ul className="space-y-2 text-xs text-up-text">
                  <li className="flex items-start gap-2">
                    <span className="text-up-teal font-bold">✓</span>
                    <span><strong>Official Domain:</strong> All legitimate emails will come strictly from our verified domain (e.g., info@ugyenpee.bt).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-up-teal font-bold">✓</span>
                    <span><strong>No Payment Over WhatsApp/Email:</strong> Ugyen Pee will NEVER request money transfers to personal bank accounts or via unofficial mobile wallets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-up-teal font-bold">✓</span>
                    <span><strong>Free Initial Counselling:</strong> Initial profile reviews and general consultations with our team are always complimentary.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-up-teal font-bold">✓</span>
                    <span><strong>Thimphu Office Verification:</strong> When in doubt, call our office directly at +975 2 321 000 or visit our premises in Thimphu, Bhutan.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldAlert, AlertCircle } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';
import { EnquirySubmission } from '../../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: '',
    email: '',
    phone: '',
    interestedCountry: 'Australia',
    studyLevel: 'Undergraduate',
    message: '',
    website_url_hp: '' // Honeypot field for anti-spam
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [rateLimitMsg, setRateLimitMsg] = useState('');

  const sanitize = (val: string) => val.replace(/<[^>]*>?/gm, '').trim();

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.length < 7) {
      errs.phone = 'Please provide a valid phone number.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Security Check: Bot Trap
    if (formData.website_url_hp) {
      setIsSubmitted(true);
      return;
    }

    // Security Check: Throttle submission flood
    const lastSubmitTime = localStorage.getItem('up_contact_submit');
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < 15000) {
      setRateLimitMsg('Please wait a few moments before sending another message.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setRateLimitMsg('');

    setTimeout(() => {
      const sanitized = {
        name: sanitize(formData.name),
        email: sanitize(formData.email),
        phone: sanitize(formData.phone),
        message: sanitize(formData.message)
      };
      console.log('Sanitized contact submission:', sanitized);
      localStorage.setItem('up_contact_submit', now.toString());
      setRefCode(`UP-MSG-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              GET IN TOUCH
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Contact Ugyen Pee Education Firm
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Visit our office in Thimphu or send us an enquiry online. Our education counsellors are here to guide every step of your study journey.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details & Security Warning */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-up-purple">
                OFFICE LOCATION & HOURS
              </span>
              <h2 className="font-serif text-3xl font-bold text-up-purple-dark mt-2 mb-6">
                Thimphu Head Office
              </h2>
              <p className="text-xs sm:text-sm text-up-text-muted leading-relaxed mb-6">
                Our consultancy premises are equipped for face-to-face academic assessments, parent seminars, and online university interviews.
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-up-text">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-up-background border border-up-border">
                  <MapPin className="w-5 h-5 text-up-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-up-purple-dark font-semibold">Address</strong>
                    <span className="text-up-text-muted">Thimphu, Kingdom of Bhutan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-up-background border border-up-border">
                  <Phone className="w-5 h-5 text-up-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-up-purple-dark font-semibold">Phone Lines</strong>
                    <span className="text-up-text-muted">+975 2 321 000 / +975 17 000 000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-up-background border border-up-border">
                  <Mail className="w-5 h-5 text-up-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-up-purple-dark font-semibold">Official Email</strong>
                    <span className="text-up-text-muted">info@ugyenpee.bt</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-up-background border border-up-border">
                  <Clock className="w-5 h-5 text-up-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-up-purple-dark font-semibold">Office Hours</strong>
                    <span className="text-up-text-muted">Monday – Friday: 9:00 AM – 5:00 PM</span>
                    <span className="text-up-text-muted block">Saturday: 9:00 AM – 1:00 PM</span>
                    <span className="text-up-text-muted block text-[11px] text-amber-700 mt-1">Closed Sundays & Government Holidays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Anti-Phishing Advisory per security.md */}
            <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <ShieldAlert className="w-4 h-4 text-amber-800" />
                Anti-Phishing & Official Communications Advisory
              </div>
              <p className="leading-relaxed">
                Be vigilant against fraudulent education agents. Ugyen Pee conducts all correspondence through official phone numbers and verified domain emails. We never solicit fees via personal banking or unauthorized messaging channels.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-up-border p-8 sm:p-10 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-up-teal">
                SEND AN ENQUIRY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-up-purple-dark mt-1 mb-6">
                Request Information or Book Counselling
              </h3>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
                  <h4 className="font-serif text-2xl font-bold text-up-purple-dark">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-up-text-muted max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our admissions desk in Thimphu has received your message and will follow up with you within 24 hours.
                  </p>
                  <div className="inline-block bg-up-purple-light/50 px-4 py-1.5 rounded text-xs font-mono font-semibold text-up-purple-dark">
                    Reference: {refCode}
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          interestedCountry: 'Australia',
                          studyLevel: 'Undergraduate',
                          message: '',
                          website_url_hp: ''
                        });
                      }}
                      className="text-xs text-up-purple font-semibold hover:underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot trap */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="website_url_hp"
                      value={formData.website_url_hp}
                      onChange={(e) => setFormData({ ...formData, website_url_hp: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {rateLimitMsg && (
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{rateLimitMsg}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                      Your Full Name <span className="text-up-red">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tshering Deki"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 text-sm rounded border ${
                        errors.name ? 'border-up-red bg-red-50/20' : 'border-up-border'
                      } focus:outline-none focus:ring-2 focus:ring-up-purple`}
                    />
                    {errors.name && <p className="text-xs text-up-red mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                        Email Address <span className="text-up-red">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm rounded border ${
                          errors.email ? 'border-up-red bg-red-50/20' : 'border-up-border'
                        } focus:outline-none focus:ring-2 focus:ring-up-purple`}
                      />
                      {errors.email && <p className="text-xs text-up-red mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                        Phone Number <span className="text-up-red">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+975 17XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 text-sm rounded border ${
                          errors.phone ? 'border-up-red bg-red-50/20' : 'border-up-border'
                        } focus:outline-none focus:ring-2 focus:ring-up-purple`}
                      />
                      {errors.phone && <p className="text-xs text-up-red mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                        Target Country
                      </label>
                      <select
                        value={formData.interestedCountry}
                        onChange={(e) => setFormData({ ...formData, interestedCountry: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-up-border bg-white focus:outline-none focus:ring-2 focus:ring-up-purple"
                      >
                        {DESTINATIONS.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                        <option value="Multiple">Undecided / Exploring Options</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                        Level of Study
                      </label>
                      <select
                        value={formData.studyLevel}
                        onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-up-border bg-white focus:outline-none focus:ring-2 focus:ring-up-purple"
                      >
                        <option value="Undergraduate">Undergraduate (Bachelor's)</option>
                        <option value="Postgraduate">Postgraduate (Master's)</option>
                        <option value="Vocational/Diploma">Vocational / Diploma</option>
                        <option value="Doctorate">Doctorate / PhD</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                      Message or Specific Inquiries
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current academic standing, intended program, or specific queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded border border-up-border focus:outline-none focus:ring-2 focus:ring-up-purple"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-up-purple hover:bg-up-purple-dark text-white font-semibold text-sm py-3.5 rounded shadow transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'Sending Enquiry...'
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry to Thimphu Office</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

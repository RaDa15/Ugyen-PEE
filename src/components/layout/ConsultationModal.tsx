import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, ShieldAlert, Send } from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';
import { EnquirySubmission } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCountry?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCountry = ''
}) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: '',
    email: '',
    phone: '',
    interestedCountry: preselectedCountry || 'Australia',
    studyLevel: 'Undergraduate',
    message: '',
    website_url_hp: '' // Honeypot field for bot detection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [rateLimitMessage, setRateLimitMessage] = useState('');

  if (!isOpen) return null;

  // Simple client-side sanitization to strip dangerous tags
  const sanitize = (val: string) => {
    return val.replace(/<[^>]*>?/gm, '').trim();
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.length < 7) {
      newErrors.phone = 'Phone number is too short.';
    }

    if (formData.message && formData.message.length > 1000) {
      newErrors.message = 'Message must be under 1,000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Security Check 1: Honeypot trap
    if (formData.website_url_hp && formData.website_url_hp.length > 0) {
      // Bot detected! Silently reject without alerting the bot
      setIsSuccess(true);
      return;
    }

    // Security Check 2: Client Rate Throttling (cooldown 15 seconds)
    const lastSubmitTime = localStorage.getItem('up_last_submit');
    const now = Date.now();
    if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < 15000) {
      setRateLimitMessage('Please wait a few seconds before submitting another request.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setRateLimitMessage('');

    // Simulate verified form processing with sanitized values
    setTimeout(() => {
      const sanitizedData: EnquirySubmission = {
        name: sanitize(formData.name),
        email: sanitize(formData.email),
        phone: sanitize(formData.phone),
        interestedCountry: formData.interestedCountry,
        studyLevel: formData.studyLevel,
        message: sanitize(formData.message)
      };

      console.log('Enquiry successfully submitted and sanitized:', sanitizedData);
      localStorage.setItem('up_last_submit', now.toString());
      setSubmissionId(`UP-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interestedCountry: preselectedCountry || 'Australia',
      studyLevel: 'Undergraduate',
      message: '',
      website_url_hp: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-up-border overflow-hidden">
        {/* Modal Header */}
        <div className="bg-up-purple-dark text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-sm">
              <img src="/ugyenpee-logo.jpg" alt="Ugyen Pee Official Seal" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold leading-tight">Book a Consultation</h3>
              <p className="text-xs text-up-gold">Free initial counselling session with our advisors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-up-purple-dark">
                Thank You, {formData.name || 'Scholar'}!
              </h4>
              <p className="text-sm text-up-text-muted max-w-md mx-auto">
                Your consultation request has been received. One of our senior education counsellors in Thimphu will contact you within 1 business day.
              </p>
              <div className="inline-block bg-up-purple-light/60 px-4 py-2 rounded text-xs text-up-purple-dark font-mono font-semibold">
                Reference ID: {submissionId}
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-up-purple text-white px-6 py-2 rounded font-medium text-sm hover:bg-up-purple-dark transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Security Honeypot (invisible to legitimate users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="website_url_hp">Website</label>
                <input
                  type="text"
                  id="website_url_hp"
                  name="website_url_hp"
                  value={formData.website_url_hp}
                  onChange={(e) => setFormData({ ...formData, website_url_hp: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {rateLimitMessage && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{rateLimitMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                  Full Name <span className="text-up-red">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Tenzin Wangchuk"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2 text-sm rounded border ${
                    errors.name ? 'border-up-red bg-red-50/20' : 'border-up-border'
                  } focus:outline-none focus:ring-2 focus:ring-up-purple`}
                />
                {errors.name && <p className="text-xs text-up-red mt-1">{errors.name}</p>}
              </div>

              {/* Email & Phone Grid */}
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
                    className={`w-full px-3.5 py-2 text-sm rounded border ${
                      errors.email ? 'border-up-red bg-red-50/20' : 'border-up-border'
                    } focus:outline-none focus:ring-2 focus:ring-up-purple`}
                  />
                  {errors.email && <p className="text-xs text-up-red mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                    Phone / WhatsApp <span className="text-up-red">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+975 17XXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-2 text-sm rounded border ${
                      errors.phone ? 'border-up-red bg-red-50/20' : 'border-up-border'
                    } focus:outline-none focus:ring-2 focus:ring-up-purple`}
                  />
                  {errors.phone && <p className="text-xs text-up-red mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Destination & Study Level Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                    Interested Country
                  </label>
                  <select
                    value={formData.interestedCountry}
                    onChange={(e) => setFormData({ ...formData, interestedCountry: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-up-border bg-white focus:outline-none focus:ring-2 focus:ring-up-purple"
                  >
                    {DESTINATIONS.map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name}
                      </option>
                    ))}
                    <option value="Undecided">Undecided / Multiple</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                    Target Study Level
                  </label>
                  <select
                    value={formData.studyLevel}
                    onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded border border-up-border bg-white focus:outline-none focus:ring-2 focus:ring-up-purple"
                  >
                    <option value="Undergraduate">Undergraduate (Bachelor's)</option>
                    <option value="Postgraduate">Postgraduate (Master's)</option>
                    <option value="Vocational/Diploma">Vocational / Diploma</option>
                    <option value="Doctorate">Doctorate / PhD</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-up-text mb-1">
                  Questions or Academic Background (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your intended program of study or questions you have for our counsellors..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded border border-up-border focus:outline-none focus:ring-2 focus:ring-up-purple"
                />
              </div>

              {/* Privacy and Anti-fraud assurance */}
              <div className="p-3 bg-up-purple-light/40 rounded-lg flex items-start gap-2.5 text-xs text-up-text-muted">
                <ShieldAlert className="w-4 h-4 text-up-purple flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Privacy & Integrity Guarantee:</strong> We do not ask for passport copies, passwords, or financial deposits through this form. All consultations are confidential.
                </span>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-up-text-muted hover:text-up-text"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-up-purple hover:bg-up-purple-dark text-white text-sm font-semibold px-6 py-2.5 rounded shadow transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Book Consultation
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

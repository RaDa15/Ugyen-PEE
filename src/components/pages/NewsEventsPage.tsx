import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface NewsEventsPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const NewsEventsPage: React.FC<NewsEventsPageProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'events' | 'news'>('all');

  const items = [
    {
      id: 1,
      type: 'event',
      title: 'IELTS Preparation & Strategy Intensive Workshop',
      category: 'WORKSHOP',
      date: 'Saturday, Upcoming Weekend',
      time: '10:00 AM – 2:00 PM',
      location: 'Ugyen Pee Main Hall, Thimphu',
      description: 'Master listening, reading, writing, and speaking strategies directly with certified English instructors. Free for registered candidates.',
      badge: 'Open Registration'
    },
    {
      id: 2,
      type: 'event',
      title: 'Australian University Admissions Delegation Visit',
      category: 'MEET & GREET',
      date: 'Mid-Month Session',
      time: '1:30 PM – 5:00 PM',
      location: 'Thimphu Office & Virtual Live Stream',
      description: 'Meet institutional representatives from top Australian universities. Direct assessment for upcoming February and July intakes.',
      badge: 'Limited Seats'
    },
    {
      id: 3,
      type: 'news',
      title: 'Canadian Post-Graduation Work Permit (PGWP) Policy Updates',
      category: 'REGULATORY UPDATE',
      date: 'Recent Advisory',
      time: 'Public Notice',
      location: 'IRCC / International Higher Ed',
      description: 'Summary of the latest IRCC regulations regarding Provincial Attestation Letters (PAL) and field of study requirements for post-study work permits.',
      badge: 'Important Notice'
    },
    {
      id: 4,
      type: 'event',
      title: 'Pre-Departure Orientation & Scholar Send-off',
      category: 'ORIENTATION',
      date: 'Bi-Monthly',
      time: '2:00 PM – 4:30 PM',
      location: 'Ugyen Pee Conference Room, Thimphu',
      description: 'Essential packing guidance, foreign currency exchange, sim card setup, and cultural orientation for departing Bhutanese scholars.',
      badge: 'Mandatory for Departures'
    },
    {
      id: 5,
      type: 'news',
      title: 'UK Graduate Route Visa: Confirmation of 2-Year Post-Study Stay',
      category: 'IMMIGRATION NEWS',
      date: 'Latest Notice',
      time: 'Official Update',
      location: 'UK Home Office Policy',
      description: 'The UK Government confirms the continuation of the 2-year Graduate Route for international students graduating from accredited UK universities.',
      badge: 'Policy Update'
    }
  ];

  const filteredItems = items.filter((item) => {
    if (activeTab === 'events') return item.type === 'event';
    if (activeTab === 'news') return item.type === 'news';
    return true;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              UPDATES & HAPPENINGS
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            News, Events & Seminars
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Stay informed about university visits to Thimphu, English exam workshops, scholarship deadlines, and global visa policy announcements.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-up-background border border-up-border">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                activeTab === 'all'
                  ? 'bg-up-purple text-white shadow-xs'
                  : 'text-up-text hover:text-up-purple'
              }`}
            >
              All Announcements
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                activeTab === 'events'
                  ? 'bg-up-purple text-white shadow-xs'
                  : 'text-up-text hover:text-up-purple'
              }`}
            >
              Events & Workshops
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                activeTab === 'news'
                  ? 'bg-up-purple text-white shadow-xs'
                  : 'text-up-text hover:text-up-purple'
              }`}
            >
              Education News & Policy
            </button>
          </div>
        </div>

        {/* List of News & Events */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-up-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-6 justify-between items-start group"
            >
              <div className="flex-1 space-y-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-up-purple-light text-up-purple-dark">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-up-purple-dark group-hover:text-up-purple transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-up-text-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-up-text font-medium pt-2">
                  <span className="flex items-center gap-1.5 text-up-purple-dark">
                    <Calendar className="w-3.5 h-3.5 text-up-gold" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-up-text-muted">
                    <Clock className="w-3.5 h-3.5 text-up-teal" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-1.5 text-up-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-up-purple" />
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="sm:self-center flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => onOpenConsultation(`RSVP / Enquiry: ${item.title}`)}
                  className="w-full sm:w-auto bg-up-purple hover:bg-up-purple-dark text-white text-xs font-semibold px-4 py-2.5 rounded shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Register Interest</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { COURSES } from '../../data/courses';

interface CoursesPageProps {
  onOpenConsultation: (courseTitle?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedField, setSelectedField] = useState<string>('All');

  const fields = ['All', 'Computing & IT', 'Healthcare & Medicine', 'Business & Management', 'Engineering', 'Science & Environment'];
  const levels = ['All', 'Undergraduate', 'Postgraduate'];

  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.country.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesField = selectedField === 'All' || course.field === selectedField;

    return matchesSearch && matchesLevel && matchesField;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-hero-texture bg-diagonal-stripes text-white py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-up-gold" />
            <span className="text-up-gold font-semibold tracking-widest text-xs uppercase">
              COURSE FINDER
            </span>
            <span className="w-6 h-[2px] bg-up-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Find the Right Academic Degree
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Search undergraduate and postgraduate programs offering high graduate outcomes, industry internships, and international career recognition.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-up-text-muted" />
            <input
              type="text"
              placeholder="Search by degree title, subject, or university..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-sm bg-white text-up-text focus:outline-none focus:ring-2 focus:ring-up-gold shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Filter and Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Controls */}
        <div className="bg-up-background p-6 rounded-xl border border-up-border mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Level Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-up-text-muted">Degree Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="text-xs px-3 py-1.5 rounded border border-up-border bg-white text-up-text focus:ring-2 focus:ring-up-purple"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* Field Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-up-text-muted">Study Field:</span>
              <select
                value={selectedField}
                onChange={(e) => setSelectedField(e.target.value)}
                className="text-xs px-3 py-1.5 rounded border border-up-border bg-white text-up-text focus:ring-2 focus:ring-up-purple"
              >
                {fields.map((fld) => (
                  <option key={fld} value={fld}>{fld}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-xs text-up-text-muted font-medium">
            Showing <strong className="text-up-purple-dark">{filteredCourses.length}</strong> available programs
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl border border-up-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-up-purple-light text-up-purple-dark">
                    {course.level} • {course.field}
                  </span>
                  <span className="text-xs font-medium text-up-teal flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {course.country}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-up-purple-dark mb-1 group-hover:text-up-purple transition-colors">
                  {course.title}
                </h3>
                <div className="text-xs font-semibold text-up-text mb-3">
                  {course.universityName}
                </div>

                <p className="text-xs text-up-text-muted leading-relaxed line-clamp-2 mb-4">
                  {course.description}
                </p>

                {/* Course Metadata Strip */}
                <div className="grid grid-cols-3 gap-2 bg-up-background p-3 rounded-lg border border-up-border text-[11px] mb-4">
                  <div>
                    <span className="text-up-text-muted block">Duration:</span>
                    <span className="font-semibold text-up-purple-dark">{course.duration}</span>
                  </div>
                  <div>
                    <span className="text-up-text-muted block">Intake:</span>
                    <span className="font-semibold text-up-purple-dark">{course.intake}</span>
                  </div>
                  <div>
                    <span className="text-up-text-muted block">Estimated Fee:</span>
                    <span className="font-semibold text-up-purple-dark truncate block">{course.estimatedFee}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-up-border/60 flex items-center justify-between">
                <span className="text-[11px] text-up-text-muted">
                  Full eligibility check via Ugyen Pee
                </span>
                <button
                  onClick={() => onOpenConsultation(`Course Enquiry: ${course.title} at ${course.universityName}`)}
                  className="bg-up-purple hover:bg-up-purple-dark text-white text-xs font-semibold px-4 py-2 rounded transition-colors flex items-center gap-1"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Sparkles } from 'lucide-react';
import { TeamCarousel, TeamMember } from '@/components/lightswind/team-carousel';
import { JOURNEY_MOMENTS } from '../../data/moments';

// Map JOURNEY_MOMENTS to members format matching the TeamCarousel API
const momentMembers: TeamMember[] = JOURNEY_MOMENTS.map((moment) => ({
  id: moment.id,
  name: moment.title,
  role: moment.category,
  category: moment.category,
  dateStr: moment.dateStr,
  image: moment.image,
  bio: moment.description,
  accent: moment.accent,
}));

export const JourneyCoverflow: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 bg-transparent border-b border-up-border/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
        
        {/* Centered Section Header - compact to fit in single viewport */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-up-purple-light text-up-purple-dark text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-up-gold" />
            Scholar Life & Events
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-up-purple-dark mb-2">
            Moments From the Journey
          </h2>
          <p className="text-xs sm:text-sm text-up-text-muted max-w-xl mx-auto">
            Explore authentic milestones from IELTS preparation in Thimphu to overseas university admissions and pre-departure celebrations.
          </p>
        </div>

        {/* Smooth 3-Card Carousel matching reference layout */}
        <TeamCarousel
          members={momentMembers}
          autoPlay={3500}
          cardWidth={340}
          cardHeight={450}
          cardRadius={24}
          showArrows={true}
          showDots={true}
          sideCardScale={0.90}
          sideCardOpacity={0.96}
          infoPosition="overlay"
          onMemberChange={(member, index) => {
            console.log('Active moment:', member.name, index);
          }}
        />

      </div>
    </section>
  );
};



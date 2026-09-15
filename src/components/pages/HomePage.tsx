import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { StatsSection } from '../home/StatsSection';
import { DestinationsCarousel } from '../home/DestinationsCarousel';
import { JourneyCoverflow } from '../home/JourneyCoverflow';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { HowItWorks } from '../home/HowItWorks';
import { SuccessStories } from '../home/SuccessStories';
import { CtaBanner } from '../home/CtaBanner';

interface HomePageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div>
      {/* Hero Section matching mockup image */}
      <HeroSection
        onExploreDestinations={() => onNavigate('destinations')}
        onTalkToCounsellor={onOpenConsultation}
      />

      {/* Trust & Stats Strip matching mockup */}
      <StatsSection />

      {/* Explore Your Options (Destinations Carousel) */}
      <DestinationsCarousel
        onSelectDestination={(id) => onNavigate('destinations', id)}
        onViewAll={() => onNavigate('destinations')}
      />

      {/* Moments From the Journey (3D Coverflow) */}
      <JourneyCoverflow />

      {/* Why Choose Ugyen Pee */}
      <WhyChooseUs />

      {/* How It Works (5-Step Pathway) */}
      <HowItWorks />

      {/* Success Stories Testimonials */}
      <SuccessStories onViewAll={() => onNavigate('about')} />

      {/* Pre-Footer Start Your Journey CTA */}
      <CtaBanner onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

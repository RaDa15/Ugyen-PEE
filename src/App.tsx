import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/layout/ConsultationModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { DestinationsPage } from './components/pages/DestinationsPage';
import { UniversitiesPage } from './components/pages/UniversitiesPage';
import { CoursesPage } from './components/pages/CoursesPage';
import { NewsEventsPage } from './components/pages/NewsEventsPage';
import { FaqPage } from './components/pages/FaqPage';
import { ContactPage } from './components/pages/ContactPage';
import { LegalPage } from './components/pages/LegalPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string | undefined>(undefined);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreselect, setConsultationPreselect] = useState<string>('');

  const navigateTo = (route: string, param?: string) => {
    setCurrentRoute(route);
    setRouteParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (subjectOrCountry?: string) => {
    if (subjectOrCountry) {
      setConsultationPreselect(subjectOrCountry);
    } else {
      setConsultationPreselect('');
    }
    setIsConsultationOpen(true);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenConsultation={() => handleOpenConsultation()}
            onNavigate={navigateTo}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case 'destinations':
        return (
          <DestinationsPage
            initialDestinationId={routeParam}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'universities':
        return (
          <UniversitiesPage
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'courses':
        return (
          <CoursesPage
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'news':
        return (
          <NewsEventsPage
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case 'faq':
        return (
          <FaqPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'legal':
        return <LegalPage initialTab={routeParam} />;
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-up-text selection:bg-up-purple-light selection:text-up-purple-dark">
      {/* Global Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedCountry={consultationPreselect}
      />
    </div>
  );
}

export default App;

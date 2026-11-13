import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutAndServices } from './components/AboutAndServices';
import { ProjectsAndReviews } from './components/ProjectsAndReviews';
import { QuoteAndFooter } from './components/QuoteAndFooter';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedNotes, setPreselectedNotes] = useState<string>('');

  function scrollToContact() {
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleSelectService(serviceTitle: string) {
    setPreselectedService(serviceTitle);
    setPreselectedNotes(`Inquiry regarding: ${serviceTitle}`);
    scrollToContact();
  }

  function handleRequestSimilar(projectTitle: string, category: string) {
    const mappedService =
      category === 'Solar & Inverters'
        ? 'Hybrid Solar & Inverter Systems'
        : category === 'Interior Lighting'
          ? 'Architectural & Smart Lighting'
          : 'Complete Building Wiring & Rewiring';

    setPreselectedService(mappedService);
    setPreselectedNotes(`Interested in a project similar to: ${projectTitle}`);
    scrollToContact();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection onRequestSurvey={scrollToContact} />
        <AboutAndServices onSelectService={handleSelectService} />
        <ProjectsAndReviews onRequestSimilar={handleRequestSimilar} />
        <QuoteAndFooter
          preselectedService={preselectedService}
          preselectedNotes={preselectedNotes}
        />
      </main>
    </div>
  );
}

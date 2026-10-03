import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IdentityStrip } from './components/IdentityStrip';
import { InitiativeIntroduction } from './components/InitiativeIntroduction';
import { ResearchDevelopmentFramework } from './components/ResearchDevelopmentFramework';
import { ResearchDirections } from './components/ResearchDirections';
import { AIMaterialsSection } from './components/AIMaterialsSection';
import { ResponsibleResearchSection } from './components/ResponsibleResearchSection';
import { LeadershipPreview } from './components/LeadershipPreview';
import { AchievementPreview } from './components/AchievementPreview';
import { DepartmentalImpact } from './components/DepartmentalImpact';
import { PlatformEvolution } from './components/PlatformEvolution';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

// Dedicated views for full page navigation
import { AboutView } from './components/AboutView';
import { ResearchView } from './components/ResearchView';
import { AIMaterialsView } from './components/AIMaterialsView';
import { AchievementsView } from './components/AchievementsView';
import { TeamView } from './components/TeamView';
import { ContactView } from './components/ContactView';
import { AIFluencyNotification } from './components/AIFluencyNotification';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A] font-sans selection:bg-[#FAF0EE] selection:text-[#8B2E1A]">
      {/* 1. Sticky Academic Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* HOMEPAGE ARCHITECTURE */}
        {activeTab === 'home' && (
          <>
            {/* 1. Research Hero (with AnimatedSmartwatch Visual) */}
            <Hero
              onExploreResearch={() => handleNavigate('research')}
              onMeetTeam={() => handleNavigate('team')}
            />

            {/* 2. Departmental Identity Strip */}
            <IdentityStrip />

            {/* 3. Initiative Introduction */}
            <InitiativeIntroduction />

            {/* 4. Research Development Framework (Our Approach) */}
            <ResearchDevelopmentFramework />

            {/* 5. Research Directions (Research at SOMAME) */}
            <ResearchDirections
              onExploreResearch={() => handleNavigate('research')}
            />

            {/* 6. AI × Materials Signature Section */}
            <AIMaterialsSection />

            {/* 7. Responsible Research / Scientific Integrity */}
            <ResponsibleResearchSection />

            {/* 8. Leadership Preview */}
            <LeadershipPreview
              onMeetTeam={() => handleNavigate('team')}
            />

            {/* 9. Progress & Recognition (Achievement Preview) */}
            <AchievementPreview
              onViewArchive={() => handleNavigate('achievements')}
            />

            {/* 10. Departmental Impact */}
            <DepartmentalImpact />

            {/* 11. Platform Evolution Timeline */}
            <PlatformEvolution />

            {/* 12. Closing CTA */}
            <ClosingCTA
              onExploreResearch={() => handleNavigate('research')}
              onMeetTeam={() => handleNavigate('team')}
            />
          </>
        )}

        {/* Dedicated Views */}
        {activeTab === 'about' && (
          <AboutView onNavigateToResearch={() => handleNavigate('research')} />
        )}

        {activeTab === 'research' && (
          <ResearchView onNavigateToAIMaterials={() => handleNavigate('ai-materials')} />
        )}

        {activeTab === 'ai-materials' && <AIMaterialsView />}

        {activeTab === 'achievements' && <AchievementsView />}

        {activeTab === 'team' && <TeamView />}

        {activeTab === 'contact' && (
          <ContactView onNavigateToResearch={() => handleNavigate('research')} />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating 10-Second AI Fluency Notification Popup */}
      <AIFluencyNotification />
    </div>
  );
}

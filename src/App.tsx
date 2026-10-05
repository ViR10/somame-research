import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IdentityStrip } from './components/IdentityStrip';
import { InteractiveResearchHub } from './components/InteractiveResearchHub';
import { InteractivePathway } from './components/InteractivePathway';
import { LeadershipPreview } from './components/LeadershipPreview';
import { AchievementPreview } from './components/AchievementPreview';
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
        {/* STREAMLINED, INTERACTIVE HOMEPAGE ARCHITECTURE */}
        {activeTab === 'home' && (
          <>
            {/* 1. Research Hero (Interactive Motion Art & Mode Switcher) */}
            <Hero
              onExploreResearch={() => handleNavigate('research')}
              onMeetTeam={() => handleNavigate('team')}
            />

            {/* 2. Departmental Identity Strip */}
            <IdentityStrip />

            {/* 3. Interactive Research Suite (Dynamic Domain & Instrument Explorer) */}
            <InteractiveResearchHub
              onExploreResearch={() => handleNavigate('research')}
            />

            {/* 4. Interactive 4-Stage Research Pathway */}
            <InteractivePathway />

            {/* 5. Governance & Leadership Chain (Advisor Guidance first, then Director & Co-Directors) */}
            <LeadershipPreview
              onMeetTeam={() => handleNavigate('team')}
            />

            {/* 6. Milestone Progress & Verification Ticker */}
            <AchievementPreview
              onViewArchive={() => handleNavigate('achievements')}
            />

            {/* 7. Closing CTA */}
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

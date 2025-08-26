import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import EnhancedHeroSection from './components/EnhancedHeroSection';
import AboutSection from './components/AboutSection';
import Enhanced3DPresenceSection from './components/Enhanced3DPresenceSection';
import AIInnovationSection from './components/AIInnovationSection';
import IndustrySection from './components/IndustrySection';
import SolutionsSection from './components/SolutionsSection';
import TechnologySection from './components/TechnologySection';
import RoadmapSection from './components/RoadmapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <Navigation />
        <EnhancedHeroSection />
        <AIInnovationSection />
        <SolutionsSection />
        <IndustrySection />
        <AboutSection />
        <TechnologySection />
        <RoadmapSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
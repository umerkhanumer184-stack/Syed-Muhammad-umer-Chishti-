/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, TabId } from './components/Navbar.tsx';
import { HomeView } from './components/views/HomeView.tsx';
import { AboutView } from './components/views/AboutView.tsx';
import { ServicesView } from './components/views/ServicesView.tsx';
import { SkillsView } from './components/views/SkillsView.tsx';
import { ProjectsView } from './components/views/ProjectsView.tsx';
import { ContactView } from './components/views/ContactView.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 flex flex-col relative selection:bg-[#00ff88]/30 selection:text-[#00ff88] bg-radial-vignette">
      {/* Background Cyber Grid overlay */}
      <div className="fixed inset-0 bg-cyber-grid opacity-60 pointer-events-none" />

      {/* Primary Sticky Navbar with Active Tab Highlighting */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main SPA Dynamic Views */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
        {activeTab === 'about' && <AboutView onNavigate={setActiveTab} />}
        {activeTab === 'services' && <ServicesView onNavigate={setActiveTab} />}
        {activeTab === 'skills' && <SkillsView onNavigate={setActiveTab} />}
        {activeTab === 'projects' && <ProjectsView onNavigate={setActiveTab} />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Footer with Verified Platform Links */}
      <Footer onNavigate={setActiveTab} />
    </div>
  );
}

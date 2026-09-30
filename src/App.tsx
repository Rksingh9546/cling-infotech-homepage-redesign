/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { AiInnovation } from './components/AiInnovation';
import { Portfolio } from './components/Portfolio';
import { GlobalPresence } from './components/GlobalPresence';
import { WhyCling } from './components/WhyCling';
import { ClientLogos } from './components/ClientLogos';
import { StoryAndLeadership } from './components/StoryAndLeadership';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FloatingContact } from './components/FloatingContact';

export default function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Custom Software Development');

  const handleOpenProjectModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsProjectModalOpen(true);
  };

  const handleSelectServiceFromServices = (serviceTitle: string) => {
    setSelectedServiceForModal(serviceTitle);
    setIsProjectModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar onOpenProjectModal={() => handleOpenProjectModal()} />

        {/* Main Landing Page Flow */}
        <main>
          {/* Hero Section */}
          <Hero onOpenProjectModal={() => handleOpenProjectModal()} />

          {/* Real Statistics Bar */}
          <Stats />

          {/* Client Logos / Trust Proof */}
          <ClientLogos />

          {/* 6 Interactive Service Practices */}
          <Services onSelectService={handleSelectServiceFromServices} />

          {/* AI, Computer Vision & 3D Innovation Dark Section */}
          <AiInnovation />

          {/* Featured Case Studies / Portfolio */}
          <Portfolio onOpenProjectModal={handleOpenProjectModal} />

          {/* Global Presence Interactive Map */}
          <GlobalPresence />

          {/* Why Cling & Dynamic Journey */}
          <WhyCling />

          {/* Story, Vision, Mission & Executive Leadership */}
          <StoryAndLeadership />

          {/* Verified Patron Testimonials */}
          <Testimonials />

          {/* Contact Section & Real Offices */}
          <ContactSection initialService={selectedServiceForModal} />

          {/* Final Call To Action */}
          <FinalCta onOpenProjectModal={() => handleOpenProjectModal()} />
        </main>

        {/* Comprehensive Enterprise Footer */}
        <Footer />

        {/* Interactive Project Discovery Modal */}
        <ProjectModal
          isOpen={isProjectModalOpen}
          onClose={() => setIsProjectModalOpen(false)}
          defaultService={selectedServiceForModal}
        />

        {/* WhatsApp Direct Chat Trigger */}
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
}

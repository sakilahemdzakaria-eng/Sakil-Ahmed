import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { VideoSection } from './components/VideoSection';
import { Experience } from './components/Experience';
import { Campaigns } from './components/Campaigns';
import { Results } from './components/Results';
import { Process } from './components/Process';
import { Planner } from './components/Planner';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4.5 min-h-screen">
      <Navbar />
      <main className="space-y-4.5">
        <Hero />
        <Marquee />
        <About />
        <VideoSection />
        <Experience />
        <Campaigns />
        <Results />
        <Process />
        <Planner />
        <Education />
        <Skills />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import Scene3D from '@/components/Scene3D';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import SocialEngagements from '@/components/SocialEngagements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Scene3D />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <SocialEngagements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

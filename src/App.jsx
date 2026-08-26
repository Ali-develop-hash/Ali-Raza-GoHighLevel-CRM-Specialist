import Nav from './components/Nav';
import Hero from './components/Hero';
import WorkflowSimulator from './components/WorkflowSimulator';
import RoiCalculator from './components/RoiCalculator';
import Projects from './components/Projects';
import Services from './components/Services';
import SkillsMatrix from './components/SkillsMatrix';
import WhyHire from './components/WhyHire';
import Stats from './components/Stats';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkflowSimulator />
        <RoiCalculator />
        <Projects />
        <Services />
        <SkillsMatrix />
        <WhyHire />
        <Stats />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap, Code2, Workflow, Terminal } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      {/* Background glow */}
      <div className="glow-orb" style={{ top: '25%', left: '-5%', width: '400px', height: '400px', background: 'rgba(46, 217, 168, 0.06)' }} />

      <div className="container">
        <div className="about__grid">
          {/* Left Column: Heading & Core Narrative */}
          <motion.div
            className="about__intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <GraduationCap size={14} /> Background & Philosophy
            </span>
            <h2 className="about__title">
              Software Engineering rigor meets{' '}
              <span className="text-gradient">hands-on GHL execution</span>.
            </h2>

            <div className="about__bio">
              <p>
                I am a GoHighLevel CRM Specialist with <strong>1.5+ years of intensive platform experience</strong> architecting automated pipelines, conversation bots, and telephony systems.
              </p>
              <p>
                Before diving into GoHighLevel, I earned my <strong>Software Engineering degree</strong>. This means I don't just blindly drag-and-drop workflow templates; I architect systems with computer-science principles: <em>fault-tolerant conditional trees, clean data schemas, and zero race conditions</em>.
              </p>
              <p>
                When standard GHL builder components reach their limit, I write <strong>custom HTML, CSS, JavaScript, and React</strong> to build bespoke calculators, sticky elements, and API webhook bridges that average no-code freelancers simply cannot build.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillar Philosophy Cards */}
          <motion.div
            className="about__pillars"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-card glass-panel">
              <div className="about-card__icon-wrap">
                <Workflow size={20} className="text-accent" />
              </div>
              <div className="about-card__content">
                <h3 className="about-card__title">Architectural Logic</h3>
                <p className="about-card__desc">
                  Every pipeline is engineered with strict stage validations, watchdog SLA alerts for stalled leads, and fail-safe fallback branches.
                </p>
              </div>
            </div>

            <div className="about-card glass-panel">
              <div className="about-card__icon-wrap">
                <Code2 size={20} className="text-cyan" />
              </div>
              <div className="about-card__content">
                <h3 className="about-card__title">Code-Level Mastery</h3>
                <p className="about-card__desc">
                  Fluent in JavaScript, CSS, REST Webhooks, Make.com, and Zapier to connect GHL with any custom external software or database.
                </p>
              </div>
            </div>

            <div className="about-card glass-panel">
              <div className="about-card__icon-wrap">
                <Terminal size={20} className="text-amber" />
              </div>
              <div className="about-card__content">
                <h3 className="about-card__title">Live Commercial Proof</h3>
                <p className="about-card__desc">
                  Proven track record deploying live UK business phone routing, multi-department ticketing, and automated dispatch workflows.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Check, X, Sparkles, Award } from 'lucide-react';
import { whyHirePoints } from '../data/content';
import './WhyHire.css';

export default function WhyHire() {
  return (
    <section className="section why-hire" id="why-hire">
      {/* Background Glow */}
      <div className="glow-orb" style={{ top: '20%', right: '8%', width: '400px', height: '400px', background: 'rgba(46, 217, 168, 0.06)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow">
            <Award size={14} /> The Competitive Advantage
          </span>
          <h2 className="section-title">
            Why Agencies & Founders <span className="text-gradient">Choose Ali</span>
          </h2>
          <p className="section-sub">
            The difference between a basic template clicker and an engineer-grade GoHighLevel CRM Architect.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="why-hire__comparison glass-panel">
          <div className="comparison-col comparison-col--other">
            <div className="comparison-col__header">
              <span className="comparison-col__badge">Standard Market</span>
              <h3 className="comparison-col__title">Typical GHL Freelancer</h3>
              <p className="comparison-col__sub">Basic template clickers & tutorial followers</p>
            </div>

            <ul className="comparison-list">
              <li>
                <X size={16} className="comparison-icon comparison-icon--cross" />
                <span>Relies only on pre-made snapshot templates; gets stuck when requirements deviate.</span>
              </li>
              <li>
                <X size={16} className="comparison-icon comparison-icon--cross" />
                <span>Zero custom code ability; unable to write custom CSS or JavaScript for funnels.</span>
              </li>
              <li>
                <X size={16} className="comparison-icon comparison-icon--cross" />
                <span>Builds messy unorganized workflows prone to infinite loops and lead duplication.</span>
              </li>
              <li>
                <X size={16} className="comparison-icon comparison-icon--cross" />
                <span>Superficial CRM knowledge without deep schema or webhook architecture understanding.</span>
              </li>
            </ul>
          </div>

          <div className="comparison-col comparison-col--ali">
            <div className="comparison-col__header">
              <span className="comparison-col__badge comparison-col__badge--ali">
                <Sparkles size={13} /> The Engineering Edge
              </span>
              <h3 className="comparison-col__title text-gradient">Ali Raza (GHL Specialist)</h3>
              <p className="comparison-col__sub">Software Engineer & High-Ticket Automation Architect</p>
            </div>

            <ul className="comparison-list">
              <li>
                <Check size={16} className="comparison-icon comparison-icon--check" />
                <span><strong>Software Engineering Degree:</strong> Deep logic foundations with zero race conditions.</span>
              </li>
              <li>
                <Check size={16} className="comparison-icon comparison-icon--check" />
                <span><strong>Custom Code Power:</strong> Injects custom HTML/CSS/JS and React when GHL out-of-the-box limits you.</span>
              </li>
              <li>
                <Check size={16} className="comparison-icon comparison-icon--check" />
                <span><strong>REST Webhooks & APIs:</strong> Integrates OpenAI API, Stripe, Make.com & Zapier seamlessly.</span>
              </li>
              <li>
                <Check size={16} className="comparison-icon comparison-icon--check" />
                <span><strong>Live Commercial Track Record:</strong> Battle-tested UK telephony and multi-department deployments.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="why-hire__pillars">
          {whyHirePoints.map((point, idx) => (
            <motion.div
              key={point.title}
              className="pillar-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="pillar-card__badge">{point.badge}</div>
              <h3 className="pillar-card__title">{point.title}</h3>
              <p className="pillar-card__sub">{point.subtitle}</p>
              <p className="pillar-card__desc">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

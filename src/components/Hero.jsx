import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Lattice3D from './Lattice3D';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background ambient lighting */}
      <div className="hero__glow hero__glow--primary" aria-hidden="true" />
      <div className="hero__glow hero__glow--cyan" aria-hidden="true" />

      {/* 3D Cybernetic Automation Core */}
      <Lattice3D />

      <div className="container hero__inner">
        {/* Live Availability Pill */}
        <motion.div
          className="hero__status"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero__status-pulse" />
          <span className="hero__status-text">
            Available for Full-Time Roles & Agency Contracts
          </span>
          <span className="hero__status-badge">⚡ Sub-15m Reply</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I architect automated revenue engines with{' '}
          <span className="hero__accent text-gradient">GoHighLevel</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Helping agencies, real estate, home services, and legal firms capture 100% of inbound leads, eliminate manual follow-up chaos, and convert cold clicks into booked calendar revenue.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://wa.me/923326607846?text=Hi%20Ali,%20I%20saw%20your%20GHL%20portfolio%20and%20would%20like%20to%20discuss%20a%20GHL%20role%20/%20project."
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary hero__btn-main"
          >
            <span>Book a Free GHL Audit Call</span>
            <ArrowRight size={16} />
          </a>

          <a href="#simulator" className="btn btn-secondary">
            <Play size={15} fill="currentColor" />
            <span>Test Live Workflow</span>
          </a>

          <a href="#work" className="btn btn-ghost">
            <span>View Client Case Studies</span>
          </a>
        </motion.div>

        {/* Verified Meta Highlights */}
        <motion.div
          className="hero__meta glass-panel"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="hero__meta-item">
            <div className="hero__meta-value text-gradient">1.5+ Yrs</div>
            <div className="hero__meta-label">Hands-On GHL</div>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <div className="hero__meta-value text-gradient">&lt; 60s</div>
            <div className="hero__meta-label">Speed-to-Lead</div>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <div className="hero__meta-value text-gradient">3 Builds</div>
            <div className="hero__meta-label">Enterprise Scope</div>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <div className="hero__meta-value text-gradient">Live UK</div>
            <div className="hero__meta-label">Client Deployment</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Workflow, PhoneMissed, MessageSquare, Star, CalendarClock, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { services } from '../data/content';
import './Services.css';

const ICONS = {
  pipeline: Workflow,
  textback: PhoneMissed,
  ai: MessageSquare,
  reviews: Star,
  calendar: CalendarClock,
  subaccounts: Layers,
};

export default function Services() {
  return (
    <section className="section services" id="services">
      {/* Background glow */}
      <div className="glow-orb" style={{ top: '20%', right: '5%', width: '450px', height: '450px', background: 'rgba(46, 217, 168, 0.05)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow">
            <Sparkles size={14} /> Comprehensive Offerings
          </span>
          <h2 className="section-title">
            What I Architect Inside <span className="text-gradient">Your GHL Sub-Account</span>
          </h2>
          <p className="section-sub">
            From zero-leak lead capture to custom API bridges and multi-location snapshots, here is what I deploy for agencies and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = ICONS[s.id] || Workflow;
            return (
              <motion.div
                className="service-card glass-panel"
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              >
                <div className="service-card__top">
                  <div className="service-card__icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  {s.badge && <span className="service-card__badge">{s.badge}</span>}
                </div>

                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>

                {/* Deliverables List */}
                {s.deliverables && (
                  <div className="service-card__deliverables">
                    {s.deliverables.map((deliv, idx) => (
                      <div key={idx} className="service-card__deliv-item">
                        <CheckCircle2 size={13} className="text-accent" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

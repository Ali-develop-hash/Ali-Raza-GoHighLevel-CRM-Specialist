import { motion } from 'framer-motion';
import { Workflow, PhoneMissed, MessageCircle, Star, CalendarClock, Layers } from 'lucide-react';
import { services } from '../data/content';
import './Services.css';

const ICONS = {
  pipeline: Workflow,
  textback: PhoneMissed,
  ai: MessageCircle,
  reviews: Star,
  calendar: CalendarClock,
  subaccounts: Layers,
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <span className="eyebrow">Services</span>
          <h2 className="services__title">What I set up inside your CRM</h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <motion.div
                className="service-card"
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              >
                <div className="service-card__icon"><Icon size={20} strokeWidth={1.75} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

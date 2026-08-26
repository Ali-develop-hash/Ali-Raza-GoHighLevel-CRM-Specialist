import { motion } from 'framer-motion';
import { Award, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { stats } from '../data/content';
import './Stats.css';

const STAT_ICONS = [Clock, Zap, Award, CheckCircle2];

export default function Stats() {
  return (
    <section className="section-stats">
      <div className="container">
        <div className="stats-grid glass-panel">
          {stats.map((s, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <motion.div
                className="stats-card"
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="stats-card__icon-wrap">
                  <Icon size={18} className="text-accent" />
                </div>
                <div className="stats-card__value text-gradient">{s.value}</div>
                <div className="stats-card__label">{s.label}</div>
                {s.sub && <div className="stats-card__sub">{s.sub}</div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

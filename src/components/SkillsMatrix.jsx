import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, MessageSquare, Code2, TrendingUp, Cpu, CheckCircle2 } from 'lucide-react';
import { skillsMatrix } from '../data/content';
import './SkillsMatrix.css';

const ICON_MAP = {
  Layers: Layers,
  MessageSquare: MessageSquare,
  Code2: Code2,
  TrendingUp: TrendingUp,
};

export default function SkillsMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section className="section skills-matrix" id="skills">
      {/* Background Glow */}
      <div className="glow-orb" style={{ top: '30%', left: '10%', width: '360px', height: '360px', background: 'rgba(0, 229, 255, 0.05)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--cyan">
            <Cpu size={14} /> Technical Stack & Depth
          </span>
          <h2 className="section-title">
            GoHighLevel & <span className="text-gradient">Engineering Stack</span>
          </h2>
          <p className="section-sub">
            Combining deep GoHighLevel platform mastery with Computer Software Engineering capabilities to deliver robust, scalable, and custom-coded CRM architectures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="skills-categories">
          {skillsMatrix.map((cat, idx) => {
            const Icon = ICON_MAP[cat.icon] || Layers;
            const active = idx === activeCategoryIndex;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`skills-category-btn ${active ? 'skills-category-btn--active' : ''}`}
              >
                <Icon size={16} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Card */}
        <div className="skills-grid glass-panel">
          {skillsMatrix[activeCategoryIndex].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <div className="skill-item__head">
                <div className="skill-item__title-group">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="skill-item__name">{skill.name}</span>
                </div>
                <span className="skill-item__percent">{skill.level}%</span>
              </div>

              {/* Progress Track */}
              <div className="skill-track">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Badges Bar */}
        <div className="skills-badges-bar">
          <div className="skills-badge-item">
            <span className="skills-badge-item__dot" />
            <strong>Clean Logic:</strong> Zero Infinite Loops & Race Conditions
          </div>
          <div className="skills-badge-item">
            <span className="skills-badge-item__dot" />
            <strong>Custom Webhooks:</strong> Make.com, Zapier & REST API
          </div>
          <div className="skills-badge-item">
            <span className="skills-badge-item__dot" />
            <strong>Frontend Code:</strong> Custom CSS & JavaScript Funnel Injections
          </div>
        </div>
      </div>
    </section>
  );
}

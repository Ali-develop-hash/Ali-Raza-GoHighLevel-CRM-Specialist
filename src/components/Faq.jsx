import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { faqItems } from '../data/content';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section faq" id="faq">
      {/* Background glow */}
      <div className="glow-orb" style={{ bottom: '15%', left: '12%', width: '380px', height: '380px', background: 'rgba(0, 229, 255, 0.05)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--cyan">
            <HelpCircle size={14} /> Frequently Asked Questions
          </span>
          <h2 className="section-title">
            Answers for <span className="text-gradient">Hiring Managers & Clients</span>
          </h2>
          <p className="section-sub">
            Everything you need to know about working with Ali Raza on your GoHighLevel infrastructure.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item glass-panel ${isOpen ? 'faq-item--open' : ''}`}
                onClick={() => toggle(idx)}
              >
                <div className="faq-item__question">
                  <div className="faq-item__title-group">
                    <span className="faq-item__num">0{idx + 1}</span>
                    <h3 className="faq-item__title">{item.q}</h3>
                  </div>
                  <button
                    type="button"
                    className="faq-item__toggle"
                    aria-label="Toggle answer"
                  >
                    <ChevronDown
                      size={18}
                      className={`faq-item__chevron ${isOpen ? 'faq-item__chevron--open' : ''}`}
                    />
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-item__answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="faq-item__answer">
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Banner */}
        <div className="faq-footer-banner glass-panel">
          <div className="faq-footer-banner__text">
            <h4>Have a specific custom requirement or snapshot inquiry?</h4>
            <p>I typically respond on WhatsApp in under 15 minutes.</p>
          </div>
          <a
            href="https://wa.me/923326607846?text=Hi%20Ali,%20I%20have%20a%20question%20about%20your%20GHL%20services."
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <MessageSquare size={16} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

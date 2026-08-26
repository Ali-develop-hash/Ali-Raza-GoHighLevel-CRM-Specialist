import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Menu, ArrowRight } from 'lucide-react';
import './Nav.css';

const LINKS = [
  { href: '#simulator', label: 'Simulator' },
  { href: '#roi-calculator', label: 'ROI Calc' },
  { href: '#work', label: 'Case Studies' },
  { href: '#skills', label: 'Tech Stack' },
  { href: '#why-hire', label: 'Why Ali' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Scroll Progress Bar */}
      <div
        className="nav__progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="nav__inner container">
        <a href="#top" className="nav__mark" onClick={() => setOpen(false)}>
          <span className="nav__node" />
          <span className="nav__name">Ali Raza</span>
          <span className="nav__title-tag">GHL Specialist</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link-item">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/923326607846?text=Hi%20Ali,%20I%20would%20like%20to%20book%20a%20GHL%20audit."
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm nav__cta"
        >
          <MessageSquare size={14} />
          <span>Book Free Audit</span>
        </a>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="nav__mobile-drawer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="nav__mobile-links">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="nav__mobile-link"
                    onClick={() => setOpen(false)}
                  >
                    <span>{l.label}</span>
                    <ArrowRight size={14} className="text-dim" />
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/923326607846?text=Hi%20Ali,%20I%20saw%20your%20portfolio%20and%20want%20to%20chat%20about%20a%20GHL%20project."
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary nav__mobile-cta"
                onClick={() => setOpen(false)}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

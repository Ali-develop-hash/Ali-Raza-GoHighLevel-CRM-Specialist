import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__mark">
            <span className="footer__node" />
            <strong>Ali Raza</strong>
          </a>
          <p className="footer__tagline">
            GoHighLevel CRM Specialist & Frontend Funnel Engineer.
          </p>
        </div>

        <div className="footer__links">
          <a href="#simulator">Workflow Simulator</a>
          <a href="#roi-calculator">ROI Calculator</a>
          <a href="#work">Case Studies</a>
          <a href="#skills">Tech Stack</a>
          <a href="#faq">FAQ</a>
          <a href="https://wa.me/923326607846" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="footer__back-top"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={16} />
          <span>Top</span>
        </button>
      </div>

      <div className="container footer__bottom">
        <span>&copy; {new Date().getFullYear()} Ali Raza. All rights reserved.</span>
        <span className="footer__dim">
          Engineered for maximum lead conversion with 3D WebGL & GoHighLevel logic.
        </span>
      </div>
    </footer>
  );
}

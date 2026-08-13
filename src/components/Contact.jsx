import { Mail, Briefcase, Link2 } from 'lucide-react';
import './Contact.css';

const LINKS = [
  { href: 'https://www.linkedin.com/in/ali-raza-0228091b7/', label: 'LinkedIn', icon: Link2 },
  { href: 'https://github.com/Ali-develop-hash', label: 'GitHub', icon: Briefcase },
  { href: 'mailto:aaliraza2010@gmail.com', label: 'Email', icon: Mail },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <span className="eyebrow">Get Started</span>
        <h2 className="contact__title">
          Let's stop losing leads to<br />slow follow-up.
        </h2>
        <p className="contact__sub">
          Book a free 20 minute audit &mdash; I'll look at your current lead flow
          and show you exactly where GoHighLevel can plug the gaps.
        </p>

        <a href="https://wa.me/923326607846" className="btn btn-primary contact__cta">Book a Free GHL Audit Call</a>

        <div className="contact__links">
          {LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                <Icon size={16} strokeWidth={1.75} />
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

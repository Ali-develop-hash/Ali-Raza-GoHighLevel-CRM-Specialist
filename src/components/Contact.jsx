import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import './Contact.css';

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    businessType: 'Agency / SaaS',
    primaryGoal: 'Sub-60s Missed Call & AI Booking',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('aaliraza2010@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setSubmitted(true);

    // Pre-fill WhatsApp message URL
    const text = encodeURIComponent(
      `Hi Ali, I am ${formData.name} (${formData.businessType}). Goal: ${formData.primaryGoal}. Details: ${formData.message || 'Looking for GHL specialist support.'}`
    );
    const waUrl = `https://wa.me/923326607846?text=${text}`;

    // Open WhatsApp after short delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section className="section contact" id="contact">
      {/* Background glow */}
      <div className="glow-orb" style={{ bottom: '10%', right: '5%', width: '450px', height: '450px', background: 'rgba(46, 217, 168, 0.08)' }} />
      <div className="glow-orb" style={{ top: '20%', left: '5%', width: '400px', height: '400px', background: 'rgba(0, 229, 255, 0.05)' }} />

      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Outreach & Booking */}
          <div className="contact-info">
            <span className="eyebrow">
              <Sparkles size={14} /> Get In Touch
            </span>
            <h2 className="contact-title">
              Let's build your <span className="text-gradient">high-converting GHL engine</span>.
            </h2>
            <p className="contact-sub">
              Whether you need a full-time GHL specialist for your agency, a custom snapshot built from scratch, or an automated speed-to-lead system—let's connect.
            </p>

            {/* Response Time Guarantee Pill */}
            <div className="contact-guarantee glass-panel">
              <div className="contact-guarantee__dot" />
              <div>
                <strong>Rapid Response Guarantee</strong>
                <span>Direct WhatsApp messages answered in &lt; 15 minutes.</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="contact-channels">
              <a
                href="https://wa.me/923326607846?text=Hi%20Ali,%20I%20saw%20your%20GHL%20portfolio%20and%20would%20like%20to%20chat."
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary contact-channels__wa"
              >
                <MessageSquare size={18} />
                <span>Message on WhatsApp (+92 332 6607846)</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-ghost contact-channels__copy"
              >
                {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied to Clipboard!' : 'aaliraza2010@gmail.com'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/ali-raza-0228091b7/"
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/Ali-develop-hash"
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:aaliraza2010@gmail.com"
                className="contact-social-btn"
                aria-label="Send Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Audit Terminal Form */}
          <div className="contact-form-wrap glass-panel">
            <div className="contact-form__head">
              <h3 className="contact-form__title">Quick Project Inquiry</h3>
              <p className="contact-form__sub">Fill in your requirements for an immediate GHL plan & proposal.</p>
            </div>

            {submitted ? (
              <motion.div
                className="contact-form__success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="contact-form__success-icon">
                  <CheckCircle2 size={40} className="text-accent" />
                </div>
                <h4>Inquiry Form Ready!</h4>
                <p>Opening WhatsApp to send your details directly to Ali for immediate response...</p>
                <a
                  href="https://wa.me/923326607846"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Click Here if WhatsApp didn't open <ArrowRight size={14} />
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name / Agency</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe / Apex Agency"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email or Phone / WhatsApp</label>
                  <input
                    id="contact-email"
                    type="text"
                    required
                    placeholder="e.g. john@apexagency.com or +1 555..."
                    className="form-input"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-business">Business Type</label>
                    <select
                      id="contact-business"
                      className="form-select"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    >
                      <option value="Marketing Agency">Marketing Agency</option>
                      <option value="SaaS Company">SaaS Company</option>
                      <option value="Real Estate Brokerage">Real Estate Brokerage</option>
                      <option value="Legal / Law Practice">Legal / Law Practice</option>
                      <option value="Home Services">Home Services</option>
                      <option value="Full-Time Hiring Team">Full-Time Hiring Team</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-goal">Primary Goal</label>
                    <select
                      id="contact-goal"
                      className="form-select"
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    >
                      <option value="Sub-60s Missed Call & AI Booking">Sub-60s Missed Call & AI Booking</option>
                      <option value="Custom Snapshot Architecture">Custom Snapshot Architecture</option>
                      <option value="Full-Time GHL Specialist Hire">Full-Time GHL Specialist Hire</option>
                      <option value="Complex Webhooks & Custom Code">Complex Webhooks & Custom Code</option>
                      <option value="General GHL Audit & Fixes">General GHL Audit & Fixes</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-msg">Project Details (Optional)</label>
                  <textarea
                    id="contact-msg"
                    rows="3"
                    placeholder="Briefly describe what you'd like to automate or achieve..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  <Send size={16} />
                  <span>Send Inquiry & Open WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

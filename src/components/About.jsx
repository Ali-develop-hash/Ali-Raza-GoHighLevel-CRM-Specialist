import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">About</span>
          <h2 className="about__title">
            Systems thinking meets<br />hands on GHL execution.
          </h2>
        </motion.div>

        <motion.div
          className="about__body"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p>
            I'm a GoHighLevel specialist with 1.5+ years of hands on experience
            across sales, support, marketing, and automation inside the platform.
            Before GHL, I earned a Software Engineering degree, so I don't just
            drag and drop workflows; I understand the logic underneath them.
          </p>
          <p>
            That background also means I can go beyond the no code layer: I write
            HTML, CSS, JavaScript and React, so when a funnel or website needs
            something GHL's builder can't do out of the box, I can build it at
            the code level.
          </p>
          <p>
            Right now I split my time between live client work and refining
            portfolio builds; always with the same goal: fewer leads falling
            through the cracks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

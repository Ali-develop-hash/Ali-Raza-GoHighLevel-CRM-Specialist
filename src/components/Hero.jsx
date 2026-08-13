import Lattice3D from './Lattice3D';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <Lattice3D />

      <div className="container hero__inner">
        <span className="eyebrow">GoHighLevel CRM Specialist</span>
        <h1 className="hero__title">
          I build automated<br />
          lead systems with <span className="hero__accent">GoHighLevel</span>
        </h1>
        <p className="hero__sub">
          Helping home service, real estate, and legal businesses capture every lead,
          automate the follow up, and stop losing money to missed calls.
        </p>

        <div className="hero__actions">
          <a href="https://wa.me/923326607846" className="btn btn-primary">Book a Free GHL Audit Call</a>
          <a href="#work" className="btn btn-ghost">See My Work</a>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <strong>1.5+ yrs</strong>
            <span>GHL experience</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <strong>3</strong>
            <span>full CRM builds</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <strong>Live</strong>
            <span>Client project</span>
          </div>
        </div>
      </div>
    </section>
  );
}

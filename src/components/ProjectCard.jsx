import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Sparkles
} from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, reversed }) {
  const cardRef = useRef(null);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('solution'); // 'solution' | 'architecture'

  const screenshots = project.screenshots || [];
  const isLive = project.category === 'live' || project.badge === 'Live Client' || project.badge === 'Live Client Deployment';

  /* Tilt effect */
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: py * -5,
      y: px * 7,
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  /* Image navigation */
  const nextImage = (e) => {
    e?.stopPropagation();
    if (!screenshots.length) return;
    setActiveImage((current) => (current === screenshots.length - 1 ? 0 : current + 1));
  };

  const previousImage = (e) => {
    e?.stopPropagation();
    if (!screenshots.length) return;
    setActiveImage((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  };

  /* Lightbox controls */
  const openLightbox = () => {
    if (!screenshots.length) return;
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  /* Keyboard Controls */
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
      if (e.key === 'ArrowRight') {
        setActiveImage((current) => (current === screenshots.length - 1 ? 0 : current + 1));
      }
      if (e.key === 'ArrowLeft') {
        setActiveImage((current) => (current === 0 ? screenshots.length - 1 : current - 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, screenshots.length]);

  return (
    <>
      <article className={`project-card glass-panel ${reversed ? 'project-card--reversed' : ''}`}>
        {/* Visual / Screenshot Gallery Side */}
        <div
          ref={cardRef}
          className="project-card__visual"
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* Badge */}
          <div className={`project-card__badge ${isLive ? 'project-card__badge--live' : ''}`}>
            {isLive && <span className="badge-pulse-dot" />}
            <span>{project.badge}</span>
          </div>

          {/* Main Screenshot Container */}
          <div className="project-card__main-image" onClick={openLightbox}>
            {screenshots.length > 0 ? (
              <img
                src={screenshots[activeImage]}
                alt={`${project.name} GHL Workflow Screenshot ${activeImage + 1}`}
                loading="lazy"
              />
            ) : (
              <div className="project-card__empty">No Screenshots Available</div>
            )}

            {/* Hover overlay hint */}
            <div className="project-card__image-overlay">
              <Maximize2 size={20} />
              <span>Click to view full-resolution ({activeImage + 1}/{screenshots.length})</span>
            </div>

            {/* Navigation arrows */}
            {screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage(e);
                  }}
                  className="project-card__arrow project-card__arrow--left"
                  aria-label="Previous Screenshot"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage(e);
                  }}
                  className="project-card__arrow project-card__arrow--right"
                  aria-label="Next Screenshot"
                >
                  <ArrowRight size={16} />
                </button>
              </>
            )}

            <div className="project-card__counter">
              {activeImage + 1} / {screenshots.length}
            </div>
          </div>

          {/* Thumbnails Strip */}
          {screenshots.length > 1 && (
            <div className="project-card__thumbnails">
              {screenshots.map((shot, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`project-card__thumbnail ${idx === activeImage ? 'project-card__thumbnail--active' : ''}`}
                >
                  <img src={shot} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="project-card__content">
          <div className="project-card__meta">
            <span className="project-card__client-type">{project.clientType || project.location}</span>
            <span className="project-card__meta-dot">•</span>
            <span className="project-card__location">{project.location}</span>
          </div>

          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__tagline">{project.tagline}</p>

          {/* Metric Highlight Box */}
          {project.metricHighlight && (
            <div className="project-card__metric-badge">
              <TrendingUp size={15} className="text-accent" />
              <span>{project.metricHighlight}</span>
            </div>
          )}

          {/* Tab Switcher: Solution vs Architecture */}
          <div className="project-card__tabs">
            <button
              onClick={() => setActiveTab('solution')}
              className={`project-card__tab ${activeTab === 'solution' ? 'project-card__tab--active' : ''}`}
            >
              <CheckCircle2 size={14} />
              <span>System Deliverables</span>
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`project-card__tab ${activeTab === 'architecture' ? 'project-card__tab--active' : ''}`}
            >
              <Cpu size={14} />
              <span>Architecture Logic</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="project-card__tab-content">
            {activeTab === 'solution' ? (
              <div className="project-card__section">
                <p className="project-card__problem">{project.problem}</p>
                <ul className="project-card__solution-list">
                  {project.solution.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} className="text-accent list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="project-card__section">
                <ul className="project-card__solution-list">
                  {(project.architecture || project.solution).map((item, idx) => (
                    <li key={idx}>
                      <Cpu size={14} className="text-cyan list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Result Block */}
          <div className="project-card__result">
            <div className="project-card__result-label">
              <Sparkles size={13} className="text-accent" />
              <strong>Measurable Result:</strong>
            </div>
            <p>{project.result}</p>
          </div>

          {/* Tags */}
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </article>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="project-lightbox" onClick={closeLightbox}>
          <div className="project-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <div className="project-lightbox__header">
              <div>
                <span>{project.badge} • {project.name}</span>
                <h3>{project.tagline}</h3>
              </div>
              <div className="project-lightbox__counter">
                Screenshot {activeImage + 1} of {screenshots.length}
              </div>
            </div>

            <button
              type="button"
              className="project-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <div className="project-lightbox__image-wrap">
              <img
                src={screenshots[activeImage]}
                alt={`${project.name} Screenshot ${activeImage + 1}`}
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      previousImage(e);
                    }}
                    className="project-lightbox__arrow project-lightbox__arrow--left"
                    aria-label="Previous"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(e);
                    }}
                    className="project-lightbox__arrow project-lightbox__arrow--right"
                    aria-label="Next"
                  >
                    <ArrowRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Thumbnails */}
            {screenshots.length > 1 && (
              <div className="project-lightbox__thumbnails">
                {screenshots.map((shot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`project-lightbox__thumbnail ${idx === activeImage ? 'project-lightbox__thumbnail--active' : ''}`}
                  >
                    <img src={shot} alt={`Thumb ${idx + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            <div className="project-lightbox__hint">
              Use ← / → keys on your keyboard to navigate • Esc to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
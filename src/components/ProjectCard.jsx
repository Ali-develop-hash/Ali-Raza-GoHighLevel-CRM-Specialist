import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ImageIcon,
  Maximize2,
  X,
} from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, reversed }) {
  const cardRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screenshots = project.screenshots || [];

  const isLive = project.badge === 'Live Client';

  /* =========================================================
     TILT EFFECT
  ========================================================= */

  const handleMove = (e) => {
    const el = cardRef.current;

    if (!el) return;

    const rect = el.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: py * -6,
      y: px * 8,
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  /* =========================================================
     IMAGE NAVIGATION
  ========================================================= */

  const nextImage = () => {
    if (!screenshots.length) return;

    setActiveImage((current) =>
      current === screenshots.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    if (!screenshots.length) return;

    setActiveImage((current) =>
      current === 0 ? screenshots.length - 1 : current - 1
    );
  };

  /* =========================================================
     LIGHTBOX
  ========================================================= */

  const openLightbox = () => {
    if (!screenshots.length) return;

    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  /* =========================================================
     KEYBOARD CONTROLS
  ========================================================= */

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }

      if (e.key === 'ArrowRight') {
        setActiveImage((current) =>
          current === screenshots.length - 1 ? 0 : current + 1
        );
      }

      if (e.key === 'ArrowLeft') {
        setActiveImage((current) =>
          current === 0 ? screenshots.length - 1 : current - 1
        );
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
      {/* =====================================================
          PROJECT CARD
      ===================================================== */}

      <article
        className={`project-card ${
          reversed ? 'project-card--reversed' : ''
        }`}
      >
        {/* ===================================================
            PROJECT VISUAL
        =================================================== */}

        <div
          ref={cardRef}
          className="project-card__visual"
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          style={{
            transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
        >
          {/* BADGE */}

          <div
            className={`project-card__badge ${
              isLive ? 'project-card__badge--live' : ''
            }`}
          >
            {project.badge}
          </div>

          {screenshots.length > 0 ? (
            <>
              {/* =================================================
                  MAIN SCREENSHOT
              ================================================= */}

              <div
                className="project-card__screenshot project-card__screenshot--gallery"
                onClick={openLightbox}
              >
                <img
                  src={screenshots[activeImage]}
                  alt={`${project.name} screenshot ${
                    activeImage + 1
                  }`}
                />

                {/* FULLSCREEN LABEL */}

                <div className="project-card__fullscreen">
                  <Maximize2 size={18} />

                  <span>View fullscreen</span>
                </div>

                {/* COUNTER */}

                <div className="project-card__counter">
                  {activeImage + 1} / {screenshots.length}
                </div>

                {/* PREVIOUS */}

                {screenshots.length > 1 && (
                  <button
                    type="button"
                    className="project-card__gallery-arrow project-card__gallery-arrow--left"
                    onClick={(e) => {
                      e.stopPropagation();

                      previousImage();
                    }}
                    aria-label="Previous screenshot"
                  >
                    <ArrowLeft size={18} />
                  </button>
                )}

                {/* NEXT */}

                {screenshots.length > 1 && (
                  <button
                    type="button"
                    className="project-card__gallery-arrow project-card__gallery-arrow--right"
                    onClick={(e) => {
                      e.stopPropagation();

                      nextImage();
                    }}
                    aria-label="Next screenshot"
                  >
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>

              {/* =================================================
                  THUMBNAILS
              ================================================= */}

              {screenshots.length > 1 && (
                <div className="project-card__thumbnails">
                  {screenshots.map((image, index) => (
                    <button
                      type="button"
                      key={`${project.id}-image-${index}`}
                      className={`project-card__thumbnail ${
                        index === activeImage
                          ? 'project-card__thumbnail--active'
                          : ''
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.name} thumbnail ${
                          index + 1
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* GALLERY COUNT */}

              <div className="project-card__gallery-count">
                <ImageIcon size={13} />

                {screenshots.length} screenshots
              </div>
            </>
          ) : (
            /* =================================================
               FALLBACK
            ================================================= */

            <div
              className="project-card__screenshot"
              role="img"
              aria-label={`${project.name} screenshot placeholder`}
            >
              <ImageIcon
                size={26}
                strokeWidth={1.5}
              />

              <span>
                Add screenshot: {project.name} pipeline /
                workflow view
              </span>
            </div>
          )}
        </div>

        {/* =====================================================
            PROJECT CONTENT
        ===================================================== */}

        <div className="project-card__content">
          <span className="project-card__location">
            {project.location}
          </span>

          <h3>{project.name}</h3>

          <p className="project-card__tagline">
            {project.tagline}
          </p>

          <p className="project-card__problem">
            {project.problem}
          </p>

          {/* BREAKDOWN BUTTON */}

          <button
            type="button"
            className="project-card__toggle"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Hide breakdown' : 'View breakdown'}

            <ArrowUpRight
              size={15}
              style={{
                transform: open
                  ? 'rotate(135deg)'
                  : 'none',

                transition:
                  'transform 0.25s ease',
              }}
            />
          </button>

          {/* BREAKDOWN */}

          {open && (
            <div className="project-card__breakdown">
              <ul>
                {project.solution.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <p className="project-card__result">
                {project.result}
              </p>
            </div>
          )}

          {/* TAGS */}

          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </article>

      {/* =====================================================
          FULLSCREEN LIGHTBOX
      ===================================================== */}

      {lightboxOpen && screenshots.length > 0 && (
        <div
          className="project-lightbox"
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="project-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          {/* LIGHTBOX CONTENT */}

          <div
            className="project-lightbox__inner"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}

            <div className="project-lightbox__header">
              <div>
                <span>{project.location}</span>

                <h3>{project.name}</h3>
              </div>

              <strong>
                {activeImage + 1} / {screenshots.length}
              </strong>
            </div>

            {/* =================================================
                FULLSCREEN IMAGE
            ================================================= */}

            <div className="project-lightbox__image">
              <img
                src={screenshots[activeImage]}
                alt={`${project.name} screenshot ${
                  activeImage + 1
                }`}
              />

              {/* PREVIOUS */}

              {screenshots.length > 1 && (
                <button
                  type="button"
                  className="project-lightbox__arrow project-lightbox__arrow--left"
                  onClick={previousImage}
                  aria-label="Previous screenshot"
                >
                  <ArrowLeft size={24} />
                </button>
              )}

              {/* NEXT */}

              {screenshots.length > 1 && (
                <button
                  type="button"
                  className="project-lightbox__arrow project-lightbox__arrow--right"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                >
                  <ArrowRight size={24} />
                </button>
              )}
            </div>

            {/* =================================================
                LIGHTBOX THUMBNAILS
            ================================================= */}

            {screenshots.length > 1 && (
              <div className="project-lightbox__thumbnails">
                {screenshots.map((image, index) => (
                  <button
                    type="button"
                    key={`${project.id}-lightbox-${index}`}
                    className={
                      index === activeImage
                        ? 'project-lightbox__thumbnail project-lightbox__thumbnail--active'
                        : 'project-lightbox__thumbnail'
                    }
                    onClick={() =>
                      setActiveImage(index)
                    }
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${
                        index + 1
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* HINT */}

            <p className="project-lightbox__hint">
              ← → Navigate &nbsp; • &nbsp; ESC Close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
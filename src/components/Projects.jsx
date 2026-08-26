import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { projects } from '../data/content';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="section projects" id="work">
      {/* Ambient background glow */}
      <div className="glow-orb" style={{ top: '15%', left: '5%', width: '500px', height: '500px', background: 'rgba(46, 217, 168, 0.05)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-head section-head--center">
          <span className="eyebrow">
            <Briefcase size={14} /> Battle-Tested Case Studies
          </span>
          <h2 className="section-title">
            Enterprise GHL Builds & <span className="text-gradient">Live Deployments</span>
          </h2>
          <p className="section-sub">
            Real client systems and turnkey snapshots engineered for maximum lead capture, automated qualification, and zero lead leakage.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="projects-filter">
          <button
            onClick={() => setActiveFilter('all')}
            className={`filter-btn ${activeFilter === 'all' ? 'filter-btn--active' : ''}`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveFilter('live')}
            className={`filter-btn ${activeFilter === 'live' ? 'filter-btn--active' : ''}`}
          >
            Live Client Deployments (1)
          </button>
          <button
            onClick={() => setActiveFilter('real-estate')}
            className={`filter-btn ${activeFilter === 'real-estate' ? 'filter-btn--active' : ''}`}
          >
            Real Estate Engine (1)
          </button>
          <button
            onClick={() => setActiveFilter('legal')}
            className={`filter-btn ${activeFilter === 'legal' ? 'filter-btn--active' : ''}`}
          >
            Legal & Multi-Branch (1)
          </button>
        </div>

        {/* Projects List */}
        <div className="projects__list">
          {filteredProjects.map((p, i) => (
            <ProjectCard project={p} key={p.id} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

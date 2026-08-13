import { projects } from '../data/content';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="container">
        <div className="projects__head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="projects__title">CRM systems built to catch every lead</h2>
        </div>

        <div className="projects__list">
          {projects.map((p, i) => (
            <ProjectCard project={p} key={p.id} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

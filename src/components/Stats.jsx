import { stats } from '../data/content';
import './Stats.css';

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__row">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

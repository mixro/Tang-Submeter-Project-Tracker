import { phases, completedCount, totalPhases } from '../data/phases';
import { ProgressBar } from '../components/ProgressBar';
import { PhaseCard } from '../components/PhaseCard';

export function Home() {
  return (
    <div className="home-page fade-in">
      <section className="hero">
        <h1 className="hero-title">Digitalized Electrical Meter System</h1>
        <p className="hero-meta">
          Fullstack Developer: <strong>Joseph Chongola</strong>
        </p>
        <p className="hero-meta secondary">Written by Joseph Chongola</p>

        <ProgressBar completed={completedCount} total={totalPhases} />
      </section>

      <section className="phases-section">
        <h2 className="section-title">Project Phases</h2>
        <div className="phases-grid">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </section>
    </div>
  );
}

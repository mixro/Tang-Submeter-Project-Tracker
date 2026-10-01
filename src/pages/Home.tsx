import { phases, completedCount, totalPhases } from '../data/phases';
import { ProgressBar } from '../components/ProgressBar';
import { PhaseCard } from '../components/PhaseCard';
import { CheckCircleIcon, RadioButtonUncheckedIcon } from '../components/icons';

export function Home() {
  return (
    <div className="home-page fade-in">
      <section className="hero">
        <h1 className="hero-title">Digitalized Electrical Meter System</h1>

        <div className="hero-meta-row">
          <span>
            <strong>Developed by</strong> Joseph Chongola
          </span>
        </div>

        <div className="hero-meta-row secondary">
          <span>Started: September 2026</span>
          <span className="meta-divider">·</span>
          <span>Last updated: 2 Oct 2026</span>
        </div>

        <div className="current-phase-badge">
          Currently in <strong>Phase {completedCount} of {totalPhases}</strong> — Mobile
          Application &amp; Backend Development
        </div>

        <ProgressBar completed={completedCount} total={totalPhases} />

      </section>

      <section className="phases-section">
        <div className="section-header">
          <h2 className="section-title">PROJECT PHASES</h2>
          
        </div>

        <div className="phases-grid">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </section>
    </div>
  );
}

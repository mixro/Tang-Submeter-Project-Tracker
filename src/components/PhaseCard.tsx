import { Link } from 'react-router-dom';
import { CheckCircleIcon, RadioButtonUncheckedIcon, ArrowForwardIcon } from './icons';
import type { Phase } from '../data/phases';

interface PhaseCardProps {
  phase: Phase;
}

export function PhaseCard({ phase }: PhaseCardProps) {
  const isCompleted = phase.status === 'completed';

  return (
    <article className={`phase-card ${isCompleted ? 'completed' : 'pending'}`}>
      <div className="phase-card-header">
        <div className="phase-number">Phase {phase.id}</div>
        <div className={`phase-status ${phase.status}`}>
          {isCompleted ? (
            <CheckCircleIcon size={22} />
          ) : (
            <RadioButtonUncheckedIcon size={22} />
          )}
          <span>{isCompleted ? 'Completed' : 'Pending'}</span>
        </div>
      </div>

      <h3 className="phase-title">{phase.title}</h3>
      <p className="phase-desc">{phase.shortDescription}</p>

      <Link to={`/phase/${phase.id}`} className="phase-link">
        Read more
        <ArrowForwardIcon size={18} />
      </Link>
    </article>
  );
}

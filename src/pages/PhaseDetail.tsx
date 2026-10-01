import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircleIcon, RadioButtonUncheckedIcon, ArrowBackIcon } from '../components/icons';
import { phases } from '../data/phases';

export function PhaseDetail() {
  const { id } = useParams<{ id: string }>();
  const phaseId = Number(id);
  const phase = phases.find((p) => p.id === phaseId);

  if (!phase) {
    return <Navigate to="/home" replace />;
  }

  const isCompleted = phase.status === 'completed';

  return (
    <div className="phase-detail fade-in">
      <Link to="/home" className="back-link">
        <ArrowBackIcon size={20} />
        Back to Home
      </Link>

      <header className="detail-header">
        <div className="detail-meta">
          <span className="detail-phase-num">Phase {phase.id}</span>
          <div className={`phase-status ${phase.status}`}>
            {isCompleted ? (
              <CheckCircleIcon size={22} />
            ) : (
              <RadioButtonUncheckedIcon size={22} />
            )}
            <span>{isCompleted ? 'Completed' : 'Pending'}</span>
          </div>
        </div>
        <h1 className="detail-title">{phase.title}</h1>
      </header>

      <section className="detail-section">
        <h2>Overview</h2>
        <p className="detail-description">{phase.fullDescription}</p>
      </section>

      <section className="detail-section">
        <h2>Key Activities</h2>
        <ul className="activity-list">
          {phase.keyActivities.map((activity, index) => (
            <li key={index}>
              <span className="activity-bullet" />
              {activity}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

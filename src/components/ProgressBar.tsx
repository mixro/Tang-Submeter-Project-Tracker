interface ProgressBarProps {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percent = Math.round((completed / total) * 100);

  return (
    <div className="progress-section">
      <div className="progress-header">
        <span className="progress-label">
          Phase {completed} of {total} completed
        </span>
        <span className="progress-percent">{percent}%</span>
      </div>
      <div className="progress-track" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

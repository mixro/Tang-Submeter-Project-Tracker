import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlinedIcon, VisibilityIcon, VisibilityOffIcon } from '../components/icons';
import { useAuth } from '../context/AuthContext';
import { ThemeToggle } from '../components/ThemeToggle';

export function Login() {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(passcode);

    if (success) {
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 300);
    } else {
      setLoading(false);
      setError('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  return (
    <div className="login-page">
      <div className="login-theme-toggle">
        <ThemeToggle />
      </div>

      <div className="login-card">
        <div className="login-logo-wrap">
          <img
            src="/tangtech-logo.png"
            alt="Tang Tech & Engineering Ltd"
            className="login-logo-img"
          />
        </div>

        <h1 className="login-title">Digitalized Electrical Meter System</h1>
        <p className="login-subtitle">Project Progress Tracker</p>

        <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="input-group">
            <label htmlFor="passcode" className="sr-only">
              Passcode
            </label>
            <div className="input-wrapper">
              <LockOutlinedIcon size={20} className="input-icon" />
              <input
                id="passcode"
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Enter passcode"
                disabled={loading}
                autoFocus
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide passcode' : 'Show passcode'}
                tabIndex={-1}
              >
                {showPassword ? (
                  <VisibilityOffIcon size={20} />
                ) : (
                  <VisibilityIcon size={20} />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading || !passcode.trim()}
          >
            {loading ? (
              <span className="button-spinner" aria-hidden="true" />
            ) : (
              'Enter'
            )}
          </button>
        </form>
      </div>

      <p className="login-footer">
        © 2026 Tang Tech &amp; Engineering Ltd · Internal use only
      </p>
    </div>
  );
}

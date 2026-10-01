import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlinedIcon } from '../components/icons';
import { Logo } from '../components/Logo';
import { useAuth } from '../context/AuthContext';
import { ThemeToggle } from '../components/ThemeToggle';

export function Login() {
  const [passcode, setPasscode] = useState('');
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
          <Logo size={88} className="login-logo" />
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
                type="password"
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
        © 2026 Tang Tech &amp; Engineering Ltd
      </p>
    </div>
  );
}

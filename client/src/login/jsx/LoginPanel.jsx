import React, {useState, useEffect, useContext} from 'react';
import login from '../api/login';
import { t } from '../../admin/hocs';

const LoginPanel = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(email) && password.length > 5
      ? setActive(true)
      : setActive(false);
  }, [email, password])

  const submit = (e) => {
    e.preventDefault();
    active && login({email, password});
  }

  return (
    <div className="login-panel">
      <p className="login-panel__header">
        {t('login-to-admin')}
      </p>
      <form className="login-panel__form" onSubmit={submit}>
        <div className="text-input">
          <input
            onChange={e => setEmail(e.target.value)}
            placeholder={t('email')}
            id="admin-email"
            name="admin-email"
            type="text"
            className="text-input-field"
            value={email}
          />
          <label htmlFor="admin-user-name" className="text-input-label">{t('email')}</label>
        </div>
        <div className="text-input">
          <input
            onChange={e => setPassword(e.target.value)}
            placeholder={t('password')}
            id="admin-password"
            name="admin-password"
            type="password"
            className="text-input-field"
            value={password}
          />
          <label htmlFor="admin-password" className="text-input-label">
            {t('password')}
          </label>
        </div>
        <div>
          <input
            type="submit"
            className={`login-panel__button${active ? ' active' : ''}`}
            value={t('login')}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPanel;

import React, {useState, useEffect} from 'react';

const LoginPanel = ({setUser, t}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (username.length > 4 && password.length > 4) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [username, password])

  const usernameValidation = (e) => {
    const value = e.target.value;
    const regex = /^[0-9a-zA-Z]+$/;

    if ((value.length < 20 && value.match(regex)) || value === "") {
      setUsername(value);
    }
  };

  const passwordValidation = (e) => {
    e.target.value.length < 20 && setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setUser('admin');
    }
  }

  return (
    <div className="login-panel">
      <form className="login-panel__form" onSubmit={submit}>
        <p className="login-panel__header">
          {t('login-to-admin')}
        </p>
        <div className="text-input">
          <input
            onChange={usernameValidation}
            placeholder={t('user')}
            id="admin-user-name"
            name="admin-user-name"
            type="text"
            className="text-input-field"
            value={username}
          />
          <label htmlFor="admin-user-name" className="text-input-label">{t('user')}</label>
        </div>
        <div className="text-input">
          <input
            onChange={passwordValidation}
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

import React from 'react';
import WithHover from './WithHover.jsx';

const User = ({user, setUser, setHover, t, opened, setOpened}) => {
  const handleLogout = () => {
    setOpened(false);
    setUser(null);
  };
  const handleChangePass = () => { setOpened(false) };
  const handleRemoveUser = () => { setOpened(false) };

  return (
    <div className="user">
      <WithHover setHover={setHover} message="click-to-change-user">
        <span
          className={`user__main-item${opened === 'user' ? ' user__main-item--active' : ''}`}
          onClick={() => setOpened(opened !== 'user' ? 'user' : false)}
        >
          {user}
        </span>
        {
          opened === 'user' && (
            <div className="user__list" >
              <WithHover setHover={setHover} message="click-to-logout">
                <span className="user__item" onClick={handleLogout}>{t('logout')}</span>
              </WithHover>
              <WithHover setHover={setHover} message="click-to-change-user-settings">
                <span className="user__item" onClick={handleChangePass}>{t('user-settings')}</span>
              </WithHover>
            </div>
          )
        }
      </WithHover>
    </div>
  );
};

export default User;

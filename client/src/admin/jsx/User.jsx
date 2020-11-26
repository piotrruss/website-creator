import React from 'react';
import { WithHover, t } from '../hocs';
import { logout } from '../api';

const User = ({ user, setUser, opened, setOpened }) => {
  const handleLogout = () => {
    setOpened(false);
    logout();
  };
  const handleChangePass = () => { setOpened(false) };
  const handleRemoveUser = () => { setOpened(false) };

  return (
    <div className="user">
      <WithHover message="click-to-change-user">
        <span
          className={`user__main-item${opened === 'user' ? ' user__main-item--active' : ''}`}
          onClick={() => setOpened(opened !== 'user' ? 'user' : false)}
        >
          {user.email}
        </span>
        {
          opened === 'user' && (
            <div className="user__list" >
              <WithHover message="click-to-logout">
                <span className="user__item" onClick={handleLogout}>{t('logout')}</span>
              </WithHover>
              <WithHover message="click-to-change-user-settings">
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

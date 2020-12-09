import React, { Fragment } from 'react';
import { WithHover, t, goTo } from '../hocs';
import { onKeyPress } from '../helpers'

const MainScreen = ({ projects }) => (
  <div className="main-screen">
    <h1 className="main-screen__header">{ t('main-title') }</h1>
    <div className="main-screen__list">
      { !projects.length && (
        <WithHover message="edit-current-project-hover">
          <p
            className="main-screen__item"
            tabIndex="0"
          >
            { t('edit-current-project') }
          </p>
        </WithHover>
      )}
      { !projects.length && (
        <WithHover message="show-saved-projects-hover">
          <p
            className="main-screen__item"
            tabIndex="0"
          >
            { t('show-saved-projects') }
          </p>
        </WithHover>
      )}
      <WithHover message="create-new-project-hover">
        <p
          className="main-screen__item"
          onClick={ goTo('creator') }
          onKeyPress={onKeyPress}
          tabIndex="0"
        >
          { t('create-new-project') }
        </p>
      </WithHover>
    </div>
  </div>
);

export default MainScreen;

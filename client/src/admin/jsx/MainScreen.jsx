import React, { Fragment } from 'react';
import WithHover from '../../common/jsx/WithHover.jsx';

const MainScreen = ({ projects, t, setHover }) => (
  <div className="main-screen">
    <h1 className="main-screen__header">{ t('main-title') }</h1>
    <div className="main-screen__list">
      { !projects.length && (
        <WithHover setHover={setHover} message="edit-current-project-hover">
          <p className="main-screen__item">{ t('edit-current-project') }</p>
        </WithHover>
      )}
      { !projects.length && (
        <WithHover setHover={setHover} message="show-saved-projects-hover">
          <p className="main-screen__item">{ t('show-saved-projects') }</p>
        </WithHover>
      )}
      <WithHover setHover={setHover} message="create-new-project-hover">
        <p className="main-screen__item">{ t('create-new-project') }</p>
      </WithHover>
    </div>
  </div>
);

export default MainScreen;

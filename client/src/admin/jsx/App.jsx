import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import "../scss/index.scss";

import texts from '../../common/data/texts.js';
import TopBar from '../../common/jsx/TopBar.jsx';
import Info from '../../common/jsx/Info.jsx';
import MainScreen from './MainScreen.jsx';

const App = () => {
  const [adminLang, setAdminLang] = useState('en');
  const [projects, setProjects] = useState([]);
  const [info, setInfo] = useState('');
  const [hover, setHover] = useState('');
  const [view, setView] = useState('main');
  const [user, setUser] = useState(null);
  const t = (key) => texts[adminLang][key] || texts['en'][key];

  // useEffect(() => {
  //   setInfo('no-saved-websites')
  //   setHover('');
  // }, [user]);

  return (
    <div className="main">
      <TopBar lang={adminLang} setLang={setAdminLang} setHover={setHover} user={user} setUser={setUser} t={t} />
      <div className="main__content">
        { view === 'main' && <MainScreen projects={projects} t={t} setHover={setHover} /> }
      </div>
      <Info info={info} hover={hover} t={t} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));

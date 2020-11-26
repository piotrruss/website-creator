import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import "../scss/index.scss";

import TopBar from './TopBar.jsx';
import Info from './Info.jsx';
import MainScreen from './MainScreen.jsx';
import Context from '../context';
import { defaultLanguage } from '../data/translations';
import { getUser } from '../api';

const App = () => {
  const [lang, setLang] = useState(defaultLanguage);
  const [projects, setProjects] = useState([]);
  const [info, setInfo] = useState('');
  const [hover, setHover] = useState('');
  const [view, setView] = useState('main');
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(setUser);
    setInfo('no-saved-websites');
  }, []);

  useEffect(() => {
    user && setLang(user.language);
  }, [user]);

  return (
    <Context.Provider value={{ lang, setHover, setInfo }}>
      <div className="main">
        <TopBar lang={lang} setLang={setLang} user={user} setUser={setUser} />
        <div className="main__content">
          { view === 'main' && <MainScreen projects={projects} /> }
        </div>
        <Info info={info} hover={hover} />
      </div>
    </Context.Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));

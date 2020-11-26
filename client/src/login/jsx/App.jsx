import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import "../scss/index.scss";

import TopBar from '../../admin/jsx/TopBar.jsx';
import Info from '../../admin/jsx/Info.jsx';
import LoginPanel from './LoginPanel.jsx';
import Context from '../../admin/context';
import { defaultLanguage } from '../../admin/data/translations';

const App = () => {
  const [lang, setLang] = useState(defaultLanguage);
  const [info, setInfo] = useState('login-info');
  const [hover, setHover] = useState('');

  const setLangHelper = (key) => {
    setLang(key);
    localStorage.setItem('language', key);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLang(savedLang);
    }
  }, [])

  return (
    <Context.Provider value={{ lang, setHover, setInfo }}>
      <div className="main">
        <TopBar
          lang={lang}
          setLang={setLangHelper}
        />
        <LoginPanel/>
        <Info
          info={info}
          hover={hover}
        />
      </div>
    </Context.Provider>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));

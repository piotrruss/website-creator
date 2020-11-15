import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import "../scss/index.scss";

import texts from '../../common/data/texts.js';
import TopBar from '../../common/jsx/TopBar.jsx';
import Info from '../../common/jsx/Info.jsx';
import LoginPanel from './LoginPanel.jsx';

const App = () => {
  const [lang, setLang] = useState('en');
  const [info, setInfo] = useState('login-info');
  const [hover, setHover] = useState('');
  const [user, setUser] = useState(null);
  const t = (key) => texts[lang][key] || texts['en'][key];

  return (
    <div className="main">
      <TopBar
        lang={lang}
        setLang={setLang}
        setHover={setHover}
        t={t}
      />
      <LoginPanel
        setUser={setUser}
        t={t}
      />
      <Info
        info={info}
        hover={hover}
        t={t}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));

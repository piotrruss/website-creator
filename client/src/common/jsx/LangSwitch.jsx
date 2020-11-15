import React from 'react';
import WithHover from './WithHover.jsx';
import texts from '../data/texts.js';

const LangSwitch = ({ lang, setLang, setHover, opened, setOpened}) => {

  const handleSetLang = (key) => {
    setLang(key);
    setOpened(false);
  };

  return (
    <div className="lang-switch">
      <WithHover setHover={setHover} message="click-to-change-language">
        <span
          className={`lang-switch__main-item${opened === 'lang' ? ' lang-switch__main-item--active' : ''}`}
          onClick={() => setOpened(opened !== 'lang' ? 'lang' : false)}
        >
          {lang}
        </span>
        {
          opened === 'lang' && (
            <div className="lang-switch__list">
              {
                Object.keys(texts).map(key => key !== lang && (
                  <span
                    className="lang-switch__item"
                    key={key}
                    onClick={() => handleSetLang(key)}
                  >
                    {key}
                  </span>
                ))
              }
            </div>
          )
        }
      </WithHover>
    </div>
  );
};

export default LangSwitch;

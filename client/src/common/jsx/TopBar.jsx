import React, {useState} from 'react';
import LangSwitch from './LangSwitch.jsx';
import User from './User.jsx';

const TopBar = ({user, setUser, setHover, lang, setLang, t={t}}) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="top-bar">
      { opened !== false && (
        <div
          className="top-bar__fog"
          onClick={() => setOpened(false)}
        />
      )}
      <LangSwitch
        lang={lang}
        setLang={setLang}
        setHover={setHover}
        opened={opened}
        setOpened={setOpened}
      />
        { user && (
          <User
            user={user}
            setUser={setUser}
            setHover={setHover}
            t={t}
            opened={opened}
            setOpened={setOpened}
          />
        )
      }
    </div>
  );
};

export default TopBar;

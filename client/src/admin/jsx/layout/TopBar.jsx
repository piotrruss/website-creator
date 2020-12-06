import React, {useState} from 'react';
import LangSwitch from './LangSwitch.jsx';
import UserSwitch from './UserSwitch.jsx';

const TopBar = ({ user, setUser, lang, setLang }) => {
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
        opened={opened}
        setOpened={setOpened}
      />
        { user && (
          <UserSwitch
            user={user}
            setUser={setUser}
            opened={opened}
            setOpened={setOpened}
          />
        )
      }
    </div>
  );
};

export default TopBar;

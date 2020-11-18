import React, {useContext} from 'react';
import Context from '../context';
import { translations, fallbackLanguage } from '../data/translations';

const WithTranslation = (key) => {
  const { lang } = useContext(Context);

  return translations[lang][key] || translations[fallbackLanguage][key];
};

export default WithTranslation;

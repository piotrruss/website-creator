import React, { useContext } from 'react';
import Context from '../context';

const View = (view) => {
  const { setView } = useContext(Context);
  return () => setView(view);
};

export default View;

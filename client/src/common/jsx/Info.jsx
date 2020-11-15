import React from 'react';

const Info = ({info, hover, t}) => (
  <p className="info">
    { hover ? t(hover) : t(info) }
  </p>
);

export default Info;

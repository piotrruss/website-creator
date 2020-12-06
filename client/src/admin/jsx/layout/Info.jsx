import React from 'react';
import { t } from '../../hocs';

const Info = ({ info, hover }) => (
  <p className="info">
    { hover ? t(hover) : t(info) }
  </p>
);

export default Info;

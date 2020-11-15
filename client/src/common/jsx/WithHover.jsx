import React from 'react';

const WithHover = ({ children, setHover, message, classes }) => (
  <div
    onMouseEnter={()=>setHover(message)}
    onMouseLeave={()=>setHover(null)}
    className={classes}
  >
    {children}
  </div>
);

export default WithHover;

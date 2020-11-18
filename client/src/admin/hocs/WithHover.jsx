import React, {useContext} from 'react';
import Context from '../context';


const WithHover = ({ children, message, classes }) => {
  const { setHover } = useContext(Context);
  return (
    <div
      onMouseEnter={()=>setHover(message)}
      onMouseLeave={()=>setHover(null)}
      className={classes}
    >
      {children}
    </div>
  )
};

export default WithHover;

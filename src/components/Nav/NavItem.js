import React, { useState } from 'react';

const NavItem = props => {
  const [ active, setActive ] = useState(false);
  return (
    <a
      onClick={() => setActive(!active)}
      href={props.href}
      className={active ? 'item active' : 'item'}
    >
      {props.content}
    </a>
  );
};

export default NavItem;

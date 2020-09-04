import React from 'react';

const NavItem = props => {
  return (
    <a href={props.href} className="item">
      {props.content}
    </a>
  );
};

export default NavItem;

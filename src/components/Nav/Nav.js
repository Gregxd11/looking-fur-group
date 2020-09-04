import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavItem from './NavItem';

class Nav extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <NavLink to="/" exact className="item">
          Home
        </NavLink>
        <NavLink to="/lfm" exact className="item">
          Looking for Members
        </NavLink>
        <NavLink to="/lfg" exact className="item">
          Looking for Group
        </NavLink>
        <div className="right menu">
          <NavItem href="/#" class="ui item" content="Logout" />
        </div>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from 'react';

import NavItem from './NavItem';

class Nav extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <NavItem href="/#" click={this.toggleActive} content="Home" />
        <NavItem href="/#" click={this.toggleActive} content="Messages" />
        <NavItem href="/#" click={this.toggleActive} content="Friends" />
        <div className="right menu">
          <NavItem href="/#" class="ui item" content="Logout" />
        </div>
      </div>
    );
  }
}

export default Nav;

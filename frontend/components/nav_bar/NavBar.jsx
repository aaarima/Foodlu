import React from 'react';

const NavBar = props => (
  <div className={"nav-bar"}>
    <div className="nav-bar-left">
      {props.left}
    </div>
    <div className={"nav-bar-right"}>
      {props.right}
    </div>
  </div>
);

export default NavBar;
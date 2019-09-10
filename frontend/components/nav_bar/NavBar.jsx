import React from 'react';

const NavBar = props => (
  <div className={"nav-bar"}>
    <div className="left">
      {props.left.map((item, idx) => <div className="item" key={idx}>{item}</div>)}
    </div>
    <div className={"right"}>
      {props.right.map((item, idx) => <div className="item" key={idx}>{item}</div>)}
    </div>
  </div>
);

export default NavBar;
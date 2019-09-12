import React from 'react';
import SignInContainer from '../session/signin_container'
import { Link } from "react-router-dom";
import NavBar from "../nav_bar/NavBar";

const Welcome = props => (
  <div>
    <NavBar left={[<Link to={"/"}><p key={"logo"} className="logo">foodlu</p></Link>]} right={[
      (<button className={"button"} onClick={e => {props.toggleLoginPage(); props.toggleModal()}}>LOG IN</button>),
      (<Link to={"/signup"}>SIGN UP</Link>)
    ]}/>
    <SignInContainer/>
  </div>
);

export default Welcome;
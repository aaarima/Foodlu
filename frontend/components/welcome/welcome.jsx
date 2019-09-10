import React from 'react';
import SignInContainer from '../session/signin_container'
import { Link } from "react-router-dom";
import NavBar from "../nav_bar/NavBar";

const Welcome = props => (
  <div>
    <NavBar left={[<p key={"logo"} className="logo">Godzillu</p>]} right={[]}/>
  </div>
);

export default Welcome;
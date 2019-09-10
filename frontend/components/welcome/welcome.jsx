import React from 'react';
import SignInContainer from '../session/signin_container'
import SignUpContainer from '../session/signup_container'
import NavBar from "../nav_bar/NavBar";

const Welcome = props => (
  <div>
    <NavBar left={[<p key={"placeholder"}>Placeholder</p>]} right={[
      (<SignInContainer key={"SignIn"}/>),
      (<SignUpContainer key={"SignUp"}/>)
    ]}/>
  </div>
);

export default Welcome;
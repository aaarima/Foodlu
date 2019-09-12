import React from 'react'
import NavBar from "../nav_bar/NavBar";
import UserDropdownContainer from "./user_dropdown_container"

const Home = props => (
  <div>
    <NavBar left={[<p key={"logo"} className="logo">foodlu</p>]} right={[<UserDropdownContainer/>]} />
  </div>
);

export default Home;
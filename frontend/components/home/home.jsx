import React from 'react'
import NavBar from "../nav_bar/NavBar";
import UserDropdownContainer from "./user_dropdown_container"
import { Link } from "react-router-dom";

const Home = props => (
  <div>
    <NavBar left={[<Link to={"/"}><p key={"logo"} className="logo">foodlu</p></Link>]} right={[<UserDropdownContainer/>]} />
  </div>
);

export default Home;
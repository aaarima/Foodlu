import React from 'react'
import NavBar from "../nav_bar/NavBar";
import UserDropdownContainer from "./user_dropdown_container"
import { Link } from "react-router-dom";

const Home = props => (
  <div>
    <NavBar left={[<Link to={"/"}><p key={"logo"} className="logo">foodlu</p></Link>]} right={[<UserDropdownContainer/>]} />
    <div className="welcome-image-container">
      <div className="gradient"></div>
      <h1>Placeholder stuff for now</h1>
      <img src="https://chopra.com/sites/default/files/field/image/6dailyhabitsofhappypeople2.jpg" alt=""/>
    </div>
  </div>
);

export default Home;
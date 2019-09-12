import React from 'react';
import SignInContainer from '../session/signin_container'
import { Link } from "react-router-dom";
import NavBar from "../nav_bar/NavBar";

const Welcome = props => (
  <div>
    <NavBar left={[<Link to={"/"}><p key={"logo"} className="logo">foodlu</p></Link>]} right={[
      (<Link to={"/signup"}>SIGN UP</Link>),
      (<button className={"button"} onClick={e => {props.toggleLoginPage(); props.toggleModal()}}>LOG IN</button>)
    ]}/>
    <SignInContainer/>
    <div className="welcome-image-container">
      <div className="gradient"></div>
      <h1>Welcome to Foodlu!</h1>
      <img src="https://chopra.com/sites/default/files/field/image/6dailyhabitsofhappypeople2.jpg" alt=""/>
    </div>
    {/*<img src="https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://www.butterbellybabe.com/wp-content/uploads/2018/06/img_4911-2.jpg" alt=""/>*/}
  </div>
);

export default Welcome;
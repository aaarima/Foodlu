import React from 'react'
import WelcomeContainer from './welcome/welcome_container'
import Home from "./home/home";
import ModalContainer from './modal/modal_container'
import SignUpContainer from './session/signup_container'
import { ProtectedRoute, AuthRoute } from "../util/route_util";

const App = (props) => (
  <div>
    <ModalContainer/>
    <ProtectedRoute exact path="/" component={Home}/>
    <AuthRoute path="/welcome" component={WelcomeContainer}/>
    <AuthRoute path="/signup" component={SignUpContainer}/>
  </div>
);

export default App;
import React from 'react'
import Welcome from "./welcome/welcome";
import Home from "./home/home";
import SignUpContainer from './session/signup_container'
import { ProtectedRoute, AuthRoute } from "../util/route_util";

const App = (props) => (
  <div>
    <ProtectedRoute exact path="/" component={Home}/>
    <AuthRoute path="/welcome" component={Welcome}/>
    <AuthRoute path="/signup" component={SignUpContainer}/>
  </div>
);

export default App;
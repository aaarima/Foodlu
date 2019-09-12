import React from 'react'
import WelcomeContainer from './welcome/welcome_container'
import Home from "./home/home";
import ModalContainer from './modal/modal_container'
import SignUpContainer from './session/signup_container'
import NotFound from "./notFound";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import { Switch, Route } from 'react-router-dom'

const App = (props) => (
  <div>
    <ModalContainer/>
    <Switch>
      <ProtectedRoute exact path="/" component={Home}/>
      <AuthRoute path="/welcome" component={WelcomeContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer}/>
      <Route path="/" component={NotFound}/>
    </Switch>
  </div>
);

export default App;
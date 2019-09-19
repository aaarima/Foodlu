import React from 'react'
import WelcomeContainer from './welcome/welcome_container'
import HomeContainer from "./home/home_container";
import ModalContainer from './modal/modal_container'
import SignUpContainer from './session/signup_container'
import MovieShowContainer from './movies/movie_show_container'
import SeriesShowContainer from './series/series_show_container'
import VideoContainer from './video/video_container'
import NotFound from "./notFound";
import Footer from "./footer";
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import { Switch, Route } from 'react-router-dom'

const App = props => (
  <div>
    <ModalContainer/>
    <Switch>
      <ProtectedRoute exact path="/" component={HomeContainer}/>
      <AuthRoute path="/welcome" component={WelcomeContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer}/>
      <Route path="/" component={NotFound}/>
    </Switch>
    <MovieShowContainer/>
    <SeriesShowContainer/>
    <VideoContainer/>
    <Footer/>
  </div>
);

export default App;
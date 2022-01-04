import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import GameDartStart from './recommender/game_dart_start';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import GenreIndexContainer from './recommender/genre_index_container';
import ResultShowContainer from './recommender/result_show_container';
import GitHubLinks from './gitHub/gitHub_container';
import './reset.css'
import './app.css'
import Modal from './modal/modal';

const App = () => (
  <div>
    <NavBarContainer />
    <Modal/>
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> 
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute path="/gamedartstart" component={GameDartStart} />
        <ProtectedRoute path="/gamedartit" component={GenreIndexContainer} />
        <ProtectedRoute path="/games/:gameId" component={ResultShowContainer} /> 
        <ProtectedRoute path="/profile/:id" component={ProfileContainer} />
        <ProtectedRoute path="/developers" component={GitHubLinks} />
        <AuthRoute exact path="/" component={MainPage} />
      </Switch>
  </div>
);

export default App;
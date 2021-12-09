import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import GenreIndexContainer from './recommender/genre_index_container';
import ResultShowContainer from './recommender/result_show_container';
import './reset.css'
import './app.css'

const App = () => (
  <div>
    <NavBarContainer />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />      
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute path="/gamedartit" component={GenreIndexContainer} />
        <ProtectedRoute path="/games/:gameId" component={ResultShowContainer} /> 
      </Switch>
  </div>
);

export default App;
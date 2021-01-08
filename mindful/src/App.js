import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './pages/welcome/Welcomepage';
import Homepage from './pages/Homepage';
import BreathingExercise from './pages/Breathingexercise.jsx';
import Video from './pages/Video';
import Workout from './pages/Workout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/welcome" component={Welcome}/>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/breathing" component={BreathingExercise}/>
          <Route exact path="/video" component={Video}/>
          <Route exact path="/workout" component={Workout}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BreathingExercise from './pages/BreathingExercise';
import Video from './pages/Video';
import Workout from './pages/Workout';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Welcome from './pages/welcome/Welcomepage';
// import Navbar from './components/Navbars/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
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

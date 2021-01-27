import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcomepage';
import Homepage from './pages/Homepage';
import BreathingExercise from './pages/Breathingexercise.jsx';
import Video from './pages/Video';
import Workout from './pages/Workout';
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/homepage" component={Homepage}/>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/breathing" component={BreathingExercise}/>
        <Route exact path="/video" component={Video}/>
        <Route exact path="/workout" component={Workout}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About}/>
    </Router>
  );
}

export default App;

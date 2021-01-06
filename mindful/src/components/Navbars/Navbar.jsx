import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../image/mindful_logo.png';
// import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const Navbar = () => {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <img src={logo} width="60" height="50" alt="App Logo" className="brand-logo center"></img>
            <a href="/welcome" className="right">Login</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/breathing">Breathing Exercises</Link></li>
              <li><Link to="/video">Video Resources</Link></li>
              <li><Link to="/workout">Workout Tracker</Link></li>
            </ul>
          </div>
        </nav>,
         <h4 className="mindful-text">Mindful</h4>
      </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const Navbar = () => {
    return (
        <nav>
          <div className="nav-wrapper">
            <a href="/welcome" className="brand-logo right">Login</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/breathing">Breathing Exercises</Link></li>
              <li><Link to="/video">Video Resources</Link></li>
              <li><Link to="/workout">Workout Tracker</Link></li>
            </ul>
          </div>
        </nav>
    );
};

export default Navbar;
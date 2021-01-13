import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../image/mindful_logo.png';
import text from '../../image/mindful_text.png';
// import 'materialize-css'; // It installs the JS asset onlyz
import 'materialize-css/dist/css/materialize.min.css';
import './Navbar.css';

window.onload = function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
};

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <a href="/"><img src={logo} width="70" height="57" alt="App Logo" className="brand-logo center hoverable"></img></a>
          <a href="/welcome" className="login right"><b>Login</b></a>
          <ul id="nav-mobile" className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/breathing">Breathing Exercises</a></li>
            <li><a href="/video">Video Resources</a></li>
            <li><a href="/workout">Workout Tracker</a></li>
          </ul>
        </div>
      </nav>
      <img src={text} width="100" alt="App Name" className="mindful-text center"></img>
    </div>
  );
};

export default Navbar;
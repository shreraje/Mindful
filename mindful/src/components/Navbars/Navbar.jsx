import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/mindful_logo.png';
import text from '../../image/mindful_text.png';
// import 'materialize-css'; // It installs the JS asset onlyz
import 'materialize-css/dist/css/materialize.min.css';
import './Navbar.css';

window.onload=function(){
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

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
          <img src={logo} width="70" height="57" alt="App Logo" className="brand-logo center hoverable"></img>
          <a href="/welcome" className="login right">Login</a>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/breathing">Breathing Exercises</Link></li>
            <li><Link to="/video">Video Resources</Link></li>
            <li><Link to="/workout">Workout Tracker</Link></li>
          </ul>
        </div>
      </nav>
      <img src={text} width="100" alt="App Name" className="mindful-text center"></img>
    </div>
  );
};

export default Navbar;
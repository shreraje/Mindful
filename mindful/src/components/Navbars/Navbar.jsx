import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">Login</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="sass.html">Home</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;
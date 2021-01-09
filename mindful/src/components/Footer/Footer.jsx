import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return(
        <Navbar className="footer-bg justify-content-around" sticky="bottom">
            <Nav.Link id="link1" href="/about">About</Nav.Link>
            <Nav.Link id="link2" href="/contact">Contact Us</Nav.Link>
        </Navbar>
    );
};

export default Footer;
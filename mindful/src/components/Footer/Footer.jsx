import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return(
        <Navbar className="justify-content-between footer-bg" expand="lg" sticky="bottom">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link className="links" href="/about">About</Nav.Link>
                <Nav.Link className="links" href="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Footer;
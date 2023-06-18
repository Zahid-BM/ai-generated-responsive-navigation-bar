import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="warning" expand="md" variant="dark" sticky="top">
            <Navbar.Brand as={Link} to="/" className='ms-3 ms-md-4' >Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='me-3' />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" activeClassName="active">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" activeClassName="active">Contact</Nav.Link>
                    <Nav.Link as={NavLink} to="/faq" activeClassName="active">FAQ</Nav.Link>
                </Nav>
                <Button variant="success" className="d-md-none ml-auto">Login</Button>
            </Navbar.Collapse>
            <Button variant="success" className="d-none d-md-block me-4">Login</Button>
        </Navbar>
    );
};

export default NavigationBar;
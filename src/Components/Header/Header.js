import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/Logo/Asset 10.svg';
const Header = () => {
    return (
        <section className='header '>
            <div className='container'>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container className='navbar-control'>
                        <Navbar.Brand href="#home" ><img src={logo}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav className='nav-items '>
                                <Nav.Link href="#about">ABOUT</Nav.Link>
                                <Nav.Link href="#contact">CONTACT US</Nav.Link>
                                <Nav.Link href="#signup" className='butn-control'>SIGN IN</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='welcome-section text-white text-center container'>
                <p className='welcome-text'>WELCOME TO HOTEL ROYEL</p>
                <p>Luxe amenities and unparalleled sophistication come to life at Hotel Washington. Historically known for its roster of A-list guests - including famous politicians, Hollywood starlets, and even the King of Rock and Roll, Elvis Presley - Hotel Washington has been at the center of the action since 1917. Following a thoughtful renovation in 2019, it is now a beacon of modern luxury where old and new blend seamlessly. Toast to skyline views at the iconic rooftop lounge, VUE, and explore the city's top attractions—just outside our doors.</p>
                <button >Read More</button>
            </div>
        </section >
    );
};

export default Header;
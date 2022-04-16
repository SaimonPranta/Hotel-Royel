import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/Logo/Asset 10.svg';
import { userContxt } from '../Home/Home';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [user, setUser] = useContext(userContxt)
    const userIcon = <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
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
                                {
                                    !user.email ? <Nav.Link href="#signup" className='butn-control'>SIGN IN</Nav.Link> : 
                                    <Nav.Link className='user-control'><NavLink to='profile'>{userIcon} {user.username}</NavLink></Nav.Link>
                                }
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
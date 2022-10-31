import React from 'react';
import './Header.css'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../../img/retina.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Container className='d-flex'>
                    <Link to='/home' className=''>
                        <img
                            src={logo}
                            className="img-fluid w-100 h-100 d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                    <div className=''>
                        <Nav className="ms-auto fw-semibold header-menu">
                            <NavLink className='nav-link' to="/home">Home</NavLink>
                            <NavLink className='nav-link' to="/about">About Us</NavLink>
                            <NavLink className='nav-link' to="/courses">Courses</NavLink>
                            <NavLink className='nav-link' to="/contacts">Contacts</NavLink>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
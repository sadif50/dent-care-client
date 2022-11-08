import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/brand/dentLogo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" className='shadow-sm' expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='custom-brand'>
                        <Image src={logo}></Image> <span>Dent Care</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='btn' to='/'>Home</NavLink>
                        <NavLink className='btn' to='/services'>Services</NavLink>
                        <NavLink className='btn' to='/addService'>Add Services</NavLink>
                        <NavLink className='btn' to='/myReview'>My Reviews</NavLink>
                        <NavLink className='btn' to='/signup'>Sign Up</NavLink>
                        <NavLink className='btn' to='/login'>Log In</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
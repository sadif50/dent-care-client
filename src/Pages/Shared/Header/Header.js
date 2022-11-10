import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/brand/dentLogo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    return (
        <Navbar className='shadow-sm primary_bg' expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/' className='custom-brand'>
                        <Image src={logo}></Image> <span>Dent Care</span>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='primary_btn_custom' to='/'>Home</NavLink>
                        <NavLink className='primary_btn_custom' to='/services'>Services</NavLink>
                        <NavLink className='primary_btn_custom' to='/blogs'>Blogs</NavLink>
                        {
                            user?.uid ? <>
                                <NavLink className='primary_btn_custom' to='/myReview'>My Reviews</NavLink>
                                <NavLink className='primary_btn_custom' to='/addService'>Add Service</NavLink>
                                <Link className='primary_btn_custom' onClick={logOut}>Log Out</Link>
                            </> : <>
                                <NavLink className='primary_btn_custom' to='/signup'>Sign Up</NavLink>
                                <NavLink className='primary_btn_custom' to='/login'>Log In</NavLink>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
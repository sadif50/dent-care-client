import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/brand/dentLogo.png';


const Footer = () => {
    return (
        <div className="py-5 bg-dark">
            <footer className="container">
                <div>
                    <div className='d-flex justify-content-center mb-3'>
                        <Link to='/' className='custom-brand'>
                            <img src={logo} alt="" /> <span>Dent Care</span>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Link className='text-white text-decoration-none mx-3'>About</Link>
                        <Link className='text-white text-decoration-none mx-3'>Blogs</Link>
                        <Link className='text-white text-decoration-none mx-3'>Terms & Conditions</Link>
                        <Link className='text-white text-decoration-none mx-3'>Privacy Policy</Link>
                        <Link className='text-white text-decoration-none mx-3'>Support</Link>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
                    <p className='text-white'>© 2022 Dr. Mohammad, Dent Care. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <Link className='text-white fs-5'>
                                <FaFacebook />
                            </Link>
                        </li>
                        <li className="ms-3">
                            <Link className='text-white fs-5'>
                                <FaTwitter />
                            </Link>
                        </li>
                        <li className="ms-3">
                            <Link className='text-white fs-5'>
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
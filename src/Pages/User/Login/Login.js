import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dentist from '../../../assets/person/dentist.png';


const Login = () => {
    return (
        <div className='container my-5'>
            <div className='bg-dark py-5 px-4 rounded'>
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-75 ms-5' src={dentist} alt="" />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <h2 className='mb-5 px-0 px-md-5'>Login To Your Account!</h2>
                        <form className='px-0 px-md-5'>
                            <div className='mb-3'>
                                <label htmlFor="email" className='mb-2'>Email</label>
                                <input className='form-control' type="email" name="email" placeholder='Email' id="email" required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password" className='mb-2'>Password</label>
                                <input className='form-control' type="password" name="password" placeholder='Password' id="password" required />
                            </div>
                            <div>
                                <button className='primary_btn_custom'>LOG IN</button>
                            </div>
                        </form>
                        <div className='px-0 px-md-5'>
                            <h4 className='my-2'>Or</h4>
                            <button className='primary_btn_custom d-flex align-items-center'><FaGoogle className='text-danger' />&nbsp; Continue with Google</button>
                        </div>
                        <div className=' mt-4 px-0 px-md-5 fw-bold fs-5'>
                            New to Dent Care? &nbsp;
                            <Link to='/signup' className='text-decoration-none'>Sign Up Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
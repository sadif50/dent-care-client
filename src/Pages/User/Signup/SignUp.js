import React from 'react';
import { Link } from 'react-router-dom';
import dentist from '../../../assets/person/dentist.png';


const SignUp = () => {
    return (
        <div className='container my-5'>
            <div className='bg-dark py-5 px-4 rounded'>
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-75 ms-5' src={dentist} alt="" />
                    </div>
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <h2 className='mb-4 px-0 px-md-5'>Sign Up For Your Account!</h2>
                        <form className='px-0 px-md-5'>
                            <div className='mb-2'>
                                <label htmlFor="name" className='mb-2'>Name</label>
                                <input className='form-control' type="name" name="name" placeholder='Your Name' id="name" required />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="photo_url" className='mb-2'>Photo Url</label>
                                <input className='form-control' type="photo_url" name="photo_url" placeholder='Your Photo Url' id="photo_url" required />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="email" className='mb-2'>Email</label>
                                <input className='form-control' type="email" name="email" placeholder='Email' id="email" required />
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="password" className='mb-2'>Password</label>
                                <input className='form-control' type="password" name="password" placeholder='Password' id="password" required />
                            </div>
                            <div>
                                <button className='primary_btn_custom'>SIGN UP</button>
                            </div>
                        </form>
                        <div className=' mt-4 px-0 px-md-5 fw-bold fs-5'>
                            Already have an account? &nbsp;
                            <Link to='/login' className='text-decoration-none'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
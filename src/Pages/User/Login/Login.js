import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dentist from '../../../assets/person/dentist.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../utilities/useTitle';
import { toast } from 'react-toastify';



const Login = () => {
    // Dynamic Title
    useTitle('Login || Dent Care');

    // Get Method From Context
    const {logInWithEmail, googleProviderLogIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // Google LogIn Provider
    const googleProvider = new GoogleAuthProvider();

    const handleLogIn = e => {
        // Prevent form from refresh
        e.preventDefault();

        const form = e.target;
        // Get The Form Data
        const email = form.email.value;
        const password = form.password.value;

        // Log In With Email And Password
        logInWithEmail(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            
            // Display SuccessFul Toast
            toast.success('Log in Successful.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            form.reset();

            navigate(from, {replace: true});
        })
        .catch(err => {
            // Display Error Toast
            toast.error(err.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        });
    }

    // Log In With Google Provider
    const logInWithGoogle = () => {
        googleProviderLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            
            // Display SuccessFull Toast
            toast.success('Log in Successful.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })

            navigate(from, {replace: true});
        })
        .catch(err => console.error(err));
    }


    return (
        <div className='container my-5'>
            <div className='bg-dark py-5 px-4 rounded'>
                <div className="row">
                    <div className="col-lg-6">
                        <img className='w-75 ms-5' src={dentist} alt="" />
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <h2 className='mb-5 px-0 px-md-5'>Login To Your Account!</h2>
                        <form className='px-0 px-md-5' onSubmit={handleLogIn}>
                            <div className='mb-3'>
                                <label htmlFor="email" className='mb-2'>Email</label>
                                <input className='form-control' type="email" name="email" placeholder='Email' id="email" required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password" className='mb-2'>Password</label>
                                <input className='form-control' type="password" name="password" placeholder='Password' id="password" required />
                            </div>
                            <div>
                                <button className='primary_btn_custom' type='submit'>LOG IN</button>
                            </div>
                        </form>
                        <div className='px-0 px-md-5'>
                            <h4 className='my-2'>Or</h4>
                            <button onClick={logInWithGoogle} className='primary_btn_custom d-flex align-items-center'><FaGoogle className='text-danger' />&nbsp; Continue with Google</button>
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
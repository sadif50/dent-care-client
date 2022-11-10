import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <h2>Loading...</h2>
    }

    // Check user avility
    if(user){
        return children;
    }
    // Navigate to log in
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;
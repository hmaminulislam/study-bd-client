import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    if(loader) {
        return <div>Loading...</div>
    }
    if(!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;
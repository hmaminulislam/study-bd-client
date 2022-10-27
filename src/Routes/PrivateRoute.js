import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader) {
        return (
          <div className="text-center font-semibold text-xl text-sky-600 h-screen">
            Loading...
          </div>
        );
    }
    if(!user) {
        return (
          <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children
};

export default PrivateRoute;
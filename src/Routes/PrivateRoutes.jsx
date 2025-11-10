import React from 'react';
import UseAuth from '../Hook/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading}=UseAuth( );
    const location=useLocation();
    if(loading)
        return <span className="text-4xl">Loading....</span>
    if(user)
    {
        return children
    }
       return <Navigate state={location?.pathname} to={"/login"}></Navigate>
    
};

export default PrivateRoutes;
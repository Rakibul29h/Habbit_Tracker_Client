import React from 'react';
import UseAuth from '../Hook/UseAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading}=UseAuth( );
    const location=useLocation();
    if(loading)
        return <div className="min-h-screen flex items-center justify-center"><Loading></Loading></div>
    if(user)
    {
        return children
    }
       return <Navigate state={location?.pathname} to={"/login"}></Navigate>
    
};

export default PrivateRoutes;
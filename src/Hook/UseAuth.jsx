import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UseAuth = () => {
    const useContextValue=useContext(AuthContext);
    return useContextValue
};

export default UseAuth;
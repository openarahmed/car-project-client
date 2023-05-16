import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
   return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;
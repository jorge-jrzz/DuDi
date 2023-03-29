
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const user = true;

    if (user) {
        return children
    }else {
        console.log('YOU MUST TO LOG IN TO ACCESS THIS PAGE');
        return <Navigate replace to="/log-in"></Navigate>
    }
}
 
export default PrivateRoute;
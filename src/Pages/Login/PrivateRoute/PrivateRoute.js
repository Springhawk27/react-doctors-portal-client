import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isLoading } = useAuth();
    // new
    let location = useLocation();

    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
















    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             // auth.user
    //             user.email ? (
    //                 children
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: "/login",
    //                         state: { from: location }
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );
};

export default PrivateRoute;
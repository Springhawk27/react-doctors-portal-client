import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading } = useAuth();
    // new 
    const location = useLocation();
    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }

    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;





    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) =>
    //             // auth.user
    //             user.email && admin ? (
    //                 children
    //             ) : (
    //                 <Redirect
    //                     to={{
    //                         pathname: "/home",
    //                         state: { from: location }
    //                     }}
    //                 />
    //             )
    //         }
    //     />
    // );
};

export default AdminRoute;
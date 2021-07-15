import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticaded,
    component: Component,
    ...res
}) => {
    
    localStorage.setItem('lastPath', res.location.pathname );

    return (
        <Route 
            {...res}
            component={ (props) => (
                ( isAuthenticaded )
                ? <Component {...props}/>
                : <Redirect to="/login" />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticaded: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

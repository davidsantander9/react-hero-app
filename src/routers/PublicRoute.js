import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticaded,
    component: Component,
    ...res
}) => {
    return (
        <Route 
            {...res}
            component={ (props) => (
                ( !isAuthenticaded )
                ? <Component {...props}/>
                : <Redirect to="/" />
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticaded: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}


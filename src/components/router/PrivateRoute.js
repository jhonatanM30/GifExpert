import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    const lastPage = rest.location.pathname;
    localStorage.setItem('lastPage', lastPage);

    return (
        <Route {...rest}
            component={(props) => (
                (isAuthenticated) 
                ? <Component {...props} />
                : <Redirect to="/login" />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
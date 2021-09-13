import React, { Fragment, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { AuthContext } from '../context/AuthContext';
import { Login } from '../login/Login';
import { DashBoardRouter } from './DashBoardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Fragment>
                <Switch >
                    <PublicRoute exact path="/login" component={Login} isAuthenticated={user.logged}/>
                    <PrivateRoute path="/" component={DashBoardRouter} isAuthenticated={user.logged}/>                 
                </Switch>
            </Fragment>
        </Router>
    )
}

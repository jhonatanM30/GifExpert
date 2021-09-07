import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { Login } from '../login/Login';
import { DashBoardRouter } from './DashBoardRouter';



export const AppRouter = () => {
    return (
        <Router>
            <Fragment>            
                <Switch >
                    <Route exact path="/login" component={Login}></Route>  
                    <Route  path="/" component={DashBoardRouter}></Route>                 
                </Switch>
            </Fragment>
        </Router>
    )
}

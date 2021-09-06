import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { NavBar } from '../nav/NavBar';
import { Login } from '../login/Login';
import { GifExpert } from '../gif/GifExpert';
import { About } from '../About/About'

export const AppRouter = () => {
    return (
        <Router>
            <Fragment>
                <NavBar />
                <Switch >
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/gif" component={GifExpert}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route  component={GifExpert}></Route>
                </Switch>
            </Fragment>
        </Router>
    )
}

import React, { Fragment } from 'react'
import {
    Switch,Redirect,
    Route
} from "react-router-dom";
import { NavBar } from '../nav/NavBar';
import { GifExpert } from '../gif/GifExpert';
import { Heroes } from '../heroes/Heroes';

export const DashBoardRouter = () => {
    return (
        
            <Fragment>
                <NavBar />
                <Switch >                   
                    <Route exact path="/gif" component={GifExpert}></Route>
                    <Route exact path="/heroes" component={Heroes}></Route>
                    <Route component={GifExpert}></Route>
                    <Redirect to="/gif"/>
                </Switch>
            </Fragment>
        
    )
}

import React, { Fragment } from 'react'
import {
    Switch, Redirect,
    Route
} from "react-router-dom";
import { NavBar } from '../nav/NavBar';
import { GifExpert } from '../gif/GifExpert';
import { Marvel } from '../marvel/Marvel';
import { Dc } from '../dc/Dc';
import { Heroes } from '../heroes/Heroes';



export const DashBoardRouter = () => {
    return (

        <Fragment>
            <NavBar />
            <div className="container">
                <Switch >
                    <Route exact path="/gif" component={GifExpert}></Route>
                    <Route exact path="/dc" component={Dc}></Route>
                    <Route exact path="/marvel" component={Marvel}></Route>
                    <Route exact path="/heroe/:heroeId" component={Heroes}></Route>
                    <Redirect to="/gif" />
                </Switch>
            </div>
        </Fragment>

    )
}

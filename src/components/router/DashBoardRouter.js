import React, { Fragment } from 'react'
import {
    Switch, Redirect,
    Route
} from "react-router-dom";
import { NavBar } from '../nav/NavBar';
import { Marvel } from '../marvel/Marvel';
import { Dc } from '../dc/Dc';
import { Heroes } from '../heroes/Heroes';
import { Login } from '../login/Login';
import {Search} from '../search/Search';
import { SearchGif } from '../searchGif/SearchGif';





export const DashBoardRouter = () => {
    return (

        <Fragment>
            <NavBar />
            <div className="container">
                <Switch >
                    <Route exact path="/searchgif" component={SearchGif}></Route>
                    <Route exact path="/dc" component={Dc}></Route>
                    <Route exact path="/marvel" component={Marvel}></Route>
                    <Route exact path="/heroe/:heroeId" component={Heroes}></Route>
                    <Route exact path="/login" component={Login}></Route> 
                    <Route exact path="/searchgeneral" component={Search}></Route>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Fragment>

    )
}

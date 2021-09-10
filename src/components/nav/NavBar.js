import React from "react";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink exact activeClassName="active" to="/gif" className="navbar-brand">
                UseContext
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/login" className="nav-link">
                        Logout
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/gif" className="nav-link">
                        Gif
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/dc" className="nav-link">
                        Heroes Dc
                    </NavLink>  
                    <NavLink exact activeClassName="active" to="/marvel" className="nav-link">
                        Heroes Marvel
                    </NavLink> 
                    <NavLink exact activeClassName="active" to="/searchgeneral" className="nav-link">
                        Buscador General
                    </NavLink>                        
                </div>
            </div>
        </nav>
    );
};

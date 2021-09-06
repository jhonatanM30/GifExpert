import React from "react";
import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink exact activeClassName="active" to="/gif" className="navbar-brand">
                UseContext
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact activeClassName="active" to="/" className="nav-link">
                        Login
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/gif" className="nav-link">
                        Gif
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/about" className="nav-link">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

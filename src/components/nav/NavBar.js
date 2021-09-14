import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { types } from "../../types/types";
import '../../style/nav.css';

export const NavBar = () => {

    const { user: { name }, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login')
        dispatch({
            type: types.logout,
        })
    }

    const activeMenuMovil = (e) => {
        const navMenu = document.querySelector(".nav-menu");
        navMenu.classList.toggle("nav-menu_visible");
    };

    return (
        <nav className="nav">
            <NavLink exact activeClassName="active" to="/gif" className="navbar-brand">
                Commics
            </NavLink>
            <span>{name}</span>
            <button className="nav-toogle" onClick={activeMenuMovil}>
                <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-menu">
                <li className="nav-menu-item">
                    <NavLink exact activeClassName="active" to="/searchgif" className="nav-link">
                        Gif
                    </NavLink>
                </li>
                <li className="nav-menu-item">
                    <NavLink exact activeClassName="active" to="/dc" className="nav-link">
                        Heroes Dc
                    </NavLink>
                </li>
                <li className="nav-menu-item">
                    <NavLink exact activeClassName="active" to="/marvel" className="nav-link">
                        Heroes Marvel
                    </NavLink>
                </li>
                <li className="nav-menu-item">
                    <NavLink exact activeClassName="active" to="/searchgeneral" className="nav-link">
                        Buscador General
                    </NavLink>
                </li>
                <li className="nav-menu-item">
                    <button className="nav-link btn" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

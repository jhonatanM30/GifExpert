import React from "react";
import { NavLink } from "react-router-dom";
import '../../style/nav.css'
export const NavBar = () => {

    const activeMenuMovil = (e) => {
        const navMenu = document.querySelector(".nav-menu");
        navMenu.classList.toggle("nav-menu_visible");
    };

    return (
        <nav className="nav">
            <NavLink exact activeClassName="active" to="/gif" className="navbar-brand">
                Commics 
            </NavLink> 
            <span>Jhonatan</span>           
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
                    <NavLink exact activeClassName="active" to="/login" className="nav-link">
                     Logout 
                    </NavLink>                    
                </li>
            </ul>
        </nav>
    );
};

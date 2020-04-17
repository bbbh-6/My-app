import React from 'react';
import H from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () =>
{
    return(
    <div className={H.header}>
        <div className={H.logo}>
            <img src="https://image.flaticon.com/icons/svg/1653/1653630.svg" alt="Message)" className={H.header_logo}/>
        </div>
        <nav className={H.header_nav}>

            
            <NavLink to="/Posts" activeClassName={H.header_nav_link} id={H.header_nav_link}>Posts</NavLink>
            <NavLink to="/Message" activeClassName={H.header_nav_link} id={H.header_nav_link}>Messages</NavLink>
            <NavLink to="/About" activeClassName={H.header_nav_link} id={H.header_nav_link}>AboutUs</NavLink>
            <NavLink to="/Contact" activeClassName={H.header_nav_link} id={H.header_nav_link}>Contact</NavLink>
        </nav>
    </div>);
}
export default Header;
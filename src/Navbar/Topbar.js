import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom'

const Topbar = (props) => {
    return(
        <header className={classes.header}>
            <nav className={classes.Topbar}>
                <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/logo.png?raw=true" alt="MissionEd Logo"/>
                <h1>MISSIONED</h1>
            </nav>
            <a href="#/" className={classes.profileIcon} title="Profile Details">
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
            </a>
            <button title="Log Out">
                <i className="fa fa-power-off fa-lg"></i>
            </button>
            <Link to="/Cart">
                <div className={classes.CartIconContainer}>
                    <img className={classes.CartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="CartIcon"/>
                    <span className={classes.CartCount}>
                        {/* {props.count} */}
                        {/* 3 */}
                    </span>
                </div>
            </Link> 
        </header>
    );
}
export default Topbar;
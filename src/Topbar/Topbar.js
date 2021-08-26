import React from 'react';
import classes from './Topbar.module.css';

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
        </header>
    );
}
export default Topbar;
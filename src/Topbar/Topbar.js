import React from 'react';
import classes from './Topbar.module.css';

const Topbar = (props) => {
    return(
        <header className={classes.header}>
            <nav className={classes.Topbar}>
                <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/logo.png?raw=true" alt="MissionEd Logo"/>
                <h1>MISSIONED</h1>
            </nav>
            <a href="#/" title="Profile Details">
                <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/navatar.png" alt="Profile"/>
            </a>
            <button title="Log Out">
                <i className="fa fa-power-off fa-lg"></i>
            </button>
        </header>
    );
}
export default Topbar;
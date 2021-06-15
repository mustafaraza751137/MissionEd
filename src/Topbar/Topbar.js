import React from 'react';
import classes from './Topbar.module.css';

const Topbar = (props) => {
    return(
        <header className={classes.header}>
            <nav className={classes.Topbar}>
                <img src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="MissionEd Logo"/>
                <h1>MISSIONED</h1>
            </nav>
            <a href="#" title="Profile Details">
                <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/navatar.png" alt="Profile"/>
            </a>
            <button title="Log Out">
                <i class="fa fa-power-off fa-lg"></i>
            </button>
        </header>
    );
}
export default Topbar;
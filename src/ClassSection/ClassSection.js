import React from 'react';
import classes from './../StoreSection/StoreSection.module.css';

const ClassSection = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <h1><img src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="Content"/>MISSIONED CLASSES</h1>
                <h2>Get the best classes by the best Faculty members in the Country</h2>
            </div>
            <div className={classes.image}>
                <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/hero-img.png" alt="fluid"/>
            </div>
        </div>
    );
}
export default ClassSection;
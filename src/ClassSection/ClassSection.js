import React from 'react';
import classes from './../StoreSection/StoreSection.module.css';

const ClassSection = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <h1><img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/logo.png?raw=true" alt="Content"/>MISSIONED CLASSES</h1>
                <h2>Get the best classes by the best Faculty members in the Country</h2>
            </div>
            <div className={classes.image}>
                <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/fluid.jpg?raw=true" alt="fluid"/>
            </div>
        </div>
    );
}
export default ClassSection;
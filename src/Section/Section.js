import React from 'react';
import classes from './Section.module.css';

const Section = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.content}>
                <h1><img src="https://www.missioned.in/static/media/NavigationLogo.19c19c2f.svg" alt="photo"/>MISSIONED STORE</h1>
                <h2>The one stop shop for all students of India</h2>
                <h2>Trusted by 2500+ students</h2>
                <div>
                    <a href="#" className={classes.start}><span>START SHOPPING</span></a>
                    <a href="#" className={classes.pro}><span>MISSIONED PRO</span> <span className={classes.badge}>NEW</span></a>
                </div>
            </div>
            <div className={classes.image}>
                <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/hero-img.png" alt="image fluid"/>
            </div>
        </div>
    );
}
export default Section;
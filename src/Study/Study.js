import React from 'react';
import classes from './Study.module.css';

const Study = (props) => {
    return(
        <div className={classes.Section}>
            <h1>
                Earn Coins<br></br>By Studying!
            </h1>

            <img src="https://www.missioned.in/MissionEd_Store_New/assets/img/Graphic-Design-Courses.jpg" alt="photo"/>
            <a href="#" className={classes.MissionEdClasses}>
                Go to MissionEd Classes(for College Students)
            </a>

            <img src="https://www.missioned.in/MissionEd_Store_New/8-12%20classes%20img.jpg" alt="photo"/>
            <a  href="#" className={classes.MissionEdClasses}>
                Go to MissionEd Classes(8-12)
            </a>
        </div>
    );
}
export default Study;
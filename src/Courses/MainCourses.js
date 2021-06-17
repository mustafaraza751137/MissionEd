import React from 'react';
import classes from '../App.module.css';
import ClassSection from '../ClassSection/ClassSection';
import Courses from './Courses';
import Faculty from './Faculty';

const MainCourses = (props) => {
    if(props.currentPos===1){
        return(
            <div>
                <ClassSection/>
                <div className={classes.Courses}>
                    <Courses/>
                </div>
                <div className={classes.Faculty}>
                    <Faculty/>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
}
export default MainCourses;
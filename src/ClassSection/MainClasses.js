import React from 'react';
import classes from '../App.module.css';
import ClassSection from './ClassSection';
import SchoolClasses from './SchoolClasses';
import Faculty from '../Courses/Faculty';

const MainClasses = (props) => {
    if(props.currentPos===2){
        return(
            <div>
                <ClassSection/>
                <div className={classes.Classes}>
                    <SchoolClasses/>
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
export default MainClasses;
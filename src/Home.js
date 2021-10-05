import React from 'react';
import classes from './Home.module.css';
import Feedback from './Feedback/Feedback';
import NewsLetter from './NewsLetter/NewsLetter';
import MainStore from './StoreSection/MainStore';
import MainCourses from './Courses/MainCourses';
import MainClasses from './ClassSection/MainClasses';

const Home = (props) => {
    return(
      <div className={classes.Home}>
        <main>
          <MainStore onClassOptionClick={props.onClassOptionClick} currentPos={props.currentPos}/>
          <MainCourses onClassOptionClick={props.onClassOptionClick} currentPos={props.currentPos}/>
          <MainClasses onClassOptionClick={props.onClassOptionClick} currentPos={props.currentPos}/>          
        </main>
        <div className={classes.Feedback}>
          <Feedback/>
        </div>
        <div className={classes.NewsLetter}>
          <NewsLetter/>
        </div>
      </div>
    );
}

export default Home;
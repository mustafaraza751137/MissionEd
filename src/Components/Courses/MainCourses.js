import React, {useLayoutEffect} from 'react';
import ClassSection from '../ClassSection/ClassSection';
import Courses from './Courses';
import Faculty from './Faculty';
import Feedback from '../Feedback/Feedback';
import NewsLetter from '../NewsLetter/NewsLetter';

const MainCourses = (props) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <div>
            <ClassSection/>
            <Courses/>
            <Faculty/>
            <Feedback/>
            <NewsLetter/>
        </div>
    );
}
export default MainCourses;
import React, {useLayoutEffect} from 'react';
import ClassSection from './ClassSection';
import SchoolClasses from './SchoolClasses';
import Faculty from '../Courses/Faculty';
import Feedback from '../Feedback/Feedback';
import NewsLetter from '../NewsLetter/NewsLetter';

const MainClasses = (props) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <div>
            <ClassSection/>
            <SchoolClasses/>
            <Faculty/>
            <Feedback/>
            <NewsLetter/>
        </div>
    );
}
export default MainClasses;
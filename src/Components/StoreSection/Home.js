import React, {useLayoutEffect} from 'react';
import classes from './Home.module.css';
import Deals from './Deals';
import StoreSection from './StoreSection';
import Refferal from '../Refferal/Refferal';
import Feedback from '../Feedback/Feedback';
import NewsLetter from '../NewsLetter/NewsLetter';
import {Link} from 'react-router-dom';

const Home = (props) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return(
        <div>
            <StoreSection/>
            <div className={classes.product}>
                <div className={classes.deals}>
                    <Deals/>
                </div>
                <div className={classes.study}>
                    <div className={classes.Section}>
                        <h1>
                            Earn Coins<br></br>By Studying!
                        </h1>

                        <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/college.png?raw=true" alt="Class"/>
                        <Link to="/College">
                            <a href="# " className={classes.MissionEdClasses}>
                                Go to MissionEd Classes(for College Students)
                            </a>
                        </Link>

                        <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/school.jpg?raw=true" alt="Class"/>
                        <Link to="/School">
                            <a href="# " className={classes.MissionEdClasses}>
                                Go to MissionEd Classes(8-12)
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Refferal/>
            <Feedback/>
            <NewsLetter/>
        </div>
    );
}
export default Home;
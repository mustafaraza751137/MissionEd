import React from 'react';
import classes from './Study.module.css';
import Deals from './Deals';
import StoreSection from './StoreSection';
import Refferal from '../Refferal/Refferal';

const MainStore = (props) => {
    if(props.currentPos===0){
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
                        <a href="# " className={classes.MissionEdClasses} onClick={() => props.onClassOptionClick(1)}>
                            Go to MissionEd Classes(for College Students)
                        </a>

                        <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/school.jpg?raw=true" alt="Class"/>
                        <a  href="# " className={classes.MissionEdClasses} onClick={() => props.onClassOptionClick(2)}>
                            Go to MissionEd Classes(8-12)
                        </a>
                    </div>
                </div>
                </div>
                <div className={classes.Refferal}>
                <Refferal/>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
}
export default MainStore;
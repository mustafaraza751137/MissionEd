import React from 'react';
import classes from './Refferal.module.css';

const Refferal = (props) => {
    return(
        <div className={classes.Refferal}>
            <h1>REFFERAL PAGE</h1>
            <a href="#/">
                <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/referral.png?raw=true" alt="Refferal"/>
            </a>
            <button className={classes.button}>Check</button>

            <h1>EARN COINS BY PLAYING IPL-BONANZA!</h1>
            <a href="#/">
                <img src="https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/ipl.jpg?raw=true" alt="IPL"/>
            </a>
            <button className={classes.button}>Play Now</button>
        </div>
    );
}
export default Refferal;
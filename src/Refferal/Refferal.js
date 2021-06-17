import React from 'react';
import classes from './Refferal.module.css';

const Refferal = (props) => {
    return(
        <div className={classes.Refferal}>
            <h1>REFFERAL PAGE</h1>
            <a href="#/">
                <img src="https://www.pngarea.com/pngs/607/4222542_visa-gift-card-png-vendor-partner-referral-transparent.png" alt="Refferal"/>
            </a>
            <button className={classes.button}>Check</button>

            <h1>EARN COINS BY PLAYING IPL-BONANZA!</h1>
            <a href="#/">
                <img src="https://www.missioned.in/MissionEd_Store_New/IPL-Bonanza/images/ipl2.png" alt="IPL"/>
            </a>
            <button className={classes.button}>Play Now</button>
        </div>
    );
}
export default Refferal;
import React from 'react';
import classes from './CopyRight.module.css';

const CopyRight = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.CopyRight}>
                © CopyRight <strong>MissionED</strong>. All Rights Reserved
            </div>
            <div className={classes.Credits}>
                Designed by<a href="https://missioned.in/">MissionED</a>
            </div>
        </div>
    );
}
export default CopyRight;
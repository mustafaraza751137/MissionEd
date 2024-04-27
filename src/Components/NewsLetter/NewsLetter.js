import React from 'react';
import classes from './NewsLetter.module.css';

const NewsLetter = (props) => {
    return(
        <footer className={classes.Footer}>
            <div className={classes.FooterNews}>
                <div className={classes.Title}>
                    <h4>Join Our Newsletter</h4>
                    <h5>Enter your email here</h5>
                </div>
                <form>
                    <input className={classes.Email} type="email" name="email" required/>
                    <input className={classes.Subscribe} type="submit" value="Subscribe"/>
                </form>
            </div>
        </footer>
    );
}
export default NewsLetter;
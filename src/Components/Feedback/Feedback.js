import React from 'react';
import classes from './Feedback.module.css';

const Feedback = (props) => {
    return(
        <div className={classes.Feedback}>
            <div className={classes.FeedbackTitle}>
                <h2>FEEDBACK</h2>
                <h5>Your feedback is valuable to us !</h5>
            </div>
            <div className={classes.Form}>
                <form>
                    <div className={classes.Contact}>
                        <div className={classes.Name}>
                            <input type="text" placeholder="Your Name" required/>
                        </div>
                        <div className={classes.Email}>
                            <input type="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className={classes.Subject}>
                        <input type="text" placeholder="Subject" required/>
                    </div>
                    <div className={classes.Message}>
                        <textarea type="text" placeholder="Message" rows="5" required/>
                    </div>
                    <div className={classes.Send}>
                        <input type="submit" value="Send Message"/>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Feedback;
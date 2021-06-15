import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <div className={classes.Contact}>
                <h3>MissionEd</h3>
                <p>
                    Affiliated with Atal Incubation Center<br></br>
                    Goa Institute of Management<br></br>
                    India<br></br><br></br>
                    <strong>Email:</strong>missionediit@gmail.com
                </p>
            </div>
            <div className={classes.Links}>
                <h4>Useful Links</h4>
                <ul>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">Terms of service</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">Privacy policy</a>
                    </li>
                </ul>
            </div>
            <div className={classes.Services}>
                <h4>Our Services</h4>
                <ul>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">MissionEd Store</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">MissionEd Classes</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">MissionEd classes (School)</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">MissionEd Referral</a>
                    </li>
                    <li>
                        <i class="fa fa-chevron-right fa-xs"></i>
                        <a href="#">MissionEd Pro <span class={classes.badge}>NEW</span></a>
                    </li>
                </ul>
            </div>
            <div className={classes.Networks}>
                <h4>Our Social Networks</h4>
                <p>Reach out to us anytime!</p>
                <div className={classes.Social}>
                    <a class={classes.Facebook}><i class="fa fa-facebook"></i></a>
                    <a class={classes.Likedin}><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
import React, {useLayoutEffect} from 'react';
import classes from './Address.module.css';
import { Link } from 'react-router-dom';
import history  from '../../history';

const Popup = (props) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className={classes.AddressSection}>
            <h2>Add Your Address</h2>
            <form className={classes.Address}>
                <input type="text" placeholder="Name*" required/>
                <input type="number" placeholder="Mobile Number*" required/><br></br>
                <input type="number" placeholder="Pincode*" required/>
                <input type="text" placeholder="Locality*" required/><br></br>
                <textarea placeholder="Address (Area and Street)*" rows="3" required/><br></br>
                <input type="text" placeholder="City/District/Town*" required/>
                <input type="text" placeholder="State*" required/><br></br>
                <input type="text" placeholder="Landmark (Optional)"/>
                <input type="number" placeholder="Alternate Phone (Optional)"/><br></br>
                <button type="submit" className={classes.deliverHere} 
                    onClick={() => {
                        // alert("your order has been placed \nIt will reach out to you in 7 days \nThank You for shopping! 😊"); 
                        history.push('/')}}>
                        Deliver Here
                </button>
                <Link to="/Cart">
                    <button className={classes.closeBtn}>CANCEL</button>
                </Link>
            </form>
        </div>
    )
}
export default Popup;
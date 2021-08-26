import React , {Component} from 'react';
import classes from './Address.module.css';

class Popup extends Component {
    render(){
        if(this.props.buttonPopup===true){
            return (
                <div className={classes.AddressSection}>
                    <h2>Add Your Address</h2>
                    <form className={classes.Address}  onSubmit={this.props.onDeliverBtnClick}>
                        <input type="text" placeholder="Name*" required/>
                        <input type="number" placeholder="Mobile Number*" required/><br></br>
                        <input type="number" placeholder="Pincode*" required/>
                        <input type="text" placeholder="Locality*" required/><br></br>
                        <textarea placeholder="Address (Area and Street)*" rows="3" required/><br></br>
                        <input type="text" placeholder="City/District/Town*" required/>
                        <input type="text" placeholder="State*" required/><br></br>
                        <input type="text" placeholder="Landmark (Optional)"/>
                        <input type="number" placeholder="Alternate Phone (Optional)"/><br></br>
                        <button type="submit" className={classes.deliverHere}>Deliver Here</button>
                        <button className={classes.closeBtn} onClick={this.props.onCloseBtnClick}>CANCEL</button>
                    </form>
                </div>
            )
        }
        else{
            return null;
        }
    }
}
export default Popup;
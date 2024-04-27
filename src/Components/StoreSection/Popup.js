import React , {Component} from 'react';
import classes from './Popup.module.css';
import { Link } from 'react-router-dom';

class Popup extends Component {
    render(){
        if(this.props.buttonPopup===true){
            return (
                <main>
                    <div className={classes.Popup}>
                        <button className={classes.closeBtn} onClick={this.props.onCloseBtnClick}>X</button>
                        <div className={classes.itemImage}>
                            <img src={this.props.currentPos.Url}/>
                        </div>
                        <div className={classes.itemDetails}>
                            <h1>{this.props.currentPos.title}</h1>
                            <p>{this.props.currentPos.description}</p>
                            <h2><del>{this.props.currentPos.prop1}</del></h2>
                            <h2>{this.props.currentPos.prop2}</h2>
                            <h3>{this.props.currentPos.prop3}</h3>
                            <h3>{this.props.currentPos.prop4}</h3>
                            <h4>Free Delivery</h4>
                            <Link to="/Cart">
                                <button className={classes.addToCart}>Add To Cart</button>
                            </Link>
                            <Link to="/Address">
                                <button className={classes.buyNow}>Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </main>
            )
        }
        else{
            return null;
        }
    }
}
export default Popup;
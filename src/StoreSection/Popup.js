import React , {Component} from 'react';
import classes from './Popup.module.css';
import Address from './Address';

class Popup extends Component {
    state = {
        showAddress: false,
    }
    onButtonClick = () => {
        this.setState({showAddress:true})
    }
    onCloseBtnClick = () => {
        this.setState({showAddress:false})
    }
    onDeliverBtnClick = () => {
        alert("your order has been placed \nIt will reach out to you in 7 days \nThank You for shopping! 😊")
    }
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
                            <button className={classes.buyNow} onClick={() => this.onButtonClick()}>Buy Now</button>
                        </div>
                    </div>
                    <Address buttonPopup={this.state.showAddress} onCloseBtnClick={this.onCloseBtnClick} 
                        onDeliverBtnClick={this.onDeliverBtnClick}/>
                </main>
            )
        }
        else{
            return null;
        }
    }
}
export default Popup;
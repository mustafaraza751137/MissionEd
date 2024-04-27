import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const { price, title, qty, Url, mrp } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    }=props;
    return (
        <div className={classes.CartItem}>
            <div className={classes.leftBlock}>
                <img alt="item-img" className={classes.itemImage} src={Url}/>
            </div>
            <div className={classes.rightBlock}>
                <h2>{title}</h2>
                <del><h3>MRP: ₹{mrp}</h3></del>
                <h3>Price: ₹{price}</h3>
                <h3>Qty: {qty}</h3>
                <div className={classes.cartItemActions}>
                    <img 
                        alt="increase" 
                        className={classes.actionIcons} 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                        onClick={()=>onIncreaseQuantity(product)}
                    />
                    <img 
                        alt="decrease" 
                        className={classes.actionIcons} 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={()=>onDecreaseQuantity(product)}
                    />
                    <img 
                        alt="delete" 
                        className={classes.actionIcons} 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        onClick={()=>onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const { price, title, qty, img } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    }=props;
    return (
        <div className={classes.CartItem}>
            <div className={classes.leftBlock}>
                <img alt="item-img" className={classes.itemImage} src={img}/>
            </div>
            <div className={classes.rightBlock}>
                <div>{title}</div>
                <div>Rs. {price}</div>
                <div>Qty: {qty}</div>
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
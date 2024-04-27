import React from 'react';
import CartItem from './CartItem';
// import { Link } from 'react-router-dom';

const Cart = (props) => {
    const {products}=props;
    return (
        <div>
            {/* <Link to="/">
                <li>About</li>
            </Link> */}
            {products.map((product)=>{
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })}
        </div>
    );
}
export default Cart;
import React from 'react';
import Cart from './Cart';

class CartContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        { 
            id:1,
            price: 2466,
            title: 'Fire Boltt Headphones',
            qty: 1,
            img: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/headphone.jpg?raw=true"
        },
        {
            id:2,
            price: 90,
            title: 'Perfume',
            qty: 1,
            img: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/perfume.jpg?raw=true"
        },
        {
            id:3,
            price: 1999,
            title: 'Perfume',
            qty: 1,
            img: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/perfume.jpg?raw=true"
        },
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Hey please dec the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const {products} = this.state;
    let count=0;
    products.forEach((product) => {
      // count += product.qty;
      count++;
    })
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let Total=0;
    products.map((product) => {
      Total += product.qty * product.price;
    })
    return Total;
  }
  render () {
    const { products } = this.state;
    return (
        <div className="cart">
          <Cart 
            products={products}
            onIncreaseQuantity={this.increaseQuantity}
            onDecreaseQuantity={this.decreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
        {/* {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          )
        })} */}
        <h1> count={this.getCartCount()}</h1>
        <h1>Total:{this.getCartTotal()}</h1>
      </div>
    );
  }
}

export default CartContainer;
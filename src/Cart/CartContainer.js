import React from 'react';
import classes from './CartContainer.module.css';
import Cart from './Cart';
import {Link} from 'react-router-dom';

class CartContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        { 
            id:1,
            Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/headphone.jpg?raw=true",
            title: "Fire Boltt Headphones",
            description: "Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance",
            price: 2799,
            mrp: 4999,
            brand: "Fire-Boltt",
            colour: "Black",
            qty: 1,
        },
        {
            id:2,
            Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/perfume.jpg?raw=true",
            title:"Fogg Perfume for Men",
            description: "Fogg Scent Intensio For Men, 100ml",
            price: 296,
            mrp: 500,
            brand: "FOGG",
            colour: "Green",
            qty: 1,
        },
        {
            id:3,
            Url:"https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/earphone.png?raw=true",
            title:"pTron Lite Earphones",
            description: "pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 8Hrs Playtime, Lightweight Ergonomic Neckband, Sweat-Resistant Magnetic Earbuds, Voice Assistant & Mic - (Black)",
            price: 649,
            mrp: 1800,
            brand: "PTron",
            colour: "Black",
            qty: 1,
        },
      ]
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    if (products[index].qty === 1) {
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

  getTotalMRP = () => {
    const {products} = this.state;
    let Total=0;
    products.map((product) => {
      Total += product.qty * product.mrp;
    })
    return Total;
  }

  render () {
    const { products } = this.state;
    return (
      <div className={classes.CartContainer}>
        <div className={classes.CartItems}>
          <Cart 
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
          />
        </div>
        <div className={classes.CartPrice}>
          <h1>No of Items:  {this.getCartCount()}</h1>
          <h1>Total MRP:  <del>₹{this.getTotalMRP()}</del></h1>
          <h1>Discount: ₹{this.getTotalMRP()-this.getCartTotal()}</h1>
          <h1>Total Price:  ₹{this.getCartTotal()}</h1>
          <hr/>
          <Link to="/Address">
            <button className={classes.buyBtn}>Buy Now</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartContainer;
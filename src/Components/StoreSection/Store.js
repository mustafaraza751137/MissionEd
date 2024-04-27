import React , {Component} from 'react';
import classes from './Popup.module.css';
import { Link } from 'react-router-dom';

class Store extends Component {
    constructor () {
        super();
        this.state = {
            itemArr : [
                {
                    Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/headphone.jpg?raw=true",
                    title: "Fire Boltt Headphones",
                    description: "Fire-Boltt Blast 1400 Over -Ear Bluetooth Wireless Headphones with 25H Playtime, Thumping Bass, Lightweight Foldable Compact Design with Google/Siri Voice Assistance",
                    prop1: "MRP: ₹4,999.00",
                    prop2: "Price: ₹2,466.00",
                    prop3: "Brand: Fire-Boltt",
                    prop4: "Colour: Black",
                },
                {
                    Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/watch.jpg?raw=true",
                    title:"Color Fit Pro Smartwatch",
                    description: "Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display,IP68 Waterproof,Heart Rate Monitor,Sleep & Step Tracker,Call & Message Alerts & Long Battery Life (Jet Black)",
                    prop1: "MRP: ₹4,999.00",
                    prop2: "Price: ₹2,799.00",
                    prop3: "Brand: Noise",
                    prop4: "Colour: Jet Black",
                },
                {
                    Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/perfume.jpg?raw=true",
                    title:"Fogg Perfume for Men",
                    description: "Fogg Scent Intensio For Men, 100ml",
                    prop1: "MRP: ₹500.00",
                    prop2: "Price: ₹296.00",
                    prop3: "Brand: FOGG",
                    prop4: "Colour: Green",
                },
                {
                    Url:"https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/earphone.png?raw=true",
                    title:"pTron Lite Earphones",
                    description: "pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 8Hrs Playtime, Lightweight Ergonomic Neckband, Sweat-Resistant Magnetic Earbuds, Voice Assistant & Mic - (Black)",
                    prop1: "MRP: ₹1,800.00",
                    prop2: "Price: ₹649.00",
                    prop3: "Brand: PTron",
                    prop4: "Colour: Black",
                },
                {
                    Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/sneakers.jpg?raw=true",
                    title:"Men's Shoes Sneakers",
                    description: "Castoes Classic Sneakers For Men ( White )",
                    prop1: "MRP: ₹999.00",
                    prop2: "Price: ₹549.00",
                    prop3: "Brand: Castoes",
                    prop4: "Colour: White",
                },
                {
                    Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/wallet.jpg?raw=true",
                    title:"Leather Wallet for Men",
                    description: "LAORENTOU Leather Wallet Men Short Wallet Vintage Cow Leather Casual Man Wallet Purse Standard Brand Wallets (BLACK)",
                    prop1: "MRP: ₹499.00",
                    prop2: "Price: ₹2,49.00",
                    prop3: "Brand: LAORENTOU",
                    prop4: "Colour: Black",
                },
                {
                    Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/think-and-grow-rich.jpg?raw=true",
                    title:"Think and Grow Rich",
                    description: "Think and Grow Rich (DELUXE HARDBOUND EDITION) Hardcover – 1 December 2019 , by Napoleon Hill",
                    prop1: "MRP: ₹349.00",
                    prop2: "Price: ₹299.00",
                    prop3: "Language: English",
                    prop4: "Print Length: 336 pages",
                },
                {
                    Url:"https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/mask.jpg?raw=true",
                    title:"Cotton Face Mask",
                    description: "Lee Cooper Lightweight Cotton Face Mask for Outdoor Protection, Super Breathable & Resuable Cloth - Pack of 2",
                    prop1: "MRP: ₹399.00",
                    prop2: "Price: ₹249.00",
                    prop3: "Brand: Lee Cooper",
                    prop4: "Colour: Multicolour",
                },
            ]
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        const Cards=this.state.itemArr.map((item,pos) =>{
            return(
                <div className={classes.itemBox}>
                    <div  className={classes.itemImage}>
                        <img src={item.Url}/>
                    </div>
                    <div className={classes.itemDetails}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <h2><del>{item.prop1}</del></h2>
                        <h2>{item.prop2}</h2>
                        <h3>{item.prop3}</h3>
                        <h3>{item.prop4}</h3>
                        <h4>Free Delivery</h4>
                        <Link to="/Cart">
                            <button className={classes.addToCart}>Add To Cart</button>
                        </Link>
                        <Link to="/Address">
                            <button className={classes.buyNow}>Buy Now</button>
                        </Link>
                    </div>
                </div>
            );
        })
        return (
            <div class={classes.storeConatainer}>
                {Cards}
            </div>
        )
    }
}
export default Store;
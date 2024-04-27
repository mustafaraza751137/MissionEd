import React , {Component} from 'react';
import classes from './../../Cards.module.css';
import Popup from './Popup';

class Deals extends Component {
    state = {
        showPopup: false,
        currentPos: "",
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
    onOptionClick = (pos) => {
        this.setState({showPopup:true})
        this.setState({currentPos:this.state.itemArr[pos]})
    }
    onCloseBtnClick = () => {
        this.setState({showPopup:false})
    }
    render(){
        const itemCards=this.state.itemArr.map((item,pos) =>{
            return(
                <div className={classes.item}>
                    <img src={item.Url} alt="Item"/>
                    <h2>{item.title}</h2>
                    <button className={classes.Button} onClick={() => this.onOptionClick(pos)}>Buy</button>
                </div>
            );
        })
        return (
            <div className={classes.main}>
                <div className={classes.title}>
                    <h1>DEALS OF THE DAY</h1>
                </div>
                <div className={classes.product}>
                    {itemCards}
                    <Popup buttonPopup={this.state.showPopup} currentPos={this.state.currentPos}  onCloseBtnClick={this.onCloseBtnClick}/>
                </div>
            </div>
        );
    }
}
export default Deals;

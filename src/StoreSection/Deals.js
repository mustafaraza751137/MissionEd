import React , {Component} from 'react';
import classes from './../Cards.module.css'; 
import headphone from './../Images/headphone.jpg';

class Deals extends Component {
    render(){
        this.setState = [
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/headphone.jpg?raw=true",
                title:"Fire Boltt Headphones"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/watch.jpg?raw=true",
                title:"Color Fit Pro Smartwatch"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/perfume.jpg?raw=true",
                title:"Fogg Perfume for Men"
            },
            {
                Url:"https://raw.githubusercontent.com/mustafaraza751137/MissionEd/main/src/Images/earphone.png",
                title:"pTron Lite Earphones"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/sneakers.jpg?raw=true",
                title:"Men's Shoes Sneakers"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/wallet.jpg?raw=true",
                title:"Leather Wallet for Men"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/book.jpg?raw=true",
                title:"Fifty Shades of Grey"
            },
            {
                Url:"https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/amazon.jpg?raw=true",
                title:"Amazon Prime Subscription"
            },
        ];
        return (
            <div className={classes.main}>
                <div className={classes.title}>
                    <h1>DEALS OF THE DAY</h1>
                </div>
                <div className={classes.product}>
                    {this.setState.map((item) =>{
                        return(
                            <div className={classes.item}>
                                <img src={item.Url} alt="Item"/>
                                <h2>{item.title}</h2>
                                <button className={classes.Button}>Buy</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Deals;

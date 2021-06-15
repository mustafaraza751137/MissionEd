import React , {Component} from 'react';
import classes from './Deals.module.css'; 

class Deals extends Component {
    render(){
        this.state = [
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/items/1.jpg",
                title:"Fire Boltt Headphones"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/items/2.jpg",
                title:"Color Fit Pro Smartwatch"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/items/3.jpg",
                title:"Fogg Perfume for Men"
            },
            {
                Url:"https://www.missioned.in/MissionEd_Store_New/assets/img/items/4.jpg",
                title:"pTron Lite Earphones"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/items/5.jpg",
                title:"Men's Shoes Sneakers"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/items/6.jpg",
                title:"Leather Wallet for Men"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/items/7.jpg",
                title:"Fifty Shades of Grey"
            },
            {
                Url:"https://www.missioned.in/MissionEd_Store_New/assets/img/items/8.jpg",
                title:"Amazon Prime Subscription"
            },
        ];
        return (
            <div className={classes.main}>
                <div className={classes.title}>
                    <h1>DEALS OF THE DAY</h1>
                </div>
                <div className={classes.product}>
                    {this.state.map((item) =>{
                        return(
                            <div className={classes.item}>
                                <img src={item.Url} alt="photo"/>
                                <h2>{item.title}</h2>
                                <button className={classes.BuyButton}>Buy</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Deals;
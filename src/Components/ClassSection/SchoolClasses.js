import React , {Component} from 'react';
import classes from './../../Cards.module.css';

class SchoolClasses extends Component {
    render(){
        this.setState = [
            {
                Url: "https://t4.ftcdn.net/jpg/02/46/41/67/240_F_246416782_UJCqkSrMFZn4HyGTBMTPB26nRk4Unik8.jpg",
                title:"8th Std"
            },
            {
                Url: "https://t4.ftcdn.net/jpg/02/46/41/67/240_F_246416799_eesOFBPc0WT9dzmuY4HMtLmzpSfuYxB2.jpg",
                title:"9th Std"
            },
            {
                Url: "https://t3.ftcdn.net/jpg/02/46/41/68/240_F_246416814_Bhbb1440btRKtn8uTMJsX9ZjOg9eXvoY.jpg",
                title:"10th Std"
            },
            {
                Url:"https://t3.ftcdn.net/jpg/02/46/41/68/240_F_246416832_IJTKZxoutxyzlWS4937HNUfV6GcYtZq2.jpg",
                title:"11th Std"
            },
            {
                Url:"https://t3.ftcdn.net/jpg/02/46/41/68/240_F_246416847_irGAZq0s7HpzfwS9oVBveSnGWYaZgVFE.jpg",
                title:"12th Std"
            },
        ];
        return(
            <section className={classes.ClassSection}>
                <div className={classes.title}>
                    <h1>Classes</h1>
                </div>
                <div className={classes.Classes}>
                    {this.setState.map((item) =>{
                        return(
                            <div className={classes.item}>
                                <img src={item.Url} alt="Item"/>
                                <h2>{item.title}</h2>
                                <button className={classes.Button}>See Courses</button>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
export default SchoolClasses;
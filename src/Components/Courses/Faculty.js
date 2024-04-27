import React , {Component} from 'react';
import classes from './../../Cards.module.css';

class Courses extends Component {
    render(){
        this.setState = [
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/iit-bombay.png?raw=true",
                title:"IIT BOMBAY"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/iit-kharagpur.jpg?raw=true",
                title:"IIT KHARAGPUR"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/iit-kanpur.png?raw=true",
                title:"IIT KANPUR"
            },
            {
                Url:"https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/iit-delhi.png?raw=true",
                title:"IIT DELHI"
            },
        ];
        return(
            <section className={classes.FacultySection}>
                <div className={classes.title}>
                    <h1>ALMA MATER OF OUR FACULTY MEMBERS</h1>
                </div>
                <div className={classes.Faculty}>
                    {this.setState.map((item) =>{
                        return(
                            <div className={classes.item}>
                                <img src={item.Url} alt="Item"/>
                                <h2>{item.title}</h2>
                            </div>
                        );
                    })}
                </div>
                <button className={classes.Button}>Join a free class</button>
            </section>
        );
    }
}
export default Courses;
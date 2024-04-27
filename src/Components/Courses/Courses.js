import React , {Component} from 'react';
import classes from './../../Cards.module.css';

class Courses extends Component {
    render(){
        this.setState = [
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/entrepreneurship.png?raw=true",
                title:"Entrepreneurship"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/finance.jpg?raw=true",
                title:"Finance"
            },
            {
                Url: "https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/data-science.jpg?raw=true",
                title:"Data Science"
            },
            {
                Url:"https://github.com/mustafaraza751137/MissionEd/blob/main/src/Images/consultancy.jpg?raw=true",
                title:"Consultancy"
            },
        ];
        return(
            <section className={classes.CourseSection}>
                <div className={classes.title}>
                    <h1>OUR COURSES</h1>
                </div>
                <div className={classes.Courses}>
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
export default Courses;
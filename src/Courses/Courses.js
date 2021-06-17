import React , {Component} from 'react';
import classes from './../Cards.module.css';

class Courses extends Component {
    render(){
        this.setState = [
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/courses/entrepreneneurs.jpg",
                title:"Entrepreneurship"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/courses/Finance.jpg",
                title:"Finance"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/courses/datascience.jpg",
                title:"Data Science"
            },
            {
                Url:"https://www.missioned.in/MissionEd_Store_New/assets/img/courses/Consulting.jpg",
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
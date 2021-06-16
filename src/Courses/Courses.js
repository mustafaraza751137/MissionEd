import React , {Component} from 'react';
import classes from './Courses.module.css';

class Courses extends Component {
    render(){
        this.state = [
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
                <div className={classes.SectionTitle}>
                    <h2>OUR COURSES</h2>
                </div>
                <div className={classes.Courses}>
                    {this.state.map((item) =>{
                        return(
                            <div className={classes.item}>
                                <img src={item.Url} alt="Item"/>
                                <h2>{item.title}</h2>
                                <button className={classes.CourseButton}>See Courses</button>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}
export default Courses;
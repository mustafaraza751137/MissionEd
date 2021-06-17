import React , {Component} from 'react';
import classes from './../Cards.module.css';

class Courses extends Component {
    render(){
        this.setState = [
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/LOGO_IIT%20BOMBAY.jpg",
                title:"IIT BOMBAY"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/IIT_KHARAGPUR.png",
                title:"IIT KHARAGPUR"
            },
            {
                Url: "https://www.missioned.in/MissionEd_Store_New/assets/img/LOGO_IIT%20KANPUR.jpg",
                title:"IIT KANPUR"
            },
            {
                Url:"https://www.missioned.in/MissionEd_Store_New/assets/img/LOGO_IIT%20DELHI.jpg",
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
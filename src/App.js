import Topbar from './Topbar/Topbar';
import classes from './App.module.css';
import Feedback from './Feedback/Feedback';
import NewsLetter from './NewsLetter/NewsLetter';
import Footer from './Footer/Footer';
import CopyRight from './CopyRight/CopyRight';
import React , {Component} from 'react';
import MainStore from './StoreSection/MainStore';
import MainCourses from './Courses/MainCourses';
import MainClasses from './ClassSection/MainClasses';

class App extends Component {
  state = {
    currentPos: 0
  }
  onClassOptionClick = (pos) => {
    this.setState({currentPos: pos})
  }
  onHomeButtonClick = (pos) => {
    this.setState({currentPos: pos})
  }
  render(){
    return(
      <div className={classes.App}>
        <Topbar/>
        <main>
          <MainStore onClassOptionClick={this.onClassOptionClick} currentPos={this.state.currentPos}/>
          <MainCourses onClassOptionClick={this.onClassOptionClick} currentPos={this.state.currentPos}/>
          <MainClasses onClassOptionClick={this.onClassOptionClick} currentPos={this.state.currentPos}/>          
        </main>
        <div className={classes.Feedback}>
          <Feedback/>
        </div>
        <div className={classes.NewsLetter}>
          <NewsLetter/>
        </div>
        <footer className={classes.Footer}>
          <Footer onHomeButtonClick={this.onHomeButtonClick} onClassOptionClick=
          {this.onClassOptionClick} currentPos={this.state.currentPos}/>
        </footer>
            
        <div className={classes.CopyRight}>
          <CopyRight/>
        </div>
        <a href="#" className={classes.BackToTop}>
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>
    );
  }
}

export default App;
import React , {Component} from 'react';
import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import Footer from './Footer/Footer';
import CopyRight from './CopyRight/CopyRight';
import Home from './Home';

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

        <Home onClassOptionClick={this.onClassOptionClick} 
          currentPos={this.state.currentPos}/>

        <Footer onHomeButtonClick={this.onHomeButtonClick} onClassOptionClick=
          {this.onClassOptionClick} currentPos={this.state.currentPos}/>
            
        <CopyRight/>

        <a href="# " className={classes.BackToTop}>
          <i className="fa fa-chevron-up"></i>
        </a>    
      </div>
    );
  }
}

export default App;
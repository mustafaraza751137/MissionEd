import React from 'react';
import classes from './App.module.css';
import Navbar from './Navbar/Topbar';
import Footer from './Footer/Footer';
import CopyRight from './CopyRight/CopyRight';
import Home from './StoreSection/Home';
import MainCourses from './Courses/MainCourses';
import MainClasses from './ClassSection/MainClasses';
import CartContainer from './Cart/CartContainer';
import Address from './StoreSection/Address';
import {Route, Switch} from 'react-router-dom';

const App = (props) => {
  return(
    <div className={classes.App}>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path="/College" component={MainCourses}/>
          <Route exact path="/School" component={MainClasses}/>
          <Route exact path="/Cart" component={CartContainer}/>
          {/* <Route exact path="/Address">
            <Address buttonPopup={true}/>
          </Route>  */}
          {/* component={Address}/> */}
          <Route path="/" component={Home}/>
        </Switch>
      </main>
      <Footer/> 
      <CopyRight/>
    </div>
  );
}

export default App;
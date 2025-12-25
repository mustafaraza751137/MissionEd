import React from 'react';
import classes from './App.module.css';
import Navbar from './Components/Navbar/Topbar';
import Footer from './Components/Footer/Footer';
import CopyRight from './Components/CopyRight/CopyRight';
import Home from './Components/StoreSection/Home';
import MainCourses from './Components/Courses/MainCourses';
import MainClasses from './Components/ClassSection/MainClasses';
import CartContainer from './Components/Cart/CartContainer';
import Address from './Components/StoreSection/Address';
import Product  from './Components/StoreSection/Popup';
import Store  from './Components/StoreSection/Store';
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
          <Route exact path="/Address" component={Address}/>
          <Route exact path="/Product" component={Product}/>
          <Route exact path="/Store" component={Store}/>
          <Route path="/" component={Home}/>
        </Switch>
      </main>
      <Footer/> 
      <CopyRight/>
    </div>
  );
}

export default App;

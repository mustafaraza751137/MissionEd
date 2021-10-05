import React , {useLayoutEffect} from 'react';
import classes from './App.module.css';
import Navbar from './Navbar/Topbar';
import Footer from './Footer/Footer';
import CopyRight from './CopyRight/CopyRight';
import Home from './StoreSection/Home';
import MainCourses from './Courses/MainCourses';
import MainClasses from './ClassSection/MainClasses';
import Cart from './Cart';
import {Route, Switch} from 'react-router-dom';

const App = (props) => {
  return(
    <div className={classes.App}>
      <Navbar/>
      <main>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/College">
            <MainCourses/>
          </Route>
          <Route exact path="/School">
            <MainClasses/> 
          </Route>
          <Route exact path="/Cart">
            <Cart/>
          </Route>
        </Switch>
      </main>

      <Footer/>
          
      <CopyRight/>
    </div>
  );
}

export default App;
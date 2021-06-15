import Topbar from './Topbar/Topbar';
import Section from './Section/Section';
import classes from './App.module.css';
import Deals from './Deals/Deals';
import Study from './Study/Study';
import Feedback from './Feedback/Feedback';
import NewsLetter from './NewsLetter/NewsLetter';
import Footer from './Footer/Footer';
import CopyRight from './CopyRight/CopyRight';
import Refferal from './Refferal/Refferal';

function App() {
  return (
    <div className={classes.App}>
      <Topbar/>
      <Section/>
      <main>
        <div className={classes.product}>
          <div className={classes.deals}>
            <Deals/>
          </div>
          <div className={classes.study}>
            <Study/>
          </div>
        </div>
        <div className={classes.Refferal}>
          <Refferal/>
        </div>
      </main>
      <div className={classes.Feedback}>
        <Feedback/>
      </div>
      <div className={classes.NewsLetter}>
        <NewsLetter/>
      </div>
      <footer className={classes.Footer}>
        <Footer/>
      </footer>
      <div className={classes.CopyRight}>
        <CopyRight/>
      </div>
      <a href="#" class={classes.BackToTop}>
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default App;

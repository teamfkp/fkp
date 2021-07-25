// import logo from './logo.svg';
// import './App.css';
import "./css/main.css"
import Navbar, { NavLinks } from './components/Navbar';
// import Dummydata from './components/Dummydata';
// import Homepage from './components/Homepage';
// import Dummynav from './components/Dummynav';
// import Footer from './components/Footer';
// import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepagemain } from './components/Homepagemain';
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <div className="main-App">
          <Switch>
            <Route path="/" exact component={Homepagemain} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/services" exact component={Services} />
            <Route path="/contactus" exact component={ContactUs} />

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dummydata from './components/Dummydata';
import Homepage from './components/Homepage';
import Dummynav from './components/Dummynav';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Admin } from './components/Admin';
import { Dashboard } from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path={"/"} exact component={Homepage} />
          <Route path={"/admin"} exact component={Admin} />
          <Route path={"/dashboard"} exact component={Dashboard} />
        </Switch>
      </Router>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

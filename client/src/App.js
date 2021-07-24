import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dummydata from './components/Dummydata';
import Homepage from './components/Homepage';
import Dummynav from './components/Dummynav';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Switch>
          <Route />
        </Switch>
      </Router> */}
      <Navbar />
      <Homepage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;

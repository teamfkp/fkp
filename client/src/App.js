import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Dummydata from './components/Dummydata';
import Homepage from './components/Homepage';
import Dummynav from './components/Dummynav';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { Admin } from './components/Admin';
import { Dashboard } from './components/Dashboard';
import { ContactsDisplay } from './components/ContactsDisplay';
import { useState } from 'react';


function App() {
  const history = useHistory();

  const [listen, setListen] = useState(0);

  const temp = () => {
    setListen(listen + 1);
  }
  return (
    <div className="App">
      <Router>
        <Navbar setLogout={temp} listen={listen} />
        <Switch>
          <Route path={"/"} exact component={Homepage} />
          <Route path={"/admin"} exact component={() => <Admin setLogout={temp} />} />
          <PrivateRoute path={"/dashboard"} component={Dashboard} />
          <PrivateRoute path={"/admin/contacts"} exact component={ContactsDisplay} />
          <Route path={"/logout"} exact component={() => <LogoutPage setLogout={temp} />} />
          <Route component={RedirectHome} />
        </Switch>
      </Router>
      <ContactUs />
      <Footer />
    </div>
  );
}

const RedirectHome = (props) => {
  const history = useHistory();
  history.push("/")
  return ""
}

const PrivateRoute = (props) => {
  if (localStorage.getItem("accessToken")) {
    return <Route path={props?.path} exact component={props.component} />;
  } else {
    return null
  }

}

const LogoutPage = (props) => {
  const history = useHistory();
  localStorage.clear();
  props.setLogout();
  // setTimeout(() => {
  history.push("/")
  // }, 2000)
  return "Please wait..!";
}

export default App;

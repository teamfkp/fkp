import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = (props) => {
  const [navstate, setNavState] = useState(0);
  const clickHandle = (e) => {
    setNavState(e);
  }
  return <React.Fragment>
    {/* <Router> */}
    <div style={{ position: "absolute", width: "100%", zIndex: '1' }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div><img src={Logo} width="300" /></div>
        <div style={{ display: "flex" }} className="nav-links-main">
          <Link to="/"><div className={`nav-link ${navstate === 0 && `active`}`} onClick={() => clickHandle(0)}>Home </div></Link>
          <Link to="/aboutus"><div className={`nav-link ${navstate === 1 && `active`}`} onClick={() => clickHandle(1)}>AboutUs</div></Link>
          <Link to="/Portfolio"> <div className={`nav-link ${navstate === 2 && `active`}`} onClick={() => clickHandle(2)}>Portfolio</div></Link>
          <Link to="/services"><div className={`nav-link ${navstate === 3 && `active`}`} onClick={() => clickHandle(3)}>services</div></Link>
          <Link to="/contactus"><div className={`nav-link ${navstate === 4 && `active`}`} onClick={() => clickHandle(4)}>ContactUs</div></Link>

        </div>
      </div>
    </div>
    {/* </Router> */}
  </React.Fragment >

}
export default Navbar
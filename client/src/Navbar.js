import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
        <ul>
          <li className="title"><Link to="/prepr"><a className="active"><b>Skills</b>
            <b style={{ color: "rgb(72, 185, 72)" }}>Marketplace </b> </a></Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><a href="/features">Features</a></li>
          <li><Link to="/services">Services</Link></li>
          <li><a href="/community">Community</a></li>
          <li className="login"> <a href="/login">Login</a> </li>
          <li className="getStarted"><a href="/getStarted"><b>Get Started</b></a></li>
        </ul>
      </div>
    );
}

export default Navbar;

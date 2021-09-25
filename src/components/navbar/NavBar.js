
import './navbar.css';
import React,{useState} from 'react'
import {Link} from'react-router-dom';


const NavBar = () => {
    const [nav,setNav]=useState(document.querySelector(".navbar"));
    const [menu,setMenu]=useState(document.querySelector("#menu-btn"));

    return (
        <header className="header">
              <div id="menu-btn" className="fas fa-bars" onClick={""}></div>
        <Link to="/" className="logo"><span>SA</span> MS</Link>
        <nav className="navbar">
        <Link to="/home" >home</Link>
        <Link to="/vehicules" >vehicules</Link>
        <Link to="/services" >Services</Link>
        <Link to="/reviews" >Reviews</Link>
        <Link to="/contact" >Contact</Link>
        </nav>
        <div id="login-btn">
            <button className="btn" >login</button>
            <i className="far fa-user"></i>
        </div>
        </header>
    )
}

export default NavBar

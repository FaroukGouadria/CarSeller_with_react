
import './navbar.css';
import React from 'react'

const NavBar = () => {
    return (
        <header className="header">
             <div id="menu-btn" class="fas fa-bars"></div>   
        <a href="#" class="logo"><span>SA</span> MS</a>
        <nav class="navbar">
        <a href="#home" >home</a>
        <a href="#vehicules" >vehicules</a>
        <a href="#services" >Services</a>
        <a href="#reviews" >Reviews</a>
        <a href="#contact" >Contact</a>
        </nav>
        <div id="login-btn">
            <button class="btn" >login</button>
            <i class="far fa-user"></i>
        </div>
        </header>
    )
}

export default NavBar

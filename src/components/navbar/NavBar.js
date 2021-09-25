import React from 'react'
import './navbar.css';
export default function NavBar() {
    return (
        <>
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
        
        </>
       
    )
}

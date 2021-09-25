import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/home-img.png";

const home = () => {
    return (
        <section className="home" id="home">
        <h1 className="home-parallax" data-speed="-2">find your car</h1>
        <img className="home-parallax" data-speed="5" src={image} alt="image"/>
        <Link to="#" class="btn home-parallax" data-speed="7">Explore Car</Link>
         </section>
    )
}

export default home

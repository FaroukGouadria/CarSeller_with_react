import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/home-img.png";

const home = () => {
    return (
        <><section className="home" id="home">
            <h1 className="home-parallax" data-speed="-2">find your car</h1>
            <img className="home-parallax" data-speed="5" src={image} alt="" />
            <Link to="#" class="btn home-parallax" data-speed="7">Explore Car</Link>
        </section>
        <section class="icons-container">
                <div class="icons">
                    <i class="fas fa-home"></i>
                    <div class="content">
                        <h3>110+</h3>
                        <p>branches</p>
                    </div>
                </div>
                <div class="icons">
                    <i class="fas fa-car"></i>
                    <div class="content">
                        <h3>5000+</h3>
                        <p>cars sold</p>
                    </div>
                </div>
                <div class="icons">
                    <i class="fas fa-users"></i>
                    <div class="content">
                        <h3>650+</h3>
                        <p>happy clients</p>
                    </div>
                </div>
                <div class="icons">
                    <i class="fas fa-car"></i>
                    <div class="content">
                        <h3>500+</h3>
                        <p>new car</p>
                    </div>
                </div>
            </section></>
    )
}

export default home

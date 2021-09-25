import React from 'react'
import { Link } from 'react-router-dom'
import "./vehicules.css"
import vehicule1 from"../../images/vehicle-1.png";
import vehicule2 from "../../images/vehicle-2.png";
import vehicule3 from "../../images/vehicle-3.png";
import vehicule4 from "../../images/vehicle-4.png";
import vehicule5 from "../../images/vehicle-5.png";
import vehicule6 from "../../images/vehicle-6.png";
const vehicules = () => {
    return (
         <section class="vehicles" id="vehicules">
    <h1 class="heading">popular <span>vehicles</span></h1>

    <div class=" swiper vehicles-slider">
        <div class="swiper-wrapper">
            <div class="swiper-slide box">
                <img src={vehicule1} alt="car1" />
                <div class="content">
                    <h3>new Model</h3>
                    <div class="price"><span>price: </span>$65000/-</div>
                    <p>
                        new
                        <span class="fas fa-circle"></span> 2021
                        <span class="fas fa-circle"></span> automatic
                        <span class="fas fa-circle"></span> petrol
                        <span class="fas fa-circle"></span> 183mph
                    </p>
                    <Link href="#" class="btn">check out</Link>
                </div>
            </div>
            <div class="swiper-slide box">
                <img src={vehicule2} alt="car1" />
                <div class="content">
                    <h3>new Model</h3>
                    <div class="price"><span>price: </span>$65000/-</div>
                    <p>
                         new
                        <span class="fas fa-circle"></span> 2021
                        <span class="fas fa-circle"></span> automatic
                        <span class="fas fa-circle"></span> petrol
                        <span class="fas fa-circle"></span> 183mph
                    </p>
                    <Link href="#" class="btn">check out</Link>
                </div>
            </div>
            <div class="swiper-slide box">
                <img src={vehicule3} alt="car1" />
                <div class="content">
                    <h3>new Model</h3>
                    <div class="price"><span>price: </span>$65000/-</div>
                    <p>
                          new
                        <span class="fas fa-circle"></span> 2021
                        <span class="fas fa-circle"></span> automatic
                        <span class="fas fa-circle"></span> petrol
                        <span class="fas fa-circle"></span> 183mph
                    </p>
                    <Link href="#" class="btn">check out</Link>
                </div>
            </div>
            <div class="swiper-slide box">
                <img src={vehicule4} alt="car1" />
                <div class="content">
                    <h3>new Model</h3>
                    <div class="price"><span>price: </span>$65000/-</div>
                    <p>
                        new
                        <span class="fas fa-circle"></span> 2021
                        <span class="fas fa-circle"></span> automatic
                        <span class="fas fa-circle"></span> petrol
                        <span class="fas fa-circle"></span> 183mph
                    </p>
                    <Link href="#" class="btn">check out</Link>
                </div>
            </div>
            <div class="swiper-slide box">
                <img src={vehicule5} alt="car1" />
                <div class="content">
                    <h3>new Model</h3>
                    <div class="price"><span>price: </span>$65000/-</div>
                    <p>
                          new
                        <span class="fas fa-circle"></span> 2021
                        <span class="fas fa-circle"></span> automatic
                        <span class="fas fa-circle"></span> petrol
                        <span class="fas fa-circle"></span> 183mph
                    </p>
                    <Link href="#" class="btn">check out</Link>
                </div>
            </div>
            <div class="swiper-slide box">
                <img src={vehicule6} alt="car1" />
                <div class="content">
                    <h3>new Model</h3>
                    <div class="price"><span>price: </span>$65000/-</div>
                    <p>
                        new
                        <span class="fas fa-circle"></span> 2021
                        <span class="fas fa-circle"></span> automatic
                        <span class="fas fa-circle"></span> petrol
                        <span class="fas fa-circle"></span> 183mph
                    </p>
                    <Link href="#" class="btn">check out</Link>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</section>
    )
}

export default vehicules

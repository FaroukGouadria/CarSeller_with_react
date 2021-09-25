import React from 'react'
import { Link } from 'react-router-dom'
import "./Services.css"
const Services = () => {
    return (
        <section class="services" id="services">
    <h1 class="heading"> our <span>services</span></h1>
    <div class="box-container">
        <div class="box">
            <i class="fas fa-car"></i>
            <h3>car selling</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, non?</p>
            <Link to="#" class="btn">read more</Link>
        </div>
        <div class="box">
            <i class="fas fa-tools"></i>
            <h3>parts repair</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, non?</p>
            <Link to="#" class="btn">read more</Link>
        </div>
        <div class="box">
            <i class="fas fa-car-crash"></i>
            <h3>car insurance</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, non?</p>
            <Link to="#" class="btn">read more</Link>
        </div>
        <div class="box">
            <i class="fas fa-car-battery"></i>
            <h3>battery replacement</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, non?</p>
            <Link to="#" class="btn">read more</Link>
        </div>
        <div class="box">
            <i class="fas fa-gas-pump"></i>
            <h3>oil change</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, non?</p>
            <Link to="#" class="btn">read more</Link>
        </div>
        <div class="box">
            <i class="fas fa-headset"></i>
            <h3>24/7 support</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, non?</p>
            <Link to="#" class="btn">read more</Link>
        </div>
    </div>
</section>
    )
}

export default Services

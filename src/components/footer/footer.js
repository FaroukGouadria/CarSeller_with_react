import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
       <section className="footer">
    <div className="box-container">
        <div className="box">
            <h3>our branches</h3>
        <Link to=""><i className="fas fa-map-marker-alt"></i>tunisia</Link>
        <Link to=""><i className="fas fa-map-marker-alt"></i>france</Link>
        <Link to=""><i className="fas fa-map-marker-alt"></i>UK</Link>
        <Link to=""><i className="fas fa-map-marker-alt"></i>America</Link>
        <Link to=""><i className="fas fa-map-marker-alt"></i>spain</Link>
        </div>
        <div class="box">
            <h3>quick links</h3>
        <Link to=""><i className="fas fa-arrow-right"></i>home</Link>
        <Link to=""><i className="fas fa-arrow-right"></i>vehicules</Link>
        <Link to=""><i className="fas fa-arrow-right"></i>Services</Link>
        <Link to=""><i className="fas fa-arrow-right"></i>Reviews</Link>
        <Link to=""><i className="fas fa-arrow-right"></i>Contact</Link>
        </div>

        <div class="box">
            <h3>About Us</h3>
        <Link to="#"><i className="fas fa-phone"></i>+216 53060972</Link>
        <Link to="#"><i className="fas fa-user"></i>gouadria farouk</Link>
        <Link to="#"><i className="fas fa-envelope"></i>gouadriaafar@gmail.com</Link>
        <Link to="#"><i className="fas fa-map-marker-alt"></i>tunisia , kairouan - 3100</Link>
        </div>

         <div class="box">
            <h3>Social Media</h3>
        <Link to="#"><i className="fab fa-facebook-f"></i>facebook</Link>
        <Link to="#"><i className="fab fa-instagram"></i>instagram</Link>
        <Link to="#"><i className="fab fa-github"></i>gitHub</Link>
        <Link to="#"><i className="fab fa-linkedin-in"></i>linkedIn</Link>
        
        </div>
        
    </div>
    <div className="credit"> &copy; by farouk gouadria | all rights reserved!!</div>
</section>
    )
}

export default footer

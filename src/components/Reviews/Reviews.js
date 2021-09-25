import React from 'react'
import { Link } from 'react-router-dom'
import "./Reviews.css"
import client1 from "../../images/pic-1.png"
import client2 from "../../images/pic-2.png";
import client3 from "../../images/pic-3.png";
import client4 from "../../images/pic-4.png";
import client5 from "../../images/pic-5.png"
import client6 from "../../images/pic-6.png";
const Reviews = () => {
    return (
        <section className="reviews" id="reviews">
        <h1 className="heading">client's <span>review</span></h1>
        <div className="swiper reviews-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide box">
                    <img src={client1} alt=""/>
                    <div className="content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolor.</p>
                        <h3>Gouadria farouk</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <img src={client2} alt=""/>
                    <div className="content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolor.</p>
                        <h3>Gouadria farouk</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <img src={client3} alt=""/>
                    <div className="content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolor.</p>
                        <h3>Gouadria farouk</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <img src={client4} alt=""/>
                    <div className="content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolor.</p>
                        <h3>Gouadria farouk</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <img src={client5} alt=""/>
                    <div className="content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolor.</p>
                        <h3>Gouadria farouk</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide box">
                    <img src={client6} alt=""/>
                    <div className="content">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, dolor.</p>
                        <h3>Gouadria farouk</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </section>
    )
}

export default Reviews

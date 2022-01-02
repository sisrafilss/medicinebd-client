import React from 'react';
import { Link } from 'react-router-dom';

const CarouselChild = ({ active, carousel }) => {
    return (
        <div className={`carousel-item ${active ? 'active' : ''} carousel-img`}>
            <img src={carousel.pic} class="d-block w-100 h-100" alt="..." />
            <div class="carousel-caption d-md-block">
                <h1>Taking <span>Good</span> <br /> Care Of Yourself</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci <br /> quae dolorum in
                    molestiae
                    corrupti.</p>

                <div class="slider-btn">
                    <button class=" custom-btn"><Link to="/allproduct">View All Product</Link></button>
                    <button class="custom-btn">Book</button>
                </div>
            </div>
        </div>
    );
};

export default CarouselChild;
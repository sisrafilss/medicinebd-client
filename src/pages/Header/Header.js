import React from 'react';
import './Header.css'

// const bgImg = [
//     {
//         pic1: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a1.jpg"

//     },
//     {
//         pic2: "https://macy.7uptheme.net/wp-content/uploads/2019/09/a1.jpg"

//     },
// ];

const Header = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active carousel-img">
                    <img src="https://macy.7uptheme.net/wp-content/uploads/2019/09/a1.jpg" class="d-block w-100 h-100" alt="..." />
                    <div class="carousel-caption d-md-block">
                        <h1>Taking <span>Good</span> <br /> Care Of Yourself</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci <br /> quae dolorum in
                            molestiae
                            corrupti.</p>

                        <div class="slider-btn">
                            <button class=" custom-btn">View All Product</button>
                            <button class="custom-btn">Book</button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item carousel-img">
                    <img src="https://macy.7uptheme.net/wp-content/uploads/2019/09/a2.jpg" class="d-block w-100 h-100" alt="..." />
                    <div class="carousel-caption  d-md-block">
                        <h1>Committed To Trusted Health 's <span>Care</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci <br /> quae dolorum in
                            molestiae
                            corrupti.</p>
                        <div class="slider-btn">
                            <button class="custom-btn">View All Product</button>
                            <button class="custom-btn">Book</button>
                        </div>
                    </div>
                </div>
                <div class="carousel-item carousel-img">
                    <img src="https://macy.7uptheme.net/wp-content/uploads/2019/09/a3.jpg" class="d-block w-100 h-100 img-fluid" alt="..." />
                    <div class="carousel-caption  d-md-block">
                        <h1>Fastest Our <span>Delivery</span></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius adipisci <br /> quae dolorum in
                            molestiae
                            corrupti.</p>
                        <div class="slider-btn">
                            <button class="custom-btn">View All Product</button>
                            <button class="custom-btn">Book </button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Header;
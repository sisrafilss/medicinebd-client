import React from 'react';
import { Link } from "react-router-dom";
import './About.css'

// https://medsy-modern.vercel.app/_next/static/images/fast-delivery-d1a2ae4a96283c574f087b65dea16637.png

// https://medsy-modern.vercel.app/_next/static/images/fast-delivery-d1a2ae4a96283c574f087b65dea16637.png

// https://medsy-modern.vercel.app/_next/static/images/custom-order-425fa4b0a9ae0d3bd06b812e162a0374.png

// https://medsy-modern.vercel.app/_next/static/images/female-care-087fe8665fae569c7a754591918f6878.png

const About = () => {
    return (
        <div>
            <div className="about-bg d-flex justify-content-center align-items-center">
                <h2 className="text-center explore-head"> <Link className="item" to="/home">Home</Link> || About Us</h2>
            </div>

            <div className="all-services">
                <div>
                    <p> --- OUR ALL---</p>
                    <h2>Provided Sevices</h2>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-5.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Car Rental Services</h3>
                        <p className='text-center'>100+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-6.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Hotel Booking</h3>
                        <p className='text-center'>65+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-7.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Restaurent</h3>
                        <p className='text-center'>90+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid " src="https://detour.hibootstrap.com/images/service/service-8.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Club & Bar</h3>
                        <p className='text-center'>45+ Listing</p>
                    </div>
                </div>
            </div>   <div className="all-services">
                <div>
                    <p> --- OUR ALL---</p>
                    <h2>Provided Sevices</h2>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-5.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Car Rental Services</h3>
                        <p className='text-center'>100+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-6.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Hotel Booking</h3>
                        <p className='text-center'>65+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid" src="https://detour.hibootstrap.com/images/service/service-7.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Restaurent</h3>
                        <p className='text-center'>90+ Listing</p>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex justify-content-center d-flex align-items-center">
                            <img className="img-fluid " src="https://detour.hibootstrap.com/images/service/service-8.png" alt="" />
                        </div>
                        <h3 className='text-center service-title'>Club & Bar</h3>
                        <p className='text-center'>45+ Listing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
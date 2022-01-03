import React from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";

import './ViewDeatilsPage.css'

const ViewDeatilsPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                        <h4>Adovas</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolore debitis saepe in animi, odio nisi asperiores dolor nobis dolorum quasi similique amet nemo vitae facere tempore, sapiente eveniet perferendis ad reprehenderit. Ut officiis at excepturi sit quis accusamus voluptatibus atque quae! Repudiandae reprehenderit laboriosam est assumenda nisi, nobis totam!</p>
                        <p className='price'>$200</p>
                    </div>
                    <div className="col-md-6 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstName", { required: true, maxLength: 20 })} />
                            <br />
                            <br />
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            <br />
                            <br />
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                            <br />
                            <br />
                            <input type="number" {...register("age", { min: 18, max: 99 })} />
                            <br />
                            <br />
                            <input className='submit-btn' type="submit"
                                value="Add To Cart" />
                        </form>
                    </div>
                </div>

                <div className="row">
                    <h2 className='text-center mt-5'>YOU MAY ALSO LIKE…</h2>
                    <div className="col-md-4 like-img mt-4 p-2 ">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                    <div className="col-md-4 like-img mt-4 p-2">
                        <img className='img-fluid shadow-sm' src="https://i.ibb.co/NsQ4F3m/p2.png" alt="" />
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ViewDeatilsPage;
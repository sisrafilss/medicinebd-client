import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import HomeProducts from "../HomeProducts/HomeProducts";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header></Header>
      <Testimonials />
      <HomeProducts />
      <Footer></Footer>
    </div>
  );
};

export default Home;

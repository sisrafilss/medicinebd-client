import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import BabyProducts from "../HomeProducts/BabyProducts";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header></Header>
      <Testimonials />
      <BabyProducts />
      <Footer></Footer>
    </div>
  );
};

export default Home;

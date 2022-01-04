import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Newsletter from "../Newsletter/Newsletter";
import HomeProducts from "../HomeProducts/HomeProducts";
import Footer from "../../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import UploadPreccription from "../UploadPreccription/UploadPreccription";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Newsletter />
      <UploadPreccription />
      <HomeProducts />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Newsletter from "../Newsletter/Newsletter";
import HomeProducts from "../HomeProducts/HomeProducts";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Newsletter />
      <HomeProducts />
      <Footer />
    </>
  );
};

export default Home;

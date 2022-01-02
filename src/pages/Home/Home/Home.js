import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";
import HomeProducts from "../HomeProducts/HomeProducts";

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

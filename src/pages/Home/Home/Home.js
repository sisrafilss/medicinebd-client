import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

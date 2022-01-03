import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
import Newsletter from "../Newsletter/Newsletter";
import HomeProducts from "../HomeProducts/HomeProducts";
import Footer from "../../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Newsletter />
      <HomeProducts />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;

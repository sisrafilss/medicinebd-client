import { Grid, Item } from "@mui/material";
import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Shared/Navigation/Navigation";
<<<<<<< HEAD
import Prescription from "../Prescription/Prescription";


const Home = () => {
  return (
    <div>
      <Navigation />
      <h2 className="text-center display-2 my-5">Welcome to MedicineBD</h2>
      <h2>This is Home Page!</h2>
      <Prescription />
=======
import Newsletter from "../Newsletter/Newsletter";
import HomeProducts from "../HomeProducts/HomeProducts";
import Footer from "../../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import UploadPreccription from "../UploadPreccription/UploadPreccription";
import ServiceSummary from "../ServiceSummary/ServiceSummary";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <ServiceSummary />
      <Newsletter />
      <UploadPreccription />
      <HomeProducts />
      <Testimonials />
      <ContactForm />
>>>>>>> eb2824287e82c6f96bd700486f9cb56e48a1cbc2
      <Footer />
    </>
  );
};

export default Home;

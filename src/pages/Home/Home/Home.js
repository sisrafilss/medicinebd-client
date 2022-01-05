import { Grid, Item } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Prescription from "../Prescription/Prescription";


const Home = () => {
  return (
    <div>
      <Navigation />
      <h2 className="text-center display-2 my-5">Welcome to MedicineBD</h2>
      <h2>This is Home Page!</h2>
      <Prescription />
      <Footer />
    </div>
  );
};

export default Home;

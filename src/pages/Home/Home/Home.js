import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Newsletter from "../Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Newsletter />
      <h2 className="text-center display-2 my-5">Welcome to MedicineBD</h2>
      <h2>This is Home Page!</h2>
      <Footer />
    </div>
  );
};

export default Home;

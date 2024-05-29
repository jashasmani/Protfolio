import React from "react";
import Steps from "../Projects/Steps";
import Footer from "../Footer/Footer";

const Moreproject = ({ isDarkMode }) => {
  return (
    <section className="container py-5">
      <div className="d-flex flex-column justify-content-center ">
        <h1
          className="mb-5 mt-5 text-center"
          style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
        >
          Projects
        </h1>
        <Steps isDarkMode={isDarkMode} />
        <Footer/>
      </div>
    </section>
  );
};

export default Moreproject;

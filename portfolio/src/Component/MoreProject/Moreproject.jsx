import React from "react";
import Steps from "../Projects/Steps";

const Moreproject = ({ isDarkMode }) => {
  return (
    <section className="container-1">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="d-flex flex-column justify-content-center">
            <h1
              className="mb-5 mt-5 text-center"
              style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
            >
              Projects
            </h1>
            <Steps isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moreproject;

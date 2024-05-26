import React from "react";
import "./project.css";
import Steps from "./Steps";
import { Button } from "antd";

const Projects = ({ isDarkMode }) => {
  return (
    <>
      {/* <section className="container-11"> 
      <div className="ro">
      <div className="col-md-12 mx-auto">
      */}
        <div className="d-flex flex-column justify-content-center">
          <h1
            className="mb-5 mt-5 text-center"
            style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "600" }}
          >
            Projects
          </h1>
          <Steps isDarkMode={isDarkMode} />
        </div>
      {/* 
      </div>
      </div> 
    </section>  */}
    </>
  );
};

export default Projects;

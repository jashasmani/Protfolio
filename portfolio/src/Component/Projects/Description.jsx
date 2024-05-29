import React from "react";

import im1 from "./image.png";
import airline from "./file.png";
import grocery from "./grocery.png";

const description = (
  <div className="arrange">
    <h5 className="project-info">
      The "
      <span className="highlight">
        Interview Catalyst using Crowdsourcing Method
      </span>
      " project optimizes the interview process by leveraging the{" "}
      <span className="highlight">MERN Stack</span> (MongoDB, ExpressJS,
      ReactJS, NodeJS). This platform utilizes{" "}
      <span className="highlight">MongoDB</span> for data storage,
      <span className="highlight">ExpressJS</span> for application framework,{" "}
      <span className="highlight">ReactJS</span> for building user interfaces,
      and <span className="highlight">NodeJS</span> for server-side operations,
      enhancing efficiency and scalability.
    </h5>
    <div className="d-flex  flex-row justify-content-center">
      <img src={im1} alt="img" className="project-img" />
    </div>
  </div>
);

const description1 = (
  <div className="arrange-rev">
    <div className="d-flex  flex-row justify-content-center">
      <img src={airline} alt="img" className="project-img" />
    </div>
    <h5 className="project-info">
      <span className="highlight">SkyOps Pro</span> is an{" "}
      <span className="highlight">Airline Management System</span> using React
      for the frontend and <span className="highlight">Spring Boot</span> for
      the backend. It supports User and Admin roles, offering features like{" "}
      <span className="highlight">login</span>,{" "}
      <span className="highlight">flight search</span>,{" "}
      <span className="highlight">booking</span>, and{" "}
      <span className="highlight">ticket download</span>
      for users, and flight management for admins. The system uses{" "}
      <span className="highlight">MySQL</span> for the database, enhancing
      efficiency in airline operations.
    </h5>
  </div>
);

const description2 = (
  <div className="arrange">
    <h5 className="project-info">
      The <span className="highlight">Grocery Store</span> project is a web
      application using <span className="highlight">HTML</span>,{" "}
      <span className="highlight">CSS</span>,
      <span className="highlight">JavaScript</span>, and{" "}
      <span className="highlight">JDBC</span>. It allows users to browse,
      select, and purchase groceries online, with{" "}
      <span className="highlight">JDBC</span> managing database connections for
      user data, inventory, and order processing.
    </h5>

    <div className="d-flex  flex-row justify-content-center">
      <img src={grocery} alt="img" className="project-img" />
    </div>
  </div>
);

export { description, description1, description2 };

import React from "react";
import { SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import { SiMicropython } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

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
      <span className="highlight"> ExpressJS</span> for application framework,{" "}
      <span className="highlight">ReactJS</span> for building user interfaces,
      and <span className="highlight">NodeJS</span> for server-side operations,
      enhancing efficiency and scalability.
      <div style={{ marginTop: "1rem" }}>
        <FaReact style={{ fontSize: "24px", marginRight: "10px" }} />
        <IoLogoNodejs style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiExpress style={{ fontSize: "24px", marginRight: "10px" }} />
        <BiLogoMongodb style={{ fontSize: "24px", marginRight: "10px" }} />
      </div>
    </h5>
    {/* <div className="d-flex  flex-row justify-content-center">
      <img src={im1} alt="img" className="project-img" />
    </div> */}
  </div>
);

const description1 = (
  <div className="arrange-rev">
    {/* <div className="d-flex  flex-row justify-content-center">
      <img src={airline} alt="img" className="project-img" />
    </div> */}
    <h5 className="project-info">
      <span className="highlight">SkyOps Pro</span> is an{" "}
      <span className="highlight">Airline Management System</span> using <span className="highlight">React </span>
      for the frontend and <span className="highlight">Spring Boot</span> for
      the backend. It supports User and Admin roles, offering features like{" "}
      <span className="highlight">login</span>,{" "}
      <span className="highlight">flight search</span>,{" "}
      <span className="highlight">booking</span>, and{" "}
      <span className="highlight">ticket download </span>
      for users, and flight management for admins. The system uses{" "}
      <span className="highlight">MySQL</span> for the database, enhancing
      efficiency in airline operations.
      <div style={{ marginTop: "1rem" }}>
        <FaReact style={{ fontSize: "24px", marginRight: "10px" }} />
        <TbBrandMysql style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiSpringboot  style={{ fontSize: "24px", marginRight: "10px" }} />
      </div>
    </h5>
  </div>
);

const ReadMeWiz = (
  <div className="arrange">
    <h5 className="project-info">
      <span className="highlight">ReadMeWiz</span> is a web application built
      using <span className="highlight">React.js</span>,{" "}
      <span className="highlight">Gemini</span>, and{" "}
      <span className="highlight">Flask</span>. It simplifies the process of
      project documentation by generating README.md files automatically. Users
      can efficiently create and update project documentation, enhancing project
      management and collaboration.
      <div style={{ marginTop: "1rem" }}>
        <FaReact style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiFlask style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiMicropython style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiGooglegemini style={{ fontSize: "24px", marginRight: "10px" }} />
      </div>
    </h5>
  </div>
);

const TSA = (
  <div className="arrange">
    <h5 className="project-info">
      <span className="highlight">TWITTER-SENTIMENT-ANALYSIS-NLP </span>
      project uses{" "}
      <span className="highlight">Natural Language Processing</span> to classify
      tweets as positive or negative, providing insights into public opinion on
      topics, products, or events. It integrates{" "}
      <span className="highlight">React</span> for the frontend and{" "}
      <span className="highlight">Flask</span> for the backend, enabling
      user-friendly interaction and efficient data processing.
      <div style={{ marginTop: "1rem" }}>
        <FaReact style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiFlask style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiMicropython style={{ fontSize: "24px", marginRight: "10px" }} />
      </div>
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
      <div style={{ marginTop: "1rem" }}>
        <FaHtml5 style={{ fontSize: "24px", marginRight: "10px" }} />
        <FaCss3 style={{ fontSize: "24px", marginRight: "10px" }} />
        <IoLogoJavascript style={{ fontSize: "24px", marginRight: "10px" }} />
      </div>
    </h5>

    {/* <div className="d-flex  flex-row justify-content-center">
      <img src={grocery} alt="img" className="project-img" />
    </div> */}
  </div>
);

const TechCurrent = (
  <div className="arrange">
    <h5 className="project-info">
      <span className="highlight">TechCurrent</span> is a
      <span className="highlight"> React-based application</span> integrating
      <span className="highlight"> web scraping</span> and
      <span className="highlight"> Flask</span>. It delivers
      <span className="highlight"> daily technology news updates</span>{" "}
      efficiently by <span className="highlight">aggregating content</span> from
      various sources, providing a{" "}
      <span className="highlight">seamless user experience</span>.
      <div style={{ marginTop: "1rem" }}>
        <FaReact style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiFlask style={{ fontSize: "24px", marginRight: "10px" }} />
        <SiMicropython style={{ fontSize: "24px", marginRight: "10px" }} />
      </div>
    </h5>
  </div>
);

export { description, description1, description2, TechCurrent, TSA, ReadMeWiz };

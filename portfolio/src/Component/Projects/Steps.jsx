import React, { useState } from "react";
import { Steps, Button } from "antd";
import im1 from "./image.png";
import airline from "./file.png";
import grocery from "./grocery.png";
import { useNavigate } from "react-router";

import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";



const description = (
  <div className="arrange">
    <h5 className="project-info">
      The "Interview Catalyst using Crowdsourcing Method" project optimizes the
      interview process by leveraging the MERN Stack (MongoDB, ExpressJS,
      ReactJS, NodeJS). This platform utilizes MongoDB for data storage,
      ExpressJS for application framework, ReactJS for building user interfaces,
      and NodeJS for server-side operations, enhancing efficiency and
      scalability.
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
      SkyOps Pro is an Airline Management System using React for the frontend
      and Spring Boot for the backend. It supports User and Admin roles,
      offering features like login, flight search, booking, and ticket download
      for users, and flight management for admins. The system uses MySQL for the
      database, enhancing efficiency in airline operations.
    </h5>
  </div>
);
const description2 = (
  <div className="arrange">
    <h5 className="project-info">
      The Grocery Store project is a web application using HTML, CSS,
      JavaScript, and JDBC. It allows users to browse, select, and purchase
      groceries online, with JDBC managing database connections for user data,
      inventory, and order processing.
    </h5>

    <div className="d-flex  flex-row justify-content-center">
      <img src={grocery} alt="img" className="project-img" />
    </div>
  </div>
);

const StepsReact = ({ isDarkMode }) => {
  const [showMore, setShowMore] = useState(false);
  const nav = useNavigate();

  const items = [
    {
      title: <h2 style={{ fontWeight: "600" }}>Interview-Catalyst</h2>,
      description,
      status: "finish",
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: <h2 style={{ fontWeight: "600" }}>SkyOps-Pro</h2>,
      status: "finish",
      description: description1,
      icon: <Brightness1OutlinedIcon />,
    },
    {
      title: <h2 style={{ fontWeight: "600" }}>Grocery Store</h2>,
      status: "finish",
      description: description2,
      icon: <Brightness1OutlinedIcon />,
    },
  ];

  const displayedItems = showMore ? items : items.slice(0, 10);

  return (
    <div className={isDarkMode ? "step-bar" : "step-bar-black"}>
      <Steps
        direction="vertical"
        style={{
          fontSize: "1.2rem",
          fontFamily: "Quicksand",
        }}
        current={1}
        items={displayedItems}
      />
      <div className="btn-center">
        <Button className="rm-border" onClick={()=>nav('/project')}>Show All</Button>
      </div>
    </div>
  );
};

export default StepsReact;
